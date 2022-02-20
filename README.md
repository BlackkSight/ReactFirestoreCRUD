# ReactFirestoreCRUD
Front end amb React JS per aprofitar l'API en NodeJS

# Guia d'instal·lació

Descarregar el codi

```
git clone https://github.com/BlackkSight/ReactFirestoreCRUD.git
```

Entrar a la carpeta del projecte i instal·lar les dependencies

```
npm install
```
Exportar la variable on React farà les peticions

```
export REACT_APP_API=http://localhost:8080/
```

Executar el servidor

```
npm run developer
```
# Guia de desplegament a GCP

Compilar el codi per fer ús a produció

```
npm run build
```

Executar la següent comanda per pujar el codi a GCP

```
gcloud app run
```
