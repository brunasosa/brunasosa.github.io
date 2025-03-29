$('img').click(function(){
        // modal.style.display = "block";
        $('.modalImg').attr('src', this.src);
        $('#modalTitle').text($(this).siblings("h2").text()); // <-- ACA
        $('#modalDesc').html($(this).siblings("p").html()); // <-- ACA
        $('#modal').fadeIn();
})

$('.modalCloseBtn').click(function(){
    $('#modal').fadeOut();
})

$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
        $('#modal').fadeOut();
    }
});

