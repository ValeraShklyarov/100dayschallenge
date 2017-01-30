package lr2_forvika;

//------------------> 1(24) <-------------//
class TestArray {
    
    //int[] arr;  1 sposob
    //int arr[];  2 sposob
    //arr = new int[10]; - 10 razmer;
    
    //int[] arr = new int[10]; //a vot tak vse elems massiva = 0
    //arr[1] = 5;  - 2i element massiva teper' = 5!
    
    /*int[] arr = new int[10];
    for (int i = 0; i < arr.length; i++) {
        arr[i] = i*i;
    } */
    
    int[] arr = {1,2,3,4,5};
}

//-------------------> 2(27) <---------------//
class Factorial{
 
    public static int getFactorial(int num) throws FactorialException{
     
        int result=1;
        if(num<1) throw new FactorialException("Число не может быть меньше 1", num);
         
        for(int i=1; i<=num;i++){
             
            result*=i;
        }
        return result;
    }
}
 
class FactorialException extends Exception{
 
    private int number;
    public int getNumber(){return number;}
    public FactorialException(String message, int num){
     
        super(message);
        number=num;
    }
}


public class LR2_ForVika {

    static void arex() throws ArithmeticException 
    { 
        double zeroDiv = 20/0; 
        throw new ArithmeticException(); 
    }

    public static void main(String[] args) {
        
         //------------------2(27)--------------------------//
        try{
            int result = Factorial.getFactorial(6);
            System.out.println(result);
        }
        catch(FactorialException ex){
         
            System.out.println(ex.getMessage());
            System.out.println(ex.getNumber());
        }
        
        //----------->3(31)<-----------// 
        
        try {
            arex();
        }
        // Snachala proizvodnie Exception potom bazovie
        catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception here!");
        }
        catch (Exception e) {
            System.out.println("We have Exception!");
        }
        finally {
            System.out.println("finally block work)");  // work anyway
        }
        
    }
    
    
    
}
