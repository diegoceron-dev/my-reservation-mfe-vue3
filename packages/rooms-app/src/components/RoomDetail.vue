<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

interface RoomInterface {
  roomId: string
  name: string
  description: string
}

const data: Array<RoomInterface> = [
  {
    roomId: '1',
    name: 'Deluxe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    roomId: '2',
    name: 'Family',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const props = defineProps({
  roomId: {
    type: String,
    required: true
  }
})

const room = ref<null | RoomInterface>(null)

onMounted(() => {
  getRoomInfo()
})

const getRoomInfo = () => {
  const response = data.find(rooms => rooms.roomId === props.roomId)

  if (response) room.value = response
  else alert('not found room')
}
</script>

<template>
  <div>
    <h2>Room Detail {{ props.roomId }}</h2>
    <div v-if="room">
      <el-row>
        <el-col>
          <b>{{ room.name }} </b>
        </el-col>
      </el-row>
      <el-row>
        <el-col> Amenities: {{ room.description }} </el-col>
      </el-row>
      <el-row>
        <slot></slot>
      </el-row>
    </div>
    <div v-else>
      <h3>Not found</h3>
    </div>
  </div>
</template>

<style scoped></style>
