import { FaFacebookF } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion'; // <- use framer-motion

interface SocialMediaProps {
  viewOnce?: boolean;
}

const SocialMedia = ({ viewOnce = true }: SocialMediaProps) => {
  const icons = [
    { component: <FaFacebookF />, href: 'https://www.facebook.com/ahmd.bkr.717030', delay: 0.3 },
    { component: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ahmed-mohammed-bakr/', delay: 0.5 },
    { component: <FaWhatsapp />, href: 'https://wa.me/+201225730050', delay: 0.7 },
    { component: <SiGmail />, href: 'mailto:ahmedbakr2501@gmail.com', delay: 0.9 },
  ];

  return (
    <div className='flex items-center justify-center gap-6'>
      {icons.map(({ component, href, delay }, i) => (
        <motion.a
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }} // <- triggers every time in view
          viewport={{ once: viewOnce ? true : false, amount: 0.2 }}
          transition={{ delay, duration: 0.3, ease: 'easeOut' }}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='skeleton-bg h-8 w-8 items-center justify-center flex rounded-full transition-all duration-500 hover:scale-120 cursor-pointer'
        >
          {component}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;
