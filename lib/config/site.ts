import { navigation } from "../data/navigation";
import { services } from "../data/services";

const isProduction = process.env.NODE_ENV === "production";

export const site = {
  name: "Philadelphia Plumbing Services",

  company: {
    legalName: "Philadelphia Plumbing Services LLC",
    brandName: "Philadelphia Plumbing Services",
  },

  url: isProduction
    ? "https://www.phillyplumbingservices.com"
    : "http://localhost:3000",

  shortName: "PPS",

  phone: "(267) 658-2239",
  phoneHref: "tel:+12676582239",

  email: "phillyplumbingservices@gmail.com",

  address: "Philadelphia, PA",

  navigation,

  services,

  serviceArea: "Philadelphia",

  state: "PA",

  country: "US",

  socials: {
    facebook: "",
    google: "",
  },
} as const;
