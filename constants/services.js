import digital_marketing from "@/public/elements small/3.png";
import social_media from "@/public/elements small/4.png";
import web_app_development from "@/public/elements small/5.png";
import data_analysis from "@/public/elements small/8.png";
import phone from "@/public/elements small/phone.png";
import marketingAnalysis from "@/public/elements small/market-analysis.png";
import strategy from "@/public/elements small/strategy.png";
import research from "@/public/elements small/research-icon.png";
import fingerprint from "@/public/elements small/fingerprint-icon.png";
import social_media_cover from "@/public/projects/project-covers/social-media-management.png";
import web_development_cover from "@/public/projects/project-covers/web-development.png";
import photography_cover from "@/public/projects/project-covers/photography.png";
import graphic_design_cover from "@/public/projects/project-covers/graphic-design.png";
import advertising_cover from "@/public/projects/project-covers/advertising.png";


const services = [
  {
    name: "Strategic Marketing Planning",
    img: strategy,
    summary: `We develop comprehensive marketing strategies tailored to your specific goals and target audience.`,
  },
  {
    name: "Market Research and Analysis",
    img: research,
    summary: `We help you conduct in-depth market research to gather insights into consumer behaviour, industry trends, and competitor analysis.`,
  },
  {
    name: "Branding and Identity Development",
    img: fingerprint,
    summary: `Our team is exceptional at creating or refining your brand identities, including logos, brand messaging, and visual assets, to establish a strong and memorable brand presence.`,
  },
  {
    name: "Digital Marketing",
    img: social_media,
    summary: `We have a strength in Implementing digital marketing strategies across various channels such as search engine optimisation (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing to reach and engage your target audiences online.`,
  },
  {
    name: "Website Design and Development",
    img: web_app_development,
    summary: `We design and develop professional, user-friendly websites, optimised for both desktop and mobile devices to enhance your online visibility and perfect user experience.`,
  },
  {
    name: "Creative Content Creation",
    img: digital_marketing,
    summary: `We have a meticulous eye for producing high-quality content in various formats, including blog posts, articles, videos, infographics, and social media posts, to engage audiences and drive brand awareness`,
  },
  {
    name: "Analytics and Reporting",
    img: data_analysis,
    summary: `At the end of it all, we always monitor and analyse and provide reports for your marketing campaign performance using data analytics tools to measure key performance indicators (KPIs) and optimise strategies for maximum ROI.`,
  },
];

export const categoryPaths = [
  {
    name: "Social Media Management",
    cover: social_media_cover,
    path: "/works/social-media-management",
  },
  {
    name: "Graphic Design",
    cover: graphic_design_cover,
    path: "/works/graphic-design",
  },
  {
    name: "Photography",
    cover: photography_cover,
    path: "/works/media-production",
  },
  {
    name: "Web Development ",
    cover: web_development_cover,
    path: "/works/web-development",
  },
  {
    name: "Advertising",
    cover: advertising_cover,
    path: "/works/advertising",
  },
];

export default services;
