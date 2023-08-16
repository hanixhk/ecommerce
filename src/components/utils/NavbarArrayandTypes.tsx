export interface NavbarItemType {
    label: string,
    href:string,
    isDropDown:boolean,
    dropDowndata?:Array<NavbarItemType>,
};

export const NavbarArray:Array<NavbarItemType>=[
    {
        label:"Female",
        href: "/female",
        isDropDown:true,
        dropDowndata:[
            {
            label:"Dresses",
            href:"/female/dresses",
            isDropDown:false,

        },
            {
            label:"T-Shirts",
            href:"/female/t-Shirts",
            isDropDown:false,

        },
            {
            label:"Pents",
            href:"/female/pents",
            isDropDown:false,

        },
            {
            label:"Jackets",
            href:"/female/Jackets",
            isDropDown:false,
        },
        {
            label:"Sweaters",
            href:"/female/sweater",
            isDropDown:false,
        },
        ]
    },
    {
        label:"Male",
        href:"/Male",
        isDropDown:true,
        dropDowndata:[
            {
            label:"Sweaters",
            href:"/male/sweater",
            isDropDown:false,
        },
           {
            label:"Jackets",
            href:"/male/Jackets",
            isDropDown:false,
        },
        ]
    },
    {
        label:"Kids",
        href:"/kids",
        isDropDown:false,
    },
    {
        label:"All products",
        href:"/All products",
        isDropDown:false,
    },
    
]