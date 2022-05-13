using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Repositories;

public class CardRepository : Repository<Card>, ICardRepository
{
    public CardRepository(ApplicationDbContext context) : base(context) { }

    public override async Task<IEnumerable<Card>> GetEntitiesAsync()
    {
        return await _entities.Include(c => c.Tasks).ToListAsync();
    }

    public override async Task<Card> FindAsync(long id)
    {
        return await _entities.Include(c => c.Tasks).FirstOrDefaultAsync(c => c.Id == id);
    }
}
