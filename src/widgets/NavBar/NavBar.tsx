import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import './NavBar.scss';
import { motion } from 'framer-motion';

interface LinkModel {
    name: string;
    to: string;
}

const NavBar: React.FC = () => {
    const links: LinkModel[] = [
        { name: 'о компании и материалы', to: '/' },
        { name: 'стили', to: '/styles' },
        { name: 'проекты', to: '/projects' },
    ];

    return (
        <nav className="nav">
            <div className="nav__content container">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Logo />
                </motion.div>
                <motion.ul
                    className="nav__list"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {links.map((link, index) => (
                        <motion.li
                            key={index}
                        >
                            <NavLink to={link.to} className="nav__list-link">
                                {link.name}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span>связаться с нами</span>
                    <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="white" />
                    </svg>
                </motion.button>
            </div>
        </nav>
    );
}

export default NavBar;
