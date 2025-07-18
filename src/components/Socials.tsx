import React from 'react';

const socials = [
  {
    name: 'Instagram',
    icon: '/socials/instagram.svg',
    url: 'https://instagram.com/',
  },
  {
    name: 'LinkedIn',
    icon: '/socials/linkedin.svg',
    url: 'https://linkedin.com/',
  },
  {
    name: 'Twitter',
    icon: '/socials/twitter.svg',
    url: 'https://twitter.com/',
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
