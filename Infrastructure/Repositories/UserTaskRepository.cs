using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public class UserTaskRepository : IUserTaskRepository
{
    private readonly ApplicationDbContext _context;

    public UserTaskRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task ChangeText(long id, string newText)
    {
        UserTask task = await GetById(id);
        task.Text = newText;
        _context.UserTasks.Update(task);
        await _context.SaveChangesAsync();
    }

    public async Task<UserTask> GetById(long id)
    {
        UserTask task = await _context.UserTasks.FindAsync(id);

        if (task == null)
            throw new NullReferenceException("UserTask not found");

        return task;
    }

    public async Task Delete(long id)
    {
        UserTask task = await GetById(id);
        _context.UserTasks.Remove(task);
        await _context.SaveChangesAsync();
    }

    public async Task ChangeCompleted(long id, bool completed)
    {
        UserTask task = await GetById(id);
        task.Completed = completed;
        _context.UserTasks.Update(task);
        await _context.SaveChangesAsync();
    }
}