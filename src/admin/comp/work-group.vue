<template lang="pug">
li.the_work(v-if="editThisWork")
    .img_work
        img(:src="`https://webdev-api.loftschool.com/${wow.photo}`", alt="").work_image
        ul.tags_img
            li.tags_item(v-for="(array, index) in arrayWorkTags" :key="index") {{array}}
    .information_work
        h2.title_work {{wow.title}}
        span.text_work {{wow.description}}
        a(href="#").link_work {{wow.link}}
    .edit_panel
        a(href="#" @click.prevent="editThisWork = false").edit Править
            .ico_edit
        a(href="#" @click.prevent="deletedThisWork").edit Удалить
            .ico_delete
li.the_work(v-else)
    label.img_work
        .btn_text(
           :class="{'imglook' : this.rendedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
        )
            span Перетащите или загрузите картинку
            .btn_load_img Загрузить
            input(type="file" name="file" @click="loadNewWorkImg").load_file
        .tags_img
            input(type="text" v-model="editedWow.techs" placeholder="Тэги писать через запятую")
    .information_work
        input(type="text" v-model="editedWow.title" placeholder="Новое название сайта")
        input(type="text" v-model="editedWow.description" placeholder="Новое описание")
        input(type="text" v-model="editedWow.link" placeholder="Новая ссылка")
    .edit_panel
        a(href="#" @click.prevent="saveThisWork").edit Сохранить
            .ico_edit
        a(href="#" @click.prevent="editThisWork = true").edit Отменить
            .ico_delete
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            rendedPhotoUrl: "",
            editThisWork: true,
             editedWow: {...this.wow}
        }
    },
    props: {
        wow: Object
    },
    computed: {
      arrayWorkTags: function () {
          return this.wow.techs.split(",", 4); 
      }  
    },
    methods: {
    ...mapActions('work', ['removeWork','editWorks']),
    loadNewWorkImg(e) {
      const file = e.target.files[0];
      this.editedWow.photo = file;
      const reader = new FileReader();
          console.log(file);
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
          console.log(this.rendedPhotoUrl);
        }
      } catch (error) {
        alert("sh*t happens :(");
      }
    },
    async deletedThisWork(){
         try {
            await this.removeWork(this.wow.id)
            console.log('Запись удалена');
        } catch (error) {
            alert('Проблема с удалением Категории');
        }
    },        
    
    async saveThisWork() {
        try {
            await this.editWorks(this.editedWow);
            this.editThisWork = true;
        } catch (error) {
            alert(error);
        }
    } 
}
}
</script>