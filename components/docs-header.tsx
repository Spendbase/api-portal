import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 lg:px-6">
        <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor" opacity="0.3" />
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          </svg>
          <span className="font-semibold">Spendbase</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">/</span>
          <span className="font-mono text-sm text-muted-foreground hidden sm:inline">API Reference</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden w-64 md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search docs..." className="w-full pl-8" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
