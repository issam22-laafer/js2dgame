export class Object {
    constructor (name = "block", src ,width = 50, height = 50, x = 10, y = 10)
    {
        this.name = name;
        this.width = width;
        this.height = height;
        this.name = name;
        this.src = src;
        this.x = x;
        this.y = y;
    }
    spawn()
    {
        let obj = document.createElement("img");
        obj.src = this.src;
        obj.classList.add("absolute", `w-[${this.width}px]`, `h-[${this.height}px]`)
        obj.style.x = this.x
        obj.style.y = this.y

        const map = document.querySelector("#map")
        console.log(map)
        map.appendChild(obj)

        return {
            x: this.x,
            y: this.y,
            height: this.height,
            width: this.width
        }
    }
}
