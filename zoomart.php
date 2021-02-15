<?php

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

?>
<?php 
defined('_JEXEC') or die;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Factory;
use Joomla\CMS\Uri\Uri;

class PlgContentZoomart extends CMSPlugin
{
	
	protected $autoloadLanguage = true;
	
	public function onAfterInitialise()
	{
		
		$this->loadLanguage();
	}
	
	public function onContentPrepare($context, &$row, &$params, $page = 0)
	{
		
		
        $onoff = $this->params->get('onoff');	
		$exclude = $this->params->get('exclude');
		$magnifier = $this->params->get('magnifier');
		$zwpos = $this->params->get('zwpos');
		$zoomwindoww = $this->params->get('zoomwindoww');
		$zoomwindowh = $this->params->get('zoomwindowh');
		$libjquery = $this->params->get('jQuery');
		$bordercolor = $this->params->get('bordercolor');
		$bordersize = $this->params->get('bordersize');
		$buttoncolor = $this->params->get('buttoncolor');
		$buttonbkcolor = $this->params->get('buttonbkcolor');

		
			  $app = Factory::getApplication();
			  
			  
			  if($app->isClient('site'))
			  {
				  JHtml::_('bootstrap.framework');
				  
				  if($onoff==='on'){
					  						//to be used in zoombutton 
					    $uri = Uri::getInstance();
			            $uri = $uri->toString();
					  
					  $doc = Factory::getDocument();
					   if($libjquery==1):  
					   ?>
					   <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' type='text/javascript'></script>
                    <?php					
					endif;
                       $doc->addScript(JURI::base()."plugins/content/zoomart/lib/zoomart.js");
                       $noConf = " var zart= jQuery.noConflict(); ";
                       $doc->addScriptDeclaration($noConf);
					  
					  
					  $zoomartcss="
					  
					  .zoomart{
						 
						  border:".$bordersize."px solid ".$bordercolor.";
						  
					  }
					  .zoombutton{
						  color:".$buttoncolor.";
						  background-color:".$buttonbkcolor.";
					  }
					  
					  ";
					  $doc->addStyleDeclaration($zoomartcss);
					  
					  $zoomartopts = "	
                           var onoff;
						   
						   onoff = '".$onoff."';					  
					       zart(document).ready(function(){
		                   zart('.zoomart').zoomimage.config({exclude:'".$exclude."', magnifier:'".$magnifier."', zwpos:'".$zwpos."', zoomww:'".$zoomwindoww."', zoomwh:'".$zoomwindowh."', bordercolor:'".$bordercolor."', buttoncolor:'".$buttoncolor."', buttonbkcolor:'".$buttonbkcolor."',  uri:'".$uri."',  bs:'".$bordersize."',  bc:'".$bordercolor."'});
	                   // zart.fn.zoomart.defaults={};
						});					  
					  ";
					  $doc->addScriptDeclaration($zoomartopts);
					  
				  }
			  }
	}
	
}