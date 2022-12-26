require("dotenv").config();
const dotenv = require('dotenv')

const cloudinary = require('cloudinary').v2
const { ImageModel } = require('../models/image')

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const controller = {

    upload: async(req, res, next) => {
        console.log(req.files.image.tempFilePath)
        const file = req.files.image
        try {
            cloudinary.uploader.upload(file.tempFilePath, async(err, rs) => {
                if (err) return res.status(409).json({ status: false, message: 'Có lỗi xảy ra', err: err })
                await ImageModel.create({ image: rs.url })
                return res.status(200).json({ status: true, message: 'Thành công' })
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = controller