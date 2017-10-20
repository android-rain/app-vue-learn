<template>
 <form v-cloak id="main">
   <h1>Services</h1>
   <ul>
     <li v-for="service in services" @click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
       <span>{{ service.name }}</span>
     </li>
   </ul>

   <div class="total">
     Total: <span>{{total() | currentcy}}</span>
   </div>
 </form>
</template>
<script>
export default {
  name: 'OrderForm',
  data() {
    return {
      services: [
            {
                name: 'Web Development',
                price: 300,
                active: true
            },
            {
                name: 'Design',
                price: 400,
                active: false
            },
            {
                name: 'Integration',
                price: 250,
                active: false
            },
            {
                name: 'Training',
                price: 220,
                active: false
            }
        ]
    }
  },

  methods: {
    toggleActive: function(s) {
      s.active = !s.active
    },

    total: function() {
      let total = 0
      this.services.forEach(function(s) {
        if (s.active) {
          total += s.price
        }
      })
      return total
    }
  }
}
</script>
<style></style>
