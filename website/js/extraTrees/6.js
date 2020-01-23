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
        
        if (features[166] <= 2.95378387111881) {
            if (features[165] <= 2.386414729704342) {
                if (features[71] <= 4.924087734857615) {
                    classes[0] = 112; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                if (features[146] <= 2.429597227568551) {
                    classes[0] = 16; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[101] <= 4.07646786006003) {
                if (features[40] <= 3.6040173837002447) {
                    classes[0] = 26; 
                    classes[1] = 14; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 13; 
                }
            } else {
                if (features[206] <= 1.3478482180963494) {
                    classes[0] = 1; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 13; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[147] <= 3.1132309204494724) {
            if (features[191] <= 2.483512236496207) {
                if (features[140] <= 1.1520215981416504) {
                    classes[0] = 73; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 49; 
                    classes[1] = 9; 
                }
            } else {
                if (features[72] <= 3.236877429409361) {
                    classes[0] = 18; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[0] <= 4.5637081244791435) {
                if (features[82] <= 1.4010550754149702) {
                    classes[0] = 7; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 21; 
                }
            } else {
                if (features[140] <= 2.0142509071222743) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 16; 
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