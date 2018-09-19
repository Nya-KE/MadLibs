//Fethes inputs compare with below
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});

/* PUTTING BLAH BLAH INTO Story
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        $(".person1").text("blah blah");
        $(".person2").text("blah blah");
        $(".animal").text("blah blah");
        $(".exclamation").text("blah blah");
        $(".verb").text("blah blah");
        $(".noun").text("blah blah");

        $("#story").show();

        event.preventDefault();
    });
});
*/
