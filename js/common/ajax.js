function ajax(opts) {
    var def = {
        type: 'get',
        async: 'true',
        success: null,
        error: null
    }
    var settings = Object.assign({}, def, opts);
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                settings.success && settings.success(xhr.responseText);

            } else {
                settings.error && settings.error();
            }
        }
    }
    if (settings.type === 'get') {
        xhr.open('get', settings.url + "?" + settings.data + '?_=' + Math.random(), settings.async);
        xhr.send();
    } else {
        xhr.open('post', settings.url, settings.async);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(settings.data);
    }
    return ajax
}