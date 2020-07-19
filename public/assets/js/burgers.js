$(function() {
     
    $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("hey there turdledovew")
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
      console.log("newBurger", newBurger)
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("we received confirmation of new burger, signing off from burgers.js");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
        console.log(id)
    //   Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });

    $(".change-edible").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id)
        var freshEdible = $(this).data("freshedible");
          console.log(freshEdible)
        var newEdibleState = {
          edible: freshEdible
        };
        console.log(newEdibleState)
        // SENDING the update/put request
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newEdibleState
        }).then(
          function() {
            console.log("changed edible status to to", freshEdible);
            location.reload();
          }
        );
      });

  });
  