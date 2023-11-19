import { Button, Col, Drawer, Menu, Popover, Row, Table } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { ROUTE_PATHS } from "../../../../../constants/url-config";
import { useEffect, useState } from "react";
import logo from "../../../../../assets/images/Logo.png";
import heart from "../../../../../assets/icon/heart.svg";
import search from "../../../../../assets/icon/search.svg";
import user from "../../../../../assets/icon/user.svg";
import cart from "../../../../../assets/icon/cart.svg";
import product from "../../../../../assets/images/product/product.svg";
type Props = {};
const items = [
  {
    label: <Link to={ROUTE_PATHS.Home}>Trang chủ</Link>,
    key: "home",
  },
  {
    label: <Link to={ROUTE_PATHS.Shop}>Cửa hàng</Link>,
    key: "shop",
  },
  {
    label: <Link to={ROUTE_PATHS.Home}>Đồng hồ Nam</Link>,
    key: "about",
  },
  {
    label: <Link to={ROUTE_PATHS.Home}>Đồng hồ Nữ</Link>,
    key: "a",
  },
  {
    label: <Link to={ROUTE_PATHS.ProductDetail}>Liên hệ</Link>,
    key: "contact",
  },
];

// const customFooterContent = (
//   <div className="button__custom__draw">
//    <Link to={ROUTE_PATHS.Home}><Button className="button__custom__draw--cart">Cart</Button></Link>
//     <Link to={ROUTE_PATHS.Home}><Button className="button__custom__draw--checkout">Checkout</Button></Link>
//   </div>
// );
const content = (
  <div className="popoverButton">
    <Link to={ROUTE_PATHS.SignIn}>
    <Button className="popoverButton__button popoverButton__button__login">Đăng nhập</Button>
    </Link>
    <Button>Đăng ký</Button>
  </div>
);
const MainHeader = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <Row className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="test">
          <img src={logo} alt="" />
        </div>
        <div>
          <Menu
            className="header__content"
            mode="horizontal"
            disabledOverflow={true}
            items={items}
          ></Menu>
        </div>
        <div>
          <ul className="header__content header__content__right">
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={heart} alt="" />
            </li>
            <li>
              {/* <Link to={ROUTE_PATHS.Home}> */}
                <img src={cart} alt="" onClick={showDrawer} />
              {/* </Link> */}
            </li>
            <li>
              <Popover
                placement="bottomRight"
                content={content}
                trigger="hover"
              >
                <img src={user} alt="" />
              </Popover>
            </li>
          </ul>
        </div>
      </Row>
      <Drawer
        className="drawer__cart"
        onClose={onClose}
        open={open}
        title="Giỏ hàng"
      >
        <Row className="cartItem">
          <Col xl={4} className="cartItem__left">
            <img src={product} alt="" className="cartItem__left__img" />
          </Col>
          <Col xl={20} className="cartItem__right">
            <div className="cartItem__content">
              <h3>Loveseat Sofa</h3>
              <div className="cartItem__quantity">
                <button
                  onClick={decrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <MinusOutlined />
                </button>
                <span className="cartItem__quantity__number">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
            <div>
              <p>$39.00</p>
              <Button className="cartItem__delete">
                <DeleteOutlined />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="cartItem">
          <Col xl={4} className="cartItem__left">
            <img src={product} alt="" className="cartItem__left__img" />
          </Col>
          <Col xl={20} className="cartItem__right">
            <div className="cartItem__content">
              <h3>Loveseat Sofa</h3>
              <div className="cartItem__quantity">
                <button
                  onClick={decrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <MinusOutlined />
                </button>
                <span className="cartItem__quantity__number">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
            <div>
              <p>$39.00</p>
              <Button className="cartItem__delete">
                <DeleteOutlined />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="cartItem">
          <Col xl={4} className="cartItem__left">
            <img src={product} alt="" className="cartItem__left__img" />
          </Col>
          <Col xl={20} className="cartItem__right">
            <div className="cartItem__content">
              <h3>Loveseat Sofa</h3>
              <div className="cartItem__quantity">
                <button
                  onClick={decrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <MinusOutlined />
                </button>
                <span className="cartItem__quantity__number">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
            <div>
              <p>$39.00</p>
              <Button className="cartItem__delete">
                <DeleteOutlined />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="cartItem">
          <Col xl={4} className="cartItem__left">
            <img src={product} alt="" className="cartItem__left__img" />
          </Col>
          <Col xl={20} className="cartItem__right">
            <div className="cartItem__content">
              <h3>Loveseat Sofa</h3>
              <div className="cartItem__quantity">
                <button
                  onClick={decrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <MinusOutlined />
                </button>
                <span className="cartItem__quantity__number">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="cartItem__quantity__button"
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
            <div>
              <p>$39.00</p>
              <Button className="cartItem__delete">
                <DeleteOutlined />
              </Button>
            </div>
          </Col>
        </Row>
        <div className="drawer__footer">
          <span>Subtotal</span>
          <span>$99.00</span>
        </div>
        <Row className="cart__checkout" gutter={[24, 0]}>
          <Col xl={12}>
            <Link to={ROUTE_PATHS.Cart}>
            <Button className="cart__checkout__button">
              <ShoppingCartOutlined />
              <span className="subTitle">Giỏ hàng</span>
            </Button>
            </Link>
            
          </Col>
          <Col xl={12}>
          <Link to={ROUTE_PATHS.Checkout}>
          <Button className="cart__checkout__button">
              <SendOutlined />
              <span className="subTitle">Thanh toán</span>
            </Button>
          </Link>
            
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default MainHeader;
