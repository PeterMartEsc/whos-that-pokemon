# Who's that Pokemon

<img src="https://github.com/user-attachments/assets/b195e924-5cee-4d87-8eca-915615c2c817"/>

En este repositorio iremos realizando una aplicación de adivinar el pokemon, siguiendo una serie de pasos tutorizados por la profesora. El proceso de realización será documentado en este README.md y con capturas

La aplicación la realizaremos en Vue, con el template de TypeScript. Usaremos Composition API y nuestra estructura de archivos va a estar basada en _screaming architecture_

### Índice

- [Reto 1 - Iniciando Proyecto Pokemon Game](#r1)

- [Reto 2 -]()

### Reto 1 - Iniciando Proyecto Pokemon Game <a name="r1"></a>

Empezaremos creando el proyecto con

```bash
    npm create vue@latest 
```

Y configuramos el proyecto como queremos:

<img src="./capturas/Reto-1/1.png">

> __Pregunta 1__: ¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier? Responde a esta pregunta en el README del repositorio del proyecto.

__Vue Router__: utilidad para crear `rutas` en __Vue__. Configuramos en un fichero las rutas deseadas y los componentes a los que están asociados.

__Pinia__: reduce la complejidad al trabajar con __Vue__ y el `Composition API` en aplicaciones ligeras. Entre otras cosas, trabaja con `stores` en vez de `modulos` y tiene mejor soporte para __TypeScript__.

__Vitest__: biblioteca para la realización de `test unitarios` de aplicaciones de __Vue__.

__ESLint__: plugin que nos permite verificar los `<template>`, `<script>` y el codigo de los `.js` de __Vue__. Este encuentra errores en la sintaxis, usos incorrectos de directivas y violaciones en la Guía de estilos  de __Vue__.

__Prettier__: ayuda a darle un formato uniforme al codigo. Lo hace mucho más legible bajo una serie de configuraciones definidas.


Continuando con el codigo, procedemos a iniciar el proyecto para comprobar que funciona correctamente:

```bash
    npm install
    npm run dev
```

<img src="./capturas/Reto-1/2.png">

Como hemos dicho nuestro Pokemon Game lo vamos a realizar siguiendo `Composition API` y además, nuestra estructura de archivos va a estar basada en `screaming architecture`.

> __Pregunta 2.1__: ¿Qué es Composition API y en qué se diferencia de Option API en VueJS?

__Composition API__:  es una forma mejorada para realizar las aplicaciones a partir de Vue 3. Está diseñado de forma que el proyecto tenga una alta escalabilidad, es decir, que se pueda mejorar y que sus componentes sean reutilizables.

<img src="./capturas/Reto-1/options-api-composition-api.png">

Imagen obtenida de la web de [Manz.Dev](https://lenguajejs.com/vuejs/componentes/composition-api/)

> __Pregunta 2.2__: ¿Qué es screaming architecture y qué ventajas tiene?

__Screaming architecture__: es un tipo de arquitectura cuyo objetivo es que la estructura principal del código base transmita de inmediato el propósito de la aplicación.

Por ejemplo:

```bash
/src
    /orders
        Order.cs
        OrderService.cs
        OrderRepository.cs
    /inventory
        InventoryItem.cs
        InventoryService.cs
        InventoryRepository.cs
```

A continuación borraremos y modificaremos todo lo que no necesitamos que nos ha creadfo de forma automática Vue:

- El contenido de App.vue. Deja la estructura básica de VueJS teniendo en cuenta que usaremos Composition API. Recuerda que vamos a utilizar TS en lugar de JS, ¿cómo se lo indicamos a Vue?

    <img src="./capturas/Reto-1/3.png">

    Se lo indicamos cambiando el contenido de `lang` de __js__ a __ts__.

- Añade un mensaje de Hola mundo en App.vue

    <img src="./capturas/Reto-1/4.png">

- En la carpeta de `assets`, borra los archivos `base.css` y `logo.svg`

- Cambia el nombre de `main.css` de la carpeta assets a `styles.css` y modifica la ruta en el archivo `main.ts` para que funcione correctamente nuestra hoja de estilo.

- Ejecuta el comando npm run dev y muestra el resultado.

    <img src="./capturas/Reto-1/5.png">

Finalmente, configuraremos el proyecto para usar el framework de CSS __TailwindCSS__:

