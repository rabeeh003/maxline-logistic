// config/site.ts
export const siteConfig = {
  name: "Maxline Global",
  description: "Global Logistic Solutions",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Company", isDropdown: true },
    { label: "Services", isDropdown: true },
    { label: "Track Shipment", href: "/track" },
    { label: "Contact", href: "/contact" },
  ],
  companyMenu: [
    { label: "About Us", href: "/about", description: "Learn about our journey and values." },
    { label: "Leadership Team", href: "/team", description: "Meet the experts behind our success." },
    { label: "Insights & News", href: "/blog", description: "Latest industry updates and trends." },
    { label: "Careers", href: "/careers", description: "Join our global logistics family." },
  ],
  servicesMenu: [
    { label: "Air Freight", href: "/services/air" },
    { label: "Land Freight", href: "/services/land" },
    { label: "Sea Freight", href: "/services/sea" },
    { label: "Project Cargo", href: "/services/project" },
    { label: "Warehousing", href: "/services/warehousing" },
    { label: "Moving & Lashing", href: "/services/moving" },
  ]
};