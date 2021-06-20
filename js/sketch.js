var bg, bg2, bg3, bg4, bg5, bg6, bgSound;
var bread, breadImg;
var carrot, carrotImg;
var potato, potatoImg;
var cheese, cheeseImg;
var pizza, pizzaImg;
var burger, burgerImg;
var diamond, diamondImg, diamondGroup;
var rottenMeat, rottenMeatImg;
var dangerSign, dangerSignImg;
var pointer, pointerImg;
var gameState = 0;
var score = 0;
var pointer
var badItemGroup, itemGroup, dangerGroup, junkFoodGroup;
var item, badItem, dangerItem, junkFood;
var timelimit = 900;

function preload() {

    bg = loadImage("images/bg.jpg");
    bg2 = loadImage("images/bg2.jpg");
    bg3 = loadImage("images/bg3.jpg");
    bg4 = loadImage("images/bg4.jpg");
    bg5 = loadImage("images/bg5.jpg");
    bg6 = loadImage("images/bg6.jpg");
    breadImg = loadImage("images/bread.png");
    carrotImg = loadImage("images/carrot.png");
    dangerSignImg = loadImage("images/danger-sign.png");
    diamondImg = loadImage("images/diamond.png");
    potatoImg = loadImage("images/potato.png");
    cheeseImg = loadImage("images/cheese.png");
    pizzaImg = loadImage("images/pizza.png");
    burgerImg = loadImage("images/burger.png");
    pointerImg = loadImage("images/pointer.png");
    rottenMeatImg = loadImage("images/rotten meat.png");
}


function setup() {

    createCanvas(displayWidth, displayHeight - 115);



    breadGroup = new Group()
    itemGroup = new Group()
    badItemGroup = new Group()
    rareItemGroup = new Group()
    dangerGroup = new Group()
    junkFoodGroup = new Group()
    diamondGroup = new Group()

    Screen = new StartingScreen();

    Rules = new Rules();


    pointer = createSprite(0, 0);
    pointer.addImage(pointerImg);
    pointer.scale = 0.1;
    pointer.depth = 10;


}


