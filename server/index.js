import express from 'express'
import cors from 'cors'
import projectsRouter from './routes/projects.js'
import newsRouter from './routes/news.js'
import partnerApplicationsRouter from './routes/partnerApplications.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/projects', projectsRouter)
app.use('/api/news', newsRouter)
app.use('/api/partner-applications', partnerApplicationsRouter)

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`)
})
