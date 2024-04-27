[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cb5SOAVY)
# Tarea 3 :construction:

* :pencil2: **Nombre:** Emmanuel Norambuena
* :pencil2: **Correo:** eanorambuena@uc.cl

## Código :symbols:

### :warning: Funcionalidades implementadas y no implementadas

Implimenté todas las funcionalidades requeridas en la tarea.

## Ejecución

Si ya está instalado todo, solo se deben iniciar los servidores.

### Iniciar servidores

Para ejecutar el backend, se deben seguir los siguientes pasos:
```bash
cd backend
sudo service postgresql start
yarn dev
```

Para ejecutar el frontend, se deben seguir los siguientes pasos:
```bash
cd frontend
yarn dev
```

### Instalación e inicialización

Primero se instala Postgresql y luego se ejecutan los siguientes comandos:
```bash
cd frontend
yarn
cd ../backend
yarn
```
Luego, se procede a la configuración de Postgresql, el archivo `.env` y Sequelize como se indica en los siguientes apartados en el directorio `backend/`

## Postgres

Antes de todo, cada vez que se abre la consola por primera vez para trabajar con Postgresql, se debe iniciar el servidor:
```bash
sudo service postgresql start
```
1. Cómo inicializar psql
```bash
sudo -u postgres psql
```
2. Cómo crear el usuario de postgres
```bash
sudo -u postgres createuser --superuser username
```
3. Cómo crear la base de datos
```bash
sudo -u postgres createdb db
```
4. Cómo crear la clave del usuario
```bash
sudo -u postgres psql
```
Luego, en la consola de psql, se escribe:
```sql
ALTER USER username WITH PASSWORD 'password';
\q
```
5. Cómo conectarse a la base de datos
```bash
psql -U username -d db -h 127.0.0.1
# Ingresar la contraseña (password)
```

## Entorno

Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env` en la raíz del directorio `backend/`, e ingresar los siguientes campos

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

Usé Github Copilot para autocompletar el código y documentación.
