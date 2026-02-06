import Hero from '../components/Hero'
import KeyFigures from '../components/KeyFigures'
import LatestNews from '../components/LatestNews'
import Sidebar from '../components/Sidebar'

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-0">
              <KeyFigures />
              <LatestNews />
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
