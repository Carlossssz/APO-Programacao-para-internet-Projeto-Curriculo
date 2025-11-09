<?php 
$pessoa = $_POST;
$linkedin = $_POST['portifolio'];

$nome = $_POST['nome'];
$cidade = $_POST["cidade"];
$endereco = $_POST["endereco"];
$estado = $_POST["estado"];
echo "$nome </br>";

echo "Endereço: $cidade - $estado </br>
$endereco <br><br>";

echo $linkedin;

$nomes = $_POST['empresaNome'] ?? [];
$cargos = $_POST['empresaCargo'] ?? [];
$datasInicio = $_POST['dataInicio'] ?? [];
$datasFinal = $_POST['dataFinal'] ?? [];
$atividades = $_POST['atividades'] ?? [];

$listaEmpresas = [];

foreach($nomes as $i => $empresa){
    $cargo = $cargos[$i] ?? '';
    $inicio = $datasInicio[$i] ?? '';
    $fim = $datasFinal[$i] ?? '';
    $atividade = $atividades[$i] ?? '';

    $listaEmpresas[] = "Empresa: $empresa - Cargo: $cargo - De $inicio até $fim <br> Atividades: $atividade <br><br>";
};

echo implode('', $listaEmpresas);

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>documento teste</title>
    <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>
</head>
<body>
    <canvas id="linkedin"></canvas>
    <script>
        const qr = new QRious({
            element: document.getElementById("linkedin"),
            value: "<?php echo htmlspecialchars($linkedin, ENT_QUOTES) ?>",
            size: 200
        })

    </script>
</body>
</html>