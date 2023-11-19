import React from "react";
import "./NewProduct.scss";
import { Button, Col, Row } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import deliver from "../../../../assets/images/new/deliveri.png";
import banner from "../../../../assets/images/new/banner.png";
import CardComponent from "../../card-component/CardComponent";
const NewProduct = () => {
  return (
    <div className="containerCustom newProduct sectionCustom">
        <div className="newProduct__header">
        <h2 className="newProduct__header__title title">Mới nhất</h2>
      <Button className="newProduct__header__button"><span className="subTitle">Xem thêm</span> <ArrowRightOutlined /></Button>
        </div>
        <Row gutter={24} className="newProduct__product">
          {/* <Col xl={6}>
          <CardComponent/>
          </Col>
          <Col xl={6}>
          <CardComponent/>
          </Col>
          <Col xl={6}>
          <CardComponent/>
          </Col>
          <Col xl={6}>
          <CardComponent/>
          </Col> */}
        </Row>
        
        {/* <Row gutter={24} className="sectionCustom">
        <Col xl={6} className="newProduct__footer">
          <div className="newProduct__footer__item">
          <img src={deliver} alt="" className="newProduct__footer__item--img"/>
          <h5 className="newProduct__footer__item--title">Free Shipping</h5>
          <p className="newProduct__footer__item--desc">Order above $200</p>
          </div>
        </Col>
        <Col xl={6} className="newProduct__footer">
          <div className="newProduct__footer__item">
          <img src={deliver} alt="" className="newProduct__footer__item--img"/>
          <h5 className="newProduct__footer__item--title">Free Shipping</h5>
          <p className="newProduct__footer__item--desc">Order above $200</p>
          </div>
          
        </Col>
        <Col xl={6} className="newProduct__footer">
          <div className="newProduct__footer__item">
          <img src={deliver} alt="" className="newProduct__footer__item--img"/>
          <h5 className="newProduct__footer__item--title">Free Shipping</h5>
          <p className="newProduct__footer__item--desc">Order above $200</p>
          </div>
          
        </Col>
        <Col xl={6} className="newProduct__footer">
          <div className="newProduct__footer__item">
          <img src={deliver} alt="" className="newProduct__footer__item--img"/>
          <h5 className="newProduct__footer__item--title">Free Shipping</h5>
          <p className="newProduct__footer__item--desc">Order above $200</p>
          </div>
          
        </Col>
        
      </Row> */}


      </div>
  );
};

export default NewProduct;
