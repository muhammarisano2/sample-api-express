const productModel = require('../models/product')

module.exports = {
  getProduct: (req, res)=>{
    productModel.getProduct()
    .then((result)=>{
      res.json(result)
    })
    .catch(err=>console.log(err));
  },
  productDetail: (req, res) => {
    const id_product = req.params.id_product;
    productModel.productDetail(id_product)
      .then((result) => {
        res.json(result)
      })
      .catch(err => console.log(err));
  },
  insertProduct: (req, res) => {
    // console.log(req.file.filename);
    const {name, description, price, stock, id_category} = req.body;
    const data = {
      name,
      description,
      price,
      stock,
      image: `http://localhost:4001/uploads/${req.file.filename}`,
      id_category,
    }
    productModel.insertProduct(data)
      .then((result) => {
        res.json(result)
      })
      .catch(err => console.log(err));
  },
  updateProduct: (req, res) => {
    const id_product = req.params.id_product
    const { name, description, price, stock, id_category } = req.body;
    const data = {
      name,
      description,
      price,
      stock,
      id_category,
    }
    productModel.updateProduct(id_product,data)
      .then((result) => {
        res.json(result)
      })
      .catch(err => console.log(err));
  },
  deleteProduct: (req, res) => {
    const id_product = req.params.id_product;

    productModel.deleteProduct(id_product)
      .then((result) => {
        res.json(result)
      })
      .catch(err => console.log(err));
  },
}