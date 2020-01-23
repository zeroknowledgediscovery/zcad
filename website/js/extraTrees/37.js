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
        
        if (features[170] <= 1.4045128502904032) {
            if (features[129] <= 4.879477415177728) {
                if (features[66] <= 2.6565668762924926) {
                    classes[0] = 67; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 3; 
                }
            } else {
                if (features[163] <= 2.1569280108236373) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[131] <= 2.6083195701280237) {
                if (features[3] <= 3.322535566204477) {
                    classes[0] = 40; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
                }
            } else {
                if (features[47] <= 3.0753527009279247) {
                    classes[0] = 19; 
                    classes[1] = 20; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 28; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[49] <= 2.9811373865144035) {
            if (features[30] <= 3.794333301854475) {
                if (features[178] <= 1.1330318507426567) {
                    classes[0] = 65; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 28; 
                    classes[1] = 6; 
                }
            } else {
                if (features[108] <= 2.714460128319664) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[181] <= 1.041332187150294) {
                if (features[200] <= 4.773779110877672) {
                    classes[0] = 41; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 4; 
                }
            } else {
                if (features[80] <= 2.5155014756673486) {
                    classes[0] = 12; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 39; 
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