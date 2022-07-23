# alkemy-challenge-fullstackjs
<h1> Objetivo </h1>

<h2>
Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear eliminar y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.
</h2>


<h1>
Requerimientos Técnicos
</h1>
<h2>
Deberás desarrollar una API en Node.js junto a cualquiera de los siguientes frameworks,
en sus versiones estables:
● Express
● Adonis
● Koa
En el caso de querer utilizar otro framework es posible, pero debe consultarse con
anterioridad.
Los datos mostrados deben ser persistidos en una base de datos relacional. El esquema de
datos puede armarse según se considere apropiado en base a los requerimientos del
negocio. La API deberá exponer URLS que devuelvan datos en JSON.
Estos datos en JSON deberán ser consumidos por un cliente, a través de peticiones AJAX.
El cliente puede ser armado con React.js.
El trabajo realizado se subirá a un repositorio.
</h2>


<h1>
Home
</h1>
<h2>
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los
ingresos y egresos de dinero cargados, y un listado de los últimos 10 registrados.
</h2>

![home1](https://user-images.githubusercontent.com/70545509/180583375-de02225a-1b71-4c93-b166-8b5c14385407.png)

<h1>
ABM de operaciones (ingresos y egresos)
</h1>
<h2>
La aplicación deberá contener:
● Formulario de registro de operación. El mismo deberá contener:
● Concepto
● Monto
● Fecha
● Tipo (ingreso o egreso)
● Listado de operaciones registradas según su tipo (ingreso o egreso).
● Desde el listado, se debe poder modificar o eliminar una operación registrada
previamente. No debe ser posible modificar el tipo de operación (ingreso o
egreso) una vez creada.
</h2>

![transactions 1](https://user-images.githubusercontent.com/70545509/180583378-e61a2288-dc27-45bb-a43c-a9efb5984206.png)
![editTransaction](https://user-images.githubusercontent.com/70545509/180583997-bdfc19f7-1707-4446-bff0-f9b2e076598d.png)
![filterTransactions](https://user-images.githubusercontent.com/70545509/180584133-8eccbce4-b144-44bb-b9f5-9357f9bf62b6.png)
![deletedTransactions](https://user-images.githubusercontent.com/70545509/180584601-50b26f87-893a-4cec-a25e-ad34dd076956.png)




<h1>
Bonus
</h1>
<h1>
Categorías de operaciones
</h1>
<h2>
Agregar la funcionalidad de categorizar las operaciones registradas en el gestor, como por
ejemplo, una categoría “comida” para categorizar egresos. Adicionalmente, agregar la
posibilidad de listar operaciones por categoría.
</h2>
<h1>
Autenticación de usuarios
</h1>
<h2>
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la
aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema,
tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir
el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.
</h2>
<h1>
Criterios a Evaluar
</h1>

<h2>
● El diseño debe ser responsive, pudiendo utilizarse CSS puro o algún framework
de Frontend
● Código limpio, buenas prácticas de programación, en idioma inglés
● Correcto diseño de la base de datos
● Buenas prácticas de GIT: Commits declarativos y atomizados
● Buenas prácticas para el nombre de rutas
</h2>




![homeResponsive](https://user-images.githubusercontent.com/70545509/180584297-61c9ee41-da77-40c7-a19e-d42e6402b473.png)![transactionsResponsive](https://user-images.githubusercontent.com/70545509/180584298-89c6f867-ca2a-483e-8417-cd8ac946e641.png)



