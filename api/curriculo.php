<?php 
foreach ($_POST as $chave => $valor) {
    if (is_array($valor)) {
        $$chave = array_map(fn($v) => trim(htmlspecialchars($v)), $valor);
    } else {
        $$chave = trim(htmlspecialchars($valor));
    }
}

$endereco = "$endereco, $estado, $cep";
$nascimento = date("d/m/Y", strtotime($nascimento));

$listaEmpresas = [];
$listaFormacaoAcademica = [];


if(isset($empresaNome)){
    foreach($empresaNome as $i => $empresa){
        $cargo = $empresaCargo[$i] ?? '';
        $inicio = date("d/m/Y", strtotime($dataInicio[$i])) ?? '';
        $fim = !empty($dataFinal[$i]) ? date("d/m/Y", strtotime($dataFinal[$i])) : '';
        $atividade = $atividades[$i] ?? '';
        $data = !empty($fim) ? "$inicio até $fim" : "Data de Inicio: $inicio";

        $listaEmpresas[] = "
            <div class='elementChildren'>

                        <div class='mb-4'>
                            <div class='flex empresaName'>
                                <div>
                                    <strong>Empresa:</strong>
                                    <span>{$empresa}</span>
                                </div>
                                <div class='self-end'>{$data}</div>
                            </div>
                            <p>
                                <strong>Cargo:</strong> {$cargo}
                            </p>
                            <p>
                                <strong>Principais atividades:</strong>
                                {$atividade}
                            </p>
                        </div>
                    </div>
        ";
    };
};

if(isset($cursoNome)){
    foreach($cursoNome as $i => $curso){
        $instituicaoAtual = $instituicao[$i] ?? '';
        $inicio = !empty($dataInicioFormAcad[$i]) ? date("d/m/Y", strtotime($dataInicioFormAcad[$i])) : '';
        $fim = !empty($dataFinalFormAcad[$i]) ? date("d/m/Y", strtotime($dataFinalFormAcad[$i])) : '';
        $cursandoAtualmente = !empty($cursando[$i]) ? "Cursando atualmente" : '';
        $data = !empty($fim) ? "$inicio até $fim" : "<p>Inicio: $inicio</p><p><strong>$cursandoAtualmente</strong></p>";


        $listaFormacaoAcademica[] =
        "
            <div class='elementChildren relative w-full' >
                    <div class='bg-black!'>
                        <div class='flex empresaName'>
                            <div>
                                <strong>Curso:</strong>
                                <span>{$curso}</span>
                            </div>
                            <div class='self-end absolute top-0 right-0 flex flex-col items-end'>{$data}</div>
                        </div>
                        <p>
                            <strong>Instituição:</strong>
                            {$instituicaoAtual}
                        </p>
                    </div>
            </div>
        ";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculo</title>

    <script src="https://cdn.jsdelivr.net/npm/qrious/dist/qrious.min.js"></script>
    <link rel="modulepreload" crossorigin href="../assets/modulepreload-polyfill-B5Qt9EMX.js">
    <script type="module" crossorigin src="../assets/curriculo-DF4DIR7H.js"></script>
    <link rel="stylesheet" crossorigin href="../assets/curriculo-DE7ICv57.css">


</head>

<body>
    <div id="curriculo" class="relative">
        <header>
            <div id="headerBar" aria-hidden="true">
                <div id="flag"></div>
            </div>
            <!--Nome-->
            <h1><?php echo $nome ?></h1>
            <div class="w-full flex flex-col items-center">
                <p><?php echo $endereco ?></p>
                <p><?php echo $cell ?></p>
                <p><?php echo $email ?></p>
                <div class="flex justify-between gap-1">
                    <p>Data de nacimento:</p>
                    <p><?php echo $nascimento ?></p>
                    <p>- <?php echo $Nacionalidade ?></p>
                </div>

            </div>
        </header>

        <main>
            <?php if(isset($objetivo) && $objetivo): ?>
                <div>
                    <div class="box">
                        <h2>Objetivo Profissional</h2>
                        <p><?php echo $objetivo ?></p>
                    </div>
                </div>
                
            <?php endif; ?>
            
            <?php if(isset($cursos) && $cursos){
                echo 
                "<div id='cursos' class='box'>
                    <h2>Cursos</h2>
                    <p>$cursos</p>
                </div>";
                }
            ?>
            <?php if(isset($hardSkills) && $hardSkills){
                echo 
                "<div id='hardSkills' class='box'>
                    <h2>hard Skills</h2>
                    <p>$hardSkills</p>
                </div>";
                }
            ?>

            <?php if(isset($softSkills) && $softSkills){
                echo 
                "<div id='softSkills' class='box'>
                    <h2>soft Skills</h2>
                    <p>$softSkills</p>
                </div>";
                }
            ?>
            
            <!-- IMPRIME TODOS AS EXPERIÊNCIAS PROFISSIONAIS -->
            <?php if(isset($empresaNome) && $empresaNome): ?>
                <div id='expProfBox' class='box'>
                    <h2>Experiência Profissional</h2>
                    <?php 
                        echo implode('', $listaEmpresas);
                    ?>
                </div>
            <?php endif ?>
            
            <!-- IMPRIME TODOS AS FORMAÇÕES ACADÊMICAS -->
            <?php if(isset($cursoNome) && $cursoNome): ?>
                <div id='formAcadBox' class='box'>
                    <h2>Formação Acadêmica</h2>
                    <?php
                        echo implode('', $listaFormacaoAcademica);
                    ?>
                </div>
            <?php endif ?>

            <!--QRCODE LINKEDIN-->
            <div class="qrcode absolute top-16 right-5 bg-neutral-500 text-white text-center">
                <h2>Linkedin</h2>
                <canvas id="qr"></canvas>
            </div>
        </main>
    </div>

    <button
        class="relative hover:scale-110 transition-all duration-300 active:scale-100 text-xl hover:shadow-lg shadow-neutral-800 active:shadow-none hover:bg-orange-400 hover:text-neutral-700 cursor-pointer border border-orange-400 text-orange-400 rounded-full flex items-center font-bold h-10 select-none"
        onclick="imprimirCurriculo()" id="btnImprimir">Imprimir Curriculo</button>



</body>

</html>