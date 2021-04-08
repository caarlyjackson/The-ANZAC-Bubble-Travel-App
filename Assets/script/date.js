var fromDate;
var toDate;

// $(function () {
//     $('#from').datepicker({ dateFormat: 'dd-mm-yy' });
//     $('#to').datepicker({ dateFormat: 'dd-mm-yy' });
// });

$(function () {
    var dateFormat = "dd/mm/yy",
        from = $("#from")
            .datepicker({
                dateFormat: 'dd/mm/yy',
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 3
            })
            .on("change", function () {
                from.datepicker("option", "minDate", getDate(this));

            }),
        to = $("#to").datepicker({
            dateFormat: 'dd/mm/yy',
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
        })
            .on("change", function () {
                to.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        console.log(date);
        fromDate = $('#from').val();
        toDate = $('#to').val();

        return date;
    }

});