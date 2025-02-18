import { ReactNode } from "react";

export type TRoutes={
    path:string,
    element:ReactNode
}
type TUserPaths ={
    name:string,
    path?:string,
    element?:ReactNode,
    children?: TUserPaths []
}
export const routeGenerator = (items : TUserPaths[]) => {
     const routes = items.reduce((acc: TRoutes[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            });
        }
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element  // This is incorrect
                });
            });
        }
        return acc;
    }, []);
    return routes;
};
