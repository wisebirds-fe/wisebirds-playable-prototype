/*
 * @(#)main.js version 2017. 12. 21
 *
 * Copyright by mornya. All rights reserved. Since 2006.
 * This application is based by SAPP Solution.
 */
var game = new Phaser.Game(480, 320, Phaser.CANVAS, 'playable', { preload: preload, create: create });
var click = 1, out = 0, over = 1;
var btns = [], sprite, curChar, pos = [], clicked = {};

function preload() {
  /***** Background *****/
  game.stage.backgroundColor = '#fff';
  game.load.image('bg', 'assets/images/bg.jpg');

  /***** Characters *****/
  game.load.image('char01', 'assets/images/main_01.png');
  game.load.image('char02', 'assets/images/main_02.png');
  game.load.image('char03', 'assets/images/main_03.png');
  game.load.image('char04', 'assets/images/main_04.png');
  game.load.image('char05', 'assets/images/main_05.png');

  /***** Buttons *****/
  game.load.spritesheet('btn00', 'assets/images/btn_final.jpg', 236, 80); // width=472
  game.load.spritesheet('btn01', 'assets/images/btn_01.jpg', 61, 60); // width=122
  game.load.spritesheet('btn02', 'assets/images/btn_02.jpg', 62, 60); // width=124
  game.load.spritesheet('btn03', 'assets/images/btn_03.jpg', 62, 60); // width=124
  game.load.spritesheet('btn04', 'assets/images/btn_04.jpg', 62, 60); // width=124
  game.load.spritesheet('btn05', 'assets/images/btn_05.jpg', 61, 60); // width=122

  /***** Title *****/
  game.load.image('title00', 'assets/images/title_text.png');
  game.load.image('title01', 'assets/images/title_spark_left.png');
  game.load.image('title02', 'assets/images/title_spark_right.png');
  game.load.image('cta', 'assets/images/CTA.png');
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
        pos = [ 214, 11 ];
        clicked.char01 = true;
        break;
      case 'btn02':
        btnNo = 1;
        curChar = 'char02';
        pos = [ 213, 6 ];
        clicked.char02 = true;
        break;
      case 'btn03':
        btnNo = 2;
        curChar = 'char03';
        pos = [ 213, 8 ];
        clicked.char03 = true;
        break;
      case 'btn04':
        btnNo = 3;
        curChar = 'char04';
        pos = [ 213, 0 ];
        clicked.char04 = true;
        break;
      case 'btn05':
        btnNo = 4;
        curChar = 'char05';
        pos = [ 214, 6 ];
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
    game.add.sprite(40, 20, 'title00');
    game.add.sprite(2, 40, 'title01');
    game.add.sprite(262, 35, 'title02');
    game.add.sprite(75, 250, 'cta');

    // if all clicked then show link button
    if (clicked.char01 && clicked.char02 && clicked.char03 && clicked.char04 && clicked.char05) {
      game.add.button(35, 142, 'btn00', actionOnClick2, this, click, out, over);
    } else {
      btns = [];
      btns.push(game.add.button(90, 120, 'btn01', actionOnClick1('btn01'), this, click, out, over));
      btns.push(game.add.button(153, 120, 'btn02', actionOnClick1('btn02'), this, click, out, over));
      btns.push(game.add.button(53, 182, 'btn03', actionOnClick1('btn03'), this, click, out, over));
      btns.push(game.add.button(117, 182, 'btn04', actionOnClick1('btn04'), this, click, out, over));
      btns.push(game.add.button(181, 182, 'btn05', actionOnClick1('btn05'), this, click, out, over));

      // draw buttons
      btns[btnNo].setFrames(click, click, click);
    }
  };
}

function actionOnClick2() {
  alert('CTA ACTION');
}
