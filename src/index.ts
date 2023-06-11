import express from 'express'
import devicesRouter from './routes/devices'

const app = express()
app.use(express.json())
const PORT = 8080

app.get('/', (_req, res) => {
  res.send('Initial Page :)')
  console.log('Someone entered main page')
})

app.use('/api/devices', devicesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
