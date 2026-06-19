import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 md:py-32"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {siteConfig.role}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
        {siteConfig.intro}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <a href="#work">View work</a>
        </Button>
        <Button asChild variant="outline">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </section>
  )
}
