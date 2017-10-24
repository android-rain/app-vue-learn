<template>
 <form v-cloak id="order-form">
   <h1>Services</h1>
   <ul>
     <li v-for="service in services" @click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
       {{ service.name }}
       <span>{{ service.price | currency }}</span>
     </li>
   </ul>

   <div class="total">
     Total: <span>{{total() | currency}}</span>
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
<style>
form {
  width: 100%;
  background-color: rgb(97, 161, 188);
  font: 2rem bold;
  margin: 0 auto;
   color: rgb(255, 255, 255);
}  
ul {
  margin: 0 auto;
}
ul li {
  margin: 8px auto;
  padding: 10px 20px;
  width: 80%;
  height: 3rem;
  background-color: rgb(227, 88, 133);
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px 0;
 
  text-align: left;
  list-style-type: none;
  list-style-position: outside;
  cursor: pointer;
}

ul li span {
  float: right;
}

ul li.active {
  background-color: #8ec16d;
}
.total {
  margin: 0 auto;
  width: 80%;
  text-align: left;
}

.total span {
  float: right;
}
</style>
