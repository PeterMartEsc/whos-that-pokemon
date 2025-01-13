# Who's that Pokemon

<img src="https://github.com/user-attachments/assets/b195e924-5cee-4d87-8eca-915615c2c817"/>

En este repositorio iremos realizando una aplicación de adivinar el pokemon, siguiendo una serie de pasos tutorizados por la profesora. El proceso de realización será documentado en este README.md y con capturas

La aplicación la realizaremos en Vue, con el template de TypeScript.

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


Continuando con el codigo, procedemos a lanzar el proyecto para comprobar que funciona correctamente:

```bash
    npm run
```
