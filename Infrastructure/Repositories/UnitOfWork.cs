using ToDoList.Data;

namespace ToDoList.Infrastructure.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;

    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
        Cards = new CardRepository(_context);
        UserTasks = new UserTaskRepository(_context);
    }

    public ICardRepository Cards { get; }
    public IUserTaskRepository UserTasks { get; }

    public void Dispose()
    {
        _context.Dispose();
    }

    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }
}