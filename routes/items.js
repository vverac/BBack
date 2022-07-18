const express = require('express')
const router = express.Router()

const conexion = require('../bd/db')

router.get('/productos', (req, res) => {
  conexion.getConnection((error, conn) => {
    conn.query('SELECT product.name, product.url_image, product.price, category.name as namec from product   INNER JOIN category   WHERE product.category = category.id', (error, categorias) => {
      if (error) {
        throw error
      } else {
        res.json(categorias)
        conn.release()
      }
    })
  })

})

module.exports = router;

