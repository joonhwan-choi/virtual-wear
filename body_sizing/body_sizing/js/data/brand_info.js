
var initialize_brand_info = function() {
	for (brand in brand_info) {
		brand_keys.push(brand);
		brand_names[brand] = brand_info[brand][':canonical_name'];
		brand_measurements[brand] = [];
		measurement_info = brand_info[brand][':measurements'];
		for (measurement in measurement_info) {
			brand_measurements[brand].push(measurement, measurement_info[':units'], measurement_info[':technical_name']);
		}
		size_info = brand_info[brand][':size_charts'];
		brand_sizecharts[brand] = [];
		for (i = 0; i < size_info.length; i++) {
			sizechart_key = size_info[i][":filename"];
			brand_sizecharts[brand].push(sizechart_key);
			sizechart_brands[sizechart_key] = brand;
		}
	}
	brand_keys.sort();
	number_of_brands = brand_keys.length;
}

var brand_keys = [];
var brand_names = {};
var brand_measurements = {};
var brand_sizecharts = {};
var sizechart_brands = {};
var number_of_brands;
var brand_info = 
{
    "youngcontemporaryplus": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Young Contemporary Plus", 
        ":size_charts": [
            {
                ":filename": "youngcontemporaryplus_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "youngcontemporaryplus_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "youngcontemporaryplus_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "youngcontemporaryplus_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "jessicalondon": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Jessica London", 
        ":size_charts": [
            {
                ":filename": "jessicalondon_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jessicalondon_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jessicalondon_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jessicalondon_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "calvinklien": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Calvin Klien", 
        ":size_charts": [
            {
                ":filename": "calvinklien_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "calvinklien_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "calvinklien_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "calvinklien_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "silverjeans": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Silver Jeans", 
        ":size_charts": [
            {
                ":filename": "silverjeans_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "bcbgmaxazria": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "BCBG Max Azria", 
        ":size_charts": [
            {
                ":filename": "bcbgmaxazria_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bcbgmaxazria_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bcbgmaxazria_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "avenue": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Avenue", 
        ":size_charts": [
            {
                ":filename": "avenue_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "avenue_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "avenue_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "avenue_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "giltbrands": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "GILT Brands", 
        ":size_charts": [
            {
                ":filename": "giltbrands_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "freepeople": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Free People", 
        ":size_charts": [
            {
                ":filename": "freepeople_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "freepeople_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "freepeople_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "freepeople_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "vanheusen": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Van Heusen", 
        ":size_charts": [
            {
                ":filename": "vanheusen_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "oldnavy": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Old Navy", 
        ":size_charts": [
            {
                ":filename": "oldnavy_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "oldnavy_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "oldnavy_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "oldnavy_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "oldnavy_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "oldnavy_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "oldnavy_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "kennethcole": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Kenneth Cole", 
        ":size_charts": [
            {
                ":filename": "kennethcole_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "kennethcole_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "kennethcole_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "kennethcole_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "normakamali": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Norma Kamali", 
        ":size_charts": [
            {
                ":filename": "normakamali_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "normakamali_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "normakamali_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "chroniclesofnever": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Chronicles of Never", 
        ":size_charts": [
            {
                ":filename": "chroniclesofnever_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "prps": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "PRPS", 
        ":size_charts": [
            {
                ":filename": "prps_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "express": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Express", 
        ":size_charts": [
            {
                ":filename": "express_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "express_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "express_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "express_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "express_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "express_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "express_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "pierrecardin": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Pierre Cardin", 
        ":size_charts": [
            {
                ":filename": "pierrecardin_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "poloralphlauren": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Polo Ralph Lauren", 
        ":size_charts": [
            {
                ":filename": "poloralphlauren_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "poloralphlauren_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "poloralphlauren_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "poloralphlauren_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "poloralphlauren_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "poloralphlauren_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "juicycouture": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Juicy Couture", 
        ":size_charts": [
            {
                ":filename": "juicycouture_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "juicycouture_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "juicycouture_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "theonlyson": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "The Only Son", 
        ":size_charts": [
            {
                ":filename": "theonlyson_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "whitestag": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "White Stag", 
        ":size_charts": [
            {
                ":filename": "whitestag_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitestag_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitestag_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitestag_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "wrangler": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Wrangler", 
        ":size_charts": [
            {
                ":filename": "wrangler_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "wrangler_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "wrangler_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "wrangler_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "wrangler_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "nicholask": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Nicholas K", 
        ":size_charts": [
            {
                ":filename": "nicholask_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "roamans": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Roaman's", 
        ":size_charts": [
            {
                ":filename": "roamans_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "roamans_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "roamans_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "columbiasportswear": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Columbia Sportswear", 
        ":size_charts": [
            {
                ":filename": "columbiasportswear_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "columbiasportswear_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "columbiasportswear_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "arrow": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Arrow", 
        ":size_charts": [
            {
                ":filename": "arrow_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "arrow_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "ralphlaurenblacklabel": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Ralph Lauren Black Label", 
        ":size_charts": [
            {
                ":filename": "ralphlaurenblacklabel_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "ralphlaurenblacklabel_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "ralphlaurenblacklabel_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "cbychampion": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "C9 By Champion", 
        ":size_charts": [
            {
                ":filename": "cbychampion_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "cbychampion_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "dockers": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Dockers", 
        ":size_charts": [
            {
                ":filename": "dockers_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "dockers_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dockers_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "juma": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Juma", 
        ":size_charts": [
            {
                ":filename": "juma_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "odynvovk": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "ODYN VOVK", 
        ":size_charts": [
            {
                ":filename": "odynvovk_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "thelimited": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "The Limited", 
        ":size_charts": [
            {
                ":filename": "thelimited_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "thelimited_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "thelimited_f_pants.csv", 
                ":categories": [
                    "PANTS"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "thelimited_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "jjill": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "J.Jill", 
        ":size_charts": [
            {
                ":filename": "jjill_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jjill_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jjill_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "tommyhilfiger": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Tommy Hilfiger", 
        ":size_charts": [
            {
                ":filename": "tommyhilfiger_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "tommyhilfiger_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "tommyhilfiger_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "tommyhilfiger_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "nautica": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Nautica", 
        ":size_charts": [
            {
                ":filename": "nautica_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "nautica_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "nautica_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "forallmankind": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "7 For All Mankind", 
        ":size_charts": [
            {
                ":filename": "forallmankind_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "forallmankind_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "forallmankind_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "forallmankind_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "forallmankind_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "puma": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Puma", 
        ":size_charts": [
            {
                ":filename": "puma_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "puma_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "charlotterusse": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Charlotte Russe", 
        ":size_charts": [
            {
                ":filename": "charlotterusse_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "charlotterusse_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "charlotterusse_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "underarmour": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Under Armour", 
        ":size_charts": [
            {
                ":filename": "underarmour_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "generalidea": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "General Idea", 
        ":size_charts": [
            {
                ":filename": "generalidea_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "rocawear": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Rocawear", 
        ":size_charts": [
            {
                ":filename": "rocawear_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "rocawear_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "rocawear_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "george": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "George", 
        ":size_charts": [
            {
                ":filename": "george_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "george_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "george_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "brooksbrothers": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Brooks Brothers", 
        ":size_charts": [
            {
                ":filename": "brooksbrothers_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "brooksbrothers_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "brooksbrothers_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "pacsun": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Pacsun", 
        ":size_charts": [
            {
                ":filename": "pacsun_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "pacsun_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "pacsun_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "lee": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Lee", 
        ":size_charts": [
            {
                ":filename": "lee_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "lee_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "lee_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "fabindia": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "FabIndia", 
        ":size_charts": [
            {
                ":filename": "fabindia_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "fabindia_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "tantra": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Tantra", 
        ":size_charts": [
            {
                ":filename": "tantra_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "rochambeau": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Rochambeau", 
        ":size_charts": [
            {
                ":filename": "rochambeau_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "thenorthface": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "The Northface", 
        ":size_charts": [
            {
                ":filename": "thenorthface_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "thenorthface_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "thenorthface_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "womanwithin": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Woman Within", 
        ":size_charts": [
            {
                ":filename": "womanwithin_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "womanwithin_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "womanwithin_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "calvinklein": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Calvin Klein", 
        ":size_charts": [
            {
                ":filename": "calvinklein_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "calvinklein_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "calvinklein_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "pleasureprinciple": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Pleasure Principle", 
        ":size_charts": [
            {
                ":filename": "pleasureprinciple_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "fruitoftheloom": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Fruit Of The Loom", 
        ":size_charts": [
            {
                ":filename": "fruitoftheloom_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "pureenergy": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Pure Energy", 
        ":size_charts": [
            {
                ":filename": "pureenergy_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "pureenergy_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "pureenergy_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "pureenergy_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "merona": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Merona", 
        ":size_charts": [
            {
                ":filename": "merona_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "merona_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "merona_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "merona_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "merona_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "buckler": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Buckler", 
        ":size_charts": [
            {
                ":filename": "buckler_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "hollister": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Hollister", 
        ":size_charts": [
            {
                ":filename": "hollister_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "hollister_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "hollister_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "hollister_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "hollister_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "hollister_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "coldwatercreek": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Coldwater Creek", 
        ":size_charts": [
            {
                ":filename": "coldwatercreek_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "coldwatercreek_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "coldwatercreek_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "coldwatercreek_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "rlx": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "RLX", 
        ":size_charts": [
            {
                ":filename": "rlx_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "rlx_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "adidas": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Adidas", 
        ":size_charts": [
            {
                ":filename": "adidas_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "adidas_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "adidas_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "adidas_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "adidas_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "anthropologie": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Anthropologie", 
        ":size_charts": [
            {
                ":filename": "anthropologie_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anthropologie_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anthropologie_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anthropologie_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "americanapparel": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "American Apparel", 
        ":size_charts": [
            {
                ":filename": "americanapparel_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americanapparel_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americanapparel_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "americanapparel_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "americanapparel_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "abercrombiefitch": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Abercrombie & Fitch", 
        ":size_charts": [
            {
                ":filename": "abercrombiefitch_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "abercrombiefitch_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "abercrombiefitch_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "abercrombiefitch_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "abercrombiefitch_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "abercrombiefitch_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "abercrombiefitch_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "chicos": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Chicos", 
        ":size_charts": [
            {
                ":filename": "chicos_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "chicos_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "chicos_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "chicos_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "dianevonfurstenberg": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Diane Von Furstenberg", 
        ":size_charts": [
            {
                ":filename": "dianevonfurstenberg_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dianevonfurstenberg_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dianevonfurstenberg_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "guess": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Guess", 
        ":size_charts": [
            {
                ":filename": "guess_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "guess_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "guess_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "jockey": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Jockey", 
        ":size_charts": [
            {
                ":filename": "jockey_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jockey_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "lacoste": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Lacoste", 
        ":size_charts": [
            {
                ":filename": "lacoste_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "lacoste_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "lacoste_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "lacoste_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "lacoste_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "jcrew": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "J.Crew", 
        ":size_charts": [
            {
                ":filename": "jcrew_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "jcrew_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "jcrew_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "jcrew_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jcrew_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "jcrew_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "dickies": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Dickies", 
        ":size_charts": [
            {
                ":filename": "dickies_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "dickies_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dickies_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dickies_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "covington": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Covington", 
        ":size_charts": [
            {
                ":filename": "covington_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "luckybrandjeans": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Lucky Brand Jeans", 
        ":size_charts": [
            {
                ":filename": "luckybrandjeans_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "luckybrandjeans_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "luckybrandjeans_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "luckybrandjeans_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "mossimoblack": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Mossimo Black", 
        ":size_charts": [
            {
                ":filename": "mossimoblack_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mossimoblack_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mossimoblack_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mossimoblack_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "fadedglory": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Faded Glory", 
        ":size_charts": [
            {
                ":filename": "fadedglory_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "fadedglory_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "fadedglory_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "fadedglory_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "fadedglory_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "anntaylor": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Ann Taylor", 
        ":size_charts": [
            {
                ":filename": "anntaylor_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anntaylor_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anntaylor_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "anntaylorloft": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Ann Taylor LOFT", 
        ":size_charts": [
            {
                ":filename": "anntaylorloft_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anntaylorloft_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anntaylorloft_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anntaylorloft_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "betsyjohnson": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Betsy Johnson", 
        ":size_charts": [
            {
                ":filename": "betsyjohnson_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "betsyjohnson_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "betsyjohnson_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "ralphlaurenpurplelabel": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Ralph Lauren Purple Label", 
        ":size_charts": [
            {
                ":filename": "ralphlaurenpurplelabel_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "ralphlaurenpurplelabel_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "ralphlaurenpurplelabel_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "armaniexchange": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Armani Exchange", 
        ":size_charts": [
            {
                ":filename": "armaniexchange_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "armaniexchange_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "armaniexchange_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "armaniexchange_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "armaniexchange_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "armaniexchange_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "armaniexchange_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "gap": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "GAP", 
        ":size_charts": [
            {
                ":filename": "gap_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gap_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gap_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gap_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gap_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gap_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gap_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gap_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "whitehouseblackmarket": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "White House Black Market", 
        ":size_charts": [
            {
                ":filename": "whitehouseblackmarket_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitehouseblackmarket_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitehouseblackmarket_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "whitehouseblackmarket_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "arcteryx": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Arc'Teryx", 
        ":size_charts": [
            {
                ":filename": "arcteryx_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "arcteryx_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "arcteryx_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "arcteryx_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "hm": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "H&M", 
        ":size_charts": [
            {
                ":filename": "hm_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "hm_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "hm_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "justmysize": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Just My Size", 
        ":size_charts": [
            {
                ":filename": "justmysize_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "justmysize_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "justmysize_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "justmysize_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "riders": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Riders", 
        ":size_charts": [
            {
                ":filename": "riders_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "riders_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "riders_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "riders_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "bebe": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Bebe", 
        ":size_charts": [
            {
                ":filename": "bebe_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bebe_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bebe_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bebe_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "americaneagleoutfitters": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "American Eagle Outfitters", 
        ":size_charts": [
            {
                ":filename": "americaneagleoutfitters_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americaneagleoutfitters_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americaneagleoutfitters_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americaneagleoutfitters_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "americaneagleoutfitters_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "americaneagleoutfitters_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "americaneagleoutfitters_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "mb": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "MB 999", 
        ":size_charts": [
            {
                ":filename": "mb_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "reebok": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Reebok", 
        ":size_charts": [
            {
                ":filename": "reebok_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "reebok_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "gucci": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Gucci", 
        ":size_charts": [
            {
                ":filename": "gucci_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gucci_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gucci_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "gucci_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gucci_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gucci_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "gucci_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "levis": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Levi's", 
        ":size_charts": [
            {
                ":filename": "levis_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "levis_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "levis_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "levis_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "levis_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "levis_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "maxazria": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Max Azria", 
        ":size_charts": [
            {
                ":filename": "maxazria_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "maxazria_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "maxazria_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "eddiebauer": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Eddie Bauer", 
        ":size_charts": [
            {
                ":filename": "eddiebauer_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "eddiebauer_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "eddiebauer_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "eddiebauer_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "eddiebauer_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "eddiebauer_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "eddiebauer_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "llbean": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "L.L.Bean", 
        ":size_charts": [
            {
                ":filename": "llbean_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "llbean_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "llbean_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "llbean_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "llbean_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "llbean_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "llbean_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "llbean_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "lanebryant": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Lane Bryant", 
        ":size_charts": [
            {
                ":filename": "lanebryant_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "lanebryant_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "lanebryant_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "wetseal": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Wet Seal", 
        ":size_charts": [
            {
                ":filename": "wetseal_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "wetseal_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "wetseal_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "ecinewyork": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "eci New York", 
        ":size_charts": [
            {
                ":filename": "ecinewyork_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "ecinewyork_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "nike": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Nike", 
        ":size_charts": [
            {
                ":filename": "nike_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "nike_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "nike_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "nike_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "redkap": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Red Kap", 
        ":size_charts": [
            {
                ":filename": "redkap_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "standardsizing": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Standard Sizing", 
        ":size_charts": [
            {
                ":filename": "standardsizing_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "truereligion": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "True Religion", 
        ":size_charts": [
            {
                ":filename": "truereligion_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "mossimosupplyco": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Mossimo Supply Co.", 
        ":size_charts": [
            {
                ":filename": "mossimosupplyco_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mossimosupplyco_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "herveleger": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Herve Leger", 
        ":size_charts": [
            {
                ":filename": "herveleger_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "herveleger_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "herveleger_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "silentbydamirdoma": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Silent By Damir Doma", 
        ":size_charts": [
            {
                ":filename": "silentbydamirdoma_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "talbots": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Talbot's", 
        ":size_charts": [
            {
                ":filename": "talbots_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "talbots_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "talbots_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "talbots_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "delias": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Delias", 
        ":size_charts": [
            {
                ":filename": "delias_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "delias_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "delias_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "delias_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "walmartbrands": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Walmart Brands", 
        ":size_charts": [
            {
                ":filename": "walmartbrands_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "walmartbrands_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "walmartbrands_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "walmartbrands_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "targetbrands": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Target Brands", 
        ":size_charts": [
            {
                ":filename": "targetbrands_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "targetbrands_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "targetbrands_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "targetbrands_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "targetbrands_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "victoriassecret": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Victoria's Secret", 
        ":size_charts": [
            {
                ":filename": "victoriassecret_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "victoriassecret_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "victoriassecret_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "dkny": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "DKNY", 
        ":size_charts": [
            {
                ":filename": "dkny_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dkny_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "dkny_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "uspoloassociation": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "U.S. Polo Association", 
        ":size_charts": [
            {
                ":filename": "uspoloassociation_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "uspoloassociation_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "structure": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Structure", 
        ":size_charts": [
            {
                ":filename": "structure_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }
        ]
    }, 
    "forever": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Forever 21", 
        ":size_charts": [
            {
                ":filename": "forever_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "forever_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "forever_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "forever_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "newyorkcompany": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "New York & Company", 
        ":size_charts": [
            {
                ":filename": "newyorkcompany_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "newyorkcompany_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "newyorkcompany_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "anneklein": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Anne Klein", 
        ":size_charts": [
            {
                ":filename": "anneklein_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anneklein_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "anneklein_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "converseonestar": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Converse One Star", 
        ":size_charts": [
            {
                ":filename": "converseonestar_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "converseonestar_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "converseonestar_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "converseonestar_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "mango": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Mango", 
        ":size_charts": [
            {
                ":filename": "mango_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mango_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "mango_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "bananarepublic": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Banana Republic", 
        ":size_charts": [
            {
                ":filename": "bananarepublic_m_dressshirts.csv", 
                ":categories": [
                    "Dress Shirts"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "bananarepublic_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "bananarepublic_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "bananarepublic_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "bananarepublic_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bananarepublic_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bananarepublic_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "bananarepublic_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "maurices": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Maurices", 
        ":size_charts": [
            {
                ":filename": "maurices_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "maurices_f_dresses.csv", 
                ":categories": [
                    "Dresses"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "maurices_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }
        ]
    }, 
    "aeropostale": {
        ":measurements": {
            "chest": {
                ":units": "inches", 
                ":techincal_name": "chest_circ_mm"
            }, 
            "neck": {
                ":units": "inches", 
                ":techincal_name": "neck_base_girth_mm"
            }, 
            "sleeve": {
                ":units": "inches", 
                ":techincal_name": "sleeve_length_neck_to_wrist_mm"
            }, 
            "waist": {
                ":units": "inches", 
                ":techincal_name": "natural_waist_mm"
            }, 
            "inseam": {
                ":units": "inches", 
                ":techincal_name": "inseam_mm"
            }, 
            "hips": {
                ":units": "inches", 
                ":techincal_name": "hip_circ_mm"
            }, 
            "height": {
                ":units": "inches", 
                ":techincal_name": "stature_mm"
            }
        }, 
        ":canonical_name": "Aeropostale", 
        ":size_charts": [
            {
                ":filename": "aeropostale_m_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "aeropostale_m_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "aeropostale_m_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":male"
            }, 
            {
                ":filename": "aeropostale_f_tops.csv", 
                ":categories": [
                    "Tops"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "aeropostale_f_bottoms.csv", 
                ":categories": [
                    "Bottoms"
                ], 
                ":gender": ":female"
            }, 
            {
                ":filename": "aeropostale_f_denim.csv", 
                ":categories": [
                    "Denim"
                ], 
                ":gender": ":female"
            }
        ]
    }
}
initialize_brand_info();
