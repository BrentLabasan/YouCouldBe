export default function () {
    const URL = window.location.hostname;
    const MULTIPLIER = 5;

    // console.log(URL);

    chrome.storage.sync.get(URL, (db) => {
        console.log(db);
        console.log("window.location.hostname " + window.location.hostname);

        if (!db[URL]) {
            db[URL] = {};
        }

        // if this date has been logged as false
        // then set all domain's counts  to 0, and set the date's boolean to true
        var d = new Date();
        let date = "" + d.getFullYear() + d.getMonth() + d.getDate();
        // console.log("date " + date);

        // if (!db[URL]) {
        //     db[URL] = {};
        // }

        if (!db[URL][date]) {
            db[URL][date] = true;
            db[URL]["count"] = null;
        }

        if (!db[URL]["count"]) {
            db[URL]["count"] = 0;
        }
        db[URL]["count"]++;

        chrome.storage.sync.set(db);

        // console.log(db);

        const DEFAULT_WHITELIST = [
            'developer.chrome.com',
            'www.google.com',
            'gmail.com',
            'www.gamefaqs.com',
            'news.ycombinator.com',
            'github.com',
            'stackoverflow.com',
            'api.jquery.com',
            'www.material-ui.com',
            'www.w3schools.com',
            'developer.mozilla.org',
            'www.namecheap.com'
        ];

        if (
            DEFAULT_WHITELIST.includes(window.location.hostname) ||
            db[URL]["count"] <= COUNT_IGNORE
        ) {
            console.log("SKIP");
            console.log(db[URL]["count"]);
            console.log(COUNT_IGNORE);

            return;
        }



        console.log("YCB: This domain has been visited " + db[URL]["count"] + " today.");
        let timer = db[URL]["count"];
        var div = document.createElement("div");
        div.id = "ycb-blocker";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "9999998";
        div.style.color = "#BDF25D";
        div.style.backgroundColor = "#171833";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left = "0";

        // div.appendChild(elTimer);

        document.body.appendChild(div); // attaches view-blocker to <body>

        var alt1 = LIST_CAREER[Math.floor(Math.random() * LIST_CAREER.length)];


        var main = document.createElement("div");
        main.id = "main";
        div.appendChild(main);
        $("#main").html("<link href='https://fonts.googleapis.com/css?family=Ubuntu+Condensed' rel='stylesheet'><h1><span id='root'></span>You Could Be&trade;</h1><span id='alternative'><a href='" + alt1.url + "' target='_blank'>" + alt1.name + "</a></span><br/><span class='regular'>instead of wasting your life on</span><br/><span class='regular'>" + URL + " for the " + getGetOrdinal(timer) + " time today.</span><br/><br/><br/><br/><p>You'll be taken to the site in <span id='elTimer'></span> seconds. In the meantime, why not use that time to do something more productive?</p><br/><br/><br/><footer id='ycb-footer'><ul><li><button>ALTERNATIVES</button></li><li class='btnOptionsView'><button>OPTIONS</button></li><li><button>HELP</button></li><li><button>ABOUT</button></li><li><button>DONATE</button></li></ul></footer>");

        var t = document.createTextNode(timer);
        // var elTimer = document.createElement("span");
        // elTimer.id = "elTimer";
        elTimer.appendChild(t);

        $(".btnOptionsView").click(function () {
            document.getElementById("optionsScreen").style.visibility = "visible";
        });

        // console.log(timer);

        setTimeout(function(){
            div.style.visibility = "hidden";
        }, timer * 1000 * MULTIPLIER);

        let countdownTime = timer * MULTIPLIER;


        var interval = setInterval(function(){
            console.log("countdownTime " + countdownTime);
            if (countdownTime === 0) {
                clearInterval(interval);
            }
            var audio = new Audio();

            document.getElementById("elTimer").innerHTML = --countdownTime;

            if (countdownTime % 10 === 0) {
                audio.src = chrome.extension.getURL('tick2.mp3');
                audio.play();
            } else {
                audio.src = chrome.extension.getURL('tick.mp3');
                audio.play();
            }
        }, 1000);

        setTimeout(function(){
            div.style.visibility = "visible";
        },5000);



    });
}
