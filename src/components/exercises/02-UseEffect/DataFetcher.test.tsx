import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DataFetcher } from './DataFetcher'

describe('Ejercicio 02: useEffect y useState (DataFetcher)', () => {
  it('Debe mostrar el indicador de carga inicialmente y luego los datos al resolver la promesa', async () => {
    // Simulamos una petición que tarda un poco
    const mockFetch = vi.fn().mockImplementation(() => {
      return new Promise<string>((resolve) => {
        setTimeout(() => resolve('Datos secretos de la API'), 100)
      })
    })

    render(<DataFetcher fetchData={mockFetch} />)
    
    // 1. Verificamos que el estado inicial sea "Cargando..."
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
    expect(screen.queryByTestId('data-result')).not.toBeInTheDocument()

    // 2. Esperamos a que el useEffect resuelva la promesa
    await waitFor(() => {
      expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument()
    })

    // 3. Verificamos que se muestren los datos
    expect(screen.getByTestId('data-result')).toHaveTextContent('Datos secretos de la API')
    
    // 4. Verificamos que useEffect haya llamado la función exactamente UNA VEZ
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })
})
