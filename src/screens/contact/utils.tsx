import {FaGithub, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';

const handleOpenSocialNetwork = (url: string) => () => {
  window.open(url, '_blank');
};

export const socialNetworks = (size: number = 54, isFooter = false) => [
  <button
    title="linkedin"
    key="linkedin"
    onClick={handleOpenSocialNetwork('https://www.linkedin.com/in/subham-joshi-929a672a6/')}
  >
    <FaLinkedin
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="github" key="github" onClick={handleOpenSocialNetwork('https://github.com/SubhamJoshi18')}>
    <FaGithub
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="instagram"
    key="instagram"
    onClick={handleOpenSocialNetwork('https://www.instagram.com/subham_joshi96/?hl=en')}
  >
    <FaInstagramSquare
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
];
