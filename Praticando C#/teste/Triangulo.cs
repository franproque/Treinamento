
using System;
namespace teste

{
    public class Triangulo
    {
       public double a;
       public double b;
       public double c;


       public double area()
       {
           double p =(a+b+c)/2.0;
           double raiz = Math.Sqrt(p*(p-a)*(p-b)*(p-c));
           return raiz;
       }

       public override  string ToString(){

           return "Dados do Triangulo"+a+" "+b+" "+c;
       }
    }
}