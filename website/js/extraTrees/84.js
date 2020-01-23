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
        
        if (features[196] <= 2.396389721611696) {
            if (features[185] <= 1.5071542726397302) {
                if (features[162] <= 1.129173554540227) {
                    classes[0] = 69; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 10; 
                    classes[1] = 2; 
                }
            } else {
                if (features[154] <= 1.0921901502144478) {
                    classes[0] = 10; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 37; 
                    classes[1] = 18; 
                }
            }
        } else {
            if (features[207] <= 2.380636705728544) {
                if (features[125] <= 2.6238754478394406) {
                    classes[0] = 4; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 16; 
                    classes[1] = 1; 
                }
            } else {
                if (features[13] <= 2.792482890092061) {
                    classes[0] = 4; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 38; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[201] <= 2.89218046045498) {
            if (features[137] <= 2.0285661458170816) {
                if (features[164] <= 2.0536858053196623) {
                    classes[0] = 80; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 2; 
                }
            } else {
                if (features[19] <= 3.408732415367259) {
                    classes[0] = 26; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[98] <= 2.5771311580096983) {
                if (features[94] <= 2.533828312779697) {
                    classes[0] = 22; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 7; 
                }
            } else {
                if (features[139] <= 1.8976480182714983) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 20; 
                    classes[1] = 43; 
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