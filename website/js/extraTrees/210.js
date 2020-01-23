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
        
        if (features[133] <= 2.801574549545336) {
            if (features[110] <= 2.1587266182334752) {
                if (features[133] <= 1.8535989885468032) {
                    classes[0] = 74; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 30; 
                    classes[1] = 5; 
                }
            } else {
                if (features[131] <= 2.706094275091819) {
                    classes[0] = 18; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[179] <= 2.0153996413645334) {
                if (features[117] <= 2.4929486575969255) {
                    classes[0] = 13; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                if (features[118] <= 3.6144349256597623) {
                    classes[0] = 16; 
                    classes[1] = 21; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 25; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[94] <= 2.7917498139626113) {
            if (features[28] <= 2.186694559262458) {
                if (features[15] <= 2.0151264527883037) {
                    classes[0] = 87; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 3; 
                }
            } else {
                if (features[29] <= 4.664138303447579) {
                    classes[0] = 30; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[43] <= 3.3251492261538047) {
                if (features[201] <= 2.384352284196928) {
                    classes[0] = 16; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 15; 
                }
            } else {
                if (features[186] <= 3.681682138089874) {
                    classes[0] = 2; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 14; 
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