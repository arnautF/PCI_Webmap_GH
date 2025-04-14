var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mask_layer_1 = new ol.format.GeoJSON();
var features_Mask_layer_1 = format_Mask_layer_1.readFeatures(json_Mask_layer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_layer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mask_layer_1.addFeatures(features_Mask_layer_1);
var lyr_Mask_layer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mask_layer_1, 
                style: style_Mask_layer_1,
                popuplayertitle: 'Mask_layer',
                interactive: false,
    title: 'Mask_layer<br />\
    <img src="styles/legend/Mask_layer_1_0.png" /> AP Kosovo i Metohija<br />\
    <img src="styles/legend/Mask_layer_1_1.png" /> <br />'
        });
var format_Serbia_NUTS3_2 = new ol.format.GeoJSON();
var features_Serbia_NUTS3_2 = format_Serbia_NUTS3_2.readFeatures(json_Serbia_NUTS3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Serbia_NUTS3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serbia_NUTS3_2.addFeatures(features_Serbia_NUTS3_2);
var lyr_Serbia_NUTS3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serbia_NUTS3_2, 
                style: style_Serbia_NUTS3_2,
                popuplayertitle: 'Serbia_NUTS3',
                interactive: false,
                title: '<img src="styles/legend/Serbia_NUTS3_2.png" /> Serbia_NUTS3'
            });
var lyr_GHSL_population_distribution_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GHSL_population_distribution',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/GHSL_population_distribution_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2014345.411847, 5195763.810584, 2645927.791241, 5810789.448672]
                            })
                        });
var format_Cluster_7_4 = new ol.format.GeoJSON();
var features_Cluster_7_4 = format_Cluster_7_4.readFeatures(json_Cluster_7_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_7_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_7_4.addFeatures(features_Cluster_7_4);
var lyr_Cluster_7_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_7_4, 
                style: style_Cluster_7_4,
                popuplayertitle: 'Cluster_7',
                interactive: false,
                title: '<img src="styles/legend/Cluster_7_4.png" /> Cluster_7'
            });
var format_Cluster_6_5 = new ol.format.GeoJSON();
var features_Cluster_6_5 = format_Cluster_6_5.readFeatures(json_Cluster_6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_6_5.addFeatures(features_Cluster_6_5);
var lyr_Cluster_6_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_6_5, 
                style: style_Cluster_6_5,
                popuplayertitle: 'Cluster_6',
                interactive: false,
                title: '<img src="styles/legend/Cluster_6_5.png" /> Cluster_6'
            });
var format_Cluster_5_6 = new ol.format.GeoJSON();
var features_Cluster_5_6 = format_Cluster_5_6.readFeatures(json_Cluster_5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_5_6.addFeatures(features_Cluster_5_6);
var lyr_Cluster_5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_5_6, 
                style: style_Cluster_5_6,
                popuplayertitle: 'Cluster_5',
                interactive: false,
                title: '<img src="styles/legend/Cluster_5_6.png" /> Cluster_5'
            });
var format_Cluster_4_7 = new ol.format.GeoJSON();
var features_Cluster_4_7 = format_Cluster_4_7.readFeatures(json_Cluster_4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_4_7.addFeatures(features_Cluster_4_7);
var lyr_Cluster_4_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_4_7, 
                style: style_Cluster_4_7,
                popuplayertitle: 'Cluster_4',
                interactive: false,
                title: '<img src="styles/legend/Cluster_4_7.png" /> Cluster_4'
            });
var format_Cluster_3_8 = new ol.format.GeoJSON();
var features_Cluster_3_8 = format_Cluster_3_8.readFeatures(json_Cluster_3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_3_8.addFeatures(features_Cluster_3_8);
var lyr_Cluster_3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_3_8, 
                style: style_Cluster_3_8,
                popuplayertitle: 'Cluster_3',
                interactive: false,
                title: '<img src="styles/legend/Cluster_3_8.png" /> Cluster_3'
            });
var format_Cluster_2_9 = new ol.format.GeoJSON();
var features_Cluster_2_9 = format_Cluster_2_9.readFeatures(json_Cluster_2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_2_9.addFeatures(features_Cluster_2_9);
var lyr_Cluster_2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_2_9, 
                style: style_Cluster_2_9,
                popuplayertitle: 'Cluster_2',
                interactive: false,
                title: '<img src="styles/legend/Cluster_2_9.png" /> Cluster_2'
            });
var format_Cluster_1_10 = new ol.format.GeoJSON();
var features_Cluster_1_10 = format_Cluster_1_10.readFeatures(json_Cluster_1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_1_10.addFeatures(features_Cluster_1_10);
var lyr_Cluster_1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_1_10, 
                style: style_Cluster_1_10,
                popuplayertitle: 'Cluster_1',
                interactive: false,
                title: '<img src="styles/legend/Cluster_1_10.png" /> Cluster_1'
            });
var format_Cluster_0_11 = new ol.format.GeoJSON();
var features_Cluster_0_11 = format_Cluster_0_11.readFeatures(json_Cluster_0_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_0_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_0_11.addFeatures(features_Cluster_0_11);
var lyr_Cluster_0_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_0_11, 
                style: style_Cluster_0_11,
                popuplayertitle: 'Cluster_0',
                interactive: false,
                title: '<img src="styles/legend/Cluster_0_11.png" /> Cluster_0'
            });
var format_Sunday_Low_Peak_PM_30_minutes_12 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_PM_30_minutes_12 = format_Sunday_Low_Peak_PM_30_minutes_12.readFeatures(json_Sunday_Low_Peak_PM_30_minutes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_PM_30_minutes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_PM_30_minutes_12.addFeatures(features_Sunday_Low_Peak_PM_30_minutes_12);
var lyr_Sunday_Low_Peak_PM_30_minutes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_PM_30_minutes_12, 
                style: style_Sunday_Low_Peak_PM_30_minutes_12,
                popuplayertitle: 'Sunday_Low_Peak_PM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_PM_30_minutes_12.png" /> Sunday_Low_Peak_PM_30_minutes'
            });
var format_Sunday_Low_Peak_AM_30_minutes_13 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_AM_30_minutes_13 = format_Sunday_Low_Peak_AM_30_minutes_13.readFeatures(json_Sunday_Low_Peak_AM_30_minutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_AM_30_minutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_AM_30_minutes_13.addFeatures(features_Sunday_Low_Peak_AM_30_minutes_13);
var lyr_Sunday_Low_Peak_AM_30_minutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_AM_30_minutes_13, 
                style: style_Sunday_Low_Peak_AM_30_minutes_13,
                popuplayertitle: 'Sunday_Low_Peak_AM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_AM_30_minutes_13.png" /> Sunday_Low_Peak_AM_30_minutes'
            });
var format_Sunday_High_Peak_30_minutes_14 = new ol.format.GeoJSON();
var features_Sunday_High_Peak_30_minutes_14 = format_Sunday_High_Peak_30_minutes_14.readFeatures(json_Sunday_High_Peak_30_minutes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_High_Peak_30_minutes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_High_Peak_30_minutes_14.addFeatures(features_Sunday_High_Peak_30_minutes_14);
var lyr_Sunday_High_Peak_30_minutes_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_High_Peak_30_minutes_14, 
                style: style_Sunday_High_Peak_30_minutes_14,
                popuplayertitle: 'Sunday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_High_Peak_30_minutes_14.png" /> Sunday_High_Peak_30_minutes'
            });
var format_Saturday_Low_Peak_30_minutes_15 = new ol.format.GeoJSON();
var features_Saturday_Low_Peak_30_minutes_15 = format_Saturday_Low_Peak_30_minutes_15.readFeatures(json_Saturday_Low_Peak_30_minutes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_Low_Peak_30_minutes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_Low_Peak_30_minutes_15.addFeatures(features_Saturday_Low_Peak_30_minutes_15);
var lyr_Saturday_Low_Peak_30_minutes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_Low_Peak_30_minutes_15, 
                style: style_Saturday_Low_Peak_30_minutes_15,
                popuplayertitle: 'Saturday_Low_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_Low_Peak_30_minutes_15.png" /> Saturday_Low_Peak_30_minutes'
            });
var format_Saturday_High_Peak_30_minutes_16 = new ol.format.GeoJSON();
var features_Saturday_High_Peak_30_minutes_16 = format_Saturday_High_Peak_30_minutes_16.readFeatures(json_Saturday_High_Peak_30_minutes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_High_Peak_30_minutes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_High_Peak_30_minutes_16.addFeatures(features_Saturday_High_Peak_30_minutes_16);
var lyr_Saturday_High_Peak_30_minutes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_High_Peak_30_minutes_16, 
                style: style_Saturday_High_Peak_30_minutes_16,
                popuplayertitle: 'Saturday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_High_Peak_30_minutes_16.png" /> Saturday_High_Peak_30_minutes'
            });
var format_Friday_Low_Peak_30_minutes_17 = new ol.format.GeoJSON();
var features_Friday_Low_Peak_30_minutes_17 = format_Friday_Low_Peak_30_minutes_17.readFeatures(json_Friday_Low_Peak_30_minutes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_Low_Peak_30_minutes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_Low_Peak_30_minutes_17.addFeatures(features_Friday_Low_Peak_30_minutes_17);
var lyr_Friday_Low_Peak_30_minutes_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_Low_Peak_30_minutes_17, 
                style: style_Friday_Low_Peak_30_minutes_17,
                popuplayertitle: 'Friday_Low_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_Low_Peak_30_minutes_17.png" /> Friday_Low_Peak_30_minutes'
            });
