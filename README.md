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

![home2](https://user-images.githubusercontent.com/70545509/181370018-c95574a9-4ab6-4804-8d5b-61d7d97b4375.png)

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


![transactions 2](https://user-images.githubusercontent.com/70545509/181370862-5b3f69f5-75bf-4905-809e-ffbe4fbdd6fd.png)
![editTransaction](https://user-images.githubusercontent.com/70545509/180583997-bdfc19f7-1707-4446-bff0-f9b2e076598d.png)
![deletedTransactions2](https://user-images.githubusercontent.com/70545509/181371012-02a874cc-dbb8-4e61-8208-d7ed9ddf2ff9.png)





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

![filtertransactions2](https://user-images.githubusercontent.com/70545509/181371048-e1f1cce0-c692-46ac-a4e3-1f6106b74347.png)

<h1>
Autenticación de usuarios
</h1>
<h2>
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la
aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema,
tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir
el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.

</h2>

![register](https://user-images.githubusercontent.com/70545509/181371704-0c14dd26-961d-4b64-81c0-a72747c8d7a3.png)
![login](https://user-images.githubusercontent.com/70545509/181371749-9715572c-ad5f-4c9f-aff9-cefb2a0cb310.png)

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


![home2responsive](https://user-images.githubusercontent.com/70545509/181372947-ae202658-7433-4314-89b4-5329812a8315.png)
![transactionsResponsive2](https://user-images.githubusercontent.com/70545509/181372970-d7c21b3b-be08-4a06-a705-3537370dc010.png)
![registerResponsive](https://user-images.githubusercontent.com/70545509/181371868-3b993cde-eb10-4e98-aa91-5f560701a046.png)



