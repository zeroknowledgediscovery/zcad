var ExtraTreesClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[106] <= 2.93183844207406) {
            if (features[123] <= 2.543546544175384) {
                classes[0] = 69; 
                classes[1] = 0; 
            } else {
                if (features[173] <= 1.340142285609684) {
                    classes[0] = 14; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 27; 
                    classes[1] = 14; 
                }
            }
        } else {
            if (features[184] <= 1.0080986353606445) {
                if (features[16] <= 2.6666815623951523) {
                    classes[0] = 14; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 6; 
                    classes[1] = 4; 
                }
            } else {
                if (features[200] <= 4.098079669800624) {
                    classes[0] = 28; 
                    classes[1] = 39; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 13; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[181] <= 2.4226660343923916) {
            if (features[143] <= 2.8476234995050467) {
                if (features[47] <= 3.667687377272028) {
                    classes[0] = 98; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 1; 
                }
            } else {
                if (features[180] <= 2.9346055527844492) {
                    classes[0] = 35; 
                    classes[1] = 13; 
                } else {
                    classes[0] = 11; 
                    classes[1] = 19; 
                }
            }
        } else {
            if (features[188] <= 1.9399909986834931) {
                if (features[208] <= 4.218127624698974) {
                    classes[0] = 5; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                }
            } else {
                if (features[129] <= 1.32180980421687) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 27; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    this.predict = function(features) {
        var classes = new Array(2).fill(0);
        for (var i = 0; i < trees.length; i++) {
            classes[trees[i](features)]++;
        }
        return findMax(classes);
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