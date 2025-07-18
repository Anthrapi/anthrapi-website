import React from 'react';

const socials = [
  {
    name: 'Instagram',
    icon: '/socials/instagram.svg',
    url: 'https://www.instagram.com/anthrapi.ltd/',
  },
  {
    name: 'LinkedIn',
    icon: '/socials/linkedin.svg',
    url: 'https://www.linkedin.com/company/anthrapi/',
  },
  {
    name: 'Twitter',
    icon: '/socials/twitter.svg',
    url: 'https://x.com/anthrapi',
  },
  {
    name: 'Phone',
    icon: '/socials/phone.png',
    url: 'tel:+91 97403 15502',
  },
  {
    name: 'Email',
    icon: '/socials/email.png',
    url: 'mailto:info@anthrapi.com',
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="transition-transform hover:scale-110"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="block h-8 w-8 rounded-full bg-white"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
