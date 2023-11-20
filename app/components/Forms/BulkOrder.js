import { useState, useCallback } from "react";
import { Input, Form, Button, Select, Divider, message } from "antd";
const { TextArea } = Input;
import {Modal} from "react-bootstrap";
import { useIntl } from "react-intl";
import { API_URL } from "../../../config/config";

import axios from "axios";
import PhoneInput from 'react-phone-number-input/input'
import { isValidPhoneNumber, formatPhoneNumber  } from 'react-phone-number-input'


const Default = ({
    show,
    setShow,
    routeTo = null
}) => {

   const intl = useIntl();
   const [form] = Form.useForm();
   const [phone, setPhone] = useState();

   
   const onSubmit = async (Data) => {
      Data["email"] = Data.email.toLowerCase();
      Data["origPhoneInput"] = phone;
      var phoneNumber = formatPhoneNumber(phone);
      Data["phone"] = phoneNumber;
      Data["country"] = "IN";
      Data["countryCode"] = "91";
      

      try{
       
        var axiosResponse = await axios.post(`${API_URL}/customers/bulkOrderRequest/`,Data)
                if(axiosResponse && axiosResponse.data){
                    var response = axiosResponse.data;
                    if(!response.success){
                        message.error(response.messagge);
                    }
                    else {
                        message.success("Request Sent Successfully");
                        form.resetFields();
                        setShow(false)
                    }
                }
    }
    catch(error){
        message.error("Some error occured. Please try again after some time")
    }

    console.log(Data);
    return 

   };

   const checkPhoneValidity = (value) =>{
      if(!phone){
         return Promise.reject("Please Enter Phone Number");
      }
      else{
         if(isValidPhoneNumber(phone)){
            return Promise.resolve();
         }
         else{
            return Promise.reject("Please Enter a valid Phone Number");
         }
      }
   }
   return (
    <>
       <Modal 
            show={show} 
            onHide={()=>setShow(false)} 
            backdrop="static"
        >
           <Modal.Header closeButton>
               <Modal.Title>
                   <h4>Bulk Order</h4>
               </Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form onFinish={onSubmit} form={form}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="single-input-item">
                            <Form.Item
                                name="name"
                                rules={[
                                {
                                    required: true,
                                    message: intl.messages["app.pages.common.pleaseFill"],
                                    whitespace: true,
                                },
                                ]}
                            >
                                <Input placeholder="Full Name"/>
                            </Form.Item>
                        </div>
                        <div className="single-input-item">
                            <Form.Item
                                name="businessName"
                            >
                                <Input placeholder="Business Name"/>
                            </Form.Item>
                        </div>
                    
                    
                    
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                    <Form.Item
                                    name="email"
                                    rules={[
                                    {
                                        type: "email",
                                        message: "The input is not valid E-mail!",
                                    }
                                    ]}
                                    >
                                    <Input placeholder="Enter your Email" />
                                    </Form.Item>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                <Form.Item
                                    name="phone"
                                    rules={[
                                    { validator: checkPhoneValidity  },
                                    ]}
                                >
                                    <PhoneInput
                                    country="IN"
                                    placeholder="Enter 10 digit mobile number"
                                    value={phone}
                                    onChange={setPhone}/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="single-input-item">
                        <Form.Item
                            name="city"
                        >
                            <Input placeholder="City"/>
                        </Form.Item>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="single-input-item">
                                <Form.Item
                                    name="productCode"
                                >
                                    <Input placeholder="ProductCode"/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="single-input-item">
                                <Form.Item
                                    name="quantity"
                                >
                                    <Input placeholder="Quantity"/>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="single-input-item">
                        <Form.Item
                            name="comments"
                        >
                            <TextArea placeholder="Comments /Instructions"/>
                        </Form.Item>
                    </div>
                        
                        
                    </div>
                </div>
                
                   <div className="single-input-item">
                    <div className="login-reg-form-meta">
                        <div className="remember-meta">
                            {  <div className="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            className="custom-control-input"
                            id="subnewsletter"
                            />
                            <label
                            className="custom-control-label"
                            htmlFor="subnewsletter"
                            style={{
                                textTransform:"unset",
                                color:"#999"
                            }}
                            >
                            I agree to Terms of Use & Privacy Policy of www.godachi.com
                            </label>
                            </div> }
                        </div>
                    </div>
                   </div>
                   <div className="single-input-item">
                       <Form.Item>
                           <Button className="btn btn-cart2" htmlType="submit"					 
                   style={{ lineHeight: "35px", height: "35px", width: "170px", borderRadius: "5px" }}
                   >
                   Send Request
                           </Button>
                       </Form.Item>
                   </div>
               </Form>
           </Modal.Body>
       </Modal>
    </>
 );
   
};

export default Default;
