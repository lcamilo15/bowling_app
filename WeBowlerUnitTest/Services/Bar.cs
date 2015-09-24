namespace WeBowlerUnitTest
{
    internal class Bar : IEmailService
    {
        private readonly IEmailService _emailService;

        public Bar(IEmailService emailService)
        {
            this._emailService = emailService;
        }

        public void DoSomethingThatSendsAnEmail()
        {
            _emailService.Send("message sent via email");

        }

        public void Send(string messageSentViaEmail)
        {
            //Do Something here to send email
        }
    }
}