$(document).ready(function () {
    var email = "";
    // Adding an event listener for when the form is submitted
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        email = $("#email").val().trim();
        var form = true;
        if (form === true) {
            var userInput = {
                name: $('#name').val().trim(),
                question1: $('#question1').val().trim(),
                question2: $('#question2').val().trim(),
                question3: $('#question3').val().trim(),
                question4: $('#question4').val().trim(),
                question5: $('#question5').val().trim(),
            };
            console.log(userInput);


            // Add user inputs
            $.post("/api/pets", userInput, function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var petCard = `
                    <div class="card">
                        <img src = "${data[i].petPicture}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].petName}</h5>
                            <p class="card-text">The pet fun facts: ${data[i].funFacts}</p>
                            <a href="#" 
                                petId= "${data[i].id}"
                                petName = "${data[i].petName}"
                                petUrl = "${data[i].petPicture}"
                                petGender = "${data[i].gender}"
                                petFacts = "${data[i].funFacts}"
                                class="btn btn-primary emailBtn">Email Selection</a>
                        </div>
                    </div>
                    <br>
                    `;
                    $(".modal-body").append(petCard);
                }
                $('#modal1').modal("toggle");
            });
        } else {
            // If a required field is missing, show alert
            alert("Survey is incomplete!");
        }



        // Clear the form when submitting
        // $("#name").val("");
        // $("#question1").val("");
        // $("#question2").val("");
        // $("#question3").val("");
        // $("#question4").val("");
        // $("#question5").val("");

    });

    $(document).on("click", ".emailBtn", function (event) {
        event.preventDefault();
        var petInfo = {
            petId: $(this).attr("petId"),
            petGender: $(this).attr("petGender"),
            petName: $(this).attr("petName"),
            petUrl: $(this).attr("petUrl"),
            petFacts: $(this).attr("petFacts"),
            email: email
        }
        console.log(petInfo);
        $.post("/api/emailInfo", petInfo, function (data) {
            console.log(data);
        })
    })
})