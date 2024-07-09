import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarGenerate } from "../../utils/sidebarGeneratoe";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";


const UserRole = {
    ADMIN :'admin',
    FACULTY :'faculty',
    STUDENT :'student',
}
const Sidebar = () => {

    const role = 'admin';
    let sidebarItems;
    switch(role){
        case UserRole.ADMIN:
           sidebarItems= sidebarGenerate(adminPaths,UserRole.ADMIN)
            break;
        case UserRole.FACULTY:
           sidebarItems= sidebarGenerate(facultyPaths,UserRole.FACULTY)
            break;
        case UserRole.STUDENT:
           sidebarItems= sidebarGenerate(adminPaths,UserRole.STUDENT)
            break;

        default:
            break;
    }

    return (
        <div>
            <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="text-2xl text-white font-bold text-center mt-2">
            <h1 className="text-center">University x</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems}
          />
        </Sider>
        </div>
    );
};

export default Sidebar;