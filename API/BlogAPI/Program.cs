using Domain;
using Microsoft.EntityFrameworkCore;
using Service;
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
builder.Services.AddScoped<IPostService, PostService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyOrigin",
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:9000",
                                              "http://localhost:9001");
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
