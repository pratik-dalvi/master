$(document).ready(function () {
    $('#register').click(function (e) {
        e.preventDefault();
        var data = {
            firstname: $('#fname').val(),
            lastname: $('#lname').val(),
            emailid: $('#eid').val(),
            password: $('#pwd').val(),
            confirmpassword: $('#cpwd').val(),
            phonenumber: $('#pno').val(),
            gender: $("input[name='gender']:checked").val(),
            date: $('#date').val(),
            feedback: $("input[type='checkbox']").val()
        };
        var datas = JSON.stringify(data);
        console.log(datas)
        $.ajax({
            url: 'http://localhost:3000/data',
            type: 'post',
            data: datas,
            dataType: 'json',
            contentType: 'application/json',
            success: function (json) {
                
                var tr = "<tr><td>" + json.firstname + "</td><td>" + json.lastname + "</td><td>" + json.emailid + "</td><td>" + json.phonenumber + "</td><td>" + json.gender + "</td><td>" + json.date + "</td><td>" + json.checkbox + "</td></tr>";
                console.log(tr);
                    $('#table').append(tr);
            }
        });


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
                tr.append("<td>" + json[i].gender + "</td>");
                tr.append("<td>" + json[i].date + "</td>");
                tr.append("<td>" + json[i].checkbox + "</td>");
                $('#table').append(tr);
            }
        });
});

function validate(fieldId, msg, maxLen, minLen, regEx){
    var isValid = false;
    $(fieldId).focusout(function(){
    var $this = $(this)
    var fieldLen = $(this).val().length;
    if(fieldLen < minLen && fieldLen > maxLen){
    $this.next('.error-message').text(msg).show();
    $this.addClass('input-box');
    }else {
    $this.next('.error-message').text(msg).hide();
    $this.removeClass('input-box');
    }
    if(regEx) {
    regEx.test('s')
    }
    });
    }
validate("#fname","Invalid Name",20,5,"/[^-\s]/");
validate("#lname","Invalid Name",20,5,"/[^-\s]/");
validate("#eid","Invalid Email",10,20,"/[ ^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-{2,})$]/");
validate("eid","Invalid Password",8,8,"/[^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}]/");