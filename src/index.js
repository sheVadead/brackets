module.exports = function check (str, bracketsConfig) {
    const res = [];
    const brackets = Object.fromEntries(bracketsConfig);
    debugger
    for (const el of str.split``) {
        if (res[0] === el) {
            res.shift();
        } else if (brackets[el]) {
            res.unshift(brackets[el]);
        } else {
            return false;
        }
    }

    return res.length === 0;
}