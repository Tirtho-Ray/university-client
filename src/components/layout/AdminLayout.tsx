import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <h1>Admin lYut</h1> navberh1
            
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;