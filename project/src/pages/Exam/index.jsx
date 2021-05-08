import React, { useEffect, useState } from 'react'
import './index.css'
import SubMenu from './SubMenu'
import Examing from './Examing'
import ExamHome from './ExamHome'
import { Layout } from 'antd';
import {BrowserRouter as Router,Route,Link,Switch, Redirect,exact} from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout;

function Index(){
    const logout = ()=>{
        sessionStorage.removeItem('user')
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }
  
    return (
        <div>
          <Router>

            <Layout>
        <Header>
            <h2>学生考试系统</h2>
        <header className='top'>
                <span> 用户名:{sessionStorage.getItem('user')}</span>
               <span style={{color:'blue'}} onClick={logout}>退出登录</span>
            
        </header>
        </Header>
        <Layout>
          <Sider><SubMenu/></Sider>
          <Content>
     
            <Switch>
          <Route exact path='/exam/examing' component={Examing}></Route>
          <Route  path='/exam/examHome' component={ExamHome}></Route>
          <Route path='/exam' >
              <Redirect  to='/exam/examHome' />
          </Route>
          </Switch>
         
        
        

          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
      </Router>
     
    
         
        </div>
    )
}

export default Index