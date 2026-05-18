# TW

## Referinte rapide pentru prezentare (Etapa 1)

Fisier principal: `views/pagini/index.ejs`

### Taskuri obligatorii

| # | Task | Linii in cod (start+interval) |
|---|---|---|
| 1 | Doctype + limba document | 1-2 |
| 2 | Title + meta (charset/author/keywords/description) | 4-10 |
| 3 | Cuvinte cheie in continut | 53-58, 65, 69-74, 97-128 |
| 4 | Favicon + resurse ico + TileColor | 8, 12-16 |
| 5 | Impartire body in header/main/footer | 25, 50, 311 |
| 6 | Section/article/aside + imbricare + heading corect | 51-80, 82-171, 174-307 |
| 7 | hgroup (titlu + subtitlu) | 26-29 |
| 8 | Navigatie in header cu lista imbricata | 31-47 |
| 9 | Taguri de grupare (p, blockquote, dl) | 53-58, 62-65, 70-75 |
| 10 | Evenimente cu time datetime + b + lista | 218-224 |
| 11 | picture + figure + figcaption + title imagine | 188-197 |
| 12 | Marcari text (minim 3) | 53-58, 65, 69, 76-77 |
| 13 | Cele 5 linkuri cerute | 178, 182-184, 200-202, 142, 312 |
| 14 | Iframe YouTube + 3 linkuri catre iframe | 252-269 |
| 15 | Tabel semantic complet + colspan/rowspan | 82-138, 121-123, 133 |
| 16 | details + summary (mai multe zone) | 236-249 |
| 17 | 2x meter (valoare mica + mare) | 226-233 |
| 18 | Contact in footer cu address + scheme-uri | 311-318 |
| 19 | Copyright cu small + &copy; + time | 330-331 |
| 20 | Validare HTML sintactica | validare pe fisier complet `views/pagini/index.ejs` |

### Bonusuri

| Bonus | Linii in cod (start+interval) |
|---|---|
| MathML | 282-297 |
| PDF in pagina (`object`) | 300-306 |
| Harta de imagini (`map/area`) | 206-215 |
| Iframe Google Maps (adresa facultatii) | 321-328 |
| Playlist YouTube automat | 271-279 |

## Referinte rapide pentru prezentare (Etapa 2)

Fisiere principale: `views/pagini/index.ejs`, `resurse/css/style.css`, `resurse/css/reset.css`

### Taskuri obligatorii

| # | Task | Linii in cod (start+interval) |
|---|---|---|
| 1 | Repository local + remote GitHub | `.git` local; remote `origin` -> `https://github.com/Mateiul123/TW.git` |
| 2 | Linkuri CSS, Google Font si Font Awesome | `views/pagini/index.ejs`: 17-22 |
| 3 | Schema cromatica prin variabile in `body` | `resurse/css/style.css`: 1-21 |
| 4 | Folosire variabile CSS in restul stilizarii | `resurse/css/style.css`: 23-690 |
| 5 | Structura zonelor 1-8 in `main` | `views/pagini/index.ejs`: 50-171 |
| 6 | Grid principal cu `grid-template-areas` | `resurse/css/style.css`: 183-194 |
| 7 | Atribuirea zonelor in grid | `resurse/css/style.css`: 205-249 |
| 8 | Layout responsive mediu | `resurse/css/style.css`: 551-594 |
| 9 | Layout responsive mic, pe o coloana | `resurse/css/style.css`: 596-690 |
| 10 | Font-size responsive + tranzitie | `resurse/css/style.css`: 27, 552-553, 597-598 |
| 11 | Spatiere laterala si gap prin variabile | `resurse/css/style.css`: 17-19, 192-193, 556-558, 601-604 |
| 12 | Izolare vizuala header/footer | `resurse/css/style.css`: 68-76 |
| 13 | Izolare vizuala zone grid | `resurse/css/style.css`: 196-202 |
| 14 | Media responsive cu procente, min-width si max-width | `resurse/css/style.css`: 38-65, 638-647 |
| 15 | Icon static Font Awesome | `views/pagini/index.ejs`: 53; `resurse/css/style.css`: 236-239 |
| 16 | Icon animat Font Awesome | `views/pagini/index.ejs`: 153; `resurse/css/style.css`: 257-265 |
| 17 | Structura tabel cu caption, colspan si rowspan | `views/pagini/index.ejs`: 82-138 |
| 18 | Stilizare tabel: caption jos, border inset, borduri 1px | `resurse/css/style.css`: 287-323 |
| 19 | Tabel: bordere alternate + hover outline | `resurse/css/style.css`: 340-356 |
| 20 | Scroll orizontal doar pentru containerul tabelului | `resurse/css/style.css`: 287-290, 587-592, 670-672 |
| 21 | Structura taburi iframe | `views/pagini/index.ejs`: 252-269 |
| 22 | Flexbox pe `taburi-iframe` si taburi stilizate | `resurse/css/style.css`: 405-438 |
| 23 | Hover taburi: alungire spre dreapta + culoare mai deschisa | `resurse/css/style.css`: 441-447 |
| 24 | Link top HTML | `views/pagini/index.ejs`: 334-336 |
| 25 | Link top CSS: pozitie fixa, opacity, rotire, tooltip, sageata blurata | `resurse/css/style.css`: 465-548 |

