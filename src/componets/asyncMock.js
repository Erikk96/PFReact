const productos = [
    {
        id: '1',
        nombre: 'Casaca Titular',
        precio: '2500',
        categoria: 'remeras',
        img: '',
        stock: '10',
        descripcion: 'Descripcion de Remera'
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductosByid = (productosId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productosId))
        }, 500)
    })
}

