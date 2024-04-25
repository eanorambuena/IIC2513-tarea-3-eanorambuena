[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cb5SOAVY)
# Tarea 3 :construction:

* :pencil2: **Nombre:** Emmanuel Norambuena
* :pencil2: **Correo:** eanorambuena@uc.cl

## Código :symbols:

### :warning: Funcionalidades implementadas y no implementadas

Implimenté todas las funcionalidades requeridas en la tarea.

## Ejecución

```
# Escribe los comandos a ejecutar para correr tu tarea
```

## Postgres
```
# Indica los comandos de terminal necesarios para inicializar la base de datos acá
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
sudo -u postgres createdb db_development
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

```
1. Indica el usuario de la base de datos
2. Indica la contraseña del usuario de la base de datos
3. Indica el nombre de la base de datos
4. Indica el host de la base de datos
5. Indica el puerto en el que correrá la aplicación
```
## Sequelize

Deberas indicar los comandos de terminal necesarios para generar los modelos y las migraciones de la base de datos.

### User
```
```
### Entry
```
```

## Migraciones
```
```

### Seeds
```
```

## Bibliografia
```
# Coloca aquí la bibliografía
# Esto incluye el uso de IA, sitios web, etc.
```
