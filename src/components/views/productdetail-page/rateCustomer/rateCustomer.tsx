import { Avatar, Button, Form, Input, Rate, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import "./rateCustom.scss";
const RateCustomer = () => {
  return (
    <div className="rate">
      <h2 className="title rate__title">Đánh giá từ khách hàng</h2>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
        //   remember: true,
        }}
        className="formRate"
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark="optional"
      >
        <Form.Item label="Chọn số sao" name="rate">
          <Rate allowHalf defaultValue={2.5} className="formRate__icon" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đánh giá!",
            },
          ]}
        >
          <Input.Group compact className="formRate__grInput">
            <Input
              className="formRate__grInput__input"
              style={{
                width: "calc(100% - 100px)",
              }}
              placeholder="Nhập đánh giá của bạn"
            />
            <Button
              className="formRate__grInput__button"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Input.Group>
        </Form.Item>
      </Form>
      <div className="rate__container">
      <div className="rate__quantity">
        <h2>11 Đánh giá</h2>
        <Select
          className="rate__quantity__select"
          style={{ width: "150px" }}
          showSearch
          placeholder="Hiển thị"
          optionFilterProp="children"
          // onChange={onChange}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Mới nhất",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>
      <div className="rate__customer">
        <div>
        <Avatar size={48} icon={<UserOutlined />} />
            
        </div>
        <div >
          <h3 className="rate__customer__title">Harvetz</h3>
          <Rate disabled defaultValue={5} className="rate__customer__icon" />
          <p className="subTitle">
            Tôi đã sở hữu chiếc đồng hồ này trong một khoảng thời gian và nó đã
            chứng minh sự đáng giá của nó. Đầu tiên, tôi rất ấn tượng với thiết
            kế ngoại hình. Vỏ thép không gỉ và kính sapphire không chỉ làm cho
            chiếc đồng hồ trở nên sang trọng mà còn đảm bảo độ bền và chống trầy
            tốt. Dây đeo da thật cũng tạo cảm giác thoải mái và đẳng cấp khi
            đeo.
          </p>
        </div>
      </div>
      <div className="rate__customer">
        <div>
        <Avatar size={48} icon={<UserOutlined />} />
            
        </div>
        <div >
          <h3 className="rate__customer__title">Harvetz</h3>
          <Rate disabled defaultValue={5} className="rate__customer__icon" />
          <p className="subTitle">
            Tôi đã sở hữu chiếc đồng hồ này trong một khoảng thời gian và nó đã
            chứng minh sự đáng giá của nó. Đầu tiên, tôi rất ấn tượng với thiết
            kế ngoại hình. Vỏ thép không gỉ và kính sapphire không chỉ làm cho
            chiếc đồng hồ trở nên sang trọng mà còn đảm bảo độ bền và chống trầy
            tốt. Dây đeo da thật cũng tạo cảm giác thoải mái và đẳng cấp khi
            đeo.
          </p>
        </div>
      </div>
      <div className="rate__button">
         <Button type="primary" className="buttonItem">Xem thêm</Button>
      </div>
      </div>
     
    </div>
  );
};

export default RateCustomer;
