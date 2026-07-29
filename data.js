function cookieGet(_key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        item = item.replace(' ', '');

        var dic = item.split('=');

        if (_key === dic[0]) {
            result = dic[1];
            return '';
        }
    });
    return result;
}
function cookieSet(_key, _value) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1);
    document.cookie = _key + "=" + escape(_value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function cookieReset(_key, _value) {
    if ( cookieGet(_key) == null ) {
        cookieSet(_key, _value)
    }
    return cookieGet(_key);
}


function link(_type, _num) {
    return "https://eocnd1116.github.io/qhtjrFont/index.html?type="+(_type).toString()+"&n="+(_num).toString();
}
