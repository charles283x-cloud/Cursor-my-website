import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const translations = {
  zh: {
    navHome: '首页',
    navProjects: '项目信息',
    navNews: '新闻动态',
    navPartners: '招募合作伙伴',
    siteName: '日本储能项目门户',
    searchPlaceholder: '搜索项目...',
    loginRegister: '登录 / 注册',
    footerDesc: '聚焦日本储能产业，提供项目资讯、技术解析与行业洞察，助力能源转型与电网稳定。',
    quickLinks: '快速链接',
    contactUs: '联系我们',
    followUs: '关注我们',
    wechat: '微信',
    weibo: '微博',
    copyright: '版权所有',
    heroTitle: '日本关东 50MW/100MWh 独立储能电站项目正式启动，助力区域能源转型',
    viewDetail: '查看详情',
    heroAlt: '大型户外电池储能集装箱项目',
    figuresTitle: '项目核心数据',
    capacity: '装机容量',
    storageCapacity: '储能容量',
    safetyCert: '地震安全认证',
    expectedOp: '预计投运',
    latestNews: '最新动态',
    more: '更多',
    loading: '加载中...',
    noNews: '暂无新闻',
    topicTitle: '技术亮点专题',
    topic1: '全钒液流电池技术解析',
    topic2: 'EMS 能量管理系统优势',
    topic3: '储能电站安全设计要点',
    topic4: '电网调频市场机制浅析',
    whitepaper: '项目白皮书下载',
    whitepaperDesc: '获取完整技术方案',
    bizContact: '商务合作联系',
    bizContactDesc: '洽谈合作与咨询',
    projectsTitle: '项目信息',
    allRegion: '全部地区',
    allStatus: '全部状态',
    noProjects: '暂无项目',
    projectNotFound: '项目不存在',
    backToProjects: '返回项目列表',
    contactConsult: '联系咨询',
    newsTitle: '新闻动态',
    newsNotFound: '新闻不存在',
    backToNews: '返回新闻列表',
    partnersTitle: '招募合作伙伴',
    introTitle: '合作说明',
    introText: '日本储能项目门户致力于搭建储能产业上下游合作桥梁。我们诚邀设备厂商、 EPC 承包商、投融资机构、运维服务商等合作伙伴，共同拓展日本储能市场，助力清洁能源转型。',
    advantageTitle: '合作优势',
    advantage1: '对接优质储能项目资源',
    advantage2: '行业资讯与市场洞察共享',
    advantage3: '商务对接与项目撮合支持',
    formTitle: '提交合作申请',
    submitSuccess: '提交成功，我们会尽快与您联系。',
    submitError: '提交失败，请检查表单后重试。',
    companyLabel: '公司名称 *',
    contactLabel: '联系人 *',
    emailLabel: '邮箱 *',
    phoneLabel: '电话',
    messageLabel: '留言',
    companyPlaceholder: '请输入公司名称',
    contactPlaceholder: '请输入联系人姓名',
    phonePlaceholder: '选填',
    messagePlaceholder: '合作意向或需求简述（选填）',
    submitApply: '提交申请',
    contactFormSending: '发送中...',
    contactFormSuccess: '您的留言已发送，我们会尽快联系您！',
    contactSubmitButton: '发送留言',
    errCompany: '请输入公司名称',
    errContact: '请输入联系人',
    errEmail: '请输入邮箱',
    errEmailInvalid: '请输入有效邮箱',
    companyName: 'VOLT WAVE',
    contactEmail: 'volt.wave001@gmail.com',
    footerAddress: '〒104-0061 東京都中央区銀座１丁目１２番４号',
    regionIbaraki: '茨城县',
    regionFukuoka: '福冈县',
    regionHokkaido: '北海道',
    regionKanto: '关东',
    regionKansai: '关西',
    statusPlan: '规划',
    statusBuilding: '在建',
    statusOperating: '运营',
  },
  ja: {
    navHome: 'ホーム',
    navProjects: 'プロジェクト',
    navNews: 'ニュース',
    navPartners: 'パートナー募集',
    siteName: '日本蓄電プロジェクトポータル',
    searchPlaceholder: 'プロジェクトを検索...',
    loginRegister: 'ログイン / 登録',
    footerDesc: '日本の蓄電産業に焦点を当て、プロジェクト情報・技術解説・業界洞察を提供し、エネルギー転換と系統安定に貢献します。',
    quickLinks: 'クイックリンク',
    contactUs: 'お問い合わせ',
    followUs: 'フォロー',
    wechat: 'WeChat',
    weibo: '微博',
    copyright: '著作権所有',
    heroTitle: '関東 50MW/100MWh スタンドアロン蓄電所プロジェクト始動、地域のエネルギー転換を支援',
    viewDetail: '詳細を見る',
    heroAlt: '大型屋外蓄電池コンテナプロジェクト',
    figuresTitle: 'プロジェクト主要データ',
    capacity: '設置容量',
    storageCapacity: '蓄電容量',
    safetyCert: '耐震安全認証',
    expectedOp: '稼働予定',
    latestNews: '最新情報',
    more: 'もっと見る',
    loading: '読み込み中...',
    noNews: 'ニュースはありません',
    topicTitle: '技術特集',
    topic1: '全バナジウム液流電池技術解説',
    topic2: 'EMS エネルギー管理システムの利点',
    topic3: '蓄電所安全設計の要点',
    topic4: '系統周波数調整市場の仕組み',
    whitepaper: 'プロジェクト白書ダウンロード',
    whitepaperDesc: '技術方案を取得',
    bizContact: 'ビジネス提携のお問い合わせ',
    bizContactDesc: '提携・ご相談',
    projectsTitle: 'プロジェクト',
    allRegion: 'すべての地域',
    allStatus: 'すべての状態',
    noProjects: 'プロジェクトはありません',
    projectNotFound: 'プロジェクトは存在しません',
    backToProjects: 'プロジェクト一覧に戻る',
    contactConsult: 'お問い合わせ',
    newsTitle: 'ニュース',
    newsNotFound: 'ニュースは存在しません',
    backToNews: 'ニュース一覧に戻る',
    partnersTitle: 'パートナー募集',
    introTitle: '提携について',
    introText: '日本蓄電プロジェクトポータルは、蓄電産業のサプライチェーン連携の架け橋となることを目指しています。設備メーカー、EPC 請負業者、投資・金融機関、O&M サービス事業者などのパートナーを募集し、日本の蓄電市場の拡大とクリーンエネルギー転換に貢献します。',
    advantageTitle: '提携のメリット',
    advantage1: '優良蓄電プロジェクトへのアクセス',
    advantage2: '業界情報・市場洞察の共有',
    advantage3: '商談・プロジェクトマッチング支援',
    formTitle: '提携申込',
    submitSuccess: '送信しました。折り返しご連絡いたします。',
    submitError: '送信に失敗しました。内容を確認して再度お試しください。',
    companyLabel: '会社名 *',
    contactLabel: '担当者名 *',
    emailLabel: 'メール *',
    phoneLabel: '電話',
    messageLabel: 'メッセージ',
    companyPlaceholder: '会社名を入力',
    contactPlaceholder: '担当者名を入力',
    phonePlaceholder: '任意',
    messagePlaceholder: '提携のご意向やご要望（任意）',
    submitApply: '申し込む',
    contactFormSending: '送信中...',
    contactFormSuccess: 'お問い合わせを受け付けました。折り返しご連絡いたします。',
    contactSubmitButton: 'メッセージを送信',
    errCompany: '会社名を入力してください',
    errContact: '担当者名を入力してください',
    errEmail: 'メールアドレスを入力してください',
    errEmailInvalid: '有効なメールアドレスを入力してください',
    companyName: 'VOLT WAVE',
    contactEmail: 'volt.wave001@gmail.com',
    footerAddress: '〒104-0061 東京都中央区銀座１丁目１２番４号',
    regionIbaraki: '茨城県',
    regionFukuoka: '福岡県',
    regionHokkaido: '北海道',
    regionKanto: '関東',
    regionKansai: '関西',
    statusPlan: '計画',
    statusBuilding: '建設中',
    statusOperating: '運営',
  },
}

const STORAGE_KEY = 'portal-locale'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'ja' || saved === 'zh') return saved
    } catch (_) {}
    return 'zh'
  })

  const setLocale = useCallback((lang) => {
    if (lang !== 'zh' && lang !== 'ja') return
    setLocaleState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (_) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch (_) {}
  }, [locale])

  const t = useCallback(
    (key) => {
      const dict = translations[locale] || translations.zh
      return dict[key] ?? key
    },
    [locale]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
