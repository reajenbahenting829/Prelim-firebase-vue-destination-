<template>
  <h2 class="mt-2">Destination List</h2>
  <div class="card border-0 mt-4 p-2">
    <div class="mb-3 mt-2">
      <a class="btn btn-success d-flex justify-content-end float-end" href="/create-destination"><i class="fa-duotone fa-circle-plus mt-1 mr-1"></i> Add New Destination</a>
    </div>
    <table class="table table-hover border table-striped m-0">
      <thead class="bg-light text-success">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Type</th>
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, address, type, rating } in destinations" :key="id">
          <td>{{ name }}</td>
          <td>{{ address }}</td>
          <td>{{ type }}</td>
          <td>{{ rating }}</td>
          <td>
            <router-link :to="`/edit-destination/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                <i class="fa-duotone fa-pen-to-square"></i> Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteDestination(id)">
              <i class="fa-duotone fa-trash-can"></i> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="noDestinations" class="text-center m-2">
      <p>Please wait or no destination found.</p>
      <p class="loading"></p>
    </div>
  </div>
</template>

<script>
import { useLoadDestinations, deleteDestination } from '@/firebase'

export default {
  setup() {
    const destinations = useLoadDestinations()
    
    return { 
      destinations, 
      deleteDestination,
    }
  },
  computed: {
    noDestinations() {
      return this.destinations.length === 0
    }
  }
}
</script>
