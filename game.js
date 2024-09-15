 let canvas=  document.querySelector('canvas')

  let ctx=    canvas.getContext('2d')
let cell=50
let Score=10
let gameOver=false
let direction='right'
let scell=[[0,0]]
let foodCell=randomCell()
let id=  setInterval(()=>{
    draw()
    update()
},200)
//   ctx.fillRect(0,0,50,50)
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowUp'){
        direction='up'
    
        
    }
    else if(e.key==='ArrowDown'){
        direction='down'
      
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
      
    }
    else{
        direction='right'
      
    }
    // console.log(e);
    

  })

function draw(){
    if(gameOver===true){
        clearInterval(id)
        ctx.font='50px sans-sarif'
      ctx.fillText('gameOver',50,100)
        return

    }
    ctx.clearRect(0,0,1200,600)
    for(let i of scell){
        ctx.fillStyle='red'
        ctx.fillRect(i[0],i[1],cell,cell)
    }
      ctx.fillStyle='green'
    ctx.fillRect(foodCell[0],foodCell[1],cell,cell)
    ctx.font='30px sans-sarif'
    ctx.fillText(`${Score}`,300,200)

}
 draw()
function update(){

  let headX=   scell[scell.length-1][0]
     let headY=  scell[scell.length-1][1]
   let newX
  let newY
  if(direction==='right'){
    newX=headX+cell
    newY=headY
    if(newX===1200){
        gameOver=true
    }

  }
  else if(direction==='down'){
    newX=headX
    newY=headY+cell
    if(newY===600){
        gameOver=true
    }
  }
  else if(direction==='left'){
    newX=headX-cell
    newY=headY
    if(newX<0){
        gameOver=true
    }
  }
  else{
    newX=headX
    newY=headY-cell
    if(newY<0){
        gameOver=true
    }
  }
//    if(newX===1200){
//     gameOver=true
//    }


if(newX===foodCell[0]  && newY===foodCell[1]){
  foodCell=  randomCell()
  Score+=1
}
else{
    scell.shift()

}
  scell.push([newX,newY])




}


 function randomCell(){
    return [
        Math.floor(Math.random()*(1200-cell)/cell)*cell
        ,
        Math.floor( Math.random()*(600-cell)/cell)*cell
       
    ]
 }


// console.log(randomCell());



1199,599