<template lang="pug">
.the_rewievs
        .img_rewievs
            img(src=`${rew.photo}`, alt="").rewievs_image
            .name_and_pro
                .name {{rew.title}}
                .pro {{rew.occ}}
        .information_rewievs
            span.text_rewievs {{rew.text}}
        .edit_panel
            a(href="#").edit Править
                .ico_edit
            a(href="#").edit Удалить
                .ico_delete  
</template>
<script>
import { mapActions } from 'vuex';

export default {
    props: {
        rew: Object
    }    
}
</script>
