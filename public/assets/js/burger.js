// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //When a devour it button is clicked
    $(".devour-btn").on("click", function (event) {
        //Get the id from the data-id attribute
        var id = $(this).data("id");
        
        //changed the devoured state to true
        var newDevouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //When the submit button is clicked
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //get the new burger name
        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});