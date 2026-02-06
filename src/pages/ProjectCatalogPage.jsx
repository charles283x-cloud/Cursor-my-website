import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, MapPin, Zap, ChevronRight } from 'lucide-react'
import projectsData from '../data/projects.json'

const REGIONS = ['', '茨城县', '福冈县', '北海道', '关东']
const STATUSES = ['', '规划', '在建', '运营']

export default function ProjectCatalogPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    region: searchParams.get('region') || '',
    status: searchParams.get('status') || '',
    q: searchParams.get('q') || '',
  })

  useEffect(() => {
    setFilters({
      region: searchParams.get('region') || '',
      status: searchParams.get('status') || '',
      q: searchParams.get('q') || '',
    })
  }, [searchParams])

  const filteredProjects = projectsData.filter((p) => {
    if (filters.region && p.region !== filters.region) return false
    if (filters.status && p.status !== filters.status) return false
    if (filters.q) {
      const q = filters.q.toLowerCase()
      const text = `${p.title || ''} ${p.description || ''}`.toLowerCase()
      if (!text.includes(q)) return false
    }
    return true
  })

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">项目信息</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="搜索项目..."
              value={filters.q}
              onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30"
            />
          </div>
          <select
            value={filters.region}
            onChange={(e) => setFilters((f) => ({ ...f, region: e.target.value }))}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30"
          >
            <option value="">全部地区</option>
            {REGIONS.filter(Boolean).map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <select
            value={filters.status}
            onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30"
          >
            <option value="">全部状态</option>
            {STATUSES.filter(Boolean).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-slate-500 py-8">暂无项目</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-portal-blue/30 transition-all group"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={p.image?.startsWith('http') ? p.image : p.image || '/hero-bg.png'}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/hero-bg.png' }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-slate-800 line-clamp-1 mb-2 group-hover:text-portal-blue">
                    {p.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-600 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      {p.capacity || '20MW'}
                    </span>
                  </div>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      p.status === '运营' ? 'bg-green-100 text-green-800' :
                      p.status === '在建' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {p.status}
                  </span>
                  <div className="mt-3 flex items-center text-portal-blue text-sm font-medium">
                    查看详情
                    <ChevronRight className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
