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
        
        if (features[181] <= 2.196205204909763) {
            if (features[140] <= 2.2815734936304266) {
                if (features[158] <= 1.0561374426149472) {
                    classes[0] = 77; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 29; 
                    classes[1] = 9; 
                }
            } else {
                if (features[200] <= 4.794789431521105) {
                    classes[0] = 40; 
                    classes[1] = 15; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[134] <= 1.0586847365175769) {
                if (features[140] <= 1.2403849867360597) {
                    classes[0] = 3; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 1; 
                }
            } else {
                if (features[11] <= 1.4401361092180647) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 35; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[178] <= 1.027778067173333) {
            if (features[155] <= 3.282758108471873) {
                if (features[181] <= 1.9337571751949176) {
                    classes[0] = 72; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 1; 
                }
            } else {
                if (features[73] <= 2.6252197388677017) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[170] <= 3.8585013010811533) {
                if (features[184] <= 2.688176590804093) {
                    classes[0] = 49; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 24; 
                    classes[1] = 27; 
                }
            } else {
                if (features[137] <= 2.91485287850483) {
                    classes[0] = 3; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 22; 
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