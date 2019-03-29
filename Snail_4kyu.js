snail = (array) => {
    let newArray = [];
    const revFunct = (array) => {
        newArray = newArray.concat(array[0].slice(0));
        array.splice(0, 1);

        if (array.length > 0) {
            for(let i = 0; i<array.length;i++) {
                newArray.push(array[i][array[i].length-1]);
            }

            for(let i = 0; i<array.length;i++) {
                array[i].splice(-1, 1);
            }

            for(let i=array[array.length-1].length-1; i>=0; i--) {

                newArray.push(array[array.length-1][i]);
            }

            array.splice(-1, 1);

            for(let i = array.length -1; i>= 0;i--) {
                newArray.push(array[i][0]);
            }

            for(let i = 0; i<array.length;i++) {
                array[i].splice(0, 1);
            }

            if (array.length !== 0) {
                revFunct(array);
            } else {
                return;
            }
        }
    };

    revFunct(array);

    return newArray;
};