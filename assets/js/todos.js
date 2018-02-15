//check off specific Todos by Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
});

//click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grab the new todo
		var todoText = $(this).val();
		//create new span & li and append to the ul
		$("ul").append(`<li><span><i class='fa fa-trash'></i></span> ${todoText}</li>`);
		$(this).val("");
	}
});

//Add toggle event to fade in & out for text box
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})