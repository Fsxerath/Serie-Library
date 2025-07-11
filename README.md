## Serie Library

Este proyecto esta dividido en dos repositorios, el [Frontend](https://github.com/Fredy-Angarita/front-serie-library) y el Backend.

Serie Library es un proyecto personal el cual realice principalmente para solucionar uno de los problemas más recurrentes que suelen tener las personas que disfrutan del contenido audiovisual como las series y obras literarias como novelas, el cual radica en que mientras que esperan nuevo contenido de sus historias favoritas olvidan acontecimientos importantes de las mismas. Por ello, cree una aplicación que permite a los usuarios guardar sus series y resúmenes, que le faciliten recordar posteriormente detalles importantes de la trama

Este proyecto fue realizado con 
* [Nest](https://github.com/nestjs/nest)
* [Docker](https://www.docker.com/).
* [PostgreSQL](https://www.postgresql.org/).
* [Puppeteer](https://pptr.dev/)

## Requisitos
Tener instalado:
* Node
* Docker

## Instalación

Estando en la raíz del proyecto se debe ejecutar el siguiente comando: 
```bash
$ npm install
```

## Configuración

Una vez realizada la instalación de dependencias, tendrán que crear un archivo llamado `.env` en la raíz del proyecto, copiando el contenido del archivo 
[.example.env](https://github.com/Fredy-Angarita/Serie-Library/blob/main/.example.env) en el y luego rellenar los campos con la información del archivo 
[docker-compose.yml](https://github.com/Fredy-Angarita/Serie-Library/blob/main/docker-compose.yml).

Para la clave `SECRET` puede usar cualquier cadena de caracteres. ejemplo `SECRET=soyelsecret`

## Ejecutar

Estando en la raíz del proyecto deberán ejecutar: 

```bash
# Iniciar contenedor docker
$ docker compose up
```

```bash
# Iniciar servidor de Nest
$ npm run start
```

## Documentación

Para acceder a la documentación deberán navegar a `http://localhost:3000/api`.

## License

Nest is [MIT licensed](LICENSE).
