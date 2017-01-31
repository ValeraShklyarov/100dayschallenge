<? 

class Home 
{
	public $path;
	public $page;

	public function __construct () 
	{
		
	}

	public function index() {

		Application::get()->renderView('index', ['title' => 'About me']);
	}



	public function about ()
	{
		var_dump(__LINE__);
	}
	
}

