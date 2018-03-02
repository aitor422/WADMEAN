db.dropDatabase();

//Creating skills collection
db.skills.save(
     [
          {
               name: 'OOP',
               description: 'Java,  PHP, Python'
          }, {
               name: 'Web Development',
               description: 'LAMP and MEAN'
          }, {
               name: 'Data Base Management',
               description: 'Relational and no-SQL'
          }, {
               name: 'Imperative programming',
               description: 'C, Pascal'
          }, {
               name: 'Languages',
               description: 'Spanish (mother tongue), English'
          }, {
               name: 'Music',
               description: 'Good level guitar, advanced level hautbois, low level piano'
          }
     ]
);

//Creating studies collection
db.studies.save(
     [
          {
               name: 'High School',
               description: 'Sancho III el Mayor',
               years: '2008 - 2014'
          },
          {
               name: 'Computer Science',
               description: 'Universidad Pública de Navarra',
               years: '2014 - 2018'
          },
          {
               name: 'Business Information Technology',
               description: 'Laurea University of Applied Sciences',
               years: '2018'
          },
          {
               name: 'Professional Music Learnings - Hautbois',
               description: 'Conservatorio Profesional de Música Pablo Sarasate',
               years: '2014 - 2020'
          }
     ]
);
