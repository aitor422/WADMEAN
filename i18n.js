var i18n = require("i18n");

i18n.configure({ //Locale configuration
     //supported languages
     locales: ['en', 'es'],

     //locales directory
     directory: __dirname + '/locales',

     //set default locale
     defaultLocale: 'en',

     //name of the cookie storing locale
     cookie: 'lang'
});

module.exports = function(req, res, next) {

     i18n.init(req, res);
     var current_locale = i18n.getLocale();

     return next();
};
