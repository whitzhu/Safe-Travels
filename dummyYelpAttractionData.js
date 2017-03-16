//https://api.yelp.com/v3/businesses/search?term=tourist%20attractions&location=sanfrancisco
const dummyYelpAttractionData = {
    "businesses": [
        {
            "name": "The 16th Avenue Tiled Steps",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3ZHUARohod_PF2BJh1GwvQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Moraga St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94122",
                "display_address": [
                    "Moraga St",
                    "San Francisco, CA 94122"
                ]
            },
            "rating": 5,
            "coordinates": {
                "latitude": 37.7562695920562,
                "longitude": -122.473148091171
            },
            "id": "the-16th-avenue-tiled-steps-san-francisco",
            "url": "https://www.yelp.com/biz/the-16th-avenue-tiled-steps-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 456,
            "phone": "",
            "transactions": [],
            "distance": 4140.0191033,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                },
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": ""
        },
        {
            "name": "Lombard Street",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/crY6DFOR0UZApl2E4V4Tcw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1000-1099 Lombard St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "1000-1099 Lombard St",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.8020957604717,
                "longitude": -122.418835306054
            },
            "id": "lombard-street-san-francisco-3",
            "url": "https://www.yelp.com/biz/lombard-street-san-francisco-3?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 590,
            "phone": "",
            "transactions": [],
            "distance": 3943.50098656,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                }
            ],
            "display_phone": ""
        },
        {
            "name": "The San Francisco Dungeon",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1WvKcHJ9l-Dru3mpi0cGvg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "145 Jefferson St",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "145 Jefferson St",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.8083343796645,
                "longitude": -122.414591514542
            },
            "id": "the-san-francisco-dungeon-san-francisco",
            "url": "https://www.yelp.com/biz/the-san-francisco-dungeon-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 346,
            "phone": "+18557539999",
            "transactions": [],
            "distance": 4704.864934632,
            "categories": [
                {
                    "alias": "theater",
                    "title": "Performing Arts"
                }
            ],
            "display_phone": "(855) 753-9999"
        },
        {
            "name": "San Francisco's Chinatown",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vu1cHSi3mLcyFthnjMUw8A/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Grant Ave And Bush St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94101",
                "display_address": [
                    "Grant Ave And Bush St",
                    "San Francisco, CA 94101"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7943215257349,
                "longitude": -122.406320571899
            },
            "id": "san-franciscos-chinatown-san-francisco",
            "url": "https://www.yelp.com/biz/san-franciscos-chinatown-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 450,
            "phone": "",
            "transactions": [],
            "distance": 3557.1502733079997,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                },
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": ""
        },
        {
            "name": "Alcatraz Island",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/spJ4I3XjxD4n-GiIuo3BBA/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Alcatraz Island",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94122",
                "display_address": [
                    "Alcatraz Island",
                    "San Francisco, CA 94122"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7624397277832,
                "longitude": -122.485137939453
            },
            "id": "alcatraz-island-san-francisco-3",
            "url": "https://www.yelp.com/biz/alcatraz-island-san-francisco-3?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1397,
            "phone": "+14155614900",
            "transactions": [],
            "distance": 6639.0991375680005,
            "categories": [
                {
                    "alias": "museums",
                    "title": "Museums"
                },
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": "(415) 561-4900"
        },
        {
            "name": "Ghirardelli Square",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Gc0VnooTIkxzqG5GJmJqtg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "900 N Point St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94109",
                "display_address": [
                    "900 N Point St",
                    "San Francisco, CA 94109"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.8055589703077,
                "longitude": -122.422428034281
            },
            "id": "ghirardelli-square-san-francisco",
            "url": "https://www.yelp.com/biz/ghirardelli-square-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 815,
            "phone": "+14157755500",
            "transactions": [],
            "distance": 4271.659252883999,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                }
            ],
            "display_phone": "(415) 775-5500"
        },
        {
            "name": "Coit Tower",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/j2ZgW4ccAma4JZbIh-34kw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "1 Telegraph Hill Blvd",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "1 Telegraph Hill Blvd",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.8023794656811,
                "longitude": -122.405837855675
            },
            "id": "coit-tower-san-francisco",
            "url": "https://www.yelp.com/biz/coit-tower-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 758,
            "phone": "+14152490995",
            "transactions": [],
            "distance": 4356.6948472760005,
            "categories": [
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                },
                {
                    "alias": "museums",
                    "title": "Museums"
                }
            ],
            "display_phone": "(415) 249-0995"
        },
        {
            "name": "Twin Peaks",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/4VDxrlrV7Bk2o-RnkU97HQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "501 Twin Peaks Blvd",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94114",
                "display_address": [
                    "501 Twin Peaks Blvd",
                    "San Francisco, CA 94114"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7521564122127,
                "longitude": -122.447519302368
            },
            "id": "twin-peaks-san-francisco",
            "url": "https://www.yelp.com/biz/twin-peaks-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 929,
            "phone": "+14158312700",
            "transactions": [],
            "distance": 2400.075690544,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                },
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": "(415) 831-2700"
        },
        {
            "name": "Palace Of Fine Arts",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qrVb0NOV6QxUa8OpSLOeVg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "3301 Lyon St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94123",
                "display_address": [
                    "3301 Lyon St",
                    "San Francisco, CA 94123"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.8014089,
                "longitude": -122.4479745
            },
            "id": "palace-of-fine-arts-san-francisco",
            "url": "https://www.yelp.com/biz/palace-of-fine-arts-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 772,
            "phone": "+14155636504",
            "transactions": [],
            "distance": 4340.001646258,
            "categories": [
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": "(415) 563-6504"
        },
        {
            "name": "The Painted Ladies",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vOiMDY5VWIk1sfzmUt7Kag/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "701-799 Steiner St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94117",
                "display_address": [
                    "701-799 Steiner St",
                    "San Francisco, CA 94117"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7755737,
                "longitude": -122.432991
            },
            "id": "the-painted-ladies-san-francisco",
            "url": "https://www.yelp.com/biz/the-painted-ladies-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 146,
            "phone": "",
            "transactions": [],
            "distance": 1101.922179096,
            "categories": [
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": ""
        },
        {
            "price": "$",
            "name": "Japanese Tea Garden",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Js_c_l6Spwj5Q1BLFp0Mqw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "75 Hagiwara Tea Garden Dr",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "Golden Gate Park",
                "zip_code": "94118",
                "display_address": [
                    "75 Hagiwara Tea Garden Dr",
                    "Golden Gate Park",
                    "San Francisco, CA 94118"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7700897295676,
                "longitude": -122.470314657078
            },
            "id": "japanese-tea-garden-san-francisco",
            "url": "https://www.yelp.com/biz/japanese-tea-garden-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1043,
            "phone": "+14157521171",
            "transactions": [],
            "distance": 3713.02579582,
            "categories": [
                {
                    "alias": "tea",
                    "title": "Tea Rooms"
                },
                {
                    "alias": "giftshops",
                    "title": "Gift Shops"
                },
                {
                    "alias": "gardens",
                    "title": "Botanical Gardens"
                }
            ],
            "display_phone": "(415) 752-1171"
        },
        {
            "name": "The Real SF Tour",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/IVTnXzDNdNc8zIiB4Z07Qw/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "50 Drumm St",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94111",
                "display_address": [
                    "50 Drumm St",
                    "San Francisco, CA 94111"
                ]
            },
            "rating": 5,
            "coordinates": {
                "latitude": 37.7935497,
                "longitude": -122.396224
            },
            "id": "the-real-sf-tour-san-francisco",
            "url": "https://www.yelp.com/biz/the-real-sf-tour-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 90,
            "phone": "+14156652946",
            "transactions": [],
            "distance": 4165.489644677999,
            "categories": [
                {
                    "alias": "tours",
                    "title": "Tours"
                }
            ],
            "display_phone": "(415) 665-2946"
        },
        {
            "name": "Fisherman's Wharf",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/RwuWl7W0nXa3EYcq4W8KEQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.802490234375,
                "longitude": -122.41130065918
            },
            "id": "fishermans-wharf-san-francisco-3",
            "url": "https://www.yelp.com/biz/fishermans-wharf-san-francisco-3?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 604,
            "phone": "+14156733530",
            "transactions": [],
            "distance": 4580.665407604,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                }
            ],
            "display_phone": "(415) 673-3530"
        },
        {
            "name": "Golden Gate Bridge",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/PbumJneeHsIs1FImU6yQzg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Hwy 101",
                "state": "CA",
                "address2": null,
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94129",
                "display_address": [
                    "Hwy 101",
                    "San Francisco, CA 94129"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.8165970086601,
                "longitude": -122.47807463501
            },
            "id": "golden-gate-bridge-san-francisco",
            "url": "https://www.yelp.com/biz/golden-gate-bridge-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1478,
            "phone": "+14159215858",
            "transactions": [],
            "distance": 7007.727798739999,
            "categories": [
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": "(415) 921-5858"
        },
        {
            "name": "Japantown",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/zk4WbFmjuD6nEI-OsMvLVQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Post and Buchanan",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94115",
                "display_address": [
                    "Post and Buchanan",
                    "San Francisco, CA 94115"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7852318770523,
                "longitude": -122.432974790985
            },
            "id": "japantown-san-francisco",
            "url": "https://www.yelp.com/biz/japantown-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 376,
            "phone": "",
            "transactions": [],
            "distance": 2025.1569239819999,
            "categories": [
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": ""
        },
        {
            "name": "Pier 39",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QdJ6z1W2nLIAk3pgLkgEfg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "The Embarcadero and Beach St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "The Embarcadero and Beach St",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.8086604270288,
                "longitude": -122.410165124914
            },
            "id": "pier-39-san-francisco",
            "url": "https://www.yelp.com/biz/pier-39-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1013,
            "phone": "+14157055500",
            "transactions": [],
            "distance": 4852.53185754,
            "categories": [
                {
                    "alias": "localflavor",
                    "title": "Local Flavor"
                },
                {
                    "alias": "landmarks",
                    "title": "Landmarks & Historical Buildings"
                }
            ],
            "display_phone": "(415) 705-5500"
        },
        {
            "price": "$$",
            "name": "The Original Ghirardelli Ice Cream & Chocolate Shop",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EMR-KQjUJ4L-q9Xc_BXFog/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "900 North Point",
                "state": "CA",
                "address2": "Ghirardelli Square",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94109",
                "display_address": [
                    "900 North Point",
                    "Ghirardelli Square",
                    "San Francisco, CA 94109"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.8058331714633,
                "longitude": -122.422949041809
            },
            "id": "the-original-ghirardelli-ice-cream-and-chocolate-shop-san-francisco",
            "url": "https://www.yelp.com/biz/the-original-ghirardelli-ice-cream-and-chocolate-shop-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1928,
            "phone": "+14154743938",
            "transactions": [],
            "distance": 4296.76479595,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                },
                {
                    "alias": "chocolate",
                    "title": "Chocolatiers & Shops"
                }
            ],
            "display_phone": "(415) 474-3938"
        },
        {
            "name": "Magowan's Infinite Mirror Maze",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/E8XZJCG7h4yCndNzqVdJJg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "Pier 39",
                "state": "CA",
                "address2": "Bldg O-11",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94133",
                "display_address": [
                    "Pier 39",
                    "Bldg O-11",
                    "San Francisco, CA 94133"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.8100861565969,
                "longitude": -122.410350629108
            },
            "id": "magowans-infinite-mirror-maze-san-francisco",
            "url": "https://www.yelp.com/biz/magowans-infinite-mirror-maze-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 272,
            "phone": "+14158350019",
            "transactions": [],
            "distance": 4997.6524827,
            "categories": [
                {
                    "alias": "arts",
                    "title": "Arts & Entertainment"
                }
            ],
            "display_phone": "(415) 835-0019"
        },
        {
            "name": "Golden Gate Park",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xGDw6JreQk6L4f0X95Q8xQ/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "501 Stanyan St",
                "state": "CA",
                "address2": "",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94117",
                "display_address": [
                    "501 Stanyan St",
                    "San Francisco, CA 94117"
                ]
            },
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.770518,
                "longitude": -122.479878
            },
            "id": "golden-gate-park-san-francisco",
            "url": "https://www.yelp.com/biz/golden-gate-park-san-francisco?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 1019,
            "phone": "+14158312700",
            "transactions": [],
            "distance": 4555.138056524,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "display_phone": "(415) 831-2700"
        },
        {
            "name": "Union Square Park",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/OB2NDnPEVscQfT3VWW6Jxg/o.jpg",
            "is_closed": false,
            "location": {
                "country": "US",
                "address1": "323 Geary St",
                "state": "CA",
                "address2": "Ste 203",
                "city": "San Francisco",
                "address3": "",
                "zip_code": "94101",
                "display_address": [
                    "323 Geary St",
                    "Ste 203",
                    "San Francisco, CA 94101"
                ]
            },
            "rating": 4,
            "coordinates": {
                "latitude": 37.7879216126663,
                "longitude": -122.407508953837
            },
            "id": "union-square-park-san-francisco-3",
            "url": "https://www.yelp.com/biz/union-square-park-san-francisco-3?adjust_creative=NAEJDur5GiXxJF8GcCrmbQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NAEJDur5GiXxJF8GcCrmbQ",
            "review_count": 434,
            "phone": "+14158315500",
            "transactions": [],
            "distance": 2917.0787404879998,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "display_phone": "(415) 831-5500"
        }
    ],
    "total": 2875,
    "region": {
        "center": {
            "latitude": 37.767413217936834,
            "longitude": -122.42820739746094
        }
    }
}

export default dummyYelpAttractionData;

