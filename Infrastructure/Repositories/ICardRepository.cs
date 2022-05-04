using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public interface ICardRepository
{
    public Task Add(Card card);
    public Task<Card> GetById(long id);
    public IQueryable<Card> Boards { get; }
    public Task Delete(long id);
    public Task Update(Card card);
}
