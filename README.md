# API_Prueba_docker_compose
API básica de prueba para probar todo lo referido a docker, archivos Dockerfile, .dockerignore, y docker-compose.yml. Tecnologías: Nodejs, Express, JavaScript, MySQL

# Conceptos vistos de Docker
- Dockerfile: Como configurarlo, nociones básicas.
- .dockerignore: archivo para probar como utilizarlo, se usa para ignorar ciertos archivos a la hora de ejecutar docker.
- docker-compose.yml: configuraciones de servicios (contenedores), y demas informacion para poder dockerizar nuestra app. Estructura básica de un docker-compose, y como hacer para leer los valores de las variables de entorno.

# para correr en local (development):

- crear archivo .env
- Añadir variables de entorno como el ejemplo:

```ejemplo: 
MYSQLDB_HOST=mysqldb
MYSQLDB_ROOT_PASSWORD=123456
MYSQLDB_DATABASE=nombre_de_tu_bbdd

MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000
```

# Para ejecutar en shell:

```shell
docker compose up --build
```

# Para frenar en shell: 

ctrl + C, luego:

```shell
docker compose down
```