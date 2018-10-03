
ko.bindingHandlers.uibutton={update:function(element,valueAccessor,allBindingsAccessor){var $element=$(element);var allBindings=allBindingsAccessor()
$element.button();if(typeof(allBindings.enable)!=='undefined'){$element.prop("disabled",!allBindings.enable);if($element.hasClass("ui-button")){$element.button("option","disabled",!allBindings.enable);}}
else{$element.prop("disabled",false);if($element.hasClass("ui-button")){$element.button("option","disabled",false);}};}}