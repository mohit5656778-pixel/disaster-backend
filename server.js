const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let latestData = {}

app.post('/api/sensor-data', (req, res) => {
  latestData = req.body

  console.log('Received sensor data:')
  console.log(latestData)

  res.json({
    success: true,
    message: 'Sensor data received',
  })
})

app.get('/api/sensors/latest', (req, res) => {
  res.json(latestData)
})

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000')
})
