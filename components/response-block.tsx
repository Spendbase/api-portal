"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function ResponseBlock({ status, children }: { status?: string; children: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {status ?? "200 OK"} Response
        </span>
        <button
          type="button"
          title="Copy response"
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <div className="rounded-lg bg-muted p-4 font-mono text-xs overflow-x-auto">
        <pre>{children}</pre>
      </div>
    </div>
  )
}
