const adjustTopics = require('../utils/adjustTopics');

const topics = {
  topic_test: {
    title: 'Topic test',
    slug: 'topic-test'
  }
};

module.exports = function(sectionId) {
  return adjustTopics({ topics, sectionId });
};
