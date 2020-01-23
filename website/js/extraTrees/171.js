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
        
        if (features[184] <= 2.4045667887686597) {
            if (features[58] <= 3.579060654425556) {
                if (features[81] <= 4.700810097018634) {
                    classes[0] = 121; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[129] <= 3.1538876193360834) {
                    classes[0] = 12; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[171] <= 2.307952954111599) {
                if (features[45] <= 1.168107707131704) {
                    classes[0] = 13; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 4; 
                }
            } else {
                if (features[30] <= 4.47000966755208) {
                    classes[0] = 14; 
                    classes[1] = 20; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 16; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[170] <= 2.0642052982301475) {
            if (features[67] <= 4.450748665002523) {
                if (features[149] <= 1.5266218243756433) {
                    classes[0] = 76; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 53; 
                    classes[1] = 11; 
                }
            } else {
                if (features[131] <= 1.1981651858418085) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[71] <= 1.7099982223985708) {
                if (features[153] <= 4.632203401826416) {
                    classes[0] = 7; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[70] <= 4.858338497513131) {
                    classes[0] = 24; 
                    classes[1] = 25; 
                } else {
                    classes[0] = 5; 
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