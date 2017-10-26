<template>
<div class="switchable">
  <div :class="active" v-on:click.prevent>
    <button id="list" @click="makeActive('list')">List</button>
    <button id="grid" @click="makeActive('grid')">Grid</button>
  </div>
  <ul>
    <li :class="active" v-for="article in articles" :key="article.key">
      <img :src="article.image" :alt="article.title">
      <p v-show="show">{{article.title}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'Switchable',
  // data model
  data() {
    return {
    active: 'grid',
    show: false,
    articles: [{
        'title': 'What You Need To Know About CSS Variables',
        'url': 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
        'image': 'https://tutorialzine.com/media/2016/03/css-variables.jpg',
        'key': 1
      }, {
        'title': 'Freebie: 4 Great Looking Pricing Tables',
        'url': 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
        'image': 'https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg',
        'key': 2
      }, {
        'title': '20 Interesting JavaScript and CSS Libraries for February 2016',
        'url': 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
        'image': 'https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg',
        'key': 3
      }, {
        'title': 'Quick Tip: The Easiest Way To Make Responsive Headers',
        'url': 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
        'image': 'https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png',
        'key': 4
      }, {
        'title': 'Learn SQL In 20 Minutes',
        'url': 'https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
        'image': 'https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png',
        'key': 5
      }, {
        'title': 'Creating Your First Desktop App With HTML, JS and Electron',
        'url': 'https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
        'image': 'https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png',
        'key': 6
      }]
    }
  },

  methods: {
    makeActive: function(item) {
      this.active = item
      item === 'grid' ? this.show = false : this.show = true
    }
  }
}
</script>
<style scoped>
.switchable {
  margin: 10px auto;
  width: 75%; 
}

.switchable div:first-child {
  width: 100%;
   background-color: rgb(97, 161, 180);
   height: 50px;
}

#list,
#grid {
  float: right;
  margin: 10px;
  padding: 5px;
  background-color: #5597b4;
}

div.list #list,
div.grid #grid {
  background-color: #e35885;
}

ul {
  margin: 10px;
  clear: both;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

ul li.list {
  display:inline-block;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul li.list img {
  float: left;
}
ul li.list p {
  float: left;
  padding-top: 20px; 
}
/* ul li.grid img */
</style>
