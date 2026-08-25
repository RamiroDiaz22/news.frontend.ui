import React, { useState } from 'react'

export interface LoginFormProps {
  onSubmit: (email: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  /*
    TODO: Ejercicio de Formularios y Eventos
    -----------------------------------------------------
    1. Crea un estado 'email' inicializado en string vacío.
    2. Crea un estado 'error' (string) para mostrar mensajes de validación.
    3. Renderiza un <input> de tipo texto con data-testid="email-input".
       - DEBE ser un componente "controlado" (su 'value' debe estar atado al estado 'email' y debe actualizarse usando su evento 'onChange').
    4. Renderiza un botón <button> con data-testid="submit-button"> que diga "Ingresar".
    5. Al hacer clic en el botón:
       - Si el email está completamente vacío, debes guardar en el estado de error: "El email es requerido".
       - Muestra ese error en una etiqueta <p data-testid="error-message">.
       - Si el email NO está vacío, debes limpiar cualquier error previo y llamar a la función 'onSubmit' pasándole el string del email actual.
  */

  return (
    <div>
      Componente vacío
    </div>
  )
}
