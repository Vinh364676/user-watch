import { Button, Card, Rate } from "antd";
import "./CardComponent.scss";
import Meta from "antd/lib/card/Meta";
import product from "../../../assets/images/product/a.png";
import heart from "../../../assets/icon/heart.svg";
import HeartIcon from "../../../assets/svg/heart/Heart";
import {ShoppingCartOutlined} from "@ant-design/icons";
type Props ={
  brand:string;
  name:string;
  price: number | String;
}
const CardComponent = ({brand,name,price}:Props) => {

  return (
    <>
      <Card
        hoverable
        className="card"
        style={
          {
            // width:300,
          }
        }
        cover={
          <div className="card__item">
            <div className="zoom-effect">
              <img alt="example" src={product} className="card__image" />
            </div>
            <div className="card__item__heart">
              <HeartIcon />
            </div>
            
          </div>
        }
      >
        <div className="cart__layout">
        <div className="card__item__button">
              <div className="card__content">
                <h5 className="card__content--top">{brand}</h5>
                <h2 className="card__content__title">{name}</h2>
                  <p className="card__content--bottom">{price}</p>
                {/* <div className="card__content__footer">
                <p>$199.00</p>
                  <Rate className="card__rate" disabled defaultValue={5} />
                </div> */}
                
              </div>
            </div>
            <div className="card__footer">
        <Button className="button__submit" type="primary">
        <ShoppingCartOutlined /> Thêm vào giỏ
        </Button>
        </div>
        
        </div>
        
      </Card>
    </>
  );
};

export default CardComponent;
