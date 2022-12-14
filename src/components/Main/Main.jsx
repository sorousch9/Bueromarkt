import "./main.scss";
import { CustomerOpinions } from "./CustomerOpinions/CustomerOpinions";
import { MainBanner } from "./MainBanner/MainBanner";
import { TopRecommendations } from "./TopRecommendations/TopRecommendations";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { categories } from "../../data";
import { SpecialOffer } from "./SpecialOffer/SpecialOffer";
import { Widget } from "./Widget/Widget";

export const Main = () => {
  return (
    <Container>
      <Row>
        <Col xl="2">
          <div className="sideBar">
            <button className="glow" type="button">
              GRATIS FÜR SIE
            </button>
            <div className="categorie-1">
              {" "}
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Aktionsartikel
              </Link>
            </div>
            <div className="categorie-1">
              {" "}
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                B-Ware
              </Link>
            </div>
            <div className="categorie-1">
              {" "}
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Themens Shops
              </Link>
            </div>
            <div className="categorie">
              <h5>Kategorien</h5>
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <span>{item.title}</span>
                      <i>
                        <MdKeyboardArrowRight />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col xl="10" md="12">
          <MainBanner />
          <SpecialOffer />
          <TopRecommendations />
          <Widget />
          <CustomerOpinions />
        </Col>
      </Row>
      <a href="/" className="scrollToTop"> </a>
    </Container>
  );
};
