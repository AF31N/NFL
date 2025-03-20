import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import Link from "next/link";

const mediaLinks = [
  {
    icon: <FaFacebook />,
    path: "/"
  },
  {
    icon: <FaLinkedin />,
    path: "/"
  },
  {
    icon: <FaWhatsapp />,
    path: "/"
  },
  {
    icon: <FaInstagram />,
    path: "/"
  }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {mediaLinks.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
