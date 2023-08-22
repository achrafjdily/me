import { faTwitter, faGithub, faWhatsapp, IconDefinition, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export interface SocialLink {
  platform: string,
  username: string,
  link: string,
  icon: IconDefinition,
  copiable?: boolean
}

const mail: SocialLink = {
  platform: 'mail',
  username: 'achrafjdily@gmail.com',
  link: 'mailto:achrafjdily@gmail.com',
  icon: faEnvelope,
  copiable: true
}

const tel: SocialLink = {
  platform: 'tel',
  username: '+212700258339',
  link: 'tel:+212700258339',
  icon: faPhone,
  copiable: true
}

const tel2: SocialLink = {
  platform: 'tel2',
  username: '+212614437859',
  link: 'tel:+212614437859',
  icon: faPhone,
  copiable: true
}

const Linkedin: SocialLink = {
  platform: 'Linkedin',
  username: 'in/achraf-jdily',
  link: 'https://www.linkedin.com/in/achraf-jdily/',
  icon: faLinkedin
}

const twitter: SocialLink = {
  platform: 'twitter',
  username: '@AchrafJdily',
  link: 'https://twitter.com/AchrafJdily',
  icon: faTwitter
}

const github: SocialLink = {
  platform: 'github',
  username: 'achrafjdily',
  link: 'https://github.com/achrafjdily',
  icon: faGithub
}

const whatsapp: SocialLink = {
  platform: 'whatsapp',
  username: '~Achraf',
  link: 'https://wa.me/+212614437859',
  icon: faWhatsapp
}

const discord: SocialLink = {
  platform: 'discord',
  username: 'Achraf - bisternastic',
  link: 'https://discord.com/users/531857297132093452',
  icon: faDiscord
}

export const allSocialLinks: SocialLink[] = [mail,tel,tel2,Linkedin,twitter,github,whatsapp,discord];

export const socialLinks: SocialLink[] = [Linkedin,twitter,github];
