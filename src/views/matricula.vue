<template>
  <div id="app">
    <!-- NAVIGATION -->
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">VuejsFirebase</a>
    </nav>
    <!-- MAIN CONTENT -->
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>Add a New Website</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addWebsite">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-8 text-center">
          <div class="card">
            <div class="card-header">
              <h3>Lista de cursos</h3>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Id User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="w in websites">
                    <td>
                      <a v-bind:href="w.title" target="_blank">{{w.Title}}</a>
                    </td>
                    <td>
                      {{w.author}}
                    </td>
                    <td>
                      <button @click="deleteWebsite(w)" class="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Firebase
import firebase from "../firebase/firebase-setup";
let app = Firebase.initializeApp(config);
let db = app.database();
let websitesRef = db.ref('cursoRegistrado');

export default {
  name: 'App',
  firebase: {
    websites: websitesRef
  },
  data () {
    return {

    }
  },
  methods: {
    addWebsite() {
     
    },
    deleteWebsite(website) {
      if(confirm('Are you sure delete it?')) {
        websitesRef.child(website['.id']).remove();
         alert('Website removed');
      }
    }
  }
}
</script>

<style>
#app {
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100vh;
}
</style>