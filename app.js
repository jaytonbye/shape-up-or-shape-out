document.getElementById('rectangleButton').addEventListener('click',()=>{
    new Rectangle
})

document.getElementById('squareButton').addEventListener('click',()=>{
    new Square
})

document.getElementById('circleButton').addEventListener('click',()=>{
    new Circle
})

document.getElementById('triangleButton').addEventListener('click',()=>{
    new Triangle
})

document.getElementById('wayneCarlButton').addEventListener('click',()=>{
    new WayneCarl
})

class Shape{
    constructor(){
        // let randomX = Math.floor(Math.random()*600)
        // let randomY = Math.floor(Math.random()*600)
        // newDiv.style.top = `${randomY}px`
        // newDiv.style.left = `${randomX}px`
        let newDiv = document.createElement('div')
        document.getElementById('canvas').appendChild(newDiv)
        newDiv.style.position = 'absolute'
        this.div = newDiv
        newDiv.style.opacity = '.5'
        newDiv.addEventListener('dblclick',()=>{
            newDiv.remove()
        })
        newDiv.addEventListener('click',()=>{
            this.describe()
        })
    }
}

class Square extends Shape{
    constructor(sideLength){
        super()
        let randomX = Math.floor(Math.random()*(600 - document.getElementById('squareWidth').value))
        let randomY = Math.floor(Math.random()*(600 - document.getElementById('squareWidth').value))
        this.div.style.top = `${randomY}px`
        this.div.style.left = `${randomX}px`
        this.div.style.width = `${document.getElementById('squareWidth').value}px`
        this.div.style.height = `${document.getElementById('squareWidth').value}px`
        this.div.style.backgroundColor = `red`
    }
    describe(){
        document.getElementById('shapeOutput').value = this.constructor.name
        document.getElementById('heightOutput').value = this.div.clientHeight
        document.getElementById('widthOutput').value = this.div.clientWidth
        document.getElementById('areaOutput').value = this.div.clientHeight * this.div.clientWidth
        document.getElementById('perimeterOutput').value = this.div.clientWidth * 4
        document.getElementById('radiusOutput').value = 'n/a'
    }
}

class Rectangle extends Shape{
    constructor(){
        super()
        let randomX = Math.floor(Math.random()*(600 - document.getElementById('rectangleWidth').value))
        let randomY = Math.floor(Math.random()*(600 - document.getElementById('rectangleHeight').value))
        this.div.style.top = `${randomY}px`
        this.div.style.left = `${randomX}px`
        this.div.style.width = `${document.getElementById('rectangleWidth').value}px`
        this.div.style.height = `${document.getElementById('rectangleHeight').value}px`
        this.div.style.backgroundColor = `green`
    }
    describe(){
        document.getElementById('shapeOutput').value = this.constructor.name
        document.getElementById('heightOutput').value = this.div.clientHeight
        document.getElementById('widthOutput').value = this.div.clientWidth
        document.getElementById('areaOutput').value = this.div.clientHeight * this.div.clientWidth
        document.getElementById('perimeterOutput').value = this.div.clientWidth * 2 + this.div.clientHeight * 2
        document.getElementById('radiusOutput').value = 'n/a'
    }
}

class Triangle extends Shape{
    constructor(){
        super()
        let randomX = Math.floor(Math.random()*(600 - document.getElementById('triangleHeight').value))
        let randomY = Math.floor(Math.random()*(600 - document.getElementById('triangleHeight').value))
        this.div.style.top = `${randomY}px`
        this.div.style.left = `${randomX}px`
        this.div.style.borderBottom = `${document.getElementById('triangleHeight').value}px solid yellow`
        this.div.style.borderRight = `${document.getElementById('triangleHeight').value}px solid transparent`
    }
    describe(){
        let side = parseFloat(document.getElementById('triangleHeight').value)
        document.getElementById('shapeOutput').value = this.constructor.name
        document.getElementById('heightOutput').value = side
        document.getElementById('widthOutput').value = side
        document.getElementById('areaOutput').value = side * side / 2
        document.getElementById('perimeterOutput').value = side + side + parseFloat(Math.sqrt(side*side*2))
        document.getElementById('radiusOutput').value = 'n/a'
    }
}

class Circle extends Shape{
    constructor(){
        super()
        let randomX = Math.floor(Math.random()*(600 - (document.getElementById('circleRadius').value)*2))
        let randomY = Math.floor(Math.random()*(600 - (document.getElementById('circleRadius').value)*2))
        this.div.style.top = `${randomY}px`
        this.div.style.left = `${randomX}px`
        this.div.style.backgroundColor = `purple`
        this.div.style.width = `${document.getElementById('circleRadius').value*2}px`
        this.div.style.height = `${document.getElementById('circleRadius').value*2}px`
        this.div.style.borderRadius = '50%'
    }
    describe(){
        document.getElementById('shapeOutput').value = this.constructor.name
        document.getElementById('heightOutput').value = 'n/a'
        document.getElementById('widthOutput').value = 'n/a'
        document.getElementById('areaOutput').value = Math.PI * (this.div.clientWidth / 2) * (this.div.clientWidth / 2)
        document.getElementById('perimeterOutput').value = this.div.clientWidth * Math.PI
        document.getElementById('radiusOutput').value = (this.div.clientWidth / 2)
    }
}

class WayneCarl extends Shape{
    constructor(){
        super()
        let randomX = Math.floor(Math.random()*(600 - document.getElementById('wayneCarlHeight').value))
        let randomY = Math.floor(Math.random()*(600 - document.getElementById('wayneCarlHeight').value))
        this.div.style.top = `${randomY}px`
        this.div.style.left = `${randomX}px`
        this.div.style.height = `${document.getElementById('wayneCarlHeight').value}px`
        this.div.style.width = `${document.getElementById('wayneCarlHeight').value}px`
        this.div.style.opacity = '1'
        this.div.style.backgroundImage = 'url(./WayneCarlDead.png)'
        this.div.style.backgroundSize = 'cover'
    }
    describe(){
        document.getElementById('shapeOutput').value = "Don't worry"
        document.getElementById('heightOutput').value = "no WayneCarls" 
        document.getElementById('widthOutput').value = "were hurt" 
        document.getElementById('areaOutput').value = "in the"
        document.getElementById('perimeterOutput').value = "making of"
        document.getElementById('radiusOutput').value = "this program"
    }
}