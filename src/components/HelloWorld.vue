<script setup>
import { ref } from 'vue'
import {useCounterStore} from '@/stores/index'

defineProps({
  msg: String
})

const count = ref(0)
const store = useCounterStore()

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>store.name {{store.name}}</h2>

  <div class="card">
    <el-button type="default" @click="count++">count is {{ count }} </el-button>
    <el-button type="default" @click="store.increment">Pinia.count is {{store.count}}</el-button>
    <el-button text> Pinia.doubleCount is {{store.doubleCount}}</el-button>
  </div>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
