$(document).ready(function () {
    var markUp = ["<select id='primarynav-select'>"], $li, $a;
    markUp.push("<option value='' selected='selected'>Go to...</option>");
    $("#navMenu ul.level1 > li").each(function () {
        $li = $(this);
        $li.find("a.static").each(function () {
            $a = $(this);
            if ($a.attr("href") === undefined) {
                markUp.push("<optgroup label='" + $a.text() + "'>");
            }
            else {
                markUp.push("<option value='" + $a.attr("href") + "'>" + $a.text() + "</option>")
                markUp.push("<optgroup>");
            }
            $a.next("ul").children("li").each(function () {
                $li2 = $(this);
                $a2 = $li2.find("a:first");
                markUp.push("<option value='" + $a2.attr("href") + "'>" + $a2.text() + "</option>")
            });
            markUp.push("</optgroup>");

        });

        /*
        if ($li.find("li").length) {
        markUp.push("<optgroup label='" + $li.find("strong").text() + "'>");
        $li.find("ul").each(function () {
        $a = $(this).find("a");
        markUp.push("<option value='" + $a.attr("href") + "'>" + $a.text() + "</option>")
        });
        markUp.push("</optgroup>");
        }
        else {
        $a = $li.find("a");
        markUp.push("<option value='" + $a.attr("href") + "'>" + $a.text() + "</option>")
        }
        */
    });
    markUp.push("</select>");

//    $("#navMenu").appendTo(markUp.join(''));
    $(markUp.join('')).appendTo("#navMenu");
    $("#primarynav-select").change(function () { window.location = $(this).val(); });
});