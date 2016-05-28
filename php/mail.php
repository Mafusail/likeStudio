<?php
$to = "shapovalenko.a.a@gmail.com" . ", ";
//$to .= "r_g_b@i.ua" . ", ";
//$to .= "maxsusmail@gmail.com";
$tema = "Новый заказ в компанию Like Studio";
$message = "Имя пользователя: " .$_GET['imya']. "<br>";
$message .= "Номер телефон: " .$_GET['phone']. "<br>";
$message .= "Email: " .$_GET['email']. "<br>";
$message .= "Комментарии: " .$_GET['message']. "<br>";
$message .= "Дополнительные файлы: " .$_GET['maket'];
$headers = "From: $from_user <$from_email>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$res = mail($to, $tema, $message, $headers);
if ($res){
    echo ('1');
}
else {
    echo ('0');
}

?>


