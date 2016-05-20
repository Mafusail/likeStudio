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



});