console.log("Script is running");

const groentevak = document.getElementById("groente");
const fruitvak = document.getElementById("fruit");

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement);
}