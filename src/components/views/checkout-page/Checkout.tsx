import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Steps,
  message,
} from "antd";
import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import productImg from "../../../assets/images/product/product.svg";
import "./Checkout.scss";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/url-config";
const Checkout = () => {
  const [value, setValue] = useState(1);
  const onChange = (e: any) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const steps = [
    {
      title: "Địa chỉ",
      icon: <EnvironmentOutlined />,
      content: (
        <>
          <Row gutter={[40, 0]} className="checkout__row">
            <Col xl={14}>
              <h5 className="checkout__title">Chọn địa chỉ</h5>
              <Radio.Group
              defaultValue={1}
                onChange={onChange}
                value={value}
                className="radio__custom"
              >
                <div className="radio__container">
                  <Radio value={1} className="radio__custom__check">
                    <div className="radio__item">
                      <div className="radio__address">
                        <div className="radio__address__header">
                          <h4 className="radio__address__title">
                            75 Võ Thành Trang
                          </h4>
                          <p className="radio__address__location">Home</p>
                        </div>
                        <p className="radio__address__desc">
                          Phường 11, Quận Tân Bình, Tp.HCM
                        </p>
                        <p className="radio__address__desc">0812364676</p>
                      </div>
                    </div>
                  </Radio>
                  <div className="radio__action">
                    <Button className="radio__action__button">
                      <EditOutlined />
                    </Button>
                    <Button className="radio__action__button">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
                <div className="radio__container">
                  <Radio value={2} className="radio__custom__check">
                    <div className="radio__item">
                      <div className="radio__address">
                        <div className="radio__address__header">
                          <h4 className="radio__address__title">
                            75 Võ Thành Trang
                          </h4>
                          <p className="radio__address__location">Home</p>
                        </div>
                        <p className="radio__address__desc">
                          Phường 11, Quận Tân Bình, Tp.HCM
                        </p>
                        <p className="radio__address__desc">0812364676</p>
                      </div>
                    </div>
                  </Radio>
                  <div className="radio__action">
                    <Button className="radio__action__button">
                      <EditOutlined />
                    </Button>
                    <Button className="radio__action__button">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Radio.Group>
            </Col>
            <Col xl={10} className="checkout__right">
              <div className="checkout__right__item">
                <h5>Order Summary</h5>
                <div className="cart__right__content ">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng sản phẩm
                  </p>
                  <p className="subTitle cart__right__content__subTotal">
                    $2347
                  </p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">Thuế</p>
                  <p className="subTitle cart__right__content__text">8%</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">
                    Vận chuyển
                  </p>
                  <p className="subTitle cart__right__content__text">$29</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng cộng
                  </p>
                  <p className="subTitle cart__right__content__subTotal">$29</p>
                </div>
              </div>
            </Col>
          </Row>

          <div className="checkout__add">
            <div className="checkout__add__left"></div>
            <Button className="checkout__add__button" onClick={showModal}>
              <PlusOutlined />
            </Button>
            <div className="checkout__add__right"></div>
          </div>
          <div className="checkout__add__title">Thêm địa chỉ</div>
        </>
      ),
    },
    {
      title: "Vận chuyển",
      content: (
        <>
          <Row gutter={[40, 0]} className="checkout__row">
            <Col xl={14}>
              <h5 className="checkout__title">Phương thức vận chuyển</h5>
              <Radio.Group
                onChange={onChange}
                value={value}
                defaultValue={99}
                className="radio__custom"
              >
                <div className="radio__container">
                  <Radio value={99} className="radio__custom__check">
                    <div className="radio__item">
                      <div className="radio__address radio__address__ship">
                        <p className="radio__address__desc radio__address__desc__ship radio__address__desc__ship__title">
                          Miễn phí
                        </p>
                        <p className="radio__address__desc radio__address__desc__ship">Giao hàng tiết kiệm</p>
                      </div>
                    </div>
                  </Radio>
                  <div className="radio__action">
                   
                    <Button className="radio__action__button">
                    17 Oct, 2023
                    </Button>
                  </div>
                </div>
                <div className="radio__container">
                  <Radio value={100} className="radio__custom__check">
                    <div className="radio__item">
                      <div className="radio__address radio__address__ship">
                        <p className="radio__address__desc radio__address__desc__ship radio__address__desc__ship__title">
                        $8.50
                        </p>
                        <p className="radio__address__desc radio__address__desc__ship">Giao hàng nhanh</p>
                      </div>
                    </div>
                  </Radio>
                  <div className="radio__action">
                   
                    <Button className="radio__action__button">
                    17 Oct, 2023
                    </Button>
                  </div>
                </div>
              </Radio.Group>
            </Col>
            <Col xl={10} className="checkout__right">
              <div className="checkout__right__item">
                <h5>Order Summary</h5>
                <div className="cart__right__content ">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng sản phẩm
                  </p>
                  <p className="subTitle cart__right__content__subTotal">
                    $2347
                  </p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">Thuế</p>
                  <p className="subTitle cart__right__content__text">8%</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">
                    Vận chuyển
                  </p>
                  <p className="subTitle cart__right__content__text">$29</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng cộng
                  </p>
                  <p className="subTitle cart__right__content__subTotal">$29</p>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Thanh toán",
      content: (
        <>
          <Row gutter={[96, 0]} className="checkout__row">
            <Col xl={12} className="checkout__pay">
              <div className="checkout__pay__item">
                <h5 className="checkout">Summary</h5>
                <div className="checkout__pay__product">
                  <div className="checkout__pay__product__name">
                    <img
                      className="checkout__pay__product__img"
                      src={productImg}
                      alt=""
                    />
                    <p className="checkout__pay__product__descSub">
                      Apple iPhone 14 Pro Max 128Gb x 1
                    </p>
                  </div>
                  <p className="checkout__pay__product__descSub">$1399</p>
                </div>
                <div className="checkout__pay__product">
                  <div className="checkout__pay__product__name">
                    <img
                      className="checkout__pay__product__img"
                      src={productImg}
                      alt=""
                    />
                    <p className="checkout__pay__product__descSub">
                      Apple iPhone 14 Pro Max 128Gb x 1
                    </p>
                  </div>
                  <p className="checkout__pay__product__descSub">$1399</p>
                </div>
                <div className="checkout__pay__product">
                  <div className="checkout__pay__product__name">
                    <img
                      className="checkout__pay__product__img"
                      src={productImg}
                      alt=""
                    />
                    <p className="checkout__pay__product__descSub">
                      Apple iPhone 14 Pro Max 128Gb x 1
                    </p>
                  </div>
                  <p className="checkout__pay__product__descSub">$1399</p>
                </div>
                <p className="checkout__pay__product__subTitle">Address</p>
                <p className="checkout__pay__product__descSub">
                  1131 Dusty Townline, Jacksonville, TX 40322
                </p>

                <p className="checkout__pay__product__subTitle">
                  Shipment method
                </p>
                <p className="checkout__pay__product__descSub">Free</p>
                <div className="cart__right__content ">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng sản phẩm
                  </p>
                  <p className="subTitle cart__right__content__subTotal">
                    $2347
                  </p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">Thuế</p>
                  <p className="subTitle cart__right__content__text">8%</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__text">
                    Vận chuyển
                  </p>
                  <p className="subTitle cart__right__content__text">$29</p>
                </div>
                <div className="cart__right__content">
                  <p className="subTitle cart__right__content__subTotal">
                    Tổng cộng
                  </p>
                  <p className="subTitle cart__right__content__subTotal">$29</p>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <div className="containerCustom sectionCustom checkout">
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button
            className="buttonCustom"
            type="primary"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        <Modal
          title="Thêm địa chỉ"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered={true}
          className="modal__address"
        >
          <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={"optional"}
    >
      <Row gutter={[20,0]}>
        <Col xl={12}>
        <Form.Item
        label="Họ và tên"
        name="username"
        
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ và tên!',
          },
        ]}
      >
        <Input placeholder="Họ và tên" className="formAddress__input"/>
      </Form.Item>
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Số điện thoại" className="formAddress__input"/>
      </Form.Item>
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Ghi chú địa chỉ"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Ghi chú" className="formAddress__input"/>
      </Form.Item>
      
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Trạng thái"
        name="status"
      >
        <Checkbox>Mặc định</Checkbox>
      </Form.Item>
      
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Tỉnh - Thành phố"
        name="province"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Tỉnh - Thành phố" className="formAddress__input"/>
      </Form.Item>
      
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Quận - Huyện"
        name="district"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Quận - Huyện" className="formAddress__input"/>
      </Form.Item>
      
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Xã - Phường"
        name="ward"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Xã - Phường" className="formAddress__input"/>
      </Form.Item>
      
        </Col>
        <Col xl={12}>
        <Form.Item
        label="Số nhà"
        name="street"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số nhà!',
          },
        ]}
      >
        <Input placeholder="Số nhà" className="formAddress__input"/>
      </Form.Item>
      
        </Col>
      </Row>
    </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Checkout;
