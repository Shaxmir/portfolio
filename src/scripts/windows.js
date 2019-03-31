import Vue from "vue";

const form_data = new Vue({
  el: '#form_data',
  data: {
    errors: [],
    name: null,
    email: null,
    textarea: null
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Требуется указать имя.');
      }
      if (!this.age) {
        this.errors.push('Требуется указать возраст.');
      }

      e.preventDefault();
    }
  }
})