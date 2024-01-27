/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
// let nuovoArray = pets.sort()
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let nuovoArray = [];
for (let i = 0; i < pets.length; i++) {
  nuovoArray.unshift(pets[i]);
}
console.log(nuovoArray);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let eliminato = pets.pop();
pets.unshift(eliminato);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per 
    aggiungere ad ognuno di essi una proprietà "licensePlate" 
    con valore a tua scelta.
*/
// console.log(cars);
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
let targa = "EK050YC";
let nuovoArrayCar = [];
let arrayCars = [];
// let macchina = {};

for (let i = 0; i < cars.length; i++) {
  nuovoArrayCar = cars[i];
  nuovoArrayCar.licensePlate = targa;
  // console.log(nuovoArrayCar);
  // arrayCars.push(nuovoArrayCars[i]);
  arrayCars.push(nuovoArrayCar[i]);
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", 
    rispettando la struttura degli altri elementi.

    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: "Audi",
  model: "R8",
  color: "gray",
  licensePlate: targa,
  trims: ["life", "style", "s-line"],
};

// console.log(newCar);

// for (let i = 0; i < cars.length; i++) {
//   cars.push(newCar);
// }
cars.push(newCar);
console.log(cars);
// let objTrims =
let carObj = [];
let prova = [];
prova = structuredClone(cars);

for (let i = 0; i < cars.length; i++) {
  carObj = cars[i];
  // carObj.push(carObj.trims);
  // console.log(carObj);
  // console.log(carObj);

  delete carObj.trims;

  // console.log(carObj);
}
console.log(cars);
// console.log(prova);

/* ESERCIZIO 7
Scrivi del codice 
per 
salvare il primo elemento 
  della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
let objTrims = [];
// console.log(prova[0].trims[0]); // mostra titanium
// let prova = [];    //contiene tutto array
for (let i = 0; i < prova.length; i++) {
  // justTrims.push(prova.trims);
  justTrims.push(prova[i].trims[0]);
}
console.log(justTrims);

// const cars = [
//   {
//     brand: "Ford",
//     model: "Fiesta",
//     color: "red",
//     trims: ["titanium", "st", "active"],
//   },

/* ESERCIZIO 8
    Cicla l'array "cars" 
      e costruisci un if/else statament 
        per mostrare due diversi messaggi in console. 

      Se la prima lettera della proprietà "color" ha valore "b", 

        mostra in console "Fizz". 
      Altrimenti, mostra in console "Buzz".
*/

//accedere a color
// console.log(cars[0].color); // mostra color
// console.log(cars[0].color.charAt(0)); // mostra prima lettera color

// let provaStr = "";
// provaStr = cars[0].color; //parola color
// console.log(provaStr);

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while 
      per stampare in console 
        i valori del seguente array numerico 
    fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let n = 0;
// console.log(numericArray.length);
// console.log(numericArray[n]);
// for (let x = 0; x < numericArray.length; x++) {
//   if (numericArray[x] !== 32) {
//     console.log(numericArray[x]);
//   } else {
//   }
// }

while (numericArray[n] !== 32) {
  console.log(numericArray[n]);
  n++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, 
    genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabetoStr = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const arrayAlfabeto = alfabetoStr.split(" "); //  array alfabeto
// const arrayPosAlfabeto = arrayAlfabeto
const nuovoArrayAlf = [];
console.log(arrayAlfabeto.length);
let lettera = [];
for (let i = 0; i < charactersArray.length; i++) {
  lettera = charactersArray[i];
  switch (lettera) {
    case arrayAlfabeto[0]:
      nuovoArrayAlf.push();
      break;
    case arrayAlfabeto[1]:
      break;
    case arrayAlfabeto[2]:
      break;
    case arrayAlfabeto[3]:
      break;
    case arrayAlfabeto[4]:
      break;
    case arrayAlfabeto[5]:
      break;
    case arrayAlfabeto[6]:
      break;
    case arrayAlfabeto[7]:
      break;
    case arrayAlfabeto[8]:
      break;
    case arrayAlfabeto[9]:
      break;
    case arrayAlfabeto[10]:
      break;
    case arrayAlfabeto[11]:
      break;
    case arrayAlfabeto[12]:
      break;
  }
}
