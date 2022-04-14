<?php
    $posted_value = filter_var(trim($_POST['wordLang']), FILTER_SANITIZE_STRING);

    $basketJson = file_get_contents('./data.json');
    $usedBasket=json_decode($basketJson,TRUE);

    for ($i = 0, $all = count($usedBasket); $i < $all; $i++) {
        if ($usedBasket[$i]['word'] === $posted_value) {
            unset($usedBasket[$i]);
        }
    }

    $usedBasket = array_values($usedBasket);

    file_put_contents('./data.json',json_encode($usedBasket, JSON_UNESCAPED_UNICODE));
    unset($usedBasket);

    header('Location: ../index.html');