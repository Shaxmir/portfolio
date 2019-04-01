<template lang="pug">
    
        .wrapper
          .admin_block
            .aut_play
              form.form_aut#app
                .remove
                .title Авторизация
                label.label
                  .text_login(for='name-input') Имя пользователя
                  .label_login
                    .ico_user
                    .input
                      input(name="name" type='name' v-model='name' class="name_input"  placeholder="Имя пользователя" required)
                      .mess {{ errors }}
                label.label
                  .text_login Пароль
                  .label_login
                    .ico_pass
                    .input
                      input(name="password" type="password" class="password_input" placeholder="Пароль" required)
                .button
                  button(type="button" @click.prevent="checkForm()").btn_login Отправить

            header.header
              .head_info
                .user_avatar
                  img(src="../images/content/user.jpg", alt="").avatar
                .name_lastName Шахмир Ахмедилов
                .name_panel Панель администрирования
              .head_exit
                a(href="#").exit_link Выйти
            nav.nav_menu
              ul.nav_list
                - var nav = ['Обо мне','Работы','Отзывы']
                - for(var i = 0; i < nav.length; i++)
                  li.nav_item
                    a(href="#").nav_link= nav[i]
            section.about_admin
              .title_and_create_group
                h1.title Блок "Обо мне"
                .create_group
                  .plus +
                  .text Добавить группу
              .groups
                .group_create
                  form.form
                    label.name_group
                      input(type="text" placeholder="Название").input_text
                      .panel_edit
                        a(href="#").btn_ok
                        a(href="#").btn_no
                    .data_group
                    label.new_skill
                      input(type="text" placeholder="Название скила").input_skill
                      input(type="text" placeholder="100%").input_pro
                      a(href="#").btn_plus +
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


                      ////////////


                   
            section.myworks
              .title Блок "Работы"
              .creat_work
                .edit_work Редактирование работы
                form.work_edit
                  .block_img_work
                    .block_img
                      .btn_text
                        span Перетащите или загрузите картинку
                        button.btn_load_img Загрузить
                  .block_input_edit
                    .name
                      label.label_input_edit
                        .text_in Название
                        .label_in
                          .input
                            input(name="name" type="name" class="title_input" placeholder="" required)
                    .link
                      label.label_input_edit
                        .text_in Ссылка
                        .label_in
                          .input
                            input(name="text" type="text" class="title_input" placeholder="" required)
                    .texta
                      label.label_input_edit
                        .text_in Описание
                        .label_in
                          .input
                            textarea(name="text" type="text" class="text_input" placeholder="" required).textarea
                    .creat_tag
                      label.label_input_edit
                        .text_in Добавление тегов
                        .label_in
                          .input
                            input(name="text" type="text" class="title_input" placeholder="" required)
                    .buttons
                      button.btn_canled Отмена
                      button.btn_save Сохранить
              .works
                .creat_new_work
                  .work_plus +
                  .text Добавить работу
                .the_work
                  .img_work
                    img(src="../images/content/slaider/one.png", alt="").work_image
                    ul.tags_img
                      li.tags_item HTML5
                      li.tags_item CSS3
                      li.tags_item JavaScript
                  .information_work
                    h2.title_work Заголовок
                    span.text_work Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem alias veritatis dolores. Totam autem voluptates reiciendis consectetur quasi ab nobis voluptatem sit in, rem, atque, dolores amet consequatur nostrum.
                    a(href="#").link_work http://loftschool.ru
                  .edit_panel
                    a(href="#").edit Править
                      .ico_edit
                    a(href="#").edit Удалить
                      .ico_delete

                        
            section.rewievs
              .title Блок "Отзывы"
              .edit_rewievs_block
                .title_rewievs Новый отзыв
                form.form_rewievs
                  .avatar_rew
                    img(src="../images/content/user.jpg", alt="").rewievs_image                    
                    a(href="#").load_avatar Добавить фото
                  .data_rewievs
                    .name_pro
                      .name
                        label.label
                          .text_in Имя автора
                          .label_in
                            .input
                              input(name="name" type="name" class="name_input" placeholder="" required)
                      .pro
                        label.label
                          .text_in Титул автора
                          .label_in
                            .input
                              input(name="text" type="text" class="text_input" placeholder="" required)
                    .texta
                      label.label
                        .text_in Отзыв
                        .label_in
                          .input
                            textarea(name="text" type="text" class="text_input" placeholder="" required).textarea
                    .buttons
                      button.btn_canled Отмена
                      button.btn_save Сохранить
              .rewievs_2
                .creat_new_rewievs
                  .rewievs_plus +
                  .text Добавить Отзыв
                .the_rewievs
                  .img_rewievs
                    img(src="../images/content/user.jpg", alt="").rewievs_image
                    .name_and_pro
                     .name Владимир Сабанцев
                     .pro Учитель
                  .information_rewievs
                    span.text_rewievs Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem alias veritatis dolores. Totam autem voluptates reiciendis consectetur quasi ab nobis voluptatem sit in, rem, atque, dolores amet consequatur nostrum.
                  .edit_panel
                    a(href="#").edit Править
                      .ico_edit
                    a(href="#").edit Удалить
                      .ico_delete  

