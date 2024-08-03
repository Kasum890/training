import "../css-modules/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_conteiner conteiner">
        <div className="header_logo">
          <a href="#">
            <img src="../image/logo.svg" alt="Логотип" />
          </a>
        </div>
        <ul className="header_menu">
          <li className="header_list">
            <a href="#"></a>Чай
          </li>
          <li className="header_list">
            <a href="#"></a>Кофе
          </li>
          <li className="header_list">
            <a href="#"></a>Чайники
          </li>
          <li className="header_list">
            <a href="#"></a>Турки
          </li>
          <li className="header_list">
            <a href="#"></a>Прочее
          </li>
        </ul>
        <a className="header_basket" href="#">6</a>
      </div>
    </header>
  );
}
