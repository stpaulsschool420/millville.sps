Number.prototype.formatMoney = function (decPlaces, thouSeparator, decSeparator, moneySign) {
    var n = this,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
    if (n.toString().indexOf(".") === -1) {
        decPlaces = 0;
    }
    var decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        moneySign = moneySign == undefined ? "$" : moneySign,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    
    return sign + moneySign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

var checkTimeOut = function (response) {
    if (response.d) {
        if (response.d.redirect) {
            window.location.replace(response.d.redirect);
        }
    }
};

var tsUtilities = {
    afterRowRender: function (element, item, tbl, data, options) {
        //debugger;
        if (data().indexOf(item) === data().length - 1) {
            if (data().length > 0) {
                $.when($("#results").show()).done(function () {
                    if (tsUtilities.tsInitialized(tbl)) {
                        tsUtilities.updateTablesorter(tbl);
                    } else {
                        tsUtilities.initializeTablesorter(tbl, options);
                    }
                });

            }
        }
    },
    initializeTablesorter: function (tbl, options) {
        //debugger;
        return $(tbl).tablesorter(options).bind('filterEnd pagerComplete updateComplete', function (event, data) {
            //debugger;
            $('.filter-rows').html(data.filteredRows);
            $('.total-rows').html(data.totalRows);
        });
    },

    tsInitialized: function (tbl) {
        //debugger;
        return $(tbl).hasClass("tablesorter");
    },
    updateTablesorter: function (tbl) {
        //debugger;
        return $(tbl).trigger("updateAll");
    },
    getData: function (tbl) {
        $(tbl).trigger('outputTable');
    }


};

moment.tz.setDefault("America/New_York");

var createMoment = function (dtValue, dtDefault) {
    if (!dtDefault)
        dtDefault = null;

    return dtValue ? moment(dtValue).toDate() : dtDefault;
};
