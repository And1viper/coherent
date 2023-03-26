import ContactSection from "../components/ContactSection";
import Question from "../components/Question";
import QuestionItems from "../components/QuestionItems"

//Page Transition
import { motion } from "framer-motion";
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

const FAQ = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            <p className="text-half text-more-than-a-half"><strong>Частые вопросы</strong><br/>к компании Garysh</p>

            <div className="frequently-asked-list">
                {QuestionItems.map((item, i) => (
                    <Question title={item.title} id={item.id} key={i}>{item.question}</Question>
                ))}
            </div>

            <ContactSection/>
        </motion.div>
    )
}

export default FAQ
