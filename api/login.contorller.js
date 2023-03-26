export default class LoginCtrl {
    static async checkToken (req, res, next) {
        const token = "NvjABf+xDK+4@c3'$wa";
        const hasToBeChecked = req.body.pass;

        let response = false;

        if(token == hasToBeChecked){
            response = true;
        }

        res.json(response);
    }
}