import { Checkbox, Col, Collapse, InputNumber, Row, Slider } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import React, { useEffect, useState } from "react";
import "./Product.scss";
import { FilterOutlined } from '@ant-design/icons';
import CardComponent from "../../card-component/CardComponent";
import { dispatch, useSelector } from "../../../../redux/store";
import { getCategory } from "../../../../redux/slices/category";
import { getBrand } from "../../../../redux/slices/brand";

const danhMucOptions = ["Option 1", "Option 2", "Option 3"];
const ProductShop = () => {
  const [disabled, setDisabled] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 20]);
  const {categoryList} = useSelector(state => state.category)
  const {productList} = useSelector(state => state.product)
  const {brandList} = useSelector(state => state.brand)
  useEffect(() => {
    dispatch(getCategory({ pageIndex: 1, pageSize: 100 }));
    dispatch(getBrand({ pageIndex: 1, pageSize: 100 }));
    dispatch(getBrand({ pageIndex: 1, pageSize: 100 }));
  }, []);
  
  const onPriceChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const onInputNumberChange = (value: number | null, index: number) => {
    if (value !== null && value !== undefined) {
      setPriceRange((prevRange) => {
        const updatedPriceRange = [...prevRange]; // Create a copy of the array
        updatedPriceRange[index] = value; // Update the specified index
        return updatedPriceRange as [number, number]; // Return the updated array with the correct type
      });
    }
  };
  return (
    <div className="containerCustom product sectionCustom">
      <Row gutter={[24, 0]}>
        <Col xl={6}>
          <p className="subTitle">Bộ lọc <FilterOutlined /></p>
          <Collapse defaultActiveKey={["1"]} className="product__collapse">
            <CollapsePanel header="Danh mục" key="1">
              <Checkbox.Group
                options={categoryList.map(category => ({
                  label: category.name,
                  value: category.id
                }))}
                className="product__checkbox"
              />
            </CollapsePanel>
            <CollapsePanel header="Thương hiệu" key="2">
              <Checkbox.Group
                options={brandList.map(brand => ({
                  label: brand.name,
                  value: brand.id
                }))}
                className="product__checkbox"
              />
            </CollapsePanel>
            <CollapsePanel header="Giá" key="3">
              <Row>
                <Col xl={24} className="product__price">
                  <Col span={12}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: "0 16px" }}
                      value={priceRange[0]}
                      onChange={(value) => onInputNumberChange(value, 0)}
                    />
                  </Col>
                  <Col span={12}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: "0 16px" }}
                      value={priceRange[1]}
                      onChange={(value) => onInputNumberChange(value, 1)}
                    />
                  </Col>
                </Col>
                <Col xl={24}>
                  <Slider
                    range
                    min={1}
                    max={20}
                    onChange={onPriceChange}
                    value={priceRange}
                  />
                </Col>
              </Row>
            </CollapsePanel>
            <CollapsePanel header="Tình trạng" key="4">
            <Checkbox.Group
                options={danhMucOptions}
                className="product__checkbox"
              />
            </CollapsePanel>
          </Collapse>
        </Col>
        <Col xl={18}>
        <Row gutter={[24, 24]}>
      {productList.map((product, index) => {
        const brand = brandList.find(brand => brand.id === product.brandId);

        return (
          <Col key={index} xl={8}>
            <CardComponent
              name={product.productName}
              brand={brand ? brand.name : 'Unknown Brand'}
              price={product.price}
            />
          </Col>
        );
      })}
    </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductShop;
