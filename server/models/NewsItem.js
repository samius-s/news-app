import mongoose from 'mongoose'

const NewsItem = new mongoose.Schema({
    title: { type: String, require: true },
    shortDescription: { type: String, require: true },
    fullDescription: { type: String, require: true },
    image: { type: String, require: true }, // заменить на Number!
    picture: { type: String }
})

export default mongoose.model('NewsItem', NewsItem)