$(document).ready(function() {
	var $container = $("#container");
	
	$("#button").css({"font-family": "roboto-regular, sans-serif, arial"
					, "background-color": "#60dF91", "padding": "5px"
					, "border-radius": "2px", "display": "inline-block"
					, "margin": "20px"
					, "color": "#346F91"});
	
	function reload(sides) {
		$container.empty();
		var numBoxes = sides;
		var marg = 0;
		var side = 512/numBoxes;
		var dimens = 512 + (2*numBoxes*marg)
		$container.height(dimens);
		$container.width(dimens);
		for(var i=0; i<numBoxes; i++)
		{
			
			for(var j = 0; j<numBoxes; j++)
			{
				var $aDiv = $("<span><span>");
				$aDiv.height(side);
				$aDiv.width(side);
				$aDiv.css({"margin": marg, "display": "inline-block", "background-color": "#b2d1F7", "transition": "background-color 0.3s ease-in"});
				$aDiv.hover(function() {
					$(this).css("background-color", "#59687b");
				});
				$container.append($aDiv);
			}
		}
	}
	reload(128);
	
	var instr = "Enter number of squares per side (Max 128)";
	$("#button").click(function() {
		reload(Math.min(128,prompt(instr)));
	});
});