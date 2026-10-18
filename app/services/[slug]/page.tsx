import { notFound } from "next/navigation";
import { getService } from "@/lib/utils/getService";

import { services } from "@/lib/data/services";


import { Metadata } from "next";
import { site } from "@/lib/config/site";

import Navbar from "@/app/components/layout/Navbar";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProblems from "@/app/components/services/ServiceProblems";
import ServiceFAQ from "@/app/components/services/ServiceFAQ";
import Footer from "@/app/components/layout/Footer";
import RelatedServices from "@/app/components/services/RelatedServices";
import ServiceCallout from "@/app/components/services/ServiceCallout";
import ServiceAreas from "@/app/components/services/ServiceAreas";
import ServiceSchema from "@/app/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import FAQSchema from "@/app/components/seo/FAQSchema";
import OrganizationSchema from "@/app/components/seo/OrganizationSchema";


export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {

    const { slug } = await params;

    const service = getService(slug);

    if (!service) {
        return {};
    }

    return {
    title: service.seoTitle,

    description: service.metaDescription,

    alternates: {
        canonical: `${site.url}/services/${service.slug}`,
    },

    openGraph: {
        title: service.seoTitle,

        description: service.metaDescription,

        url: `${site.url}/services/${service.slug}`,

        type: "website",

        images: [
            {
                url: service.image,
                width: 1200,
                height: 630,
                alt: service.heroImageAlt,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: service.seoTitle,
        description: service.metaDescription,
        images: [service.image],
    },
};
}

export function generateStaticParams() {

    return services.map(service => ({
        slug: service.slug,
    }));

}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({
    params,
}: Props) {

    const { slug } = await params;

    const service = getService(slug);

    if (!service) {
        notFound();
    }

    return (

       <>
       <OrganizationSchema />
       <ServiceSchema service={service} />
       <FAQSchema faqs={service.faqs} />
         <BreadcrumbSchema service={service} />
    <Navbar />

    <ServiceHero service={service} />

    <ServiceProcess service={service} />

    <ServiceBenefits service={service} />

    <ServiceProblems service={service} />

    <ServiceCallout />

    <ServiceFAQ service={service} />

    <ServiceAreas />

    <RelatedServices service={service} />

    <Footer />
</>

    );
}