const set_name = 'CherryMX Brown - ABS keycaps';
const set_tags = {
  switches: 'cherrymx',
  type: 'brown',
  feedback: 'tactile',
  is_lubed: false,
  keycap: 'abs',
};
const sound_file = 'sound.ogg';
const keycodes = {
  // row 1
  '27': [1402, 170], // escape
  '112': [1852, 162], // f1
  '113': [2275, 155], // f2
  '114': [2668, 167], // f3
  '115': [3054, 162], // f4
  '116': [3467, 161], // f5
  '117': [3877, 151], // f6
  '118': [4501, 120], // f7
  '119': [4951, 141], // f8
  '120': [5381, 133], // f9
  '121': [5779, 145], // f10
  '122': [6207, 139], // f11
  '123': [6637, 127], // f12
  '44': [7023, 161], // 'print screen'
  '145': [7448, 142], // 'scroll lock'
  '19': [7874, 148], // pause/break

  // row 2
  '192': [8365, 166], // 'back quote'
  '49': [8760, 173], // '1'
  '50': [9149, 167], // '2'
  '51': [9550, 165], // '3'
  '52': [9942, 150], // '4'
  '53': [10370, 145], // '5'
  '54': [10791, 140], // '6'
  '55': [11205, 150], // '7'
  '56': [11603, 136], // '8'
  '57': [12012, 148], // '9'
  '48': [12440, 140], // '0'
  '189': [12844, 131], // minus
  '187': [13231, 132], // equals
  '8': [13667, 134], // backspace
  '45': [14084, 125], // insert
  '36': [14500, 142], // home
  '33': [14877, 146], // 'page up'

  // row 3
  '9': [15286, 161], // tab
  '81': [15665, 180], // q
  '87': [16052, 171], // w
  '69': [16411, 174], // e
  '82': [16772, 158], // r
  '84': [17124, 178], // t
  '89': [17478, 142], // y
  '85': [17843, 146], // u
  '73': [18212, 139], // i
  '79': [18611, 148], // o
  '80': [19036, 134], // p
  '219': [19440, 127], // 'open bracket'
  '221': [19854, 192], // 'close bracket'
  '220': [20262, 143], // 'back slash'
  '46': [20713, 139], // delete
  '35': [21121, 151], // end
  '34': [21527, 142], // 'page down'

  // row 4
  '20': [21920, 176], // 'caps lock'
  '65': [22324, 167], // a
  '83': [22698, 167], // s
  '68': [23072, 163], // d
  '70': [23408, 178], // f
  '71': [23770, 183], // g
  '72': [24140, 145], // h
  '74': [24525, 154], // j
  '75': [24919, 138], // k
  '76': [25314, 142], // l
  '186': [25711, 129], // semicolon
  '222': [26121, 123], // quote
  '13': [26548, 119], // enter

  // row 5
  '160': [27208, 158], // 'left shift'
  '90': [27589, 164], // z
  '88': [27978, 160], // x
  '67': [28321, 160], // c
  '86': [28694, 162], // v
  '66': [29071, 152], // b
  '78': [29485, 159], // n
  '77': [29873, 137], // m
  '188': [30269, 139], // comma
  '190': [30664, 132], // period
  '191': [31026, 138], // slash
  '161': [31455, 139], // 'right shift'
  '38': [32054, 167], // up

  // row 6
  '162': [32761, 168], // 'left control'
  '91': [33157, 170], // 'left meta'
  '164': [33530, 170], // 'left alt'
  '32': [37338, 200], // space
  '165': [34354, 157], // 'right alt'
  '93': [34762, 147], // menu key // 'right meta'
  /* blank */
  '163': [35572, 139], // 'right control'
  '37': [35966, 143], // left
  '40': [36356, 147], // down
  '39': [36787, 170], // right
};

module.exports = { set_name, set_tags, keycodes, sound_file };