import { Product1 } from "@/assets/images/images";
import {
    TicketPercent,
    Truck,
    RiPriceTag3Line,
    PanelsTopLeft,
} from "@/assets/icons/icons";

export const couponData = [
    {
        id: "1",
        titel: "Free shipping on all items",
        subTitel: "Summer2020",
        image: Product1,
        usage: 8,
        status: "Active",
        date: "April 12, 2020 - April 20, 2020",
    },
];


export const couponTypes = [
    {
        id: 1,
        title: "Fixed Discount",
        icon: TicketPercent,
    },
    {
        id: 2,
        title: "Percentage Discount",
        icon: PanelsTopLeft,
    },
    {
        id: 3,
        title: "Free Shipping",
        icon: Truck,
    },
    {
        id: 4,
        title: "Price Discount",
        icon: RiPriceTag3Line,
    },
];