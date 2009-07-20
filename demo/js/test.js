$(document).ready(function(){		

	if (window.location.href.indexOf('?grid')>0) 
	{
		$('div.container').addClass('showgrid');
		$(".grid").addClass('wireframe');
	}
			
	// Get everything for the grid tests
	cc = 12;
	cw = 60;
	gw = 10;
	
	// Create the columns in the grid tests
	$("#generate").each(function(){
		
		// Create the basic columns
		for(i=1; i<= (cc/2); i++)
		{
			
			$(this).append("<div class='unit columns-"+i+" clear'>"+((i * (cw+(gw*2))) - (gw*2)) +"px</div>");
			if(i != cc)
			{
				$(this).append("<div class='unit columns-"+(cc - i)+"'>"+ (((cc - i) * (cw+(gw*2))) - (gw*2))+"px</div>");
			}
		}
		
		// Create the pushed columns
//		for(i=1; i<cc/2; i++)
//		{
//			$(this).append("<div class='unit columns-1 push-"+i+"'>Column pushed "+i+"</div>");
//		}
		
		// Create the pushed columns
//		for(i=1; i<cc/2; i++)
//		{
//			$(this).append("<div class='unit columns-1 pull-"+i+"'>Column pulled "+i+"</div>");
//		}
		
		 //Create the appended columns
//		for(i=1; i<cc/2; i++)
//		{
//			$(this).append("<div class='unit columns-1 append-"+i+" clear'>Column with "+i+" columns appended as padding</div>");
//		}
//		
		 //Create the prepended columns
//		for(i=1; i<cc/2; i++)
//		{
//			$(this).append("<div class='unit columns-1 prepend-"+i+" clear'>Column with "+i+" columns prepended as padding</div>");
//		}
	
//		 Create the columns with baseline heights
//		for(i=1; i<=10; i++)
//		{
//			$(this).append("<div class='columns-"+cc+" baseline-"+i+" clear'>Height is "+i+" baselines</div>");
//		}

	});
		
});