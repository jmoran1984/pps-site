import {
    ShieldCheck,
    Clock3,
    Wrench,
    MapPinned,
} from "lucide-react";

import { Feature } from "../types/feature";

export const features: Feature[] = [
    {
        title: "Licensed & Insured",
        description:
            "Work is performed by a Philadelphia Registered Master Plumber and backed by full insurance coverage.",
        icon: ShieldCheck,
    },
    {
        title: "Reliable Scheduling",
        description:
            "Clear communication, dependable scheduling, and prompt arrival windows.",
        icon: Clock3,
    },
    {
        title: "Quality Workmanship",
        description:
            "Professional repairs and installations using proven methods and quality materials.",
        icon: Wrench,
    },
    {
        title: "Focused on Philadelphia",
        description:
            "Serving homeowners, businesses, and property managers throughout Philadelphia.",
        icon: MapPinned,
    },
];
