class StartingScreen {
    constructor() {
        this.button = createButton("Ｐ Ｌ Ａ Ｙ");
        this.button2 = createButton("ＨＯＷ  ＴＯ  ＰＬＡＹ ？");

        this.title = createElement("h1");
        this.title2 = createElement("h1")
        this.title3 = createElement("h1");

    }

    display() {
        this.button.position(displayWidth / 2 - 115, displayHeight / 2 - 150);

        this.button2.position(displayWidth / 2 - 150, displayHeight / 2 - 70);

        this.title.html("𝗦 𝗠 𝗔 𝗦 𝗛").style.color = "blue";
        this.title.style.color = "orange";
        this.title.position(displayWidth / 2 - 250, 50);

        this.title2.html("𝗧 𝗛 𝗘");
        this.title.style.color = "orange";
        this.title2.position(displayWidth / 2 - 120, 120);

        this.title3.html("𝗙 𝗢 𝗢 𝗗");
        this.title.style.color = "orange";
        this.title3.position(displayWidth / 2 - 40, 190);


    }
}

class Rules {

    constructor() {

        this.back = createButton(" ＢＡＣＫ  ＴＯ  ＭＡＩＮ  ＭＥＮＵ");

        this.rules = createElement('h1');
        this.rule1 = createElement('h2');
        this.rule2 = createElement('h2');
        this.rule3 = createElement('h2');
        this.rule4 = createElement('h2');
        this.rule5 = createElement('h2');


    }


    display() {

        this.back.position(displayWidth / 2 - 230, displayHeight / 2 + 50);

        this.rules.html("𝗥 𝗨 𝗟 𝗘 𝗦");
        this.rules.position(displayWidth / 2 - 200, displayHeight / 2 - 500);

        this.rule1.html("• 𝔗𝔥𝔢𝔯𝔢 𝔞𝔯𝔢 3 𝔩𝔢𝔳𝔢𝔩𝔰 𝔦𝔫 𝔱𝔥𝔢 𝔤𝔞𝔪𝔢");
        this.rule1.position(displayWidth / 2 - 300, displayHeight / 2 - 350);

        this.rule2.html('• 𝔜𝔬𝔲 𝔥𝔞𝔳𝔢 𝔱𝔬 𝔠𝔬𝔩𝔩𝔢𝔠𝔱 𝔱𝔥𝔢 𝔦𝔱𝔢𝔪𝔰 𝔟𝔶 𝔠𝔩𝔦𝔠𝔨𝔦𝔫𝔤 𝔬𝔫 𝔦𝔱!');
        this.rule2.position(displayWidth / 2 - 350, displayHeight / 2 - 300);

        this.rule3.html('• 𝔈𝔳𝔢𝔯𝔶 𝔦𝔱𝔢𝔪 𝔤𝔦𝔳𝔢𝔰 𝔞 𝔭𝔬𝔦𝔫𝔱 𝔢𝔵𝔠𝔢𝔭𝔱 𝔰𝔬𝔪𝔢 ! !');
        this.rule3.position(displayWidth / 2 - 325, displayHeight / 2 - 250);
        0,
            this.rule4.html('• 𝔑𝔒𝔗𝔈 :- S𝔬𝔪𝔢 𝔦𝔱𝔢𝔪𝔰 𝔪𝔞y 𝔯𝔢𝔰𝔲𝔩𝔱 𝔦𝔫 𝔩𝔬𝔰𝔰 𝔬𝔣 𝔞 𝔭𝔬𝔦𝔫𝔱!');
        this.rule4.position(displayWidth / 2 - 360, displayHeight / 2 - 200);

        this.rule5.html('• 𝔗𝔥𝔢 𝔇𝔦𝔣𝔣𝔦𝔠𝔲𝔩𝔱𝔶 𝔴𝔦𝔩𝔩 𝔦𝔫𝔠𝔯𝔢𝔞𝔰𝔢 𝔞𝔠𝔠𝔬𝔯𝔡𝔦𝔫𝔤 𝔱𝔬 𝔱𝔥𝔢 𝔩𝔢𝔳𝔢𝔩');
        this.rule5.position(displayWidth / 2 - 390, displayHeight / 2 - 150);


    }
}