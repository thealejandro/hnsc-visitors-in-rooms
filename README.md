# hnsc-visitors-in-rooms

Prototipo de un tablero de **visitantes por habitación** para el Hospital Nuestra Señora del Carmen (HNSC), Cobán, Guatemala. Muestra en una cuadrícula una tarjeta por habitación con el nombre del paciente, edad, sexo, tratamiento y el número de visitas permitidas o registradas.

## Estado

Prototipo de 2024 (un solo commit). Los datos son de ejemplo y están escritos directamente en `src/data/rooms.ts`; no hay backend, base de datos ni edición desde la interfaz. El componente `EditRoomForm.tsx` existe pero no está conectado a la página, y `Card.astro` es un sobrante de la plantilla de Astro. No está en uso en producción.

## Stack

- [Astro 4](https://astro.build) con las integraciones `@astrojs/react` y `@astrojs/tailwind`
- React 18 para las tarjetas (`RoomCard.tsx`)
- Tailwind CSS 3
- TypeScript (`astro check` corre antes del build)

## Cómo correr

```sh
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321 (npm start es equivalente)
npm run build     # astro check + astro build -> ./dist/
npm run preview   # sirve ./dist/ localmente
```

## Estructura

```text
src/
├── components/
│   ├── RoomCard.tsx       # tarjeta de una habitación (React)
│   ├── EditRoomForm.tsx   # formulario de edición, sin usar todavía
│   └── Card.astro         # sobrante de la plantilla
├── data/rooms.ts          # lista de habitaciones (datos de ejemplo)
├── layouts/Layout.astro
└── pages/index.astro      # cuadrícula de habitaciones
```

Para cambiar las habitaciones mostradas basta con editar el arreglo `rooms` en `src/data/rooms.ts`.

## Licencia

Software propietario — todos los derechos reservados.
