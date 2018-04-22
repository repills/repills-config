const adjustTopics = require('../utils/adjustTopics')

const topics = {
  why_react: {
    title: 'Why Redux?',
    slug: 'why-you-should-use-redux'
  },
  get_started: {
    title: 'Getting started with Redux',
    slug: 'getting-started-with-redux'
  },
  miscellaneous: {
    title: 'Miscellaneous',
    slug: 'redux-miscellaneous'
  }
}

module.exports = function (sectionId) {
  return adjustTopics({ topics, sectionId })
}
