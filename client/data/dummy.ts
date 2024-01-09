import { getLocationOrigin } from "next/dist/shared/lib/utils"

export const dummyData = [
    { 
        id:1,
        name: '27Seconds 1', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:2,
        name: '27Seconds 2', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:3,
        name: '27Seconds 3', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:4,
        name: '27Seconds 4', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:5,
        name: '27Seconds 5', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:6,
        name: '27Seconds 6', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:7,
        name: '27Seconds 7', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    {
        id:8,
        name: '27Seconds 8', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:9,
        name: '27Seconds 9', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:10,
        name: '27Seconds 10', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:11,
        name: '27Seconds 11', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:12,
        name: '27Seconds 12', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
    { 
        id:13,
        name: '27Seconds 13', 
        href:"https://27seconds.co.nz/",
        description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
        img: 'images/27Seconds.png', 
        category: 'Wholesale Trade', 
        services:'Wine Wholesaling (Gifts & Events)', 
        impact_area: 'Social inclusion & equity', 
        service_area:'Aotearoa-wide'
    },
        
]

export const dummyLocationList= [
    {value:'aotearoa-wide', label:'Aotearoa-wide'}, 
    {value:'northland', label:'Northland'},
    {value:'auckland', label:'Auckland'},
    {value:'wellington', label:'Wellington'}
]
export const dummyImpactAreaList = [
    {value:'housing', label:'Housing'}, 
    {value:'strong, resilient communities', label:'Strong, resilient communities'}, 
    {value:'social inclusion', label:'Social inclusion'}, 
    {value:'social inclusion', label:'Social inclusion'}, 
]
export const dummyIndustryCategoryList = [
    {value:'manufacturing', label:'Manufacturing'}, 
    {value:'wholesale Trade', label:'Wholesale Trade'},
    {value:'education and traning', label:'Education and traning'},
]
