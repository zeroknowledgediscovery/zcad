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
        
        if (features[74] <= 2.8803022363597073) {
            if (features[38] <= 3.479721392262597) {
                if (features[200] <= 1.0136186555091378) {
                    classes[0] = 71; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 55; 
                    classes[1] = 7; 
                }
            } else {
                if (features[132] <= 1.8792696240727182) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
                }
            }
        } else {
            if (features[137] <= 1.622569871890624) {
                classes[0] = 5; 
                classes[1] = 0; 
            } else {
                if (features[164] <= 2.9741404112308008) {
                    classes[0] = 7; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 42; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[134] <= 2.3267428080210193) {
            if (features[144] <= 2.9502810626059217) {
                if (features[11] <= 1.6007110809910627) {
                    classes[0] = 62; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 45; 
                    classes[1] = 4; 
                }
            } else {
                if (features[14] <= 3.816755487963909) {
                    classes[0] = 22; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[0] <= 3.031980012558391) {
                if (features[14] <= 1.8519150208923572) {
                    classes[0] = 4; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 20; 
                    classes[1] = 12; 
                }
            } else {
                if (features[124] <= 3.887701990030567) {
                    classes[0] = 13; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 22; 
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