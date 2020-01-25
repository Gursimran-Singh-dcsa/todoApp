$(document).ready(function(){

  var allTodos = [];
  $("#addToDO").click(function(){
    $("#creator").toggle('hide');
  });

  $("#creator").keypress(function(e){
    if(13 == e.which && '' != $("#creator").val().trim()) {
      allTodos = [...allTodos, {"crossed": false, "todoName": $("#creator").val().trim()}];
      $("#creator").val('');
      setTodos();
    }
  })

  function setTodos() {
    $("#todoList").html('');
    allTodos.forEach(function(todo, index){
      $("#todoList").append(`<div class='creator todoItem ${index % 2 ? 'even' : 'odd'}' id='todo${index}'><button class="btn hide delete" id='${index}'><i class="fa fa-trash"></i></button><span class='todoname'>${todo.todoName}</span></div>`)
    })
    todoHover();
    deleteButton();
  }

  function todoHover(){
    $(".todoItem").on('mouseenter', function() {
      $(this).find(".delete").toggle('hide');
    })
    $(".todoItem").on('mouseleave', function() {
      $(this).find(".delete").toggle('hide');
    })
    $(".todoname").on('click', function(){
      $(this).toggleClass('checkoff')
    })
  }
  function deleteButton() {
    $(".delete").on('click', function(){
      var id = $(this).attr('id');
      allTodos.splice(id, 1);
      setTodos();
    })
  }
})
