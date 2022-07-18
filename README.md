El proyecto es una tienda online que despliega productos agrupados por la categoría a la que pertenecen y tiene un buscador de productos,  contruido por separados backend (API REST) y frontend (aplicación que la consuma) y utilizando la base de datos que se disponibiliza para el desarrollo del proyecto.

FRONEND
La aplicación Frontend esta creada con HTML5, CSS, normalizeCss, Boostrap, fontawesome, y javascript vanilla.

Para realizar las peticiones a la API, se hacen mediante fetch. 

La pagina inicial muestra el listado de productos de la tienda , un buscador para filtrar por palabras y una lista para seleccionar por categoria.

BACKEND
-EL Desarrollo del servidor se realiza con entorno de ejecucion Node.Js, utilizando sus modulos:
-express
-mysql
-cors
-nodemon
-path
los que han sido instalados atraves de su paquete npm,
a través de su linea de comando npm install seguido de "nombre modulo".

Express: Módulo que permite agregar características exclusivas para la creación y modelado de un servidor API.

Mysql: Módulo que permite crear la conexión y comunicación hacia bases de datos tipo MySql.

Cors: Uso compartido de recursos de origen cruzado.

Nodemon: Es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos del directorio.

Path: nos permite poder manejar las rutas tanto relativas como absolutas de nuestra PC y de nuestro proyecto.

Se unen ambas tablas que se entregan para el projecto y se crea un endpoint para hacer las consultas:

GET:/categorias: traera todos los productos de la base de datos que se utilizaran
