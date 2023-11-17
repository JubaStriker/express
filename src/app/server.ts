import express from 'express';
const app = express()


app.get('/', (req, res) => {
    res.send('Hello Dev!')
})

export default app;