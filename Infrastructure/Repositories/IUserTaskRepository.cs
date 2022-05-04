using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public interface IUserTaskRepository
{
    public Task<UserTask> GetById(long id);
    public Task ChangeText(long id, string newText);
    public Task Delete(long id);
    public Task ChangeCompleted(long id, bool completed);
}

