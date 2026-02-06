import { useParams, Link } from 'react-router-dom'
import { MapPin, Zap, Mail, ChevronLeft } from 'lucide-react'
import projectsData from '../data/projects.json'
import { useLocale } from '../context/LocaleContext'

const REGION_KEY = { '茨城县': 'regionIbaraki', '福冈县': 'regionFukuoka', '北海道': 'regionHokkaido', '关东': 'regionKanto', '关西': 'regionKansai' }
const STATUS_KEY = { '规划': 'statusPlan', '在建': 'statusBuilding', '运营': 'statusOperating' }

export default function ProjectDetailPage() {
  const { id } = useParams()
  const { t } = useLocale()
  const project = projectsData.find((p) => String(p.id) === String(id))

  if (!project) return (
    <main className="flex-1 py-16 text-center">
      <p className="text-slate-500 mb-4">{t('projectNotFound')}</p>
      <Link to="/projects" className="text-portal-blue hover:underline">{t('backToProjects')}</Link>
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
          {t('backToProjects')}
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
                {t(REGION_KEY[project.region]) || project.region}
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {project.capacity || '20MW'}
              </span>
              <span
                className={`px-2 py-1 rounded text-sm font-medium ${
                  project.status === '运营' ? 'bg-green-100 text-green-800' :
                  project.status === '在建' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {t(STATUS_KEY[project.status]) || project.status}
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
                {t('contactConsult')}
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
