import { useState } from 'react'
import { Handshake, CheckCircle, Building2, Users, FileCheck } from 'lucide-react'

export default function PartnerRecruitPage() {
  const [form, setForm] = useState({ company: '', contact_name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('') // '' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setStatus('')

    const newErrors = {}
    if (!form.company.trim()) newErrors.company = '请输入公司名称'
    if (!form.contact_name.trim()) newErrors.contact_name = '请输入联系人'
    if (!form.email.trim()) newErrors.email = '请输入邮箱'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = '请输入有效邮箱'
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    try {
      const res = await fetch('/api/partner-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ company: '', contact_name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
        if (data.errors) {
          const errMap = {}
          data.errors.forEach((err) => { errMap[err.path] = err.msg })
          setErrors(errMap)
        }
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-8">招募合作伙伴</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-portal-blue" />
                合作说明
              </h2>
              <p className="text-slate-600 leading-relaxed">
                日本储能项目门户致力于搭建储能产业上下游合作桥梁。我们诚邀设备厂商、 EPC 承包商、投融资机构、
                运维服务商等合作伙伴，共同拓展日本储能市场，助力清洁能源转型。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-portal-blue" />
                合作优势
              </h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2"><Building2 className="w-4 h-4 shrink-0 mt-0.5" /> 对接优质储能项目资源</li>
                <li className="flex gap-2"><Users className="w-4 h-4 shrink-0 mt-0.5" /> 行业资讯与市场洞察共享</li>
                <li className="flex gap-2"><FileCheck className="w-4 h-4 shrink-0 mt-0.5" /> 商务对接与项目撮合支持</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-medium text-slate-800 mb-4">提交合作申请</h2>

              {status === 'success' && (
                <div className="mb-4 p-3 bg-green-50 text-green-800 rounded-lg text-sm">
                  提交成功，我们会尽快与您联系。
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-lg text-sm">
                  提交失败，请检查表单后重试。
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">公司名称 *</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.company ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="请输入公司名称"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">联系人 *</label>
                  <input
                    type="text"
                    value={form.contact_name}
                    onChange={(e) => setForm((f) => ({ ...f, contact_name: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.contact_name ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="请输入联系人姓名"
                  />
                  {errors.contact_name && <p className="text-red-500 text-xs mt-1">{errors.contact_name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">邮箱 *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="example@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">电话</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30"
                    placeholder="选填"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">留言</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 resize-none"
                    placeholder="合作意向或需求简述（选填）"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-portal-blue text-white font-medium rounded-lg hover:bg-portal-blue-light transition-colors"
                >
                  提交申请
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
