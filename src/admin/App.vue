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

<style lang="postcss" src="./styles/main.pcss"></style>
<script src="./scripts/main.js"></script>