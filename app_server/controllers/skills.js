const skills = function(req, res) {
     res.render('skills', {
          title: res.__('Skills'),
          currenturl: '/skills',
          skills: [{
                    name: res.__('OOP'),
                    description: res.__('Java,  PHP, Python')
               },
               {
                    name: res.__('Web Development'),
                    description: res.__('LAMP and MEAN')
               },
               {
                    name: res.__('Data Base Management'),
                    description: res.__('Relational and no-SQL')
               },
               {
                    name: res.__('Imperative programming'),
                    description: res.__('C, Pascal')
               },
               {
                    name: res.__('Languages'),
                    description: res.__('Spanish (mother tongue), English')
               },
               {
                    name: res.__('Music'),
                    description: res.__('Good level guitar, advanced level hautbois, low level piano')
               }
          ]
     });
}

module.exports = {
     skills
};
