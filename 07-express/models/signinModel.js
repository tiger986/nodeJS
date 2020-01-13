//后端的MVC/RMVC (routes/signinRouter.js,models/signinModel.js,views/signin.art,controllers/signinController.js)

const signinMod = {
    save: ({user, pass}) => {
        console.log(user, pass)
        return 'save succ.'
    }
}

module.exports = signinMod