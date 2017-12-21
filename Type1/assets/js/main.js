var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'playable', { preload: preload, create: create });
var click = 1, out = 0, over = 1;
var btns = [], sprite, curChar, pos = [], clicked = {};

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
  game.load.spritesheet('btn00', 'assets/images/btn_final.jpg', 320, 64); // width=640
  game.load.spritesheet('btn01', 'assets/images/btn_01.jpg', 65, 64); // width=130
  game.load.spritesheet('btn02', 'assets/images/btn_02.jpg', 64, 64); // width=128
  game.load.spritesheet('btn03', 'assets/images/btn_03.jpg', 64, 64); // width=128
  game.load.spritesheet('btn04', 'assets/images/btn_04.jpg', 64, 64); // width=128
  game.load.spritesheet('btn05', 'assets/images/btn_05.jpg', 63, 64); // width=126

  /***** Title *****/
  game.load.image('title00', 'assets/images/title_text.png');
  game.load.spritesheet('title01', 'assets/images/title_spark_left.png', 46, 36);
  game.load.spritesheet('title02', 'assets/images/title_spark_right.png', 35, 40);
  game.load.image('cta', 'assets/images/CTA.png');
}

function create() {
  game.add.tileSprite(0, 0, 320, 480, 'bg');

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
        pos = [ 1, 98 ];
        clicked.char01 = true;
        break;
      case 'btn02':
        btnNo = 1;
        curChar = 'char02';
        pos = [ 1, 93 ];
        clicked.char02 = true;
        break;
      case 'btn03':
        btnNo = 2;
        curChar = 'char03';
        pos = [ 2, 96 ];
        clicked.char03 = true;
        break;
      case 'btn04':
        btnNo = 3;
        curChar = 'char04';
        pos = [ 3, -1 ];
        clicked.char04 = true;
        break;
      case 'btn05':
        btnNo = 4;
        curChar = 'char05';
        pos = [ 3, 94 ];
        clicked.char05 = true;
        break;
      default:
        break;
    }

    // draw character
    if (sprite) {
      sprite.kill();
      for (var btn in btns) {
        btns[btn].kill();
      }
    }
    sprite = game.add.sprite(pos[0], pos[1], curChar);

    // draw title
    game.add.sprite(46, 5, 'title00');
    game.add.sprite(0, 20, 'title01');
    game.add.sprite(270, 15, 'title02');
    game.add.sprite(5, 300, 'cta');

    // if all clicked then show link button
    if (clicked.char01 && clicked.char02 && clicked.char03 && clicked.char04 && clicked.char05) {
      game.add.button(0, 416, 'btn00', actionOnClick2, this, click, out, over);
    } else {
      btns = [];
      btns.push(game.add.button(0, 416, 'btn01', actionOnClick1('btn01'), this, click, out, over));
      btns.push(game.add.button(65, 416, 'btn02', actionOnClick1('btn02'), this, click, out, over));
      btns.push(game.add.button(129, 416, 'btn03', actionOnClick1('btn03'), this, click, out, over));
      btns.push(game.add.button(193, 416, 'btn04', actionOnClick1('btn04'), this, click, out, over));
      btns.push(game.add.button(257, 416, 'btn05', actionOnClick1('btn05'), this, click, out, over));

      // draw buttons
      btns[btnNo].setFrames(click, click, click);
    }
  };
}

function actionOnClick2() {
  alert('CTA ACTION');
}
