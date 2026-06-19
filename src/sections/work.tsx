import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { workItems } from '@/lib/site-config'

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 md:py-28"
    >
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
        <p className="text-muted-foreground">
          A few projects I&apos;ve worked on. Real case studies coming soon.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {workItems.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            {/* Placeholder thumbnail — swap for real screenshots later. */}
            <div className="aspect-[16/10] w-full bg-muted" />
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {item.category}
              </p>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  )
}
