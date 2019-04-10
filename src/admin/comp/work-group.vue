<template lang="pug">
li.the_work
    .img_work
        img(src="../img/one.png", alt="").work_image
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
