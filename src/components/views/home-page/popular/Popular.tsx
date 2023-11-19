import { Button, Card, Col, Row } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import banner from "../../../../assets/images/new/banner.png";
import imgLayout from "../../../../assets/images/product/img.png";
import "./Popular.scss";

const Popular = () => {
  return (
    <>
      <div className="containerCustom sectionCustom popular">
        <div className="popular__header">
          <h2 className="popular__title title">Nổi bật</h2>
          <p className="subTitle popular__subTitle">Đồng hồ thanh lịch, biểu tượng của đẳng cấp và chính xác.</p>
        </div>
        <div>
          <Row gutter={[31,0]}>
            <Col xl={8}>
              <Card
                cover={ <div className="card__popular__container">
                <img className="card__popular__img" alt="" src={imgLayout} />
              </div>}
                className="card__popular"
                bordered={false}
              >
                <h5 className="card__popular__title">7 ways to decor your home</h5>
                <Button className="newProduct__header__button card__popular__button">
                  <span className="subTitle">Xem thêm</span>{" "}
                  <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
            <Col xl={8}>
              <Card
                cover={ <div className="card__popular__container">
                <img className="card__popular__img" alt="" src={imgLayout} />
              </div>}
                className="card__popular"
                bordered={false}
              >
                <h5 className="card__popular__title">7 ways to decor your home</h5>
                <Button className="newProduct__header__button card__popular__button">
                  <span className="subTitle">Xem thêm</span>{" "}
                  <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
            <Col xl={8}>
              <Card
                cover={ <div className="card__popular__container">
                <img className="card__popular__img" alt="" src={imgLayout} />
              </div>}
                className="card__popular"
                bordered={false}
              >
                <h5 className="card__popular__title">7 ways to decor your home</h5>
                <Button className="newProduct__header__button card__popular__button">
                  <span className="subTitle">Xem thêm</span>{" "}
                  <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Popular;
