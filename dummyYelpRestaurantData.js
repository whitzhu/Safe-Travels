//https://api.yelp.com/v3/businesses/search?term=casual&location=sanfrancisco&price=3
const dummyYelpRestData = {
    "businesses": [
        {
            "price": "$$$",
            "name": "Rich Table",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QxrrVXVsowoKhLXQXZtXsg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "199 Gough St",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94102",
                "display_address": [
                    "199 Gough St",
                    "San Francisco, CA 94102"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.77485,
                "longitude": -122.42284
            },
            "id": "rich-table-san-francisco",
            "url": "https://www.yelp.com/biz/rich-table-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 803,
            "phone": "+14153559085",
            "transactions": [],
            "distance": 955.1534932156,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "display_phone": "(415) 355-9085"
        },
        {
            "price": "$$$",
            "name": "AL's Place",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Ie1ErNx_ukcb6t-FWzp-BA/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1499 Valencia st",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94110",
                "display_address": [
                    "1499 Valencia st",
                    "San Francisco, CA 94110"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7490078521491,
                "longitude": -122.42025397718
            },
            "id": "als-place-san-francisco",
            "url": "https://www.yelp.com/biz/als-place-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 404,
            "phone": "+14154166136",
            "transactions": [],
            "distance": 2162.676797256,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "vegetarian",
                    "title": "Vegetarian"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "display_phone": "(415) 416-6136"
        },
        {
            "price": "$$$",
            "name": "State Bird Provisions",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gj-8jw8tgi2LjGdxizt5xg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1529 Fillmore St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94115",
                "display_address": [
                    "1529 Fillmore St",
                    "San Francisco, CA 94115"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.78374,
                "longitude": -122.433005
            },
            "id": "state-bird-provisions-san-francisco",
            "url": "https://www.yelp.com/biz/state-bird-provisions-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 2027,
            "phone": "+14157951272",
            "transactions": [],
            "distance": 1863.8172093679998,
            "categories": [
                {
                    "alias": "tapasmallplates",
                    "title": "Tapas/Small Plates"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "display_phone": "(415) 795-1272"
        },
        {
            "price": "$$$",
            "name": "Firefly Restaurant",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sNdEhtPYoANc5HJiX345jw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "4288 24th St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94114",
                "display_address": [
                    "4288 24th St",
                    "San Francisco, CA 94114"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.751206,
                "longitude": -122.438189
            },
            "id": "firefly-restaurant-san-francisco-4",
            "url": "https://www.yelp.com/biz/firefly-restaurant-san-francisco-4?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1321,
            "phone": "+14158217652",
            "transactions": [],
            "distance": 2004.4830204739999,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "gluten_free",
                    "title": "Gluten-Free"
                }
            ],
            "display_phone": "(415) 821-7652"
        },
        {
            "price": "$$$",
            "name": "Chapeau!",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/qAdGIt3Gd0eTXwW0WjZamw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "126 Clement St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94118",
                "display_address": [
                    "126 Clement St",
                    "San Francisco, CA 94118"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7833671569824,
                "longitude": -122.460693359375
            },
            "id": "chapeau-san-francisco",
            "url": "https://www.yelp.com/biz/chapeau-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 2405,
            "phone": "+14157509787",
            "transactions": [],
            "distance": 3361.95390751,
            "categories": [
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "display_phone": "(415) 750-9787"
        },
        {
            "price": "$$$",
            "name": "Delfina",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/_VkWMg83UDzHQz-L-eRTIA/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "3621 18th St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94110",
                "display_address": [
                    "3621 18th St",
                    "San Francisco, CA 94110"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.76131,
                "longitude": -122.42431
            },
            "id": "delfina-san-francisco",
            "url": "https://www.yelp.com/biz/delfina-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1812,
            "phone": "+14155524055",
            "transactions": [],
            "distance": 753.0382528896,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "display_phone": "(415) 552-4055"
        },
        {
            "price": "$$$",
            "name": "Chouchou French Bistro",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/2258H7ZweBrafVWrTYd65Q/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "400 Dewey Blvd.",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94116",
                "display_address": [
                    "400 Dewey Blvd.",
                    "San Francisco, CA 94116"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.747402893089,
                "longitude": -122.45931976528
            },
            "id": "chouchou-french-bistro-san-francisco",
            "url": "https://www.yelp.com/biz/chouchou-french-bistro-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1083,
            "phone": "+14152420960",
            "transactions": [],
            "distance": 3526.011314582,
            "categories": [
                {
                    "alias": "french",
                    "title": "French"
                }
            ],
            "display_phone": "(415) 242-0960"
        },
        {
            "price": "$$$",
            "name": "Zuni Café",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/SFIHYbU--AOvyi20410ong/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1658 Market St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94102",
                "display_address": [
                    "1658 Market St",
                    "San Francisco, CA 94102"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7734826,
                "longitude": -122.4216396
            },
            "id": "zuni-café-san-francisco-3",
            "url": "https://www.yelp.com/biz/zuni-caf%C3%A9-san-francisco-3?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 2341,
            "phone": "+14155522522",
            "transactions": [],
            "distance": 900.2348139958,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "display_phone": "(415) 552-2522"
        },
        {
            "price": "$$$",
            "name": "Cotogna",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/-NhifStnFXhnbNAQ0NygXQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "490 Pacific Ave",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "490 Pacific Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7975,
                "longitude": -122.40336
            },
            "id": "cotogna-san-francisco",
            "url": "https://www.yelp.com/biz/cotogna-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1059,
            "phone": "+14157758508",
            "transactions": [],
            "distance": 3995.42312298,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "display_phone": "(415) 775-8508"
        },
        {
            "price": "$$$",
            "name": "Stones Throw",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Pu6zPMdBSqJiUArt0CN5bQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1896 Hyde St",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94109",
                "display_address": [
                    "1896 Hyde St",
                    "San Francisco, CA 94109"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7981224060059,
                "longitude": -122.418571472168
            },
            "id": "stones-throw-san-francisco-2",
            "url": "https://www.yelp.com/biz/stones-throw-san-francisco-2?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 702,
            "phone": "+14157962901",
            "transactions": [],
            "distance": 3518.1754381219994,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "display_phone": "(415) 796-2901"
        },
        {
            "price": "$$$",
            "name": "Lolinda",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wYzB4595TuYesGnyUt9lPw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "2518 Mission St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94110",
                "display_address": [
                    "2518 Mission St",
                    "San Francisco, CA 94110"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7566409111023,
                "longitude": -122.418933659792
            },
            "id": "lolinda-san-francisco",
            "url": "https://www.yelp.com/biz/lolinda-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1319,
            "phone": "+14155506970",
            "transactions": [],
            "distance": 1439.5139780716,
            "categories": [
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "argentine",
                    "title": "Argentine"
                },
                {
                    "alias": "tapasmallplates",
                    "title": "Tapas/Small Plates"
                }
            ],
            "display_phone": "(415) 550-6970"
        },
        {
            "price": "$$$",
            "name": "Blue Plate",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/5iaI4aBsGYRaaRE1V4e8-w/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "3218 Mission St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94110",
                "display_address": [
                    "3218 Mission St",
                    "San Francisco, CA 94110"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7452735900879,
                "longitude": -122.420433044434
            },
            "id": "blue-plate-san-francisco",
            "url": "https://www.yelp.com/biz/blue-plate-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1228,
            "phone": "+14152826777",
            "transactions": [
                "pickup"
            ],
            "distance": 2562.0193904599996,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                },
                {
                    "alias": "tapasmallplates",
                    "title": "Tapas/Small Plates"
                }
            ],
            "display_phone": "(415) 282-6777"
        },
        {
            "price": "$$$",
            "name": "Wayfare Tavern",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/f-DXV3kCBLJNArROFoS3KQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "558 Sacramento St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94111",
                "display_address": [
                    "558 Sacramento St",
                    "San Francisco, CA 94111"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7939484886016,
                "longitude": -122.402307987213
            },
            "id": "wayfare-tavern-san-francisco-2",
            "url": "https://www.yelp.com/biz/wayfare-tavern-san-francisco-2?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 3146,
            "phone": "+14157729060",
            "transactions": [],
            "distance": 3726.6055676739998,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "display_phone": "(415) 772-9060"
        },
        {
            "price": "$$$",
            "name": "Absinthe Brasserie & Bar",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7DZ1Js4gN5rXZRYJE7xibw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "398 Hayes St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94102",
                "display_address": [
                    "398 Hayes St",
                    "San Francisco, CA 94102"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7769459038973,
                "longitude": -122.422807440162
            },
            "id": "absinthe-brasserie-and-bar-san-francisco-2",
            "url": "https://www.yelp.com/biz/absinthe-brasserie-and-bar-san-francisco-2?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 2909,
            "phone": "+14155511590",
            "transactions": [],
            "distance": 1161.4786382344,
            "categories": [
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "display_phone": "(415) 551-1590"
        },
        {
            "price": "$$$",
            "name": "La Mar Cebichería Peruana",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3gLo2lmvWlG5mqwAYH-K-Q/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Pier 1 1/2 The Embarcadero",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94111",
                "display_address": [
                    "Pier 1 1/2 The Embarcadero",
                    "San Francisco, CA 94111"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7974182368553,
                "longitude": -122.395129846558
            },
            "id": "la-mar-cebichería-peruana-san-francisco-4",
            "url": "https://www.yelp.com/biz/la-mar-cebicher%C3%ADa-peruana-san-francisco-4?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 2970,
            "phone": "+14153978880",
            "transactions": [],
            "distance": 4425.129455832,
            "categories": [
                {
                    "alias": "latin",
                    "title": "Latin American"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "peruvian",
                    "title": "Peruvian"
                }
            ],
            "display_phone": "(415) 397-8880"
        },
        {
            "price": "$$$",
            "name": "Prubechu",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6d6FgsJET3IG8WEqh8FkqQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "2847 Mission St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94110",
                "display_address": [
                    "2847 Mission St",
                    "San Francisco, CA 94110"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7515228,
                "longitude": -122.4183644
            },
            "id": "prubechu-san-francisco",
            "url": "https://www.yelp.com/biz/prubechu-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 209,
            "phone": "+14159523654",
            "transactions": [
                "pickup"
            ],
            "distance": 1967.548184672,
            "categories": [
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "display_phone": "(415) 952-3654"
        },
        {
            "price": "$$$",
            "name": "Izzy's Steak & Chop House",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/dJLnq5Gq0o7VtXZeczkjlQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "3345 Steiner St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94123",
                "display_address": [
                    "3345 Steiner St",
                    "San Francisco, CA 94123"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.8003027,
                "longitude": -122.4381084
            },
            "id": "izzys-steak-and-chop-house-san-francisco",
            "url": "https://www.yelp.com/biz/izzys-steak-and-chop-house-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 840,
            "phone": "+14155630487",
            "transactions": [],
            "distance": 3759.35225706,
            "categories": [
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "display_phone": "(415) 563-0487"
        },
        {
            "price": "$$$",
            "name": "1760",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/5a0l30lt79y88moLpotiag/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1760 Polk St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94109",
                "display_address": [
                    "1760 Polk St",
                    "San Francisco, CA 94109"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7931389,
                "longitude": -122.4211588
            },
            "id": "1760-san-francisco",
            "url": "https://www.yelp.com/biz/1760-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 572,
            "phone": "+14153591212",
            "transactions": [],
            "distance": 2926.953972596,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "display_phone": "(415) 359-1212"
        },
        {
            "price": "$$$",
            "name": "La Ciccia",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Z3vD-x_sAKlgTimgXJp_qw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "291 30th St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94131",
                "display_address": [
                    "291 30th St",
                    "San Francisco, CA 94131"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.742265,
                "longitude": -122.426666
            },
            "id": "la-ciccia-san-francisco",
            "url": "https://www.yelp.com/biz/la-ciccia-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 894,
            "phone": "+14155508114",
            "transactions": [],
            "distance": 2799.8627834559998,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "sardinian",
                    "title": "Sardinian"
                }
            ],
            "display_phone": "(415) 550-8114"
        },
        {
            "price": "$$$",
            "name": "SPQR",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/AOoWv69XP6NAw3b7jwR6xg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1911 Fillmore St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94115",
                "display_address": [
                    "1911 Fillmore St",
                    "San Francisco, CA 94115"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.78725,
                "longitude": -122.43376
            },
            "id": "spqr-san-francisco",
            "url": "https://www.yelp.com/biz/spqr-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1719,
            "phone": "+14157717779",
            "transactions": [],
            "distance": 2262.26694074,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "display_phone": "(415) 771-7779"
        }
    ],
    "total": 665,
    "region": {
        "center": {
            "latitude": 37.767413217936834,
            "longitude": -122.42820739746094
        }
    }
}

export default dummyYelpRestData;
