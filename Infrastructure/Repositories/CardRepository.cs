using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public class CardRepository : ICardRepository
{
    private readonly ApplicationDbContext _context;

    public CardRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    public IQueryable<Card> Boards => _context.Cards.Include(b => b.Tasks);

    public async Task Add(Card card)
    {
        await _context.Cards.AddAsync(card);
        await _context.SaveChangesAsync();
    }
    public async Task Update(Card card)
    {
        Card oldCard = await GetById(card.Id);
        oldCard.Tasks = card.Tasks;
        _context.Cards.Update(card);
        await _context.SaveChangesAsync();
    }

    public async Task<Card> GetById(long id)
    {
        Card card = await Boards.FirstOrDefaultAsync(b => b.Id == id);

        if (card == null)
            throw new NullReferenceException("Board not found");

        return card;
    }

    public async Task Delete(long id)
    {
        _context.Cards.Remove(await GetById(id));
        await _context.SaveChangesAsync();
    }
}

