const gameMap = document.getElementById("gameMap");
document.body.addEventListener('keydown', keyPress);
let gCounter = 0;

var player = {
	x: 1,
	y: 1
};

function initializeMap()

			{
		console.log(tileMap01);
				for (let row = 0; row < tileMap01.height; row++) {
					for (let col = 0; col < tileMap01.width; col++) {


						var element = document.createElement("div");
						element.classList.add("block");

						if (tileMap01.mapGrid[row][col][0] === 'W') {
							console.log(tileMap01.mapGrid[row][col][0]);

							element.classList.add('wall');
							element.classList.add(tileMap01.mapGrid[row][col][0]);
						}

						else if (tileMap01.mapGrid[row][col][0] === 'G') {
							console.log(tileMap01.mapGrid[row][col][0]);

							element.classList.add('goal');
							element.classList.add(tileMap01.mapGrid[row][col][0]);
						}

						else if (tileMap01.mapGrid[row][col][0] === 'B') {
							console.log(tileMap01.mapGrid[row][col][0]);

							element.classList.add('block');
							element.classList.add(tileMap01.mapGrid[row][col][0]);
						}

						element.id = "x" + row + "y" + col;

						if (row === 11 && col === 11) {
							element.classList.add("player");
							player.x = row;
							player.y = col;
						}

			gameMap.appendChild(element);

		}
	}
}

function keyPress(event) {

	var eventMove = event.keyCode;

	switch (eventMove) {

		case 38:
			movePlayer(-1, 0);
			break;

		case 40:
			movePlayer(1, 0);
			break;

		case 37:
			movePlayer(0, -1);
			break;

		case 39:
			movePlayer(0, 1);
			break;

		default:

			break;
	}
}

function movePlayer(x, y) {
	var newBoxDestination;
	var newY = player.y + y;
	var newX = player.x + x;
	
	var newBoxY = player.y + (2 * y);	//New position of the box
	var newBoxX = player.x + (2 * x);

	var playerElement = document.getElementById("x" + player.x + "y" + player.y);
	var destination = document.getElementById("x" + newX + "y" + newY);
	var newBoxDestination = document.getElementById("x" + newBoxX + "y" + newBoxY);


	if (!destination.classList.contains('wall') && (!destination.classList.contains('B'))) {

		playerElement.classList.remove("player");
		destination.classList.add("player");
		player.x = newX;
		player.y = newY;

	}

	if (destination.classList.contains('B') && (!newBoxDestination.classList.contains('W')) && (!newBoxDestination.classList.contains('B'))) {
		playerElement.classList.remove("player");
		destination.classList.add("player");
		destination.classList.remove('B');

		playerElement.classList.remove("player");  //tillägg
		destination.classList.add("player");   //tillägg
		player.x = newX;
		player.y = newY;

		if (!newBoxDestination.classList.contains('G')) {
			newBoxDestination.classList.add('B');
		}

		if (newBoxDestination.classList.contains('G')) {
			newBoxDestination.classList.remove('G');
			playerElement.classList.remove("player");
			destination.classList.add('player');

			addCount();
			
			if (gCounter == 6) {
				alert('Huzzah! The game is won!');
				location.reload();
        }
	}
}

	function addCount() {
		gCounter++;
	}
}

initializeMap();
	