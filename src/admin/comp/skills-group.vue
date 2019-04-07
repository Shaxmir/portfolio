<template lang="pug">
form.form
    label.name_group
        input(type="text" value="Workflow").input_text
        .panel_edit
            a(href="#").btn_ok
            a(href="#").btn_no
    .data_group
        ul.skills_list
            - var skills = ['Git','Terminal','Gulp','Webpack']
            - var pro = ['50%','30%','10%','10%']
            - for(var i = 0; i < skills.length; i++)
                li.skills_item
                    .skill_name= skills[i] 
                    .skill_pro= pro[i]
                    .skill_edit
                        .skill_edit
                        .skill_delete
    label.new_skill
        input(type="text" placeholder="Название скилла").input_skill
        input(type="text" placeholder="100%").input_pro
        a(href="#").btn_plus +
</template>
