// init image explore
const img_bullet_explore = new Image()
img_bullet_explore.src = "RESOURCE/Image/explosion.png"
exports.img_bullet_explore = img_bullet_explore

const img_tank_explore_1 = new Image()
const img_tank_explore_2 = new Image()
const img_tank_explore_3 = new Image()
const img_tank_explore_4 = new Image()

img_tank_explore_1.src = "RESOURCE/Image/bullet_exp1.png"
img_tank_explore_2.src = "RESOURCE/Image/bullet_exp2.png"
img_tank_explore_3.src = "RESOURCE/Image/bullet_exp3.png"
img_tank_explore_4.src = "RESOURCE/Image/bullet_exp4.png"

exports.img_tank_explore_1 = img_tank_explore_1
exports.img_tank_explore_2 = img_tank_explore_2
exports.img_tank_explore_3 = img_tank_explore_3
exports.img_tank_explore_4 = img_tank_explore_4


// init image bullet
const img_bullet = new Image()
img_bullet.src = "RESOURCE/Image/bullet.png"
exports.img_bullet = img_bullet


// init tank
const image_up_player_up_1 = new Image()
const image_up_player_up_2 = new Image()
const image_up_player_up_3 = new Image()
const image_up_player_up_4 = new Image()

image_up_player_up_1.src = "RESOURCE/Image/bossyellow_1.png"
image_up_player_up_2.src = "RESOURCE/Image/bossyellow_2.png"
image_up_player_up_3.src = "RESOURCE/Image/bossyellow_3.png"
image_up_player_up_4.src = "RESOURCE/Image/bossyellow_4.png"

exports.image_up_player_up_1 = image_up_player_up_1
exports.image_up_player_up_2 = image_up_player_up_2
exports.image_up_player_up_3 = image_up_player_up_3
exports.image_up_player_up_4 = image_up_player_up_4

const image_up_enemy_up_1 = new Image()
const image_up_enemy_up_2 = new Image()
const image_up_enemy_up_3 = new Image()
const image_up_enemy_up_4 = new Image()

image_up_enemy_up_1.src = "RESOURCE/Image/player_green_1.png"
image_up_enemy_up_2.src = "RESOURCE/Image/player_green_2.png"
image_up_enemy_up_3.src = "RESOURCE/Image/player_green_3.png"
image_up_enemy_up_4.src = "RESOURCE/Image/player_green_4.png"

exports.image_up_enemy_up_1 = image_up_enemy_up_1
exports.image_up_enemy_up_2 = image_up_enemy_up_2
exports.image_up_enemy_up_3 = image_up_enemy_up_3
exports.image_up_enemy_up_4 = image_up_enemy_up_4


const img_brick = new Image()
img_brick.src = "RESOURCE/Image/brick.png"
// map
exports.img_brick = new Image()

// sound
exports.new_player = new Audio('RESOURCE/sound/eatBonus1.wav')
exports.audio_start_game = new Audio('RESOURCE/sound/enter_game.wav')
exports.audio_tank_shoot = new Audio('RESOURCE/sound/shoot.wav')
exports.audio_tank_explore = new Audio('RESOURCE/sound/explosion_tank.wav')
exports.audio_bullet_explore = new Audio('RESOURCE/sound/explosion.wav')
