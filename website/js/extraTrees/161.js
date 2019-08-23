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
        
        if (features[130] <= 2.8908584797246655) {
            if (features[174] <= 1.8509987135655241) {
                classes[0] = 64; 
                classes[1] = 0; 
            } else {
                if (features[166] <= 1.4499270852887665) {
                    classes[0] = 22; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 26; 
                    classes[1] = 9; 
                }
            }
        } else {
            if (features[208] <= 2.865488571052201) {
                if (features[57] <= 1.3622721435326488) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 32; 
                    classes[1] = 6; 
                }
            } else {
                if (features[135] <= 2.9101653247653347) {
                    classes[0] = 7; 
                    classes[1] = 7; 
                } else {
                    classes[0] = 14; 
                    classes[1] = 40; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[194] <= 2.7354044158642203) {
            if (features[183] <= 1.286847838799864) {
                if (features[49] <= 2.354119911954794) {
                    classes[0] = 67; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 28; 
                    classes[1] = 6; 
                }
            } else {
                if (features[134] <= 2.8653976939923123) {
                    classes[0] = 29; 
                    classes[1] = 3; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 5; 
                }
            }
        } else {
            if (features[184] <= 2.891749830400455) {
                if (features[4] <= 2.939864184213739) {
                    classes[0] = 15; 
                    classes[1] = 4; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 3; 
                }
            } else {
                if (features[168] <= 4.9864894300636315) {
                    classes[0] = 19; 
                    classes[1] = 30; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 12; 
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