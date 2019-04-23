<template>
  <li class="item" @click="deleteItem"
  >todo:{{item}}</li>
</template>

<script>
  export default{
    props:['item','index'],
    methods:{
      deleteItem(){
        this.$emit('delete',this.index)
      }
    }
  }
</script>

<style scoped>
  .item {
    color: green;
  }
</style>
