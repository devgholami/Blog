namespace Service.Models
{
    public class DTOPost: DTOResult
    {
        public PostItem Item { get; set; } = new PostItem();
    }
    public class DTOPostList:DTOResult
    {
        public IList<PostItem> Items { get; set; } = new List<PostItem>();
    }
    public class PostItem
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
