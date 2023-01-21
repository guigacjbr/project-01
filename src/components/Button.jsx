import React from 'react';

function handleClick() {
  window.location.href = 'https://www.google.com';
}

function MyButton() {
  return <button onClick={handleClick}>Go to Google</button>;
}

export default MyButton;