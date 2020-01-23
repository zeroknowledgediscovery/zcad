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
        
        if (features[143] <= 2.8864191215887756) {
            if (features[180] <= 1.4265273071017708) {
                if (features[186] <= 2.9423468089394023) {
                    classes[0] = 60; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 2; 
                }
            } else {
                if (features[201] <= 4.004631030841093) {
                    classes[0] = 35; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[184] <= 2.7140180192487398) {
                if (features[137] <= 3.889652940393264) {
                    classes[0] = 27; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 6; 
                }
            } else {
                if (features[60] <= 2.103478645954038) {
                    classes[0] = 3; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 18; 
                    classes[1] = 49; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[68] <= 3.4644518357070404) {
            if (features[192] <= 2.9768094634529247) {
                if (features[138] <= 1.8496220460392636) {
                    classes[0] = 73; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 55; 
                    classes[1] = 13; 
                }
            } else {
                if (features[186] <= 1.519826072975912) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 22; 
                }
            }
        } else {
            if (features[96] <= 1.8157635707481594) {
                classes[0] = 2; 
                classes[1] = 0; 
            } else {
                if (features[160] <= 2.9876896766888397) {
                    classes[0] = 9; 
                    classes[1] = 16; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 15; 
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