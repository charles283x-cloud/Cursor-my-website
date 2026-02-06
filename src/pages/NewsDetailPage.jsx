import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export default function NewsDetailPage() {
  const { id } = useParams()
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setNews)
      .catch(() => setNews(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <main className="flex-1 py-16 text-center text-slate-500">加载中...</main>
  if (!news) return (
    <main className="flex-1 py-16 text-center">
      <p className="text-slate-500 mb-4">新闻不存在</p>
      <Link to="/news" className="text-portal-blue hover:underline">返回新闻列表</Link>
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
          返回新闻列表
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
            {news.content || news.summary}
          </div>
        </article>
      </div>
    </main>
  )
}
