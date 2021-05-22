import NewsItem from '../models/NewsItem.js'
import FileService from './FileService.js'

class NewsService {
    async getAll() {
        const newsList = await NewsItem.find()
        return newsList
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsItem = await NewsItem.findById(id)
        return newsItem
    }

    async create(newsItem, picture) {
        const fileName = FileService.saveFile(picture)
        const createNewsItem = await NewsItem.create({ ...newsItem, picture: fileName })
        return createNewsItem
    }

    async update(newsItem, id) {
        if (!newsItem._id & !id) {
            throw new Error('ID не указан')
        }
        const updatedNewsItem = await NewsItem.findByIdAndUpdate(newsItem._id, newsItem, { new: true })
        return updatedNewsItem
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsItem = await NewsItem.findByIdAndDelete(id)
        return newsItem
    }
}

export default new NewsService()