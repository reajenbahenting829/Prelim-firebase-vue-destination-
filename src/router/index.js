import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EditDestination from '@/views/EditDestination.vue'
import EditCustomer from '@/views/EditCustomer.vue'
import DestinationList from '@/components/DestinationList.vue'
import DestinationCreate from '@/components/DestinationCreate.vue'
import CustomerList from '@/components/CustomerList.vue'
import CustomerCreate from '@/components/CustomerCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destinations',
    name: 'DestinationList',
    component: DestinationList
  },
  {
    path: '/create-destination',
    name: 'DestinationCreate',
    component: DestinationCreate
  },
  {
    path: '/customers',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/create-customer',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/edit-destination/:id',
    name: 'EditDestination',
    component: EditDestination
  },
  {
    path: '/edit-customer/:id',
    name: 'EditCustomer',
    component: EditCustomer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
