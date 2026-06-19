import { siteConfig } from '@/lib/site-config'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-base font-semibold tracking-tight">
          {siteConfig.name}
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