function draw() {

    // bgSound.play();

    background(bg);

    console.log(gameState);

    cursor()

    if (gameState === 0) {
        Screen.display()

        Rules.back.hide()

        pointer.visible = false
        Screen.button.mousePressed(() => {
            gameState = 1;
        })

        Screen.button2.mousePressed(() => {
            gameState = 2;
        })
    }



    if (gameState === 1) {

        //Level 1

        noCursor()
        pointer.visible = true

        background(bg3);

        Screen.button.hide()
        Screen.button2.hide()
        Screen.title.hide()
        Screen.title2.hide()
        Screen.title3.hide()
        Rules.back.hide()

        SpawnItems1()
        BadItems1()

        if (score >= 25) {
            gameState = 3;
            background(bg3);
        }

        if (score < 0) {
            gameState = "lost";

        }

        textSize(30);
        fill("black");
        text("ミ★ 𝘓𝘌𝘝𝘌𝘓 1 ★彡", displayWidth / 2 - 200, 60);
    }

    if (gameState === 1) {
        fill("black");
        stroke("orange");
        textSize(30);
        text("𝓢𝓒𝓞𝓡𝓔 : " + score, 70, 70);
    }

    if (gameState === 2) {

        pointer.visible = false;

        background(bg2);
        Screen.button.hide()
        Screen.button2.hide()
        Screen.title.hide()
        Screen.title2.hide()
        Screen.title3.hide()

        Rules.display()
        Rules.rules.show()
        Rules.rule1.show()
        Rules.rule2.show()
        Rules.rule3.show()
        Rules.rule4.show()
        Rules.rule5.show()
        Rules.back.show()

        Rules.back.mousePressed(() => {
            gameState = 0;

            Screen.button.show()
            Screen.button2.show()
            Screen.title.show()
            Screen.title2.show()
            Screen.title3.show()

            pointer.visible = false
            console.log(gameState);

            Rules.rules.hide()
            Rules.rule1.hide()
            Rules.rule2.hide()
            Rules.rule3.hide()
            Rules.rule4.hide()
            Rules.rule5.hide()

        })
    }


    pointer.x = mouseX;
    pointer.y = mouseY;

    if (gameState === 3) {

        pointer.visible = false;

        badItemGroup.destroyEach()
        itemGroup.destroyEach()
        dangerGroup.destroyEach()
        junkFoodGroup.destroyEach()
        diamondGroup.destroyEach()

        background(bg2);

        fill("orange");
        textSize(30);
        text("𝚈𝙾𝚄 𝙿𝙰𝚂𝚂𝙴𝙳 𝚃𝙷𝙴 𝙻𝙴𝚅𝙴𝙻!", 300, 150);
        text(" нмм... ѕσ уσυ αяє ησт ησσв ι ѕєє... ", 300, 300);
        text("ησω ѕσℓνє тнє ηєχт ℓєνєℓ ℓєтѕ ѕєє ιƒ уσυ ωιℓℓ ραѕѕ тнє ℓєνєℓ σя ησт ..нєнєнє ", 300, 400);
        text(" ¢ℓι¢к тσ ρℓαу ηєχт ℓєνєℓ :- ", 300, 700);

        Screen.button.show()
        Screen.button.position(700, 680);
        Screen.button.mousePressed(() => {
            score = 0;

            gameState = 4;
        })
    }


    if (gameState === 4) {

        //Level 2

        noCursor()
        pointer.visible = true

        background(bg4);

        SpawnItems2()
        BadItems2()
        Screen.button.hide()

        fill("orange");
        textSize(30);
        text("𝓢𝓒𝓞𝓡𝓔 : " + score, 70, 70);

        if (score >= 50) {
            gameState = 5

        }

        if (score < 0) {
            gameState = "lost";
            background(bg2);
        }

        textSize(30);
        fill("orange");
        stroke("black");
        text("ミ★ 𝘓𝘌𝘝𝘌𝘓 2 ★彡", displayWidth / 2 - 200, 60);

    }


    if (gameState === 5) {

        pointer.visible = false;

        badItemGroup.destroyEach()
        itemGroup.destroyEach()
        dangerGroup.destroyEach()
        junkFoodGroup.destroyEach()
        diamondGroup.destroyEach()

        background(bg2);

        fill("yellow");
        textSize(30);
        text("𝙻𝙾𝙻 𝚈𝙾𝚄 𝙰𝙶𝙰𝙸𝙽 𝙿𝙰𝚂𝚂𝙴𝙳 𝚃𝙷𝙴 𝙻𝙴𝚅𝙴𝙻!", 650, 100);
        text(" σмg! уσυ ραѕѕє∂ тнє ℓєνєℓ ", 700, 300);
        text(" ησω ι ¢αη ѕαу тнαт уσυя αяє α ρяσ ιη тнιѕ gαмє ", 600, 400);
        text("тнє ℓαѕт ℓєνєℓ ιѕ мα∂є ƒσя ρєσρℓє ℓιкє уσυ ", 650, 500);
        text(" ¢ℓι¢к тσ ρℓαу ℓαѕт ℓєνєℓ :-", 600, 600);

        Screen.button.show()
        Screen.button.position(1000, 575);
        Screen.button.mousePressed(() => {
            score = 0;

            gameState = 6;
        })

    }

    if (gameState === 6) {

        //Level 3

        noCursor()
        pointer.visible = true

        background(bg5);

        Screen.button.hide()
        SpawnItems3()
        BadItems3()
        lifeLine()

        fill("orange");
        textSize(30);
        text("𝓢𝓒𝓞𝓡𝓔 : " + score, 70, 70);

        if (score >= 100) {
            gameState = "end";
        }

        if (score < 0) {
            gameState = "lost";
            background(bg2);
        }

        textSize(30);
        fill("orange");
        stroke("black");
        text("ミ★ 𝘓𝘌𝘝𝘌𝘓 3 ★彡", displayWidth / 2 - 200, 60);
    }

    if (gameState === "end") {

        pointer.visible = false;

        badItemGroup.destroyEach()
        itemGroup.destroyEach()
        dangerGroup.destroyEach()
        junkFoodGroup.destroyEach()
        diamondGroup.destroyEach()

        background(bg6);

        textSize(30);
        fill("orange");
        text("ωσαн! уσυ ¢σмρℓєтє∂ тнє gαмє!", 600, 150);
        text("уσυ αяє αη αвѕσℓυтє ℓєgєη∂", 600, 250);
        text("тнαηкѕ α ℓσт ƒσя ρℓαуιηg συя gαмє ...ιт мєαηѕ α ℓσт :)", 475, 400);
        text("𝘊𝘭𝘰𝘴𝘦 𝘵𝘩𝘦 𝘵𝘢𝘣 𝘵𝘰 𝘦𝘹𝘪𝘵", 700, 700);

        text("Click here to play again : -",500,500);

        Screen.button.show()
        Screen.button.position(900,480);
        Screen.button.mousePressed(()=>{

            Screen.button.show()
            Screen.button2.show()
            Screen.title.show()
            Screen.title2.show()
            Screen.title3.show()

            score = 0;

            gameState = 0;
        })


    }

    if (gameState === "lost") {

        background(bg2);
        pointer.visible = false;

        badItemGroup.destroyEach()
        itemGroup.destroyEach()
        dangerGroup.destroyEach()
        junkFoodGroup.destroyEach()
        diamondGroup.destroyEach()

        textSize(30);
        fill("orange");
        text("Oh no! You failed", 100, 200);
        text("No Problem you can try again", 100, 300);

        fill("turquoise");
        text("'𝙒𝙚 𝙈𝙖𝙮 𝙀𝙣𝙘𝙤𝙪𝙣𝙩𝙚𝙧 𝙈𝙖𝙣𝙮 𝘿𝙚𝙛𝙚𝙖𝙩𝙨,",100,450);
        text("𝘽𝙪𝙩 𝙒𝙚 𝙈𝙪𝙨𝙩 𝙉𝙤𝙩 𝘽𝙚 𝘿𝙚𝙛𝙚𝙖𝙩𝙚𝙙.'",100,500);
        textSize(20);
        text("- 𝗠𝗔𝗬𝗔  𝗔𝗡𝗚𝗘𝗟𝗢𝗨",400,550);

        textSize(30);
        fill("cyan");
        text("Click to play again : -", 100, 700)

        Screen.button.show()
        Screen.button.position(390, 680);
        Screen.button.mousePressed(() => {

            Screen.button.show()
            Screen.button2.show()
            Screen.title.show()
            Screen.title2.show()
            Screen.title3.show()

            score = 0;

            gameState = 0;

        })

    }


    drawSprites()



    for (var i = 0; i < itemGroup.length; i++) {
        var temp_item = itemGroup.get(i);

        if (mousePressedOver(temp_item)) {
            score = score + 1;

            temp_item.destroy()
        }
    }

    for (var k = 0; k < badItemGroup.length; k++) {
        var temp_badItem = badItemGroup.get(k);
        if (mousePressedOver(temp_badItem)) {
            score = score - 1;

            temp_badItem.destroy()
        }

    }

    for (var w = 0; w < dangerGroup.length; w++) {
        var temp_dangerItem = dangerGroup.get(w);
        console.log(temp_dangerItem);
        if (mousePressedOver(temp_dangerItem)) {
            score = 0;

            temp_dangerItem.destroy()
        }
    }

    for (var x = 0; x < junkFoodGroup.length; x++) {
        var temp_junkItem = junkFoodGroup.get(x);
        if (mousePressedOver(temp_junkItem)) {

            var rand = Math.round(random(1, 2));

            switch (rand) {
                case 1: score = score + 1
                    break;
                case 2: score = score - 1
                    break;
                default: break;

            }

            temp_junkItem.destroy()
        }


    }

    for (var j = 0; j < diamondGroup.length; j++) {
        var temp_diamondItem = diamondGroup.get(j);
        if (mousePressedOver(temp_diamondItem)) {
            score = score + 50;

            temp_diamondItem.destroy()
        }
    }

}

