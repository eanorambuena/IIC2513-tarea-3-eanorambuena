[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cb5SOAVY)
# Tarea 3 :construction:

* :pencil2: **Nombre:** Emmanuel Norambuena
* :pencil2: **Correo:** eanorambuena@uc.cl

## Código :symbols:

### :warning: Funcionalidades implementadas y no implementadas

Implimenté todas las funcionalidades requeridas en la tarea.

## Ejecución

Para ejecutar el backend, se deben seguir los siguientes pasos:
```
cd backend
sudo service postgresql start
yarn dev
```

Para ejecutar el frontend, se deben seguir los siguientes pasos:
```
cd frontend
yarn dev
```

## Postgres

Antes de todo:
```bash
sudo service postgresql start
```
1. Como inicializar psql
```bash
sudo -u postgres psql
```
2. Como crear el usuario de postgres
```bash
sudo -u postgres createuser --superuser username
```
3. Como crear la base de datos
```bash
sudo -u postgres createdb db
```
4. Como crear la clave del usuario
```bash
sudo -u postgres psql
ALTER USER username WITH PASSWORD 'password';
```
5. Como conectarse a la base de datos
```bash
psql -U username -d db -h 127.0.0.1
# Ingresar la contraseña (password)
```

## Entorno

Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env`

1. Indica el usuario de la base de datos
`DB_USERNAME = username`
2. Indica la contraseña del usuario de la base de datos
`DB_PASSWORD = password`
3. Indica el nombre de la base de datos
`DB_NAME = db`
4. Indica el host de la base de datos
`DB_HOST = 127.0.0.1`
5. Indica el puerto en el que correrá la aplicación
`PORT = 3000`

## Sequelize

### Inicialización
```bash
yarn sequelize-cli db:create --config=src/config/config.js
```

### User
```bash
yarn sequelize-cli model:generate --name User --attributes username:string
```

### Entry
```bash
yarn sequelize-cli model:generate --name Entry --attributes id:integer,title:string,body:string,date:date,belongsTo:string
```

## Migraciones
```bash
yarn sequelize-cli db:migrate --config=src/config/config.js
```

### Seeds
```bash
yarn sequelize-cli seed:generate --name first-users
yarn sequelize-cli seed:generate --name first-entries
yarn sequelize-cli db:seed:all --config=src/config/config.js
```

## Bibliografia
```
# Coloca aquí la bibliografía
# Esto incluye el uso de IA, sitios web, etc.
Usé Github Copilot para autocompletar el código y documentación.
```
