import React, { useState, useEffect } from 'react'

export interface DataFetcherProps {
  // fetchData es una función asíncrona que simula una petición a una API
  fetchData: () => Promise<string>
}

export const DataFetcher: React.FC<DataFetcherProps> = ({ fetchData }) => {
  /*
    TODO: Implementar el componente usando useState y useEffect
    -----------------------------------------------------
    1. Crea un estado llamado 'data' (string) inicializado en un string vacío ("").
    2. Crea un estado llamado 'isLoading' (boolean) inicializado en true.
    3. Usa `useEffect` para llamar a la función `fetchData` UNA SOLA VEZ cuando el componente se monte.
       (Pista: presta atención al arreglo de dependencias).
    4. Cuando `fetchData` termine (recuerda que retorna una Promesa), guarda el resultado en 'data' y cambia 'isLoading' a false.
    5. Mientras 'isLoading' sea true, debes retornar un <div data-testid="loading-indicator">Cargando...</div>.
    6. Cuando ya NO esté cargando, debes retornar el resultado en un <div data-testid="data-result">{data}</div>.
  */

  return (
    <div>
      Componente vacío
    </div>
  )
}
