# Here app listen on port 5005, you can use any port
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('App called');
    res.status(200).json({ 'Message': 'API is working' });
})


app.use(express.json());

app.listen(5005, () => {
    console.log('App is listening to port no 5005');
});
