const
  ARTICLE_COLOR = '#754fa0',
  VIDEO_COLOR = '#09b7bf',
  LIBRARY_COLOR = '#90d36b',
  BOOK_COLOR = '#ff2c6d',
  TUTORIAL_COLOR = '#fcb12b',
  TALK_COLOR = '#ed1b72',
  COURSE_COLOR = '#f2d40d',
  TOOL_COLOR = '#afafaf';

const article = {
  id: 'article',
  label: { singular: 'Article', plural: 'Articles' },
  color: ARTICLE_COLOR
};

const video = {
  id: 'video',
  label: { singular: 'Video', plural: 'Videos' },
  color: VIDEO_COLOR
};

const library = {
  id: 'library',
  label: { singular: 'Library', plural: 'Libraries' },
  color: LIBRARY_COLOR
};

const book = {
  id: 'book',
  label: { singular: 'Book', plural: 'Books' },
  color: BOOK_COLOR
};

const tutorial = {
  id: 'tutorial',
  label: { singular: 'Tutorial', plural: 'Tutorials' },
  color: TUTORIAL_COLOR
};

const talk = {
  id: 'talk',
  label: { singular: 'Talk', plural: 'Talks' },
  color: TALK_COLOR
};

const course = {
  id: 'course',
  label: { singular: 'Course', plural: 'Courses' },
  color: COURSE_COLOR
};

const tool = {
  id: 'tool',
  label: { singular: 'Tool', plural: 'Tools' },
  color: TOOL_COLOR
};

const video_tutorial = {
  id: 'video_tutorial',
  label: { singular: 'Video Tutorial', plural: 'Video Tutorials' },
  color: TUTORIAL_COLOR
};

const video_course = {
  id: 'video_course',
  label: { singular: 'Video Course', plural: 'Video Courses' },
  color: COURSE_COLOR
};

const video_talk = {
  id: 'video_talk',
  label: { singular: 'Video Talk', plural: 'Video Talks' },
  color: TALK_COLOR
};

module.exports = {
  article,
  video,
  library,
  book,
  tutorial,
  talk,
  course,
  tool,
  video_tutorial,
  video_course,
  video_talk
};
