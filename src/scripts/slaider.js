import Vue from "vue";
import axios from "axios";
import request from "../admin/request";

const btns = {
    template: "#slaider-btns"
}

const thumbs = {
    template: "#slaider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    },
    computed: {
        thiSlaid(index) {
            this.currentIndex = index;
            console.log(this.work.id);
                      }
    }
}


const display = {
    template: "#slaider-display",
    
    
    components: {
        btns, thumbs
    },
    props: {
        works: Array,
        currentWork: Object
    }
}
const tags = {
    template: "#slaider-tags",
    props: {
        tagsArray: Array
    }
}

const info = {
    template: "#slaider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray(){
            return this.currentWork.techs.split(',');
        }
    }
}


new Vue(
    {
        template: '#slaider-container',
        el: '#slaider-comp',
        components: {
            display,
            info
        },
        data() {
            return {
                works: [],
                currentIndex: 0
            }
        },
        
        computed: {
            currentWork(){
                return this.works[this.currentIndex];
            }
        },
        watch: {
            currentIndex(value){
                this.makeInfiniti(value);                
            }
        },
        methods: {
            
            makeInfiniti(value) {
                const worksAmout = this.works.length - 1;
                if (value > worksAmout) this.currentIndex = 0;
                if (value < 0) this.currentIndex = worksAmout;
            },
            makeArrImg(data) {
                return data.map(item => {
                    const requiredPic = require(`../images/content/slaider/${item.photo}`);
                    item.photo = requiredPic;

                    return item;
                })
            },
            handlClickThumb(index){
                this.currentIndex = index;
                console.log(this.currentIndex);
            },
            handlSlide(direction){
                switch (direction) {
                    case 'next':
                        this.works.unshift(...this.works.splice(1,2));
                        
                        break;
                    case 'prev':
                    this.works.unshift(...this.works.splice(2,1));
                        break;
                }
                console.log(this.currentWork.id);
            } 
        },
        created(){
            axios.get('/works/118').then(response => {
                this.works = response.data
            })


        }
    }
)