<template>
<div class="container">
    <div class="row">
        <label>UserId</label> <input type="text" v-model="uid" class="input-sm spacing"/>
        <button @click="findUserById(uid)" class="btn btn-sm btn-info">find</button>
        <p> 用户的信息: {{user.firstName}} {{user.lastName}}</p>
    </div>
    <hr/>
    <div class="row">
        <table>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>lastUpdate</th>
            </tr>

            <tr v-for = "user in users">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.lastUpdate}}</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
 var testdata={
        tuser:{"actorId":100,"firstName":"SPENCER","lastName":"DEPP","lastUpdate":1139983200000},
        tusers:[{"actorId":1,"firstName":"PENELOPE","lastName":"GUINESS","lastUpdate":"2006-02-15"},{"actorId":2,"firstName":"NICK","lastName":"WAHLBERG","lastUpdate":"2006-02-15"},{"actorId":3,"firstName":"ED","lastName":"CHASE","lastUpdate":"2006-02-15"}]
    }
    var URLS={
        getUserById : "/user/gubi",
        getAllUser : "/user/gau",
        saveUser : "/user/saveUser"
    }
export default {
  name: 'App',
  data (){
    return {
            uid:'',
            user:'',
            users:testdata.tusers
    }
  },
  created (){
            this.getAllUser()
            // alert("hhe")
  },
   methods:{
            findUserById (uid){
                this.$axios.get(URLS.getUserById+'/'+uid)
                .then(res => {this.user = res.data})
                .catch(failResponse => {})
            },
            getAllUser (){
               this.$axios.get(URLS.getAllUser)
                .then(res => {this.users = res.data})
                .catch(failResponse => {})
            }
   }
}
</script>

<style>
</style>
