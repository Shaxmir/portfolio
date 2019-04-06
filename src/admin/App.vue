<template lang="pug">
        .wrapper
          .admin_block#admin_block
            
            //- .aut_play
            //-   form.form_aut#app
            //-     .remove
            //-     .title Авторизация
            //-     label.label
            //-       .text_login(for='name-input') Имя пользователя
            //-       .label_login
            //-         .ico_user
            //-         .input
            //-           input(name="name" type='name' v-model='name' class="name_input"  placeholder="Имя пользователя" required)
            //-           .mess {{ errors }}
            //-     label.label
            //-       .text_login Пароль
            //-       .label_login
            //-         .ico_pass
            //-         .input
            //-           input(name="password" type="password" class="password_input" placeholder="Пароль" required)
            //-     .button
            //-       button(type="button" @click.prevent="checkForm()").btn_login Отправить

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
                li.nav_item(v-for="tab in tabs")
                  router-link(
                    :data-text="tab.title" 
                    :to="tab.href"
                    exact-active-class="active"
                  ).nav_link
            router-view
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/bar" },
        { title: "Работы", href: "/goo" }
      ]
    };
  }
  
};


</script>
<style lang="postcss" src="./styles/main.pcss"></style>
