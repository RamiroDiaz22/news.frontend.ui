import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewsCard } from './index'

describe('NewsCard Component', () => {
  it('renders the title and summary correctly', () => {
    render(
      <NewsCard 
        title="Nueva era en IA" 
        summary="Un avance revolucionario en los agentes autónomos." 
      />
    )
    
    // El componente debe renderizar el texto del título y el resumen
    expect(screen.getByText('Nueva era en IA')).toBeInTheDocument()
    expect(screen.getByText('Un avance revolucionario en los agentes autónomos.')).toBeInTheDocument()
  })

  it('renders an image when imageUrl is provided', () => {
    render(
      <NewsCard 
        title="Imagen test" 
        summary="Resumen test"
        imageUrl="https://via.placeholder.com/150"
      />
    )
    
    // Debe existir una etiqueta <img>
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150')
    expect(img).toHaveAttribute('alt', 'Imagen test')
  })
})
