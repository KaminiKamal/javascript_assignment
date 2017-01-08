 "use strict";
 var userList=[];
 var counter=0;

 var data=[{"country":"India",
                          "states":"India-1/India-2/India-3"
                        },
                          {"country":"USA",
                          "states":"USA-1/USA-2/USA-3"
                        },
                          {"country":"Scotland", 
                          "states":"SCL-1/SCL-2/SCL-3"
                        }
                      ]
 function validateForm(){
 	var name=$("#name").val();
    var letters = /^[A-Za-z]+$/; 
    if(!name.match(letters) || !adrs.match(letters) || !clg.match(letters) || !city.match(letters))  {        $("#name").css("background","red");$("#name").val('please give a valid name');}  
 

 	var reg=$("#registration").val();
 	if(isNaN(reg)==true || reg==0 ){$("#registration").css("background","red");            $("#registration").val('please give a valid registration number');}

 	var adrs=$("#address").val();
 	if(isNaN(adrs)==false || adrs==0 ){$("#address").css("background","red");          $("#address").val('please give a valid address');}

 	var roll=$("#roll").val();
    if(isNaN(roll)==true || roll==0){$("#roll").css("background","red"); $("#roll").val('please give a valid roll number');}

    var city=$("#city").val();
    if(isNaN(city)==false || city==0){$("#city").css("background","red"); $("#city").val('please give a valid city name');}

    var clg=$("#college").val();
    if(isNaN(clg)==false || clg==0){$("#college").css("background","red"); $("#college").val('please give a valid college name');}
       
 }

 $(document).ready(function(){
    $("input").click(function(){
        $(this).css("background","white");
        $(this).val('');
    });

populateDropdown();
    $("#country").click(function(){
    	
    	var c=$("#country").val();
    	//alert(c);
    	if(c=="x"){alert("please select a country");}
    	  var p=""; var y="";
    		for(var i=0;i<data.length;i++){
                      y=data[i].states;
                      //alert(typeof(y));
                      y=y.split('/');

                      
                      if(c==i){
                      	for(var j=0;j<3;j++){
                         //alert(y[j]);
                         p+="<option value='"+j+"'>"+y[j]+"</option>";
                         //alert(p);
                                            }
                                  $('#state').html("<option value='x'>--Select State--</option>"+p); 

                      }
                      

}      
    	
    });
});

function populateDropdown(){
         var tableContent2 = '';
        //  $.getJSON('/admin_functions/loadCategory', function(data) {
              //userListData = data;
              
var out="";
for(var i=0;i<data.length;i++){

out+="<option value="+i+">"+data[i].country+"</option>";
//alert(out);
}      
   $('#country').html("<option value='x'>--Select Country--</option>"+out); 
          
}

function addUser(){
	if(counter==0){
   counter++;
		var a=$("#name").val();
	var b=$("#registration").val();
	var c=$("#address").val();
	var d=$("#roll").val();
	var e=$("#country").val();
	var f=$("#state").val();
	var g=$("#city").val();
	var h=$("#college").val();
	var userData={};
   userData.name=a; userData.registration=b;userData.address=c;userData.roll=d;
   userData.country=e;userData.state=f;userData.city=g;userData.college=h;
   var  student;
      //alert(student);
   student=JSON.stringify(userData);
   //alert(student);
   userList.push(student);
   alert("data added");
	}

	 else{
	 	var text="";
    var aa=$("#name").val();
	var bb=$("#registration").val();
	var cc=$("#address").val();
	var dd=$("#roll").val();
	var ee=$("#country").val();
	var ff=$("#state").val();
	var gg=$("#city").val();
	var hh=$("#college").val();
var kk="";
    for(var i=0;i<userList.length;i++){
    	//text=userList[i].registration;
    	text=JSON.parse(userList[i]);
    	//alert(text);
    	 kk=text.registration;
    	 //alert(kk);
    	        if(kk==bb){
                   alert("duplicate data");
                   
    	        }
    	        else{
    	        	var userData={}; 
  userData.name=aa; userData.registration=bb;userData.address=cc;userData.roll=dd;userData.country=ee;
  userData.state=ff;userData.city=gg;userData.college=hh;
   
   

   var  student;
      //alert(student);
   student=JSON.stringify(userData);
   //alert(student);
   userList.push(student);
   alert("data added");
   for(var t=0;t<userList.length;t++){
   	text+=" "+userList[t]+" ";
   	alert(text);
   }
alert("data added");
$("#bb").val(""); break;
    	        }

    }


	


	 }
	
   
}
