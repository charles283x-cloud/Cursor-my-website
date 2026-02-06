import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Zap, Mail, ChevronLeft } from 'lucide-react'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setProject)
      .catch(() => setProject(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <main className="flex-1 py-16 text-center text-slate-500">加载中...</main>
  if (!project) return (
    <main className="flex-1 py-16 text-center">
      <p className="text-slate-500 mb-4">项目不存在</p>
      <Link to="/projects" className="text-portal-blue hover:underline">返回项目列表</Link>
    </main>
  )

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-slate-600 hover:text-portal-blue text-sm mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          返回项目列表
        </Link>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="aspect-[21/9] bg-slate-100">
            <img
              src={project.image?.startsWith('http') ? project.image : project.image || '/hero-bg.png'}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/hero-bg.png' }}
            />
          </div>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-slate-800 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-slate-600 mb-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {project.region}
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {project.capacity_mw}MW / {project.capacity_mwh}MWh
              </span>
              <span
                className={`px-2 py-1 rounded text-sm font-medium ${
                  project.status === '运营' ? 'bg-green-100 text-green-800' :
                  project.status === '在建' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="prose text-slate-600 mb-6 whitespace-pre-line">
              {project.description}
            </div>
            {project.contact_email && (
              <a
                href={`mailto:${project.contact_email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-portal-blue text-white rounded-lg hover:bg-portal-blue-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                联系咨询
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
