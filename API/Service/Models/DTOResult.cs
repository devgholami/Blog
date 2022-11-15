using System.Net;

namespace Service.Models
{
    public class DTOResult
    {
        public HttpStatusCode statusCode { get; set; }
        public string Message { get; set; } = "";
    }
}
