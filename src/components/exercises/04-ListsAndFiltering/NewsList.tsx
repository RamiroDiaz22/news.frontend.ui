import React, { useState } from 'react'

export interface NewsItem {
  id: number
  title: string
  category: string
}

export interface NewsListProps {
  news: NewsItem[]
}

export const NewsList: React.FC<NewsListProps> = ({ news }) => {
  /*
    TODO: Ejercicio de Listas y Filtros
    -----------------------------------------------------
    1. Crea un estado 'searchTerm' inicializado como un string vacío.
    2. Renderiza un <input data-testid="search-input"> para buscar por título. (Componente controlado).
    3. Filtra el arreglo 'news' recibido por props.
       - Solo deben quedar las noticias cuyo 'title' incluya lo que está en 'searchTerm'.
       - PISTA: Transforma ambos strings a minúsculas (.toLowerCase()) para que la búsqueda sea case-insensitive.
    4. Renderiza la lista filtrada iterando sobre ella para crear un <ul>.
       - Cada elemento debe ser un <li> con data-testid="news-item".
       - Debe mostrar el texto con este formato exacto: "[Categoría] Título". Ej: "[Política] Elecciones 2026".
       - MUY IMPORTANTE: ¡React necesita la prop especial 'key' en iteraciones! Usa el 'id'.
  */

  return (
    <div>
      Componente vacío
    </div>
  )
}
