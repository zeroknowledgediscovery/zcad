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
        
        if (features[207] <= 2.764019246103251) {
            if (features[50] <= 3.842356292923147) {
                if (features[50] <= 1.896867579266833) {
                    classes[0] = 96; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 33; 
                    classes[1] = 8; 
                }
            } else {
                if (features[1] <= 1.6485955457429382) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                }
            }
        } else {
            if (features[0] <= 3.1340222256882218) {
                if (features[208] <= 3.045515063239967) {
                    classes[0] = 13; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 7; 
                }
            } else {
                if (features[146] <= 2.565072462691494) {
                    classes[0] = 7; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 9; 
                    classes[1] = 33; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[191] <= 2.499043390852885) {
            if (features[195] <= 2.8086492781567616) {
                if (features[19] <= 2.732423554050002) {
                    classes[0] = 113; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 4; 
                }
            } else {
                if (features[190] <= 1.2942468907191635) {
                    classes[0] = 0; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 1; 
                }
            }
        } else {
            if (features[94] <= 2.390612576804409) {
                if (features[95] <= 3.6725160845893043) {
                    classes[0] = 19; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 8; 
                }
            } else {
                if (features[95] <= 2.926682173240316) {
                    classes[0] = 8; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 13; 
                    classes[1] = 33; 
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