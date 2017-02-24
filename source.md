## INDICE
</br>
<p align="left"> 1. Introducción.
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"> 2. Superficies Cuádricas.
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left"> 3. Supercuádricos.
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left"> 4. Representaciones de Spline.
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left"> 5. Metodos de Interpolación de Spline.
</p><!-- .element: class="fragment" data-fragment-index="5"-->

<p align="left"> 6. Spline Racionales.
</p><!-- .element: class="fragment" data-fragment-index="6"-->

<p align="left"> 7. Conversión entre representaciones de Spline.
</p><!-- .element: class="fragment" data-fragment-index="7"-->

<p align="left"> 8. Despliegue de curvas  y superficies de Spline.
</p><!-- .element: class="fragment" data-fragment-index="8"-->



### INTRODUCCIÓN: Líneas y Superficies Curvas
</br>

<p align="left">
	<font color="blue">Entrada: </font> 
	<font color="green">Conjunto de funciones matemáticas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<img height="500" src="fig/intro1.jpg"> <!-- .element: class="fragment" data-fragment-index="2"-->


### INTRODUCCIÓN: Líneas y Superficies Curvas

<p align="left">
	<font color="blue">Entrada: </font>
	<font color="green">Conjunto de Puntos de Coordenadas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<img height="500" src="fig/intro2.jpg"> <!-- .element: class="fragment" data-fragment-index="2"-->



## SUPERFICIES CUADRICAS

<table width="550" heigth="500" border="0" align ="right">
<tr>
<td>
<br/>

<p align="left">
	<font color="blue">Representación Cartesiana</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="bottom">
	<font size = 5>$x^{2}$ + $y^{2}$ + $z^{2}$ $=$ </font>
	<font size = 5 color="red">$r^{2}$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font color="blue">Representación Paramétrica</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align="left">
	<font size = 5>$x=$</font>
	<font size = 5 color="red">$r$</font>
	<font size = 5>$\cos$</font>
	<font size = 5  color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align ="right">
	<font size = 5>$-\pi$$\leq$</font>
	<font color="yellow">$\varphi$</font>
	<font size = 5>$\leq$$\pi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$y=$</font>
	<font size = 5 color="red"></font>
	<font size = 5 color ="red">$r$</font>
	<font size = 5>$\cos$</font>
	<font size = 5  color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="right">
	<font size = 5>$-\pi/2$$\leq$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
	<font size = 5>$\leq$$\pi/2$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$z=$</font>
	<font size = 5 color="red">$r$</font>
	<font size = 5>sen</font>
	<font size = 5  color="yellow">$\varphi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<br/>
<p align="left">
	<font color="blue">Esfera</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<img height="350" src="fig/superfic1.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font color="blue">Parametros:</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>1. </font>
	<font size = 5 color="red">r</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>2. </font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>3. </font>
	<font size = 5 color="yellow">$\varphi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->


## SUPERFICIES CUADRICAS

<table width="540" heigth="500" border="0" align ="right">
<tr>
<td>
<br/>
<p align="left">
	<font color="blue">Representación Cartesiana</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="bottom">
	<font size = 5>$(x/$</font>
	<font size = 5 color="green">$r_x$</font>
	<font size = 5>$)^{2}$ + $(y/$</font>
	<font size = 5 color="green">$r_y$</font>
	<font size = 5>$)^{2}$ + $(z/$</font>
	<font size = 5 color="green">$r_z$</font>
	<font size = 5>$)^{2}$ $= 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font color="blue">Representación Paramétrica</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align="left">
	<font size = 5>$x=$</font>
	<font size = 5 color="red">$r_x$</font>
	<font size = 5>cos</font>
	<font size = 5  color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align ="right">
	<font size = 5>$-\pi$$\leq$</font>
	<font size = 5 color="yellow">$\varphi$</font>
	<font size = 5>$\leq$$\pi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$y=$</font>
	<font size = 5 color="red">$r_x$</font>
	<font size = 5>$\cos$</font>
	<font size = 5  color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="right">
	<font size = 5>$-\pi/2$$\leq$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
	<font size = 5>$\leq$$\pi/2$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$z=$</font>
	<font size = 5 color="red">$r_x$</font>
	<font size = 5>sen<font size = 5 color="yellow">$\varphi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<p align="left">
	<font color="blue">Elipsoide</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<img height="350" src="fig/superfic2.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left">
	<font color="RED">$\quad $No Olvidar el Toro</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->



## SUPERCUADRICOS

<p align ="left">
	<font color="blue">Concepto</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<img height="500" src="fig/supercuad1.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="2"-->


## SUPERCUADRICOS

<p align ="left">
	<font color="#00FFFF">Superelipse</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align ="center">
	<font color="blue">Representación Cartesiana</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="center">
	<font size = 5>$(x/$</font>
	<font size = 5 color="green">$r_x$</font>
	<font size = 5>$)^{2/}$</font>
	<font size = 5 color="red">$^{S}$</font>
	<font size = 5> + $(y/$</font>
	<font size = 5 color="green">$r_y$</font>
	<font size = 5>$)^{2/}$</font>
	<font size = 5 color="red">$^{S}$</font>
	<font size = 5> $=$ 1</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="center">
	<font color="blue">Representación Paramétrica</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align="center">
	<font size = 5>$x=$</font>
	<font size = 5 color="green">$r_x$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S}$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="center">
	<font size = 5>$y=$</font>
	<font size = 5 color="green">$r_y$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S}$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align ="center">
	<font size = 5>$-\pi$$\leq$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
	<font size = 5>$\leq$$\pi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align ="center">
	<font>Con </font>
	<font color="red">$S$</font>
	<font> $= 1$ obtenemos una elipse ordinaria.</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->


## SUPERCUADRICOS

<table width="650" heigth="500" border="0" align ="right">
<tr>
<td>

<br/>
<p align="left">
	<font color="blue">Representación Cartesiana</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font size = 5>$((x/$</font>
	<font size = 5 color="green">$r_x$</font>
	<font size = 5>$)^{2/}$</font>
	<font size = 5 color="red">$^{S2}$</font>
	<font size = 5>+$(y/$</font>
	<font size = 5 color="green">$r_y$</font>
	<font size = 5>$)^{2/}$</font>
	<font size = 5 color="red">$^{S2}$</font>
	<font size = 5>$)$</font>
	<font size = 5 color="red">$^{S2/S1}$</font>
	<font size = 5>+$(z/ $</font>
	<font size = 5 color="green">$r_z$</font>
	<font size = 5>$)^{2/}$</font>
	<font size = 5 color="red">$^{S1}$</font>
	<font size = 5>$= 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font color="blue">Representación Paramétrica</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align="left">
	<font size = 5>$x=$</font>
	<font size = 5 color="green">$r_x$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S1}$</font>
	<font size = 5 color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S2}$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align ="right">
	<font size = 5>$-\pi/2$$\leq$</font>
	<font size = 5 color="yellow">$\varphi$</font>
	<font size = 5>$\leq$$\pi/2$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$y=$</font>
	<font size = 5 color="green">$r_y$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S1}$</font>
	<font size = 5 color="yellow">$\varphi$</font>
	<font size = 5>$\cos$</font>
	<font size = 5 color="red">$^{S2}$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align ="right">
	<font size = 5>$-\pi$$\leq$</font>
	<font size = 5 color="#00FFFF">$\theta$</font>
	<font size = 5>$\leq$$\pi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>$z=$</font>
	<font size = 5 color="green">$r_z$</font>
	<font size = 5>sen</font>
	<font size = 5  color="red">$^{S1}$</font>
	<font size = 5 color="yellow">$\varphi$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<p align="left">
	<font color="blue">Superelipsoide</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<br/>
<br/>
<br/>
<p align="left">
	<font size = 5>Con</font>
	<font size = 5 color="red">$S1$</font>
	<font size = 5> $=$ </font>
	<font size = 5 color="red">$S2$</font>
	<font size = 5> $= 1$ </font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left"><font size = 5>$\ $ obtenemos  una </font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left"><font size = 5>elipsoide ordinaria.</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->



<!-- .slide: data-state="splines-state" -->
## REPRESENTACIONES DE SPLINE

</br>
<p align="left">
	<font color="green">EJEMPLO</font>
</p>
<canvas id="canvas1" width="600" height="400"></canvas>


<!-- .slide: data-state="cardinal-state" -->
## REPRESENTACIONES DE SPLINE

</br>
<p align="left">
	<font color="green">EJEMPLO</font>
</p>
<canvas id="canvas2"></canvas>


## REPRESENTACIONES DE SPLINE

</br>
</br>
<p align="left">
	<font color="blue">1. Introducción.</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

</br>
<p align="left">
	<font color="blue">2. Definición del Problema.</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

</br>
<p align="left">
	<font color="blue">3. Continuidad.</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

</br>
<p align="left">
	<font color="blue">4. Modos de Especificación.</font>
</p> <!-- .element: class="fragment" data-fragment-index="4"-->


## REPRESENTACIONES DE SPLINE

<p align="left">
	<font color="blue"> Introducción</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<img height="250" src="fig/repSpline1.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font color="green"> Usos:</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5> 1. Digitacilación de trazos.</font>
	<font size = 5 color="green">(Curvas de Interpolación)</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5> 2. Especificación de trayectorias de animación. </font>
	<font size = 5 color="green">(Curvas de Interpolación)</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5> 3. Herramienta de diseño para superficies de los objetos. </font><font size = 5 color="green">CAD(Curvas de aproximación)</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font color="green"> Ventaja</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5> La curva se modifica y manipula (trasladar, girar y escalar) solo en los puntos de control.</font>
</p> <!-- .element: class="fragment" data-fragment-index="4"-->


## REPRESENTACIONES DE SPLINE

<p align="left">
	<font color="blue"> Introducción</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<img height="250" src="fig/intro2.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
</br>
<p align="left">
	<font>1.$ \ $ La curva </font>
	<font color="yellow">realiza la interpolación.</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font>2.$ \ $ La curva </font>
	<font color="yellow">aproxima la interpolación.</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font>3.$ \ $</font>
	<font color="#00FFFF"> Casco convexo.</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font>4.$ \ $</font>
	<font color="red"> Grafica de control.</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->


## REPRESENTACIONES DE SPLINE

<p align="left">
	<font color="blue"> Deficición del problema</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<img height="200" src="fig/repSpline4.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5> Se pueden tener $1$ o varias</font>
	<font size = 5 color="green"> secciones</font>
	<font size = 5> de spline.</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5> Cada </font>
	<font size = 5 color="green"> sección</font>
	<font size = 5> de la Spline se puede definir </font>
	<font size = 5 color="green">paramétricamente</font>
	<font size = 5> así:</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = ( x($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) )^{T} \qquad \qquad \quad \ $</font>
	<font size = 5 color="green">$u_1$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</br>
<p align="left">
	<font size = 5> La derivada de $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)$ es el </font>
	<font size = 5 color="green">vector tangente paramétrico</font>
	<font size = 5> de la curva:</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5> $P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = ( x'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), y'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), z'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) )^{T} \qquad \qquad$</font>
	<font size = 5 color="green">$u_1$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->


## REPRESENTACIONES DE SPLINE

<br/>
<p align="left">
	<font color="blue"> Continuidad</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="450" heigth="500" border="0" align ="right">
<tr>
<td>

<br/>
<p align="right">
	<font size = 5>Cada </font>
	<font size = 5 color="green">sección:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = ( x($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) )^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 5 color="green">$u_1$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<br/>