function SpawnItems1() {

    if (frameCount % Math.round(random(10, 40)) === 0) {

        item = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1: item.addImage(breadImg);
                item.scale = 0.4;
                break;
            case 2: item.addImage(carrotImg);
                item.scale = 0.4;
                break;
            case 3: item.addImage(potatoImg);
                item.scale = 0.5;
                break;

            default: break;


        }

        pointer.depth = item.depth + 1
        item.lifetime = 60;
        itemGroup.add(item);


    }

    if (frameCount % Math.round(random(30, 50)) === 0) {

        junkFood = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));

        switch (rand) {
            case 1: junkFood.addImage(cheeseImg);
                junkFood.scale = 0.3;
                break;

            case 2: junkFood.addImage(pizzaImg);
                junkFood.scale = 0.3;
                break;

            case 3: junkFood.addImage(burgerImg);
                junkFood.scale = 0.4;
                break;

            default: break;
        }


        pointer.depth = junkFood.depth + 1
        junkFood.lifetime = 60;
        junkFoodGroup.add(junkFood);

    }
}

function BadItems1() {

    if (frameCount % Math.round(random(30, 70)) === 0) {

        badItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));

        var rand = 1;
        switch (rand) {
            case 1: badItem.addImage(rottenMeatImg);
                badItem.scale = 0.5;
                break;
            default: break;
        }

        pointer.depth = badItem.depth + 1
        badItem.lifetime = 50;
        badItemGroup.add(badItem)

    }

    if (frameCount % Math.round(random(150, 200)) === 0) {

        dangerItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));
        dangerItem.scale = 0.2;
        pointer.depth = dangerItem.depth + 1
        dangerItem.lifetime = 50;
        dangerItem.addImage(dangerSignImg);

        dangerGroup.add(dangerItem);
    }
}


