$(document).ready(function(){

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

                $("header").css({
                    "background-color": "#473c89",
                    "border-bottom": "1px solid #ffffff"
                });
                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({
                    "margin-top": "250px",
                    "width": "450px",
                    "height":"450px"
                });

                $("header").css({
                    "background-color": "transparent",
                    "border-bottom": "1px solid transparent"
                });
                flag = false;
            }
        }
    });


    // выплывающие меню
  

    $('#logo2').click(function () {
        $('#menu ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 550){
            $('#menu ul').removeAttrs('style');
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
         if ($(window).width() <= 650){ 
            $('#menu ul').slideToggle(500);
        }
    });







    // Заказ

    $('#button_a').click(function () {
        $("#block_7_a").show(500);
        $("#hover_a").show();
        $("#button_a").css({
            "right": "-350px",
        });
    });
    $('#hover_a').click(function () {
        $("#block_7_a").hide();
        $("#hover_a").hide();
        $("#button_a").css({
            "right": "-35px",
        });
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
                minlength: "Номер телефона должен быть не менее <br> 10 символов",
                maxlength: "Номер телефона должен быть не менее <br> 10 символов",
            },

        }

    });


// пасхалка

    $('.znak2').click(function () {

        $('.znak2').click(function () {

            $('.znak2').click(function () {

                $('.znak2').click(function () {

                    $('.znak2').click(function () {


                        // матрица
                        $("#osnovnoi_a").hide();
                        $("#c").show();







                        // $("#pashalka video").show(500);
                        $("#pashalka_vibor").show(500);
                        $("#pashalka_tabletki_blue").show(500);
                        $("#pashalka_tabletki_red").show(500);
                    });
                });
            });
        });
    });
    $('#pashalka_tabletki_blue').click(function () {


        // матрица
        $("#osnovnoi_a").show();
        $("#c").hide();


        // $("#pashalka video").hide(500);
        $("#pashalka_vibor").hide(500);
        $("#pashalka_tabletki_red").hide(500);
        $("#pashalka_tabletki_blue").hide(500);
    });

    $('#pashalka_tabletki_red').click(function () {



        // матрица
        $("#osnovnoi_a").hide(500);
        $("#osnovnoi_a").show();
        $("#c").hide();





        $("#pashalka video").hide(500);
        $("#pashalka_vibor").hide(500);
        $("#pashalka_tabletki_red").hide(500);
        $("#pashalka_tabletki_blue").hide(500);
        $("header").hide(500);
        $(".block_1_a").hide(1500);
        $(".block_2_v").hide(2500);
        $(".block_3_m").hide(3500);
        $(".block_4_m").hide(4500);
        $(".block_5_a").hide(5500);
        $(".block_6_a").hide(6500);
        $("#button_a").hide(7500);
        $(".block_8_v").hide(8500);
        $("#pashalka_end img").show(8500);
        $("#c").show(9000);
    });

    $('#pashalka_end img').click(function () {


        $("#c").hide();


        $("#pashalka_end img").hide(1000);
        $("header").show(500);
        $(".block_1_a").show(1500);
        $(".block_2_v").show(2500);
        $(".block_3_m").show(3500);
        $(".block_4_m").show(4500);
        $(".block_5_a").show(5500);
        $(".block_6_a").show(6500);
        $("#button_a").show(7500);
        $(".block_8_v").show(8500);

    });


    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

//making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
    var chinese = "BIONIC";
    // var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
    chinese = chinese.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
    var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1;

//drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#473c89"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = chinese[Math.floor(Math.random()*chinese.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);






});