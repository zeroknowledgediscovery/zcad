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
        
        if (features[75] <= 3.4068013906510553) {
            if (features[152] <= 3.655987234160298) {
                if (features[180] <= 1.093612511685869) {
                    classes[0] = 69; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 61; 
                    classes[1] = 20; 
                }
            } else {
                if (features[187] <= 2.7558405756744744) {
                    classes[0] = 7; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 8; 
                }
            }
        } else {
            if (features[110] <= 2.479694886822111) {
                if (features[16] <= 3.2761178963240782) {
                    classes[0] = 3; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 1; 
                }
            } else {
                if (features[114] <= 4.072971002698397) {
                    classes[0] = 5; 
                    classes[1] = 34; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[197] <= 2.9760760450624284) {
            if (features[69] <= 3.3005877129270638) {
                if (features[146] <= 1.971100626965566) {
                    classes[0] = 53; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 65; 
                    classes[1] = 14; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 3; 
            }
        } else {
            if (features[208] <= 3.4461758800065962) {
                if (features[130] <= 3.2549708556639825) {
                    classes[0] = 18; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 11; 
                }
            } else {
                if (features[57] <= 4.231622308134857) {
                    classes[0] = 9; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 25; 
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