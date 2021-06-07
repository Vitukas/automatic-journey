const player1 = {
    name: 'Scorpion',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fireball', 'kick', 'hook'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    },
}
const player2 = {
    name: 'Sonya',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['fireball', 'kick', 'hook'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    },
}

function createPlayer(player, character) {
    const $progressbar = document.createElement('div');
    const $player1 = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');
    const $root = document.querySelector('.arenas');

    $player1.classList.add(player);
    $life.classList.add('life');
    $name.classList.add('name');
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');

    $img.src = character.img;
    $name.innerText = character.name;
    $life.style.width = character.hp + '%';

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $root.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);