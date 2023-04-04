# Next.js OpenJira App

Para correr localmente se necesita la base de datos
```
docker-componse up -d
```

* El -d, significa __detached__

* MongoDB URL Local: 
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archiv __.env.template__ a __.env__

## Llamar y llenar la base de datos con información de pruebas

Llamar a:
```
    http://localhost:3001/api/seed
```