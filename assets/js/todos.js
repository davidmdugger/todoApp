$(".fa-plus").on("click", function(){
   $("input[type='text']").slideToggle(); 
});

// Check off specific TO-DOs by clicking
$("ul").on("click", "li", function(){ 
    $(this).toggleClass("completed");
});

// Click on X to delete TO-DO
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); // remove the li after fadeOut completes
    }); 
    e.stopPropagation(); // prevent event bubbling
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        // get new todo text
        var todoText = $(this).val();
        // remove text in the input
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + todoText + "</li");
    }
});
