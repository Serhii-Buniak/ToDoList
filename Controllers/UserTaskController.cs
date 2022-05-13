using Microsoft.AspNetCore.Mvc;
using ToDoList.Infrastructure.Services;
using ToDoList.Models;

namespace ToDoList.Controllers;

[ApiController]
[Route("[controller]")]
public class UserTaskController : ControllerBase
{
    private readonly IUserTaskService _taskService;

    public UserTaskController(IUserTaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> ChangeText([FromRoute] long id, string newText)
    {
        try
        {
            await _taskService.ChangeText(id, newText);
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
            await _taskService.ChangeCompleted(id, completed);
            return Ok();
        }
        catch (NullReferenceException ex)
        {
            return NotFound(new { Error = ex.Message });
        }
    }
}