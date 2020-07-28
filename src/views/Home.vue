<!--<template>
  <div class="container">
    <table class="table">
      <thead class="thead-dark">
        <br/>
        <br/>
        <br/>
        <br/>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <!-- <router-link
            :to="{
              name: 'userDetails',
              params: { firstName: user.firstName, lastName: user.lastName },
            }"
          >
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>@mdo</td>
          </router-link>

          <router-link :to="getRoute(user)">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>@mdo</td>
          </router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [
        {
          id: 1,
          firstName: "Juan",
          lastName: "Ramos"
        },
        {
          id: 2,
          firstName: "Angelo",
          lastName: "Madrid"
        },
        {
          id: 3,
          firstName: "Aramis",
          lastName: "Reyes"
        }
      ]
    };
  },
  methods: {
    getRoute(user) {
      return `/user/details/${user.firstName}/${user.lastName}`;
    }
  }
};
</script>