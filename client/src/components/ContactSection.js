import ContactUs from "./ContactUs";

//Social icons
import WhatsApp from '../images/whatsappicon.svg';
import Facebook from '../images/facebookicon.svg';
import Insta from '../images/instaicon.svg';

const ContactSection = () => {
    return (
        <div>
            
            <div className="text-half">
                <p><strong>Онлайн-заявка.</strong> Клиенты обращаются к нам напрямую любым удобным способом.</p>
            </div>
            
            <div className="split contact">
                <ContactUs/>
                <div className="contact-info">
                    <p className="contact-phone">8 700 000-00-00</p>
                    <p>Единая линия для всех клиентов</p>
                    <div className="social-links">
                        <p>Быстро отвечаем в</p>
                        <div className="social-icons">
                            <a href="https://whatsapp.com"><img className="social-icon" src={WhatsApp} alt=""/></a>
                            <a href="https://facebook.com"><img className="social-icon" src={Facebook} alt=""/></a>
                            <a href="https://instagram.com"><img className="social-icon" src={Insta} alt=""/></a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ContactSection
