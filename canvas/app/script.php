<?

    $name = $_POST['name'];
    var_dump($name);
}

   if (isset($_GET['u_score']))
{
    $score = $_GET['u_score'];
}

else
{
    echo '<script type="text/javascript">';
    echo 'document.location.href="' . $_SERVER['REQUEST_URI'] . '?u_score=" + score';
    echo '</script>';
    exit();
}

var_dump($score);