export interface LinkItem {
    id: number;
    name: string;
    href: string;
  }
  
  export interface LinkSection {
    id: number;
    title: string;
    links: LinkItem[];
  }
  
  export const linkSections: LinkSection[] = [
    {
      id: 1,
      title: "Discovery",
      links: [
        { id: 1, name: "New season", href: "#" },
        { id: 2, name: "Most searched", href: "#" },
        { id: 3, name: "Most selled", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Info",
      links: [
        { id: 1, name: "Contact Us", href: "#" },
        { id: 2, name: "Privacy Policies", href: "#" },
        { id: 3, name: "Terms & Conditions", href: "#" },
      ],
    },
    {
      id: 3,
      title: "About",
      links: [
        { id: 1, name: "Help", href: "#" },
        { id: 2, name: "Shipping", href: "#" },
        { id: 3, name: "Affiliate", href: "#" },
      ],
    },
  ];
  