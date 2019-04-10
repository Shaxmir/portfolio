<template lang="pug">
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
                button(@click.prevent="showWorkAdd = false").btn_canled Отмена
                button.btn_save Сохранить
</template>
<script>
export default {
    props: {
        showWorkAdd: Boolean
    }
}
</script>
