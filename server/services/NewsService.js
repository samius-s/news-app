import NewsItem from '../models/NewsItem.js'
import FileService from './FileService.js'

class NewsService {
    async getAll() {
        const newsList = await NewsItem.find()
        const finalNewsList = newsList.map(e => {
            return {
                title: e.title,
                shortDescription: e.shortDescription,
                image: e.imageId
            }
        })
        return finalNewsList
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsItem = await NewsItem.findById(id)
        const finalNewsItem = {
            title: newsItem.title,
            shortDescription: newsItem.shortDescription,
            fullDescription: newsItem.fullDescription,
            image: newsItem.imageId
        }
        return finalNewsItem
    }

    async create(newsItem, image) {
        const fileName = FileService.saveFile(image)
        const createNewsItem = await NewsItem.create({ ...newsItem, image: fileName })
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