'use strict';

var adjustTopics = require('../utils/adjustTopics');

var topics = {
  topic_test: {
    title: 'Topic test',
    slug: 'topic-test'
  }
};

module.exports = function (sectionId) {
  return adjustTopics({ topics: topics, sectionId: sectionId });
};