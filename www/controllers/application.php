<? 

class Home
{
	public $path;
	public $index;

	public function __construct () 
	{
		
	}
	public function index()
	{
		require $this->path . '/views/' . $this->page . '/index.php';
	}

	public function about ()
	{
		var_dump(__LINE__);
	}
}

?>