<br/>
<p align="right">
	<font size = 5>Cada </font>
	<font size = 5 color="green">sección:</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="right">
	<font size = 5> $P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = ( x'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), y'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$), z'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) )^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="right">
	<font size = 5 color="green">$u_1$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<br/>
<p align="left">
	<font size = 5 color="gray"> Continuidad Geométrica</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 color="gray"> $G^{0}$: </font>
	<font size = 5> Si los segmentos se unen.</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 color="gray"> $G^{1}$: </font>
	<font size = 5> Si $($ademas de </font>
	<font size = 5 color="gray"> $G^{0}$</font>
	<font size = 5>$)$ las direcciones de los vectores tangentes, aunque no necesariamente las magnitudes, son iguales.</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font size = 5 color="yellow"> Continuidad Paramétrica</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5 color="yellow"> $C^{n}$: </font>
	<font size = 5> Si $d^{n}/d$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{n}$</font>
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)$, son iguales $($la enésima derivada en magnitud y dirección$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->


## REPRESENTACIONES DE SPLINE

<p align="left">
	<font color="blue"> Continuidad</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="900" heigth="500" border="0" align ="right">
<tr>
<td>

<br/>
<p align="left">
	<font size = 5>Reglas:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 color="green">R1. </font>
	<font size = 5 color="yellow">$C^{1}$</font>
	<font size = 5  color="green">$\rightarrow$</font>
	<font size = 5 color="gray">$G^{1}$</font>
	<font size = 5> pero no al revés:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 color="green">R2. </font>
	<font size = 5>Si </font>
	<font size = 5 color="yellow">$n$</font>
	<font size = 5>$>$</font>
	<font size = 5 color="yellow">$m$</font>
	<font size = 5> entonces </font>
	<font size = 5 color="yellow">$C^{n}$</font>
	<font color="green">$\rightarrow$</font>
	<font size = 5 color="yellow">$C^{m}$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5>Expresión de la </font>
	<font size = 5 color="green">R1. </font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</td>
</tr>
</table>

<img height="280" src="fig/repSpline5.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="3"-->
<img height="280" src="fig/repSpline5.jpg" align ="right"><!-- .element: class="fragment" data-fragment-index="4"-->


## REPRESENTACIONES DE SPLINE

<br/>
<p align="left">
	<font color="blue"> Continuidad</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<br/>
<br/>

<table width="800" heigth="500" border="0" align ="right">
<tr>
<td>

<p align="left">
	<font>Existen 3 modos</font>
	<font color="green"> equivalentes</font>
	<font>:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font>1. Conjunto de </font>
	<font color="green">condiciones de frontera</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font>2. </font>
	<font color="green">Matriz característica </font>
	<font>de la Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font>3. </font>
	<font color="green">Funciones de combinación</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->

</td>
</tr>
</table>



## TIPOS DE INTERPOLACIÓN DE SPLINE

<br/>
<br/>
<p align="left">
	<font color="blue"> 1. Spline Cúbicas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<br/>
<br/>
<p align="left">
	<font color="blue"> 2. Curvas y Superficies de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<br/>
<br/>
<p align="left">
	<font color="blue"> 3. Curvas y Superficies de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->



## SPLINE CÚBICAS

<br/>
<p align="left">
	<font color="blue"> 1. Spline Cúbicas Naturales</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<br/>
<p align="left">
	<font color="blue"> 2. Hermite</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<br/>
<p align="left">
	<font color="blue"> 3. Spline Cardinales</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<br/>
<p align="left">
	<font color="blue"> 4. Splines de Kochanek-Bartels</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->


## SPLINE CÚBICAS

<p align="left">
	<font color="blue">Definicion del $P_b$. en el caso </font>
	<font size = 5>$ \qquad \qquad P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=x($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$),y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$),z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$))^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font color="blue">de polinonios cúbicos</font>
	<font size = 5 color="green">$ \qquad \qquad \qquad \qquad u_1$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>Para cada </font>
	<font size = 5 color="green">sección </font>
	<font size = 5>de la Spline:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5> $x($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = a_x$</font>
	<font size = 5 color="green">$u^{3}$</font>
	<font size = 5>$ + b_x$</font>
	<font size = 5 color="green">$u^{2}$</font>
	<font size = 5>$ + c_x$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ + d_x$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5> $y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = a_y$</font>
	<font size = 5 color="green">$u^{3}$</font>
	<font size = 5>$ + b_y$</font>
	<font size = 5 color="green">$u^{2}$</font>
	<font size = 5>$ + c_y$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ + d_y$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5> $z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = a_z$</font>
	<font size = 5 color="green">$u^{3}$</font>
	<font size = 5>$ + b_z$</font>
	<font size = 5 color="green">$u^{2}$</font>
	<font size = 5>$ + c_z$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ + d_z$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5>$0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5>Vectorialmente tenemos: $ \ $</font>
	<font size = 5>$P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="#00FFFF">$a$</font>
	<font size = 5 color="green">$u^{3}$</font>
	<font size = 5>$+$</font>
	<font size = 5 color="#00FFFF">$b$</font>
	<font size = 5 color="green">$u^{2}$</font>
	<font size = 5>$+$</font>
	<font size = 5 color="#00FFFF">$c$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$+$</font>
	<font size = 5 color="#00FFFF">$d$</font>
	<font size = 5>$,$</font>
	<font size = 5>$ \qquad \quad  0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>Entonces:</font>
	<font size = 5>$ \qquad \qquad \qquad P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
	$
	\begin{bmatrix}
	u^{3} & u^{2} & u & 1 \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$^{T} = $</font>
	<font size = 5 color="green">$ U $</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color="#00FFFF">$C$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5> $ \quad \ \ \qquad \qquad \qquad \qquad P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
	$
	\begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5>$ \quad \ \ \qquad \qquad \qquad \qquad 0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5>Tenemos $n+1$ </font>
	<font size = 5 color="yellow">puntos de control</font>
	<font size = 5> de coordenadas: </font>
	<font size = 4 color="yellow">$ \qquad P_k$</font>
	<font size = 4>$ = ($</font>
	<font size = 4 color="yellow">$x_k$</font>
	<font size = 4>$,$</font>
	<font size = 4 color="yellow">$y_k$</font>
	<font size = 4>$,$</font>
	<font size = 4 color="yellow">$z_k$</font>
	<font size = 4>$)$</font>
	<font size = 4 color="yellow">$ \qquad k $</font>
	<font size = 4>$ = 0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->


## SPLINE CÚBICAS

<p align="left">
	<font color="blue">Definicion del $P_b$. en el caso </font>
		<font size = 5>$ \qquad \qquad P($</font>
		<font size = 5 color="green">$u$</font>
		<font size = 5>$)= x($</font>
		<font size = 5 color="green">$u$</font>
		<font size = 5>$),y($</font>
		<font size = 5 color="green">$u$</font>
		<font size = 5>$),z($</font>
		<font size = 5 color="green">$u$</font>
		<font size = 5>$))^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 5>$0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq 1 \qquad \qquad \qquad \ \ $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="650" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
	$
	\begin{bmatrix}
	u^{3} & u^{2} & u & 1 \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$^{T} = $</font>
	<font size = 5 color="green">$ U $</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color="#00FFFF">$C$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5> $P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
	$
	\begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5>$0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq 1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</td>
</tr>
</table>

<table width="50" heigth="50" border="0" align ="right">
<tr>
<td>

<br/>
<p align="center">
	<font size = 5 color = "yellow">$G_x \qquad G_y \qquad G_z$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="center">
	<font size = 5 color = "yellow">$\downarrow \qquad \downarrow \qquad \downarrow$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

</td>
</tr>
</table>

<table width="300" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right">
	<font size ="5" color="yellow">
	$
	G=\begin{bmatrix} 
	g_1x & g_1y & g_1z \cr 
	g_2x & g_2y & g_2z \cr
	g_3x & g_2y & g_3z \cr
	g_4x & g_2y & g_4z \cr
	\end{bmatrix}$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

</td>
</tr>
</table>

<table width="150" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="center">
	<font size ="5" color="#00FFFF">
	$
	M=\begin{bmatrix} 
	m_11 & m_12 & m_13 & m_14 \cr 
	m_21 & m_22 & m_23 & m_24 \cr
	m_31 & m_23 & m_33 & m_34 \cr
	m_41 & m_24 & m_43 & m_44 \cr
	\end{bmatrix}
	$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

</td>
</tr>
</table>

<table width="180" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 5>Ahora:</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5 color="#00FFFF">$C $</font>
	<font size = 5 >$= $</font>
	<font size = 5 color="#00FFFF">$M $</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color = "yellow">$G$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left"><font size = 5>Donde:</font></p><!-- .element: class="fragment" data-fragment-index="5"-->
</td>
</tr>
</table>

<table width="900" heigth="50" border="0" align ="left">
<tr>
<td>

<p align="left">
	<font size = 5>Tanto </font>
	<font size = 5 color="#00FFFF">$M $</font>
	<font size = 5 >como </font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 >varían para cada tipo de curva. </font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->

<p align="left">
	<font size = 5 color="#00FFFF">$M $</font>
	<font size = 5 >es la matríz basica y </font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 >es la matríz de restricciones o condiciones geométricas</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->

<p align="left">
	<font size = 5 >Se tiene entonces: $\qquad P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">$ U $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G $</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->

</td>
</tr>
</table>


## SPLINE CÚBICAS

<p align="left">
	<font color="blue">Superficies paramétricas bicúbicas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<br/>
<p align="left">
	<font size = 5 >Generalización de la curva: $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">$ U $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 > (donde el vector geométrico </font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 > es una constante) </font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 >$i)\ $ Tomemos </font>
	<font size = 5 color="green">$s$</font>
	<font size = 5 > por </font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ , \ $</font>
	<font size = 5 >$P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">$ U $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G $</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 >$ii)\ $ Dejemos variar los puntos en </font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 >en 3D a lo largo de un camino parametrizado en </font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font size = 5 >$P($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G ($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color = "yellow">$), $</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<table width="320" heigth="100" border="0" align ="left">
<tr>
<td>

<p align="center">
	<font size ="4" color="yellow">
	$
	G(u)=\begin{bmatrix} 
	G_1(u)\cr 
	G_2(u)\cr 
	G_3(u)\cr 
	G_4(u)\end{bmatrix}
	$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="center">
	<font size = 5 color="red">$\qquad \ (1)$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table> 

<p align="left">
	<font size = 5 >Para un valor fijo </font>
	<font size = 5 color="green">$\ u_1$</font>
	<font size = 5 >$, P($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$)$ , es una curva porque </font>
	<font size = 5 color = "yellow">$G ($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color = "yellow">$)$</font>
	<font size = 5 > es constante. Haciendo $\ 0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq1$ se obtiene la familia de curvas que conforman la superficie.</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->


## SPLINES CÚBICAS

