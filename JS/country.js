 $( function() {
    var availableTags = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'The Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Bolivia',
        'Botswana',
        'Brazil',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Chad',
        'Chile',
        'Colombia',
        'Congo',
        'Costa Rica',
        'Cuba',
        'Czech Republic',
        'Denmark',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Estonia',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Greenland',
        'Guam',
        'Guatemala',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'South Korea',
        'Kuwait',
        'Laos',
        'Latvia',
        'Lebanon',
        'Liberia',
        'Libya',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malaysia',
        'Mexico',
        'Monaco',
        'Mongolia',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Niger',
        'Nigeria',
        'Norway',
        'Pakistan',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Romania',
        'Russia',
        'Rwanda',
        'Samoa',
        'San Marino',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'Uruguay',
        'Uzbekistan',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'British Virgin Islands',
        'US Virgin Islands',
        'Yemen',
        'Zambia',
        'Zimbabwe'

    ];
    $( "#countries" ).autocomplete({
      source: function(req, responseFn) {
        var re = $.ui.autocomplete.escapeRegex(req.term);
        var matcher = new RegExp( "^" + re, "i" );
        var a = $.grep( availableTags, function(item,index){
            return matcher.test(item);
        });
        responseFn( a );
    }
    });
  } );