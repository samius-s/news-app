import Router from 'express'
import NewsItemController from '../controllers/NewsItemController.js'

const router = new Router()

router.get('/news', NewsItemController.getAll)
router.get('/news/:id', NewsItemController.getOne)
router.post('/news', NewsItemController.create)
router.put('/news/:id', NewsItemController.update)
router.delete('/news/:id', NewsItemController.delete)

export default router
