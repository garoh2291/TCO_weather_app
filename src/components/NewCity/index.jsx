import React from "react";
import "./styles.css";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewCityThunk } from "../../redux/cityReducer/city-reducer";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const NewCity = () => {
  const { cities } = useSelector((state) => state.cities);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCallback = (city) => navigate(city);
  const onFinish = (values) => {
    const newCity = values.city;
    dispatch(addNewCityThunk({ newCity, onFinishFailed, onCallback }));
  };
  const onFinishFailed = (error) => {
    if (!error) {
      message.error("Submit failed!");
    }
    message.error(error);
  };

  return (
    <div className="new_city_wrapper">
      <div className="new_city_form">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
              },
              {
                type: "text",
                warningOnly: true,
              },
              {
                type: "string",
                min: 1,
              },
            ]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
