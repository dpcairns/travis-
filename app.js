export const mapArray = (someArray) => {
    if (!someArray) throw new Error('you need an array');
    const localArray = [];
    someArray.forEach(item => {
        // make an new thing out of the old thing
        const newObject = {
            name: item[0], // tony
            type: item[1], // dog
        };

        // push that new thing into newArray
        localArray.push(newObject);
    });

    return localArray;
};

