import { Fragment } from "react";
import Router from "next/router";

import { Layout, Menu, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    if (key === "admin") {
      Router.push(`/${key}`);
    } else {
      Router.push(`/admin/${key}`);
    }
  };

  return (
    <Fragment>
      <Layout className="admin">
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu theme="dark" mode="inline" onClick={handleMenuClick}>
            <Menu.Item key="admin" title="Admin Dashboard">
              <Icon type="home" />
              <span className="nav-text">Dashboard</span>
            </Menu.Item>

            <Menu.Item key="recipes" title="Manage Recipes">
              <Icon type="fire" />
              <span className="nav-text">Recipes</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          {/* <Header style={{ background: "#fff", padding: 0 }} /> */}
          <Content className="admin-content">{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; 2020 NamNam The Clumsy Chef Admin
          </Footer>
        </Layout>
      </Layout>
      <style jsx global>{`
        .admin {
          min-height: 100vh;
        }

        .admin .admin-content {
          margin: 24px 16px;
          margin-bottom: 0;
        }
      `}</style>
    </Fragment>
  );
};

export default AdminLayout;
