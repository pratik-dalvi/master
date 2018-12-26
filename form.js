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
    if(fieldLen < minLen || fieldLen > maxLen){
    $this.addClass('field-invalid').next('.error-id').text(msg).show();
    }else {
    $this.removeClass('field-invalid').next('.error-id').text(msg).hide();
    }
    if(regEx) {
    regEx.test('s')
    }
    });
    }

    function validatePassword(){
        if(password.value != confirm_password.value) {
          confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
          confirm_password.setCustomValidity('');
        }
      }

validate("#fname","Invalid Name",20,5,/^[a-zA-Z\-]+$/);
validate("#lname","Invalid Name",20,5,/^[a-zA-Z\-]+$/);
validate("#eid","Invalid Email",20,10,/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(a-zA-Z){2,5}$/);
validate("#pwd","Invalid Password",10,8,/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/);
validate("#pno","Invalid Number",10,10,/^(\+\d{1,3}[- ]?)?\d$/);
