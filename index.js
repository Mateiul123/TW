const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT_IMPLICIT = 8080;

var obGlobal = {
    obErori: null,
    caleResurse: path.join(__dirname, "resurse")
};

console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
console.log("process.cwd():", process.cwd());
console.log("__dirname si process.cwd() nu sunt intotdeauna acelasi lucru; process.cwd() depinde de folderul din care este pornit procesul Node.");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const vect_foldere = ["temp", "logs", "backup", "fisiere_uploadate"];
for (const folder of vect_foldere) {
    const caleFolder = path.join(__dirname, folder);
    if (!fs.existsSync(caleFolder)) {
        fs.mkdirSync(caleFolder);
    }
}

function initErori() {
    const caleErori = path.join(__dirname, "erori.json");
    const continut = fs.readFileSync(caleErori, "utf-8");
    const obErori = JSON.parse(continut);

    obErori.eroare_default.imagine = path.join(obErori.cale_baza, obErori.eroare_default.imagine);
    for (const eroare of obErori.info_erori) {
        eroare.imagine = path.join(obErori.cale_baza, eroare.imagine);
    }

    obGlobal.obErori = obErori;
}

function afisareEroare(res, identificator, titlu, text, imagine) {
    let eroare = null;

    if (identificator !== undefined && obGlobal.obErori) {
        eroare = obGlobal.obErori.info_erori.find(function (elem) {
            return elem.identificator === identificator;
        });
    }

    if (!eroare) {
        eroare = obGlobal.obErori.eroare_default;
    }

    const dateEroare = {
        titlu: titlu ?? eroare.titlu,
        text: text ?? eroare.text,
        imagine: imagine ?? eroare.imagine,
        ipUtilizator: res.locals.ipUtilizator
    };

    const codStatus = eroare.status ? eroare.identificator : (identificator === undefined ? 500 : 200);
    res.status(codStatus).render("pagini/eroare", dateEroare);
}

function randarePagina(req, res, pagina) {
    res.render(`pagini/${pagina}`, {
        ipUtilizator: req.ip
    }, function (eroare, rezultatRandare) {
        if (eroare) {
            if (eroare.message && eroare.message.startsWith("Failed to lookup view")) {
                afisareEroare(res, 404);
            } else {
                console.error(eroare);
                afisareEroare(res);
            }
        } else {
            res.send(rezultatRandare);
        }
    });
}

initErori();

app.use(function (req, res, next) {
    res.locals.ipUtilizator = req.ip;
    next();
});

app.get("/favicon.ico", function (req, res) {
    res.sendFile(path.join(__dirname, "resurse", "ico", "favicon.ico"));
});

app.get(/\.ejs$/, function (req, res) {
    afisareEroare(res, 400);
});

app.use("/resurse", function (req, res, next) {
    const caleCeruta = path.join(obGlobal.caleResurse, req.path);

    if (fs.existsSync(caleCeruta) && fs.statSync(caleCeruta).isDirectory()) {
        afisareEroare(res, 403);
        return;
    }

    next();
});

app.use("/resurse", express.static(obGlobal.caleResurse));

app.get(["/", "/index", "/home"], function (req, res) {
    randarePagina(req, res, "index");
});

app.get("/*", function (req, res) {
    const pagina = req.params[0];

    if (!pagina || pagina.includes("..") || path.extname(pagina)) {
        afisareEroare(res, 404);
        return;
    }

    randarePagina(req, res, pagina);
});

function pornesteServer(port) {
    const server = app.listen(port, function () {
        console.log(`Serverul ruleaza la http://localhost:${port}`);
    });

    server.on("error", function (eroare) {
        if (eroare.code === "EADDRINUSE" && port === PORT_IMPLICIT) {
            const portRezerva = 8081;
            console.log(`Portul ${PORT_IMPLICIT} este ocupat. Incerc portul ${portRezerva}.`);
            pornesteServer(portRezerva);
        } else {
            throw eroare;
        }
    });
}

pornesteServer(Number(process.env.PORT) || PORT_IMPLICIT);
