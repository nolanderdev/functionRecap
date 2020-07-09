let pokeArray = [
    {name:'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name:'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name:'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name:'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name:'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
];
index = 0;


let picElement = document.getElementById('pokePic');

let pokeName = document.getElementById('name');

let button = document.getElementById('button');

let historyPic = document.getElementById('histPic');

let historyName = document.getElementById('name2')

button.addEventListener('click', pokeChange);


function pokeChange(){
    if(index > pokeArray.length - 1){
        index = 0;
        historyFill(pokeArray.length - 1);
    };
    picElement.src = pokeArray[index].image;
    pokeName.innerHTML = pokeArray[index].name;
    if(index > 0){
        historyFill(index -1);
    }
    index++;
};

function historyFill(index){
    historyPic.src = pokeArray[index].image;
    historyName.innerHTML = pokeArray[index].name;
}