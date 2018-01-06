<template>
  <div>
    <h1>Perfil</h1>
    <hr />

    <img :src="user.photoURL" />
    <h3>{{user.displayName}}</h3>
    <p>email: {{user.email}}</p>
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
