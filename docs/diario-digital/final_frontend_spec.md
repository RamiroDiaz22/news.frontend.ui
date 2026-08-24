# Final Frontend Specification: Diario Digital (Fase 1: Scaffolding)

*NOTA: Esta especificación técnica se enfoca exclusivamente en la configuración base, infraestructura (scaffolding) y enrutamiento estructural del proyecto. La implementación visual de vistas, componentes y UI se abordará en un ciclo posterior.*

## 1. Stack Tecnológico y Dependencias a Instalar

- **Runtime:** Node 24+ (LTS)
- **Gestor de Paquetes:** pnpm
- **Framework Core:** React + TypeScript (inicializado vía Vite)
- **Dependencias de Producción (`dependencies`):**
  - `react`, `react-dom`
  - `react-router-dom` (Ruteo estructural y Lazy Loading)
  - `zustand` (Manejo de estado global del cliente)
  - `@tanstack/react-query` (Manejo de server state y peticiones asíncronas)
  - `axios` (Cliente HTTP)
  - `antd` (Ant Design, configuración inicial base)
  - `lucide-react` (Íconos)
  - `dayjs` (Manejo de fechas)
- **Dependencias de Desarrollo (`devDependencies`):**
  - `vite`, `@vitejs/plugin-react`
  - `typescript`
  - `eslint`, `@antfu/eslint-config`
  - `prettier`
  - `vitest`
  - `storybook`

## 2. Configuración Inicial del Proyecto

### 2.1. Vite & TypeScript
- Inicializar el proyecto con template de React y TypeScript.
- Configurar *Path Aliases* en `vite.config.ts` y `tsconfig.json` para apuntar `@/` a la carpeta `src/`.

### 2.2. Calidad de Código (Linter & Formatter)
- Instalar y configurar Prettier.
- Configurar ESLint con el preset `@antfu/eslint-config`.
- **Reglas Estrictas:**
  - El uso del tipo `any` está prohibido (Linter debe lanzar error).
  - Variables/funciones en `camelCase`.
  - Componentes y Layouts en `PascalCase`.
  - Nombres de archivos, variables y código estrictamente en **Inglés**.

## 3. Estructura de Carpetas (Skeleton)

Se debe crear la siguiente estructura dentro de `src/`, inicializando los archivos base de cada capa:

```text
src/
├── assets/        # Carpeta vacía para imágenes y fuentes estáticas
├── components/    # Carpeta vacía (se implementará en la fase UI)
├── constants/     # constants/index.ts (Ej. config global, Enums terminados en _ENUM)
├── hooks/         # Carpeta vacía para custom hooks
├── layouts/       # Componentes estructurales vacíos
│   ├── PublicLayout.tsx
│   ├── AuthLayout.tsx
│   └── AdminLayout.tsx
├── pages/         # Páginas vacías (stubs) para el enrutamiento
│   ├── Home/index.tsx
│   ├── NewsDetail/index.tsx
│   ├── Login/index.tsx
│   └── Admin/
│       ├── Dashboard/index.tsx
│       └── NewsList/index.tsx
├── routes/        # index.tsx (Configuración del React Router)
├── services/      # api.ts (Instancia de Axios configurada)
├── stores/        # index.ts (Configuración inicial de Zustand)
├── types/         # Carpeta vacía para interfaces TS globales
├── utils/         # Carpeta vacía para helpers
├── App.tsx        # Entry point de Providers (TanStack, AntD ConfigProvider)
└── main.tsx       # Entry point de React (Render DOM)
```

## 4. Configuración Estructural (Implementación Base)

El agente desarrollador debe implementar los siguientes *boilerplates*:

### 4.1. Ruteo Base con Code Splitting (`src/routes/index.tsx`)
Configurar `createBrowserRouter` (React Router v6+) definiendo los layouts y aplicando Lazy Loading a las rutas privadas para optimizar el performance público.
- **Rutas Públicas (Envueltas en `PublicLayout`):** `/`, `/news/:slug`
- **Ruta de Auth (Envueltas en `AuthLayout`):** `/login`
- **Rutas de Admin (Envueltas en `AdminLayout` y cargadas mediante `React.lazy()`):** `/admin`, `/admin/news`

### 4.2. Provider Global (`src/App.tsx`)
Implementar la estructura envolvente principal:
1. `QueryClientProvider` de TanStack Query.
2. `ConfigProvider` de Ant Design (aplicando configuraciones base, si hubiese alguna genérica).
3. `RouterProvider` inyectando el router creado en el paso 4.1.

### 4.3. Cliente HTTP Base (`src/services/api.ts`)
Crear la instancia de Axios vacía y dejar preparados los interceptores básicos:
- Request interceptor: para inyectar token (stubs preparados).
- Response interceptor: para manejo de errores globales (ej. 401).

### 4.4. Stores Base (`src/stores/index.ts`)
Crear un store mínimo usando Zustand como ejemplo estructural:
- `useAuthStore` (vacío, solo con estados básicos de `token` y `user`).

## 5. Criterios de Aceptación para esta Fase
1. Al ejecutar `pnpm install` e iniciar con `pnpm dev`, la aplicación compila exitosamente sin errores de TypeScript.
2. El enrutamiento funciona: navegar a `/` carga el esqueleto de `PublicLayout`, navegar a `/admin` carga el esqueleto de `AdminLayout`.
3. El Linter no arroja advertencias sobre la configuración estructural implementada.
4. Las dependencias núcleo (Zustand, React Query, Router, Ant Design) están correctamente importadas y sin errores en el empaquetado inicial.
