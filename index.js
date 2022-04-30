const express = requires('express')
const app = express()
const port = 8080

app.get('/', (req, res) =>{
    res.send('This is my first node application!')
})

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:$(port)`)
})