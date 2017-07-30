<template>
<div class="col-md-12">
  <div>
    <input type="text" v-model="initial_ids" @keyup.enter="updateItems" placeholder="items">
  </div>
  <Item
  v-for='(item, index) in items'
  key="index"
  :passed-item="item"
  :type="type"
  />
</div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: [],
      initial_ids: [1, 13, 14]
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = []
      this.type = this.$route.params.type
      let initial_ids = [1, 13, 14]

      for (let i in this.initial_ids) {
        let id = this.initial_ids[i]
        fetch(`http://swapi.co/api/${this.type}/${id}`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.items.push(json))
      }
    },
    updateItems(){
      let newItems = this.initial_ids.split(',');
      let array = [];
      this.initial_ids = []

      for(let item = 0; newItems.length > item; item++){
        this.initial_ids.push(parseFloat(newItems[item]));
      }
      this.fetchItems();
    }
  },
  created() {
    this.fetchItems()
  },
  components: {
    Item
  }
}
</script>
