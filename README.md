# Indítás

Az alkalmazás lebuildelve a `dist` mappában található, tetszőleges http szerveren futtatható, vagy angular cli segítségével a `wallpaper` mappában állva:

```ng serve```

A frontendet egy mock json-server látja el adatokkal, a `data` mappában található `data.json` fájlból. A mock szerver telepítése:

```npm install -g json-server```

A mock szerver indítása a `data` mappában állva:

```json-server --watch data.json```


## Próbafeladat - Wallpaper gyűjtő weboldal
A feladat rövid leírása:

A cél egy olyan SPA oldal létrehozása, amely egy háttérkép megosztó oldal. A háttérképek témakörönként csoportokba vannak rendezve és az egyes témakörökön belül az első 5 kép látható, egyébként lapozható.

A weblapnak a következő főbb oldalakból kell állnia:

#### Főoldal

A főoldalon jelenjen meg egy kiemelt slider, amelyben 5 másodpercenként egy random háttérkép jelenik meg. A sliderben megjelenő képek csak wide (tehát fekvő) tájolásúak legyenek.

A slider alatt legyen az oldal címe, és ezt követően három ajánlott galéria. Az ajánló box egy képből álljon és legyen ott a témakör címe.

#### Galéria lista oldal

A menüben legyen elérhető a listaoldal, ahol a különböző témakörökbe tartozó galériák csempe-kártyái találhatóak. A galériák közül választva  jussak el a galéria aloldalra.

#### Galéria oldal

A galéria aloldalon legyen egy kiemelt kép (a legelső a listában), amely nagyban is megtekinthető. Legyen mellette vagy alatta 2 gomb. Az egyikkel le lehet tölteni a képet, a másikkal pedig a kedvencek listához lehet hozzáadni.

A kiemelt kép alatt jelenjenek meg kis csempe-kártyákon a galéria többi elérhető képei. Ezek közül, ha valamelyiket kiválasztom, a felső kiemelt szekcióban jelenjen meg. Fontos, hogy a letöltés vagy kedvencekhez való hozzáadásnál mindig a kiválasztott kiemelt képpel történjen az interakció.

##### Kedvenceim

Azért, hogy a kedvenc képeimet gyorsan elérjem, szükséges egy kedvencek aloldal. Ez az oldal hasonlóan jelenjen meg, mint a galéria aloldal, azzal a különbséggel, hogy itt az összes kedvencnek jelölt képem látszik, függetlenül attól, hogy mely témakörben jelöltem be. Azomban itt a csempe-kártyákon ne csak a kép neve és mérete jelenjen meg, hanem az is, hogy melyik témakörbe tartozik. Ha a listámon több mint 10 kép van, akkor jelenjen meg egy lapozó, amivel tudok lépkedni a listámban. A kedvencek listán a “kedvencekhez hozzáadás” gomb helyett legyen egy “törlés a kedvencek közül” gombom.

Legyen egy olyan speciális link vagy gomb is a kedvencek oldalon, amivel egy gombnyomásra törölhetem a teljes kedvencek listámat.

## Kiegészítő elemek / oldalak

Az oldal fő kialakítása alapján, legyen neki fejléce, lábléce és a kettő között jelenjen meg a tartalom. A fejléc és a lábléc 1-1 componens legyen és minden oldalon jelenjen meg. Az aloldalakon a különböző mélységek között oda vissza tudjak közlekedni. Ez legkönnyebben egy breadcrumbs segítségével oldható meg. Az oldal legyen responsive.

#### Fejléc

A fejlécben lássam, hogy mennyi kedvenc képet jelöltem be, mely jelölés a menüpont mellett jelenik meg. A menü legyen responsive, és tablet (640px) mérettől kissebb méreten már egy hamburger menü jelenjen meg, melyre kattintva elérhető mobilon is a menü.

#### Lábléc

A láblécben szerepeljen egy logó, amely jelképezi a weboldalt, és legyen két link: Általános szerződési feltételek, Cookie Policy.

Ezek a linkek vezessenek 1-1 aloldalra, ahol a cím a link címe, alatta lorem ipsum szöveget szúrj be, de némi tipográfiát kérlek adj neki. Legyen benne H1, H2, H3, felsorolás, paragrafus, idézet.

#### 404 aloldal

Ha az url-be olyan aloldalt akarok betölteni ami nem létezik, akkor egy standard 404-es aloldal jelenjen meg. Innen tudjak visszanavigálni a főoldalra.

#### Csempe-kártya

A csempe kártya legyen egy dizájnos kialakítású. A kép és a szöveg jól illeszkedjen egymáshoz. A képe akár fekvő akár álló, mindig megfelelően jelenjen meg a kártyán. 

-   A kép alatt jelenjen meg a kép neve (ha túl hosszú vágja le egy bizonyos hossz után),
-   A kép neve alatt jelenjen meg a file mérete, kiterjesztése, kategóriája (témakör)
-   A képre kattintva galéria előnézet esetén vezessen az aloldalra, a galérián belül pedig töltődjön be a kiemelt nézet helyére.

#### Képek

A képeket fekvő esetén 1024x768px méretűek legyenek, álló esetén 300x768px méretűek. A képeket ha tudod optimalizáld, hogy minél kisebbek legyenek. A csempe képek legyenek kissebb méretűek mint az eredeti (thumbanil), a gyorsabb betöltés érdekében.

#### Kedvencek

A kedvenceknek jelölt képeket gyűjtsd egy közös objektumba, amelyet vagy cookie-ba vagy local storage- ba tárolsz le. Fontos, hogy minden oldal frissítéskor ne vesszenek el a már bejelölt kedvenc képeim, hanem emlékezzen rá. Akár hozzáadom, akár kiveszem a kedvencek listájáról a képet, ez a json tárolódjon le, hisz nem tudható mikor frissítek rá az oldalra.

#### Globale state, global storage

Az alkalmazásodban legyen mindenképpen global state és global storage kezelés. Tehát a galéria képek, kategóriák ne minden érintett komponensben legyenek felsorolva, hanem egy közös Global state-ből érjék el az információkat. A cél az, hogy könnyedén tudjak újabb képeket hozzáadni bármely kategóriához. Ehhez az kell, hogy csak egy helyen kelljen módosítanom a kódon és az az oldal minden részén elérhető lesz onnantól.

---

A feladat megoldása során a frontendhez bármilyen reaktív frameworköt lehet használni. A képek bármit ábrázolhatnak a normalitás határain belül. Azomban legyenek különbözőek a képek, tehát ne ugyan azt a képet használd fel kérlek többször.

A feladat megoldása során bármilyen segítséget használhatsz, (google, framework dokumentációja, egyéb információ források), de kérlek ne egy előre elkészített komplett forráskódot vagy algoritmusokat használj.

Az oldal kinézetéhez nyugodtan kereshetsz valamilyen free CSS templatet és felhasználhatod azt, nem kell a designt kitalálni. A templateket azomban a fenti feladat leírásnak megfelelően úgyis módosítani kell így bőven elég arra, hogy a HTML és a CSS ismereteidet bemutasd.