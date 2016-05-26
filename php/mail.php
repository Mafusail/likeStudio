<?php

$to = "shapovalenko.a.a@gmail.com" . ", ";
$to .= "r_g_b@i.ua" . ", ";
$to .= "maxsusmail@gmail.com";
$tema = "Новый заказ в компанию Like Studio";
$message = "Имя пользователя: " .$_POST['imya']. "<br>";
$message .= "Номер телефон: " .$_POST['phone']. "<br>";
$message .= "Email: " .$_POST['email']. "<br>";
$message .= "Комментарии: " .$_POST['message']. "<br>";
$message .= "Дополнительные файлы: " .$_POST['maket'];

$headers = "From: $from_user <$from_email>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

mail($to, $tema, $message, $headers);


?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Запрос</title>
    </head>

    <body>
        <h1>Ваш заказ отправлен на обработку.</h1>
        <h2>В ближайшие время наш менеджер свяжется с Вами</h2>
        <h3>Спасибо Вам, за обращение в Like Studio</h3>
        <script type="text/javascript">
             setTimeout('location.replace("/sh1/likeStudio/index.html")', 5000);
        </script>

    </body>

    </html>
