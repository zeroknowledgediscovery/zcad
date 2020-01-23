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
        
        if (features[131] <= 2.9656283976350113) {
            if (features[143] <= 3.1739601018717325) {
                if (features[140] <= 1.9088222099974854) {
                    classes[0] = 71; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 48; 
                    classes[1] = 8; 
                }
            } else {
                if (features[3] <= 3.4043769670670745) {
                    classes[0] = 3; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[191] <= 2.532761606170219) {
                if (features[82] <= 1.4212669713521688) {
                    classes[0] = 4; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 0; 
                }
            } else {
                if (features[98] <= 3.033879130628835) {
                    classes[0] = 16; 
                    classes[1] = 18; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 34; 
                }
            }
        }
        // return findMax(classes);
        return findProb(classes);
    
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[152] <= 2.1136509334266425) {
            if (features[194] <= 1.046652684009938) {
                if (features[69] <= 2.7361400079616063) {
                    classes[0] = 56; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 1; 
                }
            } else {
                if (features[208] <= 4.111572550196001) {
                    classes[0] = 56; 
                    classes[1] = 10; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[170] <= 2.0292303599553323) {
                if (features[49] <= 3.256779736958807) {
                    classes[0] = 13; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 4; 
                }
            } else {
                if (features[129] <= 3.348843273869177) {
                    classes[0] = 15; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 36; 
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