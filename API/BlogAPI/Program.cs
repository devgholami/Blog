using BlogAPI;
using Domain.Data.DBContext;
using Domain.Infrastructure;
using Domain.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using Service;
using StackExchange.Redis;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IPostService, PostService>();
builder.Services.AddScoped<ICache, CacheRedis>();

var multiplexer = ConnectionMultiplexer.Connect(configuration.GetConnectionString("redis"));
builder.Services.AddSingleton<IConnectionMultiplexer>(multiplexer);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyOrigin",
                      builder =>
                      {
                          builder.AllowAnyOrigin();
                      });
});

builder.Services.AddDbContextPool<BlogContext>(opt => opt.UseSqlServer(configuration.GetConnectionString("mssqllocaldb")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors("MyOrigin");
app.Run();
