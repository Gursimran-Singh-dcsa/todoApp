$(document).ready(function(){

  var allTodos = [];
  $("#addToDO").click(function(){
    $("#creator").toggle("hide");
  });

  $("#creator").keypress(function(e){
    if(13 == e.which) {
      allTodos = [...allTodos, {"crossed": false, "todoName": $("#creator").val().trim()}];
      $("#creator").val('');
      setTodos();
    }
  })

  function setTodos() {
    $("#todoList").html('');
    allTodos.forEach(function(todo, index){
      $("#todoList").append(`<div class='creator todoItem ${index % 2 ? 'even' : 'odd'}' id='todo${index}'><button class="btn hide delete"><i class="fa fa-trash"></i></button>${todo.todoName}</div>`)
    })
    todoHover()
  }
  function todoHover(){
    $(".todoItem").on('mouseenter', function() {
      $(this).find(".btn").toggle('hide');
    })
    $(".todoItem").on('mouseleave', function() {
      $(this).find(".btn").toggle('hide');
    })
  }
})
