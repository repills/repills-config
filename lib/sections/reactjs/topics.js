'use strict';

var adjustTopics = require('../utils/adjustTopics');

var topics = {
  why_react: {
    title: 'Why React is awesome',
    slug: 'why-you-should-use-react',
    similar: ['Reasons to use React', 'Why I should use React', 'Benefits of React', 'React js props & cons', 'What is React good for', 'React advantages and disadvantages', 'Advantages of React js over Angular js', 'React vs Angular', 'React vs Vue']
  },
  get_started: {
    title: 'Getting started with React',
    slug: 'getting-started-with-react',
    similar: ['React introduction', 'Understanding React', 'What is React', 'React hello world', 'React for newbies', 'Things every React.js beginner should know', 'React starter kit', 'React tutorials for beginners', 'Best way to learn React', 'Create React app', 'How to run React']
  },
  jsx: {
    title: 'JSX (JavaScript XML)',
    slug: 'jsx',
    similar: ['What is JSX', 'How to use JSX', 'JSX syntax', 'JSX vs HTML', 'Props in JSX', 'Children in JSX', 'Functions as JSX Children', 'JSX In Depth', 'Advantages to use JSX']
  },
  react_components: {
    title: 'React Components',
    slug: 'react-components',
    similar: ['What is a React component', 'How to write React component', 'Communication between React components', 'Best practices to write a React component', 'React stateless components', 'Composing React components', 'React pure components', 'Rendering a React component', 'Writing highly reusable React components', 'React class components', 'React functional components']
  },
  props_proptypes: {
    title: 'Props & PropTypes',
    slug: 'react-props-proptypes',
    similar: ['How to use React PropTypes', 'Reasons to use PropTypes', 'What PropTypes are available', 'Static PropTypes', 'Why React PropTypes are important', 'Typechecking with PropTypes', 'Defining PropTypes on components', 'Using PropTypes with ES2015 Class-based and stateless components', 'Validating Props easily with React PropTypes']
  },
  component_state: {
    title: 'Component State',
    slug: 'react-component-state',
    similar: ['What is the React component State', 'How to use the React component State', 'Best practices to use the component State', 'Updating the component State', 'React State vs props', 'Set the React component State', 'Component initial state', 'Adding local state to a Class component', "How to define a component's initial State", 'React setState callback', 'Understanding State in React Components', 'State anti patterns', 'Asynchronous State Updates', 'Using State correctly']
  },
  functional_components: {
    title: 'Functional Components',
    slug: 'react-stateless-functional-components',
    similar: ['What is a functional React component']
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
    title: 'Events in React',
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
    slug: 'react-redux',
    similar: ['React Redux architecture']
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
  react_performance_increasing_optimizations: {
    title: 'Performance increasing & optimizations',
    slug: 'react-performance-increasing-optimizations'
  },
  react_case_studies: {
    title: 'React case studies',
    slug: 'react-case-studies'
  },
  react_reviews: {
    title: 'React reviews',
    slug: 'react-reviews'
  },
  react_sample_applications: {
    title: 'Sample applications',
    slug: 'react-sample-applications'
  },
  react_server_side_rendering: {
    title: 'Server side rendering',
    slug: 'react-server-side-rendering'
  },
  react_managing_application_state: {
    title: 'Managing application state',
    slug: 'react-managing-application-state'
  },
  react_comparison: {
    title: 'React comparison',
    slug: 'react-frameworks-libraries-comparison'
  },
  react_transitions_animations: {
    title: 'Transitions & animations in React',
    slug: 'react-transitions-animations'
  }
};

module.exports = function (sectionId) {
  return adjustTopics({ topics: topics, sectionId: sectionId });
};