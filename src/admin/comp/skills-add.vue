<template lang="pug">
form.form
    label.name_group
        input(type="text" placeholder="Название" v-model="skillTitle").input_text
        .panel_edit
            a(href="#" @click.prevent="addSkillGroup").btn_ok
            a(href="#" @click = "showAddingForm = false").btn_no
    .data_group
    label.new_skill
        input(type="text" placeholder="Название скила").input_skill
        input(type="text" placeholder="100%").input_pro
        a(href="#").btn_plus +
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            skillTitle: ""
        };  
    },
    methods: {
        ...mapActions("categories", ["addNewSkillGroup"]),
        async addSkillGroup(){
            try {
            await this.addNewSkillGroup(this.skillTitle);
            this.skillTitle = "";
                
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>
