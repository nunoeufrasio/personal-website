import { AtSign, FileText, ImageIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

function Intro() {
  return (
    <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-muted-foreground">
      {siteConfig.intro.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <div className="flex flex-col">
      {/* Narrow centered content column */}
      <div className="mx-auto w-full max-w-[640px] px-6">
        {/* Top action bar */}
        <div className="flex justify-end gap-2 pt-8">
          <Button asChild>
            <a href={siteConfig.resumeUrl}>
              <FileText />
              Resume
            </a>
          </Button>
          <Button asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <AtSign />
              Get in touch
            </a>
          </Button>
        </div>

        {/* Headline */}
        <div className="pt-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {siteConfig.shortName}.
          </h1>
          <p className="text-4xl font-light tracking-tight text-muted-foreground/60">
            {siteConfig.role}
          </p>
        </div>

        {/* Intro copy */}
        <div className="pt-14">
          <Intro />
        </div>
      </div>

      {/* Full-width portrait band */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="flex h-[360px] items-end justify-center overflow-hidden bg-muted">
          {siteConfig.portrait ? (
            <img
              src={siteConfig.portrait}
              alt={`Portrait of ${siteConfig.name}`}
              className="h-full w-auto object-contain object-bottom"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 pb-16 text-muted-foreground">
              <ImageIcon className="size-10" />
              <span className="text-sm">Portrait placeholder</span>
            </div>
          )}
        </div>
      </div>

      {/* Repeated intro copy below the portrait */}
      <div className="mx-auto w-full max-w-[640px] px-6 pb-24">
        <Intro />
      </div>
    </div>
  )
}
