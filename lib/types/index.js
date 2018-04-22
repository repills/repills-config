'use strict';

/* eslint camelcase: off */

var ARTICLE_COLOR = '#90d36b';
var VIDEO_COLOR = '#09b7bf';
var LIBRARY_COLOR = '#754fa0';
var BOOK_COLOR = '#ff2c6d';
var TUTORIAL_COLOR = '#fcb12b';
var TALK_COLOR = '#ed1b72';
var COURSE_COLOR = '#f2d40d';
var TOOL_COLOR = '#afafaf';

var article = {
  id: 'article',
  label: { singular: 'Article', plural: 'Articles' },
  color: ARTICLE_COLOR
};

var video = {
  id: 'video',
  label: { singular: 'Video', plural: 'Videos' },
  color: VIDEO_COLOR
};

var library = {
  id: 'library',
  label: { singular: 'Library', plural: 'Libraries' },
  color: LIBRARY_COLOR
};

var book = {
  id: 'book',
  label: { singular: 'Book', plural: 'Books' },
  color: BOOK_COLOR
};

var tutorial = {
  id: 'tutorial',
  label: { singular: 'Tutorial', plural: 'Tutorials' },
  color: TUTORIAL_COLOR
};

var talk = {
  id: 'talk',
  label: { singular: 'Talk', plural: 'Talks' },
  color: TALK_COLOR
};

var course = {
  id: 'course',
  label: { singular: 'Course', plural: 'Courses' },
  color: COURSE_COLOR
};

var tool = {
  id: 'tool',
  label: { singular: 'Tool', plural: 'Tools' },
  color: TOOL_COLOR
};

var video_tutorial = {
  id: 'video_tutorial',
  label: { singular: 'Video Tutorial', plural: 'Video Tutorials' },
  color: TUTORIAL_COLOR
};

var video_course = {
  id: 'video_course',
  label: { singular: 'Video Course', plural: 'Video Courses' },
  color: COURSE_COLOR
};

var video_talk = {
  id: 'video_talk',
  label: { singular: 'Video Talk', plural: 'Video Talks' },
  color: TALK_COLOR
};

module.exports = {
  article: article,
  video: video,
  library: library,
  book: book,
  tutorial: tutorial,
  talk: talk,
  course: course,
  tool: tool,
  video_tutorial: video_tutorial,
  video_course: video_course,
  video_talk: video_talk
};