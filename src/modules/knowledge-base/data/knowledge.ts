import { GettingStarted, Settings, Pricing, Commerce } from "@/assets/images/images"

export const knowledgeCards = [
    {
        id: 1,
        title: "Getting Started",
        image: GettingStarted,
        links: [
            "Guide to get started faster",
            "Video tutorials for beginners",
            "Moving to Bolt system",
        ],
        src: "/getting-started"
    },
    {
        id: 2,
        title: "Settings",
        image: Settings,
        links: [
            "Setting up your profile",
            "Changing business name",
            "Changing email address",
        ],
        src: "/settings"

    },
    {
        id: 3,
        title: "Pricing",
        image: Pricing,
        links: [
            "Payment declined",
            "Get a refund",
            "Subscriptions",
        ],
        src: "pricing"

    },
    {
        id: 4,
        title: "Commerce",
        image: Commerce,
        links: [
            "Add products",
            "Selling guide",
            "Create categories",
        ],
        src: "/products"

    },
];