<template lang="pug">  
section.myworks
    .title Блок "Работы"
    work-add(
        v-if="showWorkAdd"
        :showWorkAdd="showWorkAdd"
    )
    ul(style="list-style: none;").works
        li.creat_new_work(@click="showWorkAdd = true")
            .work_plus +
            .text Добавить работу
        work-group(
             v-for="wow in works" 
        :key="wow.id"
            :wow="wow"
        )
</template>
<script>
import workGroup from '../comp/work-group.vue'
import workAdd from '../comp/work-add.vue'
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        workGroup,
        workAdd
    },
    data() {
        return {
            showWorkAdd: false
        }
    },
    computed: {
        ...mapState('work', {
            works: state => state.works
        })
    },
    methods: {
        ...mapActions('work', ['fetchWorks']),
    },
    async created() {
         try {
            await this.fetchWorks();
        } catch (error) {
            alert('Ошибка при загрузки работ');
        };
    }
    
}
</script>