const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        { 
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        { 
            title: "M",
            message: "uito fácil de usar"
        },
        { 
            title: "A",
            message: "prender sempre é fascinante"
        },
        { 
            title: "I",
            message: "nspirador poder criar sua aplicação"
        },
        { 
            title: "S",
            message: "intax simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")