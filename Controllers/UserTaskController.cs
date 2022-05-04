using Microsoft.AspNetCore.Mvc;
using ToDoList.Infrastructure.Repositories;
using ToDoList.Models;

namespace ToDoList.Controllers;

[ApiController]
[Route("[controller]")]
public class UserTaskController : ControllerBase
{
    private readonly IUserTaskRepository _taskRep;

    public UserTaskController(IUserTaskRepository taskRep)
    {
        _taskRep = taskRep;
    }

    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> ChangeText([FromRoute] long id, string newText)
    {
        try
        {
            await _taskRep.ChangeText(id, newText);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new { Error = ex.Message });
        }
    }

    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> ChangeCompleted([FromRoute] long id, bool completed)
    {
        try
        {
            await _taskRep.ChangeCompleted(id, completed);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new { Error = ex.Message });
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> ChangeText([FromRoute] long id)
    {
        try
        {
            await _taskRep.Delete(id);
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