</template>

<style lang="postcss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html,
  body {
    height: 100%;
    font-size: 16px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .admin_block {
    background-image: url('../images/content/fons/one_fon.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
        z-index: 9;
        width: 100%;
        min-height: 700px;
        height: 100%;
        &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent 0,rgba(#f6f9fe,.9) 0%);
        content: "";
        position: absolute;
        z-index: -1;
      }
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 15px 60px;
    background: #414165;
    .head_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 440px;
      .user_avatar {
        width: 46px;
        height: 46px;
        .avatar {
          width: 100%;
          height: 100%;
        border-radius: 50%;
        }
      }
      .name_lastName{
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
      .name_panel {
        font-size: 16px;
        font-weight: 500px;
        color: #b1b1ba;
      }
    }
    .head_exit {
      display: flex;
      align-items: center;
      .exit_link {
        color: #b1b1ba;
      }
    }
    
  }
  .nav_menu {
    display: flex;
    background: #fff;
    padding: 0px 60px;
    .nav_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      width: 300px;
      .nav_item {
        display: flex;
        align-items: center;
        height: 75px;
        transition: color .4s;
        transition: border-bottom .2s;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid #383bcf;
          .nav_link {
            color: #383bcf;
          }
        }
        .nav_link {
          text-decoration: none;
          color: #757c8a;
          font-weight: 600;
          
        }
      }
    }
  }
  .about_admin {
    display: flex;
    padding: 55px 60px;
    flex-direction: column;
    font-weight: bold;
    color: #414c63;
  }
  .title_and_create_group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    .title {
        color: #414c63;
        font-size: 34px;
        font-weight: bold;
    }
  }
  .create_group {
    display: flex;
    cursor: pointer;
    .plus {
      width: 20px;
      height: 20px;
      color: #fff;
      background-image: linear-gradient(90deg,#ad00ed,#5500f2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-size: 24px;
      color: #3f35cb;
      font-weight: bold;
    }
  }
  .groups {
    display: flex;
    margin-top: 50px;
  }
  .group_create {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .form {
    width: 525px;
    height: 390px;
    background: #fff;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);
    padding: 12px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  

  }
  .name_group {
    display: flex;
    border-bottom: 1px solid #757c8a;
      height: 50px;
      justify-content: space-between;
    .input_text {
      width: 280px;
      height: 40px;
      outline: none;
      border: none;
      border-bottom: 1px solid #000;
    }
    .panel_edit{
      display: flex;
      width: 60px;
      justify-content: space-between;
      align-items: center;
    }
    .btn_ok {
      background: svg-load('tick.svg', fill=green, width=100%, height=100%);
      width: 18px;
      height: 18px;

    }
    .btn_no {
      background: svg-load('remove.svg', fill=red, width=100%, height=100%);
      width: 18px;
      height: 18px;
    }
  }
  .new_skill {
    display: flex;
    justify-content: flex-end;
  }
  .input_skill {
    height: 35px;
    width: 220px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    margin-right: 20px;
    padding: 10px;
  }
  .input_pro {
    height: 35px;
    width: 70px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    margin-right: 20px;
    padding: 10px;
  }
  .btn_plus {
    width: 44px;
    height: 44px;
    color: #fff;
    background-image: linear-gradient(90deg,#ad00ed,#5500f2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
  }
  .data_group {
    display: flex;
    width: 100%;
    .skills_list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style: none;
      width: 100%;
      height: 100%;
      line-height: 40px;
      .skills_item {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }

  .skill_edit {
    display: flex;
    width: 60px;
    justify-content: space-between;
    .skill_edit {
      background: svg-load('pencil.svg', fill=#a0a5b1, width=100%, height=100%);
      width: 18px;
      height: 18px;
    }
    .skill_delete {
      background: svg-load('trash.svg', fill=#a0a5b1, width=100%, height=100%);
      width: 18px;
      height: 18px;
    }
  }

  /*****SECTION WORKS*******/

  .myworks {
    display: flex;
    padding: 55px 60px;
    flex-direction: column;
    font-weight: bold;
    color: #414c63;
    .title {
      display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    color: #414c63;
    font-size: 34px;
    font-weight: bold;
    }
  }
  .creat_work {
    min-width: 1100px;
    min-height: 780px;
    background: #fff;
    padding: 40px 25px;
    
    margin-top: 40px;
  }
  .edit_work {
    min-height: 50px;
    border-bottom: 1px solid #414c63;
    color: #414c63;
    font-weight: bold;
    font-size: 20px;
  }
  .work_edit {
    display: flex;
    width: 100%;
    margin-top: 40px;
    .block_img_work {
      width: 50%;
      display: flex;
      justify-content: center;
    }
    .block_input_edit {
      width: 50%;
    }
  }
  .block_img {
    display: flex;
    width: 500px;
    height: 280px;
    background: #dee4ed;
    border: 1px dashed #414165;
    .btn_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      span {
        padding: 10px;
        white-space: pre-wrap;
        color: #414165;
      }
      .btn_load_img {
        width: 180px;
        height: 50px;
        border-radius: 50px;
        border: none;
        font-size: 20px;
        font-weight: 400;
        background-image: linear-gradient(90deg,#ad00ed,#5500f2);
        color: #fff;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .link {
    margin-top: 20px;
  }
  .creat_tag {
    margin-top: 50px;

  } 
  .name, .link, .texta, .creat_tag {
    width: 100%;
    display: flex;
    flex-direction: column;
    .label_input_edit {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 50px;
      border-bottom: 1px solid #414165;
      margin-top: 15px;
      .text_in {
        color: #757c8a;
      }
      .label_in {
        .input {
          input {
            width: 100%;
            height: 30px;
            outline: none;
            border: none;
          }
        }
      }
    }
  }
  .texta {
    .label {
      height: 150px;
      border: none;
      margin-top: 10px;
    }
    .label_in {
      width: 100%;
      border: 1px solid #a0a5b1;
      margin-top: 10px;
    }
    textarea {
      outline: none;
      border: none;
      width: 100%;
      height: 80px;
      resize: none;
    }
  }
  .buttons {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: flex-end;
    width: 500px;
    .btn_canled {
      border: none;
      outline: none;
      background: none;
      margin-right: 50px;
      font-size: 18px;
      color: #383bcf;
      font-weight: 400;
        cursor: pointer;
    }
    .btn_save {
      width: 180px;
        height: 50px;
        border-radius: 50px;
        border: none;
        font-size: 20px;
        font-weight: 400;
        background-image: linear-gradient(90deg,#ad00ed,#5500f2);
        color: #fff;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
    }
  }
  .works {
    display: flex;
    margin-top: 50px;
    /* flex-wrap: wrap; */
  }
  .creat_new_work {
    width: 350px;
    height: 550px;
    background-image: linear-gradient(90deg,#ad00ed,#5500f2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    .work_plus {
      font-size: 46px;
      width: 140px;
      height: 140px;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      white-space: pre-wrap;
      font-size: 20px;
      font-weight: 600;
      margin-top: 15px;
    }
  }
  .the_work {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    width: 350px;
    height: 550px;
    background: #fff;
  }
  .img_work {
    width: 100%;
    height: 190px;
    position: relative;
    .tags_img {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      list-style: none;
      .tags_item {
        margin-left: 5px;
        padding: 10px 16px;
        border-radius: 50px;
        background: #fff;
        color: #757c8a;
      }
    }
    .work_image{
      width: 100%;
    height: 100%;
    }
  }
  .information_work {
    padding: 15px;
    display: flex;
    flex-direction: column;
    .title_work {
      font-weight: 600;
      color: #414c63;
    }
    .text_work {
      margin-top: 10px;
      line-height: 30px;
      font-weight: 600;
      color: #757c8a;
    }
    .link_work {
      text-decoration: none;
      margin-top: 10px;
      color: #383bcf;
      font-weight: bold;
    }
  }
  .edit_panel {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    a {
      color: #a0a5b1;
      text-decoration: none;
    }
  }
  .edit {
    display: flex;
  }
  .ico_edit {
    width: 16px;
    height: 16px;
    background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
    margin-left: 10px;
  }
  .ico_delete {
    width: 16px;
    height: 16px;
    background: svg-load('remove.svg', fill=red, width=100%, height=100%);
    margin-left: 10px;
  }
  /******REWIEVS BLOCK******/

   .rewievs {
    display: flex;
    padding: 55px 60px;
    flex-direction: column;
    font-weight: bold;
    color: #414c63;
    .title {
      display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    color: #414c63;
    font-size: 34px;
    font-weight: bold;
    }
  }
  .edit_rewievs_block {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background: #fff;
    padding: 30px 25px;
  }
  .title_rewievs{
     min-height: 50px;
    border-bottom: 1px solid #414c63;
    color: #414c63;
    font-weight: bold;
    font-size: 20px;
  }
  .form_rewievs {
    margin-top: 40px;
    display: flex;
  }
  .avatar_rew {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    .rewievs_image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    .load_avatar {
      text-decoration: none;
      margin-top: 15px;
      color: #757c8a;
      font-weight: bold;
    }
  }
  /**/
  .data_rewievs  {
    display: flex;
    flex-direction: column;
  }
  .name_pro {
    display: flex;
    width: 100%;
  }
  .pro {
    margin-left: 15px;
  }
  .name,.pro {
    display: flex;
    flex-direction: column;
    width: 50%;
    .label {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #b1b1ba;
    }
  }
  .text_in {
    color: #a0a5b1;
  }
  .label_in {
    input {
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
    }
  }
  .texta {
    margin-top: 15px;
  }
  
  .rewievs_2 {
    display: flex;
    flex-wrap: wrap; 
    margin-top: 40px;
  }
  .creat_new_rewievs {
    display: flex;
    flex-direction: column;
    height: 380px;
    width: 340px;
    background-image: linear-gradient(90deg,#ad00ed,#5500f2);
    justify-content: center;
    align-items: center;
    color: #fff;
      cursor: pointer;
    .rewievs_plus {
      font-size: 60px;
      width: 160px;
      height: 160px;
      border: 2px solid #fff;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .text {
      font-size: 20px;
      margin-top: 15px;
      font-weight: bold;
    }
  }
  .the_rewievs {
    display: flex;
    height: 380px;
    width: 340px;
    flex-direction: column;
    padding: 25px 30px;
    background: #fff;
    margin-left: 40px;
  }
  .img_rewievs {
    height: 150px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #a0a5b1;
    .rewievs_image {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }
  .name_and_pro {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .name {
      font-size: 20px;
      font-weight: bold;
      color: #414c63;
      width: 100%;
    }
    .pro {
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      color: #a0a5b1;
    }
  }
  .information_rewievs {
    margin-top: 20px;
    font-weight: 600;
    color: #a0a5b1;
    line-height: 25px;
    height: 400px;
  }
  /*LOGIN CSS*/
  .aut_play{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  .form_aut {
    padding: 60px 70px;
    background: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .title {
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #a0a5b1;
  }
  .label {
    border-bottom: 1px solid #b1b1ba; 
    width: 100%;
    height: 100px;
    cursor: pointer;
    margin-top: 30px;
  }
  .text_login {
    font-size: 15px;
    color: #b1b1ba;
    padding: 10px 0;
    font-weight: bold;
  }
  .label_login {
    display: flex;
    margin-top: 20px;
  }
  .input {
    height: 100%;
    input {
       border: none;
      background: none;
      height: 30px;
      outline: none;
      color: #000;
      font-weight: bold;
    }
  }
  .ico_user {
    width: 24px;
    height: 24px;
    background: svg-load('user.svg', fill=#b1b1ba, width=100%, height=100%);
    margin-right: 10px;
  }
  .ico_pass {
    width: 24px;
    height: 24px;
    background: svg-load('key.svg', fill=#b1b1ba, width=100%, height=100%);
    margin-right: 10px;
  }
  .button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    button {
      width: 350px;
      height: 85px;
     background-image: linear-gradient(90deg,#ad00ed,#5500f2);
      color: #fff;
      font-weight: bold;
      font-size: 30px;
      border: none;
      cursor: pointer;
      border-radius:  50px 0 50px 0;
    }
  }
</style>
<script>
new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null
    },
    methods: {
        checkForm: function() {
          if(this.name){
            return true;
          }

          this.errors = [];

          if(!this.name){
            this.errors.push('Поле Логин не заполненно');
          }
        }
    }
});
</script>