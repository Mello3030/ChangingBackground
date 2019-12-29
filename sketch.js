function setup() {
    createCanvas(1530,750);

   pointer = createSprite(200,375,50,50);
   redsocket = createSprite(50,375,50,375);
   redlever = createSprite(50,375,75,50);
   redhighlight = createSprite(redlever.x,redlever.y,45,30);
   pointer.shapeColor = "white";
    }
    
    function draw() 
    {
    
    if(pointer.y<562.5 && pointer.y>187.5 && (mod(redlever.x,pointer.x)) <= 62.5 && (mod(redlever.y,pointer.y)) <= 50)
    {
     redlever.y = pointer.y;
    }    
    rb = ((redlever.y-187.5)/375)*255
    pointer.x = World.mouseX; 
    pointer.y = World.mouseY;
    x = (255/1530)*pointer.x;
    y = (255/750)*pointer.y;
    background(rb,x,y);
    redhighlight.shapeColor = "red";
    redlever.shapeColor = "black";
    redsocket.shapeColor = "red";
    redhighlight.y = redlever.y;
    text(rb,200,200);
    drawSprites();
    }

    function mod(a,b)
    {
      var c;
    if(a>b)
    {
      c=a-b;
    }
    else
    {
      c=b-a;
    }
    return c;
    }
    