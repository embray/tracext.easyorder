$(document).ready(function() {
    $("table.listing").has("th:contains(Order)").each(function (idx) {
        // Hide the Order column in the table; there is probably a more
        // efficient way to be found to do this, but this will do for now
        $(this).children().children().each(function (idx) {
            $(this).children().last().hide();
        });

        // Enable drag-n-drop
        $(this).tableDnD();
    });
});
