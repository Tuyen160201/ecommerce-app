import React from "react";
import { Link } from "react-router-dom";
import youtube from "../../../images/youtube.png";
import facebook from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import certificate from "../../../images/certificate.png";
import logo from "../../../images/logo_footer.png";
import place from "../../../images/place.svg";
import phone from "../../../images/phone.svg";
import email from "../../../images/email.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="footer__item">
          <img
            className="footer__logo"
            src={logo}
            alt="logo"
          />
          <p className="info__introduce">
            Happy Store - Sự lực chọn hàng đầu trong lĩnh vực công nghệ.
          </p>
          <div className="info">
            <img className="info__image" src={place} alt="" />
            <p className="info__content">
              Địa chỉ: 01 Võ Văn Ngân - Linh Chiểu - Thành phố Thủ Đức - Thành
              phố Hồ Chí Minh
            </p>
          </div>
          <div className="info info__phone">
            <img className="info__image" src={phone} alt="" />
            <p className="info__content">Số điện thoại: 0865765201</p>
          </div>
          <div className="info">
            <img className="info__image" src={email} alt="" />
            <p className="info__content">Email: happystore@gmail.com</p>
          </div>
        </div>

        <div className="footer__item">
          <h4 className="about">
            Về chúng tôi
          </h4>
          <div className="about__store">
            <a className="about__link" href="/#">
              Giới thiệu về Super Fresh
            </a>
            <a className="about__link" href="/#">
              Liên hệ
            </a>
            <a className="about__link" href="/#">
              Liên kết
            </a>
            <a className="about__link" href="/#">
              Truy xuất nguồn gốc
            </a>
            <a className="about__link" href="/#">
              Khách hàng thân thiết
            </a>
          </div>
          <h4 className="about__contact">
            Kết nối với chúng tôi
          </h4>
          <div className="about__icons">
            <Link to={"#"}>
              <img className="about__icons--image" alt="facebook" src={facebook} />{" "}
            </Link>
            <Link to={"#"}>
              <img className="about__icons--image" alt="youtube" src={youtube} />{" "}
            </Link>
            <Link to={"#"}>
              <img className="about__icons--image" alt="twitter" src={twitter} />{" "}
            </Link>
          </div>
        </div>

        <div className="footer__item">
          <h4 className="support">
            Hỗ trợ khách hàng
          </h4>
          <div className="support__links">
            <a className="support__link" href="/#">
              Các câu hỏi thường gặp
            </a>
            <a className="support__link" href="/#">
              Gửi yêu cầu hỗ trợ
            </a>
            <a className="support__link" href="/#">
              Hướng dẫn đặt hàng
            </a>
            <a className="support__link" href="/#">
              Hướng dẫn dùng khuyến mãi
            </a>
            <a className="support__link" href="/#">
              Hướng dẫn kiểm tra đơn hàng
            </a>
          </div>
          <img
            className="support__image"
            src={certificate}
            alt="cnbocongthuong"
          />
        </div>

        <div className="footer__item">
          <h4 className="address">
            Địa chỉ cửa hàng
          </h4>

          <div class="map">
            <iframe
            title="contact"
            className="map__frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4842318813353!2d106.76973361462129!3d10.85072666078536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1636705454227!5m2!1svi!2s"

            ></iframe>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <h4 className="footer__content">Copyright © 2022 Happy Store</h4>
      </div>
    </div>
  );
};

export default Footer;
