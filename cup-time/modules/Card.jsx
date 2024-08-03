import '../css-modules/card.css'

export default function Card() {
  return (
    <li className="products_cards-item">
      <img
        className="cards_item-image"
        src="../image/photo1.png"
        alt="Кокосовая матча"
      />
      <div className="cards_item-block">
        <h3 className="cards_item-title">Кокосовая матча</h3>
        <p className="cards_item-price">390 ₽</p>
      </div>
    </li>
  );
}
