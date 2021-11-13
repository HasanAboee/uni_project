import React from "react";
import "antd/dist/antd.css";
import "./content.module.css";
import FigureList from '../Lasting_Figuers/Figure_List';
import {getAllFigures} from '../../dummy_data'
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const AllFaces = getAllFigures();
function content() {
return (
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <FigureList figures={AllFaces}/>
          </Content>
        
)}
export default content;
