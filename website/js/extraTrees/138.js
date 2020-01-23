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
        
        if (features[30] <= 3.0328547349352646) {
            if (features[139] <= 2.944449967678846) {
                if (features[138] <= 1.09520959672295) {
                    classes[0] = 66; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 49; 
                    classes[1] = 10; 
                }
            } else {
                if (features[172] <= 3.373691958549289) {
                    classes[0] = 28; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 8; 
                }
            }
        } else {
            if (features[68] <= 1.721588239409769) {
                classes[0] = 5; 
                classes[1] = 0; 
            } else {
                if (features[100] <= 4.140220336215673) {
                    classes[0] = 14; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 19; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[95] <= 3.1657652064067148) {
            if (features[147] <= 1.672345256745976) {
                classes[0] = 52; 
                classes[1] = 0; 
            } else {
                if (features[192] <= 1.6305689889148665) {
                    classes[0] = 39; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 45; 
                    classes[1] = 17; 
                }
            }
        } else {
            if (features[14] <= 1.318551479055803) {
                classes[0] = 4; 
                classes[1] = 0; 
            } else {
                if (features[195] <= 2.742706266112023) {
                    classes[0] = 14; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 35; 
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