<template lang="pug">
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
</template>
<style lang="postcss">
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
