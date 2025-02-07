import { createRouter, createWebHistory } from "vue-router";
//import các component hiển thị trong content 
import Product from "@/components/pages/Product.vue";
import Home from "@/components/pages/Home.vue";
import Contact from "@/components/pages/Contact.vue";
import Cart from "@/components/pages/Cart.vue";

import AddUser from "@/components/pages/user/AddUser.vue";
import EditUser from "@/components/pages/user/EditUser.vue";

//Khai báo tên route
const routes = [
    {path:'/', component: Home, name: 'home'},
    {path:'/product', component: Product, name: 'product'},
    {path:'/cart', component: Cart, name: 'cart'},
    {path:'/contact', component: Contact, name: 'contact'},

    {path:'/add', component: AddUser, name: 'AddUser'},
    {path:'/edit/:id', component: EditUser, props: true, name: 'EditUser'},

]

//Khởi tạo router 
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;