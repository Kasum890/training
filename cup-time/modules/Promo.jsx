import '../css-modules/promo.css'

export default function Promo() {
    return (
        <section className="promo ">
        <div className="promo_conteiner conteiner">
          <div className="promo_conteiner-block">
            <h1 className="promo_title">Попробуй новый вкус Арабики</h1>
            <button className="promo_button" type="button">
              Перейти к кофе
            </button>
          </div>
          <img className='promo_conteiner-img' src="../image/Слой11.png" alt="Пачка кофе" />
        </div>
      </section>
    )
}