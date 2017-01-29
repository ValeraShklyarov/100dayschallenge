package lr2;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

//------------------> 2(24) <-------------//
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
    
    //int[] arr = {1,2,3,4,5};
    
    //------------------>5(32)------------------//
    int[] initArr (int[] arr , int k) {
        for(int i=0; i<arr.length; i++){
           arr[i] = i*k; 
        }
        return arr;
    }
}

//-------------------> 3(27) <---------------//
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
//===============>>4(30)<<==================//
class UselessClassForLoops {
    
    //--------> IF <--------//
    void IF () {
        int i = 5;
        if(i<0) {
            System.out.println("i<0");
        } else if (i == 0) {
            System.out.println("i=0");
        } else {
            System.out.println("i>0");
        }
    }
    //---------> FOR + labels <-----------//
    void FOR () {
        label: for (int i = 0; i < 10; i++){
            for (int j = 0; j < 10; j++){
                if(i == 5)
                continue label;
            }
            System.out.println(i);
        }
    }
    //-----------> WHILE <---------//
    void WHILE () {
        int i =0;
        while(i<5) {
            i++;
        }
    }
    //------------>SWITCH<---------//
    void SWITCH () {
        int i = 2;
        switch(i){
            case 1: System.out.println("1");
                    break;
            case 2: System.out.println("2");
                    break;
            case 3: System.out.println("3");
                    break;
            default: System.out.println("default");
        }
    }
}

public class LR2 {

   
    public static void main(String[] args) {
        //---------------> 1(21) <-----------------// 
        try{ 
            //double divZero = 20/0 ;
            //System.out.println(divZero);
            FileInputStream fis = new FileInputStream("1.txt");
            
        }
        /*catch (IOException e) {
            System.out.println("ArithmeticException!!!");
        }*/
        catch (FileNotFoundException e){ 
            System.out.println("Oops, FileNotFoundException caught"); 
        }
        catch (Exception e) {  
            System.out.println("Other Exception here");  
        }
        //------------------3(27)--------------------------//
        try{
            int result = Factorial.getFactorial(6);
            System.out.println(result);
        }
        catch(FactorialException ex){
         
            System.out.println(ex.getMessage());
            System.out.println(ex.getNumber());
        }
    }  
}  
        
    

