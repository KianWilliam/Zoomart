/**
 * @package Plugin content - zoomart for Joomla! 3.x and Joomla 4 alpha-Beta
 * @version $Id: system - zoomart 1.0.0 2021-01-12 23:26:33Z $
 * @author KWProductions Co.
 * @(C) 2020-2025.Kian William Productions Co. All rights reserved.
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 
 This file is part of content - zommart.
    content - zoomart is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    plugin content - zoomart is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with content - zoomart.  If not, see <http://www.gnu.org/licenses/>.
 
**/

(function($){
	
	var config = {};
	var global = {selected:'', selector:''};
	
	var init = $.prototype.init;
		$.prototype.init = function (selector, context)
	    {
		   var r = init.apply(this, arguments);
		   if(selector && selector.selector)
		   {
			r.context = selector.context;
			r.selector = selector.selector;
		   }
		   if(typeof selector == 'string')
		   {
			r.context = context || document,r.selector = selector,global.selector = r.selector;
		   }
		   global.selected = r;
		   return r;
	   }
	   $.prototype.init.prototype = $.prototype;
	  $.fn.zoomimage = {	  
		  config : function(options) {
			 // setConfig($.extend({}, $.fn.zoomart.defaults, options));
			 setConfig(options);
			  global.selected.zoomimage.init();
			  global.selected.zoomimage.addzoombutton();

		  },
		  init : function(){
		if(onoff=='on')
		{
		var r;	
		var flag=0;
		var newwidth, newheight, zwleft, zwtop, l, t, imgleft, imgtop, delta1, delta2;
		
			 
		
	   $('img, *').mouseenter(


		function(event){
			event.preventDefault();
			event.stopPropagation();
			
	
			var classes = new RegExp(config.exclude);
			var imgclasses = $(this).attr('class');		

			
			if(!classes.test(imgclasses) || config.exclude==="")
			{
				var w, h;
				flag = 1;	
              
					  if($(this).css('width'))
					  	   w= parseInt($(this).css('width'));
					    else
						 if($(this).attr('width'))
					    w = parseInt($(this).attr('width'));
					   else
					      w = parseInt(event.target.width);
					  
					
					  if($(this).css('height'))
					        h = parseInt($(this).css('height'));
							else
							  if($(this).attr('height'))
					               h= parseInt($(this).attr('height'));					  
					          else
					                   h = parseInt(event.target.height);
						 
			
								  newwidth = w * parseInt(config.magnifier);
								   newheight = h * parseInt(config.magnifier);

					

					  switch(parseInt(config.zwpos))
					  {
						  case 0:
								zwleft = 0;
								zwtop = 0;
						  break;
						  case 1:
						        zwleft = $(window).width()-parseInt(config.zoomww);
								zwtop = 0
						  break;
						  case 2:
						        zwleft = 0;
								zwtop = $(window).height()-parseInt(config.zoomwh);
						  break;
						  case 3:
						         zwleft = $(window).width()-parseInt(config.zoomww);
								 zwtop = $(window).height()-parseInt(config.zoomwh)-25;
						  break;
					 }
		       if($(this).attr("src") || $(this).css("background").indexOf("url")!=-1){
				   
				   $(this).css("cursor", "hand");
				
					  $('body').append("<div class='zoomart'></div>");
	
					  $('.zoomart').css({border:'1px solid #fff', position:'fixed', display:'block', overflow:'hidden',  zIndex:'10000', left:zwleft+'px', top:zwtop+'px', width:parseInt(config.zoomww)+'px', height:parseInt(config.zoomwh)+'px', border:config.bs+'px solid '+config.bc});
				  				if($(this).attr("src"))	  
									  $('.zoomart').css({backgroundImage:'url('+$(this)[0].src+')', backgroundPosition:'0px 0px', backgroundSize:newwidth+'px '+newheight+'px'});
                              else
								{
								var bimgarr = $(this).css("background");
									var num1 = bimgarr.indexOf("url");
									var num2 = bimgarr.indexOf('")');
									var imgurl = bimgarr.substring(num1, num2+2);
								
									$('.zoomart').css({backgroundImage:imgurl, backgroundPosition:'0px 0px', backgroundSize:newwidth+'px '+newheight+'px'});

								}
				  }
	  
			}
		
			
		});	
		
		 	

		 $('img, *').mousemove(function(event){
	event.preventDefault();
			event.stopPropagation();
				     if(flag==1)
		            {
			
				l = parseInt(event.pageX) - parseInt($(this).offset().left);
			     t = parseInt(event.pageY) - parseInt($(this).offset().top);
				 var p, ll, tt;
				 
				 t= (-1)*(t * parseInt(config.magnifier));
				 l = (-1)*(l* parseInt(config.magnifier));
		
				 imgleft = l + ((parseInt(config.zoomww)/2))  ;
					 imgtop = t + (parseInt(config.zoomww)/2) ;
				if($('.zoomart').length!=0)	
						$('.zoomart').css({backgroundPosition:imgleft+'px '+imgtop+'px'});

				
					
					}
					
					
			   }); 
		   
		  $('img, *').mouseleave(function(event){

	event.preventDefault();
			event.stopPropagation();
			   flag=0;
			   				   $(this).css("cursor", "pointer");

			   				if($('.zoomart').length!=0)	
			                      $('.zoomart').remove();
		   });	

		  }


		  },
		  addzoombutton:function()
		  {
			  var zbleft, zbtop;
			  zbleft =  $(window).width()-121;
			  zbtop =  $(window).height()-25;

			  $("<form class='buttholder'></form>").appendTo('body');
			  $("<button class='zoombutton'>Zoom is On</button>").appendTo('.buttholder');
			  $('.buttholder').css({position:'fixed', left: zbleft+'px', top:zbtop+'px', zIndex:'12000'});
			  
			  $('.zoombutton').click(function(){
				  
				  event.preventDefault();
			event.stopPropagation();
				  
				  if(onoff=='off')
				  {
					   onoff = 'on';

					  alert('You turned the zoom window on!');
					  $('.zoombutton').text('Zoom is On')
					  global.selected.zoomimage.init();
				  }
				  else
				  {
				  onoff = 'off';
				  alert('You turned the zoom window off!');
				  $('.zoombutton').text('Zoom is Off')

				  $('img, *').unbind('mouseenter');
				  $('img, *').unbind('mousemove');
				  $('img, *').unbind('mouseleave');


				  }
			  });
			  
		  }
		  
	  }
	  
	   function setConfig(value){config = value;}
	   function getConfig() {return config;}
	   
}(jQuery))