var format_Friday_High_Peak_30_minutes_18 = new ol.format.GeoJSON();
var features_Friday_High_Peak_30_minutes_18 = format_Friday_High_Peak_30_minutes_18.readFeatures(json_Friday_High_Peak_30_minutes_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_High_Peak_30_minutes_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_High_Peak_30_minutes_18.addFeatures(features_Friday_High_Peak_30_minutes_18);
var lyr_Friday_High_Peak_30_minutes_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_High_Peak_30_minutes_18, 
                style: style_Friday_High_Peak_30_minutes_18,
                popuplayertitle: 'Friday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_High_Peak_30_minutes_18.png" /> Friday_High_Peak_30_minutes'
            });
var format_Thursday_Low_Peak_PM_30_minutes_19 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_PM_30_minutes_19 = format_Thursday_Low_Peak_PM_30_minutes_19.readFeatures(json_Thursday_Low_Peak_PM_30_minutes_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_PM_30_minutes_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_PM_30_minutes_19.addFeatures(features_Thursday_Low_Peak_PM_30_minutes_19);
var lyr_Thursday_Low_Peak_PM_30_minutes_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_PM_30_minutes_19, 
                style: style_Thursday_Low_Peak_PM_30_minutes_19,
                popuplayertitle: 'Thursday_Low_Peak_PM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_PM_30_minutes_19.png" /> Thursday_Low_Peak_PM_30_minutes'
            });
var format_Thursday_Low_Peak_AM_30_minutes_20 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_AM_30_minutes_20 = format_Thursday_Low_Peak_AM_30_minutes_20.readFeatures(json_Thursday_Low_Peak_AM_30_minutes_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_AM_30_minutes_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_AM_30_minutes_20.addFeatures(features_Thursday_Low_Peak_AM_30_minutes_20);
var lyr_Thursday_Low_Peak_AM_30_minutes_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_AM_30_minutes_20, 
                style: style_Thursday_Low_Peak_AM_30_minutes_20,
                popuplayertitle: 'Thursday_Low_Peak_AM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_AM_30_minutes_20.png" /> Thursday_Low_Peak_AM_30_minutes'
            });
var format_Thursday_High_Peak_30_minutes_21 = new ol.format.GeoJSON();
var features_Thursday_High_Peak_30_minutes_21 = format_Thursday_High_Peak_30_minutes_21.readFeatures(json_Thursday_High_Peak_30_minutes_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_High_Peak_30_minutes_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_High_Peak_30_minutes_21.addFeatures(features_Thursday_High_Peak_30_minutes_21);
var lyr_Thursday_High_Peak_30_minutes_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_High_Peak_30_minutes_21, 
                style: style_Thursday_High_Peak_30_minutes_21,
                popuplayertitle: 'Thursday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_High_Peak_30_minutes_21.png" /> Thursday_High_Peak_30_minutes'
            });
var format_Wednesday_Low_Peak_PM_30_minutes_22 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_PM_30_minutes_22 = format_Wednesday_Low_Peak_PM_30_minutes_22.readFeatures(json_Wednesday_Low_Peak_PM_30_minutes_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_PM_30_minutes_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_PM_30_minutes_22.addFeatures(features_Wednesday_Low_Peak_PM_30_minutes_22);
var lyr_Wednesday_Low_Peak_PM_30_minutes_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_PM_30_minutes_22, 
                style: style_Wednesday_Low_Peak_PM_30_minutes_22,
                popuplayertitle: 'Wednesday_Low_Peak_PM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_PM_30_minutes_22.png" /> Wednesday_Low_Peak_PM_30_minutes'
            });
var format_Wednesday_Low_Peak_AM_30_minutes_23 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_AM_30_minutes_23 = format_Wednesday_Low_Peak_AM_30_minutes_23.readFeatures(json_Wednesday_Low_Peak_AM_30_minutes_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_AM_30_minutes_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_AM_30_minutes_23.addFeatures(features_Wednesday_Low_Peak_AM_30_minutes_23);
var lyr_Wednesday_Low_Peak_AM_30_minutes_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_AM_30_minutes_23, 
                style: style_Wednesday_Low_Peak_AM_30_minutes_23,
                popuplayertitle: 'Wednesday_Low_Peak_AM_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_AM_30_minutes_23.png" /> Wednesday_Low_Peak_AM_30_minutes'
            });
var format_Wednesday_High_Peak_30_minutes_24 = new ol.format.GeoJSON();
var features_Wednesday_High_Peak_30_minutes_24 = format_Wednesday_High_Peak_30_minutes_24.readFeatures(json_Wednesday_High_Peak_30_minutes_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_High_Peak_30_minutes_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_High_Peak_30_minutes_24.addFeatures(features_Wednesday_High_Peak_30_minutes_24);
var lyr_Wednesday_High_Peak_30_minutes_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_High_Peak_30_minutes_24, 
                style: style_Wednesday_High_Peak_30_minutes_24,
                popuplayertitle: 'Wednesday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_High_Peak_30_minutes_24.png" /> Wednesday_High_Peak_30_minutes'
            });
var format_Tuesday_Low_Peak_30_minutes_25 = new ol.format.GeoJSON();
var features_Tuesday_Low_Peak_30_minutes_25 = format_Tuesday_Low_Peak_30_minutes_25.readFeatures(json_Tuesday_Low_Peak_30_minutes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_Low_Peak_30_minutes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_Low_Peak_30_minutes_25.addFeatures(features_Tuesday_Low_Peak_30_minutes_25);
var lyr_Tuesday_Low_Peak_30_minutes_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_Low_Peak_30_minutes_25, 
                style: style_Tuesday_Low_Peak_30_minutes_25,
                popuplayertitle: 'Tuesday_Low_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_Low_Peak_30_minutes_25.png" /> Tuesday_Low_Peak_30_minutes'
            });
var format_Tuesday_High_Peak_30_minutes_26 = new ol.format.GeoJSON();
var features_Tuesday_High_Peak_30_minutes_26 = format_Tuesday_High_Peak_30_minutes_26.readFeatures(json_Tuesday_High_Peak_30_minutes_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_High_Peak_30_minutes_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_High_Peak_30_minutes_26.addFeatures(features_Tuesday_High_Peak_30_minutes_26);
var lyr_Tuesday_High_Peak_30_minutes_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_High_Peak_30_minutes_26, 
                style: style_Tuesday_High_Peak_30_minutes_26,
                popuplayertitle: 'Tuesday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_High_Peak_30_minutes_26.png" /> Tuesday_High_Peak_30_minutes'
            });
var format_Monday_Low_Peak_30_minutes_27 = new ol.format.GeoJSON();
var features_Monday_Low_Peak_30_minutes_27 = format_Monday_Low_Peak_30_minutes_27.readFeatures(json_Monday_Low_Peak_30_minutes_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_Low_Peak_30_minutes_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_Low_Peak_30_minutes_27.addFeatures(features_Monday_Low_Peak_30_minutes_27);
var lyr_Monday_Low_Peak_30_minutes_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_Low_Peak_30_minutes_27, 
                style: style_Monday_Low_Peak_30_minutes_27,
                popuplayertitle: 'Monday_Low_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_Low_Peak_30_minutes_27.png" /> Monday_Low_Peak_30_minutes'
            });
var format_Monday_High_Peak_30_minutes_28 = new ol.format.GeoJSON();
var features_Monday_High_Peak_30_minutes_28 = format_Monday_High_Peak_30_minutes_28.readFeatures(json_Monday_High_Peak_30_minutes_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_High_Peak_30_minutes_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_High_Peak_30_minutes_28.addFeatures(features_Monday_High_Peak_30_minutes_28);
var lyr_Monday_High_Peak_30_minutes_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_High_Peak_30_minutes_28, 
                style: style_Monday_High_Peak_30_minutes_28,
                popuplayertitle: 'Monday_High_Peak_30_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_High_Peak_30_minutes_28.png" /> Monday_High_Peak_30_minutes'
            });
var format_Sunday_Low_Peak_PM_60_minutes_29 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_PM_60_minutes_29 = format_Sunday_Low_Peak_PM_60_minutes_29.readFeatures(json_Sunday_Low_Peak_PM_60_minutes_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_PM_60_minutes_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_PM_60_minutes_29.addFeatures(features_Sunday_Low_Peak_PM_60_minutes_29);
var lyr_Sunday_Low_Peak_PM_60_minutes_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_PM_60_minutes_29, 
                style: style_Sunday_Low_Peak_PM_60_minutes_29,
                popuplayertitle: 'Sunday_Low_Peak_PM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_PM_60_minutes_29.png" /> Sunday_Low_Peak_PM_60_minutes'
            });
var format_Sunday_Low_Peak_AM_60_minutes_30 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_AM_60_minutes_30 = format_Sunday_Low_Peak_AM_60_minutes_30.readFeatures(json_Sunday_Low_Peak_AM_60_minutes_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_AM_60_minutes_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_AM_60_minutes_30.addFeatures(features_Sunday_Low_Peak_AM_60_minutes_30);
var lyr_Sunday_Low_Peak_AM_60_minutes_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_AM_60_minutes_30, 
                style: style_Sunday_Low_Peak_AM_60_minutes_30,
                popuplayertitle: 'Sunday_Low_Peak_AM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_AM_60_minutes_30.png" /> Sunday_Low_Peak_AM_60_minutes'
            });
