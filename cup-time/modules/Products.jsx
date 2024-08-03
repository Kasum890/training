import '../css-modules/products.css'
import Card from './Card'

export default function Products() {
    return (
        <section className='products'>
            <div className="products_conteiner conteiner">
               <h1 className='products_title'>Чай</h1>
               <div className="products_cards">
                <ul className="products_cards-items">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
               </div>
            </div>
        </section>
    )
}