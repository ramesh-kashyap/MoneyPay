function calcthis(a)
{ 
var perc = document.getElementById("percent").value;

var planperc=new Array(0,0,0,0,0);
var depo = document.getElementById("deposit").value;

if (perc == "perc1") {planperc=Array(702, 702, 702, 702, 702); min=35; max=350;};
if (perc == "perc2") {planperc=Array(2520, 2520, 2520, 2520, 2520); min=80; max=800;};
if (perc == "perc3") {planperc=Array(7020, 7020, 7020, 7020, 7020); min=200; max=2000;};
if (perc == "perc4") {planperc=Array(25200, 25200, 25200, 25200, 25200); min=500; max=50000;};

if (depo < min)
  {
	
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Minimal deposit is $: "+min);	
  } 
else
if (depo > max)
  {
	
	document.getElementById("inpvar2").innerHTML = "n/a";						
	alert ("Maximal deposit is $: "+max);	
  } 
  
else
  {

	 
	  document.getElementById("inpvar2").innerHTML = planperc[0] * depo / 100;
	  
	
	if ( depo >=501)
	  {
		
		document.getElementById("inpvar2").innerHTML = planperc[1] * depo / 100;
		  }
	  
		if ( depo >= 2501)
		  {
			
			document.getElementById("inpvar2").innerHTML = planperc[2] * depo / 100;
			  }
	  
			if ( depo >= 5001)
			  {
				
				document.getElementById("inpvar2").innerHTML = planperc[3] * depo / 100;
				  }
	  
				if ( depo >= 25001)
				  {
					
					document.getElementById("inpvar2").innerHTML = planperc[4] * depo / 100;
	  
                                                       
                                                }
			  
		  
	  
  }

}