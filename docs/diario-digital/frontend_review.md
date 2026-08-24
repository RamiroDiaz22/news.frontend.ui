# Frontend Review: Diario Digital

Como **Revisor Frontend (Red Team)**, he analizado la propuesta de la arquitectura (`frontend_architecture.md`) y los requerimientos base (`frontend_draft.md`). A continuación, expongo las vulnerabilidades encontradas a nivel de experiencia de usuario (UX), rendimiento y accesibilidad, junto con las soluciones propuestas.

## 1. Casos Borde de UI (UI Edge Cases)
- **Títulos y Textos Largos:** Si el título de una noticia es excepcionalmente largo, romperá la estructura de la `NewsCard`.
  - **Solución:** Implementar truncamiento de texto usando CSS (ej. `line-clamp: 3` y `text-overflow: ellipsis`) en las tarjetas y prever un `tooltip` para ver el título completo al hacer hover si es necesario.
- **Responsividad Crítica (Mobile-First):** 
  - El layout "Split Screen" del Login (`AuthLayout`) no funcionará bien en móviles. 
    - **Solución:** En vistas móviles (menores a 768px), la imagen/bloque lateral debe ocultarse o pasar al fondo, dejando solo el formulario (`LoginForm`) a pantalla completa.
  - El Sidebar del Admin (`AdminLayout`) de 280px ocupará toda la pantalla en móviles.
    - **Solución:** En resoluciones pequeñas, el Sidebar debe convertirse en un *Drawer* colapsable que se abra con un botón tipo hamburguesa en el `AdminTopbar`.

## 2. Estados de Red (Network States)
La arquitectura menciona TanStack Query (lo cual es excelente para gestionar peticiones), pero falta definir el comportamiento visual de la UI ante los distintos estados de estas promesas:
- **Loading:** Evitar que la página salte.
  - **Solución:** Utilizar el componente `Skeleton` de Ant Design durante el primer render (fetching), y un `Spin` en acciones secundarias (mutaciones).
- **Empty State (Sin datos):** Si la base de datos no tiene noticias.
  - **Solución:** Mostrar el componente `Empty` de AntD con un mensaje claro (ej. "No hay noticias disponibles en este momento") y un botón para reintentar.
- **Error State:** Si la API falla (Timeout, 500, etc.).
  - **Solución:** Implementar el componente `Result` de AntD (status 500) a nivel de página, o notificaciones emergentes (`App.useApp().notification` de AntD) para errores específicos.

## 3. Accesibilidad (a11y)
Aunque Ant Design aporta mucho *out-of-the-box*, hay detalles de implementación obligatorios:
- **Semántica HTML:** La estructura debe usar `<header>`, `<footer>`, `<main>` para los contenidos principales y `<nav>` para el `AdminSidebar`. Esto es vital para SEO y lectores de pantalla.
- **Iconos sin Texto:** Si usamos íconos de *Lucide* para acciones (ej. botón de borrar noticia o colapsar menú), **deben** llevar el atributo `aria-label`.
- **Navegación por teclado:** Asegurar que todos los formularios interactivos (incluyendo los Modales de CRUD) atrapen el foco correctamente (*Focus Trap*) y puedan cerrarse con la tecla `Escape`.

## 4. Rendimiento (Performance)
- **Carga inicial de la Aplicación:** Si todo el código (Público + Admin + Librerías de gráficos si las hay) se empaqueta junto, el Home cargará muy lento.
  - **Solución:** Implementar **Code Splitting / Lazy Loading** a nivel de rutas (`React.lazy` + `Suspense` o el loader de `react-router-dom`). Las rutas de `/admin` deben empaquetarse en un chunk separado (bundle) para no penalizar el FCP (First Contentful Paint) de los usuarios públicos.
- **Optimización de Imágenes:** Las tarjetas de noticias (`NewsCard`) tendrán imágenes pesadas.
  - **Solución:** Configurar las etiquetas `<img>` con `loading="lazy"` y prever una imagen por defecto (*fallback*) en caso de que la URL retorne un 404.
- **Listas Largas:** Si el Home muestra muchas noticias, el DOM puede sobrecargarse.
  - **Solución:** Implementar Paginación clásica o Scroll Infinito usando `useInfiniteQuery` de TanStack Query junto con observadores de intersección.

## Conclusión
La arquitectura propuesta es muy sólida, pero incorporar estas capas defensivas garantizará que la aplicación no solo funcione en condiciones ideales (Happy Path), sino que ofrezca una experiencia premium en conexiones lentas, con datos atípicos o en pantallas pequeñas.
