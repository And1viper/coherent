import ContactSection from "../components/ContactSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";

//Page Transition
import { motion } from "framer-motion";
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

//images

import CoherentLogo from "../images/coherentlogo1.svg";
import PrinterImg from "../images/3d-printer-img.svg";
import InntechLogo from "../images/inntech-main-logo.svg";

const Home = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            <div className="text-half text-more-than-half">
                <p>Мы предлагаем работающие решения для всех, кто занимается стоматологией и лабораторными исследованиями. Наша задача — продвигать  продукты, которые помогают стоматологическим компаниям медицине и улушают качество  жизни людей вокруг.<br/><strong>Мы — компания Garysh.</strong></p>
            </div>


            <div className="text-half text-more-than-half padding-top-0">
                <div className="line line-blue"></div>
                <p><strong>О компании.</strong> Внедряем передовые технологии в казахстанский рынок. Работаем с международными компаниями в сфере лазеров и 3D принтеров</p>
            </div>

            <div className="grid-more grid-more-maybe">
                <div className="round bg-purpose-img grid-span-column">
                    <h1 className="text-header-big">Наши цели</h1>
                    <p className="text-purpose">Мы добиваемся своих целей, инвестируя в долгосрочное партнерство на всех уровнях — с сотрудниками, производителями, дистрибьюторами, улучшая наши продукты и сервисы через высокопрофес­&shy;сиональную команду и современные технологии.</p>
                </div>
                <div className="drop-shape-left bg-dark-purple img-wrapper-1">
                    <div className="flex-img">
                        <img src={PrinterImg} alt="3d-printer-img"/>
                    </div>
                </div>
            </div>

            <div className="text-half text-more-than-half">
                <p><strong>Лучшие в индустрии.</strong> Представляем всемирно известные бренды лазеров и 3D принтеров в Казахстане для применения их в различных сферах</p>
            </div>
            
            <div className="grid-more grid-more-mob">
                <div className="half-round-left bg-blue ">
                    <div className="wrapper-main-small">
                        <h2 className="text-header-medium">InnTech</h2>
                        <p>3D принтеры для создания персональных имплантов, пластиковых ортезов совместимых с телом. </p>
                        <img className="inntech-logo" src={InntechLogo} alt="inntech-logo"/>
                        <Link to="/inntech"><Button buttonStyle="btn-transparent" buttonSize="btn-medium">Подробнее</Button></Link>
                    </div>   
                </div>
                
                <div className="round bg-purple grid-span-column bg-purple1">
                    <div className="grid-2-columns">
                        <div className="coherent-wrapper">
                            <img className="flex-img" src={CoherentLogo} alt="tft-display"/>
                        </div>
                        <div className="coherent-text-wrapper">
                            <h2 className="text-header-medium">Coherent</h2>
                            <p>Производят компактные системы для сварки и резки мелких деталей. Отлично подходит для металлических изделий и лабораторий.</p>
                            <Link to="/coherent">
                                <Button buttonStyle="btn-transparent" buttonSize="btn-medium">Подробнее</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <ContactSection/>
        </motion.div>
    )
}

export default Home
