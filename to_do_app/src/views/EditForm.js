import React from "react";
import { Form, Button, Input, message } from "antd";
import Axios from "axios";
import { browserHistory } from "react-router-dom";


const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

const EditForm = ({ match }) => {  
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFailed = (error) => {
    message.error("An error occured during data entry!");
  };

  const onSubmit = async (values) => {
    console.log(values);
    Axios.put(`http://localhost:4300/tasks/${match.params.id}`, values); //updateing the selected task using ID passed from details screen and PUT method
  };
  

  return (
    <div className="bg-light p-3">
      <h3 className="pb-2 text-center">
        <strong>Editing Task {match.params.id}</strong>
      </h3>

      <div className="pt-3 pb-3 justify-content-center">
        {/* form used was ant design form template, with some customization using bootstrap */}
        <Form
          className="d-flex-direction-column justify-content-center form-group "
          {...layout}
          onFinish={onFinish} 
          onFinishFailed={onFailed}
        >
          <div className="pb-5 text-center">
          <label>Task Title</label>           
           <Form.Item name="name" className="mb-1">
              <Input className="form-control" type="text" />
            </Form.Item>

            <label>Description</label>
            <Form.Item name="description" className="mb-1">
              <Input className="form-control" type="text-area" rows="3" />
            </Form.Item>

            <label>Created</label>
            <Form.Item name="creation" className="mb-1">
              <Input className="form-control" type="date" />
            </Form.Item>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-primary pl-5 pr-5"
              type="button"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditForm;
