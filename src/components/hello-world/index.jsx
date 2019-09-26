import React from 'react';
import PropTypes from 'prop-types';
import * as ui from './ui';

const HelloWorld = ({ title }) => <ui.Panel>{title}</ui.Panel>;

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
