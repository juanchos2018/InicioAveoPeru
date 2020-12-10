import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout/Layout';
import ErrorPage from '@/pages/Error/Error';
import AnalyticsPage from '@/pages/Dashboard/Dashboard';


Vue.use(Router);

export default new Router({
  routes: [
  
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'inicio',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },   
      ],
    },
  ],
});
