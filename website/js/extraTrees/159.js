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
        
        if (features[26] <= 2.020073897680302) {
            if (features[122] <= 2.5739633699757807) {
                if (features[144] <= 1.4790623702477022) {
                    classes[0] = 44; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 29; 
                    classes[1] = 3; 
                }
            } else {
                if (features[191] <= 2.4907317243007627) {
                    classes[0] = 25; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[131] <= 2.6285000506921206) {
                if (features[124] <= 3.6606978437214615) {
                    classes[0] = 30; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 4; 
                }
            } else {
                if (features[174] <= 2.700116545753608) {
                    classes[0] = 9; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 38; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[164] <= 2.696966459367874) {
            if (features[144] <= 2.0829585185660786) {
                if (features[190] <= 3.7583538721121634) {
                    classes[0] = 90; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[200] <= 3.167594892982205) {
                    classes[0] = 22; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[168] <= 4.788124877860827) {
                if (features[183] <= 1.600201919954364) {
                    classes[0] = 24; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 27; 
                    classes[1] = 36; 
                }
            } else {
                if (features[210] <= 2.580006999233741) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 12; 
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