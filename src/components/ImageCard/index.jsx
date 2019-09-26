import React from 'react';
import PropTypes from 'prop-types';
import * as ui from './ui';

const ImageCard = ({ url }) => (
  <ui.Panel>
    <ui.Image src={url} alt="Paris" />
  </ui.Panel>
);

ImageCard.propTypes = {
  url: PropTypes.string,
};

export default ImageCard;
