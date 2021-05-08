import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, {useState} from 'react'
import { BrowserRouter as Router,  Route,Link,Switch as Switchs,Redirect} from 'react-router-dom'
const { SubMenu } = Menu;
function Index (){
    const [theme,setTheme] = useState('light')
  const [current,setCurrent] = useState(1)
 const  changeTheme = value => {
   
    value?setTheme('dark'):setTheme('light')
  };
 const handleClick = e => {
    console.log('click ', e);
    
    setCurrent(e.key)
  };
    return (
      
        <>
   
   
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="考试">

          <Menu.Item key="1"><Link to='/exam/examing'> 开始考试</Link></Menu.Item>


        </SubMenu>
       
      </Menu>
     
    
      </>
    )
}
export default Index