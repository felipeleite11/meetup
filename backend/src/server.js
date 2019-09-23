import app from './app'

app.listen(3333, () => console.log(`Running on ${process.env.APP_URL}`))
