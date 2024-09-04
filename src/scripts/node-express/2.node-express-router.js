const router = express.Router()

router.get('/list', (req, res) => {
  res.send('User List')
})

app.use('/user', router)
