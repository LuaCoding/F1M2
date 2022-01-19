const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');
const myInput = document.getElementById('myInput');

let lokaties = [
    {
        "titel":"plaats 0",
        "image":"img/0.jpg"
    },
    {
        "titel":"plaats 1",
        "image":"img/1.jpg"
    },
    {
        "titel":"plaats 2",
        "image":"img/2.jpg"
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg"
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg"
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg"
    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg"
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg"
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg"
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg"
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg"
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg"
    }
]

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}