<template>
  <div>
    <h3 class="text-center">Daily Startup Battles</h3>
    <hr/>

    <div class="col-sm-4" v-for="battle in publicBattles">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ battle.name }} </h3>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Sponsor: </span> {{ battle.sponsor }} </p>
          <p><span class="badge alert-danger"> SeedFund: </span><strong> ${{ battle.seedFund }} </strong></p>
        </div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View Private Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/private-battles">Private Startup Battles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPublicStartupBattles } from '../utils/battles-api';

export default {
  name: 'PublicBattles',
  components: {
  },
  data() {
    return {
      publicBattles: '',
    };
  },
  methods: {
    getPublicStartupBattles() {
      getPublicStartupBattles().then((battles) => {
        this.publicBattles = battles;
      });
    },
  },
  mounted() {
    this.getPublicStartupBattles();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>