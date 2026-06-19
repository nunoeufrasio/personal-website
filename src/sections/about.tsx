export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-muted/30"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <div className="flex flex-col gap-4 text-lg text-muted-foreground">
            <p>
              Placeholder bio. A couple of sentences about who I am, the kind of
              product work I care about, and how I approach design.
            </p>
            <p>
              Another placeholder paragraph — background, focus areas, and what
              I&apos;m looking for next. Real copy to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
