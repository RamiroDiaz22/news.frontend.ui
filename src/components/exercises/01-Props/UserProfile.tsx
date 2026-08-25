import React from 'react'

// TODO: 1. Crear y exportar la interface UserProfileProps
// Debe tener estrictamente la siguiente estructura:
// - name: string
// - age: number
// - isActive: boolean (este campo debe ser Opcional)
// - roles: string[] (arreglo de strings)

// TODO: 2. Pasarle la interface creada al React.FC en lugar del 'any'
export const UserProfile: React.FC<any> = (props) => {
  /*
    TODO: 3. Implementar el componente
    -----------------------------------------------------
    - Muestra el nombre en un <h2> con el atributo data-testid="user-name".
    - Muestra la edad en un <p> con el atributo data-testid="user-age".
    - SI (y solo si) 'isActive' es true, muestra un <span> con data-testid="active-badge" que diga "Activo".
    - Renderiza la lista de 'roles' usando un <ul>. 
      - Cada rol debe ser un <li> con data-testid="user-role".
      - Recuerda usar la prop especial 'key' al iterar arreglos en React.
  */

  return <div data-testid="user-profile">Componente vacío</div>
}
