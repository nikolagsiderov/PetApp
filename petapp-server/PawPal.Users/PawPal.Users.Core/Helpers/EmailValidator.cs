using System.Net.Mail;

namespace PawPal.Users.Core.Helpers
{
    public class EmailValidator
    {
        private readonly string _emailAddress;

        public EmailValidator(string emailAddress)
        {
            _emailAddress = emailAddress;
        }

        public bool IsValidEmailAddress()
        {
            try
            {
                var emailAddress = new MailAddress(_emailAddress);

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
