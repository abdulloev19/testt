import { header } from './header.js';
import { indexPage } from './indexPage.js';


const Home = { template: '<h2>Home Page</h2>' }
const About = { template: '<h2>About Page</h2>' }
  
const routes = [
  { path: '/', component: indexPage },
  { path: '/products', component: Home },
  { path: '/about', component: About }
];

const router = VueRouter.createRouter({
  // предоставляем реализацию истории посещений
  history: VueRouter.createWebHistory(),
  routes,
});

const iagroup = Vue.createApp({
  data() {
    return {

    }
  },
  methods: {

    },
  components: {
    // "index-page": indexPage,
    "header-top": header
  }
});
iagroup.use(router);
iagroup.mount("#iagroup");

