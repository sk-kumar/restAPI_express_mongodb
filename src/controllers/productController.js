// import model
const productModel = require("../models/productModel")

// POST
const createProduct = async (req, res) => {
    
}

// GET by query params
const searchProduct = async (req, res) => {
    try {
        const { title, price, availableSizes, color } = req.query
        // 
        let oneFilter = { $or: [{ title: title }, { price: price }, { availableSizes: availableSizes }, { color: color }] }
        let twoFilters = { $and: [{ title: title }, { color: color }] }
        let threeFilters = { $and: [{ title: title }, { color: color }, { $and: [{ price: { $gt: 1000 } }, { price: { $lt: 5000 } }] }] }

        let products = await productModel.find(oneFilter)
        res.status(200).send({ status: true, data: products });
    } catch (error) {
        res.status(200).send({ status: false, message: error.message });
    }
}

module.exports = { createProduct, searchProduct }
