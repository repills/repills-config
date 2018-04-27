const sectionId = 'vuejs'

module.exports = {
  id: sectionId,
  slug: sectionId,
  name: 'Vue.js',
  icon: 'VueIcon',
  color: '#4dba87',
  path: '/vuejs/',
  description: 'Vue.js is an open-source progressive JavaScript framework for building user interfaces. Vue can also function as a web application framework capable of powering advanced single-page applications.',
  maintainers: [
    {
      name: 'Andrea Mangano',
      github: 'andreamangano'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
}
