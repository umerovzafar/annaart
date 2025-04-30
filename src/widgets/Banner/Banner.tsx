import { motion } from 'framer-motion';
import banner from '../../assets/images/banner.png';

const Banner: React.FC = () => {
    return (
        <section className="banner">
            <motion.img
                src={banner}
                alt=""
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div className="banner__content container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    AnnArt – мы создаём пространство вашей мечты!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Свяжитесь с нами, и мы всё сделаем за вас!
                </motion.p>
            </div>
        </section>
    );
};

export default Banner;
