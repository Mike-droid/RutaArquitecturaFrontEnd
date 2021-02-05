# Curso de animaciones para la web

Una animación es dar la sensación de que hay movimiento.

Las animaciones son parte natural de las interfaces. Sirve para darle feedback al usuario. Ninguna acción es instantanea.

Las animaciones son una forma natural de enseñanza.

Las animaciones ayudan a mejorar el engagement.

## Animaciones CSS

### Aceleración y curva de bezier

- ease: por defecto
- ease-in: se suaviza al entrar o al inicio
- ease-out: se suaviza al salir o al finalizar
- ease-in-out: se suaviza al entrar y salir, básicamente se acelera solo la mitad de la animación
- steps(frames por segundo): como el lag en los juegos en linea (?), mientras más bajo será menos fluido

[Página para probar efectos de Cubic Bezier](https://cubic-bezier.com/)

### Optimizar render con will-change y developer tools

will-change es genial en transformaciones y opacity. Pero no tendrá el mismo rendimiento cambiando altos o anchos, estos siempre invocarán un re-render.

### Propiedades animables

[CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
