import "../css-modules/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_conteiner conteiner">
        <div className="footer_conteiner-info">
          <img
            className="footer_conteiner_info-image"
            src="../image/logo.svg"
            alt="Logotip"
          />
          <ul className="footer_conteiner_info-menu">
            <li className="footer_conteiner_info-list">
              <a href="#">Чай</a>
            </li>
            <li className="footer_conteiner_info-list">
              <a href="#">Кофе</a>
            </li>
            <li className="footer_conteiner_info-list">
              <a href="#">Чайники</a>
            </li>
            <li className="footer_conteiner_info-list">
              <a href="#">Турки</a>
            </li>
            <li className="footer_conteiner_info-list">
              <a href="#">Прочее</a>
            </li>
          </ul>
        </div>
        <div className="footer_conteiner-mixed">
          <div className="footer_conteiner_mixed-block1">
            <h3 className="footer_conteiner-title">©CUPTIME, 2024</h3>
            <p>Проект сделан в учебных целях</p>
            <p>Designer: Anastasia Ilina</p>
            <p>Developer:</p>
          </div>
          <div className="footer_conteiner_mixed-block2">
          <h3 className="footer_conteiner-title">CUPTIME@gmail.com</h3>
          <div className="footer_conteiner-mixed-social">
            <img src="../image/ic_baseline-telegram.svg" alt="telegramm" />
            <img src="../image/mdi_youtube.svg" alt="youtube" />
            <img src="../image/entypo-social_vk-with-circle.svg" alt="VK" />
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
