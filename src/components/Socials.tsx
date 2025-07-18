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
    icon: '/socials/phone.svg',
    url: 'tel:+91 97403 15502',
  },
  {
    name: 'Email',
    icon: '/socials/email.svg',
    url: 'mailto:info@anthrapi.com',
  },
];

const Socials = () => {
  return (
    <nav className="flex items-center gap-4" aria-label="Social media">
      <ul className="flex items-center gap-4">
        {socials.map((social) => (
          <li key={social.name}>
            <a
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Socials;
