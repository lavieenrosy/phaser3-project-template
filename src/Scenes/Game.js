import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    // load in the tilemap
    this.load.tilemapTiledJSON('test', 'assets/tilemaps/test.json');
    // load in the spritesheet
    this.load.spritesheet('RPGpack_sheet', 'assets/images/RPGpack_sheet.png', { frameWidth: 64, frameHeight: 64 }) //this obj contains the config options for the spritesheet, can define things like frame width and height, each individual sprite in the sheet, margins between sprites, etc.
  }

  create () {
    // create our tilemap
    this.createMap();
  }

  createMap () {
    // create the tilemap
    this.map = this.make.tilemap({ key: 'test'});
    // add tileset image
    this.tiles = this.map.addTilesetImage('RPGpack_sheet');
    // create each layer
    this.backgroundLayer = this.map.createStaticLayer('Background', this.tiles, 0, 0) // name of layer, tileset image,
    this.blockedLayer = this.map.createStaticLayer('Blocked', this.tiles, 0, 0);
  }


}