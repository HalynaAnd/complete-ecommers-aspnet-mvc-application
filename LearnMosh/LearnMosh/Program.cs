using System;
using System.Threading.Channels;

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer(1, "Jon");
            
            var order = new Order();
            customer.Orders.Add(order);

            Console.WriteLine(customer.Id);
            Console.WriteLine(customer.Name);
        }

    }
}