Nombre del Proyecto: Netflix
Descripción corta del proyecto.

Tecnologías Utilizadas
Frontend: Este proyecto utiliza React.js para el desarrollo del frontend. Puedes encontrar el código del frontend en el directorio frontend/.

Backend: MongoDB se utiliza como base de datos para almacenar y recuperar datos. Firebase se utiliza para la autenticación y el almacenamiento de archivos. El código del backend se encuentra en el directorio backend/.

Gestión de Dependencias: Este proyecto utiliza Yarn como gestor de dependencias. Asegúrate de tener Yarn instalado para instalar las dependencias del proyecto.

Configuración del Entorno
Antes de ejecutar la aplicación, asegúrate de configurar correctamente el entorno. Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno:

makefile
Copy code
REACT_APP_FIREBASE_API_KEY=TuClaveDeAPIFirebase
REACT_APP_FIREBASE_AUTH_DOMAIN=TuDominio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=TuIDDeProyectoFirebase
REACT_APP_FIREBASE_STORAGE_BUCKET=TuBucketDeFirebase
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=TuIDDeEnvíoDeMensajesFirebase
REACT_APP_FIREBASE_APP_ID=TuIDDeAppFirebase
MONGODB_URI=TuURLDeConexionAMongoDB
Instalación
Clona el repositorio: git clone https://github.com/dianatorresrios/Netflix
Navega a la carpeta del frontend: cd frontend
Instala las dependencias usando Yarn: yarn install
Navega a la carpeta del backend: cd ../backend
Instala las dependencias usando Yarn: yarn install
Ejecución
Inicia el servidor de frontend: cd frontend && yarn start
Inicia el servidor de backend: cd ../backend && yarn start
La aplicación estará disponible en http://localhost:27017.

