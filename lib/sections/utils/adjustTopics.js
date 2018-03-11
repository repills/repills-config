"use strict";

module.exports = function (_ref) {
  var topics = _ref.topics,
      sectionId = _ref.sectionId;

  var _topics = {};
  Object.keys(topics).forEach(function (topicName) {
    _topics[topicName] = Object.assign(topics[topicName], { slug: sectionId + "-" + topics[topicName].slug });
  });
  return _topics;
};