// src/ShareButtons.js
import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div>
      <span className='px-3'>
      <FacebookShareButton url={url} quote={title} hashtag="#example">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      </span>

      <span className='px-3'>
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      </span>
     
    </div>
  );
};

export default ShareButtons;
