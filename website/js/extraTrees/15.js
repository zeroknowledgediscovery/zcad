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
        
        if (features[144] <= 2.735400810248871) {
            if (features[32] <= 2.204302380422271) {
                if (features[165] <= 1.9747342569635875) {
                    classes[0] = 55; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 29; 
                    classes[1] = 3; 
                }
            } else {
                if (features[33] <= 1.4576379938319501) {
                    classes[0] = 3; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[199] <= 3.3609419829961573) {
                if (features[72] <= 3.866165555485601) {
                    classes[0] = 31; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 7; 
                    classes[1] = 13; 
                }
            } else {
                if (features[111] <= 4.991013633083092) {
                    classes[0] = 8; 
                    classes[1] = 35; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 1; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[170] <= 2.0538378185843293) {
            if (features[12] <= 2.4852355706902385) {
                if (features[101] <= 1.2802180872672322) {
                    classes[0] = 55; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 47; 
                    classes[1] = 4; 
                }
            } else {
                if (features[157] <= 2.3303812338646415) {
                    classes[0] = 20; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 8; 
                }
            }
        } else {
            if (features[152] <= 3.4897198148489554) {
                if (features[94] <= 2.5170304395803393) {
                    classes[0] = 13; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 12; 
                    classes[1] = 13; 
                }
            } else {
                if (features[159] <= 2.571346751214632) {
                    classes[0] = 4; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 3; 
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