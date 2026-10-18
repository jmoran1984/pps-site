import {
  Construction,
  Droplets,
  Flame,
  Pickaxe,
  Filter,
  Building2,
} from "lucide-react";

import { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "drain-cleaning",

    title: "Drain Cleaning",

    shortDescription:
      "Professional drain cleaning for sinks, tubs, showers, toilets, floor drains, and sewer lines throughout Philadelphia.",

    heroDescription:
      "Whether you're dealing with a slow kitchen sink, a backed-up sewer line, or a stubborn bathroom drain, Philadelphia Plumbing Services provides professional drain cleaning throughout Philadelphia. We identify the cause of the blockage, clear the line safely, and restore proper flow using professional equipment and proven techniques.",

    seoTitle: "Drain Cleaning Philadelphia, PA",

    metaDescription:
      "Professional drain cleaning, sewer cleaning, hydro jetting, and drain inspections throughout Philadelphia for residential and commercial properties.",

    image: "/plumbing-images/drainclean1.webp",

    heroImageAlt:
      "Professional plumber clearing a clogged residential drain in Philadelphia.",

    icon: Construction,

    featured: true,

    category: "both",

    benefits: [
      "Restore proper drain flow",
      "Professional drain cleaning equipment",
      "Camera inspections when needed",
      "Residential and commercial service",
      "Solutions for recurring drain problems",
    ],

    problems: [
      "Slow draining sinks",
      "Kitchen sink drains that won't empty",
      "Toilet backups",
      "Bathtub and shower drains running slowly",
      "Main sewer line backups",
    ],

    process: [
      {
        title: "Inspect",
        description:
          "We evaluate the symptoms and identify where the blockage is occurring.",
      },
      {
        title: "Diagnose",
        description:
          "Professional equipment is used when necessary to locate the source of the problem.",
      },
      {
        title: "Clear",
        description:
          "We safely remove the blockage using the proper drain cleaning method.",
      },
      {
        title: "Test",
        description:
          "Every drain is tested to verify proper flow before the job is complete.",
      },
      {
        title: "Prevent",
        description:
          "We explain what caused the blockage and recommend ways to help prevent future problems.",
      },
    ],

    faqs: [
      {
        question: "How long does drain cleaning usually take?",
        answer:
          "Most residential drain cleaning appointments are completed within one to two hours depending on the severity of the blockage.",
      },
      {
        question: "Do you provide sewer drain cleaning?",
        answer:
          "Yes. We clear residential and commercial sewer lines as well as interior drain piping throughout Philadelphia.",
      },
      {
        question: "Can recurring drain clogs be permanently fixed?",
        answer:
          "Recurring clogs often indicate a larger issue. We identify the underlying cause and recommend the best long-term solution.",
      },
    ],

    relatedServices: [
      "leak-repairs",
      "fixture-repairs",
      "sewer-water-excavation",
    ],
  },

  {
    slug: "fixture-repairs",

    title: "Fixture Repairs",

    shortDescription:
      "Professional repair and replacement of toilets, faucets, sinks, garbage disposals, shower valves, and plumbing fixtures.",

    heroDescription:
      "From leaking faucets and running toilets to broken garbage disposals and damaged sinks, Philadelphia Plumbing Services provides dependable fixture repairs that restore proper operation and help prevent water damage.",

    seoTitle: "Fixture Repair Philadelphia, PA",

    metaDescription:
      "Professional plumbing fixture repairs including toilets, faucets, sinks, shower valves, and garbage disposals throughout Philadelphia.",

    image: "/plumbing-images/fixture1.webp",

    heroImageAlt: "Plumber repairing a residential bathroom sink faucet.",

    icon: Construction,

    featured: true,

    category: "residential",

    benefits: [
      "Professional fixture repairs",
      "Replacement parts installed correctly",
      "Improve water efficiency",
      "Prevent leaks and water damage",
      "Quality workmanship",
    ],

    problems: [
      "Running toilets",
      "Leaking faucets",
      "Loose kitchen sinks",
      "Broken garbage disposals",
      "Dripping shower valves",
    ],

    process: [
      {
        title: "Inspect",
        description:
          "We inspect the plumbing fixture and determine the cause of the failure.",
      },
      {
        title: "Diagnose",
        description:
          "Any worn or damaged components are identified before repairs begin.",
      },
      {
        title: "Repair",
        description:
          "We repair or replace the faulty components using quality plumbing parts.",
      },
      {
        title: "Test",
        description:
          "The fixture is thoroughly tested to ensure proper operation and leak-free performance.",
      },
      {
        title: "Clean Up",
        description:
          "We clean the work area and leave your home just as we found it.",
      },
    ],

    faqs: [
      {
        question: "Do you repair toilets?",
        answer:
          "Yes. We repair and replace toilets, fill valves, flush valves, wax rings, and other common toilet components.",
      },
      {
        question: "Can you replace faucets?",
        answer:
          "Absolutely. We install and replace kitchen, bathroom, laundry, and utility faucets.",
      },
      {
        question: "Do you repair garbage disposals?",
        answer:
          "Yes. We repair and replace garbage disposals when repair is no longer practical.",
      },
    ],

    relatedServices: ["leak-repairs", "water-heaters", "drain-cleaning"],
  },

  {
    slug: "leak-repairs",

    title: "Leak Repairs",

    shortDescription:
      "Fast, professional leak detection and plumbing repairs for homes and businesses throughout Philadelphia.",

    heroDescription:
      "Even a small plumbing leak can lead to costly water damage if ignored. Philadelphia Plumbing Services quickly locates leaking pipes, fixtures, and plumbing systems before making dependable repairs that protect your property.",

    seoTitle: "Leak Repair Philadelphia, PA",

    metaDescription:
      "Professional plumbing leak repairs including leaking pipes, fixtures, water lines, and emergency plumbing repairs throughout Philadelphia.",

    image: "/plumbing-images/leak1.webp",

    heroImageAlt: "Licensed plumber repairing a leaking copper water line.",

    icon: Droplets,

    featured: true,

    category: "both",

    benefits: [
      "Fast leak detection",
      "Prevent costly water damage",
      "Professional pipe repairs",
      "Residential and commercial service",
      "Long-lasting plumbing repairs",
    ],

    problems: [
      "Water leaking from pipes",
      "Ceiling water stains",
      "Hidden plumbing leaks",
      "High water bills",
      "Dripping plumbing fixtures",
    ],

    process: [
      {
        title: "Locate",
        description:
          "We identify the exact source of the leak before beginning repairs.",
      },
      {
        title: "Inspect",
        description:
          "The surrounding plumbing system is evaluated for additional issues.",
      },
      {
        title: "Repair",
        description:
          "Damaged piping or fixtures are professionally repaired or replaced.",
      },
      {
        title: "Pressure Test",
        description:
          "Repairs are tested to ensure the leak has been completely eliminated.",
      },
      {
        title: "Verify",
        description:
          "We confirm your plumbing system is operating safely before completing the job.",
      },
    ],

    faqs: [
      {
        question: "Should I repair a small leak right away?",
        answer:
          "Yes. Even a slow leak can cause structural damage, mold growth, and increased water bills over time.",
      },
      {
        question: "Do you repair hidden pipe leaks?",
        answer:
          "Yes. We locate and repair leaks in walls, ceilings, crawl spaces, and exposed plumbing systems.",
      },
      {
        question: "Do you provide emergency leak repairs?",
        answer:
          "Yes. We respond quickly to active plumbing leaks to help minimize property damage.",
      },
    ],

    relatedServices: ["fixture-repairs", "water-services", "drain-cleaning"],
  },
  {
    slug: "water-services",

    title: "Water Service Replacement",

    shortDescription:
      "Professional water service repair and replacement from the water main to your home or business throughout Philadelphia.",

    heroDescription:
      "Whether you're dealing with low water pressure, an aging galvanized water service, or an underground leak, Philadelphia Plumbing Services provides professional water service repair and replacement. We install durable, code-compliant water service lines built to provide reliable water for years to come.",

    seoTitle: "Water Service Replacement Philadelphia, PA",

    metaDescription:
      "Professional water service repair and replacement throughout Philadelphia including underground water line repairs and complete service replacements.",

    image: "/plumbing-images/waterservice1.webp",

    heroImageAlt:
      "Licensed plumber replacing an underground residential water service line.",

    icon: Droplets,

    featured: true,

    category: "both",

    benefits: [
      "Improve household water pressure",
      "Replace aging or damaged water service lines",
      "Code-compliant installations",
      "Durable materials built to last",
      "Residential and commercial water services",
    ],

    problems: [
      "Low water pressure",
      "Leaking underground water service",
      "Old galvanized water lines",
      "Discolored water",
      "Unexpected increases in water bills",
    ],

    process: [
      {
        title: "Evaluate",
        description:
          "We inspect your existing water service and determine whether repair or replacement is the best solution.",
      },
      {
        title: "Plan",
        description:
          "The replacement is planned to meet current plumbing codes while minimizing disruption to your property.",
      },
      {
        title: "Replace",
        description:
          "We install a new water service using durable materials and professional installation practices.",
      },
      {
        title: "Pressure Test",
        description:
          "The new water line is pressure tested to verify proper operation and leak-free performance.",
      },
      {
        title: "Restore",
        description:
          "Excavated areas are safely backfilled and the work area is left clean upon completion.",
      },
    ],

    faqs: [
      {
        question: "How do I know if my water service needs to be replaced?",
        answer:
          "Low water pressure, recurring underground leaks, aging galvanized piping, and discolored water are common signs that replacement may be necessary.",
      },
      {
        question: "Do you replace residential and commercial water services?",
        answer:
          "Yes. We perform water service replacements for both residential and commercial properties throughout Philadelphia.",
      },
      {
        question: "Will excavation be required?",
        answer:
          "Most water service replacements require excavation to access the underground water line. We perform the excavation and restoration as part of the project.",
      },
    ],

    relatedServices: [
      "sewer-water-excavation",
      "leak-repairs",
      "water-filtration",
    ],
  },
  {
    slug: "water-heaters",

    title: "Water Heaters",

    shortDescription:
      "Professional installation, replacement, and repair of traditional and tankless water heaters throughout Philadelphia.",

    heroDescription:
      "Whether your water heater has stopped producing hot water or you're ready to upgrade to a more efficient system, Philadelphia Plumbing Services installs and replaces both traditional and tankless water heaters with quality workmanship and dependable service.",

    seoTitle: "Water Heater Installation Philadelphia, PA",

    metaDescription:
      "Professional water heater installation, repair, and replacement including gas, electric, and tankless water heaters throughout Philadelphia.",

    image: "/plumbing-images/waterheater1.webp",

    heroImageAlt:
      "New residential gas water heater professionally installed in a utility room.",

    icon: Flame,

    featured: true,

    category: "residential",

    benefits: [
      "Reliable hot water every day",
      "Energy-efficient replacement options",
      "Traditional and tankless systems",
      "Professional code-compliant installation",
      "Long-lasting equipment",
    ],

    problems: [
      "No hot water",
      "Water heater leaks",
      "Rust-colored hot water",
      "Strange noises from the tank",
      "Inconsistent water temperature",
    ],

    process: [
      {
        title: "Inspect",
        description:
          "We evaluate your current water heater and discuss the best replacement or repair options.",
      },
      {
        title: "Recommend",
        description:
          "We help you choose the right size and type of water heater for your household or business.",
      },
      {
        title: "Install",
        description:
          "Your new water heater is professionally installed according to current plumbing and fuel gas codes.",
      },
      {
        title: "Test",
        description:
          "The system is tested to ensure safe operation, proper venting, and reliable hot water delivery.",
      },
      {
        title: "Review",
        description:
          "We explain basic maintenance and answer any questions before completing the installation.",
      },
    ],

    faqs: [
      {
        question: "Do you install tankless water heaters?",
        answer:
          "Yes. We install both traditional tank-style and modern tankless water heater systems.",
      },
      {
        question: "How long does a water heater typically last?",
        answer:
          "Most residential water heaters last between 8 and 15 years depending on water quality, maintenance, and usage.",
      },
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "We'll inspect the unit and recommend the most cost-effective option based on its age, condition, and repair history.",
      },
    ],

    relatedServices: ["water-filtration", "fixture-repairs", "leak-repairs"],
  },
  {
    slug: "water-filtration",

    title: "Water Filtration",

    shortDescription:
      "Whole-home water filtration systems that improve water quality, protect plumbing fixtures, and provide cleaner drinking water.",

    heroDescription:
      "Clean water starts with the right filtration system. Philadelphia Plumbing Services installs professionally selected water filtration equipment that helps reduce sediment, contaminants, odors, and mineral buildup while protecting your plumbing system.",

    seoTitle: "Water Filtration Systems Philadelphia, PA",

    metaDescription:
      "Professional whole-home water filtration system installation throughout Philadelphia including drinking water filtration and water quality solutions.",

    image: "/plumbing-images/waterfilter1.webp",

    heroImageAlt:
      "Whole-home water filtration system professionally installed on a residential water line.",

    icon: Filter,

    featured: false,

    category: "residential",

    benefits: [
      "Cleaner drinking water",
      "Reduce sediment and contaminants",
      "Improve taste and odor",
      "Protect plumbing fixtures and appliances",
      "Whole-home filtration options available",
    ],

    problems: [
      "Poor tasting drinking water",
      "Hard water buildup",
      "Sediment in household water",
      "Unpleasant odors",
      "Mineral deposits on plumbing fixtures",
    ],

    process: [
      {
        title: "Evaluate",
        description:
          "We discuss your water quality concerns and recommend the appropriate filtration solution.",
      },
      {
        title: "Select",
        description:
          "The right filtration system is chosen based on your home's plumbing and water usage.",
      },
      {
        title: "Install",
        description:
          "We professionally install the filtration system and integrate it with your plumbing system.",
      },
      {
        title: "Test",
        description:
          "The installation is tested to ensure proper operation and water flow throughout the home.",
      },
      {
        title: "Maintain",
        description:
          "We explain filter replacement schedules and maintenance recommendations to maximize system performance.",
      },
    ],

    faqs: [
      {
        question: "Do whole-home filtration systems reduce hard water?",
        answer:
          "Depending on the system selected, filtration equipment can reduce sediment, contaminants, and certain minerals. We recommend the right solution based on your water quality goals.",
      },
      {
        question: "Will a filtration system affect my water pressure?",
        answer:
          "A properly sized and professionally installed filtration system should provide excellent water quality while maintaining normal household water pressure.",
      },
      {
        question: "How often do filters need to be replaced?",
        answer:
          "Replacement schedules vary depending on the type of filtration system and your household's water usage. We'll explain the recommended maintenance interval for your system.",
      },
    ],

    relatedServices: ["water-heaters", "water-services", "fixture-repairs"],
  },
  {
    slug: "sewer-water-excavation",

    title: "Sewer & Water Excavation",

    shortDescription:
      "Professional excavation for underground sewer and water line repairs, replacements, and new installations throughout Philadelphia.",

    heroDescription:
      "Underground plumbing problems require the right equipment and experience. Philadelphia Plumbing Services performs professional sewer and water excavations for damaged underground piping, service replacements, and new utility installations while minimizing disruption to your property.",

    seoTitle: "Sewer & Water Excavation Philadelphia, PA",

    metaDescription:
      "Professional sewer and water excavation services including underground utility repairs, replacements, and new installations throughout Philadelphia.",

    image: "/plumbing-images/excavation1.webp",

    heroImageAlt:
      "Mini excavator exposing an underground residential water service line for replacement.",

    icon: Pickaxe,

    featured: false,

    category: "both",

    benefits: [
      "Professional excavation equipment",
      "Safe underground utility work",
      "Code-compliant installations",
      "Complete repair and replacement services",
      "Residential and commercial projects",
    ],

    problems: [
      "Collapsed sewer lines",
      "Underground water leaks",
      "Broken sewer piping",
      "Failed underground water services",
      "Excavation required for plumbing repairs",
    ],

    process: [
      {
        title: "Locate",
        description:
          "We evaluate the underground plumbing system and identify the affected utilities.",
      },
      {
        title: "Plan",
        description:
          "The excavation is planned to safely access the damaged piping while minimizing disruption.",
      },
      {
        title: "Excavate",
        description:
          "Professional excavation equipment is used to expose the affected plumbing system.",
      },
      {
        title: "Repair",
        description:
          "Damaged sewer or water piping is repaired or replaced using quality materials.",
      },
      {
        title: "Restore",
        description:
          "The excavation is backfilled, compacted, and the property is restored as cleanly as possible.",
      },
    ],

    faqs: [
      {
        question: "Do all underground plumbing repairs require excavation?",
        answer:
          "Not always. We'll determine whether excavation is necessary after evaluating the plumbing system and discussing the available repair options.",
      },
      {
        question: "Do you replace underground sewer lines?",
        answer:
          "Yes. We repair and replace damaged underground sewer and water lines for residential and commercial properties.",
      },
      {
        question: "Will my yard be restored after excavation?",
        answer:
          "Yes. After completing the plumbing work, excavated areas are safely backfilled and restored as part of the project.",
      },
    ],

    relatedServices: ["water-services", "drain-cleaning", "leak-repairs"],
  },
  {
    slug: "sump-pumps",

    title: "Sump Pumps",

    shortDescription:
      "Professional sump pump installation, replacement, repair, and battery backup systems for homes throughout Philadelphia.",

    heroDescription:
      "A dependable sump pump is one of the best defenses against basement flooding. Philadelphia Plumbing Services installs, repairs, and replaces sump pumps and battery backup systems to help protect your home during heavy rain and power outages.",

    seoTitle: "Sump Pump Installation Philadelphia, PA",

    metaDescription:
      "Professional sump pump installation, repair, replacement, and battery backup systems throughout Philadelphia.",

    image: "/plumbing-images/sumppump1.webp",

    heroImageAlt:
      "New residential sump pump installed inside a basement sump pit.",

    icon: Droplets,

    featured: true,

    category: "residential",

    benefits: [
      "Protect your basement from flooding",
      "Battery backup systems available",
      "Professional installation",
      "Reliable pump replacements",
      "Peace of mind during heavy storms",
    ],

    problems: [
      "Flooded basements",
      "Failed sump pumps",
      "Power outages during storms",
      "Standing water in sump pits",
      "Old or unreliable sump pump systems",
    ],

    process: [
      {
        title: "Inspect",
        description:
          "We evaluate the existing sump pit, discharge piping, and pump performance.",
      },
      {
        title: "Recommend",
        description:
          "We recommend the right sump pump or battery backup system for your home's needs.",
      },
      {
        title: "Install",
        description:
          "Your new sump pump is professionally installed and connected to the discharge system.",
      },
      {
        title: "Test",
        description:
          "We thoroughly test the pump to verify proper operation and drainage.",
      },
      {
        title: "Review",
        description:
          "We explain routine maintenance and answer any questions before completing the job.",
      },
    ],

    faqs: [
      {
        question: "Should I install a battery backup sump pump?",
        answer:
          "A battery backup system helps keep your sump pump operating during power outages, providing additional protection when it's needed most.",
      },
      {
        question: "How long do sump pumps typically last?",
        answer:
          "Most sump pumps last around 7 to 10 years, depending on usage, maintenance, and water conditions.",
      },
      {
        question: "Can you replace an existing sump pump?",
        answer:
          "Yes. We replace worn or failed sump pumps and can recommend an upgraded system if needed.",
      },
    ],

    relatedServices: ["leak-repairs", "fixture-repairs", "water-services"],
  },
  {
    slug: "new-construction-rough-ins",

    title: "New Construction Rough-Ins",

    shortDescription:
      "Professional plumbing rough-ins for new homes, additions, renovations, and commercial construction projects.",

    heroDescription:
      "Philadelphia Plumbing Services provides complete plumbing rough-in installations for residential and commercial construction projects. We work closely with contractors, builders, and property owners to ensure plumbing systems are installed accurately, efficiently, and in compliance with local codes.",

    seoTitle: "Plumbing Rough-Ins Philadelphia, PA",

    metaDescription:
      "Professional plumbing rough-ins for residential and commercial construction projects throughout Philadelphia.",

    image: "/plumbing-images/roughconstruction1.webp",

    heroImageAlt:
      "Licensed plumber installing rough-in water and drain piping during new construction.",

    icon: Construction,

    featured: false,

    category: "both",

    benefits: [
      "Code-compliant plumbing installations",
      "Residential and commercial construction",
      "Coordination with contractors",
      "Quality workmanship",
      "Reliable project scheduling",
    ],

    problems: [
      "New home construction",
      "Building additions",
      "Major remodeling projects",
      "Commercial tenant fit-outs",
      "Complete plumbing system installations",
    ],

    process: [
      {
        title: "Review",
        description:
          "We review construction plans and coordinate with the builder or contractor.",
      },
      {
        title: "Layout",
        description:
          "Water, waste, and vent piping locations are carefully planned before installation.",
      },
      {
        title: "Install",
        description:
          "The complete plumbing rough-in system is installed according to approved plans and plumbing code.",
      },
      {
        title: "Inspect",
        description:
          "Required inspections are completed before walls are closed.",
      },
      {
        title: "Prepare",
        description:
          "The plumbing system is prepared for the finish phase of construction.",
      },
    ],

    faqs: [
      {
        question: "Do you work directly with general contractors?",
        answer:
          "Yes. We coordinate with builders, contractors, and property owners throughout every stage of the project.",
      },
      {
        question: "Can you rough-in plumbing for additions and renovations?",
        answer:
          "Absolutely. We perform plumbing rough-ins for new construction, additions, remodels, and commercial projects.",
      },
      {
        question: "Are rough-ins installed to current plumbing code?",
        answer:
          "Yes. All plumbing installations are completed in accordance with applicable plumbing codes and inspection requirements.",
      },
    ],

    relatedServices: [
      "commercial-plumbing",
      "water-services",
      "fixture-repairs",
    ],
  },
  {
    slug: "commercial-plumbing",

    title: "Commercial Plumbing",

    shortDescription:
      "Reliable commercial plumbing services for offices, restaurants, retail spaces, property managers, and commercial facilities throughout Philadelphia.",

    heroDescription:
      "Philadelphia Plumbing Services provides dependable commercial plumbing solutions designed to minimize downtime and keep your business operating efficiently. From repairs and maintenance to plumbing upgrades and tenant improvements, we deliver professional service you can count on.",

    seoTitle: "Commercial Plumbing Philadelphia, PA",

    metaDescription:
      "Commercial plumbing services throughout Philadelphia including repairs, maintenance, tenant improvements, and plumbing system upgrades.",

    image: "/plumbing-images/commercial.webp",

    heroImageAlt:
      "Commercial plumber servicing plumbing equipment inside a commercial building.",

    icon: Building2,

    featured: true,

    category: "commercial",

    benefits: [
      "Fast response for commercial properties",
      "Minimal disruption to business operations",
      "Licensed and insured professionals",
      "Preventative maintenance available",
      "Repairs, upgrades, and installations",
    ],

    problems: [
      "Commercial plumbing leaks",
      "Restroom plumbing issues",
      "Drain backups",
      "Broken plumbing fixtures",
      "Water supply problems",
    ],

    process: [
      {
        title: "Assess",
        description:
          "We evaluate your plumbing system and discuss the needs of your facility.",
      },
      {
        title: "Plan",
        description:
          "The repair or installation is scheduled to minimize downtime whenever possible.",
      },
      {
        title: "Perform",
        description:
          "Professional plumbing work is completed safely and efficiently by experienced technicians.",
      },
      {
        title: "Test",
        description:
          "All plumbing systems are tested to ensure proper operation before completion.",
      },
      {
        title: "Support",
        description:
          "We remain available for future service, maintenance, and plumbing upgrades.",
      },
    ],

    faqs: [
      {
        question:
          "Do you provide plumbing services for restaurants and retail spaces?",
        answer:
          "Yes. We provide commercial plumbing services for offices, restaurants, retail locations, warehouses, property managers, and other commercial facilities.",
      },
      {
        question: "Can commercial work be scheduled outside business hours?",
        answer:
          "Whenever possible, we work with customers to schedule plumbing services at times that minimize disruptions to daily operations.",
      },
      {
        question: "Do you perform commercial plumbing maintenance?",
        answer:
          "Yes. We provide repairs, maintenance, and plumbing upgrades for commercial properties throughout Philadelphia.",
      },
    ],

    relatedServices: [
      "new-construction-rough-ins",
      "sewer-water-excavation",
      "leak-repairs",
    ],
  },
];
