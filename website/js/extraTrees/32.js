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
        
        if (features[47] <= 2.6838590124081163) {
            if (features[132] <= 2.7219261046135452) {
                if (features[17] <= 3.170106512107936) {
                    classes[0] = 95; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 1; 
                }
            } else {
                if (features[187] <= 2.7155949709543936) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[9] <= 2.239188626054297) {
                if (features[176] <= 3.911369445692454) {
                    classes[0] = 39; 
                    classes[1] = 17; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 6; 
                }
            } else {
                if (features[68] <= 1.7794717628413215) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 30; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[138] <= 2.6825956640218367) {
            if (features[191] <= 2.0545856119387715) {
                if (features[16] <= 1.0857562013369781) {
                    classes[0] = 52; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 49; 
                    classes[1] = 6; 
                }
            } else {
                if (features[200] <= 1.9636068646626579) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[94] <= 1.3559929157402333) {
                if (features[82] <= 1.739630056423894) {
                    classes[0] = 8; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 0; 
                }
            } else {
                if (features[170] <= 2.2409054996636257) {
                    classes[0] = 26; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 17; 
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