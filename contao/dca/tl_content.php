<?php
// Bildgrößen als Pflichtfeld deklarieren
$GLOBALS['TL_DCA']['tl_content']['fields']['size']['eval']['mandatory'] = true;
// Ratio for Youtube Shorts
$GLOBALS['TL_DCA']['tl_content']['fields']['playerAspect']['options'][] = '9:16';
// Div-Tag für Headlines statt hX
$GLOBALS['TL_DCA']['tl_content']['fields']['headline']['options'][] = 'div';
//basicEntities erlauben
$GLOBALS['TL_DCA']['tl_content']['fields']['linkTitle']['eval']['basicEntities'] = true;