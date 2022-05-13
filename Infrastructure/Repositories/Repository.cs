using Microsoft.EntityFrameworkCore;
using ToDoList.Data;

namespace ToDoList.Infrastructure.Repositories;

public class Repository<T> : IRepository<T> where T : class
{
    protected readonly ApplicationDbContext _context;
    protected readonly DbSet<T> _entities;

    public Repository(ApplicationDbContext context)
    {
        _context = context;
        _entities = _context.Set<T>();
    }

    public virtual async Task<IEnumerable<T>> GetEntitiesAsync() => await _entities.ToListAsync();

    public virtual async Task AddAsync(T entity)
    {
        await _entities.AddAsync(entity);
    }

    public virtual void Delete(T entity)
    {
        _entities.Remove(entity);
    }

    public virtual async Task DeleteAsync(long id)
    {
        T entity = await FindAsync(id);
        Delete(entity);
    }

    public virtual async Task<T> FindAsync(long id)
    {
        return await _entities.FindAsync(id);
    }

    public virtual void Update(T entity)
    {
        _context.Update(entity);
    }
}
