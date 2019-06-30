import Vue from 'vue';
import axios from "axios";
import request from "../admin/request";
import Flickity from 'vue-flickity';

new Vue({
    el: '#rewievs',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: '100%',
        rewievs: {}
        
        // any options from Flickity can be used
      }
    }
  },
  props: {
    rewievs: Object
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created(){
    axios.get('/reviews/118').then(response => {
      this.rewievs = response.data
  })
   
  }
});