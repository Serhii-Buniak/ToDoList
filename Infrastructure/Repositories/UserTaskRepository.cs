using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public class UserTaskRepository : Repository<UserTask>, IUserTaskRepository
{
    public UserTaskRepository(ApplicationDbContext context) : base(context) { }
}
