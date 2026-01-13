function validaDireccionIP(ipstr){
    let patronIP=/^(((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))$/;
    return patronIP.test(ipstr);
}