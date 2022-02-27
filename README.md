## Widget
![widget](https://user-images.githubusercontent.com/669491/155887523-e32959dc-db97-44e7-89c6-aeb07e8689a3.svg)
![widget2](https://user-images.githubusercontent.com/669491/155887594-9abe850d-7ce7-46af-b9ae-4e72b4c4e207.jpg)


## How to install
You should include next code to the end of the tag body:

```html
<script src="https://ukraine-not-war.github.io/stop-war/js/widget.js"></script>
<script type="text/javascript">
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
</script>
```

If you need multiple language widget you should replace 'en' in ... ```myCompanyApi.init('en');``` ... to site language. Now available english (en), ukrainian ('ua') and russian ('ru') languages.

## Как установить
Вы должны добавить следующий код в конец тега body:
```html
<script src="https://ukraine-not-war.github.io/stop-war/js/widget.js"></script>
<script type="text/javascript">
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
</script>
```

Если вам нужен мультиязычный виджет, вы должны заменить 'en' в ... ```myCompanyApi.init('en');``` ... на язык сайта. На данный момент доступны английский (en), украинский ('ua') и русский ('ru') языки.

## Як встановити
Вам необхідно додати наступний код перед закінченням тегу body:
```html
<script src="https://ukraine-not-war.github.io/stop-war/js/widget.js"></script>
<script type="text/javascript">
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
</script>
```

Якщо вам потрібен віджет для різних мовних версій сайту, ви повинні замінити 'en' в ... ```myCompanyApi.init('en');``` ... на мову сайту. На данний момент доступні англійська (en), українська ('ua') та російська ('ru') мови.
