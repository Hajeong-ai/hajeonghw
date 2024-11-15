var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_School_District_Administrative_2 = new ol.format.GeoJSON();
var features_School_District_Administrative_2 = format_School_District_Administrative_2.readFeatures(json_School_District_Administrative_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_District_Administrative_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_District_Administrative_2.addFeatures(features_School_District_Administrative_2);
var lyr_School_District_Administrative_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_District_Administrative_2, 
                style: style_School_District_Administrative_2,
                popuplayertitle: "School_District_Administrative",
                interactive: true,
                title: '<img src="styles/legend/School_District_Administrative_2.png" /> School_District_Administrative'
            });
var format_School_District_Elementary_3 = new ol.format.GeoJSON();
var features_School_District_Elementary_3 = format_School_District_Elementary_3.readFeatures(json_School_District_Elementary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_District_Elementary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_District_Elementary_3.addFeatures(features_School_District_Elementary_3);
var lyr_School_District_Elementary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_District_Elementary_3, 
                style: style_School_District_Elementary_3,
                popuplayertitle: "School_District_Elementary",
                interactive: true,
                title: '<img src="styles/legend/School_District_Elementary_3.png" /> School_District_Elementary'
            });
var format_School_District_Secondary_4 = new ol.format.GeoJSON();
var features_School_District_Secondary_4 = format_School_District_Secondary_4.readFeatures(json_School_District_Secondary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_District_Secondary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_District_Secondary_4.addFeatures(features_School_District_Secondary_4);
var lyr_School_District_Secondary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_District_Secondary_4, 
                style: style_School_District_Secondary_4,
                popuplayertitle: "School_District_Secondary",
                interactive: true,
                title: '<img src="styles/legend/School_District_Secondary_4.png" /> School_District_Secondary'
            });
var format_School_District_Unified_5 = new ol.format.GeoJSON();
var features_School_District_Unified_5 = format_School_District_Unified_5.readFeatures(json_School_District_Unified_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_District_Unified_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_District_Unified_5.addFeatures(features_School_District_Unified_5);
var lyr_School_District_Unified_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_District_Unified_5, 
                style: style_School_District_Unified_5,
                popuplayertitle: "School_District_Unified",
                interactive: true,
                title: '<img src="styles/legend/School_District_Unified_5.png" /> School_District_Unified'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_School_District_Administrative_2.setVisible(true);lyr_School_District_Elementary_3.setVisible(true);lyr_School_District_Secondary_4.setVisible(true);lyr_School_District_Unified_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRIStandard_1,lyr_School_District_Administrative_2,lyr_School_District_Elementary_3,lyr_School_District_Secondary_4,lyr_School_District_Unified_5];
lyr_School_District_Administrative_2.set('fieldAliases', {'id': 'id', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'SDTYP': 'SDTYP', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_School_District_Elementary_3.set('fieldAliases', {'id': 'id', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'SDTYP': 'SDTYP', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_School_District_Secondary_4.set('fieldAliases', {'id': 'id', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'SDTYP': 'SDTYP', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_School_District_Unified_5.set('fieldAliases', {'id': 'id', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'SDTYP': 'SDTYP', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'School_District_Administrative_GEOID': 'School_District_Administrative_GEOID', 'School_District_Administrative_GEOIDFQ': 'School_District_Administrative_GEOIDFQ', 'School_District_Administrative_NAME': 'School_District_Administrative_NAME', 'School_District_Administrative_LOGRADE': 'School_District_Administrative_LOGRADE', 'School_District_Administrative_HIGRADE': 'School_District_Administrative_HIGRADE', 'School_District_Administrative_SDTYP': 'School_District_Administrative_SDTYP', 'School_District_Administrative_ALAND': 'School_District_Administrative_ALAND', 'School_District_Administrative_AWATER': 'School_District_Administrative_AWATER', 'School_District_Administrative_INTPTLAT': 'School_District_Administrative_INTPTLAT', 'School_District_Administrative_INTPTLON': 'School_District_Administrative_INTPTLON', });
lyr_School_District_Administrative_2.set('fieldImages', {'id': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'SDTYP': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_School_District_Elementary_3.set('fieldImages', {'id': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'SDTYP': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_School_District_Secondary_4.set('fieldImages', {'id': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'SDTYP': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_School_District_Unified_5.set('fieldImages', {'id': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'SDTYP': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'School_District_Administrative_GEOID': 'TextEdit', 'School_District_Administrative_GEOIDFQ': 'TextEdit', 'School_District_Administrative_NAME': 'TextEdit', 'School_District_Administrative_LOGRADE': 'TextEdit', 'School_District_Administrative_HIGRADE': 'TextEdit', 'School_District_Administrative_SDTYP': 'TextEdit', 'School_District_Administrative_ALAND': 'TextEdit', 'School_District_Administrative_AWATER': 'TextEdit', 'School_District_Administrative_INTPTLAT': 'TextEdit', 'School_District_Administrative_INTPTLON': 'TextEdit', });
lyr_School_District_Administrative_2.set('fieldLabels', {'id': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'SDTYP': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_School_District_Elementary_3.set('fieldLabels', {'id': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'SDTYP': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_School_District_Secondary_4.set('fieldLabels', {'id': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'SDTYP': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_School_District_Unified_5.set('fieldLabels', {'id': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'SDTYP': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'School_District_Administrative_GEOID': 'no label', 'School_District_Administrative_GEOIDFQ': 'no label', 'School_District_Administrative_NAME': 'no label', 'School_District_Administrative_LOGRADE': 'no label', 'School_District_Administrative_HIGRADE': 'no label', 'School_District_Administrative_SDTYP': 'no label', 'School_District_Administrative_ALAND': 'no label', 'School_District_Administrative_AWATER': 'no label', 'School_District_Administrative_INTPTLAT': 'no label', 'School_District_Administrative_INTPTLON': 'no label', });
lyr_School_District_Unified_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});