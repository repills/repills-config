'use strict';

var sectionId = 'serverless';

module.exports = {
  id: sectionId,
  slug: sectionId,
  name: 'Serverless',
  icon: 'ServerlessIcon',
  color: '#ffd426',
  basePath: '/serverless/',
  description: 'The new frontier of cloud computing. Deploy simple functions or entire applications on the cloud without having to worry about provisioning, maintaining and scaling servers.',
  maintainers: [{
    name: 'Luciano Mammino',
    github: 'lmammino'
  }],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};