function SpawnItems2() {

    if (frameCount % Math.round(random(20, 60)) === 0) {

        item = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1: item.addImage(breadImg);
                item.scale = 0.4;
                break;
            case 2: item.addImage(carrotImg);
                item.scale = 0.4;
                break;
            case 3: item.addImage(potatoImg);
                item.scale = 0.5;
                break;

            default: break;


        }

        pointer.depth = item.depth + 1

        var rand = Math.round(random(1, 2));

        switch (rand) {
            case 1: item.velocityX = -5;
                break;

            case 2: item.velocityX = 5;
                break;

            default: break;
        }

        item.lifetime = 30;
        itemGroup.add(item);
    }

    if (frameCount % Math.round(random(30, 60)) === 0) {

        junkFood = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));

        switch (rand) {
            case 1: junkFood.addImage(cheeseImg);
                junkFood.scale = 0.3;
                break;

            case 2: junkFood.addImage(pizzaImg);
                junkFood.scale = 0.3;
                break;

            case 3: junkFood.addImage(burgerImg);
                junkFood.scale = 0.4;
                break;

            default: break;
        }

        pointer.depth = junkFood.depth + 1


        var rand = Math.round(random(1, 2));

        switch (rand) {
            case 1: junkFood.velocityX = -5;
                break;

            case 2: junkFood.velocityX = 5;
                break;

            default: break;
        }

        junkFood.lifetime = 30;
        junkFoodGroup.add(junkFood);



    }
}



function BadItems2() {

    if (frameCount % Math.round(random(20, 60)) === 0) {

        badItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));

        var rand = 1
        switch (rand) {
            case 1: badItem.addImage(rottenMeatImg);
                badItem.scale = 0.5;
                break;

            default: break;
        }

        var rand = Math.round(random(1, 2));

        switch (rand) {
            case 1: badItem.velocityX = -5;
                break;
            case 2: badItem.velocityX = 5;
                break;

            default: break;
        }

        pointer.depth = badItem.depth + 1
        badItem.lifetime = 60;
        badItemGroup.add(badItem)

    }

    if (frameCount % Math.round(random(150, 200)) === 0) {

        dangerItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));
        dangerItem.addImage(dangerSignImg);
        pointer.depth = dangerItem.depth + 1
        dangerItem.scale = 0.2;
        dangerItem.lifetime = 70;

        var rand = Math.round(random(1, 2));

        switch (rand) {
            case 1: dangerItem.velocityX = -2;
                break;
            case 2: dangerItem.velocityX = 2;
                break;

            default: break;
        }

        dangerGroup.add(dangerItem);
    }
}

