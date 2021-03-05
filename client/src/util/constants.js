import Boat from '../images/Boat.svg';
import Customs from '../images/Customs.svg';
import Food from '../images/Food.svg';
import Health from '../images/Health.svg';
import Marinas from '../images/Marinas.svg';
import Miscellanous from '../images/Miscellanous.svg';
import Pets from '../images/Pets.svg';
import Telecom from '../images/Telecom.svg';
import Messaging from '../images/Messaging.png';
import Anchoring from '../images/Anchoring.png';
import Antifouling from '../images/Antifouling.png';
import BadWeather from '../images/BadWeather.png';
import Bags from '../images/Bags.png';
import Canvas from '../images/canvas_2.png';
import Charts from '../images/Charts.png';
import Clothing from '../images/Clothing.png';
import Communication from '../images/Communication.png';
import Compass from '../images/compass.png';
import Deck from '../images/Deck.png';
import Dinghies from '../images/Dinghies.png';
import Pier from '../images/pier.png';
import AC_power from '../images/AC_power.png';
import DC_power from '../images/DC_power.png';
import Engine from '../images/engine.png';
import Fiberglass from '../images/Fiberglass.png';
import Fishing from '../images/Fishing.png';
import Flipflops from '../images/flip-flops.png';
import Kitchen from '../images/kitchen.png';
import Head from '../images/head.png';
import Healthcare from '../images/Health-care.png';
import Heating from '../images/Heating.png';
import Hose from '../images/Hose.png';
import Interior from '../images/Interior.png';
import Laundry from '../images/laundry.png';
import Light_bulb from '../images/light_bulb.png';
import Maintenance from '../images/Maintenance.png';
import Navigation from '../images/Navigation.png';
import Outboards from '../images/Outboards.png';
import PetsTips from '../images/pets.png';
import Plumbing from '../images/Plumbing.png';
import Shopping from '../images/shopping.png';
import Freezer_fridge from '../images/freezer_fridge.png';
import Rigging_running from '../images/rigging_running.png';
import Rigging_standing from '../images/rigging_standing.png';
import Safety from '../images/Safety.png';
import Scubadive from '../images/scuba-dive.png';
import Snorkel_goggles from '../images/snorkel_goggles.png';
import Tool from '../images/tool.png';
import Topside from '../images/topside.png';
import Ventilation from '../images/Ventilation.png';
import watermaker from '../images/watermaker_2.png';
import Watersports from '../images/Watersports.png';
import Winterize from '../images/winterize_2.png';
import Zinc from '../images/Zinc.png';

const TipsTricksImages = [
    Anchoring, Antifouling, BadWeather, Bags, Canvas, Charts, Clothing, Communication, Compass, Deck,
    Dinghies, Pier, AC_power, DC_power, Engine, Fiberglass, Fishing, Flipflops, Kitchen, Head,
    Healthcare, Heating, Hose, Interior, Laundry, Light_bulb, Maintenance, Navigation, Outboards,
    PetsTips, Plumbing, Shopping, Freezer_fridge, Rigging_running, Rigging_standing, Safety, Scubadive,
    Snorkel_goggles, Tool, Topside, Ventilation, watermaker, Watersports, Winterize, Zinc
]

