import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Reach out.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
