export class Player {
	constructor (name = "adam", characterImage, speed, facingDirection = "down", playerX = 0, playerY = 0)
	{
		this.box = document.createElement("img");
		this.box.src = characterImage;
		this.box.classList.add("player");

		this.name = name;
		this.characterImage = characterImage;
		this.facingDirection = facingDirection;
		this.map = document.querySelector("#map")
		// this.speed = speed;
		// console.log(this.map)
	}
	spawn(x = 0, y = 0, map) {

		this.playerX = x;
		this.playerY = y;
		this.box.style.top = x + "px";
		this.box.style.left = y + "px";
		map.appendChild(this.box);
	}

	is_allowed_to_move(objects)
	{
		for (let i = 0; i < objects.length; i++) {
			
			const element = objects[i];
			console.log("x -> ", this.playerX)
			console.log("y -> ", this.playerY)
			console.log("element.x -> ", element.x)
			console.log("element.width -> ", element.width)
			console.log("element.height -> ", element.height)
			if ((element.x + (element.width / 4)) >= this.playerX && (element.y + (element.height / 4) >= this.playerY)) // rock x 200  WIDTH 200  Player X 300  
				return false
		}
		return true
	}

	move(direction, objects)
	{
		this.facingDirection = direction;
		if (direction == "UP")
		{

			if (this.playerY >= 0)
				this.playerY -= 100 ;
			this.box.src = "./img/gifmaker_me(3).gif"
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me(2).gif"} , 800);
		}
		if (direction == "RIGHT")
		{
			if (this.playerX < this.map.offsetWidth - 200)
				this.playerX += 100 ;
			this.box.src = "./img/gifmaker_me(7).gif"
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me(6).gif"} , 100);
		}
		if (direction == "DOWN")
		{
			if (this.playerY < this.map.offsetHeight - 200)
				this.playerY += 100 ;
			this.box.src = "./img/gifmaker_me(1).gif";
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me.gif"} , 100);

		}
		if (direction == "LEFT")
		{
			if (this.playerX >= 0 && this.is_allowed_to_move(objects))
				this.playerX -= 100 ;
			this.box.src = "./img/gifmaker_me(5).gif"
			setTimeout(() => {if (this.facingDirection == direction){this.box.src = "./img/gifmaker_me(4).gif"}} , 100);
		}
		this.box.style.top = this.playerY + "px";
		this.box.style.left = this.playerX + "px";
		console.log("cords: " + this.playerX + " , " + this.playerY);
	}

	locate()
	{
		return {x: this.playerX, y: this.playerY};
	}

}
