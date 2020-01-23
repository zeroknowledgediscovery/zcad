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
        
        if (features[78] <= 2.3147226224256316) {
            if (features[153] <= 1.5218787046716915) {
                if (features[180] <= 2.363923982420901) {
                    classes[0] = 63; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[167] <= 3.726634879934897) {
                    classes[0] = 48; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            }
        } else {
            if (features[175] <= 3.9090767926113106) {
                if (features[11] <= 2.955924751682172) {
                    classes[0] = 19; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 18; 
                }
            } else {
                if (features[141] <= 4.49907840951303) {
                    classes[0] = 8; 
                    classes[1] = 20; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 5; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[172] <= 3.873129713755627) {
            if (features[147] <= 3.6393611257147795) {
                if (features[185] <= 2.0146421813474236) {
                    classes[0] = 124; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 10; 
                }
            } else {
                if (features[95] <= 2.404018907530242) {
                    classes[0] = 6; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 16; 
                }
            }
        } else {
            if (features[28] <= 2.852838366689551) {
                classes[0] = 2; 
                classes[1] = 0; 
            } else {
                if (features[26] <= 2.9154841149763597) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 25; 
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