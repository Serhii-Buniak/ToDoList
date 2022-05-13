using ToDoList.Data;
using ToDoList.Infrastructure.Repositories;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Services;

public class UserTaskService : IUserTaskService
{
    private readonly IUnitOfWork _uWork;
    private readonly IUserTaskRepository _repository;

    public UserTaskService(IUnitOfWork uWork)
    {
        _uWork = uWork;
        _repository = uWork.UserTasks;
    }

    public async Task ChangeText(long id, string newText)
    {
        UserTask task = await GetById(id);
        task.Text = newText;
        _repository.Update(task);
        await _uWork.SaveAsync();
    }

    public async Task<UserTask> GetById(long id)
    {
        UserTask task = await _repository.FindAsync(id);

        if (task == null)
            throw new NullReferenceException("UserTask not found");

        return task;
    }

    public async Task Delete(long id)
    {
        await _repository.DeleteAsync(id);
        await _uWork.SaveAsync();
    }

    public async Task ChangeCompleted(long id, bool completed)
    {
        UserTask task = await GetById(id);
        task.Completed = completed;
        _repository.Update(task);
        await _uWork.SaveAsync();
    }
}