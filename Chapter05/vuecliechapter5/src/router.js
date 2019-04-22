import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cars from "./views/Cars.vue";
import CarsHome from "./components/CarsHome.vue";
import CarsNew from "./components/CarsNew.vue";
import CarsOld from "./components/CarsOld.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/cars",
      name: "cars",
      component: Cars, 
      children: [
          { path: '/cars', component: CarsHome },
          { path: '/cars/cars-new', component: CarsNew },
          { path: '/cars/cars-used', component: CarsOld }
      ]
    }
  ]
});
