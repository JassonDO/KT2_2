$(document).ready(function(){
    var i =1;
    
    $("#btndtn").click(function(){
        $("#myModal").modal('show');
    });

    function ktmasv(){
        
        let mauKT=/^[1-9]{1}[0-9]{9}$/;
        if(mauKT.test($("#masv").val()))
        {
            alert("Bạn nhập đúng");

        }
        else
        {
            alert("Bạn nhập sai");
        }
    }
    $("#masv").blur(ktmasv);

    /*function kthoten(){
        
        let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        
        if(mauKT.test($("#hoten").val()))
        {
            alert("Bạn nhập đúng");

        }
        else
        {
            alert("Bạn nhập sai");
        }
    }
    $("#hoten").blur(kthoten);

    function ktemail(){
        
        if(!$("#email").val()) 
            alert("Bạn nhập sai");

    
    }
    $("#email").blur(ktemail);*/


    $("#save").click(function(){
        
        var chk= $('#chkboi:checked').val();
        var tp= $("select option:selected").text();
        var gioitinh= $("input[name=gioitinh]:checked").val();
        var masv = $("#masv").val();
        var hoten = $("#hoten").val();
        var email = $("#email").val();
        //alert(tp+" ");
        var gt = $("input[name=gioitinh]:checked").map(function(){
            return this.value;
        }).get().join(', ');
        var nk = $("input[name=nangkhieu]:checked").map(function(){
            return this.value;
        }).get().join(', ');
        
        var dong = '<tr><td>'+(i++)+'<td>'+masv+'</td>'+'<td>'+hoten+'</td>'+'<td>'+gt+'</td>'+'<td>'+nk+'</td>'+'<td>'+email+'</td>'+'<td>'+tp+'</td>'+'</td></tr>';
        $("#danhsach").append(dong);
        $("#myModal").modal("hide");
    }); 
});