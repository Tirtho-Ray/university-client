import { Layout, } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
const { Header, Content} = Layout;

// const items:MenuProps['items'] = [
//   {
//     key: "23",
//     label: "Dashboard",
//   },
//   {
//     key: "2322",
//     label: "Profile",
//   },
//   {
//     key: "23222",
//     label: "user management",
//     children: [
//       {
//         key: "23123",
//         label: "create Admin",
//       },
//       {
//         key: "2376543",
//         label: "Create Student",
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
             <Outlet />
             <h1>hello</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
