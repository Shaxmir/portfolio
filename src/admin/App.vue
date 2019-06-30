<template lang="pug">
        .wrapper
<<<<<<< HEAD
          .admin_block
=======
          .admin_block#admin_block
>>>>>>> week4
            header.header
              .head_info
                .user_avatar
                  img(src="../images/content/user.jpg", alt="").avatar
                .name_lastName Шахмир Ахмедилов
                .name_panel Панель администрирования
              .head_exit
<<<<<<< HEAD
                a(href="#").exit_link Выйти
            nav.nav_menu
              ul.nav_list
                - var nav = ['Обо мне','Работы','Отзывы']
                - for(var i = 0; i < nav.length; i++)
                  li.nav_item
                    a(href="#").nav_link= nav[i]
            router-view            
          script(type="text/x-template")#aut
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
=======
                a(href="#" @click.prevent="deleteThisToken").exit_link Выйти
            nav.nav_menu
              ul.nav_list
                li.nav_item(v-for="tab in tabs")
                  router-link(
                    :data-text="tab.title" 
                    :to="tab.href"
                    exact-active-class="active"
                    value="tab.title"
                  ).nav_link 
            router-view
>>>>>>> week4
</template>
<script>
import Vue from "vue";
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/about" },
        { title: "Отзывы", href: "/rewievs" },
        { title: "Работы", href: "/work" }
      ]
    };
  },

  methods: {
     ...mapActions('user', ['logout']),
     async deleteThisToken () {
                try {
                    await this.logout();
                    this.$router.replace('/aut');
                } catch (error) {
                    console.log(error);
                }
            }
  }
  
};


</script>
<style lang="postcss" src="./styles/main.pcss"></style>
