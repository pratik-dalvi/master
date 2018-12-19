$( document ).ready(function() {
    $('#register').click(function(e){
            e.preventDefault();
        var data={ 
            firstname : $('#fname').val(),
            lastname :  $('#lname').val(),
            emailid : $('#eid').val(),
            password : $('#pwd').val(),
            confirmpassword : $('#cpwd').val(),
            phonenumber : $('#pno').val(),
            gender : $("input[name='gender']:checked").val(),
            date : $('#date').val(),
            feedback: $("input[type='checkbox']").val();
     }
         var datas = JSON.stringify(data); 
         console.log(datas)
         $.ajax({
             url: 'http://localhost:3000/data',
             type: 'post',
             data: datas,
             dataType:'json',
             contentType: 'application/json',					
             success: function (json) {
                var tr;
                for (var i = 0; i < json.length; i++) {
                    tr = $('<tr/>');
                    tr.append("<td>" + json[i].firstname + "</td>");
                    tr.append("<td>" + json[i].lastname + "</td>");
                    tr.append("<td>" + json[i].emailid + "</td>");
                    tr.append("<td>" + json[i].phonenumber + "</td>");
                    tr.append("<td>" + json[i].gender+ "</td>");
                    tr.append("<td>" + json[i].checkbox+ "</td>");
                    $('#table').append(tr);
                }
     }
     }); 


     $.getJSON('http://localhost:3000/data',
        function (json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json[i].firstname + "</td>");
                tr.append("<td>" + json[i].lastname + "</td>");
                tr.append("<td>" + json[i].emailid + "</td>");
                tr.append("<td>" + json[i].phonenumber + "</td>");
                tr.append("<td>" + json[i].gender+ "</td>");
                tr.append("<td>" + json[i].date + "</td>");
                tr.append("<td>" + json[i].feedback + "</td>");
                $('#table').append(tr);
            }
        });
});
})