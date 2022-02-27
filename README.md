## How to install
You should include next code to the end of the tag body.
If you need multiple language widget you should replace 'en' in ... ```myCompanyApi.init('en');``` ... to site language. Now available english (en), ukrainian ('ua') and russian ('ru') languages.

## Как установить
Вы должны включить следующий код в конец тега body.
Если вам нужен мультиязычный виджет, вы должны заменить 'en' в ... ```myCompanyApi.init('en');``` ... на язык сайта. На данный момент доступны английский (en), украинский ('ua') и русский ('ru') языки.

## Як встановити
Вам необхідно додати наступний код перед закінченням тегу body.
Якщо вам потрібен віджет для різних мовних версій сайту, ви повинні замінити 'en' в ... ```myCompanyApi.init('en');``` ... на мову сайту. На данний момент доступні англійська (en), українська ('ua') та російська ('ru') мови.
```<script src="https://ukraine-not-war.github.io/stop-war/js/widget.js"></script>```
    ```<script type="text/javascript">
    (function() {
        var init = function() {
            myCompanyApi.init('en');
        };
        if (typeof myCompanyApi !== 'undefined') {
            init();
        } else {
            (myCompanyApiInitCallbacks = window.myCompanyApiInitCallbacks || []).push(init);
        }
    })();
</script>```
