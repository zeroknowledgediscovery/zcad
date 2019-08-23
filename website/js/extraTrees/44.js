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
        
        if (features[176] <= 3.3520356311239468) {
            if (features[154] <= 2.9682462857888297) {
                if (features[146] <= 1.0611549285525246) {
                    classes[0] = 60; 
                    classes[1] = 1; 
                } else {
                    classes[0] = 72; 
                    classes[1] = 13; 
                }
            } else {
                if (features[185] <= 2.9408431737408245) {
                    classes[0] = 19; 
                    classes[1] = 6; 
                } else {
                    classes[0] = 8; 
                    classes[1] = 14; 
                }
            }
        } else {
            if (features[151] <= 4.736259162303181) {
                if (features[57] <= 4.140605957778453) {
                    classes[0] = 4; 
                    classes[1] = 8; 
                } else {
                    classes[0] = 1; 
                    classes[1] = 19; 
                }
            } else {
                if (features[25] <= 3.352822035715367) {
                    classes[0] = 2; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(2);
        
        if (features[95] <= 3.053815766262736) {
            if (features[123] <= 3.572416281128496) {
                if (features[87] <= 1.5529887399417297) {
                    classes[0] = 79; 
                    classes[1] = 2; 
                } else {
                    classes[0] = 47; 
                    classes[1] = 10; 
                }
            } else {
                if (features[57] <= 4.292283272041139) {
                    classes[0] = 15; 
                    classes[1] = 5; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 3; 
                }
            }
        } else {
            if (features[164] <= 2.5613709197199768) {
                if (features[78] <= 3.8992455722294963) {
                    classes[0] = 6; 
                    classes[1] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 3; 
                }
            } else {
                if (features[97] <= 4.9060989021817685) {
                    classes[0] = 10; 
                    classes[1] = 34; 
                } else {
                    classes[0] = 5; 
                    classes[1] = 5; 
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