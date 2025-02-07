import { createRouter, createWebHistory } from 'vue-router';
import Product from "@/components/pages/Product.vue";
import Home from "@/components/pages/Home.vue";
import Contact from "@/components/pages/Contact.vue";
import Cart from "@/components/pages/Cart.vue";

import AddStudent from '@/components/pages/student/AddStudent.vue';
import EditStudent from '@/components/pages/student/EditStudent.vue';
import DetailStudent from '@/components/pages/student/DetailStudent.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path:'/product', component: Product, name: 'product'},
  {path:'/cart', component: Cart, name: 'cart'},
  {path:'/contact', component: Contact, name: 'contact'},

  { path: '/add', name: 'AddStudent', component: AddStudent },
  { path: '/edit/:id', name: 'EditStudent', props: true, component: EditStudent },
  { path: '/students/:id', name: "DetailStudent", props: true, component: DetailStudent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
