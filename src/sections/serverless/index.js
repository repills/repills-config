const sectionId = 'serverless';

module.exports = {
  id: sectionId,
  name: 'Serverless',
  icon: 'ServerlessIcon',
  color: '#ffd426',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, dui vitae aliquam tempor.',
  maintainers: [
    {
      name: 'Luciano Mammino',
      github: 'lmammino'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};

