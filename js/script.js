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

const numeri = [21,3,45,543,6,1,2];
const lettere = ["a",'za','ax','a']
console.log(numeri.length,lettere.length);
const alfanum = createAlfaNum()
console.log(alfanum);


// function //


function createAlfaNum(){
  const alfanum = []
  // confronto le due lunghezze degli array, prendo la lunghezza più piccola e il suo valore diventa il limit per il ciclo for
  const limit = Math.min(numeri.length, lettere.length)
  console.log(limit);
  // ciclo tutti gli elementi fino a un limit che è la lunghezza più piccola tra le due lunghezze degli arraye li pusho in un array nuovo
  for(let i=0; i<limit;i++){
    alfanum.push(numeri[i],lettere[i])
    console.log(alfanum);
  }
  // pusho gli elementi con indice superiore a limit
  alfanum.push(...numeri.slice(limit),...lettere.slice(limit))
  console.log(alfanum);
  return alfanum
}





