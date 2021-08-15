import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Contacts from '../pages/Contacts.vue'
import AboutUs from '../pages/AboutUs.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/contacts/',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/about/',
            name: 'AboutUs',
            component: AboutUs
        },
    ]
})