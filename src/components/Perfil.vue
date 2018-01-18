<template>
  <div>
    <h1>Perfil</h1>
    <hr />

    <img :src="user.photoURL" height="50"/>
     <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{user.displayName}}</h3>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Email: </span> {{ user.email }} </p>
          <p><span class="badge alert-danger"> Id: </span><strong> ${{ user.uid }} </strong></p>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name : 'Perfil',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>
