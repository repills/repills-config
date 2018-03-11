'use strict';

var adjustTopics = require('../utils/adjustTopics');

var topics = {
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
  },
  react_components: {
    title: 'React Components',
    slug: 'react-components'
  },
  props_proptypes: {
    title: 'Props & PropTypes',
    slug: 'react-props-proptypes'
  },
  component_state: {
    title: 'Component State',
    slug: 'react-component-state'
  },
  functional_components: {
    title: 'Functional Components',
    slug: 'react-stateless-functional-components'
  },
  lifecycle_methods: {
    title: 'Lifecycle Methods',
    slug: 'react-lifecycle-methods'
  },
  forms: {
    title: 'React Forms',
    slug: 'react-forms'
  },
  react_events: {
    title: 'Sytnthetic Events',
    slug: 'react-sytnthetic-events'
  },
  react_patterns: {
    title: 'React design patterns',
    slug: 'react-development-design-patterns'
  },
  routing_client_side: {
    title: 'Routing client side',
    slug: 'react-routing-client-side'
  },
  miscellaneous: {
    title: 'Miscellaneous',
    slug: 'react-miscellaneous'
  },
  react_tests: {
    title: 'React Tests',
    slug: 'react-tests'
  },
  react_redux: {
    title: 'React with Redux',
    slug: 'react-redux'
  },
  react_tips: {
    title: 'React tips',
    slug: 'react-tips'
  },
  react_style: {
    title: 'Style in React',
    slug: 'react-style'
  },
  hoc: {
    title: 'HOC - Higher Order Components',
    slug: 'higher-order-components'
  },
  react_performance_increasing: {
    title: 'React performance increasing',
    slug: 'react-performance-increasing'
  }
};

module.exports = function (sectionId) {
  return adjustTopics({ topics: topics, sectionId: sectionId });
};