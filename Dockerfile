#En este Dockerfile especificamos todo.

#Con FROM le decimos que contenedor va a usar, y su version, en estecaso Node 18.
FROM node:18 

#Con WORKDIR le decimos a donde tiene que crear una carpeta dentro del contenedor
WORKDIR /myapp
#le decimos que copie el archivo 'package.json' en la carpeta mencionada
COPY package.json /myapp
#Con este le pedimos que installe dependencias con 'npm install'
RUN npm install

#con esto le decimos que copie todas las carpetas en el contenedor
COPY . .
#una vez que tiene todo, corremos el contenedor con 'npm start'
CMD npm start