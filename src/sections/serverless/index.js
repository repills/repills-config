const sectionId = 'serverless';

module.exports = {
  id: sectionId,
  name: 'Serverless',
  icon: 'ServerlessIcon',
  color: '#ffd426',
  path: '/serverless',
  description: 'The new frontier of cloud computing. Deploy simple functions or entire applications on the cloud without having to worry about provisioning, maintaining and scaling servers.',
  maintainers: [
    {
      name: 'Luciano Mammino',
      github: 'lmammino'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};

