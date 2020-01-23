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
        
        if (features[134] <= 2.2208222193740412) {
            if (features[157] <= 4.734805850188623) {
                if (features[87] <= 4.737661123153596) {
                    classes[0] = 121; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 2; 
            }
        } else {
            if (features[0] <= 3.999780315440046) {
                if (features[156] <= 3.8065367186472456) {
                    classes[0] = 22; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 6; 
                }
            } else {
                if (features[122] <= 2.7291592777376805) {
                    classes[0] = 6; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 35; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[164] <= 1.1483385456485387) {
            if (features[48] <= 3.5539577489504395) {
                if (features[121] <= 1.9863916989352517) {
                    classes[0] = 63; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 1; 
                }
            } else {
                classes[0] = 0; 
                classes[1] = 1; 
            }
        } else {
            if (features[184] <= 3.519381233267198) {
                if (features[81] <= 2.7327847004555093) {
                    classes[0] = 49; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 40; 
                    classes[1] = 35; 
                }
            } else {
                if (features[49] <= 2.866059665040141) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 21; 
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