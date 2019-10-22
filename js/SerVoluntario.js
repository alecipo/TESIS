$('#kids').on({
    'click': function(){        
        $(".containerAccordion").css({ "display": "initial" });
    }
});

$('#inst1').on({
    'click': function(){     
        var place_id = "ChIJ93qT7VZENZQRHcP9QR5tvEo";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});