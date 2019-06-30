import Vue from  'vue';
import axios from "axios";
import request from "../admin/request";

const skill = {
    template: '#skills',
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {
          const circle = this.$refs["color-circle"];
          const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue("stroke-dasharray")
          );
          const percent = (dashArray / 100) * (100 - this.skill.percent);
    
          circle.style.strokeDashoffset = percent;
        }
      },
      
      mounted() {
        this.drawColoredCircle();
      }
    };

const skillsRow = {
    template: '#skills-row',
    components: {
        skill
    },
    props: {
        skills: Object,
        cat: Object
    }
}



new Vue ({
    el: "#skills-comp",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data(){
        return {
            skills: {},
            categories: {}
        }
    },
    props: {
      skills: Object
    },
    methods: {
      filterSkillsCategoryId(categoryId) {
        return this.skills.filter(skill=> skill.category == categoryId)
    } 
    },
    created(){
      axios.get('/skills/118').then(response => {
        this.skills = response.data
    }),
    axios.get('/categories/118').then(response => {
      this.categories = response.data
  })
     
    }
})