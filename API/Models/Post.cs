namespace Models
{
    public class DTOPost
    {
        public long Id { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
