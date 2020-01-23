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
        
        if (features[68] <= 2.185580101416251) {
            if (features[79] <= 3.854058248388608) {
                if (features[123] <= 2.626083607145624) {
                    classes[0] = 73; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 41; 
                    classes[1] = 7; 
                }
            } else {
                if (features[155] <= 1.0854386836688215) {
                    classes[0] = 7; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 6; 
                }
            }
        } else {
            if (features[101] <= 3.6837749009410734) {
                if (features[75] <= 4.076595315279716) {
                    classes[0] = 26; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 3; 
                }
            } else {
                if (features[0] <= 4.2871270884234125) {
                    classes[0] = 12; 
                    classes[1] = 15; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 18; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[140] <= 2.7538370647252712) {
            if (features[58] <= 2.613396516821066) {
                if (features[15] <= 2.273317857307064) {
                    classes[0] = 75; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 3; 
                }
            } else {
                if (features[162] <= 3.8242679940649627) {
                    classes[0] = 30; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[98] <= 3.2197882091718673) {
                if (features[64] <= 3.4683666627241143) {
                    classes[0] = 34; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 7; 
                }
            } else {
                if (features[195] <= 2.6675288666354158) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 30; 
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