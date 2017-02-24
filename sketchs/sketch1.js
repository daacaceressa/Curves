function drawCurvesScript(){
  // Simple way to attach js code to the canvas is by using a function
  function sketchProc($p) {
    // Override draw function, by default it will be called 60 times per second
    
    var movingShape = false;
    var offset;
    var shapeSize = 10;
    var n = 4;
    var id = n;
    var mDot = [];
    var interpolados = [];

    // ============ Vars para controlar los eventos de mouse con precisión. 
    var mx, my;
    var xOffset = 82.524658203125;
    var yOffset = 34.76234436035156;
    var kx;
    // ============ Hasta acá


    function setup() {
      $p.background(255, 255, 255 );
      $p.size(600, 400);
      kx = $p.width/503;
      offset = ($p.width-10)/n;
      var x, y;
      mDot = [];
      for (var i = 0; i<n; i++) {
        x = $p.random(i*offset, offset*(i + 1));
        y = $p.random(0, $p.height);
        var nDot = new dot(x, y, shapeSize); 
        mDot.push(nDot);
        //prompt("Coor", "Punto " + i + " x: " + x + " y: " + y);
      }
    }
    $p.setup = setup;
    setup = setup.bind($p);

    function draw() {
      $p.background(255, 255, 255 );  
      for (var i =  0;  i<mDot.length;  i++) {
        $p.fill(255,0,0);    
        $p.ellipse(mDot[i].m.x, mDot[i].m.y, shapeSize, shapeSize);
      }  
      for (var t =  0;  t<=1;  t+=0.001) {
        interpolados.push(BezierPoint(mDot[0].m, mDot[1].m, mDot[2].m, mDot[3].m, t));
      }  
      for (var i = 0;  i < interpolados.length-1;  i++) {
        $p.stroke(0);    
        $p.line(interpolados[i].x, interpolados[i].y, interpolados[i+1].x, interpolados[i+1].y);
      }
    }
    $p.draw = draw;
    draw = draw.bind($p);


    function mousePressed() {
      actualizarPuntos();
      
      /*alert("canvas: x: " + rect.left + " y: " + rect.top + "\n"
            + "Client: x: " + event.clientX + " y: " + event.clientY + "\n"
            + "p.Mouse: x: " + $p.mouseX + " y: " + $p.mouseY + "\n"
            + "Real: x: " + mx + " y: " + my + "\n");*/

      
      //alert(mx + ", " + my);

      for (var i = 0; i<n; i++) {
        if ($p.sqrt($p.pow(mx-mDot[i].m.x, 2) + $p.pow(my-mDot[i].m.y, 2)) <= shapeSize) {
          id = i;
          //alert("Agarrado "+ i);
          mDot[i].isMoving = true;
        }
      }    
    }
    $p.mousePressed = mousePressed;
    mousePressed = mousePressed.bind($p);

    function mouseDragged() {
      actualizarPuntos();
      if (id != n && mDot[id].isMoving) {
        interpolados = [];
        mDot[id].m.x = mx;
        mDot[id].m.y = my;
      }      
    }
    $p.mouseDragged = mouseDragged;
    mouseDragged = mouseDragged.bind($p);

    function mouseReleased() {
      if (id != n && mDot[id].isMoving) {
        mDot[id].isMoving = false;
        id = n;
      }      
    }
    $p.mouseReleased = mouseReleased;
    mouseReleased = mouseReleased.bind($p);

    function actualizarPuntos(){
      var rect = canvas.getBoundingClientRect();
      mx = (($p.abs(event.clientX) - $p.abs(rect.left)) + xOffset) * kx;
      my = (($p.abs(event.clientY) - $p.abs(rect.top)) + yOffset )* kx;
    }


    function BezierPoint(p0, p1, p2, p3, t) {
      var a, b;
      a = $p.pow(1-t, 3) * p0.x + $p.pow(1-t, 2) * 3 * t * p1.x +
        (1-t) * 3 * t * t * p2.x + t * t * t *p3.x;
      b =  $p.pow(1-t, 3) * p0.y + $p.pow(1-t, 2) * 3 * t * p1.y +
        (1-t) * 3 * t * t * p2.y + t * t * t *p3.y;

      return new mPoint(a,b);
    }
    $p.BezierPoint = BezierPoint;
    BezierPoint = BezierPoint.bind($p);
    function dot(x,y,shapeSizex){
      this.m = new mPoint(x,y);
      this.isMoving = false;
      this.shapeSize = shapeSizex;
    }
    $p.dot = dot;
    dot = dot.bind($p);

    function mPoint(x,y){
      this.x = x;
      this.y = y;
    }
    $p.mPoint = mPoint;
    mPoint = mPoint.bind($p);

  }

  var canvas = document.getElementById("canvas1");
  // attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it
}