var format_Sunday_High_Peak_60_minutes_31 = new ol.format.GeoJSON();
var features_Sunday_High_Peak_60_minutes_31 = format_Sunday_High_Peak_60_minutes_31.readFeatures(json_Sunday_High_Peak_60_minutes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_High_Peak_60_minutes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_High_Peak_60_minutes_31.addFeatures(features_Sunday_High_Peak_60_minutes_31);
var lyr_Sunday_High_Peak_60_minutes_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_High_Peak_60_minutes_31, 
                style: style_Sunday_High_Peak_60_minutes_31,
                popuplayertitle: 'Sunday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_High_Peak_60_minutes_31.png" /> Sunday_High_Peak_60_minutes'
            });
var format_Saturday_Low_Peak_60_minutes_32 = new ol.format.GeoJSON();
var features_Saturday_Low_Peak_60_minutes_32 = format_Saturday_Low_Peak_60_minutes_32.readFeatures(json_Saturday_Low_Peak_60_minutes_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_Low_Peak_60_minutes_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_Low_Peak_60_minutes_32.addFeatures(features_Saturday_Low_Peak_60_minutes_32);
var lyr_Saturday_Low_Peak_60_minutes_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_Low_Peak_60_minutes_32, 
                style: style_Saturday_Low_Peak_60_minutes_32,
                popuplayertitle: 'Saturday_Low_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_Low_Peak_60_minutes_32.png" /> Saturday_Low_Peak_60_minutes'
            });
var format_Saturday_High_Peak_60_minutes_33 = new ol.format.GeoJSON();
var features_Saturday_High_Peak_60_minutes_33 = format_Saturday_High_Peak_60_minutes_33.readFeatures(json_Saturday_High_Peak_60_minutes_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_High_Peak_60_minutes_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_High_Peak_60_minutes_33.addFeatures(features_Saturday_High_Peak_60_minutes_33);
var lyr_Saturday_High_Peak_60_minutes_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_High_Peak_60_minutes_33, 
                style: style_Saturday_High_Peak_60_minutes_33,
                popuplayertitle: 'Saturday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_High_Peak_60_minutes_33.png" /> Saturday_High_Peak_60_minutes'
            });
var format_Friday_Low_Peak_60_minutes_34 = new ol.format.GeoJSON();
var features_Friday_Low_Peak_60_minutes_34 = format_Friday_Low_Peak_60_minutes_34.readFeatures(json_Friday_Low_Peak_60_minutes_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_Low_Peak_60_minutes_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_Low_Peak_60_minutes_34.addFeatures(features_Friday_Low_Peak_60_minutes_34);
var lyr_Friday_Low_Peak_60_minutes_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_Low_Peak_60_minutes_34, 
                style: style_Friday_Low_Peak_60_minutes_34,
                popuplayertitle: 'Friday_Low_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_Low_Peak_60_minutes_34.png" /> Friday_Low_Peak_60_minutes'
            });
var format_Friday_High_Peak_60_minutes_35 = new ol.format.GeoJSON();
var features_Friday_High_Peak_60_minutes_35 = format_Friday_High_Peak_60_minutes_35.readFeatures(json_Friday_High_Peak_60_minutes_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_High_Peak_60_minutes_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_High_Peak_60_minutes_35.addFeatures(features_Friday_High_Peak_60_minutes_35);
var lyr_Friday_High_Peak_60_minutes_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_High_Peak_60_minutes_35, 
                style: style_Friday_High_Peak_60_minutes_35,
                popuplayertitle: 'Friday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_High_Peak_60_minutes_35.png" /> Friday_High_Peak_60_minutes'
            });
var format_Thursday_Low_Peak_PM_60_minutes_36 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_PM_60_minutes_36 = format_Thursday_Low_Peak_PM_60_minutes_36.readFeatures(json_Thursday_Low_Peak_PM_60_minutes_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_PM_60_minutes_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_PM_60_minutes_36.addFeatures(features_Thursday_Low_Peak_PM_60_minutes_36);
var lyr_Thursday_Low_Peak_PM_60_minutes_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_PM_60_minutes_36, 
                style: style_Thursday_Low_Peak_PM_60_minutes_36,
                popuplayertitle: 'Thursday_Low_Peak_PM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_PM_60_minutes_36.png" /> Thursday_Low_Peak_PM_60_minutes'
            });
var format_Thursday_Low_Peak_AM_60_minutes_37 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_AM_60_minutes_37 = format_Thursday_Low_Peak_AM_60_minutes_37.readFeatures(json_Thursday_Low_Peak_AM_60_minutes_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_AM_60_minutes_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_AM_60_minutes_37.addFeatures(features_Thursday_Low_Peak_AM_60_minutes_37);
var lyr_Thursday_Low_Peak_AM_60_minutes_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_AM_60_minutes_37, 
                style: style_Thursday_Low_Peak_AM_60_minutes_37,
                popuplayertitle: 'Thursday_Low_Peak_AM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_AM_60_minutes_37.png" /> Thursday_Low_Peak_AM_60_minutes'
            });
var format_Thursday_High_Peak_60_minutes_38 = new ol.format.GeoJSON();
var features_Thursday_High_Peak_60_minutes_38 = format_Thursday_High_Peak_60_minutes_38.readFeatures(json_Thursday_High_Peak_60_minutes_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_High_Peak_60_minutes_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_High_Peak_60_minutes_38.addFeatures(features_Thursday_High_Peak_60_minutes_38);
var lyr_Thursday_High_Peak_60_minutes_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_High_Peak_60_minutes_38, 
                style: style_Thursday_High_Peak_60_minutes_38,
                popuplayertitle: 'Thursday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_High_Peak_60_minutes_38.png" /> Thursday_High_Peak_60_minutes'
            });
var format_Wednesday_Low_Peak_PM_60_minutes_39 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_PM_60_minutes_39 = format_Wednesday_Low_Peak_PM_60_minutes_39.readFeatures(json_Wednesday_Low_Peak_PM_60_minutes_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_PM_60_minutes_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_PM_60_minutes_39.addFeatures(features_Wednesday_Low_Peak_PM_60_minutes_39);
var lyr_Wednesday_Low_Peak_PM_60_minutes_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_PM_60_minutes_39, 
                style: style_Wednesday_Low_Peak_PM_60_minutes_39,
                popuplayertitle: 'Wednesday_Low_Peak_PM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_PM_60_minutes_39.png" /> Wednesday_Low_Peak_PM_60_minutes'
            });
var format_Wednesday_Low_Peak_AM_60_minutes_40 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_AM_60_minutes_40 = format_Wednesday_Low_Peak_AM_60_minutes_40.readFeatures(json_Wednesday_Low_Peak_AM_60_minutes_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_AM_60_minutes_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_AM_60_minutes_40.addFeatures(features_Wednesday_Low_Peak_AM_60_minutes_40);
var lyr_Wednesday_Low_Peak_AM_60_minutes_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_AM_60_minutes_40, 
                style: style_Wednesday_Low_Peak_AM_60_minutes_40,
                popuplayertitle: 'Wednesday_Low_Peak_AM_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_AM_60_minutes_40.png" /> Wednesday_Low_Peak_AM_60_minutes'
            });
var format_Wednesday_High_Peak_60_minutes_41 = new ol.format.GeoJSON();
var features_Wednesday_High_Peak_60_minutes_41 = format_Wednesday_High_Peak_60_minutes_41.readFeatures(json_Wednesday_High_Peak_60_minutes_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_High_Peak_60_minutes_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_High_Peak_60_minutes_41.addFeatures(features_Wednesday_High_Peak_60_minutes_41);
var lyr_Wednesday_High_Peak_60_minutes_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_High_Peak_60_minutes_41, 
                style: style_Wednesday_High_Peak_60_minutes_41,
                popuplayertitle: 'Wednesday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_High_Peak_60_minutes_41.png" /> Wednesday_High_Peak_60_minutes'
            });
var format_Tuesday_Low_Peak_60_minutes_42 = new ol.format.GeoJSON();
var features_Tuesday_Low_Peak_60_minutes_42 = format_Tuesday_Low_Peak_60_minutes_42.readFeatures(json_Tuesday_Low_Peak_60_minutes_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_Low_Peak_60_minutes_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_Low_Peak_60_minutes_42.addFeatures(features_Tuesday_Low_Peak_60_minutes_42);
var lyr_Tuesday_Low_Peak_60_minutes_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_Low_Peak_60_minutes_42, 
                style: style_Tuesday_Low_Peak_60_minutes_42,
                popuplayertitle: 'Tuesday_Low_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_Low_Peak_60_minutes_42.png" /> Tuesday_Low_Peak_60_minutes'
            });
var format_Tuesday_High_Peak_60_minutes_43 = new ol.format.GeoJSON();
var features_Tuesday_High_Peak_60_minutes_43 = format_Tuesday_High_Peak_60_minutes_43.readFeatures(json_Tuesday_High_Peak_60_minutes_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_High_Peak_60_minutes_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_High_Peak_60_minutes_43.addFeatures(features_Tuesday_High_Peak_60_minutes_43);
var lyr_Tuesday_High_Peak_60_minutes_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_High_Peak_60_minutes_43, 
                style: style_Tuesday_High_Peak_60_minutes_43,
                popuplayertitle: 'Tuesday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_High_Peak_60_minutes_43.png" /> Tuesday_High_Peak_60_minutes'
            });
