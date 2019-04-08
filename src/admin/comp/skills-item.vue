<template lang="pug">
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
</template>
