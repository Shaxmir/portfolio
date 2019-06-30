<template lang="pug">
.edit_rewievs_block
    .title_rewievs Новый отзыв
    form.form_rewievs
        label.avatar_rew
                .rewievs_image(
                    :class="{'filled' : this.rendedPhotoUrl.length}"
                    :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
                    )    
                .load_avatar Добавить фото              
                input(type="file" name="file" @click="appendFileAndRenderPhoto").load_file
                
        .data_rewievs
            .name_pro
                .name
                    label.label
                        .text_in Имя автора
                        .label_in
                            .input
                                input(name="name" v-model="rewiev.title" type="name" class="name_input" placeholder="" required)
                .pro
                    label.label
                        .text_in Титул автора
                        .label_in
                            .input
                                input(name="text" v-model="rewiev.occ" type="text" class="text_input" placeholder="" required)
            .texta
                label.label
                    .text_in Отзыв
                    .label_in
                        .input
                            textarea(name="text" v-model="rewiev.text" type="text" class="text_input" placeholder="" required).textarea
            .buttons
                button(@click.prevent="showAddRewievs = false").btn_canled Отмена
                button(@click.prevent="saveDataNewRewievs").btn_save Сохранить
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    props: {
            showAddRewievs: Boolean
        
    },
    data() {
        return {
            rendedPhotoUrl: "",
            rewiev: {
            photo: "",
            title: "",
            occ: "",
            text: ""
            }
        }
    },
    methods: {  
    ...mapActions("rewievs", ["createReview"]),
        appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.rewiev.photo = file;
      const reader = new FileReader();
          console.log(file);
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
          console.log(this.rewiev.photo);
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    },
        async saveDataNewRewievs(){
            try {
            await this.createReview(this.rewiev);
                alert('ВОТ ЭТО ТЫ ДАЕШЬ МЭН!!!');                
            } catch (error) {
                alert('ЧТО ТО ЯВНО ИДЕТ НЕ ТАК!!!');
            }
        }
    }
}
</script>
