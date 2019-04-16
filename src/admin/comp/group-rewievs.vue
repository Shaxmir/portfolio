<template lang="pug">
li.rew_item_list
    .the_rewievs(v-if="openEditMode == true")
        .img_rewievs
            img(:src="`https://webdev-api.loftschool.com/${rew.photo}`" alt="").rewievs_image
            .name_and_pro
                .name {{rew.author}}
                .pro {{rew.occ}}
        .information_rewievs
            span.text_rewievs {{rew.text}}
        .edit_panel
            a(href="#" @click.prevent="openEditMode = false").edit Править
                .ico_edit
            a(href="#" @click.prevent="deletedRewievs").edit Удалить
                .ico_delete
    .the_rewievs(v-else)
        .img_rewievs
            label.avatar_rew_mini
                img(:src="`https://webdev-api.loftschool.com/${rew.photo}`" alt="").rewievs_image
            .name_and_pro
                input(type="text" v-model="rew.author").name 
                input(type="text" v-model="rew.occ").pro
        .information_rewievs
            textarea(v-model="rew.text").text_rewievs 
        .edit_panel
            a(href="#" @click.prevent="saveRewievs").edit Сохранить
                .ico_edit_mini
            a(href="#" @click.prevent="openEditMode = true").edit Отменить
                .ico_delete  
</template>
<style lang="postcss">

.name_and_pro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
.name, .pro {
    width: 200px;
    margin-bottom: 20px;
}
}
.ico_edit_mini {
    background: svg-load('tick.svg', fill=green, width=100%, height=100%);
    width: 16px;
    margin-left: 10px;
    height: 16px;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            rendedPhotoUrl: "",
            openEditMode: true,
            groupRewievs: {...this.rew}
        }
    },
    props: {
        rew: Object
    },
    methods: {
        ...mapActions('rewievs', ['removeRewievs', 'editRewievs']),
    //     editNewPhotoRewievs(e) {
    //   const file = e.target.files[0];
    //   this.groupRewievs.photo = file;
    //   const reader = new FileReader();
    //       console.log(this.groupRewievs.photo);

    //   try {
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       this.rendedPhotoUrl = reader.result;
    //       console.log(this.groupRewievs.photo);
    //     };
    //   } catch (error) {
    //     alert("sh*t happens :(");
    //   }
    // },
    // Обновление картинки не обязательно
    async deletedRewievs(){
        try {
            await this.removeRewievs(this.rew.id)
        } catch (error) {
            alert('Проблема с удалением отзыва');
        }
       },
       async saveRewievs() {
        try {
            await this.editRewievs(this.rew);
            this.openEditMode = true;
        } catch (error) {
            alert(error);
        }
    } 
    }    
}
</script>
