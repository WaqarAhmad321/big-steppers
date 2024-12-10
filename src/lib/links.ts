import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  {
    title: "About us",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Size Guide",
    link: "/",
  },
  {
    title: "Shipping Info",
    link: "/",
  },
  {
    title: "FAQs",
    link: "/",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    link: "/",
  },
  {
    icon: Twitter,
    link: "/",
  },
  {
    icon: Instagram,
    link: "/",
  },
  {
    icon: Youtube,
    link: "/",
  },
];

const contactLinks = [
  {
    icon: Mail,
    data: "bigsteppers.shop@gmail.com",
  },
  // {
  //   icon: Phone,
  //   data: "support@bigsteppers.com",
  // },
  {
    icon: MapPin,
    data: "+92 303 4057572",
  },
  {
    icon: Mail,
    data: "Lda Avenue Phase 1, Lahore",
  },
];

export { contactLinks, quickLinks, socialLinks };
