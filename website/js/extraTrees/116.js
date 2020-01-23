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
        
        if (features[24] <= 2.747172174857544) {
            if (features[192] <= 3.0254009026221005) {
                if (features[106] <= 1.6887498603615676) {
                    classes[0] = 43; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 43; 
                    classes[1] = 4; 
                }
            } else {
                if (features[7] <= 2.147113350754191) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            }
        } else {
            if (features[168] <= 4.579359359843358) {
                if (features[184] <= 3.765706688522225) {
                    classes[0] = 66; 
                    classes[1] = 31; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 17; 
                }
            } else {
                if (features[199] <= 2.9998629977925972) {
                    classes[0] = 1; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 11; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[94] <= 2.9166582454539176) {
            if (features[175] <= 1.9897465682540771) {
                if (features[75] <= 2.184164204254823) {
                    classes[0] = 83; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 3; 
                }
            } else {
                if (features[110] <= 3.7840582964867626) {
                    classes[0] = 31; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[147] <= 2.832010601568972) {
                if (features[96] <= 4.9800396356638705) {
                    classes[0] = 15; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            } else {
                if (features[186] <= 1.0862140418431787) {
                    classes[0] = 5; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 38; 
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