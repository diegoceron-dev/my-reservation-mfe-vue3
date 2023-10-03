<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'

interface GuestInterface {
  guestId: string
  name: string
  age: string
}

const data: Array<GuestInterface> = [
  { guestId: '1', name: 'Diego Ceron', age: '28' },
  { guestId: '2', name: 'Rodolfo', age: '28' }
]

const props = defineProps({
  guestId: {
    type: String,
    required: true
  }
})

onMounted(() => {
  getGuestInfo()
})

const guest = ref<null | GuestInterface>(null)

const getGuestInfo = () => {
  const response = data.find(guests => guests.guestId === props.guestId)

  if (response) guest.value = response
  else alert('not found guest')
}
</script>

<template>
  <div>
    <h2>Guest Info {{ props.guestId }}</h2>
    <div v-if="guest">
      <el-row>
        <el-col>
          <b>{{ guest.name }} </b></el-col
        >
        <el-col> {{ guest.age }} years old </el-col>
      </el-row>
    </div>
    <div v-else>
      <h3>Not found</h3>
    </div>
  </div>
</template>

<style scoped></style>
