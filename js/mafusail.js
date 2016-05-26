$(document).ready(function(){


    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200){
            if(!flag){
                $("#logo").css({
                    "margin-top": "-5px",
                    "width": "50px",
                    "height":"50px"
                });

                $("header").css({"background-color": "#473c89"});
                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({
                    "margin-top": "50%",
                    "width": "250px",
                    "height":"250px"
                });

                $("header").css({
                    "background-color": "transparent"
                });
                flag = false;
            }
        }

    });




    /*Якорь*/

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });







    // Заказ

    $('#button_a').click(function () {
        $("#block_7_a").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_7_a").hide();
        $("#hover_a").hide();
    });


    // "Команда" всплывающая информация Алекса

    $('#inf_a').click(function () {
        $("#block_inf_a").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_inf_a").hide();
        $("#hover_a").hide();
    });

    // "Команда" всплывающая информация Макса

    $('#inf_m').click(function () {
        $("#block_inf_m").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_inf_m").hide();
        $("#hover_a").hide();
    });


    // "Команда" всплывающая информация Виталика

    $('#inf_v').click(function () {
        $("#block_inf_v").show(500);
        $("#hover_a").show();
    });
    $('#hover_a').click(function () {
        $("#block_inf_v").hide();
        $("#hover_a").hide();
    });
    
    
    
    
    
    
    
    
    
    

    /*validate form*/

    $("#loginform").validate({

        rules: {

            imya: {
                required: true,
            },

            email: {
                email: true,
                required: true,
            },

            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
            },
        },

        messages: {

            imya: {
                required: "Поле 'Имя' <br>обязательно для заполнения!",
            },

            email: {
                required: "Поле для e-mail обязательно <br> для заполнения!",
                email: "В e-mail адресе должен <br> присудстовать символ '@'! <br> Примере: LIKESTIDIO@GMAIL.COM",
            },

            phone: {
                required: "Поле 'Номер телефон' обязательно <br> для заполнения!",
                digits: "Это поле содержит только цифры <br> Пример:  0631234567",
                minlength: "Пароль должен быть не менее <br> 10 символов",
                maxlength: "Пароль должен быть не менее <br> 10 символов",
            },

        }

    });





});