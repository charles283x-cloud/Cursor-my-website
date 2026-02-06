import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectCatalogPage from './pages/ProjectCatalogPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import NewsListPage from './pages/NewsListPage'
import NewsDetailPage from './pages/NewsDetailPage'
import PartnerRecruitPage from './pages/PartnerRecruitPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectCatalogPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/partners" element={<PartnerRecruitPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
