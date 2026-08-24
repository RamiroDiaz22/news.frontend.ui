import React from 'react'

// Crear una interface llamada NewsCardProps que reciba title, summary e imageUrl
// Las propiedades deben ser las siguientes:
// title: string
// summary: string
// imageUrl: string (opcional)

// Pasarle las props a la interface NewsCardProps
export const NewsCard: React.FC = () => {
  /*
    Tu objetivo es implementar este componente para que 
    los tests pasen a color verde al correr `pnpm test`.
    
    Requerimientos de la UI (usando Ant Design):
    1. Debes usar el componente <Card> de 'antd'.
    2. El componente debe tener el atributo data-testid="news-card".
    3. Mostrar el título enviado por props usando Typography.Title de nivel 4.
    4. Mostrar el resumen enviado por props usando Typography.Paragraph.
    5. SI (y solo si) recibes la prop 'imageUrl', el <Card> debe
       mostrar una imagen usando la etiqueta <img />
       con el atributo src={imageUrl} y alt={title}.
  */
  return <div></div>
}
