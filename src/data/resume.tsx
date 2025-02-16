import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sabarish Sriram",
  initials: "SS",
  url: "https://github.com/sabarishsriram/",
  location: "Chennai, IN",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "A full-stack web developer and music producer who loves integrating AI into projects. An extrovert who’s always up for new challenges!",
  summary:
    "Full-stack web developer and music producer with a passion for technology and creativity. Born in Muscat, Oman, and completed schooling there. Currently pursuing B.Tech in Computer Science at SRM University KTR. Loves exploring new ideas, integrating AI into projects, and bringing innovative solutions to life. An extrovert who thrives on collaboration, meeting new people, and embracing new experiences. Always eager to learn and grow, both personally and professionally!",
  avatarUrl: "/sabarish sriram profile.jpg",
  skills: [
    "ReactJs",
    "NextJs",
    "VUeJs",
    "Typescript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vbsabarishsriram@gmail.com",
    tel: "7010428022",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sabarishsriram/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sabarish-sriram/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sriram_sabarish",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HackTheBox SRM",
      href: "https://www.htbsrmist.tech/",
      badges: [],
      location: "SRM Chennai",
      title: "Technical Associate",
      logoUrl: "/htbsrmist_logo.jpeg",
      start: "Mar 2024",
      end: "present",
      description:
        "",
    },
    {
      company: "Next Tech Lab",
      href: "https://www.nexttechlab.in/",
      badges: [],
      location: "SRM Chennai",
      title: "Technical Associate",
      logoUrl: "/1631390746545.jpeg",
      start: "May 2024",
      end: "present",
      description:
        "",
    },
    {
      company: "Liftoff",
      href: "https://www.linkedin.com/company/liftoffsrm/about/",
      badges: [],
      location: "SRM Chennai",
      title: "Technical Member",
      logoUrl: "/liftoffsrm_logo.jpeg",
      start: "Mar 2024",
      end: "present",
      description:
        "",
    },
    {
      company: "Swift",
      href: "https://sccwebsite.netlify.app/",
      badges: [],
      location: "SRM Chennai",
      title: "Technical Member",
      logoUrl: "/1680403489419.jpeg",
      start: "May 2024",
      end: "present",
      description:
        "",
    },
    
  ],
  education: [
    {
      school: "SRM University",
      href: "https://buildspace.so",
      degree: "Bachelor's of Technology in Computer Science (B.Tech)",
      logoUrl: "/1630625612861.jpeg",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    {
      title: "Schedulify",
      href: "https://schedulify-beta.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Schedulify is a dynamic calendar scheduling app that streamlines appointment booking with customizable availability options. It integrates seamlessly with Google Maps and Google Calendar, making it easy to manage events and locations in one place. Built with Next.js, TypeScript, Prisma, and PostgreSQL, Schedulify offers a user-friendly experience, simplifying the scheduling process for both users and businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://schedulify-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Screenshot 2025-02-16 185809.png",
      video: ""
    },
    {
      title: "LinkSlice",
      href: "https://link-slice.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "LinkSlice is a powerful link shortener designed for efficient and organized URL management. Built with React, Express, MongoDB, and nanoid, it provides a seamless user experience for creating and tracking short links. With a sleek interface powered by tsparticles and shadcn, LinkSlice ensures both functionality and style, making link management simple and effective.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://link-slice.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SabarishSriram/LinkSlice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linkslice.png",
      video: "",
    },

  ],
} as const;
