$('#kids').on({
    'click': function(){        
        $(".containerAccordion").css({ "display": "initial" });
    }
});

$('#inst1').on({
    'click': function(){     
        var place_id = "ChIJN8oHULVFNZQRMBD_d98IFM0";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});

$('#inst2').on({
    'click': function(){     
        var place_id = "ChIJU6_avtBFNZQRAnkYlnoHErI";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});

$('#inst3').on({
    'click': function(){     
        var place_id = "ChIJN8oHULVFNZQRfI3hBty_QrY";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});

$('#inst4').on({
    'click': function(){     
        var place_id = "ChIJN8oHULVFNZQRsJ0qiEtXpv0";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});

$('#inst5').on({
    'click': function(){     
        var place_id = "ChIJe6oLBxtFNZQRYb-oJvTuzQo";   
        $('#map').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCJZyxRxT8rvAdqcR7Pj5t1HY80uX04fWQ&q=place_id:' + place_id);
    }
});