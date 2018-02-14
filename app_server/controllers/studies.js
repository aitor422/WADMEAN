const studies = function(req, res) {
     res.render('studies', {
          title: res.__('Studies'),
          currenturl: '/studies',
          studies: [{
                    name: res.__('High School'),
                    description: 'Sancho III el Mayor',
                    years: '2008 - 2014'
               },
               {
                    name: res.__('Computer Science'),
                    description: 'Universidad Pública de Navarra',
                    years: '2014 - 2018'
               },
               {
                    name: res.__('Business Information Technology'),
                    description: 'Laurea University of Applied Sciences',
                    years: '2018'
               },
               {
                    name: res.__('Professional Music Learnings - Hautbois'),
                    description: 'Conservatorio Profesional de Música Pablo Sarasate',
                    years: '2014 - 2020'
               }
          ]
     });
}

module.exports = {
     studies
};
