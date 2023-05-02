const products = [
    {
        id: '1',
        name: 'Celular',
        price: '1000',
        category: 'celular',
        img: 'https://images.fravega.com/f500/f741c5dc03f09eebef57e56dcc86c8f9.jpg',
        stock: 25,
        description: 'Descripcion del celular'
    },
    {
        id: '2',
        name: 'Notebook',
        price: '1432',
        category: 'notebook',
        img: 'https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg',
        stock: 20,
        description: 'Descripcion del celular 2'
    },
    {
        id: '3',
        name: 'Tablet',
        price: '1432',
        category: 'tablet',
        img: 'https://www.macstation.com.ar/img/productos/2569-1.jpg',
        stock: 15,
        description: 'Descripcion del celular 2'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === productCategory))
      }, 500)
    })
  }