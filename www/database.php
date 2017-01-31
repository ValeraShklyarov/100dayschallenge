<?
echo 'DATABASE';

/* Подключение к базе данных MySQL, используя вызов драйвера */
$dsn = 'mysql:dbname=first_project;host=127.0.0.1';
$user = 'root';
$password = '';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Подключение не удалось: ' . $e->getMessage();
}

$statement = $dbh->query('SELECT * FROM articles');

var_dump($statement->fetchAll(PDO::FETCH_ASSOC));