using ToDoList.Models;

namespace ToDoList.Infrastructure.Services;

public interface IUserTaskService
{
    public Task<UserTask> GetById(long id);
    public Task ChangeText(long id, string newText);
    public Task Delete(long id);
    public Task ChangeCompleted(long id, bool completed);
}

