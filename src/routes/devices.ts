import express from 'express'
import * as devicesServices from '../services/devices'

const router = express.Router()

router.get('/users/toribio', (_req, res) => {
  res.send(devicesServices.getUser())
})

export default router
