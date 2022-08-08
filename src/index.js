const express = require('express');
const app = express();
const port = 8000

// middlewares
app.use(express.json())
// app.use('/',);

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});

