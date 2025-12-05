"use client"

import { useState, useEffect } from "react"
import { GitBranch, Upload, Check, X, AlertCircle } from "lucide-react"

interface GitSyncModalProps {
  opusId: string
  repositoryPath: string
  itemTitle: string
  defaultCommitMessage: string
  isOpen: boolean
  onClose: () => void
  onComplete: (committed: boolean, pushed: boolean) => void
}

export function GitSyncModal({
  opusId,
  repositoryPath,
  itemTitle,
  defaultCommitMessage,
  isOpen,
  onClose,
  onComplete
}: GitSyncModalProps) {
  const [commitMessage, setCommitMessage] = useState(defaultCommitMessage)
  const [shouldPush, setShouldPush] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<any>(null)
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    if (isOpen) {
      setCommitMessage(defaultCommitMessage)
      setShouldPush(false)
      setResult(null)
      void fetchGitStatus()
    }
  }, [isOpen, defaultCommitMessage])

  const fetchGitStatus = async () => {
    try {
      const response = await fetch("/api/git/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repositoryPath })
      })
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error("Failed to fetch git status:", error)
      setStatus({ success: false, error: String(error) })
    }
  }

  const handleSync = async () => {
    setLoading(true)
    setResult(null)
    try {
      const response = await fetch("/api/git/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opusId,
          repositoryPath,
          commitMessage,
          push: shouldPush
        })
      })

      const data = await response.json()
      setResult(data)

      if (data.success) {
        setTimeout(() => {
          onComplete(true, data.pushedToRemote || false)
          onClose()
        }, 2000)
      }
    } catch (error) {
      console.error("Git sync failed:", error)
      setResult({ success: false, error: String(error) })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold text-slate-900">Commit & Push to GitHub</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-md">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Git Status */}
        {status && (
          <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            {status.success ? (
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Branch:</strong> {status.branch}</p>
                {status.ahead && status.ahead > 0 && (
                  <p className="text-amber-600">↑ {status.ahead} commits ahead</p>
                )}
                {status.behind && status.behind > 0 && (
                  <p className="text-amber-600">↓ {status.behind} commits behind</p>
                )}
                {status.staged && status.staged.length > 0 && (
                  <p><strong>Staged:</strong> {status.staged.length} files</p>
                )}
                {status.modified && status.modified.length > 0 && (
                  <p><strong>Modified:</strong> {status.modified.length} files</p>
                )}
                {status.created && status.created.length > 0 && (
                  <p><strong>New:</strong> {status.created.length} files</p>
                )}
                {status.files && status.files.length === 0 && (
                  <p className="text-slate-500">No changes to commit</p>
                )}
              </div>
            ) : (
              <div className="text-sm text-rose-600">
                <AlertCircle className="h-4 w-4 inline mr-1" />
                {status.error || "Failed to get git status"}
              </div>
            )}
          </div>
        )}

        {/* Commit Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Commit Message
          </label>
          <textarea
            value={commitMessage}
            onChange={(e) => setCommitMessage(e.target.value)}
            className="w-full h-32 rounded-md border border-slate-300 p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-500"
            placeholder="Enter commit message..."
          />
        </div>

        {/* Push Option */}
        <div className="mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={shouldPush}
              onChange={(e) => setShouldPush(e.target.checked)}
              className="rounded border-slate-300"
            />
            <span className="text-sm text-slate-700">Push to GitHub after commit</span>
          </label>
        </div>

        {/* Result */}
        {result && (
          <div className={`mb-4 rounded-md p-3 ${
            result.success ? "bg-green-50 text-green-800" : "bg-rose-50 text-rose-800"
          }`}>
            {result.success ? (
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>
                  {result.pushedToRemote 
                    ? "Committed and pushed successfully!" 
                    : "Committed successfully!"}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>{result.error || "Git sync failed"}</span>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleSync}
            disabled={loading || !commitMessage.trim()}
            className="flex-1 rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 disabled:bg-slate-300 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 animate-spin border-2 border-white border-t-transparent rounded-full" />
                {shouldPush ? "Committing & Pushing..." : "Committing..."}
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                {shouldPush ? "Commit & Push" : "Commit Only"}
              </>
            )}
          </button>
          <button
            onClick={() => {
              onComplete(false, false)
              onClose()
            }}
            disabled={loading}
            className="px-4 py-2 rounded-md border border-slate-300 bg-white font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

