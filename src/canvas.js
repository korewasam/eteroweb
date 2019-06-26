componentDidMount(){
    console.log('canvas', this.cRef)
    let c = this.cRef.current.getContext('2d');
     var mouse = {
       x: undefined,
       y: undefined
     }
     window.addEventListener('mousemove', (event)=>{
        mouse.x = event.x
        mouse.y = event.y
        console.log(mouse)
     })
    //c.fillStyle = 'skyblue'
    //c.fillRect(50, 50, 50, 20)

    /*c.beginPath()
    c.moveTo(29, 20)
    c.lineTo(49, 50)
    c.lineTo(69, 60)
    c.stroke()

    for(let i=0;i<3;i++){
      let x  = Math.random() * 200
      let y  = Math.random() * 300
      c.beginPath()
      c.arc(x, y, 50, Math.PI * 2, false)
      c.stroke()
    }*/


     // creating many circles each with independent values 
    //creating the circles object
    function Circle(x, y, dx, dy, radius){
      this.x = x
      this.y = y
      this.dx = dx
      this.dy = dy
      this.radius = radius
      this.minRadius = radius
      this.maxRadius = 100
      this.color = colors[Math.floor(Math.random()* colors.length)]

      this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
        c.fillStyle= this.color
        c.fill();
      }

      this.update = function(){
        if (this.x+this.radius > window.innerWidth || this.x-this.radius <0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy
        }
        this.x+=this.dx
        this.y+=this.dy

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y > -50 && mouse.y - this.y < 50){
        if(this.radius < this.maxRadius)
            {this.radius += 1}
          
        }
        else if(this.radius > this.minRadius){
          this.radius -= 1
        }

        this.draw()
      }
    }
    // create random colors 
    var colors  = [
      '#F1ECCE',
      '#9FC2CC',
      '#1B5299',
      '#694D75',
      '#331832'
    ]
    // create 100 circles 
    var circles = []
    for(let i=0; i<50; i++){
      let radius = Math.random()* 50 + 10
      let x = Math.random()* (window.innerWidth-radius*2)+ radius
      let y = Math.random() * (window.innerHeight - radius*2) + radius
      let dx = Math.random()*2
      let dy = Math.random()*2
      circles.push(new Circle(x,y,dx,dy,radius))
    }
    console.log('circles', circles)

    // Now we are gonna draw and animate the circles
    for(let i=0; i<circles.length; i++){
      
      circles[i].update()
    }

   /*let x = Math.random()* window.innerWidth
      let y = Math.random() * window.innerHeight
      let dx = 7
      let dy = 3
      let radius = 20*/

 var circ  = new Circle(100, 200 , 3, 4, 20)
    var animate = () =>{
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
         for(let i=0; i<circles.length; i++){
            circles[i].update()
         }
        
    }
    animate();





    console.log(this.buttRef)
        //Setting up canvas for animation 
        var context  = this.cRef.current.getContext('2d');
        var mouse = {
            x: undefined,
            y: undefined
        }
        var button = {
            x: undefined,
            y: undefined
        }
        // set mouse values
        window.addEventListener('mousemove', (event)=>{
            mouse.x = event.x 
            mouse.y = event.y
            //console.log('mouse',mouse)
           // console.log('button', button)
        })
        // get position of the button
         button.y = this.buttRef.current.offsetTop
         button.x = this.buttRef.current.offsetLeft + window.innerWidth/2
    
         function animate(){
             requestAnimationFrame(animate)
             context.clearRect(0, 0, window.innerWidth, window.innerHeight);
             
             context.arc(mouse.x, mouse.y, 2, Math.PI *2, false);
             context.stroke();
         }

        console.log(context)