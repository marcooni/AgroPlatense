/**
 * Fotos de referencia tomadas de Wikimedia Commons (licencias libres).
 * Se muestran con su crédito. Reemplazarlas por fotos propias del negocio
 * copiando la imagen a public/images/productos/<id>.jpg (tiene prioridad).
 */
export type ImageCredit = { url: string; author: string; license: string; page: string };

export const productImageCredits: Record<string, ImageCredit> = {
  "semilla-de-maiz": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Zea_mays_seeds_closeup.jpg/960px-Zea_mays_seeds_closeup.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Rasbak",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Zea_mays_seeds_closeup.jpg"
  },
  "semilla-de-sorgo": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Sorghum_seed.jpg/960px-Sorghum_seed.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Evon2023",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Sorghum_seed.jpg"
  },
  "semilla-de-avena": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Avena_sativa_MHNT.BOT.2015.2.33.jpg/960px-Avena_sativa_MHNT.BOT.2015.2.33.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Roger Culos",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Avena_sativa_MHNT.BOT.2015.2.33.jpg"
  },
  "semilla-de-raigras": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Perennial_Ryegrass.jpg/960px-Perennial_Ryegrass.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "RunbeckES",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Perennial_Ryegrass.jpg"
  },
  "semilla-de-trebol": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Trifolium_pratense_%28Red_clover%29.jpg/960px-Trifolium_pratense_%28Red_clover%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Dandy1022",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Trifolium_pratense_(Red_clover).jpg"
  },
  "semilla-de-alfalfa": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Medicago_sativa_seeds.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Ninjatacoshell",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Medicago_sativa_seeds.JPG"
  },
  "antiparasitario": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Pour-on-acaricide-cattle.jpg/960px-Pour-on-acaricide-cattle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Alan R Walker",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Pour-on-acaricide-cattle.jpg"
  },
  "vacuna": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Men_Vaccinating_Cattle_-_DPLA_-_1b32bb43560bbef51e2adda8916cd677.jpg/960px-Men_Vaccinating_Cattle_-_DPLA_-_1b32bb43560bbef51e2adda8916cd677.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Department of the Interior. Bureau of Indian Affairs. Wind River Agenc",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Men_Vaccinating_Cattle_-_DPLA_-_1b32bb43560bbef51e2adda8916cd677.jpg"
  },
  "antibiotico-veterinario": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Medicine_storage_cabinet_at_a_veterinary_clinic_in_Newark%2C_New_Jersey.jpg/960px-Medicine_storage_cabinet_at_a_veterinary_clinic_in_Newark%2C_New_Jersey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Veterinarian Pet Alliance",
    "license": "CC BY 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Medicine_storage_cabinet_at_a_veterinary_clinic_in_Newark,_New_Jersey.jpg"
  },
  "jeringas-y-agujas": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Old_Russian_Veterinary_Hypodermic_Syringe.jpg/960px-Old_Russian_Veterinary_Hypodermic_Syringe.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "davidd from Waialua, Oahu, Hawaii, USA",
    "license": "CC BY 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Old_Russian_Veterinary_Hypodermic_Syringe.jpg"
  },
  "racion-balanceada-para-vacunos": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/A_view_of_cattle_feed.JPG/960px-A_view_of_cattle_feed.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Thamizhpparithi Maari",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:A_view_of_cattle_feed.JPG"
  },
  "suplemento-mineral": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Salt_lick_-_geograph.org.uk_-_646473.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Richard Webb",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Salt_lick_-_geograph.org.uk_-_646473.jpg"
  },
  "sal-para-ganado": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/b/be/Salt_lick%2C_Gharbh_Chaig_-_geograph.org.uk_-_817604.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Richard Webb",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Salt_lick,_Gharbh_Chaig_-_geograph.org.uk_-_817604.jpg"
  },
  "concentrado-proteico": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Bush-based_animal_feed_pellets.jpg/960px-Bush-based_animal_feed_pellets.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "GIZ Bush Control and Biomass Utilisation Project",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Bush-based_animal_feed_pellets.jpg"
  },
  "alimento-para-terneros": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Feeding_calf_and_cow.jpg/960px-Feeding_calf_and_cow.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "SHESHU KUMAR B",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Feeding_calf_and_cow.jpg"
  },
  "nucleo-vitaminico-mineral": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/8061Men_unloading_bags_of_animal_feeds_from_delivery_trucks_16.jpg/960px-8061Men_unloading_bags_of_animal_feeds_from_delivery_trucks_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "JFVelasquez Floro",
    "license": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:8061Men_unloading_bags_of_animal_feeds_from_delivery_trucks_16.jpg"
  },
  "fosfato-diamonico": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/DAP_%28Diammonium_Phosphate%29_Granules_%283%29.jpg/960px-DAP_%28Diammonium_Phosphate%29_Granules_%283%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Suyash Dwivedi",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:DAP_(Diammonium_Phosphate)_Granules_(3).jpg"
  },
  "cloruro-de-potasio": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Potassium_chloride_podwer.jpg/960px-Potassium_chloride_podwer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Pań w żółtym kapeluszu",
    "license": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:Potassium_chloride_podwer.jpg"
  },
  "fertilizante-npk": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Spreading_fertilizer_-_geograph.org.uk_-_5379965.jpg/960px-Spreading_fertilizer_-_geograph.org.uk_-_5379965.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Russel Wills",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Spreading_fertilizer_-_geograph.org.uk_-_5379965.jpg"
  },
  "fertilizante-foliar": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/GETOE_is_Liquid_Organics_Fertillizer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Alamgetoe",
    "license": "CC BY 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:GETOE_is_Liquid_Organics_Fertillizer.jpg"
  },
  "alambre-liso": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Farm_track_with_wire_fence_-_geograph.org.uk_-_3934724.jpg/960px-Farm_track_with_wire_fence_-_geograph.org.uk_-_3934724.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Stanley Howe",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Farm_track_with_wire_fence_-_geograph.org.uk_-_3934724.jpg"
  },
  "alambre-de-puas": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Barbed_Wire_1.JPG/960px-Barbed_Wire_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "درفش کاویانی",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Barbed_Wire_1.JPG"
  },
  "alambre-para-boyero-electrico": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Electric_fence-poles_and_wires.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Original uploader was Joorkan at pl.wikipedia",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Electric_fence-poles_and_wires.jpg"
  },
  "malla-electrosoldada": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/GI_welded_Fence_100mm_6mm_%282%29.jpg/960px-GI_welded_Fence_100mm_6mm_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "YKMGROUP",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:GI_welded_Fence_100mm_6mm_(2).jpg"
  },
  "piquetes-y-varillas": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Steel_fence-posts_by_Piperhall_-_geograph.org.uk_-_2401627.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Gordon Brown",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Steel_fence-posts_by_Piperhall_-_geograph.org.uk_-_2401627.jpg"
  },
  "aisladores-y-tensores": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/2014_Insulator_electric_fence_yellow.jpg/960px-2014_Insulator_electric_fence_yellow.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Kreuzschnabel",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:2014_Insulator_electric_fence_yellow.jpg"
  },
  "hilo-para-fardo": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Blue_baling-twine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Rhian from Kerhiec, Guern, France",
    "license": "CC BY 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Blue_baling-twine.jpg"
  },
  "film-para-silaje": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Wrapped_silage_bales_-_geograph.org.uk_-_154646.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Jean Barrow",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Wrapped_silage_bales_-_geograph.org.uk_-_154646.jpg"
  },
  "film-estirable-para-rollos": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/In-line_bale_wrapper.jpg/960px-In-line_bale_wrapper.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Wikideas1",
    "license": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:In-line_bale_wrapper.jpg"
  },
  "hilo-sisal": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Ficelle_de_Sisal_-_2.jpg/960px-Ficelle_de_Sisal_-_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Lionel Allorge",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Ficelle_de_Sisal_-_2.jpg"
  },
  "bolsas-para-silo": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bagged_up_silage_-_geograph.org.uk_-_484023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Jonathan Billinger",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Bagged_up_silage_-_geograph.org.uk_-_484023.jpg"
  },
  "bebederos": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cattle_water_trough_-_geograph.org.uk_-_747178.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Dave Croker",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Cattle_water_trough_-_geograph.org.uk_-_747178.jpg"
  },
  "comederos": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cattle_feeders_-_geograph.org.uk_-_861196.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Bob Embleton",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Cattle_feeders_-_geograph.org.uk_-_861196.jpg"
  },
  "boyero-electrico": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Electric_fence_energiser_%28AM_2017.92.25-4%29.jpg/960px-Electric_fence_energiser_%28AM_2017.92.25-4%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Gifford Jackson; PEL",
    "license": "CC BY 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Electric_fence_energiser_(AM_2017.92.25-4).jpg"
  },
  "mangueras-y-conexiones": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Garden_hose.jpg/960px-Garden_hose.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Nandhp",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Garden_hose.jpg"
  },
  "pulverizadores": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Crop_Sprayer_-_South_Farm_-_geograph.org.uk_-_2518232.jpg/960px-Crop_Sprayer_-_South_Farm_-_geograph.org.uk_-_2518232.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Paul Gillett",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Crop_Sprayer_-_South_Farm_-_geograph.org.uk_-_2518232.jpg"
  },
  "portones-y-tranqueras": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Farm_gate_and_cattle_grid_-_geograph.org.uk_-_441717.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "William Metcalfe",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Farm_gate_and_cattle_grid_-_geograph.org.uk_-_441717.jpg"
  },
  "postes": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pile_Driving_Wooden_Fence_Posts_-_geograph.org.uk_-_422226.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "John Fielding",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Pile_Driving_Wooden_Fence_Posts_-_geograph.org.uk_-_422226.jpg"
  },
  "tanques-de-agua": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Water_tank_-_geograph.org.uk_-_442599.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Peter Cox",
    "license": "CC BY-SA 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Water_tank_-_geograph.org.uk_-_442599.jpg"
  },
  "canos-y-accesorios": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Raccords_PVC.jpg/960px-Raccords_PVC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Rieul Techer",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Raccords_PVC.jpg"
  },
  "lonas-y-coberturas": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Tarpaulin_to_cover_a_tent.jpg/960px-Tarpaulin_to_cover_a_tent.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "SeppVei",
    "license": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:Tarpaulin_to_cover_a_tent.jpg"
  },
  "elementos-de-seguridad-y-trabajo": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Occupational_Safety_Equipment.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Atlantic Training LLC",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Occupational_Safety_Equipment.jpg"
  },
  "almidon-de-maiz": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Cornstarch_mixed_with_water.jpg/960px-Cornstarch_mixed_with_water.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Picasa author kalaya",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Cornstarch_mixed_with_water.jpg"
  },
  "almidon-modificado": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Potato_Starch.JPG/960px-Potato_Starch.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Onlymyself65536",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Potato_Starch.JPG"
  },
  "almidon-para-postres-lacteos": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Pudding_sprinkled_with_chocolate.JPG/960px-Pudding_sprinkled_with_chocolate.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "MOs810",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Pudding_sprinkled_with_chocolate.JPG"
  },
  "almidon-para-yogures": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Joghurt.jpg/960px-Joghurt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "No machine-readable author provided. Rainer Zenz assumed (based on cop",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Joghurt.jpg"
  },
  "almidon-para-quesos": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Processed_cheese_slices.jpg/960px-Processed_cheese_slices.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "No machine-readable author provided. Ilmari Karonen assumed (based on ",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Processed_cheese_slices.jpg"
  },
  "leche-en-polvo-entera": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/PowderedMilk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Autor desconocido",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:PowderedMilk.jpg"
  },
  "leche-en-polvo-descremada": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Cowbell_milk_powder.jpg/960px-Cowbell_milk_powder.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Marwan Bello",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Cowbell_milk_powder.jpg"
  },
  "suero-de-leche-en-polvo": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Whey_powder.jpg/960px-Whey_powder.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Adrem68 at Dutch Wikipedia",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Whey_powder.jpg"
  },
  "sustituto-lacteo-en-polvo": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Milk_powder_cropped.jpg/960px-Milk_powder_cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "ProjectManhattan",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Milk_powder_cropped.jpg"
  },
  "natamicina": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Camembert.JPG/960px-Camembert.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "NJGJ",
    "license": "CC BY 2.5",
    "page": "https://commons.wikimedia.org/wiki/File:Camembert.JPG"
  },
  "nisina": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Tillamook_Cheese_Factory.jpg/960px-Tillamook_Cheese_Factory.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Ennetws",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Tillamook_Cheese_Factory.jpg"
  },
  "cloruro-de-calcio": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/Calcium_chloride.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Picture taken by User:Walkerma in early 2005.",
    "license": "Public domain",
    "page": "https://commons.wikimedia.org/wiki/File:Calcium_chloride.jpg"
  },
  "fermentos-lacticos": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Homemade_yogurt_maker_-_01.jpg/960px-Homemade_yogurt_maker_-_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Anna Frodesiak",
    "license": "CC0",
    "page": "https://commons.wikimedia.org/wiki/File:Homemade_yogurt_maker_-_01.jpg"
  },
  "cuajo": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Clothbound_Cheddar_-_Rennet_%284790811140%29.jpg/960px-Clothbound_Cheddar_-_Rennet_%284790811140%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Rebecca Siegel",
    "license": "CC BY 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Clothbound_Cheddar_-_Rennet_(4790811140).jpg"
  },
  "envases-para-dulce-de-leche": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Dulce_de_leche_in_the_glass_jar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Lets.Custodio",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Dulce_de_leche_in_the_glass_jar.jpg"
  },
  "vasos-para-yogur": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Envase_de_yogur.jpg/960px-Envase_de_yogur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Hispalois",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Envase_de_yogur.jpg"
  },
  "botellas-para-leche": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Plastic_bottle_of_milk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Pkgx",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Plastic_bottle_of_milk.jpg"
  },
  "tapas-y-selladores": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Screw_cap%2C_plastic_bottle.jpg/960px-Screw_cap%2C_plastic_bottle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Андрей Романенко",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Screw_cap,_plastic_bottle.jpg"
  },
  "cajas-y-bandejas": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Rectangular_plastic_shipping_crates_in_an_Italian_recycling_plant.jpg/960px-Rectangular_plastic_shipping_crates_in_an_Italian_recycling_plant.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "User:Nino Barbieri",
    "license": "CC BY 2.5",
    "page": "https://commons.wikimedia.org/wiki/File:Rectangular_plastic_shipping_crates_in_an_Italian_recycling_plant.jpg"
  },
  "herramientas-manuales": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/df/Saw%2C_hammer%2C_screwdriver%2C_wrench%2C_pliers.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "Wiggy! at English Wikipedia",
    "license": "CC BY-SA 3.0",
    "page": "https://commons.wikimedia.org/wiki/File:Saw,_hammer,_screwdriver,_wrench,_pliers.png"
  },
  "herramientas-electricas": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Cordless_Power_Drill_%2849253538983%29.jpg/960px-Cordless_Power_Drill_%2849253538983%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Russ",
    "license": "CC BY 2.0",
    "page": "https://commons.wikimedia.org/wiki/File:Cordless_Power_Drill_(49253538983).jpg"
  },
  "buloneria-y-tornilleria": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Bolts%2CNuts_%26_Washers.jpg/960px-Bolts%2CNuts_%26_Washers.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Sbrennan83",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Bolts,Nuts_%26_Washers.jpg"
  },
  "pinturas-y-accesorios": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Paint_brushes_%2830804%29.jpg/960px-Paint_brushes_%2830804%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "author": "Rhododendrites",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Paint_brushes_(30804).jpg"
  },
  "materiales-electricos": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Large_Voltage_Electrical_Cable.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "author": "University of Dundee Museum Services",
    "license": "CC BY-SA 4.0",
    "page": "https://commons.wikimedia.org/wiki/File:Large_Voltage_Electrical_Cable.jpg"
  }
};
