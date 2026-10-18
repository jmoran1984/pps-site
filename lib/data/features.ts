import {
    MessageSquareText,
    Wrench,
    MapPinned,
} from "lucide-react";

import { Feature } from "../types/feature";

export const features: Feature[] = [
    {
        title: "Straightforward Communication",
        description:
            "Understand the issue, your options, and the next steps.",
        icon: MessageSquareText,
    },
    {
        title: "Quality Workmanship",
        description:
            "Careful repairs and installations using dependable materials.",
        icon: Wrench,
    },
    {
        title: "Built for Philadelphia",
        description:
            "Experience with the homes, buildings, and plumbing systems across our city.",
        icon: MapPinned,
    },
];
