import { Form, Input, Button, Checkbox,message } from 'antd';
import {useHistory} from 'react-router-dom'
import './index.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const Index = () => {
    const history = useHistory()
  const onFinish = (values) => {
    console.log('Success:', values);
    if(values.username==='admin'&&values.password==='admin'){
        sessionStorage.setItem('user',values.username)
        message.success('登陆成功')
        setTimeout(() => {
        window.location.reload()

        }, 500);
       
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className='wrapper'>
    <Form
    className='form'
      {...layout}
      name="basic"
      initialValues={{
        username:'admin',
        password:'admin',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

   

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>
  );
};

export default Index