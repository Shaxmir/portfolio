var form = document.querySelector('.form');
var btn = document.querySelector('.btn');
var modalWin = document.querySelector('.windows_form_call');
var close = document.querySelector('.win_button');

btn.addEventListener('click', event => {
    event.preventDefault();
    if(validateForm(form)) {
       var formdata = new FormData();
       formdata.append('name', form.elements.name.value);
       formdata.append('phone', form.elements.email.value);
       formdata.append('comment', form.elements.text.value);
       formdata.append('to', 'shaxrussian@gmail.com');
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formdata);
        modalWin.style.opacity = '1';
        modalWin.style.zIndex = '99';
            xhr.addEventListener('load', () => {
               if (xhr.response.status) {
                console.log("Все ок!");
               }
            })
    }
});

function validateForm(form){
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }
    if (!validateField(form.elements.text)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

close.addEventListener('click', e => {
    e.preventDefault();
    modalWin.style.opacity = '0';
    modalWin.style.zIndex = '-1';
})