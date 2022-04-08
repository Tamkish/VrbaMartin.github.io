
var lines = [];

var ctx;
function draw(){
    
    const level = 7
    
    
    var can = document.getElementById("can");
    ctx = can.getContext('2d');
    
    
  ctx.canvas.width  =  document.body.offsetWidth;
  ctx.canvas.height = document.body.offsetHeight;

    for (let i = 0; i < 2**level; i++) {
        lines.push(0);     
    }


    draw_triangle(level, 0)
    console.log(lines)
}

function draw_triangle(level, line, real = true){
    if(level < 0){
        console.warn("draw_triangle("+level+")")
        return;
    }

    if(level == 0){
        add(lines[line]++, line, real)
    }else
    {
        const max = 2**(level-1);

        draw_triangle(level-1, line, real)
        draw_triangle(level-1, line, false)
        draw_triangle(level-1, line+max, real)
        draw_triangle(level-1, line+max, real)


    }



}




function add(x, y, real) {
    const size = 1;
    if (real) {
        
        var roundedX = Math.round(x*size);
        var roundedY = Math.round(y*size);
        ctx.fillStyle = '#000';
        ctx.fillRect(roundedX, roundedY, size, size);
    }
}

