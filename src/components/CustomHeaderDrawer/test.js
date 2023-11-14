function set(key, data){
    if(window.hasOwnProperty('localStorage')){
        window.localStorage.setItem(key,data)
    }
}