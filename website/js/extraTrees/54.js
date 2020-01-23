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
        
        if (features[16] <= 2.6276781175414463) {
            if (features[170] <= 1.6552761670459417) {
                classes[0] = 77; 
                classes[1] = 0; 
            } else {
                if (features[170] <= 2.022058181474944) {
                    classes[0] = 15; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[90] <= 3.975099575694231) {
                if (features[187] <= 3.0146556296454072) {
                    classes[0] = 43; 
                    classes[1] = 15; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 5; 
                }
            } else {
                if (features[112] <= 1.4741700293841633) {
                    classes[0] = 2; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 23; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[173] <= 3.057614364688105) {
            if (features[185] <= 3.4596649452390453) {
                if (features[94] <= 2.813402982341779) {
                    classes[0] = 122; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 22; 
                    classes[1] = 16; 
                }
            } else {
                if (features[120] <= 2.4570373350088657) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[14] <= 2.2611079855175262) {
                if (features[56] <= 3.008707207631649) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 2; 
                }
            } else {
                if (features[12] <= 3.2885865058231105) {
                    classes[0] = 8; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 21; 
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