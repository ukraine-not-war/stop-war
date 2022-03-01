class NoWarUkraine {
    constructor(instance) {
        this.apiInstance = instance;
    }

    setModalContent(lang = 'en') {
        const linkStyles = "color:-webkit-link;cursor: pointer;text-decoration:none"
        switch (lang) {
            case 'ru':
                return `Россия начала полномасштабную войну с Украиной. <br>
                Они уже начали наступление на Украину, все крупные города под обстрелом, страдает мирное население. Пожалуйста, поддержите Украину!<br>
                ✅ ЧЕМ ВЫ МОЖЕТЕ ПОМОЧЬ? Самое главное, что вы можете сейчас сделать для Украины, это ПРОЧИТАТЬ и ПОДЕЛИТЬСЯ проверенной информацией о нападении России на Украину. <br>
                🔹 Президент Украины <br>
                Интернет: <a style=${linkStyles} href="https://www.president.gov.ua/en">https://www.president.gov.ua/en</a><br>
                Твиттер: <a style=${linkStyles} href="https://twitter.com/ZelenskyyUa">https://twitter.com/ZelenskyyUa</a> <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/zelenskiy.official">https://www.facebook.com/zelenskiy.official</a> <br>
                🔹 Официальные аккаунты Украины в социальных сетях <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/UkraineUA.MFA">https://www.facebook.com/UkraineUA.MFA</a> <br>
                Инстаграм: <a style=${linkStyles} href="https://www.instagram.com/ukraine.ua/">https://www.instagram.com/ukraine.ua/</a> <br>
                🔹 Посольство Украины в вашей стране (Интернет, Facebook и Twitter) <br>
                ✅Помогите защитить Украину — пожертвуйте в главный благотворительный фонд Украины — <a style=${linkStyles} href="https://savelife.in.ua/ru/donate/">https://savelife.in.ua/ru/donate/</a> <br>
                ✅ Помогите защитить Украину — пожертвуйте в фонд Национального банка Украины - <a style=${linkStyles} href="http://surl.li/blnsy">http://surl.li/blnsy</a> <br>
                
                ✅ Помогите Украине, разместив на своем сайте этот виджет <br>
                <a style=${linkStyles} href="https://github.com/ukraine-not-war/stop-war">https://github.com/ukraine-not-war/stop-war</a> <br>
                
               Будь с Украиной!`;
            case 'ua':
                return `Росія розпочала повномасштабну війну з Україною. <br>
                Вони вже почали атаку на Україну, усі великі міста під обстрілом, страждають мирні жителі. Будь ласка, будьте з Україною!<br>
                ✅ ЧИМ ВИ МОЖЕТЕ ДОПОМОГТИ? Найважливіше, що ви можете зробити для України зараз, — це ЧИТАТИ та ДІЛИТИСЯ перевіреною інформацією про напад Росії на Україну. <br>
                🔹 Президент України <br>
                Веб-сайт: <a style=${linkStyles} href="https://www.president.gov.ua/en">https://www.president.gov.ua/uk</a><br>
                Twitter: <a style=${linkStyles} href="https://twitter.com/ZelenskyyUa">https://twitter.com/ZelenskyyUa</a> <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/zelenskiy.official">https://www.facebook.com/zelenskiy.official</a> <br>
                🔹 Офіційні акаунти України в соціальних мережах <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/UkraineUA.MFA">https://www.facebook.com/UkraineUA.MFA</a> <br>
                Instagram: <a style=${linkStyles} href="https://www.instagram.com/ukraine.ua/">https://www.instagram.com/ukraine.ua/</a> <br>
                🔹 Посольство України у вашій країні (Web, Facebook та Twitter) <br>
                ✅Допоможіть захистити Україну — надішліть кошти до головного благодійного фонду України — <a style=${linkStyles} href="https://savelife.in.ua/donate/">https://savelife.in.ua/пожертвувати/</a> <br>
                ✅ Допоможіть захистити Україну — надішліть кошти до фонду Національного банку України - <a style=${linkStyles} href="http://surl.li/blnsy">http://surl.li/blnsy</a><br>
                ✅ Допоможіть Україні, розмістивши на своєму сайті цей віджет <br>
                <a style=${linkStyles} href="https://github.com/ukraine-not-war/stop-war">https://github.com/ukraine-not-war/stop-war</a > <br>
                Будьте з Україною!`;
            case 'es':
                return `Rusia ha empezado la invasión de Ucrania. <br>
                El ataque a Ucrania ya ha empezado, hay batallas en las grandes ciudades y civiles están sufriendo. ¡Por favor, apoya a Ucrania!<br>
                ✅ ¿COMO PUEDES AYUDAR? Lo más importante que puedes hacer es leer y compartir información verificada sobre el ataque de Rusia a Ucrania. <br>
                🔹 Presidente de Ucrania <br>
                Web: <a style=${linkStyles} href="https://www.president.gov.ua/en">https://www.president.gov.ua/en</a><br>
                Twitter: <a style=${linkStyles} href="https://twitter.com/ZelenskyyUa">https://twitter.com/ZelenskyyUa</a>  <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/zelenskiy.official">https://www.facebook.com/zelenskiy.official</a>  <br>
                🔹 Cuentas oficiales de Ucrania en las redes sociales <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/UkraineUA.MFA">https://www.facebook.com/UkraineUA.MFA</a>  <br>
                Instagram: <a style=${linkStyles} href="https://www.instagram.com/ukraine.ua/">https://www.instagram.com/ukraine.ua/</a> <br>
                
                🔹 Embajada de Ucrania en tu país (Web, Facebook & Twitter) <br>
                ✅ Ayuda a defender Ucrania — haz un donativo a una de las ONGs más conocidas del país — <a style=${linkStyles} href="https://savelife.in.ua/en/donate/">https://savelife.in.ua/en/donate/</a> <br>
                
                ✅ Ayuda a defender Ucrania — haz un donativo al fondo establecido por el Banco Central de Ucrania <a style=${linkStyles} href="http://surl.li/blnsy">http://surl.li/blnsy</a> <br>
                ✅ Instala este widget en tu página web <br>
                <a style=${linkStyles} href="https://github.com/ukraine-not-war/stop-war">https://github.com/ukraine-not-war/stop-war</a > <br>
                ¡Apoya Ucrania!`;
            case 'ca':
                return `Rússia ha començat la invasió d'Ucraïna. <br>
                L'atac a Ucraïna ha començat, hi ha batalles a les majors ciutats i la població civil està sufrint. Si us plau, dona suport a Ucraïna!<br>
                ✅ COM POTS AJUDAR? El més important és llegir i compartir informació verificada sobre l'atac de Rússia a Ucraïna. <br>
                🔹 President d'Ucraïna <br>
                Web: <a style=${linkStyles} href="https://www.president.gov.ua/en">https://www.president.gov.ua/en</a><br>
                Twitter: <a style=${linkStyles} href="https://twitter.com/ZelenskyyUa">https://twitter.com/ZelenskyyUa</a>  <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/zelenskiy.official">https://www.facebook.com/zelenskiy.official</a>  <br>
                🔹 Comptes oficials d'Ucraïna a les xarxes socials <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/UkraineUA.MFA">https://www.facebook.com/UkraineUA.MFA</a>  <br>
                Instagram: <a style=${linkStyles} href="https://www.instagram.com/ukraine.ua/">https://www.instagram.com/ukraine.ua/</a> <br>
                
                🔹 Embaixada d'Ucraïna al teu país (Web, Facebook & Twitter) <br>
                ✅ Ajuda a defensar Ucraïna — fes un donatiu a una de les ONGs més conegudes del país — <a style=${linkStyles} href="https://savelife.in.ua/en/donate/">https://savelife.in.ua/en/donate/</a> <br>
                
                ✅ Ajuda a defensar Ucraïna — fes un donatiu al fons establert pel Banc Central d'Ucraïna <a style=${linkStyles} href="http://surl.li/blnsy">http://surl.li/blnsy</a> <br>
                ✅ Instal·la aquest widget a la teva web <br>
                <a style=${linkStyles} href="https://github.com/ukraine-not-war/stop-war">https://github.com/ukraine-not-war/stop-war</a > <br>
                Dona suport a Ucraïna!`;
            default:
                return `Russia has started a full-scale war with Ukraine. <br>
                They have already began their attack on Ukraine, all major cities are under fire, civilians are suffering. Please, Stand with Ukraine!<br>
                ✅ HOW CAN YOU HELP? The most important thing you can do for Ukraine now is to READ and SHARE verified information about Russia’s attack on Ukraine. <br>
                🔹 President of Ukraine <br>
                Web: <a style=${linkStyles} href="https://www.president.gov.ua/en">https://www.president.gov.ua/en</a><br>
                Twitter: <a style=${linkStyles} href="https://twitter.com/ZelenskyyUa">https://twitter.com/ZelenskyyUa</a>  <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/zelenskiy.official">https://www.facebook.com/zelenskiy.official</a>  <br>
                🔹 Ukraine’s official social media accounts <br>
                Facebook: <a style=${linkStyles} href="https://www.facebook.com/UkraineUA.MFA">https://www.facebook.com/UkraineUA.MFA</a>  <br>
                Instagram: <a style=${linkStyles} href="https://www.instagram.com/ukraine.ua/">https://www.instagram.com/ukraine.ua/</a> <br>
                
                🔹 Embassy of Ukraine in your country (Web, Facebook & Twitter) <br>
                ✅ Help to defend Ukraine — donate to Ukraine’s main charity fund — <a style=${linkStyles} href="https://savelife.in.ua/en/donate/">https://savelife.in.ua/en/donate/</a> <br>
                
                ✅ Help to defend Ukraine — donate to the fund of the National Bank of Ukraine <a style=${linkStyles} href="http://surl.li/blnsy">http://surl.li/blnsy</a> <br>
                ✅ Help Ukraine by placing this widget on your website <br>
                <a style=${linkStyles} href="https://github.com/ukraine-not-war/stop-war">https://github.com/ukraine-not-war/stop-war</a > <br>
                Stand With Ukraine!`;
        }
    }

    init(lang='en') {
        const button = document.createElement('img');
        const modal = document.createElement('div');
        const id = 'no-war-ukraine' + Date.now();
        button.setAttribute('id', 'button-' + id);
        button.setAttribute('src', 'https://ukraine-not-war.github.io/stop-war/images/stop_war.svg');
        modal.setAttribute('id', 'modal-' + id);
        document.body.prepend(button);
        document.body.prepend(modal);
        button.style.cssText = 'position:fixed;top:100px;right:-12px;z-index:1000;width:100px;height:80px;cursor:pointer';
        // button.innerHTML = `<div>Nest</div>`;
        modal.style.cssText = 'display: none;position: fixed;z-index: 1001;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.7)';
        modal.innerHTML = ` 
         <!-- Modal content -->
          <p style="background-color: #fefefe;
          margin: auto;
          border-radius:10px;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          font-size: 14px;
          max-width: 600px;
          word-break: break-word;
          max-height: 90%;
          font-family:Garamond, Sans-serif;">
            <span id="close-modal-${id}" style="color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          overflow-y:scroll;">&times;</span>
        ${this.setModalContent(lang)}
          </p>`;
        button.addEventListener('click', function () {
            modal.querySelector("#close-modal-" + id).addEventListener('click', _ => modal.style.display = "none");
            modal.style.display = "block";
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })
    }
}

/**
 * Основной класс Api
 */
class Api {
    init(lang='en') {
        const widget = new NoWarUkraine(this);
        widget.init(lang);
        return widget;
    }

    /**
     * Запуск колбеков инициализации
     */
    runInitCallbacks() {
        let myCompanyApiInitCallbacks = window.myCompanyApiInitCallbacks;
        if (myCompanyApiInitCallbacks && myCompanyApiInitCallbacks.length) {
            setTimeout(function () {
                let callback;
                while (callback = myCompanyApiInitCallbacks.shift()) {
                    try {
                        callback();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }, 0);
        }
    }
}

/**
 * Инициализация Api
 */
if (typeof (window)['myCompanyApi'] === 'undefined') {
    (window).myCompanyApi = new Api();
    (window).myCompanyApi.runInitCallbacks();
}
