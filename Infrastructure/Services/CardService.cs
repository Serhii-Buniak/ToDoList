using ToDoList.Infrastructure.Repositories;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Services;

public class CardService : ICardService
{
    private readonly ICardRepository _repository;
    private readonly IUnitOfWork _uWork;

    public CardService(IUnitOfWork uWork)
    {
        _uWork = uWork;
        _repository = uWork.Cards;
    }

    public async Task<IEnumerable<Card>> GetCards()
    {
        return await _repository.GetEntitiesAsync();
    }

    public async Task Add(Card card)
    {
        await _repository.AddAsync(card);
        await _uWork.SaveAsync();
    }

    public async Task Update(Card card)
    {
        _repository.Update(card);
        await _uWork.SaveAsync();
    }

    public async Task<Card> GetById(long id)
    {
        Card card = await _repository.FindAsync(id);

        if (card == null)
            throw new NullReferenceException("Board not found");

        return card;
    }

    public async Task Delete(long id)
    {
        await _repository.DeleteAsync(id);
        await _uWork.SaveAsync();
    }
}