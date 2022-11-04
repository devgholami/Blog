using AutoMapper;
using Domain;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Mapper
{
    public class PostMapper:Profile
    {
        public PostMapper()
        {
            //source mapping to destination
            CreateMap<Post, DTOPost>().ForMember(des => des.Id, opt => opt.MapFrom(src => src.Id));
        }
    }
}
