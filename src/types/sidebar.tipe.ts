import { ReactNode } from "react"


export type TRoutes={
    path:string,
    element:ReactNode
}
export type TUserPaths ={
    name:string,
    path?:string,
    element?:ReactNode,
    children?: TUserPaths []
}

export type TSideberItems ={
    key:string,
    label:ReactNode,
    children?:TSideberItems[];
}