var format_Monday_Low_Peak_60_minutes_44 = new ol.format.GeoJSON();
var features_Monday_Low_Peak_60_minutes_44 = format_Monday_Low_Peak_60_minutes_44.readFeatures(json_Monday_Low_Peak_60_minutes_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_Low_Peak_60_minutes_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_Low_Peak_60_minutes_44.addFeatures(features_Monday_Low_Peak_60_minutes_44);
var lyr_Monday_Low_Peak_60_minutes_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_Low_Peak_60_minutes_44, 
                style: style_Monday_Low_Peak_60_minutes_44,
                popuplayertitle: 'Monday_Low_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_Low_Peak_60_minutes_44.png" /> Monday_Low_Peak_60_minutes'
            });
var format_Monday_High_Peak_60_minutes_45 = new ol.format.GeoJSON();
var features_Monday_High_Peak_60_minutes_45 = format_Monday_High_Peak_60_minutes_45.readFeatures(json_Monday_High_Peak_60_minutes_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_High_Peak_60_minutes_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_High_Peak_60_minutes_45.addFeatures(features_Monday_High_Peak_60_minutes_45);
var lyr_Monday_High_Peak_60_minutes_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_High_Peak_60_minutes_45, 
                style: style_Monday_High_Peak_60_minutes_45,
                popuplayertitle: 'Monday_High_Peak_60_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_High_Peak_60_minutes_45.png" /> Monday_High_Peak_60_minutes'
            });
var format_Sunday_Low_Peak_PM_90_minutes_46 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_PM_90_minutes_46 = format_Sunday_Low_Peak_PM_90_minutes_46.readFeatures(json_Sunday_Low_Peak_PM_90_minutes_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_PM_90_minutes_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_PM_90_minutes_46.addFeatures(features_Sunday_Low_Peak_PM_90_minutes_46);
var lyr_Sunday_Low_Peak_PM_90_minutes_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_PM_90_minutes_46, 
                style: style_Sunday_Low_Peak_PM_90_minutes_46,
                popuplayertitle: 'Sunday_Low_Peak_PM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_PM_90_minutes_46.png" /> Sunday_Low_Peak_PM_90_minutes'
            });
var format_Sunday_Low_Peak_AM_90_minutes_47 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_AM_90_minutes_47 = format_Sunday_Low_Peak_AM_90_minutes_47.readFeatures(json_Sunday_Low_Peak_AM_90_minutes_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_AM_90_minutes_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_AM_90_minutes_47.addFeatures(features_Sunday_Low_Peak_AM_90_minutes_47);
var lyr_Sunday_Low_Peak_AM_90_minutes_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_AM_90_minutes_47, 
                style: style_Sunday_Low_Peak_AM_90_minutes_47,
                popuplayertitle: 'Sunday_Low_Peak_AM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_Low_Peak_AM_90_minutes_47.png" /> Sunday_Low_Peak_AM_90_minutes'
            });
var format_Sunday_High_Peak_90_minutes_48 = new ol.format.GeoJSON();
var features_Sunday_High_Peak_90_minutes_48 = format_Sunday_High_Peak_90_minutes_48.readFeatures(json_Sunday_High_Peak_90_minutes_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_High_Peak_90_minutes_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_High_Peak_90_minutes_48.addFeatures(features_Sunday_High_Peak_90_minutes_48);
var lyr_Sunday_High_Peak_90_minutes_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_High_Peak_90_minutes_48, 
                style: style_Sunday_High_Peak_90_minutes_48,
                popuplayertitle: 'Sunday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Sunday_High_Peak_90_minutes_48.png" /> Sunday_High_Peak_90_minutes'
            });
var format_Saturday_Low_Peak_90_minutes_49 = new ol.format.GeoJSON();
var features_Saturday_Low_Peak_90_minutes_49 = format_Saturday_Low_Peak_90_minutes_49.readFeatures(json_Saturday_Low_Peak_90_minutes_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_Low_Peak_90_minutes_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_Low_Peak_90_minutes_49.addFeatures(features_Saturday_Low_Peak_90_minutes_49);
var lyr_Saturday_Low_Peak_90_minutes_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_Low_Peak_90_minutes_49, 
                style: style_Saturday_Low_Peak_90_minutes_49,
                popuplayertitle: 'Saturday_Low_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_Low_Peak_90_minutes_49.png" /> Saturday_Low_Peak_90_minutes'
            });
var format_Saturday_High_Peak_90_minutes_50 = new ol.format.GeoJSON();
var features_Saturday_High_Peak_90_minutes_50 = format_Saturday_High_Peak_90_minutes_50.readFeatures(json_Saturday_High_Peak_90_minutes_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_High_Peak_90_minutes_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_High_Peak_90_minutes_50.addFeatures(features_Saturday_High_Peak_90_minutes_50);
var lyr_Saturday_High_Peak_90_minutes_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_High_Peak_90_minutes_50, 
                style: style_Saturday_High_Peak_90_minutes_50,
                popuplayertitle: 'Saturday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Saturday_High_Peak_90_minutes_50.png" /> Saturday_High_Peak_90_minutes'
            });
var format_Friday_Low_Peak_90_minutes_51 = new ol.format.GeoJSON();
var features_Friday_Low_Peak_90_minutes_51 = format_Friday_Low_Peak_90_minutes_51.readFeatures(json_Friday_Low_Peak_90_minutes_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_Low_Peak_90_minutes_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_Low_Peak_90_minutes_51.addFeatures(features_Friday_Low_Peak_90_minutes_51);
var lyr_Friday_Low_Peak_90_minutes_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_Low_Peak_90_minutes_51, 
                style: style_Friday_Low_Peak_90_minutes_51,
                popuplayertitle: 'Friday_Low_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_Low_Peak_90_minutes_51.png" /> Friday_Low_Peak_90_minutes'
            });
var format_Friday_High_Peak_90_minutes_52 = new ol.format.GeoJSON();
var features_Friday_High_Peak_90_minutes_52 = format_Friday_High_Peak_90_minutes_52.readFeatures(json_Friday_High_Peak_90_minutes_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_High_Peak_90_minutes_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_High_Peak_90_minutes_52.addFeatures(features_Friday_High_Peak_90_minutes_52);
var lyr_Friday_High_Peak_90_minutes_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_High_Peak_90_minutes_52, 
                style: style_Friday_High_Peak_90_minutes_52,
                popuplayertitle: 'Friday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Friday_High_Peak_90_minutes_52.png" /> Friday_High_Peak_90_minutes'
            });
var format_Thursday_Low_Peak_PM_90_minutes_53 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_PM_90_minutes_53 = format_Thursday_Low_Peak_PM_90_minutes_53.readFeatures(json_Thursday_Low_Peak_PM_90_minutes_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_PM_90_minutes_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_PM_90_minutes_53.addFeatures(features_Thursday_Low_Peak_PM_90_minutes_53);
var lyr_Thursday_Low_Peak_PM_90_minutes_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_PM_90_minutes_53, 
                style: style_Thursday_Low_Peak_PM_90_minutes_53,
                popuplayertitle: 'Thursday_Low_Peak_PM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_PM_90_minutes_53.png" /> Thursday_Low_Peak_PM_90_minutes'
            });
var format_Thursday_Low_Peak_AM_90_minutes_54 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_AM_90_minutes_54 = format_Thursday_Low_Peak_AM_90_minutes_54.readFeatures(json_Thursday_Low_Peak_AM_90_minutes_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_AM_90_minutes_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_AM_90_minutes_54.addFeatures(features_Thursday_Low_Peak_AM_90_minutes_54);
var lyr_Thursday_Low_Peak_AM_90_minutes_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_AM_90_minutes_54, 
                style: style_Thursday_Low_Peak_AM_90_minutes_54,
                popuplayertitle: 'Thursday_Low_Peak_AM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_Low_Peak_AM_90_minutes_54.png" /> Thursday_Low_Peak_AM_90_minutes'
            });
var format_Thursday_High_Peak_90_minutes_55 = new ol.format.GeoJSON();
var features_Thursday_High_Peak_90_minutes_55 = format_Thursday_High_Peak_90_minutes_55.readFeatures(json_Thursday_High_Peak_90_minutes_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_High_Peak_90_minutes_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_High_Peak_90_minutes_55.addFeatures(features_Thursday_High_Peak_90_minutes_55);
var lyr_Thursday_High_Peak_90_minutes_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_High_Peak_90_minutes_55, 
                style: style_Thursday_High_Peak_90_minutes_55,
                popuplayertitle: 'Thursday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Thursday_High_Peak_90_minutes_55.png" /> Thursday_High_Peak_90_minutes'
            });
var format_Wednesday_Low_Peak_PM_90_minutes_56 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_PM_90_minutes_56 = format_Wednesday_Low_Peak_PM_90_minutes_56.readFeatures(json_Wednesday_Low_Peak_PM_90_minutes_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_PM_90_minutes_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_PM_90_minutes_56.addFeatures(features_Wednesday_Low_Peak_PM_90_minutes_56);
var lyr_Wednesday_Low_Peak_PM_90_minutes_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_PM_90_minutes_56, 
                style: style_Wednesday_Low_Peak_PM_90_minutes_56,
                popuplayertitle: 'Wednesday_Low_Peak_PM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_PM_90_minutes_56.png" /> Wednesday_Low_Peak_PM_90_minutes'
            });
