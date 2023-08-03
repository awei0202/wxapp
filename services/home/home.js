import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '关注',
          key: 0,
        },
        {
          text: '推荐',
          key: 1,
        },
        {
          text: '科技',
          key: 2,
        },
        {
          text: '时尚',
          key: 3,
        },
        {
          text: '复古',
          key: 4,
        },
        {
          text: '简约',
          key: 5,
        },
        {
          text: '等等',
          key: 6,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
