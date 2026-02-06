import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import newsData from '../data/news.json'
import { useLocale } from '../context/LocaleContext'

export default function NewsDetailPage() {
  const { id } = useParams()
  const { t } = useLocale()
  const news = newsData.find((n) => String(n.id) === String(id))

  if (!news) return (
    <main className="flex-1 py-16 text-center">
      <p className="text-slate-500 mb-4">{t('newsNotFound')}</p>
      <Link to="/news" className="text-portal-blue hover:underline">{t('backToNews')}</Link>
    </main>
  )

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Link
          to="/news"
          className="inline-flex items-center text-slate-600 hover:text-portal-blue text-sm mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          {t('backToNews')}
        </Link>

        <article className="bg-white">
          <h1 className="text-2xl font-semibold text-slate-800 mb-3">{news.title}</h1>
          <p className="text-slate-500 text-sm mb-6">{news.published_at}</p>
          {news.image && (
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img
                src={news.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="prose text-slate-600 leading-relaxed whitespace-pre-line">
            {news.content || news.description}
          </div>
        </article>
      </div>
    </main>
  )
}
