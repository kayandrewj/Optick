let index = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
};

const spectrum = ["rgb(0, 0, 193)",
"rgb(2, 0, 193)",
"rgb(4, 0, 193)",
"rgb(6, 0, 193)",
"rgb(8, 0, 193)",
"rgb(10, 0, 193)",
"rgb(12, 0, 193)",
"rgb(14, 0, 193)",
"rgb(16, 0, 193)",
"rgb(18, 0, 193)",
"rgb(20, 0, 193)",
"rgb(22, 0, 193)",
"rgb(24, 0, 193)",
"rgb(26, 0, 193)",
"rgb(28, 0, 193)",
"rgb(30, 0, 193)",
"rgb(32, 0, 193)",
"rgb(34, 0, 193)",
"rgb(36, 0, 193)",
"rgb(38, 0, 193)",
"rgb(40, 0, 193)",
"rgb(42, 0, 193)",
"rgb(44, 0, 193)",
"rgb(46, 0, 193)",
"rgb(48, 0, 193)",
"rgb(50, 0, 193)",
"rgb(52, 0, 193)",
"rgb(54, 0, 193)",
"rgb(56, 0, 193)",
"rgb(58, 0, 193)",
"rgb(60, 0, 193)",
"rgb(62, 0, 193)",
"rgb(64, 0, 193)",
"rgb(66, 0, 193)",
"rgb(68, 0, 193)",
"rgb(70, 0, 193)",
"rgb(72, 0, 193)",
"rgb(74, 0, 193)",
"rgb(76, 0, 193)",
"rgb(78, 0, 193)",
"rgb(80, 0, 193)",
"rgb(82, 0, 193)",
"rgb(84, 0, 193)",
"rgb(86, 0, 193)",
"rgb(88, 0, 193)",
"rgb(90, 0, 193)",
"rgb(92, 0, 193)",
"rgb(94, 0, 193)",
"rgb(96, 0, 193)",
"rgb(98, 0, 193)",
"rgb(100, 0, 193)",
"rgb(102, 0, 193)",
"rgb(104, 0, 193)",
"rgb(106, 0, 193)",
"rgb(108, 0, 193)",
"rgb(110, 0, 193)",
"rgb(112, 0, 193)",
"rgb(114, 0, 193)",
"rgb(116, 0, 193)",
"rgb(118, 0, 193)",
"rgb(120, 0, 193)",
"rgb(122, 0, 193)",
"rgb(124, 0, 193)",
"rgb(126, 0, 193)",
"rgb(128, 0, 193)",
"rgb(130, 0, 193)",
"rgb(132, 0, 193)",
"rgb(134, 0, 193)",
"rgb(136, 0, 193)",
"rgb(138, 0, 193)",
"rgb(140, 0, 193)",
"rgb(142, 0, 193)",
"rgb(144, 0, 193)",
"rgb(146, 0, 193)",
"rgb(148, 0, 193)",
"rgb(150, 0, 193)",
"rgb(152, 0, 193)",
"rgb(154, 0, 193)",
"rgb(156, 0, 193)",
"rgb(158, 0, 193)",
"rgb(160, 0, 193)",
"rgb(162, 0, 193)",
"rgb(164, 0, 193)",
"rgb(166, 0, 193)",
"rgb(168, 0, 193)",
"rgb(170, 0, 193)",
"rgb(172, 0, 193)",
"rgb(174, 0, 193)",
"rgb(176, 0, 193)",
"rgb(178, 0, 193)",
"rgb(180, 0, 193)",
"rgb(182, 0, 193)",
"rgb(184, 0, 193)",
"rgb(186, 0, 193)",
"rgb(188, 0, 193)",
"rgb(190, 0, 193)",
"rgb(192, 0, 193)",
"rgb(194, 0, 193)",
"rgb(194, 0, 191)",
"rgb(194, 0, 189)",
"rgb(194, 0, 187)",
"rgb(194, 0, 185)",
"rgb(194, 0, 183)",
"rgb(194, 0, 181)",
"rgb(194, 0, 179)",
"rgb(194, 0, 177)",
"rgb(194, 0, 175)",
"rgb(194, 0, 173)",
"rgb(194, 0, 171)",
"rgb(194, 0, 169)",
"rgb(194, 0, 167)",
"rgb(194, 0, 165)",
"rgb(194, 0, 163)",
"rgb(194, 0, 161)",
"rgb(194, 0, 159)",
"rgb(194, 0, 157)",
"rgb(194, 0, 155)",
"rgb(194, 0, 153)",
"rgb(194, 0, 151)",
"rgb(194, 0, 149)",
"rgb(194, 0, 147)",
"rgb(194, 0, 145)",
"rgb(194, 0, 143)",
"rgb(194, 0, 141)",
"rgb(194, 0, 139)",
"rgb(194, 0, 137)",
"rgb(194, 0, 135)",
"rgb(194, 0, 133)",
"rgb(194, 0, 131)",
"rgb(194, 0, 129)",
"rgb(194, 0, 127)",
"rgb(194, 0, 125)",
"rgb(194, 0, 123)",
"rgb(194, 0, 121)",
"rgb(194, 0, 119)",
"rgb(194, 0, 117)",
"rgb(194, 0, 115)",
"rgb(194, 0, 113)",
"rgb(194, 0, 111)",
"rgb(194, 0, 109)",
"rgb(194, 0, 107)",
"rgb(194, 0, 105)",
"rgb(194, 0, 103)",
"rgb(194, 0, 101)",
"rgb(194, 0, 99)",
"rgb(194, 0, 97)",
"rgb(194, 0, 95)",
"rgb(194, 0, 93)",
"rgb(194, 0, 91)",
"rgb(194, 0, 89)",
"rgb(194, 0, 87)",
"rgb(194, 0, 85)",
"rgb(194, 0, 83)",
"rgb(194, 0, 81)",
"rgb(194, 0, 79)",
"rgb(194, 0, 77)",
"rgb(194, 0, 75)",
"rgb(194, 0, 73)",
"rgb(194, 0, 71)",
"rgb(194, 0, 69)",
"rgb(194, 0, 67)",
"rgb(194, 0, 65)",
"rgb(194, 0, 63)",
"rgb(194, 0, 61)",
"rgb(194, 0, 59)",
"rgb(194, 0, 57)",
"rgb(194, 0, 55)",
"rgb(194, 0, 53)",
"rgb(194, 0, 51)",
"rgb(194, 0, 49)",
"rgb(194, 0, 47)",
"rgb(194, 0, 45)",
"rgb(194, 0, 43)",
"rgb(194, 0, 41)",
"rgb(194, 0, 39)",
"rgb(194, 0, 37)",
"rgb(194, 0, 35)",
"rgb(194, 0, 33)",
"rgb(194, 0, 31)",
"rgb(194, 0, 29)",
"rgb(194, 0, 27)",
"rgb(194, 0, 25)",
"rgb(194, 0, 23)",
"rgb(194, 0, 21)",
"rgb(194, 0, 19)",
"rgb(194, 0, 17)",
"rgb(194, 0, 15)",
"rgb(194, 0, 13)",
"rgb(194, 0, 11)",
"rgb(194, 0, 9)",
"rgb(194, 0, 7)",
"rgb(194, 0, 5)",
"rgb(194, 0, 3)",
"rgb(194, 0, 1)",
"rgb(194, 0, 0)"
];