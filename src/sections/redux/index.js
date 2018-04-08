const sectionId = 'redux';

module.exports = {
  id: sectionId,
  slug: sectionId,
  name: 'Redux',
  icon: 'ReduxIcon',
  color: '#774bb9',
  path: '/redux',
  description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments and are easy to test.',
  maintainers: [
    {
      name: 'Andrea Mangano',
      github: 'andreamangano'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};
