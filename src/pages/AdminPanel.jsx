import { useState, useEffect } from "react";
import "../admin_Scss/adminPanel.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ScheduleOutlined,
  TeamOutlined,
  BookOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import SpeakersSection from "../admin_components/SpeakersSection";
import OrganizersSection from "../admin_components/OrganizersSection";
import BooksSection from "../admin_components/BooksSection";
import ScheduleSection from "../admin_components/ScheduleSection";
import LanguageSelector from "../admin_components/LanguageSelector";

const { Header, Sider, Content } = Layout;

export default function AdminPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1"); // Track selected menu item
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Redirect to /admin/login if no login data is stored
  useEffect(() => {
    const loginKeys = sessionStorage.getItem("loginKeys");
    if (!loginKeys) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <SpeakersSection />;
      case "2":
        return <OrganizersSection />;
      case "3":
        return <BooksSection />;
      case "4":
        return <ScheduleSection />;
      case "5":
        return <LanguageSelector />;
      default:
        return <h2>Select a category</h2>;
    }
  };

  return (
    <div className="Admin">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedKey]}
            onClick={({ key }) => setSelectedKey(key)}
            items={[
              { key: "1", icon: <UserOutlined />, label: "Speakers" },
              { key: "2", icon: <TeamOutlined />, label: "Organizers" },
              { key: "3", icon: <BookOutlined />, label: "Books" },
              { key: "4", icon: <ScheduleOutlined />, label: "Schedules" },
              { key: "5", icon: <FileOutlined />, label: "Language" },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: "0 16px",
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h1 style={{ marginLeft: "20px" }}>Admin Panel of Apasl</h1>
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
