import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { getGitStatus } from "@/lib/git-sync"

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { repositoryPath } = await request.json()
    
    if (!repositoryPath || typeof repositoryPath !== "string") {
      return NextResponse.json(
        { error: "repositoryPath is required" },
        { status: 400 }
      )
    }

    const status = await getGitStatus(repositoryPath)
    return NextResponse.json(status)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get git status", details: String(error) },
      { status: 500 }
    )
  }
}

