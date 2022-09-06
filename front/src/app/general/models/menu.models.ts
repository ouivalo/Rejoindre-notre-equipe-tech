export interface MenuItems{
    label:string,
    icon:string,
    link?:string,
    items?:MenuItems[],
}

export interface SubMenuItems{
    label:string,
    link:string,
}