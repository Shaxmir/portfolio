<template lang="pug">
    section.about_admin.active
        .title_and_create_group
            h1.title Блок "Обо мне"
            .create_group(
                @click = "showAddingForm = true"
                v-if="showAddingForm == false"
            )
                .plus +
                .text Добавить группу
        .groups
            ul.group_create(style="list-style:none;")
                li.group_item(
                        v-if="showAddingForm"
                )
                    skills-add()
                li.group_item(v-if="false")
                    skills-group()                   
</template>
<script>
import skillsAdd from "../comp/skills-add.vue";
import skillsGroup from "../comp/skills-group.vue";

export default {
    components: {
        skillsAdd,
        skillsGroup
    },
    data() {
        return {
            showAddingForm: false
        }
    }
}
</script>