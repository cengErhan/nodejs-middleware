const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.use((req, res, next)=>{
    console.log('random function works');
    next()
})

app.get('/', (req,res) => {
res.json({message: 'Hello World'})
})

app.listen(process.env.PORT || 3001, ()=>{
console.log(`Server start on ${PORT}`);
})