<template lang="pug">          
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