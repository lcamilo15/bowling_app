using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using WeBowlerUnitTest.Services;

namespace WeBowlerUnitTest.Tests
{
    [TestClass]
    public class TestDoubleTests
    {
        [TestMethod]
        public void Should_Calculate_PoperValue()
        {
            var b = Substitute.For<IDataService>();
            b.LookupMultiplier().Returns(2);

            var a = new Foo(b);
            var actual = a.CalculateValueWithDataLookup(5);

            Assert.AreEqual(10, actual);
        }

        [TestMethod]
        public void Should_Send_AnEmail()
        {
            var b = Substitute.For<IEmailService>();
            var a = new Bar(b);

            a.DoSomethingThatSendsAnEmail();
            b.Received().Send("message sent via email");
        }
    }
}
