<template>
    <div class="card mt-4 w-50 offset-3">
      <div class="card-header">
        <h3 class="text-center">Create New Adventure</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="onSubmit">
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
          
          <button type="submit" class="btn btn-info form-control mt-3">
            Add Customer
          </button>
          <a href="/customers" class="btn btn-secondary form-control mt-1">Back</a>
        </form>
      </div>
    </div>
</template>
  
  <script>
  import { createCustomer } from '@/firebase'
  import { useRouter } from 'vue-router'
  import { reactive } from 'vue'
  
  export default {
    setup() {
      
      const router = useRouter()
      const form = reactive({ full_name: '',address: '',age: '', email: '', phoneNumber: '', status:  '' })
  
      const onSubmit = async () => {
        await createCustomer({ ...form })
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
        onSubmit 
      }
    }
  }
  </script>
  