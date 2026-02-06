import NewsCard from './NewsCard'

const NEWS = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356041?w=300&q=80',
    title: '关东储能项目一期基础施工完成，预计 Q2 进入设备安装阶段',
    date: '2025-02-05',
    href: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80',
    title: '日本储能技术研讨会成功举办，多方专家共议电网调峰方案',
    date: '2025-01-28',
    href: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80',
    title: '项目与东京电力达成调频服务框架协议，商业化路径进一步明确',
    date: '2025-01-15',
    href: '#',
  },
]

export default function LatestNews() {
  return (
    <section id="news" className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-portal-blue w-fit">
        最新动态
      </h2>
      <div className="divide-y divide-slate-100">
        {NEWS.map((item, i) => (
          <NewsCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
