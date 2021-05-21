import NewsList from '../models/NewsList.js'
import NewsService from '../newsService/NewsService.js'

class NewsListController {
    async getAll(req, res) {
        try {
            const newsList = await NewsService.getAll()
            return res.json(newsList)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const newsItem = await NewsService.getOne(req.params.id)
            return res.json(newsItem)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const newsList = await NewsService.create(req.body)
            res.json(newsList)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedNewsItem = await NewsService.update(req.body, req.params.id)
            return res.json(updatedNewsItem)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const newsList = await NewsService.delete(req.params.id)
            return res.json(newsList)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new NewsListController()