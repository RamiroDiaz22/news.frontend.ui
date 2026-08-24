# 📰 Diario Digital - Frontend

Este es el repositorio del frontend para **Diario Digital**, una plataforma web para la visualización y gestión de noticias. El proyecto está construido bajo un enfoque **Mobile-First** utilizando una arquitectura escalable por capas y herramientas modernas del ecosistema React.

## 🚀 Tecnologías Principales

- **React 19** + **TypeScript**
- **Vite** (Bundler y Dev Server ultrarrápido)
- **React Router 7** (Enrutamiento con soporte para Lazy Loading)
- **Zustand** (Gestor de estado global / Client State)
- **TanStack Query (React Query)** (Manejo de Server State y Data Fetching)
- **Ant Design (antd)** (Librería de Componentes y Formularios)
- **Lucide React** (Iconografía limpia y ligera)
- **Axios** (Cliente HTTP con interceptores)
- **Day.js** (Manipulación de fechas)

## 📁 Estructura del Proyecto

El proyecto sigue una estructura modular orientada a funcionalidades y reusabilidad:

```text
src/
├── assets/        # Imágenes, fuentes estáticas y multimedia
├── components/    # Componentes UI reutilizables (Botones, Tarjetas, Modales)
├── constants/     # Variables globales, configuraciones y Enums (sufijo _ENUM)
├── hooks/         # Custom Hooks de React (ej. consumo de API)
├── layouts/       # Componentes estructurales envolventes (PublicLayout, AdminLayout)
├── pages/         # Vistas de nivel de ruta (Home, Login, Dashboard)
├── routes/        # Definición del router centralizado
├── services/      # Lógica de conexión a APIs y configuración de Axios
├── stores/        # Stores de estado global (Zustand)
├── types/         # Interfaces y tipos globales de TypeScript
└── utils/         # Helpers y funciones matemáticas/formateo
```

## 🛠️ Requisitos Previos

- **Node.js**: v24+ (LTS recomendado)
- **Gestor de paquetes**: [pnpm](https://pnpm.io/) (v11+)

## 💻 Instalación y Uso

1. **Instalar las dependencias:**
   ```bash
   pnpm install
   ```

2. **Levantar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   La aplicación estará disponible por defecto en `http://localhost:5173`.

3. **Construir para producción (Build):**
   ```bash
   pnpm build
   ```

4. **Verificar la calidad del código (Linter y Tipos):**
   ```bash
   pnpm lint
   pnpm tsc --noEmit
   ```

## 📜 Reglas y Convenciones de Código

- **Idioma:** Todo el código fuente (variables, funciones, componentes) y comentarios deben estar estrictamente en **Inglés**.
- **Tipado:** Tipado estático obligatorio. El uso de `any` está prohibido y bloqueado por el linter.
- **Calidad:** El proyecto utiliza **ESLint** (con el preset `@antfu/eslint-config`) y **Prettier**.
- **Nomenclatura:**
  - Variables y Funciones: `camelCase`
  - Componentes y Layouts: `PascalCase`
  - Constantes Globales y Enums: `UPPER_CASE` (Ej. `STATUS_ENUM`)

## 🗺️ Arquitectura de Enrutamiento

La aplicación está seccionada en tres grandes áreas utilizando Layouts para envolver el contenido:

1. **Rutas Públicas (`/`)**: Envueltas en `PublicLayout`. Contienen el feed principal y el detalle de cada noticia.
2. **Rutas de Autenticación (`/login`)**: Envueltas en `AuthLayout`. Vista dividida (Split-screen) para el acceso de administradores.
3. **Rutas de Administración (`/admin/*`)**: Envueltas en `AdminLayout` (Sidebar + Topbar). Todas las rutas dentro de este módulo usan **Lazy Loading** (`React.lazy()`) para no afectar el tiempo de carga (FCP) de las rutas públicas.
