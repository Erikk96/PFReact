import Item from '../Item'

const Item = ({ id, nombre, img, precio, stock }) => {
     return (
         <article className="CardItem">
            <header className="Header">
                 <h2 className="ItemHeader">
                    {nombre}
                 </h2>
             </header>
             <picture>
                 <img src={img} alt={nombre} className="itemImg" />
            </picture>
             <section>
                 <p className="Info">
                     Precio: ${precio}
                 </p>
             </section>
             <footer className="ItemFooter">
                 <link to={'/item/${id}'} className='Opcion'> Ver detalle</link>
             </footer>
         </article>
     )
 }

 export default Item 