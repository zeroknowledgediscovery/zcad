var ExtraTreesClassifier = function() {

    var findProb = function(classes) {
        var sum = 0;
        var output = [];
        for (var i = 0; i < classes.length; i++) {
            sum += classes[i];
        }

        for (var j = 0; j < classes.length; j++) {
            output[j] = classes[j] / sum;
        }
        return output;
    }

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[119] <= 3.225749030348728) {
            if (features[68] <= 2.606877532604559) {
                if (features[110] <= 3.318279356843922) {
                    classes[0] = 114; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 4; 
                }
            } else {
                if (features[185] <= 2.2148194132441743) {
                    classes[0] = 19; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 16; 
                }
            }
        } else {
            if (features[194] <= 2.3705272829954174) {
                if (features[196] <= 2.368276253979782) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[1] <= 2.927572007257292) {
                    classes[0] = 6; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 12; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[143] <= 2.682862845567457) {
            if (features[26] <= 2.4757832002247606) {
                if (features[73] <= 4.827788511210954) {
                    classes[0] = 77; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[196] <= 2.6691666146131077) {
                    classes[0] = 21; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[95] <= 4.5119986066184925) {
                if (features[98] <= 1.904357682869005) {
                    classes[0] = 17; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 33; 
                    classes[1] = 34; 
                }
            } else {
                if (features[122] <= 1.6872200512733404) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 28; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    this.predict = function(features) {
        var classes = new Array(2).fill(0);
        for (var i = 0; i < trees.length; i++) {
            for (var j = 0; j < 2 ; j ++) {
                classes[j] += trees[i](features)[j];
            }
            // classes[trees[i](features)]++;
        }
    
        for (var k = 0; k < 2 ; k ++) {
            classes[k] = classes[k] / trees.length;
        }
    
        return classes;
    }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 == 211) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var prediction = new ExtraTreesClassifier().predict(features);
        console.log(prediction);

    }
}