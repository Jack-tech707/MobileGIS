var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_boundary_1 = new ol.format.GeoJSON();
var features_boundary_1 = format_boundary_1.readFeatures(json_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_1.addFeatures(features_boundary_1);
var lyr_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_1, 
                style: style_boundary_1,
                interactive: true,
                title: '<img src="styles/legend/boundary_1.png" /> boundary'
            });
var format_merged_signpost_2 = new ol.format.GeoJSON();
var features_merged_signpost_2 = format_merged_signpost_2.readFeatures(json_merged_signpost_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_merged_signpost_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_merged_signpost_2.addFeatures(features_merged_signpost_2);
var lyr_merged_signpost_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_merged_signpost_2, 
                style: style_merged_signpost_2,
                interactive: true,
                title: '<img src="styles/legend/merged_signpost_2.png" /> merged_signpost'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_boundary_1.setVisible(true);lyr_merged_signpost_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_boundary_1,lyr_merged_signpost_2];
lyr_boundary_1.set('fieldAliases', {'Id': 'Id', });
lyr_merged_signpost_2.set('fieldAliases', {'_ID': '_ID', '_NAME': '_NAME', '_REMARKS': '_REMARKS', '_REC_TIME': '_REC_TIME', '_LATITUDE': '_LATITUDE', '_LONGITUDE': '_LONGITUDE', '_ELEVATION': '_ELEVATION', '_ORTHO_HT': '_ORTHO_HT', 'sign_type': 'sign_type', 'sign_name': 'sign_name', 'lighting': 'lighting', 'condition': 'condition', 'placement': 'placement', 'Add_photo': 'Add_photo', });
lyr_boundary_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_merged_signpost_2.set('fieldImages', {'_ID': 'TextEdit', '_NAME': 'TextEdit', '_REMARKS': 'TextEdit', '_REC_TIME': 'TextEdit', '_LATITUDE': 'TextEdit', '_LONGITUDE': 'TextEdit', '_ELEVATION': 'TextEdit', '_ORTHO_HT': 'TextEdit', 'sign_type': 'TextEdit', 'sign_name': 'TextEdit', 'lighting': 'TextEdit', 'condition': 'TextEdit', 'placement': 'TextEdit', 'Add_photo': 'TextEdit', });
lyr_boundary_1.set('fieldLabels', {'Id': 'no label', });
lyr_merged_signpost_2.set('fieldLabels', {'_ID': 'no label', '_NAME': 'no label', '_REMARKS': 'no label', '_REC_TIME': 'no label', '_LATITUDE': 'no label', '_LONGITUDE': 'no label', '_ELEVATION': 'no label', '_ORTHO_HT': 'no label', 'sign_type': 'no label', 'sign_name': 'header label', 'lighting': 'no label', 'condition': 'no label', 'placement': 'inline label', 'Add_photo': 'no label', });
lyr_merged_signpost_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});