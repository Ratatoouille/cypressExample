const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, '/style')));

app.get('/', (request, response) => {
    response.render("index.hbs");
});

app.post("/result", urlencodedParser, (request, response) => {
    if (!request.body) return response.statusCode(400);

    console.log(request.body);

    let x1 = parseFloat(request.body.x1);
    let y1 = parseFloat(request.body.y1);
    let r1 = parseFloat(request.body.r1);
    let x2 = parseFloat(request.body.x2);
    let y2 = parseFloat(request.body.y2);
    let r2 = parseFloat(request.body.r2);
    let accuracy = parseInt(request.body.accuracy);

    let result = calculate(x1, y1, r1, x2, y2, r2, accuracy);

    response.render("result.hbs", {
        answer: result
    });
});

function calculate(x1, y1, r1, x2, y2, r2, accuracy) {
    parseFloat(x1).toFixed(accuracy);
    parseFloat(y1).toFixed(accuracy);
    parseFloat(r1).toFixed(accuracy);
    parseFloat(x2).toFixed(accuracy);
    parseFloat(y2).toFixed(accuracy);
    
    let d = parseFloat(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    let rSum = +((r1 + r2).toFixed(2));

    if ((d === 0) && (r1 === r2)) {
        return "Это одна и та же окружность";
    }
    if (d <  Math.abs(r1 - r2)) {
        return "Одна окружность содержится внутри другой и не касается ее";
    }
    if (d === parseFloat(Math.abs(r1 - r2))) {
        return "Окружности пересекаются в одной точке";
    }
    if (d === rSum) {
        return "Окружности пересекаются в одной точке";
    }
    if ((d < rSum) && (d > Math.abs(r1 - r2))) {
        return "Окружности пересекаются в 2 точках";
    }
    if ((d > rSum) || (d < Math.abs(r1 - r2))) {
        return "Окружности не пересекаются";
    }
};

app.listen(8000);
