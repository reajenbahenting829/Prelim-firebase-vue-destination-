<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Edit Destination</h3>
    </div>
  
          <form @submit.prevent="update">
            <div class="form-group mt-2">
              <label>Name</label>
              <select v-model="form.name" class="form-control">
                <option disabled selected value="">Select Name</option>
                <option value="Kayangan Lake'">Kayangan Lake'</option>
                <option value="Bulabog Beach">Bulabog Beach</option>
                <option value="Rizal Park">Rizal Park</option>
                <option value="National Museum of Fine Arts">National Museum of Fine Arts</option>
                <option value="Panglao Beach">Panglao Beach</option>
                <option value="Chocolate Hills">Chocolate Hills</option>
              </select>
            </div>
    
            <div class="form-group mt-2">
              <label>Address</label>
              <input v-model="form.address" class="form-control" placeholder="address" required />
            </div>
    
            <div class="form-group mt-2">
              <label>Type</label>
              <select v-model="form.type" class="form-control">
              <option disabled selected value="">Select Type</option>
              <option value="Beach Areas">Beach Areas</option>
              <option value="Mountain Areas">Mountain Areas</option>
              <option value="Town and Cities">Town and Cities</option>
              <option value="Areas known for culture and heritage">Areas known for culture and heritage</option>
              <option value="Countryside areas">Countryside areas</option>
              <option value="Beach Resort">Beach Resort</option>
              <option value="Natural Areas">Natural Areas</option>
              <option value="Museum Areas">Museum Areas</option>
              <option value="Lake Areas">Lake Areas</option>
              </select>
            </div>
    
            <div class="form-group mt-2">
              <label>Rating</label>
              <select v-model="form.rating" class="form-control">
                <option disabled selected value="">Select rating</option>
                  <option value="1.0">1.0</option>
                    <option value="2.8">2.8</option>
                    <option value="3.8">3.8</option>
                    <option value="4.8">4.8</option>
                    <option value="5.8">5.8</option>
                    <option value="6.8">6.8</option>
                    <option value="7.8">6.8</option>
                    <option value="8.8">6.8</option>
                    <option value="9.8">6.8</option>
                   <option value="10.8">10.8</option>
              </select>
            </div>

        <button type="submit" class="btn btn-primary form-control mt-3">
          <i class="fa-duotone fa-pen-to-square"></i> Update Destination
        </button>
        <a href="/destinations" class="btn btn-secondary form-control mt-1"><i class="fa-duotone fa-left-long-to-line"></i> Back</a>
      </form>
    </div>

</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDestination, updateDestination } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const destinationId = computed(() => route.params.id)

    const form = reactive({ name: '', address: '', type: '', rating: '' })
    onMounted(async () => {
      const destination = await getDestination(destinationId.value)
      console.log(destination, destinationId.value)
      form.name = destination.name
      form.address = destination.address
      form.type = destination.type
      form.rating = destination.rating
    })

    const update = async () => {
      await updateDestination(destinationId.value, { ...form })
      router.push('/destinations')
      form.name = ''
      form.address = ''
      form.type = ''
      form.rating = ''
    }

    return { 
      form, 
      update 
    }
  }
}
</script>
