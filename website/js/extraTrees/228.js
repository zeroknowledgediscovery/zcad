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
        
        if (features[144] <= 2.7437123669049295) {
            if (features[182] <= 1.0786877181747405) {
                if (features[133] <= 2.7471304842024717) {
                    classes[0] = 83; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 1; 
                }
            } else {
                if (features[194] <= 2.0825739507947927) {
                    classes[0] = 16; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[88] <= 3.708352121854365) {
                if (features[184] <= 2.2937713923369403) {
                    classes[0] = 28; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 17; 
                    classes[1] = 17; 
                }
            } else {
                if (features[93] <= 2.7339878989076185) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 33; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[58] <= 3.559565115049279) {
            if (features[180] <= 2.1189346570144103) {
                if (features[152] <= 1.3584300616562506) {
                    classes[0] = 57; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 54; 
                    classes[1] = 10; 
                }
            } else {
                if (features[10] <= 3.320974373873777) {
                    classes[0] = 20; 
                    classes[1] = 12; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[140] <= 3.506090293874075) {
                if (features[178] <= 1.0658551659741695) {
                    classes[0] = 7; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 19; 
                    classes[1] = 24; 
                }
            } else {
                if (features[58] <= 4.73933569748855) {
                    classes[0] = 3; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 10; 
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