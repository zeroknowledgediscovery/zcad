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
        
        if (features[163] <= 2.2302056524111915) {
            if (features[186] <= 2.7743058413147486) {
                if (features[185] <= 1.5796138740049739) {
                    classes[0] = 60; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 32; 
                    classes[1] = 8; 
                }
            } else {
                if (features[153] <= 1.9077200959006884) {
                    classes[0] = 7; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 11; 
                }
            }
        } else {
            if (features[180] <= 2.2986968375270704) {
                if (features[3] <= 3.9470576210632258) {
                    classes[0] = 19; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
                }
            } else {
                if (features[47] <= 2.185533000242679) {
                    classes[0] = 7; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 43; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[201] <= 2.465487367224641) {
            if (features[174] <= 3.2284997949509413) {
                if (features[152] <= 3.4156105967311237) {
                    classes[0] = 110; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 1; 
            }
        } else {
            if (features[176] <= 2.54914255978034) {
                if (features[181] <= 2.5640475142579744) {
                    classes[0] = 18; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 5; 
                }
            } else {
                if (features[181] <= 2.6123606570122577) {
                    classes[0] = 16; 
                    classes[1] = 16; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 32; 
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