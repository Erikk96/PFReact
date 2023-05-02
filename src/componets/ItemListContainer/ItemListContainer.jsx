import { useEffect, useState } from "react"
import { getProductosByid } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  const { categoriaId } = useParams()

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductosByidCategoria : getProductosByid
    asyncFunc(categoriaId)
      .then(response => {
        setProductos(response)
      })
  }, [categoriaId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  )

}

export default ItemListContainer

