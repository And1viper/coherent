import { useState } from "react";
import PropTypes from 'prop-types';
import ArticlesDataServices from "../../services/ArticleDataServices";

const Login = ( {setToken} ) => {
    const [pass, setPass] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            pass: pass
        }

        ArticlesDataServices.sendLogin(data)
            .then(response => {
                setToken(response)
            })
            .catch(e => {
                console.log(e);
            });
    
    }

    return (
        <div className="container">
            <form onSubmit={handleLogin} className="add-article-form">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required type="password" name="password" id="password" onChange={e => setPass(e.target.value)}className="form-control"/>
                    </div>

                    <button type="submit" className="btn">Send</button>

                </form>
        </div>
    )
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}