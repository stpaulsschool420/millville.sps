﻿
ko.bindingHandlers.datetimepicker={init:function(element,valueAccessor,allBindingsAccessor){var options=allBindingsAccessor().datetimepickerOptions||{};$(element).datetimepicker(options);ko.utils.registerEventHandler(element,"change",function(){var observable=valueAccessor();observable($(element).datetimepicker("getDate"));$(element).blur();});ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).datetimepicker("destroy");});$("#ui-datepicker-div").hide();},update:function(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor()),current=$(element).datetimepicker("getDate");if(value-current!==0){$(element).datetimepicker("setDate",value);}}};