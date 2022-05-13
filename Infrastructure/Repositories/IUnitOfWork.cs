namespace ToDoList.Infrastructure.Repositories;

public interface IUnitOfWork : IDisposable
{
    ICardRepository Cards { get; }
    IUserTaskRepository UserTasks { get; }
    Task SaveAsync();
}