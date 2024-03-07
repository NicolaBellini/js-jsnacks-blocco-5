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