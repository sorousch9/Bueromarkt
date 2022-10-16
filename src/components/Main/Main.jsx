import "./main.scss";
import { CustomerOpinions } from "./CustomerOpinions/CustomerOpinions";
import { MainBanner } from "./MainBanner/MainBanner";
import { TopRecommendations } from "./TopRecommendations/TopRecommendations";
import { TopSales } from "./TopSales/TopSales";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import officevec from "../../assets/office1.png";
export const Main = () => {
  return (
    <Container>
      <Row>
        <Col md="2">
        <button class="glow" type="button">GRATIS FÜR SIE</button>
          <div className="categorie">
            <h5>Kategorien</h5>
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  className="text-link"
                >
                <span>Alle</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  className="text-link"
                >
                  <img src={officevec} alt="office" />
                  <span>Erste</span>
                  <i>
                    <BsArrowBarRight />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="10">
          <MainBanner />
          <CustomerOpinions />
          <TopRecommendations />
          <TopSales />
        </Col>
      </Row>
    </Container>
  );
};
