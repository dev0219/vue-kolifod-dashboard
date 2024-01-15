import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Account from "@/views/Account.vue";
import PrintConstructor from "@/views/PrintConstructor.vue";
import Contact from "@/views/Contact.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    component: () => import("@/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "account",
        name: "contact",
        component: Account,
      },
      {
        path: "constructor",
        name: "Constructor",
        component: PrintConstructor,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
