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
        
        if (features[170] <= 2.7617829706341883) {
            if (features[184] <= 3.0467848838524825) {
                if (features[166] <= 1.9610381466155118) {
                    classes[0] = 96; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 35; 
                    classes[1] = 8; 
                }
            } else {
                if (features[17] <= 2.4450149137736368) {
                    classes[0] = 1; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[70] <= 4.746134091050426) {
                if (features[184] <= 3.2159256619475434) {
                    classes[0] = 31; 
                    classes[1] = 23; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 7; 
                }
            } else {
                if (features[152] <= 4.7250101290294015) {
                    classes[0] = 4; 
                    classes[1] = 11; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 7; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[163] <= 2.007719918157775) {
            if (features[118] <= 2.319510127100865) {
                if (features[195] <= 1.1250019753933893) {
                    classes[0] = 75; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 21; 
                    classes[1] = 3; 
                }
            } else {
                if (features[54] <= 3.3551470070868485) {
                    classes[0] = 28; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[138] <= 2.571273812824522) {
                if (features[159] <= 3.863174775085959) {
                    classes[0] = 13; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 2; 
                }
            } else {
                if (features[124] <= 2.826849198353872) {
                    classes[0] = 9; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 19; 
                    classes[1] = 42; 
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