namespace ToDoList.Infrastructure.Repositories;

public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetEntitiesAsync();
    Task<T> FindAsync(long id);
    Task AddAsync(T entity);
    void Delete(T entity);
    Task DeleteAsync(long id);
    void Update(T entity);
}