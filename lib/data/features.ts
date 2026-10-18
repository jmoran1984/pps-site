import {
    ShieldCheck,
    MessageSquareText,
    Wrench,
    MapPinned,
} from "lucide-react";

import { Feature } from "../types/feature";

export const features: Feature[] = [
    {
        title: "Registered Master Plumber",
        description:
            "Your plumbing work is led by a Philadelphia Registered Master Plumber with the responsibility and accountability that comes with the credential.",
        icon: ShieldCheck,
    },
    {
        title: "Straightforward Communication",
        description:
            "Clear explanations, practical options, and direct communication so you understand the problem and the work being recommended.",
        icon: MessageSquareText,
    },
    {
        title: "Quality Workmanship",
        description:
            "Repairs and installations are approached with proven methods, quality materials, and attention to the details that make the work last.",
        icon: Wrench,
    },
    {
        title: "Built for Philadelphia",
        description:
            "Local plumbing service for Philadelphia homes, businesses, property managers, and the older plumbing systems common throughout the city.",
        icon: MapPinned,
    },
];
