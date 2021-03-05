# clubbackend

### Instalación de Nodejs y npm

sudo apt install nodejs npm

### Inicialización del proyecto
Primeramente tendremos que crear un directorio con el comando `mkdir "Nombre proyecto"` y a continuación entramos dentro.
Para iniciarlo debemos hacer:

    npm init -y
    

### Archivo *package.json*
Este archivo contendrá todas las dependencias de nuestro proyecto.

### Archivo *server.js*
Este, será el que nos permitirá con nuestro código crear nuestro propio servidor web.

### Instalación de dependecias
Para poder conectar nuestro proyecto con la base de datos debemos instalar las siguientes dependencias:
`npm install express`  
`npm install nodemon -D`  
`npm install dotenv`  
`npm install mongoose`  

Así podremos conectarnos a la base de datos que se creará en **Atlas MongoDB**.

### Archivo .gitignore
Tendremos que crear este archivo para que git no tenga en cuenta el archivo **.env** y el directorio **node_modules**
