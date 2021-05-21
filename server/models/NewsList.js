import mongoose from 'mongoose'

const NewsList = new mongoose.Schema({
    title: { type: String, require: true },
    shortDescription: { type: String, require: true },
    image: { type: String, require: true },
})

export default mongoose.model('NewsList', NewsList)