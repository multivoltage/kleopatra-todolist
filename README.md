## Semplice todo list con alcune feature:
- Visualizzazione della lista dei todo
- Aggiunta di un nuovo todo (stato “pending”)
- Check di un todo come completato (stato “completed”)
- Uncheck dei todo completati (tornano quindi in stato “pending”)
- Ordinamento automatico dei todo: Prima i pending, in ordine di creazione dal più recente al più vecchio. Poi i completed



# Setup
Please check that **node version is >= 14** and to use **yarn 1.x** (this constraits are on package.json)

1- Install all deps with:
```shell
yarn
```
2 - Run server mode on http://localhost:3000/ with:
```shell
yarn run dev
```
3 - Produce a build under /dist folder with:
```shell
yarn run build
```
2 - Run web server (port 3000 or 3001) for production on /dist with:
```shell
yarn run preview 
```
