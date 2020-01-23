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
        
        if (features[197] <= 2.2405402051473686) {
            if (features[47] <= 2.7537605644919725) {
                if (features[58] <= 1.3398046639467611) {
                    classes[0] = 49; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 43; 
                    classes[1] = 3; 
                }
            } else {
                if (features[185] <= 2.122472086978365) {
                    classes[0] = 24; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[184] <= 3.1526271007734477) {
                if (features[104] <= 2.731085517784155) {
                    classes[0] = 8; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 28; 
                }
            } else {
                if (features[96] <= 2.2933226587685396) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 23; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[71] <= 3.949488605814748) {
            if (features[167] <= 1.8381574772476021) {
                if (features[176] <= 3.9682842250765695) {
                    classes[0] = 98; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[84] <= 3.4707525756539557) {
                    classes[0] = 37; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 11; 
                }
            }
        } else {
            if (features[124] <= 1.088522668037807) {
                classes[0] = 2; 
                classes[1] = 0; 
            } else {
                if (features[98] <= 1.3593276433457284) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 36; 
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