# Curso de Tailwind CSS

## Introducción, instalación y ambiente de desarrollo

Librería que tiene un enfoque de Utility first, mobile first.

Tailwind no tiene componentes, tienes que crear todo.

### Directivas de Tailwind

La directiva es una instrucción que utiliza Tailwind para insertar código en el archivo final de CSS que genera.

```css
@tailwind base;
/*Nos ayuda a inicilizar los elementos de nuestro HTML*/

@tailwind utilities;
/*Genera el código de utilerias*/
```

## Conceptos básicos

### Personalización y configuración

En el archivo tailwind.config.js podemos establecer valores por defecto para los estilos.

### Responsive Design, Mobile First y Utility First

Los breakpoints que usa Tailwind CSS son:

- default: mayor a 0px
- sm: mayor a 640px
- md: mayor a 768px
- lg: mayor a 1024px
- xl: mayor a 1280px

## Utilerías

### Colores

Elementos a los que se les puede cambiar color:

- Fondo
- Texto
- Bordes
- Placeholder

### Dimensionaes y Espacios

Sistema configurable de espacios y tamaños

Propiedades: Estas propiedades pueden controlar las dimensiones o espacios.

- Height
- Width
- Margin
- Padding

### Cambiando las propiedades de la tipografía

Podemos configurar tamaño, cursiva y negrita.

### Ajustando el espaciado entre letras y líneas

- **Tracking**: espaciamiento entre letras
- **Leading**: espaciamiento entre líneas

### Display

Caja de presentación: Estas propiedades pueden controlar las dimensiones o espacios.

- Block -> Abarcan toda la pantalla
- Inline-block -> Ocupan el espacio necesario para mostrar lo que hay en su interior
- Inline -> Similar pero no nos preocupamos por la altura
- Hidden -> Lo oculta
- Flex -> Good old flex

### Flexbox

Propiedades de flex:

- Flex direction
- Align Items
- Justify Content
- Order

### Crea tus propias utilerías

Puedes usar variants para crear tus propios estilos.

### Entendiendo las variantes y las pseudo-clases

Variantes son las instrucciones que utilizamos para lograr que nuestro diseño cambie dependiendo ciertas circunstancias.

Ejemplos:

- Responsive
- Hover
- Focus
- Disabled

Una Pseudoclase es una palabra clave que se añade a la clase.

Ejemplos:

- Responsive: sm, md, lg, xl
- Hover: hover
- Focus: focus
- Disabled: disabled

## Proyecto: PlatziFood

### Aplicando formato a la card

El negro es muy fuerte para la vista cuando se está leyendo.

### Construye el header

En caso de SVG es necesario espeficiar el tamaño.

### Optimiza tu archivo: PurgeCSS y NanoCSS

- PurgeCSS : Sirve en Tailwind para quitar el código CSS que no estemos usando.
- NanoCSS: Minifica el código CSS para que pese lo menos posible.
