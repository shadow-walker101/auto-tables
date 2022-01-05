//UI Logic

$(document).ready(function() {

    $("#next").click(function() {
        if ($("#teachers2").val() === "") {
            alert("All fields are Required")
            $("#teachers2").addClass("btn-outline-danger")

        } else if ($("#subjects2").val() == "") {
            alert("All fields are Required")
            $("#teachers2").addClass("btn-outline-danger")
        } else {
            numberOfTeachers.push($("#teachers2").val());
            numberOfSubjects.push($("#subjects2").val());
            for (var k = 1; k <= numberOfSubjects[0]; k++) {
                $("#numberOfSubjects").append('<div class="form-group" ><label for=subjectName' + k + '>Name of Subject:</label><input type="text" class="form-control" placeholder="Name of Subject" id="subjectName' + k + '"</div>')
            }
            $("#submitForm").show();
            $("#next").hide();
            $(".hidden").hide();
            $("#subjects").append("<h3>Please Input the names  of all the " + numberOfSubjects[0] + " subjects in the respective fields</h3>")
        }

    });

    $("#submit").click(function() {

        event.preventDefault();

        for (var j = 1; j < numberOfTeachers[0]; j++) {
            $("#append").append('<div class="container" ></div><h3>Class :' + (j + 1) + '</h3>' + '<div class="table-responsive" style="display:none">' +
                '<div id="printableTable">' +
                '<table class="table" border="1">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col"></th>' +
                '<th scope="col">8:00-9:00</th>' +
                '<th scope="col">9:00-10:00</th>' +
                '<th scope="col">10:00-11:00</th>' +
                '<th scope="col">11:00-12:00</th>' +
                '<th scope="col">12:00-1:00</th>' +
                '<th scope="col">1:00-2:00</th>' +
                '<th scope="col">2:00-3:00</th>' +
                '<th scope="col">3:00-4:00</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr>' +
                '<th scope="row">MONDAY</th>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="table-primary" rowspan="5" style="text-align:center">L<br><br>U<br><br>N<br><br>C<br><br>H</td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '</tr>' +
                '<tr>' +
                '<th scope="row">TUESDAY</th>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '</tr>' +
                '<tr>' +
                '<th scope="row">WEDNESDAY</th>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '</tr>' +
                '<tr>' +
                '<th scope="row">THURSDAY</th>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '</tr>' +
                '<tr>' +
                '<th scope="row">FRIDAY</th>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '<td class="td"></td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</div>' +
                '</div></div>')
        }


        for (var m = 1; m <= numberOfSubjects[0]; m++) {
            subjectName.push($("input#subjectName" + m).val());
        }




        $(".td").each(function() {
            $(this).text(ranSubject());
        });

        $(".table-responsive").show();
        $("#forms").hide();
        $("#submitForm").hide();
        $("#print").show();
        $("#reset").show();

    });


});

function printTable() {
    var divToPrint = document.getElementById("append");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}