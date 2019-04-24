<template lang="pug">
.data_group
    ul.skills_list(v-if="editMod == false")
        li.skills_item
            .skill_name {{ skill.title }} 
            .skill_pro {{ skill.percent }}
            .skill_edit
                .skill_edit(@click="editMod = true")
                .skill_delete(@click="removeExsSkill")
    ul.skills_list(v-else)
        li.skills_item
            .skill_name
                input(type="text" v-model="editedSkill.title") 
            .skill_pro
                input(type="text" v-model="editedSkill.percent") 
            .skill_edit
                .skill_edit( :class="{active: editMod}" @click="save")
                .skill_delete( :class="{canled: editMod}"  @click="editMod = false")
</template>
<script>

import {mapActions} from "vuex";

export default {
    
    props: {
        skill: Object
    },
    data() {
        return {
            editMod: false,
            editedSkill: {...this.skill}
        }
    },
    methods: {
        ...mapActions('skills', ['removeSkills', 'editSkills']),
    async removeExsSkill(){
        try {
            await this.removeSkills(this.skill.id)
        } catch (error) {
            alert('Проблема с удалением скилла');
        }
       },
    async save() {
        try {
            await this.editSkills(this.editedSkill);
            this.editMod = false;
        } catch (error) {
            alert('Проблема при изменение скила');
        }
    } 
    }
}
</script>
