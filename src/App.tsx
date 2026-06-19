import { Header } from '@/sections/header'
import { Hero } from '@/sections/hero'
import { Work } from '@/sections/work'
import { About } from '@/sections/about'
import { Footer } from '@/sections/footer'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
