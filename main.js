const player1 = {
    name: "Sonya Blade",
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    hp: 100,
    weapon: "Bamboo sticks",
    attack: function() {
        console.log(player1.name + " Fight...")
    }
}

const player2 = {
    name: "Kitana",
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    hp: 100,
    weapon: "Battle fan",
    attack: function() {
        console.log(player2.name + " Fight...")
    }
}

function createPlayer(player, object) {

    const divPlayer = document.createElement("div");
    divPlayer.classList.add(player);


    const divProgressbar = document.createElement("div");
    divProgressbar.classList.add("progressbar");
    divPlayer.appendChild(divProgressbar);


    const divLife = document.createElement("div");
    divLife.classList.add("life");
    divLife.style.width = "100%"
    divLife.innerText = object.hp;
    divProgressbar.appendChild(divLife);


    const divName = document.createElement("div");
    divName.classList.add("name");
    divName.innerText = object.name;
    divProgressbar.appendChild(divName);


    const divCharacter = document.createElement("div");
    divCharacter.classList.add("character");
    divPlayer.appendChild(divCharacter);


    const imgCharacter = document.createElement("img");
    imgCharacter.src = object.img;
    divCharacter.appendChild(imgCharacter);


    const divArenas = document.querySelector(".arenas");
    divArenas.appendChild(divPlayer);
}
createPlayer("player1", player1);
createPlayer("player1", player1);