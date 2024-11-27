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
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Size Guide",
    link: "/size-guide",
  },
  {
    title: "Shipping Info",
    link: "/shipping",
  },
  {
    title: "FAQs",
    link: "/faqs",
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
    data: "support@bigsteppers.com",
  },
  {
    icon: Phone,
    data: "support@bigsteppers.com",
  },
  {
    icon: MapPin,
    data: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    data: "123 Sneaker Street, NY 10001",
  },
];

export { contactLinks, quickLinks, socialLinks };
