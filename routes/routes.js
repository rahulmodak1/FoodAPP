const express = require('express');
const cartSchema = require('../model/cartSchema');
const router = express.Router();
const itemSchema = require('../model/itemSchema')


// router.get('/items' , async(req , res) => {
//     const Products = await itemSchema.find();
//     res.send(Products)
// })
router.get('/items' , async(req , res) => {
    const Products = await itemSchema.find({'subItemsData.name':{$elemMatch:{name : 'Tasty Pizza'}}});
    // const Products = await itemSchema.find({'subItemsData.name' : 'Tasty Pizza'});

    res.send(Products)
})
router.post('/cart/add' , async(req , res ) => {
const result = await cartSchema.create({
    name : req.body.name ,
    image : req.body.image ,
    price : req.body.price ,
    description : req.body.description
});
res.send(result)

})

router.get('/cart' , async(req , res) => {
    const result = await cartSchema.find() ;
    res.send(result) ;
})
router.post('/cart/add' , async(req , res) => {
    const result = await cartSchema.create(req.body)
    res.send(result)
})

router.delete('/cart/item/delete/:id' , async(req, res) => {
    const result = await cartSchema.findByIdAndDelete(req.params.id)
    res.send(result) ;
})
router.delete('/cart/items/delete' , async(req,res) => {
    const result = await cartSchema.collection.deleteMany({})
    res.send(result)
})




module.exports = router ;