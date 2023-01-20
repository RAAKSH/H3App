import React, { Component } from "react";
import CurrencyTableComponent from './CurrencyTableComponent'
import { DownOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu,Image} from "antd";
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: "Coin",
    key: "Coin",
  },
  {
    label: "Exchange",
    key: "Exchange app",
  },
  {
    label: "Swap",
    key: "Swap Part",
  },
{},
  {
    label: "Langauge",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "",
        children: [
          {
            label: "English",
            key: "setting:1",
          },
          {
            label: "Italiano",
            key: "setting:2",
          },
          {
            label: "Nederlands",
            key: "settings:3",
          },
        ],
      }
    ],
    icon: <DownOutlined />,
  },
{},{},
  {
    label: "USD",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "",
        children: [
          {
            label: "EGP",
            key: "egp",
          },
          {
            label: "EOS",
            key: "eos",
          },
          {
            label: "DZD ",
            key: "dzd",
          },
        ],
      }
    ],
    icon: <DownOutlined />,
  },
];

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              
            />

          </Header>

          <Content
            style={{
              padding: "0 50px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-content"
            >
             <CurrencyTableComponent />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            CoinCap Sample Site By Raksha
          </Footer>
        </Layout>
      </div>
    );
  }
}
