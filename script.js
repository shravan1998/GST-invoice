function showContact()
{
		var x=document.getElementById("contact");
  		if (x.style.display=="none")
  		{
    		x.style.display="block";
  		} 
  		else 
  		{
    		x.style.display="none";
  		}
}
function showNewUser()
{
		var x=document.getElementById("newUser");
		var y=document.getElementById("lMaster");
  		if (x.style.display=="none")
  		{
    		x.style.display="block";
    		y.style.display="none";
  		} 
  		else 
  		{
    		x.style.display="none";
  		}
}
function showEditUser()
{
		var x=document.getElementById("editUser");
		var y=document.getElementById("lMaster");
  		if (x.style.display=="none")
  		{
    		x.style.display="block";
    		y.style.display="none";
  		} 
  		else 
  		{
    		x.style.display="none";
  		}
}
function showLoginMaster()
{
		var x=document.getElementById("newUser");
		var y=document.getElementById("lMaster");
		var z=document.getElementById("editUser");
  		if (y.style.display=="none")
  		{
    		y.style.display="block";
    		x.style.display="none";
    		z.style.display="none";
  		} 
  		else 
  		{
    		y.style.display="none";
  		}
}

function showPayment()
{
    var x=document.getElementById("payment");
      if (x.style.display=="none")
      {
        x.style.display="block";
        document.getElementById("paymentNew").style.display="none";
      } 
      else 
      {
        x.style.display="none";
      }
}
function showNewPayment()
{
    var x=document.getElementById("paymentNew");
      if (x.style.display=="none")
      {
        x.style.display="block";
        document.getElementById("payment").style.display="none";
      } 
      else 
      {
        x.style.display="none";
      }
}
function showSale()
{
  var x=document.getElementById("sale");
      if (x.style.display=="none")
      {
        x.style.display="block";
        document.getElementById("payment").style.display="none";
      } 
      else 
      {
        x.style.display="none";
      }
}
function showCuMaster()
{
    var x=document.getElementById("cuMaster");
      if (x.style.display=="none")
      {
        x.style.display="block";
        
      } 
      else 
      {
        x.style.display="none";
      }
}
function close(id)
{
  var x=id;
  document.getElementById(x).style.display="none";
}