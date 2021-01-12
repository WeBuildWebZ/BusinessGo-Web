// global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

import '../assets/css/styles.scss';
import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';
import reducer from '../reducers';

export default getApp(reducer, constants);
