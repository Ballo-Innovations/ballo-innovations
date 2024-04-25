import digital_marketing from '@/public/elements small/3.png'
import social_media from '@/public/elements small/4.png'
import web_app_development from '@/public/elements small/5.png'
import data_analysis from '@/public/elements small/8.png'
import phone from '@/public/elements small/phone.png'


const services = [
  {
    name: 'Digital Marketing',
    img: digital_marketing,
    summary: 'We involve researching and analysing consumer behaviour and market trends to develop effective strategies for promoting and selling products or services.'
  },
  {
    name: 'Social Media Management',
    img: social_media,
    summary: 'Our exemplary social media team is ordinarily responsible for developing strategies to increase followers, create and oversee social campaigns, produce content, review analytics, and communicate with key stakeholders in a company'
  },
  {
    name: 'Web & App Development',
    img: web_app_development,
    summary: 'Advertising refers to the process of creating and distributing messages or content to promote your product, service, or brand to your target audience.'
  },
  {
    name: 'Data Analytics',
    img: data_analysis,
    summary: 'Data analytics (DA) is done with the aid of specialized systems and software. Our data analytics techniques are widely used in commercial industries to enable organizations to make more-informed business decisions.'
  },
]

export const categoryPaths = [
  {
    name: 'Social Media Management',
    cover: phone,
    path: '/works/social-media-management',
  },
  {
    name: 'Graphic Design',
    cover: phone,
    path: '/works/graphic-design',
  },
  {
    name: 'Photography',
    cover: phone,
    path: '/works/photography',
  },
  {
    name: 'Web Development ',
    cover: phone,
    path: '/works/web-development',
  },
  {
    name: 'Advertising',
    cover: phone,
    path: '/works/advertising',
  },
]

export default services;