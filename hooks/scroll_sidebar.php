//<?php

class hook5 extends _HOOK_CLASS_
{

/* !Hook Data - DO NOT REMOVE */
public static function hookData() {
 return array_merge_recursive( array (
  'globalTemplate' => 
  array (
    0 => 
    array (
      'selector' => '#ipsLayout_body',
      'type' => 'add_inside_end',
      'content' => '<div class="scroll_sidebar ipsResponsive_showDesktop" data-controller="plugins.scrollUpDown"></div>',
    ),
  ),
), parent::hookData() );
}
/* End Hook Data */






































}