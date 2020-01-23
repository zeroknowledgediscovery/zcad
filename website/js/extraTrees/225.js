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
        
        if (features[184] <= 2.745772654072276) {
            if (features[81] <= 3.478385205603384) {
                if (features[97] <= 4.255644950669094) {
                    classes[0] = 122; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[189] <= 1.0618363223326561) {
                    classes[0] = 8; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[149] <= 2.4388108502322856) {
                if (features[23] <= 3.4234657978748277) {
                    classes[0] = 17; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 4; 
                }
            } else {
                if (features[185] <= 1.4647283798385078) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 35; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[146] <= 1.4261767977970545) {
            if (features[139] <= 3.3592581387419522) {
                classes[0] = 68; 
                classes[1] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 1; 
            }
        } else {
            if (features[68] <= 2.2963434538321303) {
                if (features[90] <= 3.1810779637568993) {
                    classes[0] = 52; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 6; 
                }
            } else {
                if (features[58] <= 3.967640913542193) {
                    classes[0] = 19; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 38; 
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