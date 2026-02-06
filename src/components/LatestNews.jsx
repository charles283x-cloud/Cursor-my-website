import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'

export default function LatestNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => {
        setNews(Array.isArray(data) ? data.slice(0, 3) : [])
      })
      .catch(() => setNews([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="news" className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800 pb-2 border-b-2 border-portal-blue w-fit">
          最新动态
        </h2>
        <Link to="/news" className="text-sm text-portal-blue hover:underline">更多</Link>
      </div>
      {loading ? (
        <p className="text-slate-500 text-sm py-4">加载中...</p>
      ) : news.length === 0 ? (
        <p className="text-slate-500 text-sm py-4">暂无新闻</p>
      ) : (
        <div className="divide-y divide-slate-100">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image || 'https://picsum.photos/200/150'}
              title={item.title}
              date={item.published_at}
              href={`/news/${item.id}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
