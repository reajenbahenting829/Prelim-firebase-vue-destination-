import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyAjElUr8V0MD4j8oN92sRMH8zLjHWwGO2Q",
  authDomain: "store-app-43a62.firebaseapp.com",
  projectId: "store-app-43a62",
  storageBucket: "store-app-43a62.appspot.com",
  messagingSenderId: "118028438965",
  appId: "1:118028438965:web:0ee8ba8ab51ba8cecaddfc",
  measurementId: "G-P28L9WMRJJ"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const customersCollection = db.collection('customers')
const destinationsCollection = db.collection('destinations')

export const createCustomer = customer => {
  return customersCollection.add(customer)
}

export const createDestination = destination => {
  return destinationsCollection.add(destination)
}

export const getCustomer = async id => {
  const customer = await customersCollection.doc(id).get()
  return customer.exists ? customer.data() : null
}

export const getDestination = async id => {
  const destination = await destinationsCollection.doc(id).get()
  return destination.exists ? destination.data() : null
}

export const updateCustomer = (id, customer) => {
  return customersCollection.doc(id).update(customer)
}

export const updateDestination = (id, destination) => {
  return destinationsCollection.doc(id).update(destination)
}

export const deleteCustomer = id => {
  return customersCollection.doc(id).delete()
}

export const deleteDestination = id => {
  return destinationsCollection.doc(id).delete()
}

export const useLoadCustomers = () => {
  const customers = ref([])
  const close = customersCollection.onSnapshot(snapshot => {
    customers.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return customers
}

export const useLoadDestinations = () => {
  const destinations = ref([])
  const close = destinationsCollection.onSnapshot(snapshot => {
    destinations.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return destinations
}
