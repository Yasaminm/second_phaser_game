var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_All;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 400;
        
        this.game.world.setBounds(0,0,1000,1500);
    },

    preload: function () {
        this.load.image('skyb', 'assets/images/skyb.png');
        this.load.image('bg', 'assets/images/BG.png');
        this.load.image('ground', 'assets/images/2.png');
        this.load.image('groundSR', 'assets/images/3.png');
        this.load.image('groundSL', 'assets/images/1.png');
        this.load.image('gr10', 'assets/images/10.png');
        this.load.image('gr8', 'assets/images/8.png');
        this.load.image('gr9', 'assets/images/9.png');
        this.load.image('gr12', 'assets/images/12.png');
        this.load.image('gr15', 'assets/images/15.png');
        this.load.image('gr13', 'assets/images/13.png');
        this.load.image('watter', 'assets/images/17.png');
        this.load.image('b1', 'assets/images/Bush (1).png');
        this.load.image('b2', 'assets/images/Bush (2).png');
        this.load.image('sign', 'assets/images/Sign_2.png');
        this.load.image('stone', 'assets/images/Stone.png');
        this.load.image('t1', 'assets/images/Tree_1.png');
        this.load.image('t2', 'assets/images/Tree_2.png');
        this.load.image('t3', 'assets/images/Tree_3.png');
        this.load.image('ground_small', 'assets/images/platform-small.png');
        this.load.image('stair', 'assets/images/tile_45.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.spritesheet('fire', 'assets/images/fire.gif', 36 ,93 ,9);

        this.load.spritesheet('player', 'assets/images/boy_walk.png', 95.16666666666667, 158.75, 48);
        this.load.image('rope', 'assets/images/rope.gif');
        this.load.spritesheet('baddie', 'assets/images/baddie.png', 32, 32);
        this.load.audio('sfx', ['assets/soundsEffects/fx_mixdown.mp3', 'assets/soundsEffects/fx_mixdown.ogg']);

    },
    create: function () {
        this.background = this.game.add.sprite(0, 0, 'skyb');
        this.background = this.game.add.sprite(0, 750, 'bg');
        this.g10 = this.game.add.sprite(game.world.width - 375, game.world.height - 128, 'gr10');
        this.g8 = this.game.add.sprite(game.world.width - 503, game.world.height - 128, 'gr8');
        this.g9a = this.game.add.sprite(game.world.width - 128, game.world.height - 472, 'gr9');
        this.g9b = this.game.add.sprite(game.world.width - 200, game.world.height - 472, 'gr9');
        this.g12 = this.game.add.sprite(game.world.width - 305, game.world.height - 472, 'gr12');
        this.grStair = this.game.add.sprite(game.world.width - 200, game.world.height - 600, 'ground');
        this.w1 = this.game.add.sprite(250, game.world.height - 80, 'watter');
        this.w2 = this.game.add.sprite(game.world.width - 128, game.world.height - 130, 'watter');
        this.wf = this.game.add.sprite(game.world.width - 128, game.world.height - 100, 'watter');
        this.b1a = this.game.add.sprite(0, game.world.height - 192, 'b1');
        this.b2a = this.game.add.sprite(50, game.world.height - 192, 'b2');
        this.b1b = this.game.add.sprite(0, game.world.height - 695, 'b1');
        this.b2b = this.game.add.sprite(50, game.world.height - 695, 'b2');
        this.b1d = this.game.add.sprite(game.world.width - 600, game.world.height - 550, 'b1');
        this.b2d = this.game.add.sprite(game.world.width - 520, game.world.height - 530, 'b2');
        this.sign1 = this.game.add.sprite(170, game.world.height - 192, 'sign');
        this.stone = this.game.add.sprite(70, game.world.height - 162, 'stone');
        this.t1 = this.game.add.sprite(1200, game.world.height - 192, 't1');
        this.t2 = this.game.add.sprite(550, game.world.height - 460, 't2');
        this.t3a = this.game.add.sprite(game.world.width - 300, game.world.height - 738, 't3');
        this.t3b = this.game.add.sprite(game.world.width - 150, game.world.height - 875, 't3');
        this.b1c = this.game.add.sprite(500, game.world.height - 300, 'b1');
        this.b2c = this.game.add.sprite(550, game.world.height - 278, 'b2');
        this.rope = this.game.add.sprite(100, game.world.height - 970, 'rope');

        this.t3a.scale.setTo(0.5);
        this.t2.scale.setTo(0.7);
        this.b1d.scale.setTo(0.8);
        this.b2d.scale.setTo(0.5);
        this.b1c.scale.setTo(0.8);
        this.b2c.scale.setTo(0.5);
        this.rope.scale.setTo(1.1);
//        this.rope.anchor.setTo(0.5);
////////////////////////////////////////////////,
          //  {'x': game.world.width - 200, 'y': game.world.height - 600}
        var groundData = [
            {'x': 0, 'y': game.world.height - 128},
            {'x': 0, 'y': game.world.height - 630},
            {'x': game.world.width - 100, 'y': game.world.height - 600}
        ];
        this.grounds = this.add.group();
        this.grounds.enableBody = true;
        groundData.forEach(function (obj) {
            this.grounds.create(obj.x, obj.y, 'ground');
        }, this);
        this.grounds.setAll('body.immovable', true);
        this.grounds.setAll('body.allowGravity', false);


        var groundSideRData = [
            {'x': 128, 'y': game.world.height - 128},
            {'x': game.world.width - 250, 'y': game.world.height - 128},
            {'x': game.world.width - 375, 'y': game.world.height - 250},
            {'x': 128, 'y': game.world.height - 630}
        ];

        this.groundSideR = this.add.group();
        this.groundSideR.enableBody = true;
        groundSideRData.forEach(function (obj) {
            this.groundSideR.create(obj.x, obj.y, 'groundSR');
        }, this);
        this.groundSideR.setAll('body.immovable', true);
        this.groundSideR.setAll('body.allowGravity', false);

        var groundSideLData = [

            {'x': game.world.width - 625, 'y': game.world.height - 128},
            {'x': game.world.width - 503, 'y': game.world.height - 250},
            {'x': game.world.width - 305, 'y': game.world.height - 600}
        ];
        this.groundSideL = this.add.group();
        this.groundSideL.enableBody = true;
        groundSideLData.forEach(function (obj) {
            this.groundSideL.create(obj.x, obj.y, 'groundSL');
        }, this);
        this.groundSideL.setAll('body.immovable', true);
        this.groundSideL.setAll('body.allowGravity', false);


        var gr15Data = [
            {'x': game.world.width - 500, 'y': game.world.height - 500},
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            {'x': game.world.width - 650, 'y': game.world.height - 850},
            {'x': 0, 'y': game.world.height - 1000},
            {'x': game.world.width - 300, 'y': game.world.height - 1000},
            {'x': game.world.width - 550, 'y': game.world.height - 1150},
            {'x': game.world.width - 128, 'y': game.world.height - 1250},
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            {'x': game.world.width - 700, 'y': game.world.height - 400}
        ];

        this.gr15 = this.add.group();
        this.gr15.enableBody = true;
        gr15Data.forEach(function (obj) {
            this.gr15.create(obj.x, obj.y, 'gr15');
        }, this);
        this.gr15.setAll('body.immovable', true);
        this.gr15.setAll('body.allowGravity', false);

        var gr13Data = [
            {'x': game.world.width - 628, 'y': game.world.height - 500},
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            {'x': game.world.width - 778, 'y': game.world.height - 850},
            {'x': game.world.width - 428, 'y': game.world.height - 1000},
            {'x': game.world.width - 678, 'y': game.world.height - 1150},
            {'x': game.world.width - 253, 'y': game.world.height - 1250},
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            {'x': game.world.width - 770, 'y': game.world.height - 400}
        ];
        this.gr13 = this.add.group();
        this.gr13.enableBody = true;
        gr13Data.forEach(function (obj) {
            this.gr13.create(obj.x, obj.y, 'gr13');
        }, this);
        this.gr13.setAll('body.immovable', true);
        this.gr13.setAll('body.allowGravity', false);
        
        var fireData = [
            {'x': game.world.width - 500, 'y': game.world.height - 624},
            {'x': game.world.width - 770, 'y': game.world.height - 524}
        ];
        var fire;
        this.fires = this.add.group();
        this.fires.enableBody = true;
        fireData.forEach(function (obj) {
            fire = this.fires.create(obj.x, obj.y, 'fire');
            fire.animations.add('fire', [0, 1,2,3,4,5,6,7,8], 6, true);
            fire.play('fire');
        }, this);
//        this.fire.setAll('body.immovable', true);
        this.fires.setAll('body.allowGravity', false);
        
        

        var stairData = [
            {'x': game.world.width - 170, 'y': game.world.height - 180},
            {'x': game.world.width - 170, 'y': game.world.height - 244},
            {'x': game.world.width - 170, 'y': game.world.height - 308},
            {'x': game.world.width - 170, 'y': game.world.height - 372},
            {'x': game.world.width - 170, 'y': game.world.height - 436},
            {'x': game.world.width - 170, 'y': game.world.height - 500},
            {'x': game.world.width - 170, 'y': game.world.height - 564},
            {'x': game.world.width - 170, 'y': game.world.height - 600}
        ];
        this.stair = this.add.group();
        this.stair.enableBody = true;
        stairData.forEach(function (obj) {
            this.stair.create(obj.x, obj.y, 'stair');
        }, this);
        this.stair.setAll('body.immovable', true);
        this.stair.setAll('body.allowGravity', false);
        
        
        this.rope.enableBody = true;
//        this.player = this.game.add.sprite(0, game.world.height - 222, 'dude');
//        this.player.customParams = {Score: 30, Life: 100};
//       dog1 = game.add.sprite(790, 250, 'baddie');
//        this.game.physics.arcade.enable(player);
////        game.physics.arcade.enable(dog1);
//        this.player.body.gravity.y = 400;
////        dog1.body.gravity.y = 300;
//        this.player.body.bounce.y = 0.2;
////        dog1.body.bounce.y = 0.1;
//        this.player.body.collideWorldBounds = true;
////        dog1.body.collideWorldBounds = true;
        this.player = this.add.sprite(15, this.game.world.height - 222, 'player', 4);
        this.game.physics.arcade.enable(this.player);
        this.player.scale.setTo(0.5);
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('bottom', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        this.player.animations.add('left', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 12, true);
        this.player.animations.add('right', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 12, true);
        this.player.animations.add('up', [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 12, true);
        this.game.camera.follow(this.player);
//        this.player.play('right');
//        this.player.scale.setTo(0.6);
//        this.player.anchor.setTo(0.5, 0.5);
////        dog1.animations.add('left', [0, 1], 10, true);
////        dog1.animations.add('right', [2, 3], 10, true);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        
    },
//    var direction1 = -1;
    update: function () {
        game.physics.arcade.collide(this.player, this.grounds);
        game.physics.arcade.collide(this.player, this.groundSideR);
        game.physics.arcade.collide(this.player, this.groundSideL);
        game.physics.arcade.collide(this.player, this.gr15);
        game.physics.arcade.collide(this.player, this.gr13);
        game.physics.arcade.overlap(this.player, this.stair, function (player, stair) {
                    this.uiBlocked = false;
        }, null, this);
        game.physics.arcade.overlap(this.player, this.rope, function (player, rope) {
                    this.uiBlocked = false;
        }, null, this);
        
        
        
//        if(game.world.height - 221 >= game.world.width - 872 && game.world.height - 221 <= game.world.width  - 400){
//            this.rope.angle += 0.5;
//        }else if(game.world.height - 221 <= game.world.width - 872 && game.world.height - 221 >= game.world.width  - 400){
//            this.rope.angle -= 0.5;
//        };
//        
        this.uiBlocked = false;
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
             this.player.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = +150;
            this.player.play('right');
//            this.player.animations.play('right');
        }else if (this.cursors.up.isDown && !this.uiBlocked) {
            this.player.body.velocity.x = 0;
                if(this.player.x > (game.world.width - 170)&& this.player.x < game.world.width - 103 ){
                if(this.player.y >= game.world.height - 650){
                     this.player.body.velocity.y = -150;
                this.player.play('up');
//                this.uiBlocked = false;
                };
            }
        }else if (this.cursors.down.isDown && !this.uiBlocked) {
            
            this.player.body.velocity.x = 0;
                if(this.player.x > (game.world.width - 170)&& this.player.x < game.world.width - 103){
                this.player.body.velocity.y = +150;
                this.player.play('bottom');
//            } 
        }
//                console.log(this.player.body.velocity.y);
            this.uiBlocked = false;
//            }
            } else {
            this.player.animations.stop();
            this.player.frame = 9;
        } ;
        
           if (this.jumpBtn.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -480;
            this.player.frame = 31;
//            this.player.animations.stop();
//            this.player.animations.play('right'); 
        }
//        //////////////////////
////         var dogMovement = this.game.add.tween(this.dog3);
////            dogMovement.to(player.x, player.y, 700);
////            dogMovement.onComplete.add(function(){
////                console.log('hello');
////                player.destroy();
////            }, this);
////            dogMovement.start();
//        //////////////////////
//        
        
//
////
////        dog1.body.velocity.x = -150 * direction1;
////        if (dog1.x <= 0) {
////            direction1 = -1;
////            dog1.animations.play('right');
////        }
////        ;
////        if (dog1.x >= game.world.width - 32) {
////            direction1 = 1;
////            dog1.animations.play('left');
////        }
//
//        function playerKilled(player, dog) {
//            player.kill();
//        } ;
//
//    },
        this.isClaimbing = false;
        this.isComingDown = false;
        this.player.body.gravity.y = 0;

//            if(this.player.body.velocity.x<= game.world.width - 200 && ((game.world.height - 180) + (game.world.height - 600))){
//            player.body.velocity.y = 0;
//            console.log('up or down')
//            if (!this.isClimbing && Math.abs(player.x - stair.x) < 10 && this.cursors.down.isDown) {
//            this.isClimbing = true;
//            player.body.velocity.y = +150;
//            player.animations.play('bottom');
//        }
//        else if (!this.isComingDown && Math.abs(player.x - stair.x) < 10 && this.cursors.up.isDown) {
//            this.isComingDown = true;
//            player.body.velocity.y = -150;
//            player.animations.play('up');
//        }
//    }
//        };
//    if(this.player.body.velocity.x<= game.world.width - 200 && ((game.world.height - 180) + (game.world.height - 600))){
//            }

/////////////////////////////////////////////////////////////////////////////////








///////////////////////////////////////////////////////////////////////////////
    }
};
//////////////650
var game = new Phaser.Game(1000, 650, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');
//To make somthing smaller:
//  t3.scale.setTo(0.5);
// this.sheep.anchor.setTo(0.5, 0.5);
//To rotate in update we write:
//this.sheep.angle += 0.5

//openclipart.org , kenney.nl ,