using System;
using System.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace WeBowlerUnitTest
{
    [TestClass]
    public class UnitTest1
    {
        public string Message { get; set; }

        [AssemblyInitialize]
        public static void AssemblyInitialize(TestContext context)
        {
            Debug.WriteLine("Assembly Initialize");
        }

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            Debug.WriteLine("Class Initialize");
        }

        [TestInitialize]
        public void TestInitialize()
        {
            Message = "Hello";
            Debug.WriteLine("Test Setup");
        }

        [TestMethod]
        public void TestMethod1()
        {
            Debug.WriteLine("Test Method");
            Assert.AreEqual(Message, "Hello");
            
        }

        [TestMethod]
        public void TestMethod2()
        {
            Debug.WriteLine("Test Method 2");
            Assert.AreEqual(Message, "Hello");
        }

        [TestCleanup]
        public void TestCleanup()
        {
            Debug.WriteLine("Test Cleanup");
        }

        [AssemblyCleanup]
        public static void AssemblyCleanUp()
        {
            Debug.WriteLine("Assembly CleanUp");
        }

        /*

    1 - Runs [AssemblyInitialize]
2 - Randomly runs a [ClassInitialize]
3 - Runs the class [TestInitialize]
4 - Randomly runs a [TestMethod] from that class
5 - Runs the class [TestCleanup]
Repeat 3 through 5 for each TestMethod in the class
Repeat 2 through 5 for each test class
6 - Runs [AssemblyCleanup]

    */
    }
}
