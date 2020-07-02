import React from 'react';
import './css/menu.css'
import SimpleForm from './simpleform'
import Card from './card'

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';


const { Header, Content, Footer, Sider } = Layout;


class ContentApp extends React.Component {
  

  render() {
    return (
        
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <div className='row'>
        <div className="column">
        <Content style={{ margin: '0 16px' }}>
          <h2 >What's Included</h2>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Card/>
            <br/>
            <p align="left">React JS is an open-source JavaScript library[3] for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing</p>
          </div>
        </Content>
        </div>
        <div className="column">
            <br/>
            <br/>
        <SimpleForm />
        </div>
        
       
        </div>
        <Footer style={{ textAlign: 'center' }}>Copyrights©2020</Footer>
        </Layout>
    );
  }
}

export default ContentApp;