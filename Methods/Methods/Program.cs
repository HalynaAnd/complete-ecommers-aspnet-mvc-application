﻿using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    partial class Program
    {
        static void Main(string[] args)
        {
            var calculator = new Calculator();
            Console.WriteLine(calculator.Add(1, 2));
            Console.WriteLine(calculator.Add(1, 2,3));
            Console.WriteLine(calculator.Add(1, 2,3,4));

        }

        static void UsePoint()
        {
            try
            {
                var point = new Point(10, 20);
                point.Move(new Point(40, 30));
                Console.WriteLine("Point is at ({0},{1})", point.X, point.Y);

                point.Move(100, 200);
                Console.WriteLine("Point is at ({0},{1})", point.X, point.Y);
            }
            catch (Exception)
            {
                Console.WriteLine("An unexpected exepetion happened"); ;
            }
        }

    }
}