### Bonusuri

| Bonus | Linii in cod (start+interval) |
|---|---|
| Reset CSS in fisier separat | `resurse/css/reset.css`: 1-56 |
| MathML in pagina | `views/pagini/index.ejs`: 282-297 |
| Stilizare MathML | `resurse/css/style.css`: 449-463 |

## Referinte rapide pentru prezentare (Etapa 3)

Fisiere principale: `views/pagini/index.ejs`, `resurse/css/menu.scss`, `resurse/css/menu.css`

### Cerinte implementate momentan

| # | Cerinta | Linii in cod (start+interval) |
|---|---|---|
| 1 | Link catre CSS-ul compilat pentru meniu | `views/pagini/index.ejs`: 23 |
| 2 | Meniu in tagul `nav`, cu lista neordonata si linkuri | `views/pagini/index.ejs`: 32-84 |
| 3 | Icon Font Awesome pentru fiecare optiune principala | `views/pagini/index.ejs`: 42-80 |
| 4 | Submeniu cu linkuri catre sectiuni din pagina `Acasa` | `views/pagini/index.ejs`: 41-52 |
| 5 | Submeniu cu linkuri catre alte pagini din site, grupate sub `Galerii` | `views/pagini/index.ejs`: 60-69 |
| 6 | Variabile CSS pentru tema meniului in selectorul `body` | `resurse/css/menu.scss`: 42-56 |
| 7 | Selectori complecsi prin imbricare SASS | `resurse/css/menu.scss`: 58-198, 200-220, 222-372 |
| 8 | Cod comun refolosit cu `@extend` | `resurse/css/menu.scss`: 27-40, 103-104, 183-184 |
| 9 | Instructiune repetitiva `@for` pentru optiunile meniului | `resurse/css/menu.scss`: 83-87 |
| 10 | Desktop: bara glisanta cu gradient in 3 culori prin `::after` | `resurse/css/menu.scss`: 126-149 |
| 11 | Desktop: submeniul se deschide prin `transform: scale(...)` din centru | `resurse/css/menu.scss`: 152-176 |
| 12 | Hover pe submeniu cu schimbare de background | `resurse/css/menu.scss`: 191-195 |
| 13 | Ecran mediu: text ascuns, raman doar iconurile principale | `resurse/css/menu.scss`: 200-218 |
| 14 | Ecran mic: hamburger menu fara JavaScript | `resurse/css/menu.scss`: 222-270 |
| 15 | Ecran mic: meniul principal apare cu `clip-path: circle(...)` cand este apasat hamburger-ul | `resurse/css/menu.scss`: 272-339 |
| 16 | Ecran mic: prima pagina este afisata doar ca icon casa | `resurse/css/menu.scss`: 312-318 |

Comanda folosita pentru compilare:

```bash
npx sass resurse/css/menu.scss resurse/css/menu.css
```

### Stil pentru printare (Etapa 3)

Fisiere principale: `views/pagini/index.ejs`, `resurse/css/style.css`