var format_Wednesday_Low_Peak_AM_90_minutes_57 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_AM_90_minutes_57 = format_Wednesday_Low_Peak_AM_90_minutes_57.readFeatures(json_Wednesday_Low_Peak_AM_90_minutes_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_AM_90_minutes_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_AM_90_minutes_57.addFeatures(features_Wednesday_Low_Peak_AM_90_minutes_57);
var lyr_Wednesday_Low_Peak_AM_90_minutes_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_AM_90_minutes_57, 
                style: style_Wednesday_Low_Peak_AM_90_minutes_57,
                popuplayertitle: 'Wednesday_Low_Peak_AM_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_Low_Peak_AM_90_minutes_57.png" /> Wednesday_Low_Peak_AM_90_minutes'
            });
var format_Wednesday_High_Peak_90_minutes_58 = new ol.format.GeoJSON();
var features_Wednesday_High_Peak_90_minutes_58 = format_Wednesday_High_Peak_90_minutes_58.readFeatures(json_Wednesday_High_Peak_90_minutes_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_High_Peak_90_minutes_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_High_Peak_90_minutes_58.addFeatures(features_Wednesday_High_Peak_90_minutes_58);
var lyr_Wednesday_High_Peak_90_minutes_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_High_Peak_90_minutes_58, 
                style: style_Wednesday_High_Peak_90_minutes_58,
                popuplayertitle: 'Wednesday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Wednesday_High_Peak_90_minutes_58.png" /> Wednesday_High_Peak_90_minutes'
            });
var format_Tuesday_Low_Peak_90_minutes_59 = new ol.format.GeoJSON();
var features_Tuesday_Low_Peak_90_minutes_59 = format_Tuesday_Low_Peak_90_minutes_59.readFeatures(json_Tuesday_Low_Peak_90_minutes_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_Low_Peak_90_minutes_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_Low_Peak_90_minutes_59.addFeatures(features_Tuesday_Low_Peak_90_minutes_59);
var lyr_Tuesday_Low_Peak_90_minutes_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_Low_Peak_90_minutes_59, 
                style: style_Tuesday_Low_Peak_90_minutes_59,
                popuplayertitle: 'Tuesday_Low_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_Low_Peak_90_minutes_59.png" /> Tuesday_Low_Peak_90_minutes'
            });
var format_Tuesday_High_Peak_90_minutes_60 = new ol.format.GeoJSON();
var features_Tuesday_High_Peak_90_minutes_60 = format_Tuesday_High_Peak_90_minutes_60.readFeatures(json_Tuesday_High_Peak_90_minutes_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_High_Peak_90_minutes_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_High_Peak_90_minutes_60.addFeatures(features_Tuesday_High_Peak_90_minutes_60);
var lyr_Tuesday_High_Peak_90_minutes_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_High_Peak_90_minutes_60, 
                style: style_Tuesday_High_Peak_90_minutes_60,
                popuplayertitle: 'Tuesday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Tuesday_High_Peak_90_minutes_60.png" /> Tuesday_High_Peak_90_minutes'
            });
var format_Monday_Low_Peak_90_minutes_61 = new ol.format.GeoJSON();
var features_Monday_Low_Peak_90_minutes_61 = format_Monday_Low_Peak_90_minutes_61.readFeatures(json_Monday_Low_Peak_90_minutes_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_Low_Peak_90_minutes_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_Low_Peak_90_minutes_61.addFeatures(features_Monday_Low_Peak_90_minutes_61);
var lyr_Monday_Low_Peak_90_minutes_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_Low_Peak_90_minutes_61, 
                style: style_Monday_Low_Peak_90_minutes_61,
                popuplayertitle: 'Monday_Low_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_Low_Peak_90_minutes_61.png" /> Monday_Low_Peak_90_minutes'
            });
var format_Monday_High_Peak_90_minutes_62 = new ol.format.GeoJSON();
var features_Monday_High_Peak_90_minutes_62 = format_Monday_High_Peak_90_minutes_62.readFeatures(json_Monday_High_Peak_90_minutes_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_High_Peak_90_minutes_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_High_Peak_90_minutes_62.addFeatures(features_Monday_High_Peak_90_minutes_62);
var lyr_Monday_High_Peak_90_minutes_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_High_Peak_90_minutes_62, 
                style: style_Monday_High_Peak_90_minutes_62,
                popuplayertitle: 'Monday_High_Peak_90_minutes',
                interactive: false,
                title: '<img src="styles/legend/Monday_High_Peak_90_minutes_62.png" /> Monday_High_Peak_90_minutes'
            });
var format_Sunday_Low_Peak_2_63 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_2_63 = format_Sunday_Low_Peak_2_63.readFeatures(json_Sunday_Low_Peak_2_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_2_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_2_63.addFeatures(features_Sunday_Low_Peak_2_63);
var lyr_Sunday_Low_Peak_2_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_2_63, 
                style: style_Sunday_Low_Peak_2_63,
                popuplayertitle: 'Sunday_Low_Peak_2',
                interactive: true,
                title: '<img src="styles/legend/Sunday_Low_Peak_2_63.png" /> Sunday_Low_Peak_2'
            });
var format_Sunday_Low_Peak_1_64 = new ol.format.GeoJSON();
var features_Sunday_Low_Peak_1_64 = format_Sunday_Low_Peak_1_64.readFeatures(json_Sunday_Low_Peak_1_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_Low_Peak_1_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_Low_Peak_1_64.addFeatures(features_Sunday_Low_Peak_1_64);
var lyr_Sunday_Low_Peak_1_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_Low_Peak_1_64, 
                style: style_Sunday_Low_Peak_1_64,
                popuplayertitle: 'Sunday_Low_Peak_1',
                interactive: true,
                title: '<img src="styles/legend/Sunday_Low_Peak_1_64.png" /> Sunday_Low_Peak_1'
            });
var format_Sunday_High_Peak_65 = new ol.format.GeoJSON();
var features_Sunday_High_Peak_65 = format_Sunday_High_Peak_65.readFeatures(json_Sunday_High_Peak_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sunday_High_Peak_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sunday_High_Peak_65.addFeatures(features_Sunday_High_Peak_65);
var lyr_Sunday_High_Peak_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sunday_High_Peak_65, 
                style: style_Sunday_High_Peak_65,
                popuplayertitle: 'Sunday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Sunday_High_Peak_65.png" /> Sunday_High_Peak'
            });
var format_Saturday_Low_Peak_66 = new ol.format.GeoJSON();
var features_Saturday_Low_Peak_66 = format_Saturday_Low_Peak_66.readFeatures(json_Saturday_Low_Peak_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_Low_Peak_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_Low_Peak_66.addFeatures(features_Saturday_Low_Peak_66);
var lyr_Saturday_Low_Peak_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_Low_Peak_66, 
                style: style_Saturday_Low_Peak_66,
                popuplayertitle: 'Saturday_Low_Peak',
                interactive: true,
                title: '<img src="styles/legend/Saturday_Low_Peak_66.png" /> Saturday_Low_Peak'
            });
var format_Saturday_High_Peak_67 = new ol.format.GeoJSON();
var features_Saturday_High_Peak_67 = format_Saturday_High_Peak_67.readFeatures(json_Saturday_High_Peak_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saturday_High_Peak_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saturday_High_Peak_67.addFeatures(features_Saturday_High_Peak_67);
var lyr_Saturday_High_Peak_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saturday_High_Peak_67, 
                style: style_Saturday_High_Peak_67,
                popuplayertitle: 'Saturday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Saturday_High_Peak_67.png" /> Saturday_High_Peak'
            });
var format_Friday_Low_Peak_68 = new ol.format.GeoJSON();
var features_Friday_Low_Peak_68 = format_Friday_Low_Peak_68.readFeatures(json_Friday_Low_Peak_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_Low_Peak_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_Low_Peak_68.addFeatures(features_Friday_Low_Peak_68);
var lyr_Friday_Low_Peak_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_Low_Peak_68, 
                style: style_Friday_Low_Peak_68,
                popuplayertitle: 'Friday_Low_Peak',
                interactive: true,
                title: '<img src="styles/legend/Friday_Low_Peak_68.png" /> Friday_Low_Peak'
            });
var format_Friday_High_Peak_69 = new ol.format.GeoJSON();
var features_Friday_High_Peak_69 = format_Friday_High_Peak_69.readFeatures(json_Friday_High_Peak_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friday_High_Peak_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friday_High_Peak_69.addFeatures(features_Friday_High_Peak_69);
var lyr_Friday_High_Peak_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friday_High_Peak_69, 
                style: style_Friday_High_Peak_69,
                popuplayertitle: 'Friday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Friday_High_Peak_69.png" /> Friday_High_Peak'
            });
var format_Thursday_Low_Peak_2_70 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_2_70 = format_Thursday_Low_Peak_2_70.readFeatures(json_Thursday_Low_Peak_2_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_2_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_2_70.addFeatures(features_Thursday_Low_Peak_2_70);
var lyr_Thursday_Low_Peak_2_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_2_70, 
                style: style_Thursday_Low_Peak_2_70,
                popuplayertitle: 'Thursday_Low_Peak_2',
                interactive: true,
                title: '<img src="styles/legend/Thursday_Low_Peak_2_70.png" /> Thursday_Low_Peak_2'
            });
