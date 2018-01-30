
$(document).ready(function(){

    $.getJSON( "emoji.json", function( data ) {
        console.log(data);
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'> <img src='" + val + "'></li>" );
        });

        $( "<ul/>", {
            "class": "emoji-list",
            html: items.join( "" )
        }).appendTo( "body" );

    });

});