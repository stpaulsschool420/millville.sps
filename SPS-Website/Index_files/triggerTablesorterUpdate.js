
ko.bindingHandlers.triggerTablesorterUpdate={update:function(element,valueAccessor){ko.utils.unwrapObservable(valueAccessor());$(element).trigger("update");$(element).trigger("appendCache");}}