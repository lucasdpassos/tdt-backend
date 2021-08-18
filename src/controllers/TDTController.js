const pool = require('../db') 
const { json } = require('body-parser')




module.exports = {
    ping: (req, res) => {
        res.send("pong")
    },
    all: async (req, res) => {
        
      
       
    },
    one: async (req, res) => {

        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;      
        const getUser = await pool.query("SELECT * FROM users")

        res.json(getUser)

     },
    new: async (req, res) => {

            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;       
            const { user } = req.body
            const newUser = await pool.query("INSERT INTO users (email) VALUES($1)", [user])

            res.json(newUser)
      
            
        
    },
    edit: (req, res) => {

    },
    delete: (req, res) => {

    },
}