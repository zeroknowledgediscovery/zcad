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
        
        if (features[149] <= 2.2113208385237124) {
            if (features[106] <= 2.4952681201953757) {
                if (features[139] <= 1.4359437229279166) {
                    classes[0] = 57; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 43; 
                    classes[1] = 5; 
                }
            } else {
                if (features[68] <= 4.511344812582873) {
                    classes[0] = 44; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[181] <= 2.5449053913098316) {
                if (features[76] <= 4.826275059872435) {
                    classes[0] = 16; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 4; 
                }
            } else {
                if (features[144] <= 1.6677753798047896) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 26; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[84] <= 2.267531479367768) {
            if (features[169] <= 2.7232755598254856) {
                if (features[188] <= 2.0812969669146915) {
                    classes[0] = 97; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 3; 
                }
            } else {
                if (features[113] <= 1.221122132717223) {
                    classes[0] = 8; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[47] <= 2.7104189753115264) {
                if (features[210] <= 2.209435658626927) {
                    classes[0] = 2; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 0; 
                }
            } else {
                if (features[41] <= 3.4926150168723495) {
                    classes[0] = 23; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 24; 
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