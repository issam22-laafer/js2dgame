import { Player } from "./Player.js";
import { Object } from "./Object.js";
const map = document.getElementById("map");
let rocks = []

// charachters ___________
const player = new Player("steve", "./img/gifmaker_me.gif");

player.spawn(500 , 500, map);


// objects______
const rock  = new Object("rock", "./img/rock.png", 200, 200, 100, 300);

rocks.push(
	rock.spawn()
)















document.onkeyup = (e) => {
	if (e.keyCode === 38) {
		player.move("UP", rocks);
	//   console.log('up arrow pressed');
	}
	if (e.keyCode === 40) {
		player.move("DOWN", rocks);
	//   console.log('down arrow pressed');
	}
	if (e.keyCode === 37) {
		player.move("LEFT", rocks);
	//   console.log('left arrow pressed')
	} 
	if (e.keyCode === 39) {
		player.move("RIGHT", rocks);
	//   console.log('right arrow pressed')
	}

  }


	setInterval(
		followPlayer
		, 500
	)
	

  const enemy = new Player("creeper", "./img/gifmaker_me.gif");
  enemy.spawn(
	100, 300, map
  )

  function followPlayer() {
	const playerCords = player.locate();
	const myCords = enemy.locate();

	const xDistance = playerCords.x - myCords.x + Math.floor(Math.random() * 500) - 100;
	const yDistance = playerCords.y - myCords.y + Math.floor(Math.random() * 500) - 100;

	console.table(xDistance, yDistance)

	if (Math.abs(xDistance) > Math.abs(yDistance)) {
		if (xDistance > 0) {
			enemy.move("RIGHT")
		}
		else enemy.move("LEFT");
	} else {
		if (yDistance > 0) {
			enemy.move("DOWN");
		}
		else enemy.move("UP");
	}
  }

  

