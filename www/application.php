<? 

class Application 
{
	private static $instance;

	public $page;
	public $action;
	public $path;
	public $database;

	public function __construct () 
	{
		$this->database = new Database();
	}
	public function run ()
	{ 

		$this->page = isset($GET['page']) ? $_GET['page'] : 'home';
		$this->action = isset($_GET['action']) ? $_GET['action'] : 'index';
	

		//Создать экземпляр контроллера и выполнить действие
		//динамичиское создание переменной
		$controllerName = $this->page;
		
		$path =  $this->path . '/controllers/' . $controllerName . '.php';
		//подключение класса
		
		if (file_exists($path))
		{
			require_once $path;
		}
		else 
		{
			echo '404';
			return;
		}
		
		$action = $this->action;

		$controller = new $controllerName();
		$controller->path = $this->path;
		$controller->page = $this->page;
		ob_start();
		$controller->$action();
		$content = ob_get_contents();
		ob_end_clean();
		$this->renderLayout($content);
	}

	public static function get () {
		if (self::$instance == null) {
			self::$instance = new self();
		}

		return self::$instance;
	} 

	public function renderLayout ($content) {
		$this->render($this->path . '/views/layouts/index.php' , ['content' => $content]);
	}

	public function renderView($view , $params) {
		$this->render($this->path . '/views/' . $this->page . '/' . $view . '.php');
	}

	public function render ($path, $params = []) {
		extract($params);
		unset($params);
		require $path;
	}
}
	//__LINE__ возвращает линию
	

