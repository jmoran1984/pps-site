import { NavigationItem } from "../types/navigation";
import { routes } from "@/lib/routes";

export const navigation: NavigationItem[] = [
    {
        label: "Services",
        href: routes.services.root,
    },
    {
        label: "Gallery",
        href: routes.gallery,
    },
    {
        label: "About",
        href: routes.about,
    },
    {
        label: "Contact",
        href: routes.contact,
    },
];