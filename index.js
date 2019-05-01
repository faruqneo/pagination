const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./router/api');

app.use(api);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
})