namespace MyApp // Note: actual namespace depends on the project name.
{
    partial class Program
    {
        public class Calculator
        {
            public int Add(params int[] numbers)
            {
                var sum = 0;
                foreach (var i in numbers)
                {
                    sum += i; 
                }
                return sum;
            }
        }

    }
}