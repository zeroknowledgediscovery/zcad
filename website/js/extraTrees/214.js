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
        
        if (features[138] <= 2.387261802045285) {
            if (features[48] <= 2.0650647590239837) {
                if (features[159] <= 3.846925862062222) {
                    classes[0] = 85; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 1; 
                }
            } else {
                if (features[122] <= 3.4187090552499093) {
                    classes[0] = 21; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[159] <= 2.7672857277874305) {
                if (features[162] <= 2.0512915202655324) {
                    classes[0] = 28; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 9; 
                }
            } else {
                if (features[192] <= 2.123941697703647) {
                    classes[0] = 9; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 27; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[58] <= 2.8873466671851213) {
            if (features[20] <= 1.1473986283631057) {
                if (features[30] <= 1.8224382534727632) {
                    classes[0] = 59; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 32; 
                    classes[1] = 5; 
                }
            } else {
                if (features[192] <= 3.8182317888449093) {
                    classes[0] = 17; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[170] <= 2.9932840564256926) {
                if (features[110] <= 2.307588637484046) {
                    classes[0] = 17; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 11; 
                }
            } else {
                if (features[197] <= 1.7204895693438544) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 40; 
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