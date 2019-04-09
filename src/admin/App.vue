<template lang="pug">
        .wrapper
          .admin_block#admin_block
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
                    value="tab.title"
                  ).nav_link 
            router-view
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/about" },
        { title: "Отзывы", href: "/rewievs" },
        { title: "Работы", href: "/work" }
      ]
    };
  }
  
};


</script>
<style lang="postcss" src="./styles/main.pcss"></style>
