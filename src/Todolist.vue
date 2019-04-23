<template>
  <div>
    add one thing to do
    <div>
      <input class="item" v-model="in_item"/>
      <button @click="item_submit">submit</button>
    </div>
    things to do
    <div>
      <ul>
        <todo-item 
          v-for="(item,index) of list"
          :key="index"
          :item="item" :index="index"
          @delete="item_delete"
        ></todo-item>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  name: 'todolist',
  components:{
    'todo-item':TodoItem
  },
  data (){
    return {
      in_item:'',
      list:[]
    }
  },
  methods:{
    item_submit (){
      this.list.push(this.in_item)
      this.in_item=''
    },
    item_delete (index){
      this.list.splice(index,1)
    }
  }
}
</script>

<style scoped>
</style>