var format_Thursday_Low_Peak_1_71 = new ol.format.GeoJSON();
var features_Thursday_Low_Peak_1_71 = format_Thursday_Low_Peak_1_71.readFeatures(json_Thursday_Low_Peak_1_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_Low_Peak_1_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_Low_Peak_1_71.addFeatures(features_Thursday_Low_Peak_1_71);
var lyr_Thursday_Low_Peak_1_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_Low_Peak_1_71, 
                style: style_Thursday_Low_Peak_1_71,
                popuplayertitle: 'Thursday_Low_Peak_1',
                interactive: true,
                title: '<img src="styles/legend/Thursday_Low_Peak_1_71.png" /> Thursday_Low_Peak_1'
            });
var format_Thursday_High_Peak_72 = new ol.format.GeoJSON();
var features_Thursday_High_Peak_72 = format_Thursday_High_Peak_72.readFeatures(json_Thursday_High_Peak_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thursday_High_Peak_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thursday_High_Peak_72.addFeatures(features_Thursday_High_Peak_72);
var lyr_Thursday_High_Peak_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thursday_High_Peak_72, 
                style: style_Thursday_High_Peak_72,
                popuplayertitle: 'Thursday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Thursday_High_Peak_72.png" /> Thursday_High_Peak'
            });
var format_Wednesday_Low_Peak_2_73 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_2_73 = format_Wednesday_Low_Peak_2_73.readFeatures(json_Wednesday_Low_Peak_2_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_2_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_2_73.addFeatures(features_Wednesday_Low_Peak_2_73);
var lyr_Wednesday_Low_Peak_2_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_2_73, 
                style: style_Wednesday_Low_Peak_2_73,
                popuplayertitle: 'Wednesday_Low_Peak_2',
                interactive: true,
                title: '<img src="styles/legend/Wednesday_Low_Peak_2_73.png" /> Wednesday_Low_Peak_2'
            });
var format_Wednesday_Low_Peak_1_74 = new ol.format.GeoJSON();
var features_Wednesday_Low_Peak_1_74 = format_Wednesday_Low_Peak_1_74.readFeatures(json_Wednesday_Low_Peak_1_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_Low_Peak_1_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_Low_Peak_1_74.addFeatures(features_Wednesday_Low_Peak_1_74);
var lyr_Wednesday_Low_Peak_1_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_Low_Peak_1_74, 
                style: style_Wednesday_Low_Peak_1_74,
                popuplayertitle: 'Wednesday_Low_Peak_1',
                interactive: true,
                title: '<img src="styles/legend/Wednesday_Low_Peak_1_74.png" /> Wednesday_Low_Peak_1'
            });
var format_Wednesday_High_Peak_75 = new ol.format.GeoJSON();
var features_Wednesday_High_Peak_75 = format_Wednesday_High_Peak_75.readFeatures(json_Wednesday_High_Peak_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wednesday_High_Peak_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wednesday_High_Peak_75.addFeatures(features_Wednesday_High_Peak_75);
var lyr_Wednesday_High_Peak_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wednesday_High_Peak_75, 
                style: style_Wednesday_High_Peak_75,
                popuplayertitle: 'Wednesday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Wednesday_High_Peak_75.png" /> Wednesday_High_Peak'
            });
var format_Tuesday_Low_Peak_76 = new ol.format.GeoJSON();
var features_Tuesday_Low_Peak_76 = format_Tuesday_Low_Peak_76.readFeatures(json_Tuesday_Low_Peak_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_Low_Peak_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_Low_Peak_76.addFeatures(features_Tuesday_Low_Peak_76);
var lyr_Tuesday_Low_Peak_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_Low_Peak_76, 
                style: style_Tuesday_Low_Peak_76,
                popuplayertitle: 'Tuesday_Low_Peak',
                interactive: true,
                title: '<img src="styles/legend/Tuesday_Low_Peak_76.png" /> Tuesday_Low_Peak'
            });
var format_Tuesday_High_Peak_77 = new ol.format.GeoJSON();
var features_Tuesday_High_Peak_77 = format_Tuesday_High_Peak_77.readFeatures(json_Tuesday_High_Peak_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuesday_High_Peak_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuesday_High_Peak_77.addFeatures(features_Tuesday_High_Peak_77);
var lyr_Tuesday_High_Peak_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuesday_High_Peak_77, 
                style: style_Tuesday_High_Peak_77,
                popuplayertitle: 'Tuesday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Tuesday_High_Peak_77.png" /> Tuesday_High_Peak'
            });
var format_Monday_Low_Peak_78 = new ol.format.GeoJSON();
var features_Monday_Low_Peak_78 = format_Monday_Low_Peak_78.readFeatures(json_Monday_Low_Peak_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_Low_Peak_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_Low_Peak_78.addFeatures(features_Monday_Low_Peak_78);
var lyr_Monday_Low_Peak_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_Low_Peak_78, 
                style: style_Monday_Low_Peak_78,
                popuplayertitle: 'Monday_Low_Peak',
                interactive: true,
                title: '<img src="styles/legend/Monday_Low_Peak_78.png" /> Monday_Low_Peak'
            });
var format_Monday_High_Peak_79 = new ol.format.GeoJSON();
var features_Monday_High_Peak_79 = format_Monday_High_Peak_79.readFeatures(json_Monday_High_Peak_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monday_High_Peak_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monday_High_Peak_79.addFeatures(features_Monday_High_Peak_79);
var lyr_Monday_High_Peak_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monday_High_Peak_79, 
                style: style_Monday_High_Peak_79,
                popuplayertitle: 'Monday_High_Peak',
                interactive: true,
                title: '<img src="styles/legend/Monday_High_Peak_79.png" /> Monday_High_Peak'
            });
var group_WorkinghoursandPCIfacilitylocations = new ol.layer.Group({
                                layers: [lyr_Sunday_Low_Peak_2_63,lyr_Sunday_Low_Peak_1_64,lyr_Sunday_High_Peak_65,lyr_Saturday_Low_Peak_66,lyr_Saturday_High_Peak_67,lyr_Friday_Low_Peak_68,lyr_Friday_High_Peak_69,lyr_Thursday_Low_Peak_2_70,lyr_Thursday_Low_Peak_1_71,lyr_Thursday_High_Peak_72,lyr_Wednesday_Low_Peak_2_73,lyr_Wednesday_Low_Peak_1_74,lyr_Wednesday_High_Peak_75,lyr_Tuesday_Low_Peak_76,lyr_Tuesday_High_Peak_77,lyr_Monday_Low_Peak_78,lyr_Monday_High_Peak_79,],
                                fold: "open",
                                title: 'Working hours and PCI facility locations'});
var group_90Minutetraveltimeareas = new ol.layer.Group({
                                layers: [lyr_Sunday_Low_Peak_PM_90_minutes_46,lyr_Sunday_Low_Peak_AM_90_minutes_47,lyr_Sunday_High_Peak_90_minutes_48,lyr_Saturday_Low_Peak_90_minutes_49,lyr_Saturday_High_Peak_90_minutes_50,lyr_Friday_Low_Peak_90_minutes_51,lyr_Friday_High_Peak_90_minutes_52,lyr_Thursday_Low_Peak_PM_90_minutes_53,lyr_Thursday_Low_Peak_AM_90_minutes_54,lyr_Thursday_High_Peak_90_minutes_55,lyr_Wednesday_Low_Peak_PM_90_minutes_56,lyr_Wednesday_Low_Peak_AM_90_minutes_57,lyr_Wednesday_High_Peak_90_minutes_58,lyr_Tuesday_Low_Peak_90_minutes_59,lyr_Tuesday_High_Peak_90_minutes_60,lyr_Monday_Low_Peak_90_minutes_61,lyr_Monday_High_Peak_90_minutes_62,],
                                fold: "open",
                                title: '90- Minute travel- time areas'});
var group_60Minutetraveltimeareas = new ol.layer.Group({
                                layers: [lyr_Sunday_Low_Peak_PM_60_minutes_29,lyr_Sunday_Low_Peak_AM_60_minutes_30,lyr_Sunday_High_Peak_60_minutes_31,lyr_Saturday_Low_Peak_60_minutes_32,lyr_Saturday_High_Peak_60_minutes_33,lyr_Friday_Low_Peak_60_minutes_34,lyr_Friday_High_Peak_60_minutes_35,lyr_Thursday_Low_Peak_PM_60_minutes_36,lyr_Thursday_Low_Peak_AM_60_minutes_37,lyr_Thursday_High_Peak_60_minutes_38,lyr_Wednesday_Low_Peak_PM_60_minutes_39,lyr_Wednesday_Low_Peak_AM_60_minutes_40,lyr_Wednesday_High_Peak_60_minutes_41,lyr_Tuesday_Low_Peak_60_minutes_42,lyr_Tuesday_High_Peak_60_minutes_43,lyr_Monday_Low_Peak_60_minutes_44,lyr_Monday_High_Peak_60_minutes_45,],
                                fold: "open",
                                title: '60- Minute travel- time areas'});
