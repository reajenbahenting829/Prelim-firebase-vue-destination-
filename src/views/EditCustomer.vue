<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Create Customer</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="update">
        <div class="form-group mt-2">
          <label>Full Name</label>
          <input v-model="form.full_name" class="form-control" placeholder="Full Name" required />
        </div>

        <div class="form-group mt-2">
          <label>Address</label>
          <input v-model="form.address" class="form-control" placeholder="Address" required />
        </div>
        <div class="form-group mt-2">
          <label>Age</label>
          <input v-model="form.age" class="form-control" placeholder="age" required />
        </div>

        <div class="form-group mt-2">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control"
            type="email"
            required
            placeholder="Email"
          />
        </div>

        <div class="form-group mt-2">
          <label>Phone Number</label>
          <input type="number" v-model="form.phoneNumber" class="form-control" placeholder="Phone Number" required />
        </div>

        <div class="form-group mt-2">
          <label>Status</label>
          <input v-model="form.status" class="form-control" placeholder="Status" required />
        </div>
        
        <button type="submit" class="btn btn-primary form-control mt-3">
          <i class="fa-duotone fa-pen-to-square"></i> Update Customer
        </button>
        <a href="/customers" class="btn btn-secondary form-control mt-1"><i class="fa-duotone fa-left-long-to-line"></i> Back</a>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import { reactive, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getCustomer, updateCustomer } from '@/firebase'
  
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      const customerId = computed(() => route.params.id)
  
      const form = reactive({ full_name: '', address: '', age: '', email: '', phoneNumber: '', status: ''})
      onMounted(async () => {
        const customer = await getCustomer(customerId.value)
        console.log(customer, customerId.value)
        form.full_name = customer.full_name
        form.address = customer.address
        form.age = customer.age
        form.email = customer.email
        form.phoneNumber = customer.phoneNumber
        form.status = customer.status
      
      })
  
      const update = async () => {
        await updateCustomer(customerId.value, { ...form })
        router.push('/customers')
        form.full_name = ''
        form.address = ''
        form.age = ''
        form.email = ''
        form.phoneNumber = ''
        form.status = ''
        
      }
  
      return { 
        form, 
        update 
      }
    }
  }
  </script>
  