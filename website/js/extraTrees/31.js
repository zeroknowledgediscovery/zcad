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
        
        if (features[173] <= 2.923676713334246) {
            if (features[130] <= 1.8688639257423878) {
                if (features[200] <= 1.5401201036479883) {
                    classes[0] = 45; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 2; 
                }
            } else {
                if (features[135] <= 1.5455947148360287) {
                    classes[0] = 21; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 43; 
                    classes[1] = 15; 
                }
            }
        } else {
            if (features[55] <= 2.5523370539547585) {
                if (features[159] <= 1.4642593955920353) {
                    classes[0] = 11; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 9; 
                }
            } else {
                if (features[152] <= 3.109826280786575) {
                    classes[0] = 12; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 30; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[173] <= 2.2275345144921608) {
            if (features[171] <= 1.5561329538729662) {
                if (features[62] <= 2.849903516867153) {
                    classes[0] = 81; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 1; 
                }
            } else {
                if (features[183] <= 2.854352340500035) {
                    classes[0] = 34; 
                    classes[1] = 9; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[110] <= 3.5656842731710916) {
                if (features[102] <= 2.96404914649392) {
                    classes[0] = 12; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 15; 
                    classes[1] = 12; 
                }
            } else {
                if (features[150] <= 2.3823877449065387) {
                    classes[0] = 5; 
                    classes[1] = 30; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 7; 
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