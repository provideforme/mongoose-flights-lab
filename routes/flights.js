import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get("/:id/edit", flightsCtrl.edit)
router.post('/', flightsCtrl.create)
router.delete("/:id", flightsCtrl.delete)

export {
  router
}
