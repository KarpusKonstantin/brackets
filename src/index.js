module.exports = function check(str, bracketsConfig) {

    function getBracketsArray (config) {
       // console.log(config);
        return config.map(function(item) {
         //   console.log(item.join(''));
            return item.join('');
        });
    }

    let bracketsArray = getBracketsArray(bracketsConfig);

   // console.log(str, bracketsArray);

    for (let i = 0; i < bracketsArray.length;) {
        if (str.indexOf(bracketsArray[i]) !== -1) {
            str = str.replace(bracketsArray[i], '');
      //      console.log(str);
            i = 0;
        } else i++;
    };

    return !str;

}
