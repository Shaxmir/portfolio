<template lang="pug">
.creat_work
    .edit_work Редактирование работы
    form.work_edit
        .block_img_work
            label.block_img
                .btn_text(
            :class="{'imglook' : this.rendedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
        )
                    span Перетащите или загрузите картинку
                    .btn_load_img Загрузить
                    input(type="file" name="file" @click="loadNewWorkImg").load_file
            ul.tags_img
                li.tags_item(v-for="(array, index) in arrayWorkTags" :key="index" ) {{array}}
                    .iks(@click="deletedArrayObj(arrayWorkTags,index)")
        .block_input_edit
            .name
                label.label_input_edit
                    .text_in Название
                    .label_in
                        .input
                            input(name="name" type="name" v-model="work.title" class="title_input" placeholder="" required)
            .link
                label.label_input_edit
                    .text_in Ссылка
                    .label_in
                        .input
                            input(name="text" type="text" v-model="work.link" class="title_input" placeholder="" required)
            .texta
                label.label_input_edit
                    .text_in Описание
                    .label_in
                        .input
                            textarea(name="text" type="text" v-model="work.text" class="text_input" placeholder="" required).textarea
            .creat_tag
                label.label_input_edit
                    .text_in Добавление тегов
                    .label_in
                        .input
                            input(name="text" type="text" v-model="work.tags" class="title_input" placeholder="Тэги писать через запятую" required)
            .buttons
                button(@click.prevent="showWorkAdd = false").btn_canled Отмена
                button(@click.prevent="addNewWorkSave").btn_save Сохранить
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        arrayWorkTags: function () {
          return this.work.tags.split(","); 
      }
        
    },
    props: {
        showWorkAdd: Boolean
    },
    data() {
        return {
            rendedPhotoUrl: "",
            work: {
                photo: "",
                title: "",
                link: "",
                text: "",
                tags: ""
            }
        }
    },
    methods: {
        ...mapActions("work", ["addWork"]),
        deletedArrayObj(e,b) {
          return this.e.splice(b, 1);
            console.log(arrayWorkTags[b]);
        },
         loadNewWorkImg(e) {
      const file = e.target.files[0];
      this.work.photo = file;
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
    async addNewWorkSave() {
        try {
            await this.addWork(this.work);
            this.work.photo = "";
            this.work.title = "";
            this.work.link = "";
            this.work.text = "";
            this.work.tags = "";
            this.rendedPhotoUrl = "";
        } catch (error) {
            alert('Ошибка в works-add')
        }
    }
}
    }

</script>

