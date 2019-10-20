import app from './app'

app.listen(process.env.APP_PORT, () => console.log(`Running on ${process.env.APP_URL}:${process.env.APP_PORT}`))
