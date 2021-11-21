ball_obj="";
hole_obj="";
// Create canvas variable
var canvas= new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=100;
ball_x=150;
hole_y=200;
hole_x=300;

block_image_width = 5;
block_image_height = 5;


function load_image()
{
	console.log("loading started")
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		console.log("loading ended")
	});
}
load_image();
	function new_image(){
		
		fabric.Image.fromURL("ball.png",function(Img){
			ball_obj=Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				top:ball_y,
				left:ball_x
			});
			canvas.add(ball_obj);
		});
	}


window.addEventListener("keydown", my_keydown);
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	document.getElementById("hd3").innerHTML="You have to Hit the Goal";
	document.getElementById("myCanvas").style.borderColor="red";

	 {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '39')
		{
			left();
			console.log("left");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y>=50)
		ball_y=ball_y-block_image_height;
		console.log("block image height -" - block_image_height);
		console.log("when up arrow is pressed,w="+ball_x +", y =" +ball_y);
		canvas.remove(ball_obj);
		new_image();
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y<=450)
		 ball_y=ball_y+block_image_height;
		 console.log("block image height -" + block_image_height);
		 console.log("when down arrow is pressed,x="+ball_x +", y =" +ball_y);
		 canvas.remove(ball_obj);
		 new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x=ball_x+block_image_width;
		 console.log("block image width -" + block_image_width);
		 console.log("when left arrow is pressed,a="+ball_x +", x =" +ball_x);
		 canvas.remove(ball_obj);
		 new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x=ball_x-block_image_width;
		 console.log("block image width -" + block_image_width);
		 console.log("when right arrow is pressed,s="+ball_x +", x =" +ball_x);
		 canvas.remove(ball_obj);
		 new_image();
		}
	}
	
}

