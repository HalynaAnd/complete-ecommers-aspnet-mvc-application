using System;
 
namespace MyApp // Note: actual namespace depends on the project name.
{
    class Program
    {
        static void Main(string[] args)
        {
            var custimer = new Customer(1);
            custimer.Orders.Add(new Order());
            custimer.Orders.Add(new Order());

            custimer.Promote();
            Console.WriteLine(custimer.Orders.Count);
        }
    }
}