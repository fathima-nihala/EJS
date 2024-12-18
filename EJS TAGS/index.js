import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title : "EJS TAGS",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<strong>This is some strong tex</strong>"
    };
    res.render("index.ejs",data);
});

app.listen(port,() => {
    console.log(`Server running on port: ${port}.`);
});