const express = require('express')
const cors = require('cors')

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json())

app.post('/signup', (req, res) => {
    const {email, password} = req.body;
    res.json({ requestData: { email, password } });
})

app.listen(4002, () => {
    console.log('Server has started');
});