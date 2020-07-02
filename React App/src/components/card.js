import React, { Fragment } from 'react';
import { Card,Col, Row } from 'antd';

const { Meta } = Card;

class Cards extends React.Component {
  

    render() {
      return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={10}>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://www.ssa-frontend.com/media/1164/react.png" />}
      >
        <Meta title="React Js" description="https://www.reactjs.org/" />
      </Card>
      </Col>
      <br/>
      <Col span={10}>
      <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" />}
    >
      <Meta title="Ant Design" description="https://ant.design/" />
    </Card>
    </Col>
    </Row>
    </div>  
      );
    }
  }
  
  export default Cards;