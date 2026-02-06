import { Link } from 'react-router-dom'

export default function NewsCard({ image, title, date, href = '#' }) {
  const isInternal = href.startsWith('/')
  const Comp = isInternal ? Link : 'a'
  const linkProps = isInternal ? { to: href } : { href }
  return (
    <Comp
      {...linkProps}
      className="flex gap-3 sm:gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
    >
      <div className="w-20 h-16 sm:w-24 sm:h-[4.5rem] flex-shrink-0 rounded overflow-hidden bg-slate-100">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-slate-800 font-medium text-sm sm:text-base line-clamp-2 group-hover:text-portal-blue transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{date}</p>
      </div>
    </Comp>
  )
}