export const ServiceCategories = [
    {
        "id": 1,
        "thumb": Boat,
        "category_name": "Yacht Services",
        "category_key": "yacht",
        "num_sub_categories": 15,
        "sub_categories": [
            {
                "sub_category_name": "Chandleries",
                "sub_category_key": "chandleries",
                "id": 101
            },
            {
                "sub_category_name": "Dinghy Dock’s",
                "sub_category_key": "dinghy_docks",
                "id": 102
            },
            {
                "sub_category_name": "Rubbish Disposals",
                "sub_category_key": "rubbish_disposals",
                "id": 103
            },
            {
                "sub_category_name": "Sailmaker / Canvas",
                "sub_category_key": "sailmaker_canvas",
                "id": 104
            },
            {
                "sub_category_name": "Laundry",
                "sub_category_key": "laundry",
                "id": 105
            },
            {
                "sub_category_name": "Fuel Docks",
                "sub_category_key": "fuel_docks",
                "id": 106
            },
            {
                "sub_category_name": "Water Delivery",
                "sub_category_key": "water_delivery",
                "id": 107
            },
            {
                "sub_category_name": "Upholstery",
                "sub_category_key": "upholstrey",
                "id": 108
            },
            {
                "sub_category_name": "Diving Services",
                "sub_category_key": "diving_services",
                "id": 109
            },
            {
                "sub_category_name": "Fire Extinguisher Services",
                "sub_category_key": "fire_extinguisher_services",
                "id": 110
            },
            {
                "sub_category_name": "Boat Builders",
                "sub_category_key": "boat_builders",
                "id": 111
            },
            {
                "sub_category_name": "Boat Painters / Paint Supply",
                "sub_category_key": "boatpainters_paintsupply",
                "id": 112
            },
            {
                "sub_category_name": "Engineering Services",
                "sub_category_key": "engineering_services",
                "id": 113
            },
            {
                "sub_category_name": "Mechanical Services",
                "sub_category_key": "mechanical_services",
                "id": 114
            },
            {
                "sub_category_name": "Electrical Services Including Watermakers",
                "sub_category_key": "electrical_services_incl_watermaker",
                "id": 115
            }
        ]
    },
    {
        "id": 2,
        "thumb": Marinas,
        "category_name": "Anchorages Marinas Boatyards",
        "category_key": "anchorages_marinas_boatyard",
        "num_sub_categories": 2,
        "sub_categories": [
            {
                "sub_category_name": "Marina's",
                "sub_category_key": "marinas",
                "id": 201
            },
            {
                "sub_category_name": "Boatyards",
                "sub_category_key": "boatyards",
                "id": 202
            }
        ]
    },
    {
        "id": 3,
        "thumb": Food,
        "category_name": "Food & Drinks",
        "category_key": "food_drinks",
        "num_sub_categories": 4,
        "sub_categories": [
            {
                "sub_category_name": "Super Markets",
                "sub_category_key": "super_markets",
                "id": 301
            },
            {
                "sub_category_name": "Bars",
                "sub_category_key": "bars",
                "id": 302
            },
            {
                "sub_category_name": "Restaurants",
                "sub_category_key": "restaurants",
                "id": 303
            },
            {
                "sub_category_name": "Happy Hours",
                "sub_category_key": "happy_hours",
                "id": 304
            }
        ]
    },
    {
        "id": 4,
        "thumb": Light_bulb,
        "category_name": "Tips & Tricks",
        "category_key": "tips_and_tricks",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 5,
        "thumb": Telecom,
        "category_name": "Telecom",
        "category_key": "telecommunications",
        "num_sub_categories": 2,
        "sub_categories": [
            {
                "sub_category_name": "Mobile & Internet Services",
                "sub_category_key": "mobile_internet_services",
                "id": 501
            },
            {
                "sub_category_name": "Satellite Services",
                "sub_category_key": "satellite_services",
                "id": 502
            }
        ]
    },
    {
        "id": 6,
        "thumb": Health,
        "category_name": "Health",
        "category_key": "health",
        "num_sub_categories": 4,
        "sub_categories": [
            {
                "sub_category_name": "Doctors",
                "sub_category_key": "doctors",
                "id": 601
            },
            {
                "sub_category_name": "Hospitals",
                "sub_category_key": "hospitals",
                "id": 602
            },
            {
                "sub_category_name": "Pharmacies",
                "sub_category_key": "pharmacies",
                "id": 603
            },
            {
                "sub_category_name": "Dentist",
                "sub_category_key": "dentist",
                "id": 804
            }
        ]
    },
    {
        "id": 7,
        "thumb": Pets,
        "category_name": "Pets",
        "category_key": "pets",
        "num_sub_categories": 3,
        "sub_categories": [
            {
                "sub_category_name": "Veterinary Services",
                "sub_category_key": "veterinary_services",
                "id": 701
            },
            {
                "sub_category_name": "Pet Suppliers",
                "sub_category_key": "pet_suppliers",
                "id": 702
            },
            {
                "sub_category_name": "Adopt a pet",
                "sub_category_key": "adopt_a_pet",
                "id": 703
            }
        ]
    },
    {
        "id": 8,
        "thumb": Customs,
        "category_name": "Government & Customs",
        "category_key": "government_customs",
        "num_sub_categories": 3,
        "sub_categories": [
            {
                "sub_category_name": "Clear In / Out",
                "sub_category_key": "cleanin_clearout",
                "id": 801
            },
            {
                "sub_category_name": "Coast Guard",
                "sub_category_key": "coast_guard",
                "id": 802
            },
            // {
            //     "sub_category_name": "Anchoring",
            //     "sub_category_key": "anchoring",
            //     "id": 803
            // }
        ]
    },
    {
        "id": 9,
        "thumb": Miscellanous,
        "category_name": "Miscellaneous",
        "category_key": "miscellanous",
        "num_sub_categories": 8,
        "sub_categories": [
            {
                "sub_category_name": "Business Services",
                "sub_category_key": "business_services",
                "id": 901
            },
            {
                "sub_category_name": "Sewing",
                "sub_category_key": "sewing",
                "id": 902
            },
            {
                "sub_category_name": "Appliances",
                "sub_category_key": "appliances",
                "id": 903
            },
            {
                "sub_category_name": "Hardware",
                "sub_category_key": "hardware",
                "id": 904
            },
            {
                "sub_category_name": "Rental Cars",
                "sub_category_key": "rental_cars",
                "id": 905
            },
            {
                "sub_category_name": "Local Events",
                "sub_category_key": "local_events",
                "id": 906
            },
            {
                "sub_category_name": "Fitness / Gyms / Running & Hiking Trails",
                "sub_category_key": "fitness_gyms_running_hiking_trails",
                "id": 907
            },
            {
                "sub_category_name": "Taxi / Bus Service",
                "sub_category_key": "taxi_bus_service",
                "id": 908
            }
        ]
    },
    {
        "id": 10,
        "thumb": Messaging,
        "category_name": "Messaging",
        "category_key": "miscellanous",
        "num_sub_categories": 0,
        "sub_categories": []
    }

]

