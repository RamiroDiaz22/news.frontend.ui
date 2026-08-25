import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewsList, type NewsItem } from './NewsList'

const mockNews: NewsItem[] = [
  { id: 1, title: 'El clima hoy', category: 'General' },
  { id: 2, title: 'Elecciones 2026', category: 'Política' },
  { id: 3, title: 'Aumento del dólar', category: 'Economía' },
]

describe('Ejercicio 04: Listas y Filtros (NewsList)', () => {
  it('Debe renderizar la lista completa inicialmente con el formato de texto correcto', () => {
    render(<NewsList news={mockNews} />)

    const items = screen.getAllByTestId('news-item')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('[General] El clima hoy')
    expect(items[1]).toHaveTextContent('[Política] Elecciones 2026')
    expect(items[2]).toHaveTextContent('[Economía] Aumento del dólar')
  })

  it('Debe filtrar la lista correctamente e ignorar mayúsculas/minúsculas', () => {
    render(<NewsList news={mockNews} />)

    const searchInput = screen.getByTestId('search-input')

    // Buscar algo que coincida parcialmente y con diferentes mayúsculas
    fireEvent.change(searchInput, { target: { value: 'eLeccIOnes' } })

    let filteredItems = screen.getAllByTestId('news-item')
    expect(filteredItems).toHaveLength(1)
    expect(filteredItems[0]).toHaveTextContent('[Política] Elecciones 2026')

    // Buscar algo que no exista
    fireEvent.change(searchInput, { target: { value: 'Deportes' } })
    expect(screen.queryByTestId('news-item')).not.toBeInTheDocument()
  })
})
