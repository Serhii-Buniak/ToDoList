using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models;

public record class Card
{
    public long Id { get; set; }
    [MaxLength(30)]
    [Required(AllowEmptyStrings = false, ErrorMessage = "Title is required")]
    public string Title { get; set; }
    public ICollection<UserTask> Tasks { get; set; }
}