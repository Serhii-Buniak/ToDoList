using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Infrastructure.Repositories;
using ToDoList.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
services.AddControllers();
services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

services.AddTransient<IUnitOfWork, UnitOfWork>();
services.AddTransient<ICardService, CardService>();
services.AddTransient<IUserTaskService, UserTaskService>();

const string corsName = "react-app";
services.AddCors(options =>
{
    options.AddPolicy(corsName,
    corsbuilder =>
    {
        corsbuilder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("https://localhost:44442");
    });
});

var app = builder.Build();

app.UseCors(corsName);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();