export const TIP_AND_TRICKS_META_DATA = [
    {
        "id": 1,
        "thumb": Anchoring,
        "category_name": "Anchoring",
        "category_key": "anchoring",
        "num_sub_categories": 4,
        "sub_categories": [
            { id: 1001, sub_category_name: 'Anchor', sub_category_key: "anchor", category_id: 100 },
            { id: 1002, sub_category_name: 'Chain', sub_category_key: "chain", category_id: 100 },
            { id: 1003, sub_category_name: 'Mooring', sub_category_key: "mooring", category_id: 100 },
            { id: 1004, sub_category_name: 'Windlass', sub_category_key: "windlass", category_id: 100 }
        ]
    },
    {
        "id": 2,
        "thumb": null,
        "category_name": "Antifouling",
        "category_key": "antifouling",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 2001, sub_category_name: 'Ablative Paint', sub_category_key: "ablative_paint", category_id: 200 },
            { id: 2002, sub_category_name: 'Hard Paint', sub_category_key: "hard_paint", category_id: 200 }
        ]
    },
    {
        "id": 3,
        "thumb": null,
        "category_name": "Bad Weather and conditions",
        "category_key": "bad_weather_and_conditions",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 4,
        "thumb": null,
        "category_name": "Bags",
        "category_key": "bags",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 5,
        "thumb": null,
        "category_name": "Canvas",
        "category_key": "canvas",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 5001, sub_category_name: 'Bimini & Dodger Materials', sub_category_key: "bimini_and_dodger_materials", category_id: 500 },
            { id: 5002, sub_category_name: 'Canvas & Materials', sub_category_key: "canvas_and_materials", category_id: 500 },
            { id: 5003, sub_category_name: 'How too', sub_category_key: "how_too", category_id: 500 }
        ]
    },
    {
        "id": 6,
        "thumb": null,
        "category_name": "Charts And Guides",
        "category_key": "charts_and_guides",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 6001, sub_category_name: 'Android & Tablet & PC', sub_category_key: "android_tablet_pc", category_id: 600 },
            { id: 6002, sub_category_name: 'Electronic Charts', sub_category_key: "electronic_charts", category_id: 600 },
            { id: 6003, sub_category_name: 'Paper Chart - LogBook', sub_category_key: "paper_chart_log_book", category_id: 600 },
        ]
    },
    {
        "id": 7,
        "thumb": null,
        "category_name": "Clothing",
        "category_key": "clothing",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 7001, sub_category_name: 'Hats & Sunglasses', sub_category_key: "hats_and_sunglasses", category_id: 700 },
            { id: 7002, sub_category_name: 'Footwear', sub_category_key: "foot_wear", category_id: 700 },
        ]
    },
    {
        "id": 8,
        "thumb": null,
        "category_name": "Communication",
        "category_key": "communication",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 8001, sub_category_name: 'VHF - SSB', sub_category_key: "vhf_ssb", category_id: 800 },
            { id: 8002, sub_category_name: 'Satellite', sub_category_key: "satellite", category_id: 800 },
            { id: 8003, sub_category_name: 'WIFI - Mobile', sub_category_key: "wifi_mobile", category_id: 800 },
        ]
    },
    {
        "id": 9,
        "thumb": null,
        "category_name": "Compass",
        "category_key": "compass",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 10,
        "thumb": null,
        "category_name": "Deck & Cockpit",
        "category_key": "deck_cockpit",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 10001, sub_category_name: 'Cockpit', sub_category_key: "cockpit", category_id: 1000 },
            { id: 10002, sub_category_name: 'Deck', sub_category_key: "deck", category_id: 1000 },
            { id: 10003, sub_category_name: 'Safety', sub_category_key: "safety", category_id: 1000 },
        ]
    },
    {
        "id": 11,
        "thumb": null,
        "category_name": "Dinghies",
        "category_key": "dinghies",
        "num_sub_categories": 4,
        "sub_categories": [
            { id: 11001, sub_category_name: 'Aluminum Inflatable', sub_category_key: "aluminium_inflatable", category_id: 1100 },
            { id: 11002, sub_category_name: 'Fiberglass', sub_category_key: "fiberglass", category_id: 1100 },
            { id: 11003, sub_category_name: 'Hard Shell', sub_category_key: "hard_shell", category_id: 1100 },
            { id: 11004, sub_category_name: 'Roll Up', sub_category_key: "roll_up", category_id: 1100 },
        ]
    },
    {
        "id": 12,
        "thumb": null,
        "category_name": "Docking",
        "category_key": "docking",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 12001, sub_category_name: 'Fenders', sub_category_key: "fenders", category_id: 1200 },
            { id: 12002, sub_category_name: 'Lines', sub_category_key: "lines", category_id: 1200 },
        ]
    },
    {
        "id": 13,
        "thumb": null,
        "category_name": "Electric-AC",
        "category_key": "electric_ac",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 14,
        "thumb": null,
        "category_name": "Electric-DC",
        "category_key": "electric_dc",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 15,
        "thumb": null,
        "category_name": "Engine & Generators",
        "category_key": "engine_and_generators",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 16,
        "thumb": null,
        "category_name": "Fiberglass & Epoxy ",
        "category_key": "fiberglass_and_epoxy",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 16001, sub_category_name: 'Epoxy', sub_category_key: "epoxy", category_id: 1600 },
            { id: 16002, sub_category_name: 'Fiberglass and Gel Coat', sub_category_key: "fiberglass_and_gelcoat", category_id: 1600 },
        ]
    },
    {
        "id": 17,
        "thumb": null,
        "category_name": "Fishing",
        "category_key": "fishing",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 17001, sub_category_name: 'Coastal And Anchor - Casting', sub_category_key: "coastal_and_anchor_casting", category_id: 1700 },
            { id: 17002, sub_category_name: 'Offshore - Trolling', sub_category_key: "offshore_trolling", category_id: 1700 },
        ]
    },
    {
        "id": 18,
        "thumb": null,
        "category_name": "Footwear",
        "category_key": "footwear",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 19,
        "thumb": null,
        "category_name": "Galley",
        "category_key": "galley",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 20,
        "thumb": null,
        "category_name": "Head / Toilet",
        "category_key": "head_and_toilet",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 20001, sub_category_name: 'Head / Toilet', sub_category_key: "head_and_toilet", category_id: 2000 },
            { id: 20002, sub_category_name: 'Holding Tank', sub_category_key: "holding_tank", category_id: 2000 },
        ]
    },
    {
        "id": 21,
        "thumb": null,
        "category_name": "Health Care",
        "category_key": "health_care",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 22,
        "thumb": null,
        "category_name": "Heating And Air-Conditioning",
        "category_key": "heating_and_air_conditioning",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 22001, sub_category_name: 'Air Conditioning', sub_category_key: "air_conditioning", category_id: 2200 },
            { id: 22002, sub_category_name: 'Heating', sub_category_key: "heating", category_id: 2200 },
        ]
    },
    {
        "id": 23,
        "thumb": null,
        "category_name": "Hose",
        "category_key": "hose",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 23001, sub_category_name: 'Fuel Hose', sub_category_key: "fuel_hose", category_id: 2300 },
            { id: 23002, sub_category_name: 'Water Hose', sub_category_key: "water_hose", category_id: 2300 },
            { id: 23003, sub_category_name: 'Head / Toilet hoses', sub_category_key: "head_and_toilet_hoses", category_id: 2300 },
        ]
    },
    {
        "id": 24,
        "thumb": null,
        "category_name": "Interior",
        "category_key": "interior",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 25,
        "thumb": null,
        "category_name": "Laundary",
        "category_key": "laundary",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 26,
        "thumb": null,
        "category_name": "Lights",
        "category_key": "lights",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 26001, sub_category_name: 'Interior and cockpit', sub_category_key: "interior_and_cockpit", category_id: 2600 },
            { id: 26002, sub_category_name: 'Navigation', sub_category_key: "navigation", category_id: 2600 },
        ]
    },
    {
        "id": 27,
        "thumb": null,
        "category_name": "Maintenance",
        "category_key": "maintenance",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 27001, sub_category_name: 'Tools', sub_category_key: "tools", category_id: 2700 },
            { id: 27002, sub_category_name: 'Routine', sub_category_key: "routine", category_id: 2700 },
        ]
    },
    {
        "id": 28,
        "thumb": null,
        "category_name": "Navigation",
        "category_key": "navigation",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 28001, sub_category_name: 'Coastal And Offshore', sub_category_key: "coastal_and_offshore", category_id: 2800 },
            { id: 28002, sub_category_name: 'Electronics', sub_category_key: "electronics", category_id: 2800 },
            { id: 28003, sub_category_name: 'Safety', sub_category_key: "safety", category_id: 2800 },
        ]
    },
    {
        "id": 29,
        "thumb": null,
        "category_name": "Outboards",
        "category_key": "outboards",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 29001, sub_category_name: 'Maintenance', sub_category_key: "maintenance", category_id: 2900 },
            { id: 29002, sub_category_name: 'Type', sub_category_key: "type", category_id: 2900 },
        ]
    },
    {
        "id": 30,
        "thumb": null,
        "category_name": "Pets Aboard",
        "category_key": "pets_aboard",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 31,
        "thumb": null,
        "category_name": "Plumbing",
        "category_key": "plumbing",
        "num_sub_categories": 1,
        "sub_categories": [
            { id: 31001, sub_category_name: 'Pumps', sub_category_key: "pumps", category_id: 3100 },
        ]
    },
    {
        "id": 32,
        "thumb": null,
        "category_name": "Provisioning",
        "category_key": "provisioning",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 33,
        "thumb": null,
        "category_name": "Refrigeration",
        "category_key": "refrigeration",
        "num_sub_categories": 3,
        "sub_categories": [
            { id: 33001, sub_category_name: 'Cooling', sub_category_key: "cooling", category_id: 3300 },
            { id: 33002, sub_category_name: 'Electric 12/24 volt', sub_category_key: "electric_12_24_volt", category_id: 3300 },
            { id: 33003, sub_category_name: 'Engine Driven', sub_category_key: "engine_driven", category_id: 3300 },
        ]
    },
    {
        "id": 34,
        "thumb": null,
        "category_name": "Rigging Running",
        "category_key": "rigging_running",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 35,
        "thumb": null,
        "category_name": "Rigging Standing",
        "category_key": "rigging_standing",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 36,
        "thumb": null,
        "category_name": "Safety",
        "category_key": "safety",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 36001, sub_category_name: 'At Sea', sub_category_key: "at_sea", category_id: 3600 },
            { id: 36002, sub_category_name: 'Equipment', sub_category_key: "equipment", category_id: 3600 },
        ]
    },
    {
        "id": 37,
        "thumb": null,
        "category_name": "Scuba",
        "category_key": "scuba",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 38,
        "thumb": null,
        "category_name": "Snorkeling",
        "category_key": "snorkeling",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 39,
        "thumb": null,
        "category_name": "Tools",
        "category_key": "tools",
        "num_sub_categories": 2,
        "sub_categories": [
            { id: 39001, sub_category_name: 'General', sub_category_key: "general", category_id: 3900 },
            { id: 39002, sub_category_name: 'Safety And Emergency', sub_category_key: "safety_and_emergency", category_id: 3900 },
        ]
    },
    {
        "id": 40,
        "thumb": null,
        "category_name": "Topside",
        "category_key": "topside",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 41,
        "thumb": null,
        "category_name": "Ventilation",
        "category_key": "ventilation",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 42,
        "thumb": null,
        "category_name": "Water Maker",
        "category_key": "water_maker",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 43,
        "thumb": null,
        "category_name": "Water Sports",
        "category_key": "water_sports",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 44,
        "thumb": null,
        "category_name": "Winterizing",
        "category_key": "winterizing",
        "num_sub_categories": 0,
        "sub_categories": []
    },
    {
        "id": 45,
        "thumb": null,
        "category_name": "Zinc And Anodes",
        "category_key": "zinc_and_anodes",
        "num_sub_categories": 0,
        "sub_categories": []
    },
].map((x, i) => { return { ...x, id: (i + 1) * 100, thumb: TipsTricksImages[i] } })

// console.log(TIP_AND_TRICKS_META_DATA, categories)