const adjustTopics = require('../utils/adjustTopics');

const topics = {
  why_react: {
    title: 'Why React?',
    slug: 'why-you-should-use-react'
  },
  get_started: {
    title: 'Getting started with React',
    slug: 'getting-started-with-react'
  },
  jsx: {
    title: 'JSX (JavaScript XML)',
    slug: 'jsx'
  }
};

module.exports = function(sectionId) {
  return adjustTopics({ topics, sectionId });
};
