<template lang="pug">  
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
</template>