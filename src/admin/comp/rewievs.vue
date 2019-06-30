<template lang="pug">          
section.rewievs
    .title Блок "Отзывы"
    add-rewievs(v-if="showAddRewievs"
    :showAddRewievs="showAddRewievs")
    ul.rewievs_2
        li.creat_new_rewievs(@click="showAddRewievs = true")
            .rewievs_plus +
            .text Добавить Отзыв
                 
        group-rewievs(
            v-for="rew in rewievs" 
        :key="rew.id"
            :rew="rew"
        )
</template>
<script>
import addRewievs from '../comp/add-rewievs.vue'
import groupRewievs from '../comp/group-rewievs.vue'
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        addRewievs,
        groupRewievs
    },
    computed: {
        ...mapState('rewievs', {
            rewievs: state => state.rewievs
        })
    },
    data() {
        return {
            showAddRewievs: false
        }
    },
    methods: {
        ...mapActions('rewievs', ['fetchRewievs'])   
    },
    async created() {
         try {
            await this.fetchRewievs();
        } catch (error) {
            alert('Ошибка при загрузки Отзывов');
        };
    }
}
</script>