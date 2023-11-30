import { Avatar, Button, Form, Input, Rate, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import "./rateCustom.scss";
import { dispatch, useSelector } from "../../../../redux/store";
import { createReview, getReview } from "../../../../redux/slices/review";
import { getOneProduct, getProduct } from "../../../../redux/slices/product";
import { useParams } from "react-router";
const RateCustomer = () => {
  const { reviewList } = useSelector((state) => state.review);
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getReview({ pageIndex: 1, pageSize: 100 }));
    dispatch(getProduct({ pageIndex: 1, pageSize: 100 }));
  }, []);
  const productDetail = useSelector((state) => state.product.productDetail);
  const params = useParams<{ id: any }>();
  useEffect(() => {
    if (params) {
      dispatch(getOneProduct(params.id));
    }
  }, [params]);
  const productReviews = reviewList.filter(
    (review) => review.productId === productDetail.id
  );
  console.log("====================================");
  console.log("productReviews", productReviews);
  console.log("====================================");
  const onFinish = async (values:any) => {
    try {
      // Include the product ID in the review data
      const reviewData = { ...values, productId: productDetail.id };
      
      // Dispatch the action to add a review
      await dispatch(createReview(reviewData));

      // Reset the form after successful submission if needed
      // form.resetFields();
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };
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
        initialValues={
          {
            //   remember: true,
          }
        }
        className="formRate"
          onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark="optional"
      >
        <Form.Item
  label="Chọn số sao"
  name="Rating"  // Adjust the name to match the server's expectation
  rules={[
    {
      required: true,
      message: 'Vui lòng chọn số sao!',
    },
  ]}
>
  <Rate allowHalf defaultValue={2.5} className="formRate__icon" />
</Form.Item>
<Form.Item
  label="Nhập đánh giá của bạn"
  name="Comment"  // Adjust the name to match the server's expectation
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập đánh giá!',
    },
  ]}
>
  <Input
    className="formRate__grInput__input"
    style={{
      width: 'calc(100% - 100px)',
    }}
    placeholder="Nhập đánh giá của bạn"
  />
</Form.Item>
<Button className="formRate__grInput__button" type="primary" htmlType="submit">
  Submit
</Button>
      </Form>
      <div className="rate__container">
        <div className="rate__quantity">
          <h2>{productReviews.length} Đánh giá</h2>
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
        {/* <div className="rate__customer">
          {productReviews.map((review) => (
            <div>
              <div>
                <Avatar size={48} icon={<UserOutlined />} />
              </div>
              <div>
                <h3 className="rate__customer__title">{review.reviewId}</h3>
                <Rate
                  disabled
                  defaultValue={5}
                  className="rate__customer__icon"
                />
                <p className="subTitle">{review.comment}</p>
              </div>
            </div>
          ))}
        </div> */}
        {productReviews.map((review) => (
          <div className="rate__customer">
            <div>
              <Avatar size={48} icon={<UserOutlined />} />
            </div>
            <div>
              <h3 className="rate__customer__title">Harvetz</h3>
              <Rate
                disabled
                value={parseFloat(review.rating)}
  allowHalf  // Allow half-star selections
                className="rate__customer__icon"
              />
              <p className="subTitle">
                {review.comment}
              </p>
            </div>
          </div>
        ))}

        <div className="rate__button">
          <Button type="primary" className="buttonItem">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RateCustomer;
