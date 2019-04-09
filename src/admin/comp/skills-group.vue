<template lang="pug">
form.form
    label.name_group
        input(type="text" :value="category.category").input_text
        .panel_edit
            a(href="#").btn_ok
            a(href="#" @click.prevent="deletedSkillGroup").btn_no
    skills-item(
        v-for="skill in skills" 
        :key="skill.id"
        :skill="skill"
    )
    label.new_skill
        input(type="text" v-model="skill.title" placeholder="Название скилла").input_skill
        input(type="text" v-model="skill.percent" placeholder="100%").input_pro
        a(href="#" @click.prevent="addNewSkill").btn_plus +
</template>
<script>
import skillsItem from "../comp/skills-item.vue";
import { mapActions} from 'vuex';

export default {
    data() {
        return {
            skill: {
                category: this.category.id,
                title: "",
                percent: ""
            }
        }
    },
    props: {
        category: Object,
        skills: Array
    },
    components: {
        skillsItem
        },
methods: {
    ...mapActions('skills', ['addSkill', 'removeCategories']),
    ...mapActions('categories', ['removeCategories']),
    async deletedSkillGroup(){
         try {
            await this.removeCategories(this.category.id)
            console.log('Запись удалена');
        } catch (error) {
            alert('Проблема с удалением Категории');
        }
    },
    async addNewSkill() {
        try {
            await this.addSkill(this.skill);
            this.skill.title = "";
            this.skill.percent = "";
        } catch (error) {
            alert('Ошибка в skills-group')
        }
    }
},
}
</script>
