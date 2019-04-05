import Vue from "vue";


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
    data: {
    
            styleObject: {
                right: '180px'
              }

    
    },
    
    components: {
        btns, thumbs
    },
    props: {
        works: Array,
        currentWork: Object
    }
    // computed: {
    //     reversedWork(){
    //         const works = [...this.works];
    //         return works.reverse();
    //     }
    // }
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
            return this.currentWork.skills.split(',');
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
                        this.currentIndex++;
                        
                            this.works.unshift(...this.works.splice(1,3));
                        
                        break;
                    case 'prev':
                        this.currentIndex--;
                        break;
                }
                console.log(this.currentWork.id);
            } 
        },
        created(){
            const data  = require('../data/slaider.json');
            this.works = this.makeArrImg(data);

        }
    }
)