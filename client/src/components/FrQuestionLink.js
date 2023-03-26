import { Link } from "react-router-dom";

const FrQuestionLink = ( {children, to} ) => {
    return (
        <Link to={to} className="fr-question-link">
            {children}
        </Link>
    )
}

export default FrQuestionLink
