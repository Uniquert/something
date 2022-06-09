var mouseEvent = "";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
radius = 20;
width_of_the_line = 4;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    radius = document.getElementById("radius").value;

    var mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

   mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "mouseleave";
}



canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    console.log("my_mousemove");

     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mousedown") 
     {
        console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

    ctx.beginPath();
    ctx.strokeStyle() = color;
    ctx.lineWidth() = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();

     }
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


