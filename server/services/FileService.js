import * as path from 'path'

class FileService {
    saveFile(file, imageId) {
        try {
            const fileName = `newsImage-${imageId}.jpg`
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService()