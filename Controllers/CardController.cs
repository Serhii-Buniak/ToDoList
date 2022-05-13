using Microsoft.AspNetCore.Mvc;
using ToDoList.Infrastructure.Services;
using ToDoList.Models;

namespace ToDoList.Controllers;

[ApiController]
[Route("[controller]")]
public class CardController : ControllerBase
{
    private readonly ICardService _boardService;

    public CardController(ICardService boardService)
    {
        _boardService = boardService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _boardService.GetCards());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get([FromRoute] long id)
    {
        try
        {
            Card card = await _boardService.GetById(id);
            return Ok(card);
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new { Error = ex.Message });
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create(Card card)
    {
        await _boardService.Add(card);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Update(Card card)
    {
        await _boardService.Update(card);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute]long id)
    {
        try
        {
            await _boardService.Delete(id);
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
