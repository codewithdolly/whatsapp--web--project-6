import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Text = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>{chosenEmoji.emoji}</span>
      ) : (
        <></>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Text;