$(document).ready(function() {
    $("table.listing").has("th:contains(Order)").each(function (idx) {
        // Hide the Order column in the table; there is probably a more
        // efficient way to be found to do this, but this will do for now
        var tableId = $(this).attr("id");
        $(this).children().children().each(function (idx) {
            // Every row has to have a unique ID for tableDnD to work correctly
            $(this).attr("id", tableId + "." + idx);
            $(this).children().last().hide();
        });

        // Enable drag-n-drop
        $(this).tableDnD({
            onDrop: function(table, row) {
                // There are more clever ways to do this somewhat more
                // efficiently, but for now it will suffice to update the order
                // values of all rows
                $(table).find("select[name^=value_]").each(function (idx) {
                    $(this).val(idx + 1);
                });
            }
        });
    });
});
