import { BasicLayout } from '@/layout';

const errorRouter = {
  path: '/error',
  name: 'error',
  component: BasicLayout,
  redirect: '/error/401',
  meta: {
    keepAlive: false,
    isNotMenu: false,
    icon: 'icon-park-outline:workbench'
  },
  children: [
    {
      path: '/error/401',
      name: '401',
      component: () => import('@/views/error/errorPage_401.vue'),
      meta: {
        title: '401',
        keepAlive: true,
        isNotMenu: false,
        icon: 'icon-park-outline:workbench'
      }
    },
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/errorPage_404.vue'),
      meta: {
        title: '404',
        keepAlive: true,
        isNotMenu: false,
        icon: 'icon-park-outline:workbench'
      }
    }
  ]
};

export default errorRouter;
