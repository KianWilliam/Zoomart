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
defined('_JEXEC') || die('Restricted access');
use Joomla\CMS\Factory;
class PlgContentZoomartInstallerScript
{
 public function install($parent)
 {
  
   
  $db  = Factory::getDbo();
  $query = $db->getQuery(true);
  $query->update('#__extensions');
  $query->set($db->quoteName('enabled') . ' = 1');
  $query->where($db->quoteName('element') . ' = ' . $db->quote('zoomart'));
  $query->where($db->quoteName('type') . ' = ' . $db->quote('plugin'));
  $db->setQuery($query);
  $db->execute();
  
 
  
  
  
 }
   public function uninstall($parent) 
  {
	       
       
  }
}