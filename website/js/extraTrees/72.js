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
        
        if (features[143] <= 2.419518188768773) {
            if (features[159] <= 4.82927597864963) {
                if (features[135] <= 1.5266530884088265) {
                    classes[0] = 74; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 33; 
                    classes[1] = 3; 
                }
            } else {
                if (features[99] <= 4.381798843565304) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 0; 
                }
            }
        } else {
            if (features[21] <= 1.075680915301517) {
                if (features[199] <= 3.628992353858888) {
                    classes[0] = 28; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 8; 
                }
            } else {
                if (features[58] <= 3.7987929875025492) {
                    classes[0] = 15; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 34; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[182] <= 1.9899247889360063) {
            if (features[69] <= 3.3127250682156184) {
                if (features[159] <= 2.4856883331600987) {
                    classes[0] = 97; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 3; 
                }
            } else {
                if (features[146] <= 3.52519546566773) {
                    classes[0] = 4; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[94] <= 2.5007106645501733) {
                if (features[11] <= 3.8957400042078176) {
                    classes[0] = 20; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            } else {
                if (features[7] <= 4.256874410089512) {
                    classes[0] = 25; 
                    classes[1] = 28; 
                } else {
                    classes[0] = 3; 
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