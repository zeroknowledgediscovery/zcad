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
        
        if (features[98] <= 2.2621167661911423) {
            if (features[192] <= 1.0596632305810523) {
                if (features[130] <= 4.09772718655771) {
                    classes[0] = 80; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[1] <= 2.6867559876696934) {
                    classes[0] = 36; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[68] <= 1.0614469144779477) {
                if (features[97] <= 4.379600250804611) {
                    classes[0] = 8; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            } else {
                if (features[124] <= 2.2071358022313268) {
                    classes[0] = 14; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 46; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[191] <= 2.180957602886929) {
            if (features[135] <= 1.6850775725604397) {
                if (features[101] <= 2.1105934703306266) {
                    classes[0] = 67; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 2; 
                }
            } else {
                if (features[102] <= 3.1929660039921135) {
                    classes[0] = 44; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[144] <= 2.6754990209245584) {
                if (features[33] <= 1.6557100027127705) {
                    classes[0] = 3; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 0; 
                }
            } else {
                if (features[203] <= 3.2833542648159684) {
                    classes[0] = 16; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 37; 
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