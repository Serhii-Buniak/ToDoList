using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ToDoList.Models;

public record class UserTask
{
    public long Id { get; set; }
    [MaxLength(200)]
    [Required(AllowEmptyStrings = false, ErrorMessage = "Text is required")]
    public string Text { get; set; }
    [JsonIgnore]
    public long CardId { get; set; }
    [JsonIgnore]
    public Card Card { get; set; }
    public bool Completed { get; set; }
}