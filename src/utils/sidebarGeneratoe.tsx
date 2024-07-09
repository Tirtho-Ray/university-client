import { ReactNode } from "react";
import {TUserPaths } from "../types";
import { NavLink } from "react-router-dom";




export type TSideberItems ={
    key:string,
    label:ReactNode,
    children?:TSideberItems[];
}
export const sidebarGenerate =(items:TUserPaths [],role)=>{
   const SidebarItemes = items.reduce((acc: TSideberItems[], item) => {
        if(item.path && item.name){
            acc.push({
                key:item.name,
                label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            });
        }
        if(item.children){
            acc.push({
                key:item.name,
                label: item.name,
                children: item.children.map((child)=> ({
                    key:child.name,
                    label:<NavLink to={`/${role}/${child.path}`}>{child.path}</NavLink>
                }))
                
            })
        }
        return acc;
    },[])

    return SidebarItemes;

}