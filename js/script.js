// JSNACK 1 //
const cucumbers = [
  {
    varietà: "bab",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "ddx",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "aaf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "sdf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "wsa",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "yyh",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "bbf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "wsx",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "bgb",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "scv",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
]

// uso reduce per sommare ogni elemento al totale, inizializzato a 0
const totalWeight = cucumbers.reduce((total, cucumber) => total + cucumber.peso, 0)

console.log(totalWeight);

// FUNCTIONS //
function randomNum(min,max){
  return Math.ceil(Math.random(max-min)*max)
}

// JSNACK 2 //
// JSNACK 1 //
const cucumbers2 = [
  {
    varietà: "bab",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "ddx",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "aaf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "sdf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "wsa",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "yyh",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "bbf",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "wsx",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "bgb",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
  {
    varietà: "scv",
    peso: randomNum(50,300),
    lunghezza: randomNum(10,40),
  },
]
// divido le zucchine lunghe in un array e le zucchine corte in un altro array
const long = cucumbers2.filter(cucumber => cucumber.lunghezza < 15)
const short = cucumbers2.filter(cucumber => cucumber.lunghezza > 15)
console.log(long.length,short.length);

// sommo tutti i pesi sia delle corte che delle lunghe
const totalWeightShort = short.reduce((total, cucumber)=> total + cucumber.peso, 0);
const totalWeightLong = long.reduce((total, cucumber)=> total + cucumber.peso, 0)
console.log(totalWeightShort,totalWeightLong); 



// JSNACK 3 //

const parola = "pretoriano"
const parolaGirata = giraParola(parola)
console.log(parolaGirata);
// functions //
 
function giraParola(parola){
  return parola.split("").reverse().join("");
};


// JSNACK 4 //