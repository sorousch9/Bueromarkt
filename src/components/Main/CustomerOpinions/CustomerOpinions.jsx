import "./customerOpinions.scss";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import p7718687 from "../../../assets/7718687.jpg";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethod";
import { Categories } from "../../Categories/Categories";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../../redux/cartRedux";
import { useDispatch } from "react-redux";


export const CustomerOpinions = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [product._id]);
 
  var productOnSale = product.filter && product.filter((item)=> {
    return item.onSale === "true";
  });

  return (
    <div className="module-categor-products style-raw">
      <div className="module-header">
        <div className="column">
          <h4 className="entry-title">Bei unseren Kunden beliebt</h4>
          <div className="entry-description">
            zweite Reihe Aktionen und Angebote "Bei unseren Kunden beliebt"
          </div>
        </div>
        <div className="column">
          <Link
            className="button"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Alle ansehen
            <i></i>
          </Link>
        </div>
      </div>
      <div className="module-body">
        <div className="column left">
          <div className="cell">
            <div className="categories-links">
              <ul>
                <li>
                  <Categories />
                </li>
              </ul>
            </div>
          </div>
          <div className="cell banner">
            <div className="module-banner align-left full-text">
              <div className="module-body">
                <div className="banner-wrapper">
                  <div className="banner-content">
                    <div className="content-header">
                      <div className="category-text color-danger">Qualit??t</div>
                    </div>
                    <div className="content-main">
                      <h4 className="entry-subtitle">Die Zuverl??ssigkeit </h4>
                      <h3 className="entry-title color-text-light">
                        aller Produkte
                      </h3>
                      <div className="entry-store color-info-dark">
                        Nur in B??ttcher AG
                      </div>
                    </div>
                  </div>
                  <div className="banner-thumbnail">
                    <img src={p7718687} alt="tets" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column right">
          <div className="products mobile-column-2 column-3">
          {productOnSale?.map((item) => (
              <div className="product product-type-simple" key={item._id}>
                <div className="product-wrapper product-type-3">
                  <div className="thumbnail-wrapper">
                    <div className="product-badges">
                      <span className="badge style-1 onsale">{item.sale}%</span>
                      <span className={item.available[1]}>
                         {item.available[0]}
                      </span>
                    </div>
                    <Link
                      to={`/product/${item._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <img className="p-img" src={item.img[0].src} alt={item.title} />
                    </Link>
                    <div className="product-buttons">
                      <Link
                        to={`/product/${item._id}`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <BsArrowsFullscreen
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}
                        />
                      </Link>

                      <Link
                        to="/"
                        className="detail-bnt quick-view-button"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <BsHeart />
                      </Link>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <span className="price">
                      <del aria-hidden="true">
                        <span className="amount">
                          <bdi>
                            <span className=""></span>
                            {item.price}???
                          </bdi>
                        </span>
                      </del>{" "}
                      <ins>
                        <span className="amount">
                          <bdi>
                            <span>
                              {parseFloat(
                                item.price - (item.price * item.sale) / 100
                              ).toFixed(2)}
                              ???
                            </span>
                            {item.saleprice}
                          </bdi>
                        </span>
                      </ins>
                    </span>
                    <h3 className="product-title">
                      <Link
                        to={`/product/${item._id}`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        title="testing product"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <div className="product-meta">
                      <div className="product-available in-stock">
                        AUF LAGER
                      </div>
                    </div>
                    <div className="product-rating">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}></span>
                      </div>
                      <div className="count-rating">
                        58 <span className="rating-text">Ratings</span>
                      </div>
                    </div>
                    <div className="product-fade-block">
                      <button className="product-btn-fade"
                       onClick={() => {
                        addToCart(item);
                      }}>
                        In den Warenkorb
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
