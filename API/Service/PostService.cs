using Service.Models;
using AutoMapper;
using System.Net;
using Domain.Infrastructure.Interfaces;
using Domain.Data.DBContext;

namespace Service
{
    public class PostService : IPostService
    {
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PostService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<DTOPostList> GetBlogPostAll()
        {
            try
            {
                var list = await _unitOfWork.PostRepository.GetAll();
                List<PostItem> dto = _mapper.Map<List<PostItem>>(list);
                if (dto.Count > 0)
                    return new DTOPostList() { Items = dto , statusCode = HttpStatusCode.OK, Message = "Successful" };
                else
                    return new DTOPostList() { Items = dto, statusCode = HttpStatusCode.NoContent, Message = "NoContent" };
            }
            catch (Exception e)
            {
                return new DTOPostList() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        public async Task<DTOPost> GetBlogPost(int id)
        {
            try
            {
                Post? Item = await _unitOfWork.PostRepository.Get(id);
                if (Item != null)
                {
                    DTOPost resp = new DTOPost();
                    resp.Item = _mapper.Map<PostItem>(Item);
                    resp.statusCode = HttpStatusCode.OK;
                    resp.Message = "Successful";
                    return resp;
                }
                else
                {
                    return new DTOPost() { statusCode = HttpStatusCode.NoContent, Message = "NoContent" };
                }
            }
            catch (Exception e)
            {
                return new DTOPost() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        public async Task<DTOPostList> Search(string term)
        {
            try
            {
                DTOPostList resp = new DTOPostList() { statusCode = HttpStatusCode.OK , Message = "Successful" };
                resp.Items = _mapper.Map<List<PostItem>>(await _unitOfWork.PostRepository.Search(term));
                if(resp.Items.Count == 0)
                {
                    resp.statusCode = HttpStatusCode.NoContent;
                    resp.Message = "Content Not Found";
                }
                return resp;
            }
            catch (Exception e)
            {
                return new DTOPostList() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }

        public async Task<DTOResult> PutBlogPost(PostItem BlogPost)
        {
            try
            {
                if(!await PostExists(BlogPost.Id))
                    return new DTOResult() { statusCode = HttpStatusCode.BadRequest, Message = "Item not found" };
                _unitOfWork.PostRepository.Update(_mapper.Map<Post>(BlogPost));
                await _unitOfWork.SaveChanges();
            }
            catch (Exception e)
            {
                return new DTOResult() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }

            return new DTOResult() { statusCode = HttpStatusCode.OK, Message= "Successful" };
        }

        public async Task<DTOPost> PostBlogPost(PostItem dto)
        {
            try
            {
                DTOPost resp = new DTOPost() { statusCode = HttpStatusCode.OK, Message = "Post Added" };
                Post newpost = new Post() { Title = dto.Title,Text=dto.Text,CreatedDate = dto.CreatedDate };
                await _unitOfWork.PostRepository.Add(newpost);
                var res = await _unitOfWork.SaveChanges();
                if (res > 0)
                {
                    dto.Id = newpost.Id;
                    dto.CreatedDate = newpost.CreatedDate;
                    resp.Item = dto;
                }
                else
                {
                    resp.statusCode = HttpStatusCode.BadRequest;
                    resp.Message = "BadRequest";
                }
                return resp;
            }
            catch (Exception e)
            {
                return new DTOPost() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }

        }

        public async Task<DTOResult> DeleteBlogPost(int id)
        {
            try
            {
                var item = await _unitOfWork.PostRepository.Get(id);
                if (item == null)
                {
                    return new DTOResult() { statusCode = HttpStatusCode.NotFound, Message = "NotFound" };
                }

                await _unitOfWork.PostRepository.Remove(item);
                var res = await _unitOfWork.SaveChanges();

                if (res>0)
                    return new DTOResult() { statusCode = HttpStatusCode.OK, Message = "Item Deleted" };
                else
                    return new DTOResult() { statusCode = HttpStatusCode.InternalServerError, Message = "Item Not Deleted" };
            }
            catch(Exception e)
            {
                return new DTOResult() { statusCode = HttpStatusCode.ExpectationFailed, Message = e.Message };
            }
        }
        private async Task<bool> PostExists(int id)
        {
            var item = await _unitOfWork.PostRepository.Get(id);
            return item != null;
        }
        public void Dispose()
        {
            _unitOfWork.Dispose();
        }
    }
}