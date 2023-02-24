namespace Service.Models
{
    public class DTOPost : DTOResult
    {
        public PostItem Item { get; set; } = new PostItem();
    }
    public class DTOPostList : DTOResult
    {
        public PostListResult Items { get; set; }

    }
    public class PostListResult
    {
        public IList<PostTitle> Data { get; set; } = new List<PostTitle>();
        public int TotalCount { get; set; }
    }
    public class PostTitle
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
    public class PostItem
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