| # | Cerinta | Linii in cod (start+interval) |
|---|---|---|
| 1 | Bannerul este paragraf in footer cu textul cerut | `views/fragmente/footer.ejs`: 1-3 |
| 2 | Banner print jos pe prima pagina, centrat, 70% latime, border negru inset 4px | `resurse/css/style.css`: 845-860 |
| 3 | Ascundere imagini, video/audio, iframe, object/PDF si elemente dependente | `resurse/css/style.css`: 815-836 |
| 4 | Ascundere link catre inceputul paginii la print | `views/fragmente/footer.ejs`: 2; `resurse/css/style.css`: 834-836 |
| 5 | Gridul paginii si zona 1 devin block la print | `resurse/css/style.css`: 766-775 |
| 6 | Linkurile se afiseaza ca text normal | `resurse/css/style.css`: 806-812 |
| 7 | H1 centrat, subtitlu ascuns, meniu ca lista neordonata verticala | `resurse/css/style.css`: 682-764 |
| 8 | Submeniurile si iconurile meniului sunt ascunse la print | `resurse/css/style.css`: 707-711 |
| 9 | Page break dupa meniul din header si inainte de footer | `resurse/css/style.css`: 682-686, 839-842 |
| 10 | Watermark pe fiecare pagina cu nume/prenume, 4cm x 1cm, border 3px, opacity 0.4 | `resurse/css/style.css`: 643-666 |
| 11 | Margini diferite pentru pagini stanga/dreapta in print preview | `resurse/css/style.css`: 611-626 |
| 12 | Media query-urile responsive sunt limitate la ecran, ca sa nu afecteze printarea | `resurse/css/style.css`: 566, 864 |

## Referinte rapide pentru prezentare (Etapa 4)

Fisiere principale: `index.js`, `package.json`, `views/`, `erori.json`, `resurse/`

| # | Cerinta | Linii in cod (start+interval) |
|---|---|---|
| 1 | Proiect Node initializat cu nume, autor, descriere, keywords si dependinte Express/EJS | `package.json`: 1-31 |
| 2 | Server Express, view engine EJS si views setat pe folderul `views` | `index.js`: 3-19 |
| 3 | Afisare `__dirname`, `__filename`, `process.cwd()` si observatia despre diferenta lor | `index.js`: 13-16 |
| 4 | Vector `vect_foldere` si creare foldere generate cu `path.join()` | `index.js`: 21-27 |
| 5 | Structura EJS: `views/pagini` si `views/fragmente` | `views/pagini/index.ejs`, `views/fragmente/head.ejs`, `views/fragmente/header.ejs`, `views/fragmente/footer.ejs` |
| 6 | Head, header si footer decupate in fragmente si incluse cu `include()` | `views/pagini/index.ejs`: 4-10; `views/fragmente/head.ejs`: 1-20; `views/fragmente/header.ejs`: 1-55; `views/fragmente/footer.ejs`: 1-27 |
| 7 | Folderul `/resurse` definit static si resurse mutate in subfoldere | `index.js`: 98-109; `resurse/css`, `resurse/imagini`, `resurse/documente`, `resurse/ico` |
| 8 | Cai resursa de tip cerere catre server, cu `/resurse/...` | `views/fragmente/head.ejs`: 9-20; `views/pagini/index.ejs`: 102-105, 155-171, 265-268 |
| 9 | Prima pagina accesibila prin `/`, `/index`, `/home` | `index.js`: 111-113 |
| 10 | Ruta generala `/*` pentru randarea paginilor EJS | `index.js`: 115-123 |
| 11 | Callback la `render()` cu tratare 404 pentru view lipsa si eroare generica pentru alte erori | `index.js`: 66-80 |
| 12 | Configurare `erori.json` cu baza, eroare default si 400/403/404 | `erori.json`: 1-31 |
| 13 | `initErori()` incarca JSON-ul si construieste caile imaginilor | `index.js`: 29-40 |
| 14 | `afisareEroare()` selecteaza eroarea, permite suprascrieri si seteaza statusul | `index.js`: 42-64 |
| 15 | Template EJS comun pentru erori | `views/pagini/eroare.ejs`: 1-24 |
| 16 | Pagina noua accesibila din meniu | `views/fragmente/header.ejs`: 35-39; `views/pagini/istoric.ejs`: 1-28 |
| 17 | IP-ul utilizatorului afisat in zona de date utilizator | `index.js`: 66-68, 85-88; `views/pagini/index.ejs`: 123-126 |
| 18 | Cereri catre foldere din `/resurse` primesc 403 | `index.js`: 98-107 |
| 19 | Cereri catre fisiere `.ejs` primesc 400 | `index.js`: 94-96 |
| 20 | Ruta `/favicon.ico` trimite favicon cu `sendFile()` | `index.js`: 90-92 |
