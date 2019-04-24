/**
 * Example JSDoc.
 *
 * @param {string} any description.
 * @returns {string} Return value.
 */
const atom = {
    value: 1,

    addValue(value) {
        return atom.value + value;
    },
};

const someStack = [];
someStack.push('abracadabra');

for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
}

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr = Array.from(arrLike);

inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    }

    return false;
});
