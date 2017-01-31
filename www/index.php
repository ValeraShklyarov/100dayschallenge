<? 
//подключения файла application.php
require_once 'application.php';

Application::get()->path = __DIR__;
Application::get()->run();

?>