import express from 'express'
import ejs from 'ejs'

const app = express()
const port = 3000
const toDoList = [];

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const date = new Date()
const exactDate = date.toLocaleDateString('en-US', options)


app.get('/', (req, res) => {
    res.render('home', { toDoList, exactDate })
})


app.post('/', (req, res) => {
    const input = req.body.userText
    toDoList.push(input)
    console.log(toDoList)
    res.render('home', { toDoList, exactDate })
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
