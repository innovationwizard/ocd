import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { syncToGit } from "@/lib/git-sync"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { opusId, repositoryPath, commitMessage, push } = await request.json()

    if (!repositoryPath || typeof repositoryPath !== "string") {
      return NextResponse.json(
        { error: "repositoryPath is required" },
        { status: 400 }
      )
    }

    if (!commitMessage || typeof commitMessage !== "string") {
      return NextResponse.json(
        { error: "commitMessage is required" },
        { status: 400 }
      )
    }

    const result = await syncToGit({
      repositoryPath,
      commitMessage,
      push: Boolean(push),
      authorName: session.user.name || 'OCD User',
      authorEmail: session.user.email || 'user@ocd.local'
    })

    // Update opus with last commit info
    if (result.success && result.commitHash && opusId) {
      await prisma.opus.update({
        where: { id: opusId },
        data: {
          lastCommitHash: result.commitHash,
          lastCommitAt: new Date(),
          ...(result.pushedToRemote && { lastPushAt: new Date() })
        }
      }).catch(err => {
        console.error("Failed to update opus with commit info:", err)
        // Non-fatal error
      })
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to sync to git", details: String(error) },
      { status: 500 }
    )
  }
}

