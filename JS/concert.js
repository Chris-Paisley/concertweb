$(document).ready(function(){
    //need to make it so you have to fill out form to checkout
        // prevent browser from storeing card #
        //show other info of checkout
    //make a save info checkbox
        //otherwise delete all info upon completion
        //credit card info never save
    //Make it look good for mobile

    var overlay;
    var totalP;
    var quantity;
    var who;
    var tWith;
    var where;
    var when;
    var age;
    var price;
    var previewPage = $('#preview');
    var firstN;
    var lastN;
    var email;
    var address1;
    var city;
    var state;
    var country;
    var zip;
    var credit;
    var mainF = $('#mainForm');
    var thanks = $('#thanks');

    allDates();
    stickyNav();

    //Make nav sticky.
    var stickyNavTop = $('.nav').offset().top;
    function stickyNav(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop > stickyNavTop) {
		    $('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
		}
	}

	$(document).scroll(function() {
		stickyNav();
	});

    //
    function allDates (){
        $('input').on('click', function(){
            $('.arrowContainer').hide();
            $('.extraDates').slideDown(200, function() {
                $('html, body').delay('200').animate({
                scrollTop: $(this).offset().top - 111
            }, 100);
            });
        });
    }

    $('.notSold').on('click', function() {
        //Finds the number of tickets selected and mutiplies by the price to get the total
        function totalChange() {
            quantity = $('#ticketNum').find(':selected').val();
            totalP = (price * quantity).toFixed(2);
            $('.total').text(' $' + totalP);
            return totalP, quantity;
        }


        //Shows the modal with overlay
            //Stops the main body from scrolling
        $('.modal').css('display', 'block');
        $('#mainForm').show();
        $('form').show();
        $('#preview').hide();
        $('.thisW').show();
        overlay = $('<div id="overlay"></div>').prependTo('body');
        $("body").css("overflow-y", "hidden");
        $('input').off('click');

        //breakthough!! finally got it to add who,where,when,with,age dynamically
            //Adds it to the top of the modal
        who = $(this).parent('div').find('.who').text();
        $('.thisWho').text(who);

        tWith = $(this).parent('div').find('.with').html();
        $('.thisWith').html(tWith);

        where = $(this).parent('div').find('.where').text();
        $('.thisWhere').text(where);

        when = $(this).parent('div').find('.when').html();
        $('.thisWhen').html(when);

        age = $(this).parent('div').find('.age').html();
        $('.thisAge').html(age);

        var priceBase = $(this).parent('div').find('.priceEach').text();
        $('.thisPrice').text(priceBase);

        price = $(this).parent('div').find('.priceEach').text().substr(1);
        $('.total').text(' $' + price);

        //If the overlay is clicked it closes the modal
        $('#overlay').on('click', function() {
           $('.modal').css('display', 'none');
            overlay.remove();
            $("body").css("overflow-y", "scroll");
            allDates();
        });

        totalChange();

        //Listens for changes to the ticket amount to be able to change the price
        $('#ticketNum').on('change keyup click', function() {
            totalChange();
        });

        return who, tWith, where, when, age, price;
    }); //End of notSold on click event


    //Goes to preview page
     $('#checkout').on('click', function(event) {
            event.preventDefault();
            mainF.hide();
            $('.thisW').hide();
            previewPage.show();
            previewHere();

    });


    function previewHere(){
        firstN = $('#fName').val();
        lastN = $('#lName').val();
        email = $('#email').val();
        address1 = $('#add1').val();
        var address2 = $('#add2').val();
        city = $('#city').val();
        state = $('#states').val();
        country = $('#countries').val();
        zip = $('#zip').val();
        credit = $('#credit').val();


       //make creditcard # ****
       function cCard (str) {
           return str.replace(/\d(?=\d{4})/g, "*");

       }


        function allCap(str) {
            var splitStr = str.toLowerCase().split(' ');
            var caps = splitStr.map(function(val) {
                return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            return caps.join(' ');
            }

        previewPage.html(
            '<h3> Bill To:</h3>'
            + '<p>' + allCap(firstN) + ' ' + allCap(lastN) + '</br>'
            +  email + '</br>'
            +  allCap(address1) + ' ' + allCap(address2) + ' ' + '</br>'
            + allCap(city) + ', ' + state + ', ' + allCap(country) + ' ' + zip + '</p>'
            + '<p> Charge to credit card ending in ' + cCard(credit) + '</p>'
            + '<h3> Event:</h3>'
            + '<p>' + who + '</br>'
            + tWith + '</br>'
            + where + '</br>'
            + when + '</br>'
            + age + '</p>'
            + '<p class="priceRight"><b>Ticket Price:</b> $' + price + '</p>'
            + '<p class="lineEq priceRight"> <b>Qty: </b> ' + quantity + '</p>'
            +'<p class="priceRight"><b>Total Cost:</b> $' + totalP + '</p>'
            + '<button id="submit"> Submit </button>'
            + '<button id="edit"> Edit </button>');

        $('#edit').on('click', function() {
            previewPage.hide();
            mainF.show();
            $('.thisW').show();
        });

        $('#submit').on('click', function() {
            $('form').hide();
            previewPage.hide();
            thanks.show().html('<h2> Thanks, you will get a confimation email shortly! </h2>');
        });
    } //End of previewHere

    //Close modal
        //Close modal if click outside of it
    if(!$('.modal').on('click')){
        $('.modal').css('display', 'none');
        $('#ticketNum').val(1);
    }

        //Close after clicking x
    $('.close').on('click', function() {
        $('.modal').css('display', 'none');
        overlay.remove();
        $("body").css("overflow-y", "scroll");
        allDates();
        thanks.hide();
        $('#ticketNum').val(1);
    });
}); // End of doc ready
