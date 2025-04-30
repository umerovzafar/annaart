import { motion } from 'framer-motion';
import product1 from '../../assets/images/products1.png';
import product2 from '../../assets/images/products2.png';
import product3 from '../../assets/images/products3.png';
import product4 from '../../assets/images/products4.png';
import product5 from '../../assets/images/products5.png';

interface ProductItem {
    img: string;
    title: string;
    descr: string;
}

const Products: React.FC = () => {
    const products: ProductItem[] = [
        { img: product1, title: 'Итальянская плитка', descr: 'элегантный дизайн и высокая износостойкость' },
        { img: product2, title: 'Итальянская плитка', descr: 'элегантный дизайн и высокая износостойкость' },
        { img: product3, title: 'Итальянская плитка', descr: 'элегантный дизайн и высокая износостойкость' },
        { img: product4, title: 'Итальянская плитка', descr: 'элегантный дизайн и высокая износостойкость' },
        { img: product5, title: 'Итальянская плитка', descr: 'элегантный дизайн и высокая износостойкость' },
    ];

    return (
        <section className="products">
            <div className="products__content container">
                <motion.div
                    className="products__top"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>продукция</h2>
                    <p>
                        Поставляем только проверенные строительные и отделочные материалы от ведущих производителей.
                    </p>
                </motion.div>

                <motion.div
                    className="products__cards"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {}
                    }}
                >
                    {products.map((item, index) => (
                        <motion.div
                            className="products__cards-item"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={item.img} alt="" />
                            <div className="products__cards-item-content">
                                <h5>{item.title}</h5>
                                <p>{item.descr}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
