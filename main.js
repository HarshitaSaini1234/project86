var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(get_image)
{
    fabric.Image.fromURL("player.png",function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    })	
	
}

function playSound(){
	fabric.Image.fromURL("bdayaodio.mp3",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
