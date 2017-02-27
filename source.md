<section id="themes">
	<h2>Themes</h2>
		<p>
			Set your presentation theme: <br>
			<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
                        <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

# Curves

Jean Pierre Charalambos

H:

# Index

 1. Intro<!-- .element: class="fragment" data-fragment-index="1"-->
 2. Cubic natural splines<!-- .element: class="fragment" data-fragment-index="2"-->
 3. Cubic Hermit splines<!-- .element: class="fragment" data-fragment-index="3"-->
 4. Bézier curves<!-- .element: class="fragment" data-fragment-index="4"-->
 
H:

## Intro

> Find the piecewise interpolation polynomial(s) that best approximate a given a set of _control points_

### Use cases

<li class="fragment"> As _drawing_ tool
<li class="fragment"> _Animation_ curves
<li class="fragment"> CAD tool to _model_ objects  

### Advantages

<li class="fragment"> Compact representation
<li class="fragment"> Affine transformations of the curve <-> transformation on the control points

V:

## Intro: General notions

<img height="300" src="fig/nociones.png">

1. Curve fits the interpolation<!-- .element: class="fragment" data-fragment-index="1"-->
2. Curve approximates the interpolation<!-- .element: class="fragment" data-fragment-index="2"-->
3. Convex hull<!-- .element: class="fragment" data-fragment-index="3"-->
4. Control polygon<!-- .element: class="fragment" data-fragment-index="4"-->

V:

## Intro: Problem statement

<img height="200" src="fig/repSpline4.jpg">

<li class="fragment"> One or several curve section -> piecewise spline
<li class="fragment"> For each piecewise section: $P(u) = ( x(u), y(u), z(u) )^{T}$ , $u_1 \leq u \leq u_2$
<li class="fragment"> $P'(u) = ( x'(u), y'(u), z'(u) )^{T} $ , $u_1 \leq u \leq u_2$ defines the tangent parametric vector of the curve

V:

## Intro: Continuity

### Geometric

$G^{0}$: if the sections extreme points meet at the same place<!-- .element: class="fragment" data-fragment-index="1"-->

$G^{1}$: if (besides $G^{0}$) the vector tangents directions (but no the magnitudes) are the same<!-- .element: class="fragment" data-fragment-index="2"-->

### Parametric

$C^{n}$: if $d^{n}/d u^{n}P(u)$, are the same for both sections

V:

## Intro: Continuity

It follows that:

1. $C^{1} \rightarrow G^{1}$ but not the other way around<!-- .element: class="fragment" data-fragment-index="1"-->
1. If $n > m$ then $C^{n} \rightarrow C^{m}$<!-- .element: class="fragment" data-fragment-index="2"-->

Exception to 1:
<center>
<table>
<tr>
<td>
<img height="280" src="fig/repSpline5.jpg">
</td>
<td>
<img height="280" src="fig/repSpline6.jpg">
</td>
</tr>
</table>
</center>
<!-- .element: class="fragment" data-fragment-index="3"-->

H:

## Cubic natural splines: problem statement

$P(u)=(x(u),y(u),z(u))^{T}$, $u_1 \leq u \leq u_2$

For each spline section:

\\[x(u) = a_x u^{3} + b_x u^{2} + c_x u + d_x\\]
\\[y(u) = a_y u^{3} + b_y u^{2} + c_y u + d_y\\]
\\[z(u) = a_z u^{3} + b_z u^{2} + c_z u + d_z\\]

$0 \leq u \leq 1$

V:

## Cubic natural splines: problem statement

Which may be written vectorially as:

$P(u)=a u^{3} + b u^{2} + c u + d , 0 \leq u \leq 1$

hence

