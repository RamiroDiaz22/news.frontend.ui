import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UserProfile } from './UserProfile'

describe('Ejercicio 01: Props e Interfaces (UserProfile)', () => {
  it('Debe renderizar correctamente el nombre y la edad', () => {
    render(<UserProfile name="Juan" age={25} roles={[]} />)
    
    expect(screen.getByTestId('user-name')).toHaveTextContent('Juan')
    expect(screen.getByTestId('user-age')).toHaveTextContent('25')
  })

  it('Debe renderizar la lista de roles correctamente', () => {
    render(<UserProfile name="Maria" age={30} roles={['Admin', 'Editor']} />)
    
    const roles = screen.getAllByTestId('user-role')
    expect(roles).toHaveLength(2)
    expect(roles[0]).toHaveTextContent('Admin')
    expect(roles[1]).toHaveTextContent('Editor')
  })

  it('Debe renderizar el badge de Activo SOLO si isActive es true', () => {
    const { rerender } = render(<UserProfile name="Pedro" age={20} roles={[]} isActive={true} />)
    expect(screen.getByTestId('active-badge')).toBeInTheDocument()

    // Si es falso o undefined, no debe existir
    rerender(<UserProfile name="Pedro" age={20} roles={[]} isActive={false} />)
    expect(screen.queryByTestId('active-badge')).not.toBeInTheDocument()

    // Como es opcional, si no se pasa, tampoco debe existir
    rerender(<UserProfile name="Pedro" age={20} roles={[]} />)
    expect(screen.queryByTestId('active-badge')).not.toBeInTheDocument()
  })
})
