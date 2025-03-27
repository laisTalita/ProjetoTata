<?php
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $destinatario = $_POST['email'];
    $nome = $_POST['nome'];
    $mensagem = $_POST['textArea'];
    $escolha = $_POST['escolha'];

    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->SMTPAuth = true;
        $mail->Username = 'laistalita5664@gmail.com'; 
        $mail->Password = 'qpty rdim jghh woli'; 
        $mail->setFrom('laistalita5664@gmail.com', 'Lais Talita');
        $mail->addAddress($destinatario, $nome); 
        $mail->Subject = 'Envio de email';
        $mail->CharSet = 'UTF-8';

         $mail->msgHTML("<p>Mensagem de <b>$nome</b>, boas-vindas!<br><br>Mensagem: $mensagem</p><p>Te achei pelo: $escolha</p>");
        
         $mail->AltBody = 'Mensagem de boas-vindas de ' . $nome . ': ' . $mensagem . ' Te achei pelo: ' . $escolha;
 
         if($mail->send()){
            echo 'Mensagem enviada com sucesso!';
         }else{
            echo 'Erro ao enviar a mensagem';
         }
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
    }
}
?>