<p align="left">
	<font color="blue">Superficies paramétricas bicúbicas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 5 >Tomando el caso en que </font>
	<font size = 5 color = "yellow">$G_i ($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color = "yellow">$)$</font>
	<font size = 5 > son cúbicas, se tiene que cada una puede ser representada como:</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 color = "yellow">$G_i ($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color = "yellow">$) = $</font>
	<font size = 5 color = "green">$ U $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G $</font>
	<font size = 5 > (donde el vector geométrico </font>
	<font size = 5 color = "yellow">$G_i' $</font>
	<font size = 5 >, donde </font>
	<font size ="5" color="yellow">$\ G_i'$</font>
	<font size = 5 >$=$</font>
	<font size ="5" color="yellow">
		$\begin{pmatrix} g_i1' \ g_i2' \ g_i3' \ g_i4'\cr \end{pmatrix}$
	</font>
	<font size = 5 >$^{T}$ , transponiendo y reemplazando en </font>
	<font size = 5 color="red">$(1)$</font>
	<font size = 5 > se obtiene: </font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="left">
	<font size = 5 >$P($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size ="4" color="yellow">
	$
	\begin{bmatrix} 
	g_{11}' & g_12' & g_13' & g_14'\cr 
	g_21' & g_22' & g_23' & g_24'\cr
	g_31' & g_22' & g_33' & g_34'\cr
	g_41' & g_22' & g_43' & g_44'\cr
	\end{bmatrix}
	$
	</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M^{T} $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "green">$ U^{T}$</font>
	<font size = 5>$=$</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size ="5" color="yellow">$G'$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M^{T} $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "green">$ U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<table width="200" heigth="30" border="0" align ="right">
<tr>
<td>

<p align="left">
	<font size = 5 >$\ 0 \leq$</font>
	<font size = 5 color="green">$s$</font>
	<font size = 5 >$,$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<table width="800" heigth="30" border="0" align ="right">
<tr>
<td>

<p align="left">
	<font size = 5 >Escrito separadamente para cada coordenada se tiene:</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 >$x($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size ="5" color="yellow">$G_x'$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M^{T} $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "green">$ U^{T}$</font>
	<font size = 5>$,$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 >$y($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size ="4" color="yellow">$G_y'$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M^{T} $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "green">$ U^{T}$</font>
	<font size = 5>$,$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 >$z($</font>
	<font size = 5 color="green">$s,u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color = "green">$ S $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M $</font>
	<font size = 5 >$\bullet$</font>
	<font size ="5" color="yellow">$G_z'$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M^{T} $</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "green">$ U^{T}$</font>
	<font size = 5>$,$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

</td>
</tr>
</table>


## SPLINES CÚBICAS

<p align="left">
	<font color="blue">Splines Cúbicas Naturales</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="480" heigth="30" border="0" align ="right">
<tr>
<td>

<p align="right">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	u^{3} \ u^{2} \ u \ 1 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a \ b \ c \ d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T} = $</font>
	<font size = 4 color="green">$ U $</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="#00FFFF">$C$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	3u^{2} / 2u / 1 / 0 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a \ b \ c \ d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 4 >$\ 0 \leq$</font>
	<font size = 4 color="green">$s$</font>
	<font size = 4 >$,$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</td>
</tr>
</table>

<p align="left">
	<font size = 5>Especificación con </font>
	<font size = 5 color = "green">condiciones de frontera: </font>
	<font size ="5" color="yellow">$C^{2}$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<img height="100" src="fig/splineCub1.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 5>Si se tienen </font>
	<font size = 5 color = "yellow">$n+1$ </font>
	<font size = 5>puntos de control : </font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 color = "green">$n$</font>
	<font size = 5> secciones curvas a ajustar</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 color = "green">$4n$</font>
	<font size = 5> coeficientes polinómicos (incógnitas)</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5 color = "green">$4n-4$</font>
	<font size = 5> ecuaciones ( las 2 secciones a cada lado de un punto de control deven tener la $1a$ y la $2a$ derivadas iguales: para </font>
	<font size ="5" color="yellow">$n-1$</font>
	<font size = 5>puntos,</font>
	<font size = 5 color = "green">$4$</font>
	<font size = 5> ecuaciones por punto )</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5>Las posiciones </font>
	<font size = 5 color = "yellow">$p_0$</font>
	<font size = 5 > y </font>
	<font size = 5 color = "yellow">$p_n$</font>
	<font size = 5> nos dan</font>
	<font size = 5 color = "green"> $2$ </font>
	<font size = 5> ecuaciones mas</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<p align="left">
	<font size = 5>Las otras </font>
	<font size = 5 color = "green"> $2$ </font>
	<font size = 5 > ecuaciones se pueden establecer al definir como $0$ las segundas derivadas en </font>
	<font size = 5 color = "yellow">$p_0$</font>
	<font size = 5 > y </font>
	<font size = 5 color = "yellow"> $p_n$</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->


## SPLINES CÚBICAS

<table width="600" heigth="500" border="0" align ="right">
<tr>
<td>
<p align="center">
	<font size = 4>$P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	u^{3} & u^{2} & u & 1 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T} = $</font>
	<font size = 4 color="green">$ U $</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="#00FFFF">$M$</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="yellow">$G$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T} = $</font>
	<font size = 4 color="green">$ U $</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="#00FFFF">$M$</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="yellow">$G$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 4 >$\qquad  \qquad \qquad  \qquad \qquad  \qquad \qquad  \qquad 0 \leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 4> $ P($</font>
	<font size = 4 color="green">$0$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "yellow">$p_k$</font>
	<font size = 4> $\qquad P($</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "yellow">$p_k$+$ \ _1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$0$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "yellow">$Dp_k$</font>
	<font size = 4> (Derivada en el punto </font>
	<font size = 4 color = "yellow">$p_k$</font>
	<font size = 4> )</font> </p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "yellow">$Dp_k$+$ \ _1$</font>
	<font size = 4> (Derivada en el punto </font>
	<font size = 4 color = "yellow">$p_k$+$ \ _1$</font>
	<font size = 4> )</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5 color = "yellow">$\qquad \qquad  G_H \qquad \qquad  \qquad \qquad \qquad $ </font>
	<font size = 5 color="#00FFFF">$M_H$</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color="yellow">$G_H$</font></p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="center">
	<font size = 5 color = "yellow">$\qquad  \qquad \downarrow \qquad  \qquad \qquad  \qquad \qquad  \qquad  \qquad  \quad \downarrow$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right"><font size = 5 color="yellow">
	$
	\begin{bmatrix} 
	p_k \cr 
	p_k+1 \cr
	Dp_k \cr
	Dp_k+1 \cr
	\end{bmatrix}
	$
</font>
<font size = 5>
	$
	\quad = \quad  \begin{bmatrix}
	0 & 0 & 0 & 1 \cr
	1 & 1 & 1 & 1 \cr
	0 & 0 & 1 & 0 \cr
	4 & 2 & 1 & 0 \cr
	\end{bmatrix}
	$
</font>
<font size = 5 color="#00FFFF">
	$
	\quad \begin{bmatrix} 
	a \cr 
	b \cr
	c \cr
	d \cr
	\end{bmatrix}
	$
</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</td>
</tr>
</table>
 
<p align="left">
	<font color = "blue">Splines de Hermite</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>

<p align="left">
	<font size = 5>Especificación con </font>
	<font size = 5 color = "green">condiciones de frontera: </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<img height="150" src="fig/splineCub2.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4 color = "yellow">$p_k $ </font>
	<font size = 4> $= P($</font>
	<font size = 4 color="green">$0$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color="#00FFFF">$a$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="#00FFFF">$b$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="#00FFFF">$c$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="#00FFFF">$d$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4 color = "yellow">$p_k$+$ \ _1$</font>
	<font size = 4> $= P($</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color="#00FFFF">$d$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4 color = "yellow">$Dp_k $ </font>
	<font size = 4> $= P'($</font>
	<font size = 4 color="green">$0$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color="#00FFFF">$c$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4 color = "yellow">$Dp_k$+$ \ _1$</font>
	<font size = 4> $= P'($</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color="#00FFFF">$3a$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="#00FFFF">$2b$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="#00FFFF">$c$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## SPLINES CÚBICAS

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	u^{3} \ u^{2} \ u \ 1 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a \ b \ c \ d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T} = $</font>
	<font size = 4 color="green">$ U $</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="#00FFFF">$M$</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="yellow">$G$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = $</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	3u^{2} \ 2u \ 1 \ 0 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix}
	a \ b \ c \ d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$^{T} = $</font>
	<font size = 4 color="green">$ U $</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="#00FFFF">$M$</font>
	<font size = 4>$\bullet $</font>
	<font size = 4 color="yellow">$G$</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 4 >$\ 0 \leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<p align="right">
	<font size = 4 >$P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)=$</font>
	<font size = 4 color = "green">
	$
	\begin{bmatrix}
	u^{3} \ u^{2} \ u \ 1 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>$\bullet$</font>
	<font size = 4 color="#00FFFF">$M_H$</font>
	<font size = 4 >$\bullet$</font>
	<font size = 4 color="yellow">
	$
	\begin{bmatrix} 
	p_k \cr 
	p_k+1 \cr
	Dp_k \cr
	Dp_k+1 \cr
	\end{bmatrix}
	$</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

</td>
</tr>
</table>

<p align="left">
	<font color = "blue">Splines de Hermite</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$\qquad Matriz \ de \ Hermite$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$ \qquad  \qquad \qquad \downarrow $ </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4 color="#00FFFF">
	$
	\begin{bmatrix} 
	a \cr 
	b \cr
	c \cr
	d \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4>
	$
	=\begin{bmatrix}
	2 & -2 & 1 & 1 \cr
	-3 & 3 & -2 & -1 \cr
	0 & 0 & 1 & 0 \cr
	1 & 0 & 0 & 0 \cr
	\end{bmatrix}
	$
	</font>
	<font size = 4 color="yellow">
	$
	\begin{bmatrix} 
	p_k \cr 
	p_k+1 \cr
	Dp_k \cr
	Dp_k+1 \cr
	\end{bmatrix}
	$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 4> $P'($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$) = \quad $</font>
	<font size = 4 color="yellow">$p_k$</font>
	<font size = 4 >$(2$</font>
	<font size = 4 color="green">$u^{3}$</font>
	<font size = 4 >$-3$</font>
	<font size = 4 color="green">$u^{2}$</font>
	<font size = 4 >$+$</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4 >$)+$</font>
	<font size = 4 color="yellow">$p_k$+$ \ _1$</font>
	<font size = 4 >$(-2$</font>
	<font size = 4 color="green">$u^{3}$</font>
	<font size = 4 >$($</font>
	<font size = 4 color="green">$u^{2}$</font>
	<font size = 4 >$+$</font>
	<font size = 4 color="yellow">$Dp_k$</font>
	<font size = 4 >$($</font>
	<font size = 4 color="green">$u^{3}$</font>
	<font size = 4 >$-2$</font>
	<font size = 4 color="green">$u^{2}$</font>
	<font size = 4 >$+$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 >$)+$</font>
	<font size = 4 color="yellow">$Dp_k$+$ \ _1$</font>
	<font size = 4 >$($</font>
	<font size = 4 color="green">$u^{3}$</font>
	<font size = 4 >$-$</font>
	<font size = 4 color="green">$u^{2}$</font>
	<font size = 4 >$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="left">
	<font size = 4> $\qquad \quad = \quad $</font>
	<font size = 4 color="yellow">$p_k$</font>
	<font size = 4 color="red">$H_0$</font>
	<font size = 4>$($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 >$)+$</font>
	<font size = 4 color="yellow">$p_k$+$ \ _1$</font>
	<font size = 4 color="red">$H_1$</font>
	<font size = 4>$($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)$</font>
	<font size = 4 >$+$</font>
	<font size = 4 color="yellow">$Dp_k$</font>
	<font size = 4 color="red">$H_2$</font>
	<font size = 4>$($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)$</font>
	<font size = 4 >$)+$</font>
	<font size = 4 color="yellow">$Dp_k$+$ \ _1$</font>
	<font size = 4 color="red">$H_3$</font>
	<font size = 4>$($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->
 
<br/> 
<p align="left">
	<font size = 5>Los polinomios </font>
	<font size = 5 color="red">$\ H_i$</font>
	<font size = 5>$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)$ para </font>
	<font size = 5 color="red">$\ k$</font>
	<font size = 5 >$= 0,1,2,3$ son las funciones de combinación. </font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->


## SPLINES CÚBICAS 

<p align="left">
	<font color = "blue">Splines de Hermite / ejemplos / continuidad entre secciones</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="550" heigth="500" border="0" align ="right">
<tr>
<td>

<br/> 
<p align="center">
	<font size = 5 color="yellow">Continuidad entre curvas:</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<br/>
<p align="left">
	<font size = 5 > $ \qquad \qquad \ Curva 1 \qquad \quad \ Curva 2$</font>
</p> <!-- .element: class="fragment" data-fragment-index="3"-->

<p align="center">
	<font size = 5 color = "green">
	$
	\begin{bmatrix} 
	P(0) \cr 
	P(1) \cr
	P'(0) \cr
	P'(1)\cr
	\end{bmatrix}
	$
	</font>
	<font size = 5>
	$\qquad
	\begin{bmatrix} 
	P(1) \cr 
	P(2) \cr
	k P'(1) \cr
	P'(2)\cr
	\end{bmatrix}
	$
	</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="center">
	<font size = 5>Si </font>
	<font size = 5 color="red">$k$</font>
	<font size = 5>$ > 0 \rightarrow G^{1}$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<p align="center">
	<font size = 5>Si </font>
	<font size = 5 color="red">$k$</font>
	<font size = 5>$ = 1 \rightarrow $</font>
	<font size = 5 color="yellow">$C^{1}$</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

</td>
</tr>
</table>

<br/>
<p align="left">
	<font size = 5 color="yellow">$ \qquad $Familia de curvas:</font>
</p> <!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<br/>
<img height="250" src="fig/splineCub3.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="3"-->


## SPLINES CÚBICAS

<p align="left">
	<font color = "blue">Superficies de Hermite</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="450" heigth="500" border="0" align ="right">
<tr>
<td>
<p align="right"><font size = 4 >$P($</font><font size = 4 color="green">$s,u$</font><font size = 4>$) = $</font><font size = 4 color = "green">$ S $</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M $</font><font size = 4 >$\bullet$</font><font size = 4 color = "yellow">$G ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$), $</font><font size = 4 >donde</font><font size =4 color="yellow">
$
G(u)=\begin{bmatrix} 
G_1(u)\cr 
G_2(u)\cr 
G_3(u)\cr 
G_4(u)\end{bmatrix}
$
</font></p><!-- .element: class="fragment" data-fragment-index="2"-->
<br/>
<br/>
<br/>
<p align="left"><font size = 5>El parche cúbico es una interpolación cúbica entre </font><font size =5 color="yellow">$p_k($</font><font size =5 color="green">$u$</font><font size =5 color="yellow">$) $</font><font size = 5> $= P($</font><font size =5 color="green">$0,u$</font><font size = 5>$) \ $ y</font><font size =5 color="yellow">$\ P_k+1($</font><font size =5 color="green">$u$</font><font size =5 color="yellow">$)$</font><font size = 5> $= P(1$</font><font size =5 color="green">$,u$</font><font size = 5>$)$ o, alternativamente, entre $\quad P( $</font><font size =5 color="green">$s,0$</font><font size = 5>$)$ y $P($</font><font size =5 color="green">$s,1$</font><font size = 5>$)$</font></p><!-- .element: class="fragment" data-fragment-index="3"-->
</td>
</tr>
</table>

<p align="left"><font size = 5>Desarrollando para la coordenada x:</font></p><!-- .element: class="fragment" data-fragment-index="2"-->
<br/>
<p align="left"><font size = 4 >$P($</font><font size = 4 color="green">$s,u$</font><font size = 4>$) = $</font><font size = 4 color = "green">$ S $</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size = 4 color = "yellow">$G_Hx ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 4 >$=$<font size =5 color="green">$S$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size =4 color="yellow">
$
\begin{bmatrix} 
p_k(u)\cr
p_k+1(u)\cr 
Dp_k(u)\cr 
Dp_k+1(u)\end{bmatrix}
_X$
</font></p><!-- .element: class="fragment" data-fragment-index="2"-->
<br/>
<img height="250" src="fig/splineCub4.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="3"-->


## SPLINES CÚBICAS

<p align="left"><font color = "blue">Superficies de Hermite</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="350" heigth="500" border="0" align ="right">
<tr>
<td>
<p align="center"><font size = 4 >$P($</font><font size = 4 color="green">$s,u$</font><font size = 4>$)=$</font><font size = 4 color = "green">$S$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M$</font><font size = 4 >$\bullet$</font><font size = 4 color = "yellow">$G($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$)$</font><font size = 4 > donde </font><font size =4 color="yellow">
$
G(u)=\begin{bmatrix} 
G_1(u)\cr 
G_2(u)\cr 
G_3(u)\cr 
G_4(u)\end{bmatrix}
$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<br/>
<p align="right"><font size = 4 >$P($</font><font size = 4 color="green">$s,u$</font><font size = 4>$) = $</font><font size = 4 color = "green">$ S $</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M $</font><font size = 4 >$\bullet$</font><font size = 4 color = "yellow">$G' $</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M^{T} $</font><font size = 4 >$\bullet$</font><font size = 4 color = "green">$ U' $</font><font size = 4 >$,$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4 >$\ 0 \leq$</font><font size = 4 color="green">$s$</font><font size = 4 >$,$</font><font size = 4 color="green">$u$</font><font size = 4>$\leq1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<p align="right"><font size =4 color="yellow">
$
G_Hx=\begin{bmatrix} 
g_11' & g_12' & g_13' & g_14'\cr 
g_21' & g_22' & g_23' & g_24'\cr
g_31' & g_22' & g_33' & g_34'\cr
g_41' & g_22' & g_43' & g_44'\cr
\end{bmatrix}
$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
</td>
</tr>
</table>

<p align="left"><font size = 5>Como:</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4 color = "yellow">$G_i ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) = $</font><font size = 4 color = "green">$ U $</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M $</font><font size = 4 >$\bullet$</font><font size = 4 color = "yellow">$G_i' $</font><font size = 5 > , donde </font><font size = 4 color = "yellow">$ G_i' $</font><font size = 4 >$ = $ </font><font size =4 color="yellow">$\begin{array} (( g_i1' \ g_i2' \ g_i3' \ g_i4' )\end{array}$</font><font size = 4 >$^{T}$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5>Entonces es el vector geométrico </font><font size = 4 color = "yellow">$G_i ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 5> se puede representar en la forma de hermite asi: </font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4 color = "red">$ \qquad \qquad \qquad \qquad s = 0 \qquad \qquad \qquad \qquad s = 1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4 color = "yellow">$P_kx ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 4 >$=$<font size =4 color="green">$U$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size =4 color="yellow">
$
\begin{bmatrix} 
g_11'\cr
g_12'\cr 
g_13'\cr 
g_11'\end{bmatrix}
_X$
</font><font size = 4 color = "yellow">$P_kx ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 4 >$=$<font size =4 color="green">$U$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size =4 color="yellow">
$
\begin{bmatrix} 
g_21'\cr
g_22'\cr 
g_23'\cr 
g_21'\end{bmatrix}
_X$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<p align="left"><font size = 4 color = "yellow">$DP_kx ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 4 >$=$<font size =4 color="green">$U$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size =4 color="yellow">
$
\begin{bmatrix} 
g_31'\cr
g_32'\cr 
g_33'\cr 
g_31'\end{bmatrix}
_X$
</font><font size = 4 color = "yellow">$DP_k+1x ($</font><font size = 4 color="green">$u$</font><font size = 4 color = "yellow">$) $</font><font size = 4 >$=$<font size =4 color="green">$U$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_H $</font><font size = 4 >$\bullet$</font><font size =4 color="yellow">
$
\begin{bmatrix} 
g_41'\cr
g_42'\cr 
g_43'\cr 
g_41'\end{bmatrix}
_X$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->


## SPLINES CÚBICAS

<p align="left"><font color = "blue">Superficies de Hermite</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4>$
G_Hx=\begin{bmatrix} 
x(0,0) & x(0,1) & \dfrac{\partial}{\partial u} x(0,0) & \dfrac{\partial}{\partial u} x(0,1)\cr 
x(1,0) & x(1,1) & \dfrac{\partial}{\partial s} x(1,0) & \dfrac{\partial}{\partial s} x(1,1)\cr
\dfrac{\partial}{\partial s} x(0,0)  & \dfrac{\partial}{\partial s} x(0,1) & \dfrac{\partial^{2}}{\partial s \partial u} x(0,0) & \dfrac{\partial^{2}}{\partial s \partial u} x(0,1)\cr
\dfrac{\partial}{\partial s} x(1,0) &\dfrac{\partial}{\partial s} x(1,1) & \dfrac{\partial^{2}}{\partial s \partial u} x(1,0) & \dfrac{\partial^{2}}{\partial s \partial u} x(1,1)\cr
\end{bmatrix}
$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="350" heigth="50" border="0" align ="right">
<tr>
<td>
<br/>
<br/>
<br/>
<p align="right"><font size =4 color="yellow">
$
G_Hx=\begin{bmatrix} 
g_11' & g_12' & g_13' & g_14'\cr 
g_21' & g_22' & g_23' & g_24'\cr
g_31' & g_22' & g_33' & g_34'\cr
g_41' & g_22' & g_43' & g_44'\cr
\end{bmatrix}
$
</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
</td>
</tr>
</table>

<img height="300" src="fig/splineCub5.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="1"-->


## SPLINES CÚBICAS

<p align="left"><font color = "blue">Superficies de Hermite/Continuidad</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5 color="yellow">$\qquad \qquad \qquad \qquad  Parche 1$</font><font size = 5>$ \qquad \qquad \qquad \qquad \qquad $</font><font size = 5 color="yellow">$Parche 2$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="center"><font size = 5 color = "green">
$
\begin{bmatrix} 
- & - & - & - \cr 
g_21' & g_22' & g_23' & g_24'\cr
- & - & - & - \cr 
g_41' & g_42' & g_43' & g_44'\cr
\end{bmatrix}$</font><font size = 5>
$\quad
\begin{bmatrix} 
g_21' & g_22' & g_23' & g_24'\cr
- & - & - & - \cr
kg_41' & kg_42' & kg_43' & kg_44'\cr
- & - & - & - \cr
\end{bmatrix}$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="center"><font size = 5>Si </font><font size = 5 color="red">$k$</font><font size = 5>$ > 0 \rightarrow G^{1} \qquad \qquad$</font><font size = 5>Si </font><font size = 5 color="red">$k$</font><font size = 5>$ = 1 \rightarrow $</font><font size = 5 color="yellow">$C^{1}$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<img height="300" src="fig/splineCub6.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->


## SPLINES CÚBICAS

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right"><font size = 4> $P($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
u^{3} & u^{2} & u & 1 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4> $P'($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
3u^{2} & 2u & 1 & 0 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4 >$ 0 \leq$</font><font size = 4 color="green">$u$</font><font size = 4>$\leq1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4> $\qquad P($</font><font size = 4 color="green">$0$</font><font size = 4>$) = $</font><font size = 4 color = "yellow">$p_k$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4> $\qquad P($</font><font size = 4 color="green">$1$</font><font size = 4>$) = $</font><font size = 4 color = "yellow">$p_k+1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4> $\qquad P'($</font><font size = 4 color="green">$0$</font><font size = 4>$) = 1/2 (1-$</font><font size = 4 color = "#00FFFF">$t$</font><font size = 4>$) $</font><font size = 4 color = "yellow">$p_k+1$</font><font size = 4>$ - $</font><font size = 4 color = "yellow">$p_k-1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 4> $\qquad P'($</font><font size = 4 color="green">$1$</font><font size = 4>$) = 1/2 (1-$</font><font size = 4 color = "#00FFFF">$t$</font><font size = 4>$) $</font><font size = 4 color = "yellow">$p_k+2$</font><font size = 4>$ - $</font><font size = 4 color = "yellow">$p_k$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5>$\quad \ $donde </font><font size = 5 color = "#00FFFF">$ t $</font><font size = 5> es el </font><font size = 5 color="#00FFFF"> parámetro de tensión</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
</td>
</tr>
</table>

<p align="left"><font color = "blue">Splines Cardinales</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<br/>
<p align="left"><font size = 5>Especificación con </font><font size = 5 color="green"> condiciones de frontera:</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<img height="200" src="fig/splineCub7.jpg" align ="left"><!-- .element: class="fragment" data-fragment-index="1"-->


## SPLINES CÚBICAS

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right"><font size = 4> $P($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
u^{3} & u^{2} & u & 1 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4> $P'($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
3u^{2} & 2u & 1 & 0 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4 >$ 0 \leq$</font><font size = 4 color="green">$u$</font><font size = 4>$\leq1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<p align="center"><font size = 5>
$\quad
M_c =\begin{bmatrix} 
-s' & 2-s & s-2 & s\cr
2s & s-3 & 3-2s & -s \cr
-s & 0 & s & 0\cr
0 & 1 & 0 & 0 \cr
\end{bmatrix}$</font><font size = 5> $ \qquad \qquad $ Donde </font><font size = 5 color="#00FFFF"> $ s $</font><font size = 5> $= ( 1 -$ </font><font size = 5 color="#00FFFF"> $ t $</font><font size = 5>$ ) / 2$ </font></p><!-- .element: class="fragment" data-fragment-index="1"-->
</td>
</tr>
</table>

<p align="left"><font color = "blue">Splines Cardinales</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<br/>
<br/>
<br/>
<p align="left"><font size =4 >$P($</font><font size =4 color="green">$u$</font><font size =4>$) =$</font><font size = 4 color="green">$\begin{bmatrix} u^{3} & u^{2} & u & 1 \end{bmatrix}$</font><font size = 4 >$\bullet$</font><font size = 4 color = "#00FFFF">$M_C $</font><font size = 4 >$\bullet$</font><font size = 4 color="yellow">
$
\begin{bmatrix} 
p_k-1\cr
p_k\cr 
p_k+1\cr 
p_k+2\end{bmatrix}
$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<br/>
<p align="left"><font size =5 >$P($</font><font size = 5 color="green">$u$</font><font size =5>$)=$</font><font size = 5 color="yellow">$p_k-1$</font><font size =5 >$(-$</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u^{3}$</font><font size =5 >$+2$</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u$</font><font size =5 >$-$</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u$</font><font size =5 >$)+$</font><font size = 5 color="yellow">$p_k$</font><font size =5 >$[(2-$</font><font size = 5 color = "#00FFFF">$s$</font><font size =5 >$)$</font><font size = 5 color="green">$u^{3}$</font><font size =5 >$+($</font><font size = 5 color = "#00FFFF">$s$</font><font size =5 >$-3)$</font><font size = 5 color="green">$u^{2}$</font><font size =5>$+1]$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5>$\qquad \ +$</font><font size = 5 color="yellow">$p_k+1$</font><font size =5 >$[($</font><font size = 5 color = "#00FFFF">$s$</font><font size =5 >$-2)$</font><font size = 5 color="green">$u^{3}$</font><font size =5 >$+(3-2$</font><font size = 5 color = "#00FFFF">$s$</font><font size =5 >$)$</font><font size = 5 color="green">$u^{2}$</font><font size =5>$+$</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u$</font><font size =5 >$]+$</font><font size = 5 color="yellow">$p_k+2$</font><font size =5 >$($</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u^{3}$</font><font size =5 >$-$</font><font size = 5 color = "#00FFFF">$s$</font><font size = 5 color="green">$u^{2}$</font><font size =5 >$)$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5>$\qquad \ =$</font><font size = 5 color="yellow">$p_k-1$</font><font size =5 color="red">$CAR_0$</font><font size =5 >$($</font><font size = 5 color="green">$u$</font><font size =5>$)+$</font><font size = 5 color="yellow">$p_k$</font><font size =5 color="red">$CAR_1$</font><font size =5 >$($</font><font size = 5 color="green">$u$</font><font size =5>$)+$</font><font size = 5 color="yellow">$p_k+1$</font><font size =5 color="red">$CAR_2$</font><font size =5 >$($</font><font size = 5 color="green">$u$</font><font size =5>$)+$</font><font size = 5 color="yellow">$p_k+2$</font><font size =5 color="red">$CAR_3$</font><font size =5 >$($</font><font size = 5 color="green">$u$</font><font size =5>$)+$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5>$\quad $ Los polinomios </font><font size =5 color="red">$CAR_k$</font><font size =5 >$($</font><font size = 5 color="green">$u$</font><font size =5>$) $ para </font><font size =5 color="red">$k$</font><font size =5> $= 0,1,2,3$ son las </font><font size =5 color="red">$funciones \ de \ combinación.$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->


##SPLINE CÚBICAS
<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right"><font size = 4> $P($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
u^{3} & u^{2} & u & 1 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4> $P'($</font><font size = 4 color="green">$u$</font><font size = 4>$) = $</font><font size = 4 color = "green">
$
\begin{bmatrix}
3u^{2} & 2u & 1 & 0 \cr
\end{bmatrix}
$
</font><font size = 4>$\bullet$</font><font size = 4 color="#00FFFF">
$
\begin{bmatrix}
a & b & c & d \cr
\end{bmatrix}
$
</font><font size = 4>$^{T} = $</font><font size = 4 color="green">$ U $</font><font size = 4>$\bullet $</font><font size = 4 color="#00FFFF">$M$</font><font size = 4>$\bullet $</font><font size = 4 color="yellow">$G$</font></p> <!-- .element: class="fragment" data-fragment-index="1"-->
<p align="right"><font size = 4 >$ 0 \leq$</font><font size = 4 color="green">$u$</font><font size = 4>$\leq1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
</td>
</tr>
</table>

<p align="left"><font color = "blue">Splines Kochanek-Bartels</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<p align="left"><font size =5>Especificación con </font><font size = 5 color = "green"> condiciones de frontera:</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5 >$P($</font><font size = 5 color="green">$0$</font><font size =5>$)=$</font><font size = 5 color="yellow">$p_k$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size =5 >$P($</font><font size = 5 color="green">$1$</font><font size =5>$)=$</font><font size = 5 color="yellow">$p_k+1$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size =5 >$P'($</font><font size = 5 color="green">$0$</font><font size =5>$)= 1/2(1-$</font><font size = 5 color = "#00FFFF">$t$</font><font size =5 >$)[(1+$</font><font size = 5 color = "#00FFFF">$b$</font><font size =5 >$)(1-$</font><font size = 5 color = "#00FFFF">$c$</font><font size =5 >$)($</font><font size = 5 color="yellow">$p_k$</font><font size =5 >$-$</font><font size = 5 color="yellow">$p_k-1$</font><font size =5 >$)+(1-$</font><font size = 5 color = "#00FFFF">$b$</font><font size =5 >$)(1+$</font><font size = 5 color = "#00FFFF">$c$</font><font size =5 >$)($</font><font size = 5 color="yellow">$p_k+1$</font><font size =5 >$-$</font><font size = 5 color="yellow">$p_k$</font><font size =5 >$)]$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5 >$P'($</font><font size = 5 color="green">$1$</font><font size =5>$)= 1/2(1-$</font><font size = 5 color = "#00FFFF">$t$</font><font size =5 >$)[(1+$</font><font size = 5 color = "#00FFFF">$b$</font><font size =5 >$)(1+$</font><font size = 5 color = "#00FFFF">$c$</font><font size =5 >$)($</font><font size = 5 color="yellow">$p_k+1$</font><font size =5 >$-$</font><font size = 5 color="yellow">$p_k$</font><font size =5 >$)+(1-$</font><font size = 5 color = "#00FFFF">$b$</font><font size =5 >$)(1-$</font><font size = 5 color = "#00FFFF">$c$</font><font size =5 >$)($</font><font size = 5 color="yellow">$p_k+2$</font><font size =5 >$-$</font><font size = 5 color="yellow">$p_k+1$</font><font size =5 >$)]$</font></p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left"><font size =5 >donde:</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5 color = "#00FFFF">$t $ </font><font size =5 >es el </font><font size = 5 color = "#00FFFF">parámetro de tensión</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5 color = "#00FFFF">$b $ </font><font size =5 >es el </font><font size = 5 color = "#00FFFF">parámetro de sesgo </font><font size =5 >: controla la distancia que cada curva se inclina en cada sección.</font></p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left"><font size = 5 color = "#00FFFF">$t $ </font><font size =5 >es el </font><font size = 5 color = "#00FFFF">parámetro de tensión </font><font size =5 >: Del vector tangente a lo largo de las fronteras de las secciones.</font></p><!-- .element: class="fragment" data-fragment-index="1"-->



## CURVAS Y SUPERFICIES DE BEZIER
<br/>
<br/>
<p align="left">
	<font color = "blue">1. Curvas de Pierre Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
<br/>
<p align="left">
	<font color = "blue">2. Propiedades</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->
<br/>
<p align="left">
	<font color = "blue">3. Técnicas de Diseño de Curvas de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->
<br/>
<p align="left">
	<font color = "blue">4. Curvas Cúbicas de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->
<br/>
<p align="left">
	<font color = "blue">5. Superficies de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->


## CURVAS Y SUPERFICIES DE BEZIER

<p align="left">
	<font color = "blue">1. Curvas de Pierre Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)=(x($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$),y($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$),z($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{T} \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad $ Tenemos $ n+1 $ </font>
	<font size ="4" color="yellow"> puntos de control </font>
	<font size = 4> de coordenadas</font> </p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4>$0 \leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$\qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \quad $ </font>
	<font size ="4" color="yellow">$ p_k $</font>
	<font size = 4>(</font>
	<font size ="4" color="yellow">$x_k$</font>
	<font size = 4>,</font>
	<font size ="4" color="yellow">$y_k$</font>
	<font size = 4>,</font>
	<font size ="4" color="yellow">$ z_k$</font>
	<font size = 4>),</font>
	<font size = 4>$ \quad \ \qquad $ </font>
	<font size ="4" color="yellow">$k$</font>
	<font size = 4>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4>Especificación con </font>
	<font size = 4 color = "red"> funciones de combinación:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$, k=0,1,2,...,n$</font>
	<font size = 8>$ \longrightarrow$</font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=$</font>
	<font size = 4 color = "#00FFFF">$C($ </font>
	<font size = 4>$n,k$</font>
	<font size = 4 color = "#00FFFF">$)$ </font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$^{k}(1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{n-k}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="green">$\qquad \qquad 0$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$1$</font>
	<font size = 5>$ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \quad $ </font>
	<font size = 8 color="green">$\downarrow$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 8 color="green">$\downarrow \qquad $</font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=( 1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)$</font>
	<font size = 4 color="red">$BEZ_k,n-1($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$+$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$BEZ_k-1,n-1($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $x($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$x_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$, k=0,1,2,...,n  \qquad $</font>
	<font size = 4 color="red">$BEZ_k,k($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$^{k} \quad $</font>
	<font size = 4 color="red">$BEZ_0,k($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=(1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{k}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $y($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$y_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$, k=0,1,2,...,n \qquad \qquad \qquad $</font>
	<font size = 4 color = "#00FFFF">$C($ </font>
	<font size = 4>$n,k$</font>
	<font size = 4 color = "#00FFFF">$)$ </font>
	<font size = 4>$=n!/(k!(n-k)!)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $z($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$z_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$, k=0,1,2,...,n \qquad \qquad \qquad \qquad \qquad$</font>
	<font size = 8 color="green">$\downarrow $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="green">$ \qquad \qquad 0$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color="green">$1 \qquad \qquad \qquad \qquad \qquad $</font>
	<font size = 4 color = "#00FFFF">$C($ </font>
	<font size = 4>$n,k$</font>
	<font size = 4 color = "#00FFFF">$)$ </font>
	<font size = 4>$=$</font>
	<font size = 4 color = "#00FFFF">$C($ </font>
	<font size = 4>$n,k-1$</font>
	<font size = 4 color = "#00FFFF">$)$ </font>
	<font size = 4>$(n-k+1)/k \ n>k$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE BEZIER

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="left">
	<font size = 5>Tenemos $ n+1 $ </font>
	<font size = 5 color="yellow"> puntos de control </font>
	<font size = 5> de coordenadas:</font>
	<font size = 5 color="yellow">$\quad p_k $</font>
	<font size = 5>(</font>
	<font size = 5 color="yellow">$x_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$y_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$ z_k$</font>
	<font size = 5>),</font>
	<font size = 5>$ \quad \ \qquad $ </font>
	<font size = 5 color="yellow">$k$</font>
	<font size = 5>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<table width="350" heigth="30" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$,$</font>
	<font size = 4>$k=0,1,2,..,n$</font>
	<font size = 4>$ \quad 0$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<br/>
<br/>
<br/>
<p align="left">
	<font color = "blue">Propiedades</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>1. Una curva de Bezier es un polinomio de grado n (uno menos que el número de puntos de control)</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>2. La curva siempre pasa a través del primer y último puntos de control</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5>$P($</font>
	<font size = 5 color="green">$0$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="yellow">$p_0 \qquad \qquad $ </font>
	<font size = 5>$P($</font>
	<font size = 5 color="green">$1$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="yellow">$p_n$ </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>3. Asimismo</font>
	<font size = 5>$ \quad \quad P'($</font>
	<font size = 5 color="green">$0$</font>
	<font size = 5>$)=-n$</font>
	<font size = 5 color="yellow">$p_0$</font>
	<font size = 5>$+n$</font>
	<font size = 5 color="yellow">$p_1$</font>
	<font size = 5>$\quad \quad \ \ P($</font>
	<font size = 5 color="green">$1$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="yellow">$p_n$ </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>Es decir, la tangente de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>4. También: $\qquad \sum$</font>
	<font size = 5 color="red">$BEZ_k,n($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color="red">$)$</font>
	<font size = 5>$=1 \qquad k=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>De esto se tiene que la curva de Bezier cae dentro del casco convexo de los puntos de control.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE BEZIER

<p align="left">
	<font color = "blue">Técnicas de Diseño de Curvas de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="left">
	<font size = 5>Tenemos $ n+1 $ </font>
	<font size = 5 color="yellow"> puntos de control </font>
	<font size = 5> de coordenadas:</font>
	<font size = 5 color="yellow">$\quad p_k $</font>
	<font size = 5>(</font>
	<font size = 5 color="yellow">$x_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$y_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$ z_k$</font>
	<font size = 5>),</font>
	<font size = 5>$ \quad \ \qquad $ </font>
	<font size = 5 color="yellow">$k$</font>
	<font size = 5>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<table width="350" heigth="30" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$,$</font>
	<font size = 4>$k=0,1,2,..,n$</font>
	<font size = 4>$ \quad 0$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<br/>
<br/>
<br/>
<p align="left">
	<font size = 5>1. Las curvas cerradas se pueden generar al especificar el primer y ultimo punto de control en la misma posición.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 5>2. Al especificar múltiples puntos de control en la misma posición se obtiene mas peso para la posición.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 5>1. </font>
	<font size = 5 color = "blue">Propiedad 3</font>
	<font size = 5>: La tangente  de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE BEZIER

<p align="left">
	<font color = "blue">Técnicas de Diseño de Curvas de Bezier: </font>
	<font size = 5 color = "green">Empalme de 2 secciones</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 5 color = "blue">Propiedad 3</font>
	<font size = 5>: La tangente  de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "green">Ejemplo para continuidad</font>
	<font size = 5>: $ G^{0}$</font>
	<font size = 5 color = "green">$, $</font>
	<font size = 5>$ G^{1}$</font>
	<font size = 5 color = "green">$, $</font>
	<font size = 5 color = "yellow">$ C^{1}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<img height="300" src="fig/curSupBez1.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE BEZIER

<p align="left">
	<font color = "blue">Curvas Cúbicas de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="center">
	<font size = 5>Tenemos $ n+1 $ </font>
	<font size = 5 color="yellow"> puntos de control </font>
	<font size = 5> de coordenadas:</font>
	<font size = 5 color="yellow">$\quad p_k $</font>
	<font size = 5>(</font>
	<font size = 5 color="yellow">$x_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$y_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$ z_k$</font>
	<font size = 5>),</font>
	<font size = 5>$ \quad \ \qquad $ </font>
	<font size = 5 color="yellow">$k$</font>
	<font size = 5>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 4 color="red">$BEZ_0,3($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=(1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{3}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 4 color="red">$BEZ_1,3($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=3$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$(1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{2}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 4 color="red">$BEZ_2,3($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=3$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$^{2}(1-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 4 color="red">$BEZ_3,3($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=3$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$^{3}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<table width="350" heigth="30" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$BEZ_k,n($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$,$</font>
	<font size = 4>$k=0,1,2,..,n$</font>
	<font size = 4>$ \quad 0$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<br/>
<br/>
<br/>
<br/>
<p align="left">
	<font size = 5>Especificación con </font>
	<font size = 5 color = "red"> funciones de combinación: </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font size = 5>Especificación con </font>
	<font size = 5 color = "#00FFFF"> matríz característica: </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="green">$
		\begin{bmatrix}
		u^{3} & u^{2} & u & 1 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color = "#00FFFF">$M_Bez$</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color="yellow">$
		\begin{bmatrix}
		p_0 \cr
		p_1 \cr
		p_2 \cr
		p_3 \cr
		\end{bmatrix}
		$</font>
	<font size = 5 color = "#00FFFF">$\qquad M_Bez$</font>
	<font size = 5 >$
		=\begin{bmatrix}
		-1 & 3 & -3 & 1 \cr
		3 & -6 & 3 & 0 \cr
		-3 & 3 & 0 & 0 \cr
		1 & 0 & 0 & 0 \cr
		\end{bmatrix}
		$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE BEZIER

<br/>
<p align="left">
	<font color = "blue">Superficies de Bezier</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<br/>
<br/>
<p align="center">
	<font>$x($</font>
	<font color="green">$s,u$</font>
	<font>$)=$</font>
	<font color="green">$S$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B$</font>
	<font>$\bullet $</font>
	<font color="yellow">$G_Bx'$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B ^{T}$</font>
	<font color="green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font>$y($</font>
	<font color="green">$s,u$</font>
	<font>$)=$</font>
	<font color="green">$S$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B$</font>
	<font>$\bullet $</font>
	<font color="yellow">$G_By'$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B^{T}$</font>
	<font color="green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font>$z($</font>
	<font color="green">$s,u$</font>
	<font>$)=$</font>
	<font color="green">$S$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B$</font>
	<font>$\bullet $</font>
	<font color="yellow">$G_Bz'$</font>
	<font >$\bullet $</font>
	<font color = "#00FFFF">$M_B ^{T}$</font>
	<font color="green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->



## CURVAS Y SUPERFICIES DE B-SPLINE

<br/>
<p align="left">
	<font color = "blue">1. Curvas de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<br/>
<p align="left">
	<font color = "blue">2. Uniformes y Periódicas</font>
</p><!-- .element: class="fragment" data-fragment-index="2"-->

<br/>
<p align="left">
	<font color = "blue">3. Cúbicas y Periódicas</font>
</p><!-- .element: class="fragment" data-fragment-index="3"-->

<br/>
<p align="left">
	<font color = "blue">4. Uniformes y Abiertas</font>
</p><!-- .element: class="fragment" data-fragment-index="4"-->

<br/>
<p align="left">
	<font color = "blue">5. No Uniformes</font>
</p><!-- .element: class="fragment" data-fragment-index="5"-->

<br/>
<p align="left">
	<font color = "blue">6. Superficies de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="6"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

<p align="left">
	<font color = "blue">1. Curvas de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="green">Ventajas respecto a las curvas de Bezier: $ \ $</font>
	<font size = 5> 1. El grado del polinomio se puede determinar independientemente del número de puntos de control.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5> 2. Permiten control local $ \ $</font>
	<font size = 5 color="green"> Desventaja $ \ $</font>
	<font size = 5> 1. Complejidad.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="550" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right">
	<font size = 5>Tenemos $ n+1 $ </font>
	<font size = 5 color="yellow"> puntos de control </font>
	<font size = 5> de coordenadas:</font>
	<font size = 5 color="yellow">$\quad p_k $</font>
	<font size = 5>(</font>
	<font size = 5 color="yellow">$x_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$y_k$</font>
	<font size = 5>,</font>
	<font size = 5 color="yellow">$ z_k$</font>
	<font size = 5>),</font>
	<font size = 5>$ \quad \ \qquad $ </font>
	<font size = 5 color="yellow">$k$</font>
	<font size = 5>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
<img height="200" src="fig/curSupB-Spl1.jpg" align ="right"><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
</br>
</br>
</br>
</br>
</br>
<p align="right">
	<font size = 5 color="green">$S_3 \ $</font>
	<font size = 5> es definida por </font>
	<font size = 5 color="yellow">$p_0,p_1,p_2,p_3$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 5 color="green">$S_4 \ $</font>
	<font size = 5> es definida por </font>
	<font size = 5 color="yellow">$p_1,p_2,p_3,p_4$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<table width="400" heigth="30" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 5 color = "blue">Definición $ \ $</font>
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$B_k,d($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$,$</font>
	<font size = 4>$\qquad \qquad \qquad \qquad k=0,1,2,..,n$</font>
	<font size = 4>$\qquad \qquad \qquad \ 2 \leq$</font>
	<font size = 4 color="red">$d$</font>
	<font size = 4>$\leq n+1 \ $</font>
	<font size = 4 color="red"> valor fijo</font>
	<font size = 4 color="#00FFFF">$\qquad \qquad \qquad \quad u_min \leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="#00FFFF">$\leq u_max$</font>	
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "blue">Ejemplo</font>
	<font size = 4>$ \qquad n=4 \qquad \qquad$</font>
	<font size = 4 color = "red">$d$</font>
	<font size = 4>$=4$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="#00FFFF">Vector de nudo </font>
	<font size = 5> de $n+$</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$+1 (9) $ pos:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 7 color="#00FFFF">$ \swarrow \qquad \searrow $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 color="#00FFFF">$u_min \qquad \qquad \qquad u_max$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</tr>
</td>
</table>


## CURVAS Y SUPERFICIES DE B-SPLINE

<p align="left">
	<font color = "blue">1. Curvas de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)=(x($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$),y($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$),z($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)^{T} \qquad \qquad \qquad \qquad \qquad \qquad $ Tenemos $ n+1 $ </font>
	<font size ="4" color="yellow"> puntos de control </font>
	<font size = 4> de coordenadas</font> </p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4>$0 \leq$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$\leq$</font>
	<font size = 4 color="green">$1$</font>
	<font size = 4>$ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \quad $ </font>
	<font size = 4 color="yellow">$ p_k $</font>
	<font size = 4>(</font>
	<font size = 4 color="yellow">$x_k$</font>
	<font size = 4>,</font>
	<font size = 4 color="yellow">$y_k$</font>
	<font size = 4>,</font>
	<font size = 4 color="yellow">$ z_k$</font>
	<font size = 4>),</font>
	<font size = 4>$ \quad \ \qquad $ </font>
	<font size = 4 color="yellow">$k$</font>
	<font size = 4>$=0,1,2,...,n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4>Especificación con </font>
	<font size = 4 color = "red"> funciones de combinación (Cox-deBoor):</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 4> $P($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)= \sum $</font>
	<font size = 4 color="yellow">$p_k$ </font>
	<font size = 4 color="red">$B_k,d($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$, k=0,1,2,...,n$</font>
	<font size = 5 color="green">$ \searrow$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 5 color="green">$u_min$</font>
	<font size = 5>$ \leq $</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ \leq $</font>
	<font size = 5 color="green">$u_max \qquad \qquad $</font>
	<font size = 4 color="red">$B_k,d($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$=($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$-$</font>
	<font size = 4 color = "#00FFFF">$u_k$ </font>
	<font size = 4>$)/($</font>
	<font size = 4 color = "#00FFFF">$u_k+d-1$ </font>
	<font size = 4>$-$</font>
	<font size = 4 color = "#00FFFF">$u_k$ </font>
	<font size = 4>$)$</font>
	<font size = 4 color="red">$B_k,d-1($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 4>$+($</font>
	<font size = 4 color = "#00FFFF">$u_k+d$ </font>
	<font size = 4>$-$</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$)/($</font>
	<font size = 4 color = "#00FFFF">$u_k+d$ </font>
	<font size = 4>$-$</font>
	<font size = 4 color = "#00FFFF">$u_k+1$ </font>
	<font size = 4>$)$</font>
	<font size = 4 color="red">$B_k+1,d-1($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<table width="400" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="center">
	<font size = 8 color="green">$ \downarrow $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 4 color="red">$B_k,d($</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4 color="red">$)$</font>
	<font size = 4>$= \quad 1, $</font>
	<font size = 5> si $ \ $</font>
	<font size = 4 color = "#00FFFF">$u_k$ </font>
	<font size = 4>$ \leq $</font>
	<font size = 4 color="green">$u$</font>
	<font size = 4>$ \leq $</font>
	<font size = 4 color = "#00FFFF">$u_k+1$ </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5>$ \qquad $</font>
	<font size = 4>$0,$</font> 
	<font size = 5> de otro modo</font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<table width="400" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 3> $x($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3>$)= \sum $</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="yellow">$x_k$ </font>
	<font size = 3 color="red">$B_k,d($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="red">$)$</font>
	<font size = 3>$, k=0,1,2,...,n$</font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 3> $y($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3>$)= \sum $</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="yellow">$y_k$ </font>
	<font size = 3 color="red">$B_k,d($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="red">$)$</font>
	<font size = 3>$, k=0,1,2,...,n$</font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 3> $z($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3>$)= \sum $</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="yellow">$z_k$ </font>
	<font size = 3 color="red">$B_k,d($</font>
	<font size = 3 color="green">$u$</font>
	<font size = 3 color="red">$)$</font>
	<font size = 3>$, k=0,1,2,...,n$</font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 color="green">$u_m$$_i$$_n$</font>
	<font size = 5>$ \leq $</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$ \leq $</font>
	<font size = 5 color="green">$u_m$$_a$$_x$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Propiedades</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
<p align="left">
	<font size = 5>1. La curva resultante es un polinomio de grado </font>
	<font size = 5 color="red">$ \ d $</font>
	<font size = 5>$-1 $ y continuidad $C$</font>
	<font size = 5 color="red">$^{d}$</font>
	<font size = 5>$^{-2}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>2.$ \ n+1 \ $puntos de control y</font>
	<font size = 5 color="red">funciones de combinación</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>3. Cada </font>
	<font size = 5 color="red">funcion de combinación $ \ B_k$, $_d$</font>
	<font size = 5 color="red">$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color="red">$) \ $</font>
	<font size = 5> se define sobre </font>
	<font size = 5 color="red">$ \ d \ $</font>
	<font size = 5> subintervalos del rango total de </font>
	<font size = 5 color="green">$ \ u \ $</font>
	<font size = 5> , empezando con el valor de</font>
	<font size = 5 color = "#00FFFF"> nudo $ \ u_k$ </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>4. El rango del parámetro </font>
	<font size = 5 color="green">$ \ u \ $</font>
	<font size = 5> se divide en $ \ n+$</font>
	<font size = 5 color="red">$d \ $</font>
	<font size = 5> subintervalos entre los valores $\ n+$</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$+1 \ $ que se especifican en el vector de nudo</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>5. Con el </font>
	<font size = 5 color = "#00FFFF">vector de nudo </font>
	<font size = 5> de $\ n+ \ $</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$+1 \ pos: $</font>
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} u_0, \ u_1, \ ...,u_n+d \cr \end{Bmatrix} \ $</font>
	<font size = 5> la curva que resulta se define únicamente en el intervalo que va desde el valor de nudo </font>
	<font size = 5 color = "#00FFFF">$ \ u_d$$- $$_1(=u_m$$_i$$_n) \ $</font>
	<font size = 5> hasta el valor </font>
	<font size = 5 color = "#00FFFF">$ \ u_n$$+ $$_1(=u_m$$_a$$_x). \ $</font>
	<font size = 5> Es decir, se tienen $: \ n-$</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$+2 \ $ secciones de curva.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Propiedades</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
</br>
<p align="left">
	<font size = 5>6. Cada sección de curva $ \ ($ entre </font>
	<font size = 5 color = "#00FFFF"> 2 valores de nudo </font>
	<font size = 5> sucesivos $ \ )$ está influenciada por </font>
	<font size = 5 color="red">$ \ d \ $</font>
	<font size = 5 color="yellow"> puntos de control</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>7. La mayoría de los puntos de control afecta </font>
	<font size = 5 color="red">$ \ d \ $</font>
	<font size = 5 > secciones de curva</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>8. Para cualquier valor de </font>
	<font size = 5 color="green">$ \ u \ $</font>
	<font size = 5> en el intervalo desde </font>
	<font size = 5 color = "#00FFFF">$ \ u_d$$+ $$_1 \ $</font>
	<font size = 5 > hasta </font>
	<font size = 5 color = "#00FFFF">$ \ u_n$$+ $$_1 \ $</font>
	<font size = 5 > se tiene: </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="red">$B_k$$, $$d($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color="red">$)$</font>
	<font size = 5>$=1, \ $ para </font> 
	<font size = 5 color="red">$ \ k$</font>
	<font size = 5>$=0 \ $ hasta $ \ n$ </font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Especificación</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
</br>
</br>
<p align="center">
	<font size = 7 color = "yellow">1) Puntos de Control</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 7 color = "red">2) Funciones de Combinación</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 7 >$ \qquad \qquad \quad  \ $ -</font>
	<font size = 7 color = "red">$ \ d$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 7 >-</font>
	<font size = 7 color = "#00FFFF"> Vector de Nudo</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

<p align="left">
	<font color = "blue">Uniformes y Periódicas / </font>
	<font color = "red"> Definición, Propiedades y Ejemplo</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "red"> Definición:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >El espaciado entre los </font>
	<font size = 5 color = "#00FFFF"> valores de nudo </font>
	<font size = 5 > es constante.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5 color = "red"> Propiedades:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >1. Posee </font>
	<font size = 5 color = "red"> funciones </font>
	<font size = 5 color = "#00FFFF"> periódicas </font>
	<font size = 5 color = "red"> de combinación </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >2. </font>
	<font size = 5 color="red">$ \ B_k$$, $$_d($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 color="red">$)$</font>
	<font size = 5>$=$</font> 
	<font size = 5 color="red">$B_k$$+$$_1$$, $$_d($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$+$</font> 
	<font size = 5 color = "#00FFFF">$ \nabla u$</font>
	<font size = 5 color="red">$)$</font>
	<font size = 5>$+$</font> 
	<font size = 5 color="red">$B_k$$+$$_2$$, $$_d($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$+2$</font> 
	<font size = 5 color = "#00FFFF">$ \nabla u$</font>
	<font size = 5 color="red">$)$</font>
	<font size = 5>$,$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>donde </font>
	<font size = 5 color = "#00FFFF">$ \nabla u \ $</font>
	<font size = 5> es la distancia entre valores de nudo adyacentes</font> 
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5 color = "red"> Ejemplo:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5>$n=$</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$=3 \ $</font>
	<font size = 5> y </font>
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} 0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6 \cr \end{Bmatrix} \ $</font>
	<font size = 5>$,\ $ se tienen las stes.: $ \ $</font>
	<font size = 5 color="red"> funciones de combinación </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

<img height="600" src="fig/curSupB-Spl2.jpg" align ="center"><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Cúbicas y Periódicas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>Para $ \ $</font>
	<font size = 5 color="red">$d$</font>
	<font size = 5>$=4 \ $ y $ \ n=3 $ se tiene el siguiente </font>
	<font size = 5 color = "#00FFFF"> vector de nudo:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} 0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6, \ 7 \cr \end{Bmatrix} \ $</font>
	<font size = 5> y podemos calcular las </font>
	<font size = 5 color="red"> funciones de combinación </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
<p align="left">
	<font size = 5>Tambien, se pueden especificar mediante </font>
	<font size = 5 color="green"> condiciones de frontera:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
<table width="400" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="left">
	<font size = 5>$P($</font>
	<font size = 5 color="green">$0$</font>
	<font size = 5>$)=1/6($</font>
	<font size = 5 color = "yellow">$p_0$</font>
	<font size = 5>$+4$</font>
	<font size = 5 color = "yellow">$p_1$</font>
	<font size = 5>$+$</font>
	<font size = 5 color = "yellow">$p_2$</font>
	<font size = 5>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$P($</font>
	<font size = 5 color="green">$1$</font>
	<font size = 5>$)=1/6($</font>
	<font size = 5 color = "yellow">$p_1$</font>
	<font size = 5>$+4$</font>
	<font size = 5 color = "yellow">$p_2$</font>
	<font size = 5>$+$</font>
	<font size = 5 color = "yellow">$p_3$</font>
	<font size = 5>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$P'($</font>
	<font size = 5 color="green">$0$</font>
	<font size = 5>$)=1/2($</font>
	<font size = 5 color = "yellow">$p_2$</font>
	<font size = 5>$-$</font>
	<font size = 5 color = "yellow">$p_0$</font>
	<font size = 5>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>$P'($</font>
	<font size = 5 color="green">$1$</font>
	<font size = 5>$)=1/2($</font>
	<font size = 5 color = "yellow">$p_3$</font>
	<font size = 5>$-$</font>
	<font size = 5 color = "yellow">$p_1$</font>
	<font size = 5>$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

</br>
<table width="550" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
		$
		\begin{bmatrix}
		u^{3} \ u^{2} \ u \ 1 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
		$
		\begin{bmatrix}
		a \ b \ c \ d \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5> $P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
		$
		\begin{bmatrix}
		3u^{2} \ 2u \ 1 \ 0 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
		$
		\begin{bmatrix}
		a \ b \ c \ d \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >$ 0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>


## CURVAS Y SUPERFICIES DE B-SPLINE

<table width="500" heigth="50" border="0" align ="right">
<tr>
<td>
<p align="right">
	<font size = 5> $P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
		$
		\begin{bmatrix}
		u^{3} \ u^{2} \ u \ 1 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
		$
		\begin{bmatrix}
		a \ b \ c \ d \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 5> $P'($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$) = $</font>
	<font size = 5 color = "green">
		$
		\begin{bmatrix}
		3u^{2} \ 2u \ 1 \ 0 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet$</font>
	<font size = 5 color="#00FFFF">
		$
		\begin{bmatrix}
		a \ b \ c \ d \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$^{T}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="right">
	<font size = 5 >$ 0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="right">
	<font size = 5 color="#00FFFF">$M_B=$</font>
	<font size = 5 >
		$1/6
		\begin{bmatrix}
		-1 & 3 & -3 & 1 \cr
		3 & -6 & 3 & 0 \cr
		3 & 0 & 3 & 0 \cr
		1 & 4 & 1 & 0 \cr
		\end{bmatrix}
		$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<p align="left">
	<font color = "blue">Cúbicas y Periódicas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
</br>
<p align="left">
	<font size = 5>$P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=$</font>
	<font size = 5 color="green">$
		\begin{bmatrix}
		u^{3} \ u^{2} \ u \ 1 \cr
		\end{bmatrix}
		$</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color = "#00FFFF">$M_B$</font>
	<font size = 5>$\bullet $</font>
	<font size = 5 color="yellow">$
		\begin{bmatrix}
		p_0 \cr
		p_1 \cr
		p_2 \cr
		p_3 \cr
		\end{bmatrix}
		$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<table width="550" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="left">
	<font size = 5 color="red">$B_0$$,$$_3$</font>
	<font size = 5>$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=1/6(1-$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)^{3}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="red">$B_1$$,$$_3$</font>
	<font size = 5>$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=1/6(3$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{3}-6$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{2}+4)$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="red">$B_2$$,$$_3$</font>
	<font size = 5>$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=1/6(-3$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{3}+3$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{2}+3$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$+1)$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color="red">$B_3$$,$$_3$</font>
	<font size = 5>$($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$)=1/6$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$^{3}$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >$ 0 \leq$</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5>$\leq1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>


## CURVAS Y SUPERFICIES DE B-SPLINE

<p align="left">
	<font color = "blue">Uniformes y Abiertas</font>
	<font color = "red"> Definición, Propiedades y Ejemplo</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "red"> Definición:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >El espaciado entre los </font>
	<font size = 5 color = "#00FFFF"> valores de nudo </font>
	<font size = 5 > es uniforme, excepto en los extremos, donde los </font>
	<font size = 5 color = "#00FFFF"> valores de nudo </font>
	<font size = 5 > se repiten </font>
	<font size = 5 color="red">$ \ d \ $</font>
	<font size = 5 > veces. </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "red"> Propiedades:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >1. Cálculo del vector de nudo </font>
	<font size = 5 color = "#00FFFF">$ \ u_j$</font>
	<font size = 5 >$: 0, \qquad \qquad$ para $ \ 0 \leq $</font>
	<font size = 5 color = "#00FFFF">$j$</font>
	<font size = 5>$<$</font>
	<font size = 5 color="red">$d$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >$ \qquad \qquad \qquad \qquad \qquad$</font>
	<font size = 5 color = "#00FFFF">$j$</font>
	<font size = 5>$-$</font>
	<font size = 5 color = "red">$d$</font>
	<font size = 5>$+1, \ \ \qquad$ para </font>
	<font size = 5 color="red">$ \ d$</font>
	<font size = 5>$\leq$</font>
	<font size = 5 color = "#00FFFF">$j$</font>
	<font size = 5>$\leq n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >$ \qquad \qquad \qquad \qquad \qquad n-$</font>
	<font size = 5 color = "red">$d$</font>
	<font size = 5>$+2, \ \ \qquad$ para </font>
	<font size = 5 color = "#00FFFF">$ \ j$</font>
	<font size = 5>$>n$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >2. Si </font>
	<font size = 5 color="red">$d$</font>
	<font size = 5 >$=n+1, $ tenemos las splines de </font>
	<font size = 5 color="green"> BEZIER. </font>
	<font size = 5 > Todos los val. de nudo son 0 o 1.</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 color = "red"> Ejemplos:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>1. </font>
	<font size = 5 color="red">$ \ d$</font>
	<font size = 5>$=2 \ $ y $ \ n=3, \quad$</font>
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} 0, \ 0, \ 1, \ 2, \ 3, \ 3 \cr \end{Bmatrix} \ $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>2. </font>
	<font size = 5 color="red">$ \ d$</font>
	<font size = 5>$=4 \ $ y $ \ n=3, \quad$</font>
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} 0, \ 0, \ 0, \ 0, \ 1, \ 1, \ 1, \ 1 \cr \end{Bmatrix} \ , $</font>
	<font size = 5 color="green"> BEZIER. </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">No Uniformes /</font>
	<font color = "red"> Definición, Propiedades y Ejemplo</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5 color = "red"> Definición:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left">
	<font size = 5 >El espaciado entre los </font>
	<font size = 5 color = "#00FFFF"> valores de nudo </font>
	<font size = 5 > no es uniforme y algunos valores se pueden repetir</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5 color = "red"> Propiedades:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
<p align="left">
	<font size = 5 > Proporcionan mayor flexibilidad</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
<p align="left">
	<font size = 5 color = "red"> Ejemplos:</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>1. </font>
	<font size = 5 color = "#00FFFF">$\begin{Bmatrix} 0, \ 0, \ 1, \ 2, \ 3, \ 8, \ 8.5 \cr \end{Bmatrix} \ $</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

<p align="left">
	<font color = "blue">No Uniformes Racionales Cúbicas/</font>
	<font color = "red"> Definición, Propiedades</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 >$x($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)=X($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)/W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$),$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 >$y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)=Y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)/W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$),$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 >$z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)=Z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)/W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >Donde </font>
	<font size = 5 >$X($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$),Y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$),Z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$), $ son curvas polinómicas cuyos </font>
	<font size = 5 color = "yellow"> puntos de control</font>
	<font size = 5 >$ se encuentran definidos en </font>
	<font size = 5 color = "yellow"> coordenadas homogéneas</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >Se puede pensar enb la curva como definida en el espacio homogéneo, como: </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >$P($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)=[X($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$) \ Y($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$) \ Z($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$) \ W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)], $ como de costumbre, pasar del espacio homogéneo a $ \ 3-d \ $ equivale dividir por $W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$).$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5 >Cualquier curva no racional puede ser transformada en una racional al agregarle $W($</font>
	<font size = 5 color="green">$u$</font>
	<font size = 5 >$)=1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>Los polinomios en la curva racional pueden ser Hermite, Bezier o de cualquier tipo. Cuando son B-Spline se tiene </font>
	<font size = 5 color = "#00FFFF"> NURBS</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="left">
	<font size = 5>Estas curvas son </font>
	<font size = 5 color = "#00FFFF"> invariantes </font>
	<font size = 5> incluso respecto de </font>
	<font size = 5 color = "#00FFFF"> transformaciones de perspectiva</font>	
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Conversión entre representaciones de Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
<table width="80" heigth="50" border="0" align ="right">
<tr>
<td>
</br>
</br>
<p align="center">
	<font size = 5 color="green">Curva2</font>
	<font size = 5 color="yellow">$G_2=?$</font>
	<font size = 5 color="#00FFFF">$M_2$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

</br>
</br>
<table width="80" heigth="50" border="0" align ="left">
<tr>
<td>
<p align="center">
	<font size = 5 color="green">Curva1 $ \ $</font>
	<font size = 5 color="yellow">$G_1$</font>
	<font size = 5 color="#00FFFF">$M_1$</font>
</p> <!-- .element: class="fragment" data-fragment-index="1"-->
</tr>
</td>
</table>

<p align="center">
	<font size = 7 color = "green">$\longleftarrow$</font>
	<font size = 5 color = "green">$U$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G_1$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M_1$</font>
	<font size = 5 >$=$</font>
	<font size = 5 color = "green">$U$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G_2$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M_2$</font>
	<font size = 7 color = "green">$\longrightarrow$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 color = "yellow">$G_1$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M_1$</font>
	<font size = 5 >$=$</font>
	<font size = 5 color = "green">$U$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "yellow">$G_2$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font size = 5 color = "yellow">$G_2$</font>
	<font size = 5 >$=$</font>
	<font size = 5 color = "#00FFFF">$M^{-1}$$_2$</font>
	<font size = 5 >$\bullet$</font>
	<font size = 5 color = "#00FFFF">$M_1$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

</br>
</br>

<p align="center">
	<font size = 5 color = "green">Nota: </font>
	<font size = 5 > Para convertir una curva de </font>
	<font size = 5 color = "green"> B-Spline </font>
	<font size = 5 >$( $ya que esta no posee matríz basica explícita$)$, se debe primero convertir a </font>
	<font size = 5 color = "green"> Bezier </font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->


## CURVAS Y SUPERFICIES DE B-SPLINE

</br>
<p align="left">
	<font color = "blue">Superficies de B-Spline</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
</br>
</br>
</br>
<p align="center">
	<font>$x($</font>
	<font size color = "green">$s,u$</font>
	<font>$)=$</font>
	<font color = "green">$S$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M_B$$_S$</font>
	<font>$\bullet$</font>
	<font color = "yellow">$G'$$_B$$_S$$_x$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M^{T}$$_B$$_S$</font>
	<font color = "green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font>$y($</font>
	<font size color = "green">$s,u$</font>
	<font>$)=$</font>
	<font color = "green">$S$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M_B$$_S$</font>
	<font>$\bullet$</font>
	<font color = "yellow">$G'$$_B$$_S$$_y$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M^{T}$$_B$$_S$</font>
	<font color = "green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->

<p align="center">
	<font>$z($</font>
	<font size color = "green">$s,u$</font>
	<font>$)=$</font>
	<font color = "green">$S$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M_B$$_S$</font>
	<font>$\bullet$</font>
	<font color = "yellow">$G'$$_B$$_S$$_z$</font>
	<font>$\bullet$</font>
	<font color = "#00FFFF">$M^{T}$$_B$$_S$</font>
	<font color = "green">$U^{T}$</font>
</p><!-- .element: class="fragment" data-fragment-index="1"-->
