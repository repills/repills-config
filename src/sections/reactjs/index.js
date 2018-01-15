const sectionId = 'reactjs';

module.exports = {
  id: sectionId,
  name: 'React',
  icon: 'react',
  color: '#53c1de',
  description: 'Learn to develop in React, one of the most powerful JavaScript library for building interactive user interfaces.',
  maintainers: [
    {
      name: 'Andrea Mangano',
      github: 'andreamangano'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};
