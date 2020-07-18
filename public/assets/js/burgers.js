
$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burg").val().trim(),
        //   sleepy: $("[name=sleepy]:checked").val().trim()

        };        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Added that burger to the menu");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
    //TODO: edit to work.
    // $(".devourIt").on("click", function(event) {
    //     var id = $(this).data("id");
    //     var isEaten = $(this).data("isEaten");
    
    //     var isEatenState = {
    //       is_eaten: isEaten
    //     };
    
    //     // Send the PUT request.
    //     $.ajax("/api/burgers/" + id, {
    //       type: "PUT",
    //       data: isEatenState
    //     }).then(
    //       function() {
    //         console.log("changed is_eaten to", isEaten);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    // });

    $(".deleteBtn").on("click", function(event) {
        idToDelete = $(this).attr("data-id")
        $.ajax({
           url: "/api/burgers/" + idToDelete,
          type: "DELETE",
        }
        )
        location.reload();
      })
      
// so ends the primary function 
});

