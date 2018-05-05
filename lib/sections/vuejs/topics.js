'use strict';

var adjustTopics = require('../utils/adjustTopics');

var topics = {
  why_vue: {
    title: 'Why Vue is awesome',
    slug: 'why-you-should-use-vue',
    similar: ['Reasons to use Vue', 'Why I should use Vue', 'Benefits of Vue', 'Vue props & cons', 'What is Vue good for', 'Vue advantages and disadvantages']
  },
  vue_get_started: {
    title: 'Getting started with Vue',
    slug: 'getting-started-with-Vue',
    similar: ['Vue introduction', 'Understanding Vue', 'Vue hello world', 'Vue for newbies', 'Things every Vue.js beginner should know', 'Vue starter kit', 'Vue tutorials for beginners', 'Best way to learn Vue', 'How to run Vue']
  },
  vue_components: {
    title: 'Vue Components',
    slug: 'vue-components',
    similar: ['What is a Vue component', 'How to write Vue component', 'Communication between Vue components', 'Best practices to write a Vue component', 'Vue stateless components', 'Composing Vue components', 'Vue pure components', 'Rendering a Vue component', 'Writing highly reusable Vue components'],
    description: 'Components are one of the most powerful features of Vue.js. They help you extend basic HTML \nelements to encapsulate reusable code. At a high level, Components are custom elements that Vue.js\u2019 \ncompiler would attach specified behavior to.'
  },
  vue_props_proptypes: {
    title: 'Props & PropTypes in Vue',
    slug: 'vue-props-proptypes',
    similar: ['How to use Vue PropTypes', 'Reasons to use PropTypes', 'What PropTypes are available', 'Typechecking with PropTypes', 'Defining PropTypes on components']
  },
  vue_lifecycle_methods: {
    title: 'Vue component Lifecycle Methods',
    slug: 'vue-lifecycle-methods',
    similar: ['Lifecycle Methods Overview', 'How to use Vue.js Component Lifecycle Methods', 'When to use Vue Lifecycle', 'State and Lifecycle in Vue', 'Understanding the Vue Component Lifecycle']
  },
  vue_events: {
    title: 'Events in Vue',
    slug: 'vue-events',
    similar: ['How to work with events in Vue', 'Vue event click', 'Vue onclick pass parameter']
  },
  vue_patterns: {
    title: 'Vue design patterns',
    slug: 'vue-design-patterns'
  },
  vue_routing_client_side: {
    title: 'Vue routing client side',
    slug: 'vue-routing-client-side'
  },
  vue_miscellaneous: {
    title: 'Miscellaneous',
    slug: 'vue-miscellaneous'
  },
  vue_tests: {
    title: 'Vue Tests',
    slug: 'vue-tests'
  },
  vue_vuex: {
    title: 'Vue with Vuex',
    slug: 'vue-vuex'
  },
  vue_tips: {
    title: 'Vue tips',
    slug: 'vue-tips',
    description: 'A topic with a resourceful collection of tips and ticks for Vue.'
  },
  vue_styling: {
    title: 'Styling in Vue',
    slug: 'vue-style',
    similar: ['Ways to style Vue components', 'Inline Styles with Vue', 'Vue style attribute', 'Using CSS Modules with Vue']
  },
  vue_case_studies: {
    title: 'Vue case studies',
    slug: 'vue-case-studies'
  },
  vue_reviews: {
    title: 'Vue reviews',
    slug: 'vue-reviews'
  },
  vue_managing_application_state: {
    title: 'Managing application state in Vue',
    slug: 'vue-managing-application-state'
  },
  vue_sample_applications: {
    title: 'Vue sample applications',
    slug: 'vue-sample-applications',
    description: 'In this topic you will find a collection of sample\napplications that can be very useful if you are learning Vue and you want to\ncompare your code with some ready-made applications.'
  },
  vue_server_side_rendering: {
    title: 'Vue server side rendering (SSR)',
    slug: 'vue-server-side-rendering'
  },
  vue_transitions_animations: {
    title: 'Transitions & animations in Vue',
    slug: 'vue-transitions-animations'
  }
};

module.exports = function (sectionId) {
  return adjustTopics({ topics: topics, sectionId: sectionId });
};