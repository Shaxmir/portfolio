import Vue from "vue";


const btns = {
    template: "#slaider-btns"
}

const thumbs = {
    template: "#slaider-thumbs",
    props: {
        works: Array,
        currentWork: Object
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
            handlSlide(direction){
                switch (direction) {
                    case 'next':
                        this.currentIndex++;
                        break;
                    case 'prev':
                        this.currentIndex--;
                        break;
                }
                console.log(this.currentWork.id);
            },
            pic(pic){
                switch (pic) {
                    case 'pic':
                        this.currentIndex++;
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