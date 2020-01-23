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
        
        if (features[70] <= 3.683123064545506) {
            if (features[170] <= 1.0473169149119952) {
                if (features[130] <= 3.94840280662682) {
                    classes[0] = 78; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 1; 
                }
            } else {
                if (features[134] <= 3.8401698148065107) {
                    classes[0] = 56; 
                    classes[1] = 16; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[100] <= 4.070316606233975) {
                if (features[84] <= 2.746446800300128) {
                    classes[0] = 9; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 16; 
                }
            } else {
                if (features[192] <= 3.505553662081041) {
                    classes[0] = 4; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 11; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[159] <= 2.825148717418848) {
            if (features[72] <= 3.5385259867359538) {
                if (features[70] <= 4.736105207230945) {
                    classes[0] = 119; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[140] <= 3.5486856841243273) {
                    classes[0] = 13; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[195] <= 3.6537689653475622) {
                if (features[149] <= 3.2423859994124555) {
                    classes[0] = 27; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 9; 
                }
            } else {
                if (features[21] <= 1.0286264233424451) {
                    classes[0] = 3; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 1; 
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