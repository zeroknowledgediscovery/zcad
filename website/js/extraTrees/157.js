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
        
        if (features[47] <= 2.1408796068936957) {
            if (features[191] <= 1.0081313750744478) {
                classes[0] = 64; 
                classes[1] = 0; 
            } else {
                if (features[98] <= 2.3300179603183726) {
                    classes[0] = 30; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[70] <= 4.014395456302164) {
                if (features[181] <= 2.6480204358920547) {
                    classes[0] = 46; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 15; 
                }
            } else {
                if (features[110] <= 2.3941334641511243) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 25; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[175] <= 1.1454061177304975) {
            if (features[13] <= 2.9393184957743244) {
                if (features[105] <= 3.98865487751954) {
                    classes[0] = 74; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 1; 
                }
            } else {
                if (features[30] <= 3.394378089529638) {
                    classes[0] = 13; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            }
        } else {
            if (features[166] <= 1.9131796611068674) {
                if (features[103] <= 2.691770727602658) {
                    classes[0] = 7; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 16; 
                    classes[1] = 0; 
                }
            } else {
                if (features[192] <= 2.471184820621826) {
                    classes[0] = 29; 
                    classes[1] = 15; 
                } else {
                    classes[0] = 18; 
                    classes[1] = 41; 
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