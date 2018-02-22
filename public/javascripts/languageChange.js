function get_cookie (cookie_name) {
     var cookie_string = document.cookie ;
     if (cookie_string.length != 0) {
          var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
          return decodeURIComponent ( cookie_value[2] ) ;
     }
     return '' ;
}

function set_cookie(name, value) {
     document.cookie = name + '=' + value;
}

function changeLanguage() {
     lang = get_cookie('lang');
     if (lang.localeCompare('') == 0 || lang.localeCompare('en') == 0)
          set_cookie("lang", "es");
     else
          set_cookie("lang", "en");
     return;
}
