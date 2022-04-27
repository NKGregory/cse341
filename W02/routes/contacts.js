const {MongoDBNamespace} = require('mongodb');

const contact = new MongoDBNamespace({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    favoriteColor:{
        type:String
    },
    birthday:{
        type:String
    }
});

module.exports = contact

routes.post('/',(req, res) => {
    const{firstName,lastName,email,favoriteColor,birthday} = req.body;
    let contact = {};
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.favoriteColor = favoriteColor;
    contact.birthday = birthday;
    let contactModel
})
