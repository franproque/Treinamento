using System;

namespace teste
{
    class Program
    {
        static void Main(string[] args)
        {
           Triangulo x,y;
           x=new Triangulo();
           y= new Triangulo();
           x.a= double.Parse(Console.ReadLine());
           x.b=double.Parse(Console.ReadLine());
           x.c=double.Parse(Console.ReadLine());


           y.a= double.Parse(Console.ReadLine());
           y.b=double.Parse(Console.ReadLine());
           y.c=double.Parse(Console.ReadLine());

            double i= x.area();
            double t = y.area();

            if(i>t){
                Console.WriteLine("O X é maior");
                
            }else{
                Console.WriteLine(" O Y é maior"+ y);
            }
           
          
        }
    }
}
