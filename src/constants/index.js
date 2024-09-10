import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  " We are not just an accounting company we are an innovative accounting company!";

export const collabContent = [
  {
    id: "0",
    title: "Cost-effective: ",
    text: "By outsourcing their financial tasks to us, our clients can save money on hiring and training in-house staff.",
  },
  {
    id: "1",
    title: " Expertise: ",
    text: " Our team is made up of certified public accountants and other financial professionals with extensive experience in the industry. We are well-equipped to handle a wide range of accounting tasks and challenges."
  },
  {
    id: "2",
    title: "Scalability: ",
    text: "We can scale our services to meet the changing needs of our clients as their businesses grow and evolve.",
  },
  {
    id: "3",
    title: "Technology: ",
    text:"We use state-of-the-art technology and software to ensure the accuracy and efficiency of our work.",
  },
  {
    id: "4",
    title: " Just What you need: ",
    text: "We will provide you the financial insightes that you need to step up in your game!",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: " Bookkeeping & Accounting",
    text: " We handle all aspects of bookkeeping for our clients, including recording transactions, reconciling accounts, and preparing financial statements. Our team is well-versed in a variety of accounting software and systems, and we can work with our clients to choose the best solution for their needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    /* iconUrl: benefitIcon1,
    imageUrl: benefitImage2, */
  },
  {
    id: "1",
    title: "Financial Reports",
    text: "Financial reports are important tools for stakeholders, including investors, creditors, and management, to understand a company's financial health and make informed decisions. We will do the financial reporting just as you need them. Understading the nature of the busiess we will push you to achive monthly goals and evaluate.", 
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    /* iconUrl: benefitIcon2,
    imageUrl: benefitImage2, */
    light: true,
  },
  {
    id: "2",
    title: "Payroll Management",
    text: " We handle payroll processing for our clients, including calculating and distributing employee paychecks, handling tax withholding and reporting, and managing employee benefits. We can also help our clients with compliance issues related to payroll, such as tax filing and reporting.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    /* iconUrl: benefitIcon3,
    imageUrl: benefitImage2, */
  },
  {
    id: "3",
    title: "Accounts payable & receivable",
    text: " Accounts payable and receivable: We handle the day-to-day management of our clients' accounts payable and receivable, including invoicing, billing, and tracking payments. We can also assist with collections and dispute resolution as needed.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    /* iconUrl: benefitIcon4,
    imageUrl: benefitImage2, */
    light: true,
  },
  {
    id: "4",
    title: "Internal Audits",
    text: "We can help you with financial internal audits to improve operations by evaluating and improving the effectiveness of the risk management, control, and governance processes. So that we will help you to improve internal controls, to enhance the overall efficiency and effectiveness of the operations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
   /*  iconUrl: benefitIcon1,
    imageUrl: benefitImage2, */
  },
  {
    id: "5",
    title: "Tax Preparation",
    text: "We help our clients prepare and file their tax returns accurately and efficiently. We can assist with a range of tax-related tasks, including calculating taxes owed, preparing and filing tax returns.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    /* iconUrl: benefitIcon2,
    imageUrl: benefitImage2, */
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
