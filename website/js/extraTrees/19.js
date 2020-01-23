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
        
        if (features[70] <= 3.501420985209486) {
            if (features[185] <= 1.1950920723355805) {
                if (features[149] <= 3.2966978504772753) {
                    classes[0] = 76; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[165] <= 2.805225835556735) {
                    classes[0] = 35; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 22; 
                    classes[1] = 20; 
                }
            }
        } else {
            if (features[201] <= 2.035629109030417) {
                if (features[13] <= 3.4401732941345187) {
                    classes[0] = 8; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[142] <= 2.659980737445867) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 40; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[98] <= 2.834255386532403) {
            if (features[143] <= 2.153378501140223) {
                if (features[7] <= 2.573298894601548) {
                    classes[0] = 69; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 19; 
                    classes[1] = 3; 
                }
            } else {
                if (features[185] <= 3.9868198302513083) {
                    classes[0] = 29; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[181] <= 1.7214400156966598) {
                if (features[26] <= 3.99524656962382) {
                    classes[0] = 20; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 5; 
                }
            } else {
                if (features[144] <= 2.307549056274606) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 46; 
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