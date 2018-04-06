'use strict';

var sectionId = 'reactjs';

module.exports = {
  id: sectionId,
  name: 'React',
  icon: 'ReactIcon',
  color: '#53c1de',
  path: '/reactjs',
  description: 'Dive deep into React, one of the most powerful JavaScript library for building interactive user interfaces.',
  maintainers: [{
    name: 'Andrea Mangano',
    github: 'andreamangano'
  }],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
};