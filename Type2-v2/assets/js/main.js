var game = new Phaser.Game(480, 320, Phaser.CANVAS, 'playable', { preload: preload, create: create });
var click = 1, out = 0, over = 1;
var btns = [], sprOffset = [], sprChar, sprTitle00, sprTitle01, sprTitle02, sprCTA, curChar, clicked = {};

function preload() {
  /***** Background *****/
  game.stage.backgroundColor = '#fff';
  game.load.image('bg', 'assets/images/BG.jpg');

  /***** Characters *****/
  game.load.image('char01', 'assets/images/main_01.png');
  game.load.image('char02', 'assets/images/main_02.png');
  game.load.image('char03', 'assets/images/main_03.png');
  game.load.image('char04', 'assets/images/main_04.png');
  game.load.image('char05', 'assets/images/main_05.png');

  /***** Buttons *****/
  game.load.spritesheet('btn00', 'assets/images/btn_final.jpg', 214, 46);
  game.load.spritesheet('btn01', 'assets/images/btn_01.jpg', 43, 43); // width=86
  game.load.spritesheet('btn02', 'assets/images/btn_02.jpg', 43, 43); // width=86
  game.load.spritesheet('btn03', 'assets/images/btn_03.jpg', 43, 43); // width=86
  game.load.spritesheet('btn04', 'assets/images/btn_04.jpg', 43, 43); // width=86
  game.load.spritesheet('btn05', 'assets/images/btn_05.jpg', 43, 43); // width=86

  /***** Title *****/
  game.load.image('title00', 'assets/images/title_text.png');
  game.load.spritesheet('title01', 'assets/images/title_spark_left.png', 46, 40, 4);
  game.load.spritesheet('title02', 'assets/images/title_spark_right.png', 35, 40, 4);
  game.load.spritesheet('cta', 'assets/images/CTA.png', 112, 17, 8);
}

function create() {
  game.add.tileSprite(0, 0, 480, 320, 'bg');

  // 디폴트 종족 선택
  actionOnClick1('btn01')();
}

function actionOnClick1(btnName) {
  return function() {
    var btnNo;
    switch (btnName) {
      case 'btn01':
        btnNo = 0;
        curChar = 'char01';
        sprOffset = [223, 30];
        clicked.char01 = true;
        break;
      case 'btn02':
        btnNo = 1;
        curChar = 'char02';
        sprOffset = [223, 25];
        clicked.char02 = true;
        break;
      case 'btn03':
        btnNo = 2;
        curChar = 'char03';
        sprOffset = [223, 28];
        clicked.char03 = true;
        break;
      case 'btn04':
        btnNo = 3;
        curChar = 'char04';
        sprOffset = [223, 20];
        clicked.char04 = true;
        break;
      case 'btn05':
        btnNo = 4;
        curChar = 'char05';
        sprOffset = [225, 25];
        clicked.char05 = true;
        break;
      default:
        break;
    }

    // kill all sprites
    sprChar && sprChar.kill();
    sprTitle00 && sprTitle00.kill();
    sprTitle01 && sprTitle01.kill();
    sprTitle02 && sprTitle02.kill();
    sprCTA && sprCTA.kill();
    for (var btn in btns) {
      btns[btn].kill();
    }

    // draw sprites, images
    sprChar = game.add.sprite(sprOffset[0], sprOffset[1], curChar);
    sprTitle00 = game.add.sprite(30, 80, 'title00');
    sprTitle01 = game.add.sprite(12, 50, 'title01');
    sprTitle01.animations.add('walk');
    sprTitle01.animations.play('walk', /*움직임속도*/10, /*반복*/true);
    sprTitle02 = game.add.sprite(210, 55, 'title02');
    sprTitle02.animations.add('walk');
    sprTitle02.animations.play('walk', /*움직임속도*/10, /*반복*/true);
    sprCTA = game.add.sprite(125, 280, 'cta');
    sprCTA.animations.add('walk');
    sprCTA.animations.play('walk', /*움직임속도*/20, /*반복*/true);
    // show link button
    game.add.button(31, 165, 'btn00', actionOnClick2, this, out, out, out);

    // if all clicked then show link button
    //if (clicked.char01 && clicked.char02 && clicked.char03 && clicked.char04 && clicked.char05) {
    //} else {
      btns = [];
      btns.push(game.add.button(247, 267, 'btn01', actionOnClick1('btn01'), this, click, out, over));
      btns.push(game.add.button(292, 267, 'btn02', actionOnClick1('btn02'), this, click, out, over));
      btns.push(game.add.button(337, 267, 'btn03', actionOnClick1('btn03'), this, click, out, over));
      btns.push(game.add.button(382, 267, 'btn04', actionOnClick1('btn04'), this, click, out, over));
      btns.push(game.add.button(427, 267, 'btn05', actionOnClick1('btn05'), this, click, out, over));

      // draw buttons
      btns[btnNo].setFrames(click, click, click);
    //}
  };
}

function actionOnClick2() {
  window.location.href = 'http://mar.by/v2/4C9B';
}
