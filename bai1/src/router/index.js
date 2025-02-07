//components/router/index.js

import { createRouter, createWebHistory } from "vue-router";

// improt các component hiển thị các nội dung conten

import Home from "@/components/pages/Home.vue";
import Product from "@/components/pages/Product.vue";
import Cart from "@/components/pages/Cart.vue";
import Contact from "@/components/pages/Contact.vue";
import AddUser from "@/components/pages/User/AddUser.vue";
import EditUser from "@/components/pages/User/EditUser.vue";
import ShowUser from "@/components/pages/User/ShowUser.vue";
//import { patch } from "axios";



//khai báo router

const routes = [
    {path: '/',component: Home, name: 'Home'},
    {path: '/Product',component: Product, name: 'Product'},
    {path: '/Cart',component: Cart, name: 'Cart'},
    {path: '/Contact',component: Contact, name: 'Contact'},
    {path: '/add',component: AddUser, name: 'AddUser'},
    {path: '/edit/:id',component: EditUser, props: true, name: 'EditUser'},
    {path: '/show/:id',component: ShowUser, props: true, name: 'ShowUser'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;