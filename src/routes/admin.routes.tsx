
import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";


export type TRoute ={
    path:string,
    element:ReactNode
}
export type TSideberItems ={
    key:string,
    label:ReactNode,
    children?:TSideberItems[];
}
export const adminPaths =[
    {
        name:'Dashboard',
        path:'admin/dashboard',
        element:<AdminDashboard/>
    },{
        name:'users Management',
        children:[
            {
                name:'Create  Admin',
                path:'create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Student',
                path:'create-student',
                element:<CreateStudent/>
            },
        ]
    }
]

// export const adminSidebarItems = adminPaths.reduce((acc:TSideberItems [], item) => {
//     if(item.path && item.name){
//         acc.push({
//             key:item.name,
//             label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         });
//     }
//     if(item.children){
//         acc.push({
//             key:item.name,
//             label: item.name,
//             children: item.children.map((child)=> ({
//                 key:child.name,
//                 label:<NavLink to={`/admin/${child.path}`}>{child.path}</NavLink>
//             }))
            
//         })
//     }
//     return acc;
// },[])

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         });
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element  // This is incorrect
//             });
//         });
//     }
//     return acc;
// }, []);


// const adminPaths = 
//     [
        
//         {
//             path:'dashboard',
//             element:<AdminDashboard/>
//         },
//         {
//             path:'create-student',
//             element:<CreateStudent />
//         },
//         {
//             path:'create-admin',
//             element:<CreateAdmin />
//         },
//         {
//             path:'create-faculty',
//             element:<CreateFaculty />
//         },
//     ] 

// export default adminPaths ;
