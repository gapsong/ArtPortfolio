import React from 'react';

import ImageCard from '../ImageCard';
import * as ui from './ui';

const url =
  'https://instagram.fmuc2-1.fna.fbcdn.net/vp/aa601bd5f22859656160a9055a275acf/5E2396D2/t51.2885-15/e35/69326638_501317810666428_4280007724074731599_n.jpg?_nc_ht=instagram.fmuc2-1.fna.fbcdn.net&_nc_cat=104';
const MainPage = () => (
  <ui.Panel>
    <img
      src="http://www.union-gallery.com/layout/img/union_body_bc.jpg"
      alt=""
      id="bg"
      width="100%"
      z-index="-1"
    ></img>
    <ImageCard url={url} />
  </ui.Panel>
);

export default MainPage;
