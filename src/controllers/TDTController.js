const pool = require('../db') 
const { json } = require('body-parser')




module.exports = {
    ping: (req, res) => {
        res.send("pong")
    },
    all: async (req, res) => {
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;      
        const getProducts = await pool.query("SELECT * FROM products")

        res.json(getProducts)

      
       
    },
    one: async (req, res) => {

        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;      
        const getUser = await pool.query("SELECT * FROM users")

        res.json(getUser)

     },
    newProduct: async (req, res) => {

            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;       
            const product = req.body            
            const queryData = Object.values(product)
            console.log(queryData)
            const newProduct = await pool.query("INSERT INTO products(product_id, product_nome, product_desc, product_marca, product_forn, product_class, product_custo, product_venda, product_estoque, product_loja) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", queryData)

            res.json(newProduct)
      
            
        
    },
    newCustomer: async (req, res) => {

            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;       
            const customer = req.body            
            const queryData = Object.values(customer)
            console.log(queryData)
            const newCustomer = await pool.query("INSERT INTO customers(id, customer_nome, customer_end, customer_buys, customer_tel) VALUES($1, $2, $3, $4, $5)", queryData)

            res.json(newCustomer)
      
            
        
    },
    edit: (req, res) => {

    },
    delete: (req, res) => {

    },
}