var group_30Minutetraveltimeareas = new ol.layer.Group({
                                layers: [lyr_Sunday_Low_Peak_PM_30_minutes_12,lyr_Sunday_Low_Peak_AM_30_minutes_13,lyr_Sunday_High_Peak_30_minutes_14,lyr_Saturday_Low_Peak_30_minutes_15,lyr_Saturday_High_Peak_30_minutes_16,lyr_Friday_Low_Peak_30_minutes_17,lyr_Friday_High_Peak_30_minutes_18,lyr_Thursday_Low_Peak_PM_30_minutes_19,lyr_Thursday_Low_Peak_AM_30_minutes_20,lyr_Thursday_High_Peak_30_minutes_21,lyr_Wednesday_Low_Peak_PM_30_minutes_22,lyr_Wednesday_Low_Peak_AM_30_minutes_23,lyr_Wednesday_High_Peak_30_minutes_24,lyr_Tuesday_Low_Peak_30_minutes_25,lyr_Tuesday_High_Peak_30_minutes_26,lyr_Monday_Low_Peak_30_minutes_27,lyr_Monday_High_Peak_30_minutes_28,],
                                fold: "open",
                                title: '30- Minute travel- time areas'});
var group_Omittedpopulationclusters = new ol.layer.Group({
                                layers: [lyr_Cluster_7_4,lyr_Cluster_6_5,lyr_Cluster_5_6,lyr_Cluster_4_7,lyr_Cluster_3_8,lyr_Cluster_2_9,lyr_Cluster_1_10,lyr_Cluster_0_11,],
                                fold: "open",
                                title: 'Omitted population clusters'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Mask_layer_1,lyr_Serbia_NUTS3_2,],
                                fold: "open",
                                title: 'Basemap'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Mask_layer_1.setVisible(true);lyr_Serbia_NUTS3_2.setVisible(true);lyr_GHSL_population_distribution_3.setVisible(true);lyr_Cluster_7_4.setVisible(true);lyr_Cluster_6_5.setVisible(true);lyr_Cluster_5_6.setVisible(true);lyr_Cluster_4_7.setVisible(true);lyr_Cluster_3_8.setVisible(true);lyr_Cluster_2_9.setVisible(true);lyr_Cluster_1_10.setVisible(true);lyr_Cluster_0_11.setVisible(true);lyr_Sunday_Low_Peak_PM_30_minutes_12.setVisible(true);lyr_Sunday_Low_Peak_AM_30_minutes_13.setVisible(true);lyr_Sunday_High_Peak_30_minutes_14.setVisible(true);lyr_Saturday_Low_Peak_30_minutes_15.setVisible(true);lyr_Saturday_High_Peak_30_minutes_16.setVisible(true);lyr_Friday_Low_Peak_30_minutes_17.setVisible(true);lyr_Friday_High_Peak_30_minutes_18.setVisible(true);lyr_Thursday_Low_Peak_PM_30_minutes_19.setVisible(true);lyr_Thursday_Low_Peak_AM_30_minutes_20.setVisible(true);lyr_Thursday_High_Peak_30_minutes_21.setVisible(true);lyr_Wednesday_Low_Peak_PM_30_minutes_22.setVisible(true);lyr_Wednesday_Low_Peak_AM_30_minutes_23.setVisible(true);lyr_Wednesday_High_Peak_30_minutes_24.setVisible(true);lyr_Tuesday_Low_Peak_30_minutes_25.setVisible(true);lyr_Tuesday_High_Peak_30_minutes_26.setVisible(true);lyr_Monday_Low_Peak_30_minutes_27.setVisible(true);lyr_Monday_High_Peak_30_minutes_28.setVisible(true);lyr_Sunday_Low_Peak_PM_60_minutes_29.setVisible(true);lyr_Sunday_Low_Peak_AM_60_minutes_30.setVisible(true);lyr_Sunday_High_Peak_60_minutes_31.setVisible(true);lyr_Saturday_Low_Peak_60_minutes_32.setVisible(true);lyr_Saturday_High_Peak_60_minutes_33.setVisible(true);lyr_Friday_Low_Peak_60_minutes_34.setVisible(true);lyr_Friday_High_Peak_60_minutes_35.setVisible(true);lyr_Thursday_Low_Peak_PM_60_minutes_36.setVisible(true);lyr_Thursday_Low_Peak_AM_60_minutes_37.setVisible(true);lyr_Thursday_High_Peak_60_minutes_38.setVisible(true);lyr_Wednesday_Low_Peak_PM_60_minutes_39.setVisible(true);lyr_Wednesday_Low_Peak_AM_60_minutes_40.setVisible(true);lyr_Wednesday_High_Peak_60_minutes_41.setVisible(true);lyr_Tuesday_Low_Peak_60_minutes_42.setVisible(true);lyr_Tuesday_High_Peak_60_minutes_43.setVisible(true);lyr_Monday_Low_Peak_60_minutes_44.setVisible(true);lyr_Monday_High_Peak_60_minutes_45.setVisible(true);lyr_Sunday_Low_Peak_PM_90_minutes_46.setVisible(true);lyr_Sunday_Low_Peak_AM_90_minutes_47.setVisible(true);lyr_Sunday_High_Peak_90_minutes_48.setVisible(true);lyr_Saturday_Low_Peak_90_minutes_49.setVisible(true);lyr_Saturday_High_Peak_90_minutes_50.setVisible(true);lyr_Friday_Low_Peak_90_minutes_51.setVisible(true);lyr_Friday_High_Peak_90_minutes_52.setVisible(true);lyr_Thursday_Low_Peak_PM_90_minutes_53.setVisible(true);lyr_Thursday_Low_Peak_AM_90_minutes_54.setVisible(true);lyr_Thursday_High_Peak_90_minutes_55.setVisible(true);lyr_Wednesday_Low_Peak_PM_90_minutes_56.setVisible(true);lyr_Wednesday_Low_Peak_AM_90_minutes_57.setVisible(true);lyr_Wednesday_High_Peak_90_minutes_58.setVisible(true);lyr_Tuesday_Low_Peak_90_minutes_59.setVisible(true);lyr_Tuesday_High_Peak_90_minutes_60.setVisible(true);lyr_Monday_Low_Peak_90_minutes_61.setVisible(true);lyr_Monday_High_Peak_90_minutes_62.setVisible(true);lyr_Sunday_Low_Peak_2_63.setVisible(true);lyr_Sunday_Low_Peak_1_64.setVisible(true);lyr_Sunday_High_Peak_65.setVisible(true);lyr_Saturday_Low_Peak_66.setVisible(true);lyr_Saturday_High_Peak_67.setVisible(true);lyr_Friday_Low_Peak_68.setVisible(true);lyr_Friday_High_Peak_69.setVisible(true);lyr_Thursday_Low_Peak_2_70.setVisible(true);lyr_Thursday_Low_Peak_1_71.setVisible(true);lyr_Thursday_High_Peak_72.setVisible(true);lyr_Wednesday_Low_Peak_2_73.setVisible(true);lyr_Wednesday_Low_Peak_1_74.setVisible(true);lyr_Wednesday_High_Peak_75.setVisible(true);lyr_Tuesday_Low_Peak_76.setVisible(true);lyr_Tuesday_High_Peak_77.setVisible(true);lyr_Monday_Low_Peak_78.setVisible(true);lyr_Monday_High_Peak_79.setVisible(true);
var layersList = [group_Basemap,lyr_GHSL_population_distribution_3,group_Omittedpopulationclusters,group_30Minutetraveltimeareas,group_60Minutetraveltimeareas,group_90Minutetraveltimeareas,group_WorkinghoursandPCIfacilitylocations];
lyr_Mask_layer_1.set('fieldAliases', {'id': 'id', 'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'shapeName_': 'shapeName_', 'Level_2_2': 'Level_2_2', 'shapeISO_1': 'shapeISO_1', 'shapeID_2_': 'shapeID_2_', 'shapeGro_2': 'shapeGro_2', 'shapeTyp_1': 'shapeTyp_1', });
lyr_Serbia_NUTS3_2.set('fieldAliases', {'Region nam': 'Region nam', });
lyr_Cluster_7_4.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_6_5.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_5_6.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_4_7.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_3_8.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_2_9.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_1_10.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Cluster_0_11.set('fieldAliases', {'shapeName': 'shapeName', 'Level_2': 'Level_2', 'shapeISO_2': 'shapeISO_2', 'shapeID_2': 'shapeID_2', 'shapeGro_1': 'shapeGro_1', 'shapeType_': 'shapeType_', 'Color': 'Color', });
lyr_Sunday_Low_Peak_PM_30_minutes_12.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_AM_30_minutes_13.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_High_Peak_30_minutes_14.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_Low_Peak_30_minutes_15.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_High_Peak_30_minutes_16.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_Low_Peak_30_minutes_17.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_High_Peak_30_minutes_18.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_PM_30_minutes_19.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_AM_30_minutes_20.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_High_Peak_30_minutes_21.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_PM_30_minutes_22.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_AM_30_minutes_23.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_High_Peak_30_minutes_24.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_Low_Peak_30_minutes_25.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_High_Peak_30_minutes_26.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_Low_Peak_30_minutes_27.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_High_Peak_30_minutes_28.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_PM_60_minutes_29.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_AM_60_minutes_30.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_High_Peak_60_minutes_31.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_Low_Peak_60_minutes_32.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_High_Peak_60_minutes_33.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_Low_Peak_60_minutes_34.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_High_Peak_60_minutes_35.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_PM_60_minutes_36.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_AM_60_minutes_37.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_High_Peak_60_minutes_38.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_PM_60_minutes_39.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_AM_60_minutes_40.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_High_Peak_60_minutes_41.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_Low_Peak_60_minutes_42.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_High_Peak_60_minutes_43.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_Low_Peak_60_minutes_44.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_High_Peak_60_minutes_45.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_PM_90_minutes_46.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_AM_90_minutes_47.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_High_Peak_90_minutes_48.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_Low_Peak_90_minutes_49.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Saturday_High_Peak_90_minutes_50.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_Low_Peak_90_minutes_51.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Friday_High_Peak_90_minutes_52.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_PM_90_minutes_53.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_Low_Peak_AM_90_minutes_54.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Thursday_High_Peak_90_minutes_55.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_PM_90_minutes_56.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_Low_Peak_AM_90_minutes_57.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Wednesday_High_Peak_90_minutes_58.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_Low_Peak_90_minutes_59.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Tuesday_High_Peak_90_minutes_60.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_Low_Peak_90_minutes_61.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Monday_High_Peak_90_minutes_62.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', });
lyr_Sunday_Low_Peak_2_63.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Sunday_Low_Peak_1_64.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Sunday_High_Peak_65.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Saturday_Low_Peak_66.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Saturday_High_Peak_67.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Friday_Low_Peak_68.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Friday_High_Peak_69.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Thursday_Low_Peak_2_70.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Thursday_Low_Peak_1_71.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Thursday_High_Peak_72.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Wednesday_Low_Peak_2_73.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Wednesday': 'Wednesday', });
lyr_Wednesday_Low_Peak_1_74.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Wednesday_High_Peak_75.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Tuesday_Low_Peak_76.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Tuesday_High_Peak_77.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Monday_Low_Peak_78.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Monday': 'Monday', });
lyr_Monday_High_Peak_79.set('fieldAliases', {'ID': 'ID', 'Institution name': 'Institution name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Mask_layer_1.set('fieldImages', {'id': 'TextEdit', 'shapeName': 'TextEdit', 'Level_2': 'TextEdit', 'shapeISO_2': 'TextEdit', 'shapeID_2': 'TextEdit', 'shapeGro_1': 'TextEdit', 'shapeType_': 'TextEdit', 'shapeName_': 'TextEdit', 'Level_2_2': 'TextEdit', 'shapeISO_1': 'TextEdit', 'shapeID_2_': 'TextEdit', 'shapeGro_2': 'TextEdit', 'shapeTyp_1': 'TextEdit', });
lyr_Serbia_NUTS3_2.set('fieldImages', {'Region nam': 'TextEdit', });
lyr_Cluster_7_4.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_6_5.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_5_6.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_4_7.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_3_8.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_2_9.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_1_10.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Cluster_0_11.set('fieldImages', {'shapeName': '', 'Level_2': '', 'shapeISO_2': '', 'shapeID_2': '', 'shapeGro_1': '', 'shapeType_': '', 'Color': '', });
lyr_Sunday_Low_Peak_PM_30_minutes_12.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_AM_30_minutes_13.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_High_Peak_30_minutes_14.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_Low_Peak_30_minutes_15.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_High_Peak_30_minutes_16.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_Low_Peak_30_minutes_17.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_High_Peak_30_minutes_18.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_PM_30_minutes_19.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_AM_30_minutes_20.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_High_Peak_30_minutes_21.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_PM_30_minutes_22.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_AM_30_minutes_23.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_High_Peak_30_minutes_24.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_Low_Peak_30_minutes_25.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_High_Peak_30_minutes_26.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_Low_Peak_30_minutes_27.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_High_Peak_30_minutes_28.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_PM_60_minutes_29.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_AM_60_minutes_30.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_High_Peak_60_minutes_31.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_Low_Peak_60_minutes_32.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_High_Peak_60_minutes_33.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_Low_Peak_60_minutes_34.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_High_Peak_60_minutes_35.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_PM_60_minutes_36.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_AM_60_minutes_37.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_High_Peak_60_minutes_38.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_PM_60_minutes_39.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_AM_60_minutes_40.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_High_Peak_60_minutes_41.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_Low_Peak_60_minutes_42.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_High_Peak_60_minutes_43.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_Low_Peak_60_minutes_44.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_High_Peak_60_minutes_45.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_PM_90_minutes_46.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_AM_90_minutes_47.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_High_Peak_90_minutes_48.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_Low_Peak_90_minutes_49.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Saturday_High_Peak_90_minutes_50.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_Low_Peak_90_minutes_51.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Friday_High_Peak_90_minutes_52.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_PM_90_minutes_53.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_Low_Peak_AM_90_minutes_54.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Thursday_High_Peak_90_minutes_55.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_PM_90_minutes_56.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_Low_Peak_AM_90_minutes_57.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Wednesday_High_Peak_90_minutes_58.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_Low_Peak_90_minutes_59.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Tuesday_High_Peak_90_minutes_60.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_Low_Peak_90_minutes_61.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Monday_High_Peak_90_minutes_62.set('fieldImages', {'id': '', 'prop_is_on': '', });
lyr_Sunday_Low_Peak_2_63.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Sunday_Low_Peak_1_64.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Sunday_High_Peak_65.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Saturday_Low_Peak_66.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Saturday_High_Peak_67.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Friday_Low_Peak_68.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Friday_High_Peak_69.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Thursday_Low_Peak_2_70.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Thursday_Low_Peak_1_71.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Thursday_High_Peak_72.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Wednesday_Low_Peak_2_73.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Wednesday': 'TextEdit', });
lyr_Wednesday_Low_Peak_1_74.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Wednesday_High_Peak_75.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Tuesday_Low_Peak_76.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Tuesday_High_Peak_77.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Monday_Low_Peak_78.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Monday': '', });
lyr_Monday_High_Peak_79.set('fieldImages', {'ID': 'Range', 'Institution name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Mask_layer_1.set('fieldLabels', {'id': 'no label', 'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'shapeName_': 'no label', 'Level_2_2': 'no label', 'shapeISO_1': 'no label', 'shapeID_2_': 'no label', 'shapeGro_2': 'no label', 'shapeTyp_1': 'no label', });
lyr_Serbia_NUTS3_2.set('fieldLabels', {'Region nam': 'inline label - always visible', });
lyr_Cluster_7_4.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_6_5.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_5_6.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_4_7.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_3_8.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_2_9.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_1_10.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Cluster_0_11.set('fieldLabels', {'shapeName': 'no label', 'Level_2': 'no label', 'shapeISO_2': 'no label', 'shapeID_2': 'no label', 'shapeGro_1': 'no label', 'shapeType_': 'no label', 'Color': 'no label', });
lyr_Sunday_Low_Peak_PM_30_minutes_12.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_AM_30_minutes_13.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_High_Peak_30_minutes_14.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_Low_Peak_30_minutes_15.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_High_Peak_30_minutes_16.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_Low_Peak_30_minutes_17.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_High_Peak_30_minutes_18.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_PM_30_minutes_19.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_AM_30_minutes_20.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_High_Peak_30_minutes_21.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_PM_30_minutes_22.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_AM_30_minutes_23.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_High_Peak_30_minutes_24.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_Low_Peak_30_minutes_25.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_High_Peak_30_minutes_26.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_Low_Peak_30_minutes_27.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_High_Peak_30_minutes_28.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_PM_60_minutes_29.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_AM_60_minutes_30.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_High_Peak_60_minutes_31.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_Low_Peak_60_minutes_32.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_High_Peak_60_minutes_33.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_Low_Peak_60_minutes_34.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_High_Peak_60_minutes_35.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_PM_60_minutes_36.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_AM_60_minutes_37.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_High_Peak_60_minutes_38.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_PM_60_minutes_39.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_AM_60_minutes_40.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_High_Peak_60_minutes_41.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_Low_Peak_60_minutes_42.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_High_Peak_60_minutes_43.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_Low_Peak_60_minutes_44.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_High_Peak_60_minutes_45.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_PM_90_minutes_46.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_AM_90_minutes_47.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_High_Peak_90_minutes_48.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_Low_Peak_90_minutes_49.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Saturday_High_Peak_90_minutes_50.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_Low_Peak_90_minutes_51.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Friday_High_Peak_90_minutes_52.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_PM_90_minutes_53.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_Low_Peak_AM_90_minutes_54.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Thursday_High_Peak_90_minutes_55.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_PM_90_minutes_56.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_Low_Peak_AM_90_minutes_57.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Wednesday_High_Peak_90_minutes_58.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_Low_Peak_90_minutes_59.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Tuesday_High_Peak_90_minutes_60.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_Low_Peak_90_minutes_61.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Monday_High_Peak_90_minutes_62.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', });
lyr_Sunday_Low_Peak_2_63.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Sunday_Low_Peak_1_64.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Sunday_High_Peak_65.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Saturday_Low_Peak_66.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Saturday_High_Peak_67.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Friday_Low_Peak_68.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Friday_High_Peak_69.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Thursday_Low_Peak_2_70.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Thursday_Low_Peak_1_71.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Thursday_High_Peak_72.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Wednesday_Low_Peak_2_73.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Wednesday': 'inline label - always visible', });
lyr_Wednesday_Low_Peak_1_74.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Wednesday_High_Peak_75.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Tuesday_Low_Peak_76.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Tuesday_High_Peak_77.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Monday_Low_Peak_78.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Monday': 'inline label - always visible', });
lyr_Monday_High_Peak_79.set('fieldLabels', {'ID': 'inline label - always visible', 'Institution name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Monday_High_Peak_79.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});