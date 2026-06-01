function ispalindrom(str){
    let rev = str.split("").reverse().join("");
    return console.log(rev == str);
}
ispalindrom("malayali")