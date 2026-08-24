# Frontend Draft: Diario Digital

## 1. Visión General
- **Nombre del Proyecto:** Diario Digital
- **URL Diseño en Paper:** [https://app.paper.design/file/01M0KJWSSMC45ZVM2DY3F73JFJ/1-0](https://app.paper.design/file/01M0KJWSSMC45ZVM2DY3F73JFJ/1-0)
- **Audiencia y Dispositivos:** Enfoque **Mobile-First** prioritario (los diseños adaptativos móviles se irán agregando/revisando antes y durante el desarrollo).
- **Accesibilidad (a11y):** Nos ceñiremos a las buenas prácticas y estándares de accesibilidad que ofrece por defecto Ant Design.

## 2. Flujos Principales (User Journeys)
1. **Home de Noticias:** Pantalla principal de la plataforma donde los usuarios pueden visualizar el feed o listado de noticias.
2. **Detalle de la Noticia:** Vista dedicada a la lectura completa de un artículo tras seleccionarlo desde el Home.
3. **Dashboard de Administradores:** Panel de gestión interno reservado para los administradores de la plataforma (para operaciones como creación y gestión de noticias).

## 3. Stack Tecnológico Definido

| Categoría          | Tecnología                                              |
| ------------------ | ------------------------------------------------------- |
| **Runtime**        | Node 24+ (LTS)                                          |
| **Package Manager**| pnpm                                                    |
| **Framework**      | React + Vite                                            |
| **Lenguaje**       | TypeScript                                              |
| **UI Library**     | Ant Design                                              |
| **Íconos**         | Lucide (exclusivamente para mantener consistencia y bajo peso) |
| **Formularios**    | Ant Design Form                                         |
| **Ruteo**          | React Router                                            |
| **Data Fetching**  | Axios + TanStack Query (React Query) para _server state_|
| **State Management**| Zustand (para _client state_ global)                    |
| **Date Handling**  | Day.js                                                  |
| **Testing**        | Vitest (lógica de negocio), Storybook (documentación UI)|

## 4. Convenciones de Código (Coding Conventions)
- **Variables y funciones:** `camelCase`
- **Componentes:** `PascalCase`
- **Constantes globales y enums:** `UPPER_CASE`
- **Sufijo de Enums:** Todos los enums deben terminar con el sufijo `_ENUM` (ej. `STATUS_ENUM`).
- **Idioma:** Todo el código, comentarios y nombres de variables deben escribirse en **Inglés**.
- **Tipado:** Tipado estático explícito requerido; **el uso de `any` está estrictamente prohibido**.

## 5. Calidad de Código (Code Quality)
- **Formateador:** Prettier
- **Linter:** ESLint usando la configuración [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## 6. Estructura del Proyecto (Basada en Capas / Pragmática)

La estructura elegida (Feature/Layered Architecture) separa de manera excelente las responsabilidades dentro del ecosistema React:

```text
src/
├── components/    # Componentes UI reutilizables
├── pages/         # Componentes a nivel de ruta (Vistas principales)
├── stores/        # Stores de estado de Zustand
├── services/      # Capa de servicios para API (Axios + TanStack Query)
├── types/         # Definiciones de tipos e interfaces de TypeScript
├── hooks/         # Custom hooks de React
├── utils/         # Funciones de utilidad y helpers
├── assets/        # Archivos estáticos (imágenes, fuentes, etc.)
├── layouts/       # Componentes de diseño estructural (Headers, Footers, Sidebar)
├── routes/        # Configuración de enrutamiento
└── constants/     # Constantes globales y Enums
```
