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

						if (tileMap01.mapGrid[row][col][0] === 'P') {
							element.classList.add('player');
							player.x = row;
							player.y = col;
						}

			element.id = "x" + row + "y" + col;	
			gameMap.appendChild(element);

		}
	}
}

function keyPress(event) {

	var eventMove = event.keyCode;

		window.addEventListener("keydown", function (event) {
		if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
			event.preventDefault();
		}
	}, false);
	
	
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
	
	var newBoxY = player.y + (y + 1);	//New position of the box
	var newBoxX = player.x + (x + 1);

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

		playerElement.classList.remove("player");  //till??gg
		destination.classList.add("player");   //till??gg
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
	
