import React from 'react';
import Mention from './Mention';
import Suggestion from './Suggestion';

const getDecorators = (config) => {
  return [
    (new Mention(config.mentionClassName)).getMentionDecorator(),
    (new Suggestion(config)).getSuggestionDecorator()
  ]
};

module.exports = getDecorators;

// surpressContentEditableWarning


/*


{
  separator: undefined,
  trigger: undefined,
  getSuggestions: undefined,
  onChange: undefined,
  getEditorState: undefined,
  getWrapperRef: undefined,
  dropdownClassName: undefined,
  optionClassName: undefined,
  modalHandler: undefined,
}

*/
