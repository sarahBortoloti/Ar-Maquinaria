<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$celular = $_POST['celular'];
$mensagem = $_POST['mensagem'];
$estado = $_POST['estado'];
$cidade = $_POST['cidade'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];
$data_envio = date('d/m/Y');
date_default_timezone_set('America/Sao_Paulo');
$hora_envio = date('H:i:s');


// Compo E-mail
$arquivo = "
<style type='text/css'>
body {
    margin:0px;
    font-family:Verdane;
    font-size:12px;
    color: #000;
}
a{
    color: #666666;
    text-decoration: none;
}
a:hover {
    color: #fff;
    text-decoration: none;
}
</style>
<html>
<meta charset='UTF-8' /> 
<table width='510'  bgcolor='#fff'>
    <tr>
        <td width='500'><b>Nome: </b>$nome</td>
    </tr>
    <tr>
        <td width='320'><b>E-mail: </b>$email</td>
    </tr>   
    <tr>
        <td width='320'><b>telefone: </b>$telefone</td>
    </tr>
    <tr>
        <td width='500'><b>mensagem: </b>$celular</td>
    </tr>

    <tr>
        <td width='320'><b>telefone: </b>$estado</td>
    </tr>
    
    <tr>
        <td width='500'><b>mensagem: </b>$cidade</td>
    </tr>

    <tr>
    <td width='320'><b>telefone: </b>$assunto</td>
    </tr>
    <tr>
    <td width='500'><b>mensagem: </b>$mensagem</td>
    </tr>
    <tr>

        <td><b>Data/Hora de envio: </b>$data_envio ás $hora_envio </td>
    </tr>
</table>
</html>
";

 // emails para quem será enviado o formulário
$emailenviar = "ouvidoresassociados@gmail.com";
$destino = $emailenviar;
$assunto = "Contato pelo Site";

    // É necessário indicar que o formato do e-mail é html
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$nome.' <'.$email.'>';
    //$headers .= "Bcc: $EmailPadrao\r\n";

$enviaremail = mail($destino, $assunto, $arquivo, $headers, "-f$emailenviar");
if($enviaremail){
    $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
    echo "enviado com sucesso!";
    echo " <meta http-equiv='refresh' content='1;URL=contato'>";
} else {
    $mgm = "ERRO AO ENVIAR E-MAIL!";
    echo "";
}
?>