function SpawnItems3() {

    if (frameCount % Math.round(random(30, 40)) === 0) {

        item = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1: item.addImage(breadImg);
                item.scale = 0.4;
                break;
            case 2: item.addImage(carrotImg);
                item.scale = 0.4;
                break;
            case 3: item.addImage(potatoImg);
                item.scale = 0.5;
                break;

            default: break;


        }

        pointer.depth = item.depth + 1

        var rand = Math.round(random(1, 4));

        switch (rand) {
            case 1: item.velocityX = -7;
                break;

            case 2: item.velocityX = 7;
                break;

            case 3: item.veloxityY = 7;
                break;

            case 4: item.veloxityY = -7;
                break;

            default: break;
        }


        item.lifetime = 25;
        itemGroup.add(item);
    }

    if (frameCount % Math.round(random(30, 60)) === 0) {

        junkFood = createSprite(Math.round(random(50, 1500)), Math.round(random(100, 800)));

        var rand = Math.round(random(1, 3));

        switch (rand) {
            case 1: junkFood.addImage(cheeseImg);
                junkFood.scale = 0.3;
                break;

            case 2: junkFood.addImage(pizzaImg);
                junkFood.scale = 0.3;
                break;

            case 3: junkFood.addImage(burgerImg);
                junkFood.scale = 0.4;
                break;

            default: break;
        }

        pointer.depth = junkFood.depth + 1


        var rand = Math.round(random(1, 4));

        switch (rand) {
            case 1: junkFood.velocityX = -5;
                break;

            case 2: junkFood.velocityX = 5;
                break;

            case 3: junkFood.velocityY = -5;
                break;

            case 4: junkFood.velocityY = 5;
                break;

            default: break;
        }

        junkFood.lifetime = 30;
        junkFoodGroup.add(junkFood);



    }
}

function BadItems3() {

    if (frameCount % Math.round(random(10, 40)) === 0) {

        badItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));

        var rand = 1;
        switch (rand) {
            case 1: badItem.addImage(rottenMeatImg);
                badItem.scale = 0.5;
                break;

            default: break;
        }

        var rand1 = Math.round(random(1, 4));

        switch (rand1) {
            case 1: badItem.velocityX = -7;
                break;
            case 2: badItem.velocityX = 7;
                break;
            case 3: badItem.velocityY = 7;
                break;
            case 4: badItem.velocityY = -7;
                break;

            default: break;
        }

        pointer.depth = badItem.depth + 1
        badItem.lifetime = 70;
        badItemGroup.add(badItem)


        if (frameCount % Math.round(random(150, 200)) === 0) {

            dangerItem = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));
            dangerItem.addImage(dangerSignImg);
            dangerItem.scale = 0.2;
            dangerItem.lifetime = 100;

            var rand2 = Math.round(random(1, 4));

            switch (rand2) {
                case 1: dangerItem.velocityX = -3;
                    break;
                case 2: dangerItem.velocityX = 3;
                    break;
                case 3: dangerItem.velocityY = 3;
                    break;
                case 4: dangerItem.velocityY = -3;
                    break;

                default: break;
            }


            dangerGroup.add(dangerItem);
        }


    }
}

function lifeLine() {

    if (frameCount % Math.round(random(300, 500)) === 0) {

        diamond = createSprite(Math.round(random(150, 1200)), Math.round(random(250, 800)));
        diamond.addImage(diamondImg);
        diamond.scale = 0.7;
        diamond.lifetime = 100;

        var rand = Math.round(random(1, 4));

        switch (rand) {
            case 1: diamond.velocityX = -3;
                break;
            case 2: diamond.velocityX = 3;
                break;
            case 3: diamond.velocityY = 3;
                break;
            case 4: diamond.velocityY = -3;
                break;

            default: break;
        }

        diamondGroup.add(diamond);
    }
}