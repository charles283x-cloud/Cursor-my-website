import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

export default function NewsListPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then(setNews)
      .catch(() => setNews([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">新闻动态</h1>

        {loading ? (
          <p className="text-slate-500 py-8">加载中...</p>
        ) : news.length === 0 ? (
          <p className="text-slate-500 py-8">暂无新闻</p>
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
      </div>
    </main>
  )
}
