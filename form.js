$( document ).ready(function() {
    $('#register').click(function(){
        var data={ 
            firstname : $('#fname').val(),
            lastname :  $('#lname').val(),
            emailid : $('#eid').val(),
            password : $('#pwd').val(),
            confirmpassword : $('#cpwd').val(),
            phonenumber : $('#pno').val(),
            male : $('#m').val(),
            female : $('#f').val(),
            date : $('#date').val(),
            feedback : $('#hu').text() 
     }
         var datas = JSON.stringify(data); 
         console.log(datas)
         $.ajax({
             url: 'http://localhost:3000/data',
             type: 'post',
             data: datas,
             dataType:'json',
             contentType: 'application/json',					
             success: function() {
                 console.log(datas);
             }
     });
     }); 

});

