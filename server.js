//DEPENDENCIES
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS MIDDLE WARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//DEFAULT RESPONSE FOR ANY REQUEST NOT FOUND
app.use((req,res) => {
    res.status(404).end();
});

//FUNCTION THAT WILL START THE EXPRESS SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});