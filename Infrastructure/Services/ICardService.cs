using ToDoList.Models;

namespace ToDoList.Infrastructure.Services;

public interface ICardService
{
    Task Add(Card card);
    Task<Card> GetById(long id);
    Task<IEnumerable<Card>> GetCards();
    Task Delete(long id);
    Task Update(Card card);
}