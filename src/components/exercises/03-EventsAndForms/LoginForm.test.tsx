import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('Ejercicio 03: Eventos y Formularios (LoginForm)', () => {
  it('Debe mostrar error si se hace submit con el email vacío', () => {
    const mockSubmit = vi.fn()
    render(<LoginForm onSubmit={mockSubmit} />)
    
    const button = screen.getByTestId('submit-button')
    
    // Clickeamos el botón sin escribir nada
    fireEvent.click(button)

    expect(screen.getByTestId('error-message')).toHaveTextContent('El email es requerido')
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('Debe ser un componente controlado y llamar a onSubmit correctamente', () => {
    const mockSubmit = vi.fn()
    render(<LoginForm onSubmit={mockSubmit} />)
    
    const input = screen.getByTestId('email-input')
    const button = screen.getByTestId('submit-button')

    // Escribir en el input
    fireEvent.change(input, { target: { value: 'test@diariodigital.com' } })
    
    // El input debe reflejar el cambio (comprobando que el onChange está atado al estado)
    expect(input).toHaveValue('test@diariodigital.com')

    // Hacer submit
    fireEvent.click(button)

    // No debe haber errores en pantalla
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument()
    // La función debe haberse llamado con el valor del input
    expect(mockSubmit).toHaveBeenCalledWith('test@diariodigital.com')
  })
})
