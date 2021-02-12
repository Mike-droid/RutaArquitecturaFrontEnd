# Curso de Sistemas de Diseño para Desarrolladores

## Introducción

### Conoce Sisetmas de Diseño populares

- airbnb
  - git: funciona muy bien para código pero no para sistemas de diseño
  - Sketch: este permite versionamiento
  - Abstract
- Facebook
  - Archivo instalable
    - Origami
    - Un plugin de sketch que tiene la documentación de todo
    - Te coloca un menú en MacOS para facilitarte el trabajo

Todos los sistemas de diseño tratan de solucionar el *flujo del equipo*.

Tenemos mucha domentación y un sistema de versionamiento. Así sabemos qué está pasando y los equipos pueden trabajar más rápido.

**Documentar** es necesario para cada cosa. Súper importante.

Define qué es necesario y qué no. Los sistemas de diseño se pueden ajustar al proyecto de cualquier tamaño.

La finalidad es que construyamos todo el diseño en software y que al usuario le dé una gran experiencia.

Express usa por defecto el puerto 3000.

## Automatización

### Automatización (preprocesadores)

Podemos usar la automatización de las computadoras para mejorar mucho el flujo de trabajo.

Gulp: if this => do this

*Fundations* es todo lo básico de nuestro sistema. Vamor a crear *tokens* que servirán para modificar átomos, moléculas, organismos, páginas y templates.

## Paradigmas

### SMACSS: Arquitectura de CSS escalable y modular

Scalable and Modular Architecture for CSS. ¿En qué se basa este paradigma?

- base: toma las etiquetas primordiales de html
- layout: las etiquetas que segmentan la página
- module: es más específico e interioriza en el layout
- state: muestra el estado de un elemento
- theme: aquí creamos archivos específicos por tema

Recuerda que tú vas a definir las reglas que mejor se adapten a tu producto y que hagan que mejore el flujo de trabajo.

### OCSS: Orientación de objetos en CSS

Los paradigmas son un ente configurable. Lo importante es que tengas muy bien definido qué cosas vas a usar en tu sistema. Tenemos que evitar que se tomen decisiones arbitrarias.

OCSSS viene del paradigma de la programación orientada a objetos. Este paradigma es de lo más sencillos y sirve con páginas estáticas. SMACSS sirve mucho mejor para proyectos más complejos.

*Recomendación:* No te quedes con solo un paradigma, puedes usar varios.

### BEM

3 elementos básicos:

- block: se puede tomar como elementos ya completos
- elements: pequeños elementos, átomos, moléculas
- modifiers: elementos que modifican el estado del componente

Tienes que entender porqué usas lo que usas.

### Bootstrap

Recuerda documentar todo. Incluido si usas frameworks.

## Naming

Naming genera una regla de cómo definir nuevas clases. Debes tener muy en claro cuál será la regla que utilizarás para evitar confusiones y pérdida de tiempo.

BEM va de lo general a lo particular: .house , .house_window

**Recomendación:** NUNCA utilices nombres en español. Puedes meter la "ñ" y esto no es reconocido por SCSS.

## Tokens

### ¿Qué son los tokens?

Es el corazón de tu sistema. Son variables configurables. Un elemento que puede cambiar.

Ejemplos de tokens:

- Colores; primarios, secundarios, terciarios, otros.
- Tipografía: Tipo de letra, tamaño.
- Espaciado: Genera una lógica. Unidades; es decir, una cantidad de pixeles o EM o REM.
- Brakepoints: Dónde se va a volver responsive.

## Espaciado

Es algo a lo que normalmente no se le presta atención pero es muy importante en cualquier sistema de diseño.

Espaciado afecta a **TODO.**

## Grillas

### Grid

Grid es un sistema aplicado. Uno de los sistemas más comunes es el de 12 columnas como el de bootstrap. Todo lo metemos en un wrapper para que las columnaws no se salgan. Podemos generar tokens para todo esto.

## Documentación

Recordemos que un sistema está hecho hacia la empresa, hacia los equipos. Hay que ser consistente con lo que le queremos comunicar el usuario.

Todo debe tener un título, descripción e implementeación. También debes tomar en cuenta y documentar los estados de los elementos.

Cada documentación debería tener una bitácora donde se vean qué cambios se hacen y qué logs se generan.

Tómate tu tiempo, sean 2 días para definir el sistema y después ahorrarás muchos días de trabajo.

La manera en que construyas tu sistema es igual a las capacidades que tendrá tu producto.

*Recomendación:* pon una leyenda donde pueden consultar a la persona que hizo el sistema de diseño.

## Testing

Debes hacer pruebas de:

- Comportamiento; esto es algo que se llega a partir de la transición del diseño a la programación.
- Mobile version: Mobile first siempre es el camino que debería tomar un diseñador al crear una pantalla.
- Bitácora: Nos dice porqué tomamos ciertas decisiones y porqué no.
- Redifinir: ¿Lo que estamos haciendo tiene sentido? ¿Le está sirviendo al usuario?

El tramo del trabajo de un design system puede ser largo pero hará que se tenga una efectividad del 100% y más.

## Deploy y versionamiento

Tenemos que pasar de test a producción.

Un lugar donde podemos subir nuestros proyectos para hacer deploy es [Heroku](https://heroku.com)

## Design review

Los procesos deben de estar definidos, si no están definidos caes en un caos y desastre.

Tú puedes hacer tus propios procesos.

Mide el nivel de éxito del design system semanalmente. Comprueba que lo que hiciste funciona.

Lo importante es analizar qué estás haciendo y por qué lo estás haciendo.

*Deuda* : Cuando alguien como el CEO, el Marketing, etc te pide que hagas cambios grandes y rápidos. Sucede entonces que no puedes hacer toda la documentación requerida y va a llevar problemas a todas las partes del equipo. Por cada cambio que hagas rápido vas a tener 10 problemas más 👎🏻. Por eso tienes que ser muy estricto y muy duro en seguir el proceso.

El objetivo es la construcción.
