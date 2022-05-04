using Microsoft.AspNetCore.Mvc;
using ToDoList.Infrastructure.Repositories;
using ToDoList.Models;

namespace ToDoList.Controllers;

[ApiController]
[Route("[controller]")]
public class CardController : ControllerBase
{
    private readonly ICardRepository _boardRep;

    public CardController(ICardRepository boardRep)
    {
        _boardRep = boardRep;
    }

    [HttpGet]
    public IEnumerable<Card> Get()
    {
        return _boardRep.Boards;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get([FromRoute] long id)
    {
        try
        {
            Card board = await _boardRep.GetById(id);
            return Ok(board);
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new { Error = ex.Message });
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create(Card card)
    {
        await _boardRep.Add(card);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Update(Card card)
    {
        await _boardRep.Update(card);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute]long id)
    {
        try
        {
            await _boardRep.Delete(id);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new
            {
                Error = ex.Message
            });
        }
    }
}