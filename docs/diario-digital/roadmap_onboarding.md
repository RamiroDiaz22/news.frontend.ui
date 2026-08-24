# 🗺️ Roadmap de Onboarding: Paso a Paso

¡Hola! Si estás leyendo esto, acabas de unirte al proyecto **Diario Digital**. Para asegurar que tu aterrizaje sea suave, estructurado y sin frustraciones, hemos preparado este mapa de ruta. 

Sigue estos pasos estrictamente en orden. No pases al siguiente hasta haber completado el actual.

---

## 🏁 Paso 1: Configuración Inicial
1. Lee el archivo `README.md` en la raíz del proyecto. Te dará el contexto general, las herramientas que usamos y los comandos básicos.
2. Clona este repositorio en tu computadora.
3. Instala las dependencias ejecutando `pnpm install`.
4. Levanta el proyecto con `pnpm dev` y asegúrate de que no haya errores en tu consola.

## 🧠 Paso 2: Teoría Frontend (Sin escribir código)
1. Dirígete a `docs/diario-digital/onboarding_junior.md` y lee detenidamente las **Fases 1 y 2**.
2. Investiga y responde las preguntas planteadas. Si no sabes algo, búscalo en la documentación oficial (React.dev, MDN, Ant Design).
3. **¿Atascado?** Utiliza a nuestro **Mentor IA**. Pega el contenido de `docs/diario-digital/junior-mentor-prompt.md` en tu IA de preferencia y hazle preguntas. *Nota: El mentor está configurado para no darte las respuestas fáciles, sino para obligarte a pensar.*

## 🌿 Paso 3: Teoría de Git y Examen
1. Abre y lee el archivo `docs/diario-digital/git_workflow_y_examen.md`. Entiende bien cómo nombrar tus ramas y commits.
2. Al final de ese archivo hay un **Examen Teórico de 4 situaciones**. Resuélvelo.
3. Valida tus respuestas con tu Líder Técnico o preguntándole al Mentor IA si tus respuestas son correctas.

## 💻 Paso 4: Tu Primera Tarea (La Prueba Final)
¡Es hora de ensuciarse las manos usando el flujo real de trabajo!

1. Asegúrate de estar en la rama principal y actualizado: `git pull`.
2. Crea tu rama de trabajo siguiendo la convención aprendida: `git checkout -b feature/news-card`.
3. Abre tu terminal y ejecuta la suite de pruebas: `pnpm test`. Verás que fallan (color rojo). Tu objetivo es ponerlas en verde.
4. Abre el archivo `src/components/NewsCard/index.tsx`. Encontrarás un bloque de comentarios con las instrucciones exactas de qué componentes de Ant Design usar y cómo deben comportarse.
5. Escribe el código. Guarda el archivo y mira tu consola de pruebas. Itera hasta que el comando `pnpm test` pase todas las pruebas con éxito.

## 🚀 Paso 5: Guardar y Compartir (Fin del Onboarding)
Una vez que el test pase a verde, es momento de subir tu código.

1. Prepara tus cambios: `git add .`
2. Crea el commit aplicando la convención: `git commit -m "feat: implement news card component"`
3. Sube tu rama al servidor remoto: `git push origin feature/news-card` *(o el comando equivalente que te pida git)*.
4. Abre un **Pull Request (PR)** en el repositorio para que tu Líder Técnico (o el Agente Revisor) revise tu código.

🎉 **¡Felicidades!** Si lograste que te aprueben el Pull Request, has completado tu Onboarding exitosamente y estás totalmente capacitado para empezar a tomar tickets de desarrollo reales en Diario Digital.
