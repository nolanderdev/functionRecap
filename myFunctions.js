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
button.addEventListener('click', pokeChange);

function pokeChange(){
    if(index > pokeArray.length - 1){
        index = 0;
    };
    picElement.src = pokeArray[index].image;
    pokeName.innerHTML = pokeArray[index].name;
    index++;
};