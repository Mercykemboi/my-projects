$("ul").on("click","li",function(){

    $(this).toggleClass("completed");
    });
    $("ul").on("click","span",function(event){
    
        $(this).parent().fadeout(500,function({
            $(this).remove());
        });
        event.stopPropagation();
    };
    $('input'[type="text"]).keypress(function(event){
        if(event.which==13){
            var todolist=$(this).val();
            $(this).val="";
            $(this).append("<li><span><i class='fas fa-trash'><i/></span>"+todoText+"</li>");
        }

    });