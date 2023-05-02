import { useEffect, useState } from "react"
import { getProductosByid } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getProductosByid('1')
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer