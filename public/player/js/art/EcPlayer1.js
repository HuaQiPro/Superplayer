let PlayEr = {
    "svg":{
        'close':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>',
        'left':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>',
        'next':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M735.41818133 554.20121173L288.58181867 814.85575787c-32.27151467 19.85939413-74.47272747-4.964848-74.47272747-42.2012128v-521.30909014c0-37.23636373 42.20121173-62.06060587 74.47272747-42.2012128l446.83636266 260.65454614c32.27151467 17.3769696 32.27151467 67.02545493 0 84.40242346z"></path><path d="M809.8909088 695.69939413c0 34.7539392-32.27151467 64.5430304-74.47272747 64.5430304s-74.47272747-29.7890912-74.4727264-64.5430304V328.30060587c0-34.7539392 32.27151467-64.5430304 74.4727264-64.5430304s74.47272747 29.7890912 74.47272747 64.5430304v367.39878826z"></path></svg>',
        'reb':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1007.4674 42.036669c-12.751909-12.751909-38.255728-12.751909-51.007638 0l-95.63932 95.63932c-57.383592-57.383592-133.895048-95.63932-210.406505-121.143139C376.247886-53.602651 95.70588 105.796216 19.194424 373.586313c-76.511456 274.166051 82.887411 554.708057 350.677507 631.219513 274.166051 76.511456 554.708057-82.887411 631.219514-350.677507 12.751909-38.255728-12.751909-76.511456-51.007638-89.263366s-76.511456 12.751909-89.263365 51.007637c-25.503819 89.263366-89.263366 165.774822-165.774822 216.78246-172.150776 102.015275-395.30919 38.255728-497.324465-133.895049-82.887411-140.271003-63.759547-312.421779 44.631683-433.564918 133.895048-146.646958 369.805371-159.398867 516.452329-19.127864l-114.767184 114.767184c-6.375955 6.375955-6.375955 12.751909-6.375955 19.127864 0 19.127864 19.127864 38.255728 38.255728 38.255728h312.42178c12.751909 0 31.879773-12.751909 31.879773-31.879773V67.540488c0-6.375955-6.375955-12.751909-12.751909-25.503819z"></path></svg>',
        'change':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z"></path></svg>',
        'lock':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m128-288H384V320c0-70.4 57.6-128 128-128s128 57.6 128 128v128z"></path></svg>',
        'open':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z"></path></svg>',
        'pip':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M849.5 174.5a37.50000029 37.50000029 0 0 1 37.50000029 37.50000029v262.49999942h-75.00000058V249.49999971H212.00000029v525.00000058h225v74.99999971H174.5a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029V212.00000029a37.50000029 37.50000029 0 0 1 37.50000029-37.50000029h675z m0 375.00000029a37.50000029 37.50000029 0 0 1 37.50000029 37.49999942v225a37.50000029 37.50000029 0 0 1-37.50000029 37.50000029h-299.99999971a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029v-225a37.50000029 37.50000029 0 0 1 37.50000029-37.49999942h299.99999971z"></path></svg>',
        'dm':'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M833.94335938 148.30859375H190.05664062c-39.28710938 0-71.19140625 31.90429688-71.19140624 71.19140625V689.5390625c0 39.28710938 31.90429688 71.19140625 71.19140625 71.19140625h169.45312499l131.13281251 107.05078125c6.50390625 5.2734375 14.32617188 7.91015625 22.23632812 7.91015625 7.82226563 0 15.73242188-2.63671875 22.1484375-7.91015625l131.8359375-107.05078125h166.9921875c39.28710938 0 71.19140625-31.90429688 71.19140625-71.19140625V219.5c0.08789063-39.28710938-31.90429688-71.19140625-71.10351563-71.19140625z m0.87890624 541.23046875c0 0.43945313-0.43945313 0.87890625-0.87890625 0.87890625H654.47070313c-8.0859375 0-15.90820313 2.8125-22.14843751 7.91015625L512.96679688 795.18359375 394.31445312 698.328125c-6.24023438-5.09765625-14.15039063-7.91015625-22.23632812-7.91015625H190.05664062c-0.43945313 0-0.87890625-0.43945313-0.87890624-0.87890625V219.5c0-0.43945313 0.43945313-0.87890625 0.87890625-0.87890625h643.79882812c0.43945313 0 0.87890625 0.43945313 0.87890625 0.87890625V689.5390625z"></path><path d="M345.09570312 455.3984375m-43.94531249 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z"></path><path d="M512.96679688 455.3984375m-43.9453125 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z"></path><path d="M681.01367188 455.3984375m-43.94531251 0a43.9453125 43.9453125 0 1 0 87.89062501 0 43.9453125 43.9453125 0 1 0-87.890625 0Z"></path></svg>',
        'content':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>',
    },
    "secondToTime" : function(second){
        const add0 = (num) => (num < 10 ? `0${num}` : String(num));
        const hour = Math.floor(second / 3600);
        const min = Math.floor((second - hour * 3600) / 60);
        const sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
    },
    "group":function(s){
        let group = PlayEr.empty(ConFig['MesData']["group"]) ? "游客":ConFig['MesData']["group"],
            userTxt = s,
            userArr = userTxt.split(',');
        return userArr.indexOf(group);
    },
    "countDown":function(u,t){
        let v_time = Math.round($(t).text());
        let interval = setInterval(function(){
            let time = --v_time;
            if(time <= 0) {
                clearInterval(interval);
                u();
            }
            $(t).text(time);
        }, 1000);
    },
    "empty":function(s){
        return s == null || s === '';
    },
    "cookie":{
        'Set': function(name,value,days=7,type='1'){
            if(type === '1'){
                localStorage.setItem(name, value);
            }else{
                let exp = new Date();
                exp.setTime(exp.getTime() + days*24*60*60*1000);
                document.cookie=name+"="+encodeURIComponent(value)+";path=/;expires="+exp.toUTCString();
            }
        },
        'Get': function(name,type='1'){
            if(type === '1'){
                return localStorage.getItem(name);
            }else{
                let arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
                if(arr != null){ return decodeURIComponent(arr[2]); }
            }
        },
        'Del': function(name,type='1'){
            if(type === '1'){
                localStorage.removeItem(name);
            }else{
                let exp = new Date();
                exp.setTime(exp.getTime()-1);
                let cvAl = this.Get(name,ConFig['config']['rm']);
                if(cvAl != null){ document.cookie = name+"="+encodeURIComponent(cvAl)+";path=/;expires="+exp.toUTCString(); }
            }
        }
    },
    "GetRequest":function(){
        let url = decodeURI(location.search),theRequest = {};
        if (url.indexOf("?") !== -1) {
            let str = url.substr(1),s = str.split("&");
            for (let i = 0; i < s.length; i++) {
                theRequest[s[i].split("=")[0]] = decodeURI(s[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    "mes":function(e){
        let s = sessionStorage.getItem("MesData"),g = PlayEr.GetRequest();
        if(!PlayEr.empty(e)){
            ConFig["MesData"] = e;
            sessionStorage.removeItem("list");
            console.log("参数来自跨域传递");
        }else if(!PlayEr.empty(s) && PlayEr.empty(e)){
            ConFig["MesData"] = JSON.parse(s);
            console.log("参数来自本地存储");
        }else {
            ConFig["MesData"] = g;
            console.log("参数来自url传参");
        }
        if(!PlayEr.empty(g["nid"])){
            ConFig["MesData"]["nid"] = g["nid"];
        }
        if(!PlayEr.empty(g["sid"])){
            ConFig["MesData"]["sid"] = g["sid"];
        }
        if(!PlayEr.empty(g["id"])){
            ConFig["MesData"]["id"] = g["id"];
        }
        if(!PlayEr.empty(g["api"])){
            ConFig["MesData"]["api"] = g["api"];
        }
        if(!PlayEr.empty(g["name"])){
            ConFig["MesData"]["name"] = g["name"];
        }

        let list = sessionStorage.getItem("list");
        if(!PlayEr.empty(list) && !PlayEr.empty(ConFig["MesData"]["sid"])){
            let listData =  JSON.parse(list);
            let data = listData["url"][(Number(ConFig["MesData"]["sid"])-1)]["url"];
            let next = data[ConFig["MesData"]["nid"]];

            if(!PlayEr.empty(ConFig["MesData"]["nid"])){
                ConFig["MesData"]["name"] = listData["name"]+"-"+data[Number(ConFig["MesData"]["nid"])-1]["name"];
            }
            if(!PlayEr.empty(next)){
                ConFig["MesData"]["next"] = next["url"];
            }else{
                ConFig["MesData"]["next"] = "";
            }
        }else{
            PlayEr.list.api2();
        }

        sessionStorage.setItem("MesData",JSON.stringify(ConFig["MesData"]));
        PlayEr.Init();
    },
    "type":function(s){
        let t = "mp4";
        switch (ConFig['type']) {
            case 'auto':
                if (/.flv(#|\?|$)/i.exec(s)) {
                    t = 'flv';
                } else if (/m3u8(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.php(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.css(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                } else if (/.png(#|\?|$)/i.exec(s)) {
                    t = 'm3u8';
                }
                break;
            case 'm3u8':
                t = "m3u8";
                break;
            case 'flv':
                t = "flv";
                break;
            case 'hls':
                t = "hls";
                break;
        }
        return t;
    },
    "play": function(){
        let playData = {
            container: '#player',
            contextmenu: [],
            autoplay:false
        },art = ConFig['config']['art'];
        if(art["isLive"] === '1'){
            playData["isLive"] = true;
        }
        if(art["autoplay"] === '1'){
            playData["autoplay"] = true;
        }
        if(art["muted"] === '1'){
            playData["muted"] = true;
        }
        if(art["autoSize"] === '1'){
            playData["autoSize"] = true;
        }
        if(art["playbackRate"] === '1'){
            playData["playbackRate"] = true;
        }
        if(art["aspectRatio"] === '1'){
            playData["aspectRatio"] = true;
        }
        if(art["screenshot"] === '1'){
            playData["screenshot"] = true;
        }
        if(art["hotkey"] === '0'){
            playData["hotkey"] = false;
        }
        if(art["pip"] === '1'){
            playData["pip"] = true;
        }
        if(art["fullscreen"] === '1'){
            playData["fullscreen"] = true;
        }
        if(art["miniProgressBar"] === '1'){
            playData["miniProgressBar"] = true;
        }
        if(art["lock"] === '1'){
            playData["lock"] = true;
        }
        if(art["fastForward"] === '1'){
            playData["fastForward"] = true;
        }
        if(art["airplay"] === '1'){
            playData["airplay"] = true;
        }
        if(ConFig['config']['autoOrientation'] === '1'){
            playData["autoOrientation"] = true;
        }
        let u=PlayEr.ad.uic(ConFig['url']),t = PlayEr.type(u);
        playData["lang"] =  art["lang"];
        playData["theme"] = ConFig['config']['gx']['color'];
        playData["volume"] =  Number(art["volume"]);
        playData["setting"] = true;
        playData["url"] = u;
        if(t === 'flv') {
            $("title").after('<script src="../player/js/flv.min.js"></script>');
            playData["type"] = 'flv';
            playData["customType"]={
                flv: function playFlv(video, url, art) {
                    if (flvjs.isSupported()) {
                        const flv = flvjs.createPlayer({ type: 'flv', url });
                        flv.attachMediaElement(video);
                        flv.load();
                        art.flv = flv;
                        art.once('url', () => flv.destroy());
                        art.once('destroy', () => flv.destroy());
                    } else {
                        art.notice.show = 'Unsupported playback format: flv';
                    }
                }
            }
        }else if(t === 'm3u8' || t === 'hls'){
            $("title").after('<script src="../player/js/hls.min.js"></script>');
            playData["type"] = 'm3u8';
            playData["customType"]={
                m3u8: function playM3u8(video, url, art) {
                    if (Hls.isSupported()) {
                        const hls = new Hls();
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        art.hls = hls;
                        art.once('url', () => hls.destroy());
                        art.once('destroy', () => hls.destroy());
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = url;
                    } else {
                        art.notice.show = 'Unsupported playback format: m3u8';
                    }
                }
            }
        }
        let contextmenu = art["contextmenu"].split('#');
        let data = [];
        for (let i=0; i<contextmenu.length; i++) {
            let t = contextmenu[i].split('$');
            data.push({
                name: t[0],
                html: t[0],
                click: function () {
                    window.open(t[1]);
                    art.contextmenu.show = false;
                },
            },)
        }
        playData["contextmenu"][0] = data;

        PlayEr.void = new Artplayer(playData)
    },
    "Init":function(){
        let html = PlayEr.tips.default();
        if(html.length > 10){
            box.html('<div class="bj bj-1" style="background-image:url('+ConFig['tips']['bj']+');"></div><div class="tips-box"></div>');
            $(".tips-box").html(html);
        }else{
            if(PlayEr.empty(ConFig['config']['ads']['user'])){
                PlayEr.load();
            }else{
                PlayEr.ad.Action();
            }
        }
        console.log(
            "\n" +
            " %c 超级播放器® %c Q"+"Q6"+"02"+"5"+"24"+"9"+"50 " +
            "\n",
            "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;",
            "background: #fadfa3; padding:5px 0; font-size:18px;"
        );
    },
    "load" : function(){
        PlayEr.play();
        let color = ConFig['config']['gx']['color'],css = '.s-on svg circle,.s-on svg path{fill:'+color+'!important}.t-color{color:'+color+'}.t-bj{background-color:'+color+'}.ec-subtitle p{'+ConFig["config"]["zm_style"]+'}'+PlayEr.header.logoCss()+'@media (max-width: 767px){.player-logo{width:'+ConFig['config']['gx']['wap_logo_width']+'}}';
        $("head").append('<style>'+css+'</style>');
        box.children().append('<div class="lock-box"></div><div class="ec-danMa text"><div class="ec-danMa-item ec-danMa-item--demo"></div></div><div class="ec-subtitle"></div><div class="header ease flex between"><div class="player-title"></div><div class="flex qoe-normal" style="display:none"><div class="kui-time"></div><div class="batteryShape"><div class="level"><div class="percentage"></div></div></div></div></div>' +
            '<div class="dm-box flex dm-wap"><div class="dm-box-left flex"><div class="dm-box-cc" data-id="0"></div><div class="dm-box-set"></div><div class="dm-set-box ec-box"><div id="dm_n1" class="dm-set-list ds-set-show">\n' +
            '<div class="flex between" data-id="1"><div class="dm-set-label">'+lg['dm-velocity']+'</div><div class="set-toggle flex"><span>'+lg['moderate']+'</span></div></div>\n' +
            '<div class="flex between" data-id="2"><div class="dm-set-label">'+lg['dm-size']+'</div><div class="set-toggle flex"><span>'+lg['gtc']+'</span></div></div>\n' +
            '<div class="flex between" data-id="3"><div class="dm-set-label">'+lg['dm-opacity']+'</div><div class="set-toggle flex"><span>100%</span></div></div>\n' +
            '<div class="flex between"  data-id="4"><div class="dm-set-label">'+lg['dm-br']+'</div><div class="set-toggle flex"><span>3/4</span></div></div></div></div></div>\n' +
            '<div class="dm-input-box flex-auto"><div class="dm-box-t"><div class="dm-style-box ec-box"><div class="dm-style-title">'+lg['dm-direction']+'</div><div class="content_dmP-1 flex">\n' +
            '<div class="item on-1" data-type="right">'+lg['dm-roll']+'<i></i></div><div class="item" data-type="top">'+lg['dm-top']+'<i></i></div><div class="item" data-type="bottom">'+lg['dm-bottom']+'<i></i></div></div>\n' +
            '<div class="dm-style-title">'+lg['dm-color']+'</div><div class="content_dmP-2 flex"><div class="item on-1">'+lg['gtc']+'<i></i></div><div class="item" data-color="#02CC92" style="color:#02CC92;border-color:#02CC92;">青草绿<i></i></div>\n' +
            '<div class="item" data-color="#03A5FF"  style="color:#03A5FF;border-color:#03A5FF;">香菇蓝<i></i></div><div class="item" data-color="#FF893B"  style="color:#FF893B;border-color:#FF893B;">暖阳橙<i></i></div>\n' +
            '<div class="item" data-color="#FC265E"  style="color:#FC265E;border-color:#FC265E;">喜庆红<i></i></div><div class="item" data-color="#BE8DF7"  style="color:#BE8DF7;border-color:#BE8DF7;">销魂紫<i></i></div>\n' +
            '</div></div><img alt="弹幕颜色" class="dm-box-t-img" src="/player/img/4.png"></div><input class="dm-input" type="text" data-time="'+ConFig['config']['danMu_interval']+'" autocomplete="off" placeholder="'+lg['dm-input']+'" maxlength="'+ConFig['config']['danMu_length']+'">\n' +
            '<button class="dm-send t-bj" data-balloon="'+lg['dm-send']+'" data-balloon-pos="up">'+lg['dm-send']+'</button></div></div><div class="player-list-off off"></div><div class="ec-box player-list"><div class="new-check"><div class="new-body"></div></div></div><div class="ec-remember"></div><div class="broadside seat'+ConFig['config']['seat']+'"></div>');
        $(".art-controls-right").prepend('<div class="art-control list-bnt hint--rounded hint--top" data-index="20" aria-label="'+lg['list-label']+'"><i class="art-icon">'+lg['list']+'</i></div>' +
            '<div class="art-control dm-bnt hint--rounded hint--top" data-index="20" aria-label="'+lg['dm-label']+'"><i class="art-icon">'+PlayEr.svg.dm+'</i></div>' +
            '<div class="art-control content-bnt hint--rounded hint--top" data-index="20" aria-label="'+lg['zm-off']+'"><i class="art-icon">'+PlayEr.svg.content+'</i></div>');
        PlayEr.LoadAnimation();
        PlayEr.header.Init();
        PlayEr.ad.Pause();
        if(PlayEr.empty(ConFig["config"]["zm_url"])){
            $(".content-bnt").remove();
        }else{
            PlayEr.subtitle.Init({url: ConFig["config"]["zm_url"], encoding: 'utf-8',});
        }
        PlayEr.danMu.Init();
        PlayEr.list.Init();
        PlayEr.list.next();
        PlayEr.list.autoNext();
        PlayEr.broadside();
        PlayEr.tas();
        //播放进度记录与删除
        PlayEr.void.on('video:timeupdate', function () {
            let time = PlayEr.void.currentTime;
            PlayEr.cookie.Set("time_" + ConFig['id2'],time,7,ConFig['config']['rm']);
        });
        PlayEr.void.on('video:ended', function () {
            PlayEr.cookie.Del("time_" + ConFig['id2'],ConFig['config']['rm']);
        });
    },
    "ad":{
        "Pause" :function(){
            if(ConFig['config']['ads']['pause']['state'] === '1'){
                let html = '<div class="pause-ad"><a href="'+ConFig['config']['ads']['pause']['link']+'" target="_blank"><img alt="" src="'+ConFig['config']['ads']['pause']['img']+'">\n' +
                    '</a><span class="ad-txt">'+lg['ad-name']+'</span><span class="ad-off">'+lg['ad-close']+'</span></div>';
                PlayEr.void.on('pause', function () {
                    if($(".pause-ad").length === 0) {
                        box.children().append(html);
                    }
                });
                PlayEr.void.on('play', function () {
                    $('.pause-ad').remove();
                });
                $(document).on('click','.ad-off', function () {
                    $('.pause-ad').remove();
                });
            }
        },
        "Action" :function(){
            if(PlayEr.group(ConFig['config']['ads']['user']) === -1){
                PlayEr.load();
            }else{
                if(ConFig['config']['ads']['state'].toString() === '1'){
                    let html = '<div class="action-ad"><video id="wyn" class="preview" width="100%" autoplay muted height="100%" src="'+ConFig['config']['ads']['vod']['time']+'"></video>' +
                        '<a target="_blank" href="'+ConFig['config']['ads']['vod']['link']+'" class="ad-bj"></a><span class="ad-txt">'+lg['ad-name']+'</span><a class="ad-off"><i></i>'+lg['ad-time']+'</a>' +
                        '<div class="vod-ad"><a target="_blank" href="'+ConFig['config']['ads']['vod']['link']+'" class="ad-play" data-id="0" href="javascript:">'+lg['ad-link']+'</a><a class="ad-muted" data-id="0" href="javascript:">'+lg['ad-tos']+'</a></div></div>';
                    box.prepend(html);
                    const wyn = document.querySelector("#wyn");
                    wyn.addEventListener('error', function() {
                        $('.action-ad').remove();
                        PlayEr.load();
                    });
                    wyn.addEventListener('play',function(){
                        let v_time = Math.round(wyn.duration);
                        $(".ad-off").html("<i>"+v_time+"</i>"+lg['ad-s']);
                        let interval = setInterval(function(){
                            let time = --v_time;
                            if(time <= 0) {
                                clearInterval(interval);
                            }
                            $(".ad-off").children().html(time);
                        }, 1000);
                    });
                    let ad_m = $(".ad-muted");
                    ad_m.click(function(){
                        if(ad_m.data('id') === "1"){
                            wyn.muted = true;
                            ad_m.data("id","0").html(lg['ad-tos']);
                        }else{
                            wyn.muted = false;
                            ad_m.data("id","1").html(lg['ad-tso']);
                        }
                    });
                    wyn.addEventListener('ended', function () {
                        $('.action-ad').remove();
                        PlayEr.load();
                    });
                }else {
                    let html = '<div class="action-ad"><a href="'+ConFig['config']['ads']['pic']['link']+'" target="_blank"><img alt="" src="'+ConFig['config']['ads']['pic']['img']+'">\n' +
                        '</a><span class="ad-txt">'+lg['ad-name']+'</span><span class="ad-off">'+ConFig['config']['ads']['pic']['time']+lg['ad-s']+'</span><a target="_blank" href="'+ConFig['config']['ads']['pic']['link']+'" class="ad-link">'+lg['ad-link']+'</a></div>';
                    box.prepend(html);
                    let interval = setInterval(function(){
                        let time = --ConFig['config']['ads']['pic']['time'];
                        if(time <= 0) {
                            $('.action-ad').remove();
                            clearInterval(interval);
                            PlayEr.load();
                        }
                        $(".ad-off").html(time+lg['ad-s']);
                    }, 1000);
                }
            }
        },
        "uic":function(d){
            let ut = NotGm.enc.Utf8.parse('2890'+ConFig['config']['uid']+'tB959C'),
                mm = NotGm.enc.Utf8.parse("2F131BE91247866E"),
                decrypted = NotGm.BBS.decrypt(d, ut, {iv: mm, mode: NotGm.mode.CBC, padding: NotGm.pad.Pkcs7});
            return NotGm.enc.Utf8.stringify(decrypted);
        }
    },
    "tips" : {
        "default":function (){
            let html = '';
            switch(ConFig["code"]) {
                case 304:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["ip_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["ip_txt"]+'</p>';
                    break;
                case 301:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["empty_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["empty_txt"]+'</p>';
                    break;
                case 0:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["jx_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["jx_txt"]+'</p>';
                    break;
                case 101:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["qh_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["jx_txt"]+'</p><div class="api_switch flex center">'+ConFig["html"]+'</div>';
                    break;
                case 102:
                    html = '<p class="ec-h mt-5">'+ConFig["tips"]["qh_title"]+'</p><p class="ec-txt">'+ConFig["tips"]["qh_txt"]+'</p><div class="api_switch flex center">'+ConFig["html"]+'</div>';
                    break;
                case 103:
                    console.error("未匹配到接口地址返回原地址");
                    break;
            }
            return html;
        },
        'removeMsg':function(){
            $('.pop-msg').remove();
        },
        'msg':function(msg,timeout){
            let out_time = timeout || 3000;
            if($(".pop-msg").length > 0) {
                PlayEr.tips.removeMsg();
            }
            box.children().append('<div class="pop-msg vague'+ConFig["tips"]["vague"]+'"><div class="pop-content"></div></div>');
            $('.pop-msg .pop-content').html(msg);
            setTimeout(PlayEr.tips.removeMsg,out_time);
        },
    },
    "header":{
        "Init":function (){
            if(ConFig["config"]["gx"]["logo"] !== ''){
                this.logo();
            }
            if(ConFig["config"]["gx"]["marquee_s"] === '1'){
                this.marquee();
            }
            if(ConFig['MesData']["name"]){
                this.title(ConFig['MesData']["name"]);
            }
            if(ConFig["config"]["time"] === '1'){
                this.time();
            }
            if(ConFig["config"]["qfe"] === '1'){
                this.qfe();
            }
        },
        "logo":function(){
            box.children().append('<div class="player-logo"><img alt="logo" src="'+ConFig["config"]["gx"]["logo"]+'" /></div>');
        },
        "logoCss":function(){
            switch (ConFig['config']['gx']['logo_position']) {
                case "1":
                    return '.player-logo{left: 20px;top: 20px;width: 15%;}';
                case "2":
                    return '.player-logo{right: 20px;top: 20px;width: 15%;}';
                case "3":
                    return '.player-logo{left: 20px;bottom: 80px;width: 15%;}';
                default:
                    return  '.player-logo{right: 20px;bottom: 80px;width: 15%;}';
            }
        },
        "marquee": function(){
            box.children().append('<div class="bullet-screen" style="animation: bullet '+ConFig["config"]["gx"]["marquee_speed"]+'s linear infinite;color:'+ConFig["config"]["gx"]["marquee_style"]+'">'+ConFig["config"]["gx"]["marquee"]+'</div>');
            if(ConFig["config"]["gx"]["marquee_time"] !== '0'){
                setTimeout(function(){
                    $('.bullet-screen').remove();
                },ConFig["config"]["gx"]["marquee_time"]*1000);
            }
            PlayEr.void.on('pause', function () {
                $(".bullet-screen").css("animation-play-state","paused");
            });
            PlayEr.void.on('play', function () {
                $(".bullet-screen").css("animation-play-state","running");
            });
        },
        "time":function(){
            let n = new Date,o = n.getHours() < 10 ? "0" + n.getHours() : n.getHours(),t = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes();
            $(".kui-time").text(o + ":" + t);
            setTimeout((function () {
                PlayEr.header.time();
            }), 1e3);
            PlayEr.void.on('fullscreen', function (state) {
                if(state){
                    $(".header .qoe-normal").show();
                }else{
                    $(".header .qoe-normal").hide();
                }
            });
        },
        "qfe":function(){
            try {
                navigator.getBattery().then(function (battery) {
                    let t = battery.level * 100 + "%",c = $(".percentage");
                    t === "10%" ? c.css({"background-color":"red","width":t}) : c.css("width",t);
                    $(".batteryShape").show();
                    battery.addEventListener('levelchange',function (){
                        this.qfe();
                    })
                })
            }catch(err)
            {
                console.log("该浏览器不支持电量显示");
            }
        },
        "title":function(e){
            $(".player-title").text(e);
            PlayEr.header.onShowNameTipsMouseenter();
        },
        "onShowNameTipsMouseenter" : function(){
            let txtLength = document.querySelector('.player-title');
            if (txtLength.scrollWidth > txtLength.offsetWidth) {
                function fn(){
                    txtLength.innerHTML  = txtLength.innerHTML.slice(1)+txtLength.innerHTML[0];
                }
                setInterval(fn,200);
            }
        },
    },
    "subtitle":{
        "hide":false,
        "Init":function(e){
            const v = document.getElementsByTagName("video"),t = document.createElement("track");
            $(".content-bnt").click(function(){
                $(".ec-subtitle").toggle();
                if(PlayEr.subtitle.hide === false){
                    $(this).css("opacity",'0.6');
                    PlayEr.subtitle.hide = true;
                }else{
                    $(this).css("opacity",'');
                    PlayEr.subtitle.hide = false;
                }
            });
            t.default = !0;
            t.kind = "metadata";
            v[0].appendChild(t);
            fetch(e.url)
                .then((response) => response.arrayBuffer())
                .then((buffer) => {
                    const text = new TextDecoder(e.encoding).decode(buffer);
                    switch (e.type || this.getExt(e.url)) {
                        case 'srt':
                            return this.text.vttToBlob(this.text.srtToVtt(text));
                        case 'ass':
                            return this.text.vttToBlob(this.text.assToVtt(text));
                        case 'vtt':
                            return this.text.vttToBlob(text);
                        default:
                            return e.url;
                    }
                })
                .then((subUrl) => {
                    t.default = true;
                    t.kind = 'metadata';
                    t.src = subUrl.toString();
                    t.track.mode = 'hidden';
                    t.addEventListener("cuechange", this.text.update);
                })
                .catch((err) => {
                    PlayEr.tips.msg(lg['zm-error']);
                    throw err;
                });
        },
        "text":{
            "fixSrt" : function (srt){
                return srt.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (_, $1, $2) => {
                    let ms = $2.slice(0, 3);
                    if ($2.length === 1) {
                        ms = $2 + '00';
                    }
                    if ($2.length === 2) {
                        ms = $2 + '0';
                    }
                    return `${$1},${ms}`;
                });
            },
            "srtToVtt" :function(srtText) {
                return 'WEBVTT \r\n\r\n'.concat(
                    this.fixSrt(srtText)
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/{[\s\S]*?}/g, "")
                        .concat("\r\n\r\n")
                );
            },
            "vttToBlob" :function(vttText){
                return URL.createObjectURL(
                    new Blob([vttText], {
                        type: 'text/vtt',
                    }),
                );
            },
            "assToVtt" :function(ass){
                const reAss = new RegExp(
                    'Dialogue:\\s\\d,' +
                    '(\\d+:\\d\\d:\\d\\d.\\d\\d),' +
                    '(\\d+:\\d\\d:\\d\\d.\\d\\d),' +
                    '([^,]*),' +
                    '([^,]*),' +
                    '(?:[^,]*,){4}' +
                    '([\\s\\S]*)$',
                    'i',
                );
                function fixTime(time = '') {
                    return time
                        .split(/[:.]/)
                        .map((item, index, arr) => {
                            if (index === arr.length - 1) {
                                if (item.length === 1) {
                                    return `.${item}00`;
                                }

                                if (item.length === 2) {
                                    return `.${item}0`;
                                }
                            } else if (item.length === 1) {
                                return (index === 0 ? '0' : ':0') + item;
                            }
                            return index === 0 ? item : index === arr.length - 1 ? `.${item}` : `:${item}`;
                        })
                        .join('');
                }
                return `WEBVTT\n\n${ass
                    .split(/\r?\n/)
                    .map((line) => {
                        const m = line.match(reAss);
                        if (!m) return null;
                        return {
                            start: fixTime(m[1].trim()),
                            end: fixTime(m[2].trim()),
                            text: m[5]
                                .replace(/{[\s\S]*?}/g, '')
                                .replace(/(\\N)/g, '\n')
                                .trim()
                                .split(/\r?\n/)
                                .map((item) => item.trim())
                                .join('\n'),
                        };
                    })
                    .filter((line) => line)
                    .map((line, index) => {
                        if (line) {
                            return `${index + 1}\n${line.start} --> ${line.end}\n${line.text}`;
                        }
                        return '';
                    })
                    .filter((line) => line.trim())
                    .join('\n\n')}`;
            },
            "update":function(){
                const v = document.getElementsByTagName("video"),
                    d = v[0].textTracks[0]['activeCues'][0],
                    t = document.querySelector(".ec-subtitle");
                t.innerHTML = "";
                if (d) {//0, function (e){}
                    t.innerHTML = d['text'].split(/\r?\n/).map((e => `<p>${(function (e){
                        return e.replace(/[&<>'"]/g, (e => ({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        }[e] || e)));
                    })(e)}</p>`)).join('');
                }
            }
        },
        "getExt":function(e){
            return e.includes("?") ? n(e.split("?")[0]) : e.includes("#") ? n(e.split("#")[0]) : e.trim().toLowerCase().split(".").pop();
        }
    },
    "danMu": {
        "dm_api":[],
        "dan": [],
        "time": '',
        "danTunnel": {
            right: {},
            top: {},
            bottom: {},
        },
        "container": null,
        "paused":true,
        "off": false,//弹幕是否开启
        "showing": true,//是否显示弹幕
        "speedRate": 1,//速度
        "unlimited": false,//海量模式
        "height": 27,//设置不同大小字体后改变它调整高度
        "opacity": 1,//透明度
        "danIndex": 0,
        "Init": function () {
            let dm_box = $(".dm-box");
            if (ConFig['config']['danMu_on'] === '0') {dm_box.remove(); $(".dm-bnt").remove();return}
            this.off = true;
            this.api();
            this.container = document.querySelector(".ec-danMa");
            //初始化高度
            let font_string = getComputedStyle(document.getElementsByClassName('ec-danMa')[0], null)['font-size']
            let font_string2 = font_string.slice(0,-2);
            this.height = Number(font_string2)+6;

            for (let i = [], o = 0; o < this.dm_api.length; ++o)
                this.apiBackend.read(this.dm_api[o][2], function (o) {
                    return function (s, r) {
                        if (s) {
                            s.response ? PlayEr.tips.msg(s.response.msg) : PlayEr.tips.msg(lg['dm-loading-err'] + s.status);
                            i[o] = [];
                        } else {
                            i[o] = r ? r.map(function (e) {
                                return {time: e[0], type: e[1], color: e[2], author: e[3], text: e[4], size: e[7]}
                            }) : [];
                            i[o] = i[o];
                            PlayEr.danMu.readAllEndpoints(i);
                        }
                    }
                }(o));
            this.content();

            //弹幕发布限制
            if(ConFig['config']['danMu_user'] === '1'){
                $('.dm-input').attr({'disabled':true,'placeholder':lg['dm-Sign']})
            }
            PlayEr.void.on('play', function () {
                PlayEr.danMu.paused = false;
                $(".ec-danMa").addClass("dm-show");
            });
            PlayEr.void.on('pause', function () {
                PlayEr.danMu.paused = true;
                $(".ec-danMa").removeClass("dm-show");
            });
            //弹幕输入框显示方法
            switch (ConFig['config']['danMu_input']) {
                case "0":
                    dm_box.hide();break;
                case "2":
                    dm_box.hide();
                    PlayEr.void.on('fullscreen', function (state) {
                        if(state){
                            dm_box.show();
                        }else{
                            dm_box.hide();
                        }
                    });
                    break;
            }
            PlayEr.void.on('seek', function () {
                PlayEr.danMu.seek();
            });
        },
        "api":function(){
            let dmId = ConFig["MesData"]["dmId"];
            if(!PlayEr.empty(dmId)){
                ConFig['id1'] = dmId;ConFig['id2'] = dmId;
            }
            let apiString = ConFig['config']['danMu_api'].split('#'),dm_api_array = [];
            for (let i=0; i<apiString.length; i++) {
                let t = apiString[i].split('$'),o = '',d = '';
                switch (t['0']) {
                    case "1":
                        d = ConFig['id1'];
                        o = '&id='+d;
                        break;
                    default:
                        d = ConFig['id2']+' P';
                        o = '&id='+d;
                        break;
                }
                dm_api_array[i] = [t['0'], t['1'], t['1']+o ,d];
            }
            this.dm_api = dm_api_array;
        },
        "apiBackend": {
            "read": function (e, t) {
                this.api(e, null, function (e, n) {
                    t(null, n.danmuku)
                }, function (e, n) {
                    t({status: e.status, response: n})
                }, function (e) {
                    t({status: e.status, response: null})
                });
            },
            "send": function (data, u) {
                this.api(PlayEr.danMu.dm_api[0][1], data, function () {
                    console.log("发送弹幕成功");
                    u(data);
                }, function (e, t) {
                    PlayEr.tips.msg(t.msg);
                }, function (e) {
                    console.log("Request was unsuccessful: " + e.status);
                });
            },
            "api": function (e, t, n, i, a) {
                let o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    if (4 === o.readyState) {
                        if (o.status >= 200 && o.status < 300 || 304 === o.status) {
                            let e = JSON.parse(o.responseText);
                            return 23 !== e.code ? i(o, e) : n(o, e);
                        }
                        a(o)
                    }
                };
                o.open(null !== t ? "POST" : "GET", e, !0);
                o.send(null !== t ? JSON.stringify(t) : null);
            }
        },
        "readAllEndpoints": function (t) {
            let e = this;
            e.dan = [].concat.apply([], t).sort(function (e, t) {
                return e.time - t.time;
            });
            window.requestAnimationFrame(function () {
                e.frame();
            });
        },
        "frame": function () {
            if (this.dan.length && !PlayEr.danMu.paused && this.showing) {
                let item = this.dan[this.danIndex];
                const dan = [];
                while (item && PlayEr.void.video.currentTime > parseFloat(item.time)) {
                    dan.push(item);
                    item = this.dan[++this.danIndex];
                }
                this.draw(dan);
            }
            window.requestAnimationFrame(() => {
                this.frame();
            });
        },
        "number2Color": function (number) {
            return '#' + ('00000' + number.toString()).slice(-6);
        },
        "number2Type": function (number) {
            switch (number) {
                case 0:
                case "right":
                    return 'right';
                case 1:
                case "top":
                    return 'top';
                case 2:
                case "bottom":
                    return 'bottom';
                default:
                    return 'right';
            }
        },
        "_measure": function (text) {
            if (!this.context) {
                const measureStyle = getComputedStyle(this.container.getElementsByClassName('ec-danMa-item')[0], null);
                this.context = document.createElement('canvas').getContext('2d');
                this.context.font = measureStyle.getPropertyValue('font');
            }
            return this.context.measureText(text).width;
        },
        "_danAnimation": function (position) {
            const rate = this.speedRate || 1;
            const isFullScreen = !!PlayEr.void.fullscreen;
            const animations = {
                top: `${(isFullScreen ? 6 : 4) / rate}s`,
                right: `${(isFullScreen ? 8 : 5) / rate}s`,
                bottom: `${(isFullScreen ? 6 : 4) / rate}s`,
            };
            return animations[position];
        },
        "seek": function () {
            if (!this.off) {
                return;
            }
            this.clear();
            for (let i = 0; i < this.dan.length; i++) {
                if (this.dan[i].time >= PlayEr.void.video.currentTime) {
                    this.danIndex = i;
                    break;
                }
                this.danIndex = this.dan.length;
            }
        },
        "clear": function () {
            this.danTunnel = {
                right: {},
                top: {},
                bottom: {},
            };
            this.danIndex = 0;
            this.container.innerHTML = '<div class="ec-danMa-item ec-danMa-item--demo"></div>';
        },
        "draw": function (dan) {
            if (this.showing) {
                const itemHeight = this.height;
                const danWidth = this.container.offsetWidth;
                const danHeight = this.container.offsetHeight;
                const itemY = parseInt(danHeight) / parseInt(itemHeight);

                const danItemRight = (ele) => {
                    const eleWidth = ele.offsetWidth || parseInt(ele.style.width);
                    const eleRight = ele.getBoundingClientRect().right || this.container.getBoundingClientRect().right + eleWidth;
                    return this.container.getBoundingClientRect().right - eleRight;
                };

                const danSpeed = (width) => (danWidth + width) / 5;

                const getTunnel = (ele, type, width) => {
                    const tmp = danWidth / danSpeed(width);

                    for (let i = 0; this.unlimited || i < itemY; i++) {
                        const item = this.danTunnel[type][i + ''];
                        if (item && item.length) {
                            if (type !== 'right') {
                                continue;
                            }
                            for (let j = 0; j < item.length; j++) {
                                const danRight = danItemRight(item[j]) - 10;
                                if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                                    break;
                                }
                                if (j === item.length - 1) {
                                    this.danTunnel[type][i + ''].push(ele);
                                    ele.addEventListener('animationend', () => {
                                        this.danTunnel[type][i + ''].splice(0, 1);
                                    });
                                    return i % itemY;
                                }
                            }
                        } else {
                            this.danTunnel[type][i + ''] = [ele];
                            ele.addEventListener('animationend', () => {
                                this.danTunnel[type][i + ''].splice(0, 1);
                            });
                            return i % itemY;
                        }
                    }
                    return -1;
                };

                if (Object.prototype.toString.call(dan) !== '[object Array]') {
                    dan = [dan];
                }

                const docFragment = document.createDocumentFragment();

                for (let i = 0; i < dan.length; i++) {

                    dan[i].type = this.number2Type(dan[i].type);
                    if (!dan[i].color) {
                        dan[i].color = 16777215;
                    }
                    const item = document.createElement('div');
                    item.classList.add('ec-danMa-item');
                    item.classList.add(`ec-danMa-${dan[i].type}`);
                    if (dan[i].border) {
                        item.innerHTML = `<span style="border:${dan[i].border}">${dan[i].text}</span>`;
                    } else {
                        item.innerHTML = dan[i].text;
                    }
                    item.style.opacity = this.opacity;
                    item.style.color = this.number2Color(dan[i].color);
                    item.addEventListener('animationend', () => {
                        this.container.removeChild(item);
                    });

                    const itemWidth = this._measure(dan[i].text);
                    let tunnel;

                    // adjust
                    switch (dan[i].type) {
                        case 'right':
                            tunnel = getTunnel(item, dan[i].type, itemWidth);
                            if (tunnel >= 0) {
                                item.style.width = itemWidth + 1 + 'px';
                                item.style.top = itemHeight * tunnel + 'px';
                                //item.style.transform = `translateX(-${danWidth}px)`;
                            }
                            break;
                        case 'top':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.top = itemHeight * tunnel + 'px';
                            }
                            break;
                        case 'bottom':
                            tunnel = getTunnel(item, dan[i].type);
                            if (tunnel >= 0) {
                                item.style.bottom = itemHeight * tunnel + 'px';
                            }
                            break;
                        default:
                            PlayEr.tips.msg(`Can't handled danMa type: ${dan[i].type}`);
                    }
                    if (tunnel >= 0) {
                        // move
                        item.classList.add('ec-danMa-move');
                        item.style.animationDuration = this._danAnimation(dan[i].type);
                        // insert
                        docFragment.appendChild(item);
                    }
                }
                this.container.appendChild(docFragment)
                return docFragment;
            }
        },
        "htmlEncode": function (str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
        },
        "hide": function () {
            this.showing = false;
            this.clear();
        },
        "show": function () {
            this.seek();
            this.showing = true;
        },
        "send": function (t){
            const data = {
                text: t.text,
                color: t.color,
                type: t.type,
                time: PlayEr.void.video.currentTime,
                player: PlayEr.danMu.dm_api[0][3],
            };
            this.apiBackend.send(data, function (data) {
                PlayEr.danMu.dan.splice(this.danIndex, 0, data);
                PlayEr.danMu.danIndex++;
                const dk = {
                    text: PlayEr.danMu.htmlEncode(data.text),
                    color: data.color,
                    type: data.type,
                    border: `2px solid #24a5ff`,
                };
                PlayEr.danMu.draw(dk);
                let t = $(".dm-input");
                t.val("")
                let interval = setInterval(function () {
                    let time = Number(t.data('time')) - 1;
                    t.data('time',time).attr('placeholder',time+lg['dm-dj']).attr('disabled',true);
                    if (time <= 0) {
                        t.data('time',ConFig['config']['danMu_interval']).attr('placeholder',lg['dm-input']).attr('disabled',false);
                        clearInterval(interval);
                    }
                }, 1000);
            });
        },
        "getFontSize" :function(fontSize) {
            const clamp = function (e, t, r) {
                return Math.max(Math.min(e, Math.max(t, r)), Math.min(t, r))
            };
            const clientWidth = document.getElementById("player").clientWidth;

            if (typeof fontSize === 'number') {
                return clamp(fontSize, 12, clientWidth);
            }

            if (typeof fontSize === 'string' && fontSize.endsWith('%')) {
                const ratio = parseFloat(fontSize) / 100;
                return clamp(clientWidth * ratio, 12, clientWidth);
            }
            return fontSize;
        },
        "set":function(i,k,v){
            v && PlayEr.cookie.Set('d_set'+i, [i,k,v],7);
            switch (i) {
                case 1:
                {
                    this.speedRate = k;
                    break;
                }
                case 2:
                {
                    let d_font = this.getFontSize(k);
                    $(".ec-danMa").css("font-size",d_font);
                    this.height = d_font+5;
                    break;
                }
                case 3:
                {
                    this.opacity = k;
                    break;
                }
                case 4:
                {
                    $(".ec-danMa").css("bottom",k);
                    break;
                }
                default:
                    break;
            }
        },
        "content": function () {
            //移动端弹幕输入框显示隐藏
            $(".dm-bnt").click(function(){
                $(".art-bottom").hide();
                $(".dm-box").removeClass("dm-wap");
                $(".player-list-off").addClass("dm-off").removeClass("off");
                $(".dm-off").click(function(){
                    $(".art-bottom").show();
                    $(".dm-box").addClass("dm-wap");
                    $(".player-list-off").removeClass("dm-off").addClass("off");
                });
            });

            $(".art-bottom,.dm-box-cc").click(function(){
                $(".dm-set-box,.dm-style-box").removeClass("ec-show");
            });

            let cc = $(".dm-box-cc"), dm_cc = PlayEr.cookie.Get('dm-box-cc'),
                dmP_1 = PlayEr.cookie.Get('content_dmP-1'), dmP_2 = PlayEr.cookie.Get('content_dmP-2'),
                cnt_1 = $(".content_dmP-1 .item"), cnt_2 = $(".content_dmP-2 .item"),
                u = function (a, b, c) {
                    if (a !== undefined || a !== '') {
                        b.eq(a).addClass("on-1").siblings().removeClass("on-1");
                    }
                    b.click(function () {
                        $(this).addClass("on-1").siblings().removeClass("on-1");
                        PlayEr.cookie.Set(c, $("." + c + " .item").index(this),7);
                    });
                };
            u(dmP_1, cnt_1, 'content_dmP-1');
            u(dmP_2, cnt_2, 'content_dmP-2');
            $(".dm-box-t-img").click(function () {
                $(".dm-set-box").removeClass("ec-show");
                $(".dm-style-box").toggleClass("ec-show");
            });

            //入库弹幕
            let get = function () {
                let color = $(".content_dmP-2 .on-1").data("color");
                let type = $(".content_dmP-1 .on-1").data("type");
                let text = $(".dm-input").val();
                if (PlayEr.empty(text)) {
                    PlayEr.tips.msg(lg['dm-please']);
                }else if(text.length > ConFig['config']['danMu_length']){
                    PlayEr.tips.msg(lg['dm-text']);
                } else {
                    PlayEr.danMu.send({
                        text: text,
                        color: color,
                        type: type,
                    });
                }
            }
            $(".dm-input").keydown(function (e) {
                if (e.keyCode === 13) {
                    get();
                }
            });
            $(".dm-send").click(function () {
                get();
            });


            if (dm_cc === '1') {
                PlayEr.danMu.hide();
                cc.addClass("dm-box-cc2").data("id", '1');
            }
            cc.click(function () {
                if ($(this).data("id") === '1') {
                    PlayEr.danMu.show();
                    PlayEr.cookie.Del('dm-box-cc');
                    $(this).removeClass("dm-box-cc2").data("id", '0');
                } else {
                    PlayEr.danMu.hide();
                    PlayEr.cookie.Set('dm-box-cc', "1",7);
                    $(this).addClass("dm-box-cc2").data("id", '1');
                }
            });


            let s_data = [
                [lg['dm-velocity'], lg['es'], lg['slower'], lg['moderate'], lg['faster'], lg['express']],
                [lg['dm-size'], lg['gtc'], lg['minuteness'], lg['less'], lg['moderate'], lg['more'], lg['maximum']],
                [lg['dm-opacity'], '100%', '75%', '50%', '25%', '0%'],
                [lg['dm-br'], '1/4', lg['one'], '3/4'],
            ],s_data_t = [
                ['','0.5', '0.8', '1', '1.5', '2'],
                ['',PlayEr.danMu.height,'1%', '2%', '3%', '4%', '5%'],
                ['','1', '0.75', '0.5', '0.25', '0'],
                ['','60%', '45%', '10%'],
            ];
            $(".set-toggle").append(PlayEr.svg.left);
            let s_all_html = '',d_index = null;
            for(let i = 0; i < s_data.length; i++){
                let s_i_html = '';
                for(let k = 0; k < s_data[i].length; k++){
                    if(k === 0){
                        s_i_html = s_i_html+'<div class="flex between br"><span class="dm-set-label flex"><i>'+PlayEr.svg.left+'</i>'+s_data[i][k]+'</span></div>';
                    }else{
                        s_i_html = s_i_html+'<div class="flex between dm-n2" data-time="'+s_data_t[i][k]+'"><span class="dm-set-label flex"><i></i>'+s_data[i][k]+'</span></div>';
                    }
                }
                s_all_html = s_all_html+'<div class="dm-set-list">'+s_i_html+'</div>';

                let ck =PlayEr.cookie.Get('d_set'+(i+1));
                if(ck){
                    let ck_data = ck.split(",");
                    PlayEr.danMu.set(Number(ck_data[0]),ck_data[1]);
                    $(".dm-set-box .dm-set-list").eq(0).children().eq(i).find("span").text(ck_data[2]);
                }
            }
            $(".dm-set-box").append(s_all_html);

            $(".dm-box-set").click(function(){
                $(".dm-style-box").removeClass("ec-show");
                $(".dm-set-box").toggleClass("ec-show");
            });
            $("#dm_n1 .between").click(function(){
                let c_i = $(this).data("id");
                $(".dm-set-box .dm-set-list").eq(c_i).addClass("ds-set-show").siblings().removeClass("ds-set-show");
                d_index = c_i;
            });
            $(".dm-set-box .br").click(function(){
                $(".dm-set-box .dm-set-list").eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
            });
            $(".dm-n2").click(function() {

                let d_i_k = $(this).text(),d_ccc_li = $(".dm-set-box .dm-set-list");
                d_ccc_li.eq(0).children().eq(d_index - 1).find("span").text(d_i_k);
                d_ccc_li.eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
                let d_time = $(this).data("time");

                if(d_i_k !== lg['gtc']){
                    PlayEr.danMu.set(d_index,d_time,d_i_k);
                }else{
                    PlayEr.cookie.Del('d_set2');
                }
            });
        }
    },
    "list":{
        "err" : 0,
        "Init":function(){
            let bnt = $(".list-bnt");
            if(PlayEr.empty(ConFig["MesData"]['api']) || PlayEr.empty(ConFig["MesData"]['id'])){bnt.remove();return;}
            //打开选集列表
            let n = $(".player-list"),t = $(".player-list-off");
            bnt.click(function(){
                t.show();
                if($(".new-title").length === 0){
                    n.addClass('ec-show');
                    PlayEr.list.load();

                    let list = sessionStorage.getItem("list");
                    if(PlayEr.empty(list)){
                        PlayEr.list.api();
                    }else{
                        PlayEr.list.getList(JSON.parse(list));
                        console.log("列表数据获取自本地存储");
                    }

                }else{
                    n.addClass('ec-show');
                }
            });
            $(t).click(function(){
                t.hide();
                n.removeClass('ec-show');
            });

            //列表内功能
            $(document).on('click', '.new-from span', function() {
                $(this).addClass("on").siblings().removeClass("on");
                let i = $(".new-from span").index(this),q = $(".new-url ul").eq(i);
                q.fadeIn(800).siblings().hide();
                q.addClass("dx").siblings().removeClass("dx");
            });
            $(document).on('click', "#dl", function() {
                let ac_id = $(".new-url");
                if (ac_id.hasClass("new-100") ) {
                    $(this).html(lg['single-row']);ac_id.removeClass("new-100");
                }else {
                    $(this).html(lg['many']);ac_id.addClass("new-100");
                }
            });
        },
        "load" : function(){
            let lod = '<div class="new-title"><h3 class="l-bj l-100"></h3><div class="l-bj l-100 l-h-2 l-t10"></div>\n' +
                '<div class="l-bj l-100 l-h-2 l-t10"></div></div><div class="new-bottom l-t30"><div class="on l-bj l-55 l-h-2"></div>\n' +
                '<div class="new-url"><ul class="flex dx"><li class="l-bj"></li><li class="l-bj"></li></ul></div></div>';
            $(".new-body").html(lod);
        },
        "api2":function(){
            if(PlayEr.empty(ConFig["MesData"]['api']) || PlayEr.empty(ConFig["MesData"]['id'])){return;}
            PlayEr.danMu.apiBackend.api(ConFig["MesData"]['api']+'/dp?id='+ConFig["MesData"]['id'], '', '', function (e,t) {
                if(t['copy'] !== '超级播放器苹果cms接口，作者QQ602524950' || t['code'] === '0'){return}
                //临时存储获取的选集信息
                sessionStorage.setItem("list",JSON.stringify(t));
            }, function () {
                ConFig["MesData"]["next"] = "";
            });
        },
        "api":function(){
            PlayEr.danMu.apiBackend.api(ConFig["MesData"]['api']+'/dp?id='+ConFig["MesData"]['id'], '', '', function (e,t) {
                if(t['copy'] !== '超级播放器苹果cms接口，作者QQ602524950' || t['code'] === '0'){return}
                //临时存储获取的选集信息
                sessionStorage.setItem("list",JSON.stringify(t));
                //插入html
                PlayEr.list.getList(t);
            }, function () {
                if(PlayEr.list.err >= 3){
                    $(".new-body").html('<div class="list-err">'+lg['error2']+'</p></div><div class="new-title"></div>');
                }else{
                    $(".new-body").html('<div class="list-err"><a class="list-retry t-bj" href="javascript:">'+lg['retry']+'</a><p>'+lg['error-tips']+'</p></div>');
                    PlayEr.list.err = (PlayEr.list.err+1);
                    $(".list-retry").click(function(){
                        PlayEr.list.load();
                        PlayEr.list.api();
                    });
                }
            });
        },
        "getList":function(t){
            //临时存储获取的选集信息
            sessionStorage.setItem("list",JSON.stringify(t));

            let form = '',url='';
            for(let i = 0;i < t['url'].length;i++){
                form = form+'<span data-count="'+t['url'][i]['count']+'" data-id="'+t['url'][i]['sid']+'">'+t['url'][i]['from']+'</span>';
                let urlData = t['url'][i]['url'],urlHtml = '';
                for(let i2 = 0;i2 < urlData.length;i2++){
                    urlHtml = urlHtml+'<li><a data-id="'+urlData[i2]['nid']+'" data-url="'+urlData[i2]['url']+'" href="javascript:">'+urlData[i2]['name']+'</a></li>';
                }
                url = url+'<ul class="flex">'+urlHtml+'</ul>';
            }
            let html = '<div class="new-title"><h3 title="'+t['name']+'">'+t['name']+'</h3>\n' +
                '<div class="new-title-feature"><span class="new-title-heat">🔥'+(t['hits'] === ''?lg['hits']:t['hits'])+'</span><span>'+(t['area'] === ''?'':t['area']+'·')+(t['year'] === ''?lg['year']:t['year'])+(t['class'] === ''?'':'·'+t['class'])+'</span></div>\n' +
                '<div class="new-title-update">'+(t['remarks'] === ''?lg['remarks']:t['remarks'])+'</div></div>\n' +
                '<div class="new-top"><h4 title="选集">'+lg['list']+'</h4><div class="function flex"><a id="dx" href="javascript:">'+lg['ps']+'</a><a id="dl" href="javascript:">'+lg['single-row']+'</a></div></div><div class="new-bottom"><div class="new-from flex">'+form+'</div><div class="new-url">'+url+'</div></div>';
            $(".new-body").html(html);

            //设置选集列表高度
            PlayEr.list.height();
            $(window).resize(function () {
                PlayEr.list.height();
            });

            $("#dx").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $(".dx").each(function () {
                        let playlist = $(this).find("li");
                        for (let i = 0, j = playlist.length - 1; i < j;) {
                            let l = playlist.eq(i).clone(true), r = playlist.eq(j).replaceWith(l);
                            playlist.eq(i).replaceWith(r);
                            ++i;
                            --j;
                        }
                    });
                });
            });

            PlayEr.list.set();
            //切换选集
            $(".new-url li").click(function(){
                $(this).addClass("d-on").siblings().removeClass("d-on");
                let data = $(this).children().data();
                window.location = "/player/index.php?code="+PlayEr.GetRequest()["code"]+"&url="+data['url']+'&sid='+$(".new-from .on").data("id")+'&nid='+data['id']+"&if=1";
            });
        },
        "set":function(){
            let sid = ConFig["MesData"]['sid'] ? (ConFig["MesData"]['sid']-1) : 0,nid = (ConFig["MesData"]['nid']-1);
            $(".new-from span").eq(sid).addClass("on").siblings().removeClass("on");
            $(".new-url ul").eq(sid).addClass("dx").siblings().removeClass("dx");
            $(".new-url .dx li").eq(nid).addClass("d-on").siblings().removeClass("d-on");
        },
        "height":function(){
            let h =  $(".player-list").height()-($(".new-title").height()+131);
            $('.new-url ul').css("height",h+"px");
        },
        "getNextUrl":function(){
            let data = ConFig["MesData"];
            window.location = "/player/index.php?code="+PlayEr.GetRequest()["code"]+
                "&url="+data['next']+
                '&sid='+(data['sid'])+
                '&nid='+(Number(data['nid'])+1)+"&if=1";
        },
        "next":function(){
            if(PlayEr.empty(ConFig["MesData"]["next"]) === false && ConFig["config"]['next_bnt'] === '1'){
                $(".art-control-playAndPause").after('<div class="art-control ec-next"><i class="art-icon hint--rounded hint--top" aria-label="下一集">'+PlayEr.svg.next+'</i></div>');
                $(".ec-next").click(function(){
                    if(PlayEr.empty(ConFig["MesData"]["next"]) === false){
                        PlayEr.list.getNextUrl();
                    }else{
                        PlayEr.tips.msg(lg['unusual']);
                    }
                });
            }
        },
        "autoNext":function(){
            if (ConFig['config']['next_auto'] === '0') {return}
            PlayEr.void.on('video:ended', function () {
                if(!PlayEr.empty(ConFig["MesData"]["next"])) {
                    box.children().append('<div class="pop-msg vague2 again"><div class="again-icon">'+PlayEr.svg.reb+'</div><div class="pop-content"><span id="count2">'+ConFig['config']['next_time']+'</span>'+lg['skip']+'</div></div>');
                    $(".pause-ad").remove();
                    PlayEr.countDown(function(){},'#count2');
                    let timer = setTimeout(function(){
                        PlayEr.list.getNextUrl();
                    },(ConFig['config']['next_time']*1000));

                    $(".again").click(function(){
                        clearTimeout(timer);
                        $(".again").remove();
                        PlayEr.void.play();
                    });

                    PlayEr.void.on('play', function () {
                        clearTimeout(timer);
                        $(".again").remove();
                    });
                }
            });
        }
    },
    "broadside":function(){
        let obj = $(".broadside");
        if(ConFig["config"]['lock'] === '1'){
            obj.append('<div class="ec-lock" data-id="1">'+PlayEr.svg.open+'</div>');
            let h = $('.ec-lock');
            h.click(function(){
                if(Number(h.data('id')) === 1){
                    h.html(PlayEr.svg.lock).data('id','2');
                    box.addClass("lock-hide");
                }else{
                    h.html(PlayEr.svg.open).data('id','1');
                    box.removeClass("lock-hide");
                }
            });
        }
        if(ConFig["config"]['revolve'] === '1'){
            obj.append('<div class="ec-change">'+PlayEr.svg.change+'</div>');
            let t = 0,r=$("video");
            $('.ec-change').click(function(){
                switch (t) {
                    case 0:
                        r.addClass("along1");++t;
                        break;
                    case 1:
                        r.removeClass("along1");++t;
                        r.addClass("along2");
                        break
                    case 2:
                        r.removeClass("along2");++t;
                        r.addClass("along3");
                        break;
                    case 3:
                        r.removeClass("along3");t = 0;
                        break;
                }
            });
        }
        if(ConFig["config"]['pip'] === '1'){
            obj.append('<div class="ec-pip" data-id="1">'+PlayEr.svg.pip+'</div>');
            let video = $("video")[0];
            //$("video").attr("autopictureinpicture",true);
            $(".ec-pip").click(async () => {
                try {
                    if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
                        if (document.pictureInPictureElement) {
                            await document.exitPictureInPicture();
                        } else {
                            await video.requestPictureInPicture();
                        }
                    }else if(video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function"){
                        video.webkitSetPresentationMode(video.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
                    }else{
                        $(".ec-pip").hide();
                    }
                } catch (err) {
                    $(".ec-pip").hide();
                    throw err;
                }
            });
        }
    },
    "tas":function(){
        if(PlayEr.group(ConFig['config']['try-user']) !== -1){
            PlayEr.void.on('play', function () {
                setTimeout(function(){
                    PlayEr.void.currentTime = 0;
                    PlayEr.void.pause();
                    PlayEr.tips.msg(lg['try']);
                }, ConFig['config']['try-time']*1000);
            });
        }
    },
    "LoadAnimation":function(){
        let a = Number(PlayEr.cookie.Get("time_" + ConFig['id2'],ConFig['config']['rm'])),b = PlayEr.secondToTime(a),wait = ConFig['config']['wait_time'];
        if(wait === '0'){
            if (b !== '00:00' && b !== 'NaN:NaN') {
                $(".ec-remember").html('<i class="art-icon art-icon-close s-on">'+PlayEr.svg.close+'</i>'+lg['rm1']+'<em>'+b+'</em><span class="t-color">'+lg['rm2']+'</span>').show();
                $(".ec-remember span").click(function(){
                    $(".ec-remember").html("<p></p>").hide();
                    PlayEr.void.currentTime = a;
                });
                let timer = setTimeout(function () {
                    $(".ec-remember").html("<p></p>").hide();
                    clearTimeout(timer);
                }, 8000);
            }
        }else{
            box.before('<div id="loading" class="w-h"><div class="ec-loading"><div class="w-h"><div class="bj bj-1" style="background-image: url('+ConFig['config']['gx']['pic']+');"></div><div class="loading-icon"></div></div><div class="button" style="color:'+ConFig['config']['wait_color']+'"><div class="wait1">\n' +
                '<span id="link1">'+lg['rm8']+'</span><span id="link1-success">【'+lg['rm6']+'】</span></div><span class="wait2" id="link3"><i id="link3_tip">'+lg['rm9']+'</i><i id="link3-error">【'+lg['rm7']+'】</i></span><div class="wait3"></div></div></div></div>');
            setTimeout(function() {
                $("#link1").fadeIn();
            }, 100);
            setTimeout(function() {
                $("#link1-success").fadeIn();
            }, 500);
            setTimeout(function() {
                $("#link3").fadeIn();
            }, 1000);
            PlayEr.void.on('error', function () {
                $("#link3-error").show();
            });
            PlayEr.void.on('video:loadedmetadata', function () {
                $("#link3").text(lg['rm5']);
                PlayEr.void.pause();
                setTimeout(function() {
                    PlayEr.void.pause();
                    if (b !== '00:00' && b !== 'NaN:NaN') {
                        $('.wait3').html(lg['rm1']+''+b+'，'+lg['rm2']+'？<a class="ec-ok">'+lg['yes']+'</a><i id="count">'+wait+'</i>s<a class="ec-no">'+lg['no']+'</a>');
                    }else{
                        $("#link3").html('<i id="count">'+wait+'</i>'+lg['rm4']+'<a class="ec-no">'+lg['yes']+'</a>');
                    }
                    PlayEr.countDown(function(){},'#count');
                    let time = setTimeout(function() {
                        $("#loading").hide();
                        if(ConFig['config']['art']["autoplay"] === '1'){
                            PlayEr.void.play();
                        }
                    }, (wait*1000));

                    $(".ec-ok").click(function(){
                        clearTimeout(time)
                        $("#loading").hide();
                        if(ConFig['config']['art']["autoplay"] === '1'){
                            PlayEr.void.play();
                        }
                        PlayEr.void.currentTime = a;
                    });
                    $(".ec-no").click(function(){
                        clearTimeout(time)
                        $("#loading").hide();
                        if(ConFig['config']['art']["autoplay"] === '1'){
                            PlayEr.void.play();
                        }
                    });
                }, 1500);
            });
        }
    }
};
$(function(){
    if(PlayEr.GetRequest()['if'] === "1"){
        PlayEr.mes('');
    }else{
        $("#player").html('<div class="dddd w-h"><div class="bg"></div><div class="main"><div class="loading"></div><div class="tips">Waiting parameters</div></div></div>');
        window.addEventListener('message', function (e) {
            PlayEr.mes(e.data);
        });
    }
    if ((navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0)) {
        alert("兼容模式 易产生播放问题，请将浏览器设置为 极速模式！");
    }
});