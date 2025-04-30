import logo from '../../assets/images/logo.png';

const Logo: React.FC = () => {
    return (
        <a href="">
            <img src={logo} alt="Nav Logo" loading="lazy" />
        </a>
    )
}

export default Logo;