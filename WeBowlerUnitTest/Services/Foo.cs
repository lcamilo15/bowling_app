using System;

namespace WeBowlerUnitTest.Services
{
    public class Foo : IDataService
    {
        private readonly IDataService _dataService;

        public Foo(IDataService dataService)
        {
            _dataService = dataService;
        }

        public int CalculateValueWithDataLookup(int i)
        {
            return i * _dataService.LookupMultiplier();
        }

        public int LookupMultiplier()
        {
            return 2;
        }
    }
}