\\[P(u) = 
\begin{bmatrix}
	u^{3} & u^{2} & u & 1 \cr
\end{bmatrix}
	\bullet	\begin{bmatrix}
	a & b & c & d \cr
\end{bmatrix}^{T} = U \bullet C\\]
\\[ P'(u) = \begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix}
	\bullet \begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
^{T} = U' \bullet C\\]
\\[ P''(u) = \begin{bmatrix}
	6u & 2 & 0 & 0 \cr
	\end{bmatrix}
	\bullet \begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
^{T} = U'' \bullet C\\]

$0 \leq u \leq 1$

We have $n+1$ control points: $P_k = (x_k,y_k,z_k),  k = 0,1,2,...,n$

V:

## Cubic natural splines: problem statement

<img height="200" src="fig/splineCub1.jpg">

Since there's $n+1$ control points then we have:

1. $n$ piecewise sections
1. $4n$ polynomial coeficients (unknowns)

V:

## Cubic natural splines: solution

<img height="200" src="fig/splineCub1.jpg">

Specification from $C^{2}$: Since there's $n+1$ control points then it follows:

1. For each $n-1$ intermediate control points we have $4$ equations ($4n-4$ equations in total):
  * Positions
  * 1st and 2nd derivatives
2. For the 2 extreme control points we have 
  * Positions
  * The second derivatives should be 0
  
Details [here](http://mathworld.wolfram.com/CubicSpline.html)

V:

## Cubic natural splines: problem statement

Now $C$ may be decomposed as: $C=M \bullet G$, where

\\[G = \begin{bmatrix} G_x & G_y & G_z \end{bmatrix} = \begin{bmatrix} 
g_1x & g_1y & g_1z \cr 
	g_2x & g_2y & g_2z \cr
	g_3x & g_2y & g_3z \cr
	g_4x & g_2y & g_4z \cr
	\end{bmatrix}\\]

\\[
M=\begin{bmatrix} 
	m_11 & m_12 & m_13 & m_14 \cr 
	m_21 & m_22 & m_23 & m_24 \cr
	m_31 & m_23 & m_33 & m_34 \cr
	m_41 & m_24 & m_43 & m_44 \cr
	\end{bmatrix}
\\]
	
V:
## SPLINE CÚBICAS

\[
\begin{bmatrix}m_{11} & m_{12} & m_{13} & m_{14}\\
m_{21} & m_{22} & m_{23} & m_{24}\\
m_{31} & m_{32} & m_{33} & m_{34}\\
m_{41} & m_{42} & m_{43} & m_{44}
\end{bmatrix}
\]

Tanto $M$ como $G$ varían para cada tipo de curva. 
$M$ es la matríz basica y $G$ es la matríz de restricciones o condiciones geométricas
Se tiene entonces: $P(u) = U \bullet M  \bullet G$

----

H:

## Cubic Hermit splines

H:

## Bézier curves

H:

## REPRESENTACIONES DE SPLINE


###Continuidad 
####Geométrica
<table>
<tr>
	<td>
$G^{0}$: Si los segmentos se unen. 
$G^{1}$: Si (ademas de $G^{0}$) las direcciones de los vectores tangentes, aunque no necesariamente las magnitudes, son iguales.
	</td>
	<td>
Cada sección: $P(u) = (x(u), y(u), z(u))^{T}$
$u_1 \leq u \leq u_2$
	</td>
<tr>
</table>


V:
## REPRESENTACIONES DE SPLINE


###Continuidad
####Paramétrica
<table>
<tr>
	<td>
$C^{n}$: Si $d^{n}/d u^{n}P(u)$, son iguales (la enésima derivada en magnitud y dirección)
	</td>
	<td>
Cada sección: $P'(u) = (x'(u), y'(u), z'(u))^{T}$
$u_1 \leq u \leq u_2$
	</td>
<tr>
</table>

V:## REPRESENTACIONES DE SPLINE
###Continuidad
Reglas:

1. $C^{1} \rightarrow G^{1}$ pero no al revés.
1. Si $n > m$ entonces $C^{n} \rightarrow C^{m}$

Excepción de la R1:
<center>
<table>
<tr>
<td>
<img height="280" src="fig/repSpline5.jpg">
</td>
<td>
<img height="280" src="fig/repSpline6.jpg">
</td>
</tr>
</table>
</center>


V:## REPRESENTACIONES DE SPLINE


###Continuidad
Existen 3 modos equivalentes:

1. Conjunto de condiciones de frontera
2. Matriz característica de la Spline
3. Funciones de combinación



H:

## TIPOS DE INTERPOLACIÓN DE SPLINE

1. Spline Cúbicas
2. Curvas y Superficies de Bezier
3. Curvas y Superficies de B-Spline



V:

## SPLINE CÚBICAS



1. Spline Cúbicas Naturales
2. Hermite
3. Spline Cardinales
4. Splines de Kochanek-Bartels



V:
## SPLINE CÚBICAS



Definicion del $P_b$. en el caso de polinonios cúbicos. $P(u)=(x(u),y(u),z(u))^{T}$, $u_1 \leq u \leq u_2$

Para cada sección de la Spline:

\\[x(u) = a_x u^{3} + b_x u^{2} + c_x u + d_x\\]
\\[y(u) = a_y u^{3} + b_y u^{2} + c_y u + d_y\\]
\\[z(u) = a_z u^{3} + b_z u^{2} + c_z u + d_z\\]

$0 \leq u \leq 1$


V:
## SPLINE CÚBICAS



Vectorialmente tenemos: 
$P(u)=a u^{3} + b u^{2} + c u + d , 0 \leq u \leq 1$

Entonces: 
\\[P(u) = 
\begin{bmatrix}
	u^{3} & u^{2} & u & 1 \cr
 \end{bmatrix}
	\bullet	\begin{bmatrix}
	a & b & c & d \cr
\end{bmatrix}^{T} = U \bullet C\\]
\\[ P'(u) = \begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix}
	\bullet \begin{bmatrix}
	a & b & c & d \cr
	\end{bmatrix}
^{T},  0 \leq u \leq 1\\]

Tenemos $n+1$ puntos de control de coordenadas:  $P_k = (x_k,y_k,z_k),  k = 0,1,2,...,n$



V:
## SPLINE CÚBICAS
Definicion del $P_b$. en el caso de polinomios cubicos:
Ahora:
\\[C=M \bullet G \\]
Donde:
\\[G = \begin{bmatrix} G_x & G_y & G_z \end{bmatrix} = \begin{bmatrix} 
g_1x & g_1y & g_1z \cr 
	g_2x & g_2y & g_2z \cr
	g_3x & g_2y & g_3z \cr
	g_4x & g_2y & g_4z \cr
	\end{bmatrix}\\]

V:
## SPLINE CÚBICAS
\\[
M=\begin{bmatrix} 
	m_11 & m_12 & m_13 & m_14 \cr 
	m_21 & m_22 & m_23 & m_24 \cr
	m_31 & m_23 & m_33 & m_34 \cr
	m_41 & m_24 & m_43 & m_44 \cr
	\end{bmatrix}\\]

Tanto $M$ como $G$ varían para cada tipo de curva. 
$M$ es la matríz basica y $G$ es la matríz de restricciones o condiciones geométricas
Se tiene entonces: $P(u) = U \bullet M  \bullet G$



V:
## SPLINE CÚBICAS
####Superficies paramétricas bicúbicas

Generalización de la curva: 
\\[P(u) =  U \bullet M  \bullet G \\]
(donde el vector geométrico $G$ es una constante)
 
1. Tomemos $s$ por $u$, $P(s) = S \bullet M  \bullet G$
2. Dejemos variar los puntos en $G$ en 3D a lo largo de un camino parametrizado en $u$
:
\\[P(s,u) = S \bullet M  \bullet G(u)\\]


V:
## SPLINE CÚBICAS
####Superficies paramétricas bicúbicas
Donde:

\\[G(u)=\begin{bmatrix} 
G_1(u)\cr G_2(u)\cr G_3(u)\cr G_4(u)\end{bmatrix}\\]
Para un valor fijo 
$u_1 , P(s,u_1)$ es una curva porque
	$G (u_1)$
 es constante. Haciendo $ 0 \leq u \leq 1 $ se obtiene la familia de curvas que conforman la superficie.

V:
## SPLINES CÚBICAS

####Superficies paramétricas bicúbicas

Tomando el caso en que $G_i(u)$ son cúbicas, se tiene que cada una puede ser representada como:

$G_i(u) = U \bullet M \bullet G $

donde $G_i = \begin{pmatrix} g_i1' & g_i2' & g_i3' & g_i4' \cr \end{pmatrix}^{T}$ 

V:
## SPLINES CÚBICAS

####Superficies paramétricas bicúbicas

transponiendo y reemplazando se obtiene:
$P(s,u)=S \bullet M \bullet \begin{bmatrix} 
g_11' & g_12' & g_13' & g_14'\cr 
g_21' & g_22' & g_23' & g_24'\cr
g_31' & g_22' & g_33' & g_34'\cr
g_41' & g_22' & g_43' & g_44'\cr
\end{bmatrix} \bullet
M^{T} \bullet U^{T} $

$= S \bullet M \bullet G' \bullet M^{T} \bullet U^{T}$

$ 0 \leq s,u \leq 1 $

V:
## SPLINES CÚBICAS

####Superficies paramétricas bicúbicas

Escrito separadamente para cada coordenada se tiene:
 

\\[x(s,u)=S \bullet M \bullet G_x' \bullet M^{T} \bullet U^{T}\\]
\\[y(s,u)=S \bullet M \bullet G_y' \bullet M^{T} \bullet U^{T}\\]
\\[z(s,u)=S \bullet M \bullet G_z' \bullet M^{T} \bullet U^{T}\\]



V:
## SPLINES CÚBICAS
####Splines Cúbicas Naturales


$P(u) = \begin{bmatrix}
u^{3} \ u^{2} \ u \ 1 \cr
\end{bmatrix}
 \bullet \begin{bmatrix}
 a \ b \ c \ d \cr
 \end{bmatrix}
 ^{T} = U \bullet C$

$P'(u) =\begin{bmatrix}
	3u^{2} & 2u & 1 & 0 \cr
	\end{bmatrix} \bullet \begin{bmatrix}
 a \ b \ c \ d \cr\end{bmatrix} 
^{T}$
 
$\ 0 \leq s,u \leq 1 $



V:
## SPLINES CÚBICAS
####Splines Cúbicas Naturales


<img height="100" src="fig/splineCub1.jpg">

Especificación con 
condiciones de frontera: $C^{2}$

Si se tienen $n+1$ puntos de control: 

1. $n$
 secciones curvas a ajusta
1. $4n$
 coeficientes polinómicos (incógnitas)

1. $4n-4$
	 ecuaciones ( las 2 secciones a cada lado de un punto de control deven tener la $1a$ y la $2a$ derivadas iguales: para 
	$n-1$
	puntos,
	$4$
 ecuaciones por punto )


V:
## SPLINES CÚBICAS
####Splines Cúbicas Naturales


1. Las posiciones 
$p_0$
 Y $p_n$
 nos dan
 $2$ ecuaciones mas

1. Las otras 
$2$ ecuaciones se pueden establecer al definir como $0$ las segundas derivadas en $p_0$
 y $p_n$

V:## SPLINES CÚBICAS



####Splines de Hermite




Especificación con 
condiciones de frontera:
 


<img height="150" src="fig/splineCub2.jpg">

1. $p_k = P(0) = d$
1. $p_{k+1} = P(1) = a+b+c+d$
1. $Dp_k = P'(0) = c$
1. $Dp_{k+1}= P'(1) = 3a + 2b + c$


V:## SPLINES CÚBICAS



####Splines de Hermite

1. $ P(0) = p_k$ 
1. $ P(1) = p_{k+1}$
1. $P'(0) = Dp_k$ (Derivada en el punto $p_k$)

1. $P'(1) = Dp_k+1 $ (Derivada en el punto $p_k+1$ )

$\begin{bmatrix} p_k \cr p_k+1 \cr
 Dp_k \cr Dp_k+1 \cr \end{bmatrix} = \begin{bmatrix}
	0 & 0 & 0 & 1 \cr
 1 & 1 & 1 & 1 \cr
 0 & 0 & 1 & 0 \cr 4 & 2 & 1 & 0 \cr
 \end{bmatrix}
 \begin{bmatrix} 
	a \cr 
	b \cr
	c \cr
	d \cr
	\end{bmatrix}
$

V:

## SPLINES CÚBICAS


####Splines de Hermite


\\[\begin{bmatrix} 
a \cr 
b \cr
 c \cr
 d \cr
 \end{bmatrix}
 = 
\begin{bmatrix}
 2 & -2 & 1 & 1 \cr
 -3 & 3 & -2 & -1 \cr
 0 & 0 & 1 & 0 \cr
 1 & 0 & 0 & 0 \cr
 \end{bmatrix} \bullet \begin{bmatrix} 
 p_k \cr 
p_k+1 \cr
 Dp_k \cr
 Dp_k+1 \cr
 \end{bmatrix}
 \\]


V:

## SPLINES CÚBICAS


####Splines de Hermite

Matriz de Hermite:
<table>
<tr>
	<td>
\\[M_H =
\begin{bmatrix}
 2 & -2 & 1 & 1 \cr
 -3 & 3 & -2 & -1 \cr
	0 & 0 & 1 & 0 \cr
 1 & 0 & 0 & 0 \cr
 \end{bmatrix}\\]
	</td>
	<td>
$l=k+1$
	</td>
</tr>
</table>
$P(u) = p_k(2u^{3}-3u^{2}+1)+p_l(-2u^{3}+3u^{2})$
$+Dp_k(u^{3}-2u^{2}+u)+Dp_l(u^{3}-u^{2})$
$P(u) = p_k H_0(u)+p_l H_1(u)+Dp_k H_2(u)+Dp_l H_3(u)$
Donde los polinomios $H_i(u)$ para $k= 0,1,2,3$ son las funciones de combinación.



V:
## SPLINES CÚBICAS 
####Splines de Hermite / ejemplos / continuidad entre secciones
<table>
<tr>
	<td>
Familia de curvas:
	</td>
	<td colspan=3>
Continuidad entre curvas:
	</td>
</tr>
<tr>
	<td>

<img height="250" src="fig/splineCub3.jpg" style="vertical-align: top;">
	</td>
	<td>
Curva 1
$
\begin{bmatrix} P(0) \cr P(1) \cr
 P'(0) \cr P'(1)\cr
 \end{bmatrix}$

	</td>
	<td>
Curva 2
$\begin{bmatrix} P(1) \cr P(2) \cr k P'(1) \cr
 P'(2)\cr
\end{bmatrix}$
	</td>
	<td>
Si $k > 0 \rightarrow G^{1}$ 
Si $k = 1 \rightarrow C^{1}$
	</td>
</tr>
</table>


V:


## SPLINES CÚBICAS

####Superficies de Hermite
<img height="400" src="fig/splineCub4.jpg">

V:


## SPLINES CÚBICAS

####Superficies de Hermite
Desarrollando para la coordenada x:
\\[x(s,u)=S \bullet M_H \bullet G_Hx(u) = S \bullet M_H \bullet 
\begin{bmatrix} 
p_k(u)\cr
p_k+1(u)\cr 
Dp_k(u)\cr 
Dp_k+1(u)\end{bmatrix}
_X \\]

V:


## SPLINES CÚBICAS

####Superficies de Hermite

\\[P(s,u)=S \bullet M_H \bullet G(u)\\]
Donde 
\\[G(u)=\begin{bmatrix} 
G_1(u)\cr 
G_2(u)\cr 
G_3(u)\cr 
G_4(u)\end{bmatrix}\\]

> El parche cúbico es una interpolación cúbica entre $p_k(u) =P(0,u)$ y $P_k+1(u) =P(1,u)$ o, alternativamente, entre $P(s,0)$ y $P(s,1)$



V:
## SPLINES CÚBICAS
#### Superficies de Hermite
Como:
$G_i(u)=u \bullet M \bullet G'_i$, donde $G'_i=\begin{array} (( g_i1' \ g_i2' \ g_i3' \ g_i4' )\end{array}^{T}$ Entonces es el vector geométrico  se puede representar en la forma de hermite asi:


V:
## SPLINES CÚBICAS
#### Superficies de Hermite
<table>
<tr>
	<td>

$P_k (u)=U \bullet M_H \bullet 
\begin{bmatrix} 
g_11'\cr
g_12'\cr 
g_13'\cr 
g_11'\end{bmatrix}
_X$
	</td>
	<td>

$P_l (u)=U \bullet M_H \bullet 
\begin{bmatrix} 
g_21'\cr
g_22'\cr 
g_23'\cr 
g_21'\end{bmatrix}
_X$
	</td>
</tr>
<tr>
	<td>
$DP_k(u)=U \bullet M_H \bullet 
\begin{bmatrix} 
g_31'\cr
g_32'\cr 
g_33'\cr 
g_31'\end{bmatrix}
_X$
	</td>
	<td>
$DP_l(u)=U \bullet M_H \bullet 
\begin{bmatrix} 
g_41'\cr
g_42'\cr 
g_43'\cr 
g_41'\end{bmatrix}
_X$
	</td>
</tr>
</table>

> $l=k+1$

V:#### Superficies de Hermite

$P(s,u)=S \bullet M \bullet G(u)$ donde $
G(u)=\begin{bmatrix} 
G_1(u)\cr 
G_2(u)\cr 
G_3(u)\cr 
G_4(u)\end{bmatrix}
$

$P(s,u) = S  \bullet M \bullet G' \bullet M^{T} \bullet U^{T} , 0 \leq s,u \leq 1$


$G_H = \begin{bmatrix} 
g_11' & g_12' & g_13' & g_14' \cr 
g_21' & g_22' & g_23' & g_24' \cr
g_31' & g_22' & g_33' & g_34' \cr
g_41' & g_22' & g_43' & g_44' \cr
\end{bmatrix}$


V:
## SPLINES CÚBICAS


####Superficies de Hermite
$G_Hx=\begin{bmatrix} 
x(0,0) & x(0,1) & \dfrac{\partial}{\partial u} x(0,0) & \dfrac{\partial}{\partial u} x(0,1)\cr 
x(1,0) & x(1,1) & \dfrac{\partial}{\partial s} x(1,0) & \dfrac{\partial}{\partial s} x(1,1)\cr
\dfrac{\partial}{\partial s} x(0,0)  & \dfrac{\partial}{\partial s} x(0,1) & \dfrac{\partial^{2}}{\partial s \partial u} x(0,0) & \dfrac{\partial^{2}}{\partial s \partial u} x(0,1)\cr
\dfrac{\partial}{\partial s} x(1,0) &\dfrac{\partial}{\partial s} x(1,1) & \dfrac{\partial^{2}}{\partial s \partial u} x(1,0) & \dfrac{\partial^{2}}{\partial s \partial u} x(1,1)\cr
\end{bmatrix}$

V:
## SPLINES CÚBICAS


####Superficies de Hermite



<table>

<tr>

<td>


<img height="300" src="fig/splineCub5.jpg"style="vertical-align: top;">
</td>
<td>


$
G_Hx=
\begin{bmatrix} 

g_11' & g_12' & g_13' & g_14'\cr

g_21' & g_22' & g_23' & g_24'\cr
g_31' & g_22' & g_33' & g_34'\cr

g_41' & g_22' & g_43' & g_44'\cr

\end{bmatrix}
$

</td>

</tr>

</table>




V:
## SPLINES CÚBICAS


####Superficies de Hermite/Continuidad
<table>
<tr>
	<td>
Parche 1

$
\begin{bmatrix} 

- & - & - & - \cr 

g_21' & g_22' & g_23' & g_24'\cr

- & - & - & - \cr
 
g_41' & g_42' & g_43' & g_44'\cr

\end{bmatrix}$
	</td>
	<td>
Parche 2
$\begin{bmatrix}

g_21' & g_22' & g_23' & g_24'\cr

- & - & - & - \cr

kg_41' & kg_42' & kg_43' & kg_44'\cr
- & - & - & - \cr

\end{bmatrix}$
	</td>
</tr>
<tr>
	<td colspan=2>
Si $K>0 \rightarrow G^{1}$,
Si $K>0 \rightarrow C^{1}$
	</td>
</tr>
</table>

V:
## SPLINES CÚBICAS


####Superficies de Hermite/Continuidad
<img height="500" src="fig/splineCub6.jpg" align ="center">



V:
## SPLINES CÚBICAS
####Splines Cardinales
\\[P(u)=\begin{bmatrix} u^{3} & u^{2} & u & 1\end{bmatrix} \bullet \begin{bmatrix} a & b & c & d \end{bmatrix}^{T} = U \bullet M \bullet G \\]
\\[P'(u)=\begin{bmatrix} 3u^{2} & 2u & 1 & 0\end{bmatrix} \bullet \begin{bmatrix} a & b & c & d \end{bmatrix}^{T}\\]
\\[P'(u)=\begin{bmatrix} 3u^{2} & 2u & 1 & 0\end{bmatrix} \bullet M \bullet G\\]

V:
## SPLINES CÚBICAS
####Splines Cardinales

Especificación con  condiciones de frontera:
<img height="200" src="fig/splineCub7.jpg">

> $P(0)=P_k$
> $P(1)=P_k+1$
> $P'(0)=1/2(1-t)P_k+1-p_k-1$
> $P'(1)=1/2(1-t)P_k+2-p_k$

> donde $t$ es el parámetro de tensión

V:## SPLINES CÚBICAS
####Splines Cardinales

$P(u)=\begin{bmatrix} u^{3} & u^{2} & u & 1\end{bmatrix} \bullet M_C \bullet \begin{bmatrix} P_k-1 \cr P_k \cr P_k+1 \cr P_k+2 \end{bmatrix}$
$
M_c =\begin{bmatrix} 
-s' & 2-s & s-2 & s\cr
2s & s-3 & 3-2s & -s \cr
-s & 0 & s & 0\cr
0 & 1 & 0 & 0 \cr
\end{bmatrix}$

Donde $s=(1-t)/2$

V:## SPLINES CÚBICAS
####Splines Cardinales
$P(u)=p_k-1(-su^{3}+2su^{2}-su)+p_k[(2-s)u^{3}+(s-3)u^{2}+1]$
$+p_k+1[(s-2)u^{3}+(3-2)u^{2}+su]+p_k+2(su^{3}-su^{2})$

$=p_k-1 CAR_0(u)+p_k CAR_1(u)+p_k+1 CAR_2(u)+ p_k+2 CAR_3(u)$

Los polinomios $CAR_k(u)$ para $k = 0,1,2,3$ son las  funciones  de  combinación


V:
##SPLINE CÚBICAS

####Splines Kochanek-Bartels
Especificación con condiciones de frontera:

<font size=5>
$P(0)=p_k$

$P(1)=p_k+1$
$P'(0)=1/2(1−t)[(1+b)(1−c)(p_k−p_k−1)+(1−b)(1+c)(p_k+1−p_k)]$
$P'(1)=1/2(1−t)[(1+b)(1+c)(p_k+1−p_k)+(1−b)(1−c)(p_k+2−p_k+1)]$
</font>

Donde:

t es el parámetro de tensión

b es el parámetro de sesgo : controla la distancia que cada curva se inclina en cada sección.

c es el parámetro de tensión : Del vector tangente a lo largo de las fronteras de las secciones.


H:

## CURVAS Y SUPERFICIES DE BEZIER

1. Curvas de Pierre Bezier

2. Propiedades
3. Técnicas de Diseño de Curvas de Bezier
4. Curvas Cúbicas de Bezier

5. Superficies de Bezier

V:## CURVAS Y SUPERFICIES DE BEZIER
	
####Curvas de Pierre Bezier
$P(u)=(x(u),Y(u),z(u))^{T}, 0 \leq u \leq 1$

>Tenemos $n+1$ puntos de control de coordenadas: $P_k=(x_k,y_k,z_y), k=0,1,2,....,n$

V:## CURVAS Y SUPERFICIES DE BEZIER
	
####Curvas de Pierre Bezier
Especificación con funciones de combinacion

BEZ= BEZ <sub>k,n</sub>

$P(u)= \sum P_k BEZ(u), k=0,1,2,...,n $

* $P(u)= \sum x_k BEZ(u), k=0,1,2,...,n $
* $P(u)= \sum y_k BEZ(u), k=0,1,2,...,n $
* $P(u)= \sum z_k BEZ(u), k=0,1,2,...,n $

V:## CURVAS Y SUPERFICIES DE BEZIER
	
####Curvas de Pierre Bezier
$BEZ(u)=C(n,k)u^{k}(1-u)^{n-k}$

$BEZ(u)=(1-u)BEZ$<sub>k,n-1</sub>$(u)+u BEZ$<sub>k-1,n-1</sub>$(u), n > k \ge 1$

$BEZ$<sub>k,k</sub>$(u)=u^{k}$

$BEZ$<sub>0,k</sub>$(u)=u^{k}$

$C(n,k)=n!/(k!(n-k)!)$

$C(n,k)=C(n,k-1)(n-k+1)/k,n>k$



V:## CURVAS Y SUPERFICIES DE BEZIER
####Propiedades
1. Una curva de Bezier es un polinomio de grado n (uno menos que el número de puntos de control)

2. La curva siempre pasa a través del primer y último puntos de control
    1. $P(0)=p_0$
,  $P(1)=p_n$

3. Asimismo
$P'(0)=-n p_0 +n p_1$
, $P'(1)=-n p$<sub>n-1</sub>$ +n p_n$
 Es decir, la tangente de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.

4. También: $\sum BEZ$<sub>k,n</sub>$(u)=1, k=0,1,2,...,n$ De esto se tiene que la curva de Bezier cae dentro del casco convexo de los puntos de control.

V:


## CURVAS Y SUPERFICIES DE BEZIER
####Técnicas de Diseño de Curvas de Bezier

1. Las curvas cerradas se pueden generar al especificar el primer y ultimo punto de control en la misma posición.
2. Al especificar múltiples puntos de control en la misma posición se obtiene mas peso para la posición.
3. La tangente  de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.





V:
## CURVAS Y SUPERFICIES DE BEZIER

####Técnicas de Diseño de Curvas de Bezier:
Empalme de 2 secciones
Propiedad 3
: La tangente  de la curva en el extremo está a lo largo de la línea que une ese extremo al punto de control adyacente.

Ejemplo para continuidad
:$G^{0},G^{1},C^{1}$



<img height="300" src="fig/curSupBez1.jpg">

V:


## CURVAS Y SUPERFICIES DE BEZIER

####Curvas Cúbicas de Bezier

Tomando $n=3$ ($4$ puntos de control):
$P_k=(x_k,y_k,z_k), k=0,1,2,3$

Especificación con funciones de Combinación:

1. $BEZ$<sub>0,3</sub>$(u)=(1-u)^{3}$
2. $BEZ$<sub>1,3</sub>$(u)=3u(1-u)^{2}$
3. $BEZ$<sub>2,3</sub>$(u)=3u^{2}(1-u)$
4. $BEZ$<sub>3,3</sub>$(u)=u^{3}$

V:


## CURVAS Y SUPERFICIES DE BEZIER

####Curvas Cúbicas de Bezier

Especificación con matríz característica:
<table>
<tr>
	<td>
$P(u)=\begin{bmatrix}u^{3} & u^{2} & u & 1 \end{bmatrix}
 \bullet M_Bez \bullet \begin{bmatrix}
 p_0 \cr p_1 \cr p_2 \cr
 p_3 \cr \end{bmatrix}
$
	</td>
	<td>
$M_Bez =\begin{bmatrix}
 -1 & 3 & -3 & 1 \cr
 3 & -6 & 3 & 0 \cr -3 & 3 & 0 & 0 \cr
 1 & 0 & 0 & 0 \cr
 \end{bmatrix}
$

	</td>
</tr>
</table>



V:


## CURVAS Y SUPERFICIES DE BEZIER
#### Superficies de Bezier

$x(s,u)=S \bullet M_B \bullet G'$<sub>B<sub>x</sub></sub>$ \bullet M^{T}_B \bullet U^{T}$

$y(s,u)=S \bullet M_B \bullet G'$<sub>B<sub>y</sub></sub>$ \bullet M^{T}_B \bullet U^{T}$

$z(s,u)=S \bullet M_B \bullet G'$<sub>B<sub>z</sub></sub>$ \bullet M^{T}_B \bullet U^{T}$





H:## CURVAS Y SUPERFICIES DE B-SPLINE
1. Curvas de B-Spline
2. Uniformes y Periódicas
3. Cúbicas y Periódicas
4. Uniformes y Abiertas
5. No Uniformes

6. Superficies de B-Spline





V:## CURVAS Y SUPERFICIES DE B-SPLINE
	
####Curvas de B-Spline
Ventajas respecto a las curvas de Bezier: 
1. El grado del polinomio se puede determinar independientemente del número de puntos de control.
2. Permiten control local
Desventaja: complejidad.

Tenemos $n+1$ puntos de control de coordenadas:
	$p_k=(
x_k,y_k,z_k), 
k = 0,1,2,...,n$

Definición:$P(u)= \sum  p_k B$<sub>k,d</sub>$(u), k=0,1,2,..,n$
	
$2 \leq d \leq n+1 $ 
valor fijo
	
$u_min \leq u \leq u_max$






V:## CURVAS Y SUPERFICIES DE B-SPLINE
	
####Curvas de B-Spline/ Ejemplo
$n=4, d=4$

<img height="200" src="fig/curSupB-Spl1.jpg">

$S_3$
 es definida por $p_0,p_1,p_2,p_3$

$S_4$
 es definida por $p_1,p_2,p_3,p_4$

$U$<sub>min</sub>$ = u_3$, $U$<sub>max</sub>$ = u_5$ Vector de nudo de $n+d+1$ (9) pos:
$\begin{bmatrix} u_0 & u_1 & u_2 & u_3 & u_4 & u_5 & u_6 & u_7 & u_8 \end{bmatrix}$

V:## CURVAS Y SUPERFICIES DE B-SPLINE

####Curvas de B-Spline
Especificación con funciones de combinación (Cox-deBoor):
$P(u)=\sum p_k B$<sub>k,d</sub>$(u), k=0,1,2...n$, $u$<sub>min</sub>$ \le u \le u$<sub>max</sub>

1. $x(u)=\sum x_k B$<sub>k,d</sub>$(u), k=0,1,2...n$, $u$<sub>min</sub>$ \le u \le u$<sub>max</sub>
2. $y(u)=\sum y_k B$<sub>k,d</sub>$(u), k=0,1,2...n$, $u$<sub>min</sub>$ \le u \le u$<sub>max</sub>
3. $z(u)=\sum z_k B$<sub>k,d</sub>$(u), k=0,1,2...n$, $u$<sub>min</sub>$ \le u \le u$<sub>max</sub>

V:## CURVAS Y SUPERFICIES DE B-SPLINE

####Curvas de B-Spline
Especificación con funciones de combinación (Cox-deBoor)/2:

$B$<sub>k,d</sub> $(u) = (u-u_k)  (u$ <sub>k+d-1</sub> $-u_k)B$ <sub>k,d-1</sub>

$+(u$<sub>k+d</sub>$-u)/(u$<sub>k+d</sub>$-u$<sub>k+1</sub>$)B$<sub>k+1,d-1</sub>

$B$<sub>k,1</sub>$(u) = 1$, si $u_k \le u\le u$<sub>k+1</sub>, $0$ de otro modo.

V:


## CURVAS Y SUPERFICIES DE B-SPLINE


####Propiedades

1. La curva resultante es un polinomio de grado $d-1$ y continuidad $C^{d-2}$
2. $n+1$ puntos de control y funciones de combinación
3. Cada funcion de combinación $B$<sub>k,d</sub> se define sobre $d$
 subintervalos del rango total de $u$, empezando con el valor de
 nudo $u_k$
4. El rango del parámetro $u$ se divide en $n+d$
 subintervalos entre los valores $n+d+1$ que se especifican en el vector de nudo


V:## CURVAS Y SUPERFICIES DE B-SPLINE
####Propiedades

5. Con el vector de nudo de $n+d+1$ pos: $\begin{Bmatrix} u_0, \ u_1, \ ...,u_n+d \end{Bmatrix} $ la curva que resulta se define únicamente en el intervalo que va desde el valor de nudo $u$<sub>d-1</sub>$(=u$<sub>min</sub>$)$ hasta el valor $u$<sub>n+1</sub>$(=u$<sub>max</sub>$)$ Es decir, se tienen $:n-d+2$ secciones de curva.
6. Cada sección de curva ( entre 2 valores de nudo sucesivos ) está influenciada por $d$ puntos de control
7. La mayoría de los puntos de control afecta $d$
 secciones de curva
8. Para cualquier valor de $u$ en el intervalo desde $u$<sub>d-1</sub> hasta $u$<sub>n+1</sub> se tiene: 
$B$<sub>k,d</sub>$(u)=1$, para $k=0$ hasta $n$




V:## CURVAS Y SUPERFICIES DE B-SPLINE


####Especificación

1. Puntos de Control
1. Funciones de Combinación
	1. $d$
	2.Vector de Nudo


V:## CURVAS Y SUPERFICIES DE B-SPLINE
####Uniformes y Periódicas: Definición, Propiedades y Ejemplo

Definición:

El espaciado entre los valores de nudo es constante.

Propiedades:


1. Posee funciones periódicas de combinación
2. $B$<sub>k,d</sub>$(u) = B$<sub>k-1,d</sub>$(u + \nabla u)+ B$<sub>k+2,d</sub>$(u+2\nabla u)$
donde $ \nabla u $ es la distancia entre valores de nudo adyacentes

Ejemplo:

$n=d=3$
 y $\begin{Bmatrix} 0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6 \cr \end{Bmatrix} $
 se tienen las stes.: funciones de combinación

V:


## CURVAS Y SUPERFICIES DE B-SPLINE


<img height="600" src="fig/curSupB-Spl2.jpg">

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####Cúbicas y Periódicas

Para $d=4$ y $n=3$ se tiene el siguiente vector de nudo:
$\begin{Bmatrix} 0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6, \ 7 \cr \end{Bmatrix}$
 y podemos calcular las funciones de combinación.

Tambien, se pueden especificar mediante condiciones de frontera:
<font size=5>
<table>
<tr>
	<td>
$P(u)=\begin{bmatrix} u^{3} & u^{2} & u & 1\end{bmatrix} \bullet \begin{bmatrix} a & b & c & d\end{bmatrix}^{T}$
$P(u)=\begin{bmatrix} 3 u^{2} & 2u & 1 & 0\end{bmatrix} \bullet \begin{bmatrix} a & b & c & d\end{bmatrix}^{T}$
$0 \le u \le 1$
	</td>
	<td>
$P(0)=1/6 (P_0 + 4 P_1 +P_2)$
$P(1)=1/6 (P_1 + 4 P_2 +P_3)$
$P'(0)=1/2 (P_2-P_0)$
$P'(0)=1/2 (P_3-P_1)$
	</td>
</tr>
</table>
</font>

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####Cúbicas y Periódicas


$P(u)=\begin{bmatrix}
 u^{3} \ u^{2} \ u \ 1 \end{bmatrix} \bullet M_B \bullet \begin{bmatrix}p_0 \cr
 p_1 \cr
 p_2 \cr p_3 \cr
 \end{bmatrix}
$

$M_B=1/6 \begin{bmatrix}-1 & 3 & -3 & 1 \cr3 & -6 & 3 & 0 \cr
3 & 0 & 3 & 0 \cr
 1 & 4 & 1 & 0 \cr\end{bmatrix}
$

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####Cúbicas y Periódicas


$B$<sub>0,3</sub>$(u)=1/6(1-U)^{3}$

$B$<sub>1,3</sub>$(u)=1/6(3U^{3}- 6 U^{2} + 4)$

$B$<sub>2,3</sub>$(u)=1/6(-3U^{3} + 3 U^{2} + 3 U +1)$

$B$<sub>3,3</sub>$(u)=1/6 U^{3}$

$0 \le u \le 1$

V:


## CURVAS Y SUPERFICIES DE B-SPLINE

####Uniformes y Abiertas / Definición, Propiedades y Ejemplo

Definición:


El espaciado entre los valores de nudo es uniforme, excepto en los extremos,donde los valores de nudo se repiten $d$ veces.

Propiedades:

1. Cálculo del vector de nudo $u_j$: 
    * $0$ , para $0 \leq j \leq d$
    * $j-d+1$ para $d \leq j \leq n$
    * $n-d+2$ para 
$j>n$

V:


## CURVAS Y SUPERFICIES DE B-SPLINE

####Uniformes y Abiertas / Definición, Propiedades y Ejemplo / 2

1. Si $d=n+1$, tenemos las splines de BEZIER.Todos los val. de nudo son 0 o 1.


Ejemplos:

1. 
$d=2$ y $n=3$,$\begin{Bmatrix} 0, \ 0, \ 1, \ 2, \ 3, \ 3 \cr \end{Bmatrix}$

2. $d=4$ y $n=3$
,$\begin{Bmatrix} 0, \ 0, \ 0, \ 0, \ 1, \ 1, \ 1, \ 1  \end{Bmatrix}$, BEZIER.

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####No Uniformes/Definición, Propiedades y Ejemplo


Definición:

El espaciado entre los valores de nudo no es uniforme y algunos valores se pueden repetir

Propiedades:


Proporcionan mayor flexibilidad

Ejemplos:

1.$\begin{Bmatrix} 0, \ 0, \ 1, \ 2, \ 3, \ 8, \ 8.5 \cr \end{Bmatrix} $

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####No Uniformes Racionales Cúbicas/Definición, Propiedades

$x(u)=X(u)/W(u)$,
$y(u)=Y(u)/W(u)$,
$z(u)=Z(u)/W(u)$

Donde 
	$X(u),Y(u),Z(u)$ son curvas polinómicas cuyos puntos de control
 se encuentran definidos en coordenadas homogéneas


se puede pensar enb la curva como definida en el espacio homogéneo, como: $P(u)=[X(u) \ Y(u) \ Z(u) \ W(u)],$ como de costumbre, pasar del espacio homogéneo a 3D equivale dividir por $W(u)$.

Cualquier curva no racional puede ser transformada en una racional al agregarle $W(u)=1$

V:


## CURVAS Y SUPERFICIES DE B-SPLINE
####No Uniformes Racionales Cúbicas/Definición, Propiedades


Los polinomios en la curva racional pueden ser Hermite, Bezier o de cualquier tipo. Cuando son B-Spline se tiene NURBS.

Estas curvas son invariantes incluso respecto de transformaciones de perspectiva




V:## CURVAS Y SUPERFICIES DE B-SPLINE


####Conversión entre representaciones de Spline


<table>
<tr>
	<td>
Curva 1
\\[G_1\\]
\\[M_1\\]
	</td>
	<td>
\\[ \rightarrow \\]
	</td>
	<td>
\\[ U \bullet G_1 \bullet M_1 = U \bullet G_2 \bullet M_2\\]
\\[ G_1 \bullet M_1 = U \bullet G_2\\]
\\[ G_2 = M^{-1}_2 \bullet M_1\\]
	</td>
	<td>
\\[ \leftarrow \\]
	</td>
	<td>
Curva 2
\\[G_12=?\\]
\\[M_2\\]
	</td>
</tr>
</table>
Nota: Para convertir una curva de B-Spline (ya que esta no posee matríz basica explícita), se debe primero convertir a Bezier.

V:


## CURVAS Y SUPERFICIES DE B-SPLINE


####Superficies de B-Spline

$x(s,u)=S \bullet M$<sub>BS</sub>$ \bullet G'$<sub>BS<sub>x</sub></sub>$ \bullet M^{T}$<sub>BS</sub>$ U^{T}$

$y(s,u)=S \bullet M$<sub>BS</sub>$ \bullet G'$<sub>BS<sub>y</sub></sub>$ \bullet M^{T}$<sub>BS</sub>$ U^{T}$

$z(s,u)=S \bullet M$<sub>BS</sub>$ \bullet G'$<sub>BS<sub>z</sub></sub>$ \bullet M^{T}$<sub>BS</sub>$ U^{T}$
