namespace PawPal.Users.Core.Options
{
    public class MongoDbOptions
    {
        public static string SectionKey = "PawPalDatabase";

        public string ReadWriteConnectionString { get; set; } = string.Empty;

        public string DatabaseName { get; set; } = string.Empty;

        public string CollectionName { get; set; } = string.Empty;
    }
}
