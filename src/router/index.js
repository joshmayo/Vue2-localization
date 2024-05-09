import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/routes/HelloWorld';
import Tutorial from '@/components/routes/Tutorial';
import ContentTable from '@/components/routes/TutorialContents';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/content',
      name: 'Content',
      component: ContentTable,
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial,
    },
  ],
  // switch router from uing hash routing to history to use normal urls
  mode: 'history',
});
