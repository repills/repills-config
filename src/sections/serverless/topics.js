const adjustTopics = require('../utils/adjustTopics')

const topics = {
  why_react: {
    title: 'Why serverless?',
    slug: 'why-you-should-use-serverless'
  },
  get_started: {
    title: 'Getting started with serverless',
    slug: 'getting-started-with-serverless'
  },
  miscellaneous: {
    title: 'Miscellaneous',
    slug: 'serverless-miscellaneous'
  }
}

module.exports = function (sectionId) {
  return adjustTopics({ topics, sectionId })
}
