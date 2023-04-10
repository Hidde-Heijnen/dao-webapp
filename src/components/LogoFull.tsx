/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @file Logo Full Component
 * This file defines the Logo component (full icon + name) for SecureSecoDAO.
 */

import React from 'react';

const LogoFull = (props: React.BaseHTMLAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="2560.000000pt"
      height="1000.000000pt"
      viewBox="0 0 2560.000000 1000.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1760.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M3660 16411 c-84 -26 -151 -83 -191 -161 -18 -36 -23 -68 -28 -160
l-6 -115 -43 -6 c-28 -3 -52 -15 -70 -32 l-27 -27 0 -303 c0 -286 1 -303 20
-329 11 -15 33 -32 49 -38 18 -6 159 -10 371 -10 212 0 353 4 371 10 16 6 38
23 49 38 19 26 20 43 20 329 l0 303 -27 27 c-18 17 -42 29 -70 32 l-43 6 -5
110 c-5 94 -10 119 -33 167 -15 31 -45 72 -66 91 -68 61 -191 92 -271 68z
m173 -113 c23 -11 50 -38 68 -65 27 -45 29 -52 29 -155 l0 -108 -197 2 -198 3
1 100 c1 127 26 185 99 223 68 35 129 35 198 0z m-31 -547 c41 -37 46 -96 10
-134 -17 -18 -22 -35 -22 -78 0 -68 -17 -103 -52 -107 -39 -5 -58 29 -58 102
0 48 -4 64 -22 83 -16 17 -23 37 -23 65 0 52 47 98 100 98 24 0 45 -9 67 -29z"
        />
        <path
          d="M4452 16143 c1 -5 16 -40 32 -78 l30 -70 290 0 c225 0 321 -4 421
-18 129 -18 333 -56 410 -77 235 -64 432 -135 605 -218 422 -202 794 -482
1092 -821 93 -106 248 -307 278 -361 7 -12 19 -10 79 20 39 18 71 35 71 37 0
8 -38 62 -116 168 -473 642 -1173 1119 -1930 1315 -342 89 -462 103 -902 107
-200 2 -362 0 -360 -4z"
        />
        <path
          d="M2830 15549 c-47 -33 -96 -68 -110 -77 -125 -84 -393 -329 -548 -502
-88 -98 -250 -310 -316 -415 -21 -33 -47 -72 -57 -87 -11 -15 -19 -29 -19 -31
0 -3 -24 -47 -53 -98 -199 -356 -311 -677 -394 -1129 -25 -137 -27 -167 -30
-522 -3 -208 -1 -378 4 -378 4 0 40 7 78 16 l70 16 1 317 c0 315 3 357 43 581
40 227 128 525 207 697 8 17 14 34 14 38 0 4 34 75 76 158 98 195 225 397 352
562 191 248 504 545 750 710 60 39 73 53 69 69 -3 12 -11 47 -18 79 -7 31 -18
57 -24 57 -5 -1 -48 -28 -95 -61z"
        />
        <path
          d="M4520 15517 c0 -8 -11 -40 -24 -73 l-24 -59 156 -160 c130 -133 311
-350 408 -490 11 -17 36 -52 55 -80 48 -69 208 -325 253 -407 l38 -68 -27 -10
c-14 -5 -32 -10 -38 -10 -24 0 -299 -73 -502 -133 -205 -61 -614 -205 -730
-257 -11 -5 -49 -21 -85 -35 -36 -15 -78 -32 -95 -40 -16 -7 -52 -23 -80 -35
-90 -39 -187 -84 -315 -147 -87 -43 -127 -58 -132 -49 -7 12 -46 254 -73 446
-8 63 -21 222 -27 352 -13 265 -2 529 29 691 14 71 15 91 5 95 -7 2 -35 21
-62 43 -55 44 -66 47 -74 22 -19 -68 -47 -288 -56 -448 -10 -193 0 -535 20
-695 5 -41 14 -113 20 -160 6 -47 22 -152 37 -235 31 -177 33 -205 13 -216
-229 -131 -452 -268 -558 -344 -77 -54 -328 -249 -393 -305 -132 -114 -389
-384 -389 -410 0 -3 32 -21 71 -40 59 -29 72 -32 79 -20 20 32 190 210 285
297 150 139 308 260 530 407 195 130 404 256 424 256 11 0 12 -2 41 -125 30
-122 87 -336 112 -415 157 -504 308 -889 510 -1303 38 -76 68 -141 68 -146 0
-8 -175 -41 -350 -65 -442 -63 -931 -61 -1239 5 -51 11 -95 18 -98 16 -9 -10
-73 -120 -73 -127 0 -20 176 -57 385 -80 368 -42 816 -16 1348 78 l108 19 18
-26 c10 -14 31 -51 48 -81 140 -258 383 -612 570 -830 111 -130 290 -309 372
-373 53 -42 62 -46 67 -30 4 10 17 43 29 74 l22 56 -129 122 c-266 254 -477
529 -738 960 -87 144 -92 155 -74 168 10 7 25 13 35 13 9 0 70 14 135 31 66
17 136 35 157 40 69 17 236 68 487 149 281 90 698 262 1045 431 140 68 124 79
155 -104 84 -491 100 -1004 43 -1331 -10 -60 -13 -101 -8 -103 6 -2 37 -21 70
-43 32 -21 61 -38 63 -36 2 2 15 66 28 142 22 121 26 177 31 434 3 172 1 351
-6 430 -12 158 -37 374 -51 445 -15 73 -42 234 -47 275 -4 32 -1 37 29 53 182
92 488 288 694 443 272 205 517 442 652 632 l23 31 -71 34 -70 35 -69 -86
c-133 -167 -366 -380 -606 -554 -234 -170 -605 -401 -620 -386 -3 3 -21 68
-41 144 -96 384 -277 938 -384 1179 -5 11 -39 90 -75 175 -37 85 -103 229
-146 319 -44 90 -79 167 -79 171 0 7 109 29 275 55 267 42 643 68 855 59 155
-7 398 -36 485 -58 32 -9 59 -15 60 -13 20 28 71 138 65 142 -22 13 -200 47
-342 65 -346 43 -882 16 -1304 -66 -45 -9 -106 -17 -135 -18 l-53 -1 -28 50
c-15 28 -31 57 -35 65 -13 28 -166 275 -226 365 -211 315 -445 593 -647 768
-67 59 -80 66 -80 44z m1010 -1622 c58 -114 87 -177 160 -340 154 -343 348
-892 425 -1200 7 -27 26 -102 43 -165 17 -63 33 -136 37 -162 l7 -47 -142 -71
c-412 -206 -969 -422 -1420 -549 -41 -12 -97 -28 -125 -36 -27 -8 -117 -30
-200 -50 -143 -35 -150 -35 -163 -18 -20 25 -242 484 -242 500 0 3 -6 19 -14
36 -29 64 -74 173 -91 222 -10 28 -21 55 -25 60 -6 9 -55 145 -130 360 -92
263 -219 727 -223 814 l-2 44 120 61 c351 178 783 354 1160 472 44 14 98 32
120 39 128 44 591 165 620 162 15 -2 36 -35 85 -132z"
        />
        <path
          d="M18087 15454 c-82 -20 -130 -57 -196 -154 -22 -32 -25 -45 -25 -142
0 -87 3 -110 17 -126 9 -10 17 -23 17 -29 0 -18 80 -102 103 -109 12 -3 29
-12 37 -19 28 -23 74 -27 415 -34 238 -5 350 -11 373 -20 38 -15 82 -91 82
-141 0 -52 -46 -119 -97 -141 -42 -18 -75 -19 -471 -19 -235 0 -437 -3 -449
-6 -22 -6 -23 -12 -23 -89 0 -77 1 -83 23 -89 34 -9 837 -6 882 3 96 21 184
63 217 104 12 15 30 37 39 48 9 10 24 54 33 98 15 67 15 89 6 138 -7 32 -14
70 -17 86 -8 42 -104 135 -150 143 -21 4 -50 13 -65 20 -21 11 -97 14 -349 14
-302 0 -325 1 -364 20 -72 35 -96 129 -55 210 32 63 41 64 515 70 l420 5 0 85
0 85 -430 1 c-341 2 -442 -1 -488 -12z"
        />
        <path
          d="M19286 15454 c-3 -9 -6 -263 -6 -565 l0 -549 23 -5 c12 -3 236 -4
497 -3 l475 3 0 90 0 90 -403 3 -403 2 -9 26 c-15 38 -13 686 2 718 l11 26
401 2 401 3 3 88 3 87 -495 0 c-441 0 -495 -2 -500 -16z"
        />
        <path
          d="M20839 15451 c-42 -9 -83 -21 -90 -28 -8 -6 -26 -17 -39 -23 -105
-47 -198 -158 -240 -289 -19 -61 -23 -93 -23 -199 1 -89 5 -139 16 -167 8 -22
18 -52 21 -68 7 -31 69 -123 116 -173 41 -43 109 -89 168 -112 146 -58 136
-57 471 -60 172 -2 324 -1 337 2 23 6 24 11 24 84 0 47 -5 83 -12 90 -9 9 -95
12 -325 12 -323 0 -402 8 -443 45 -9 8 -23 15 -30 15 -19 0 -120 111 -127 140
-3 14 -14 41 -25 60 -14 26 -18 57 -18 127 0 85 3 98 35 167 52 108 132 179
225 199 25 6 191 12 369 14 213 2 329 8 338 15 14 11 18 104 7 146 l-6 22
-337 -1 c-267 -1 -352 -5 -412 -18z"
        />
        <path
          d="M22149 15451 c-42 -9 -83 -21 -91 -28 -7 -6 -25 -17 -38 -23 -41 -18
-63 -33 -104 -70 -43 -39 -126 -159 -126 -182 0 -9 -7 -33 -16 -54 -27 -64
-23 -278 6 -374 42 -136 151 -263 274 -321 45 -21 126 -45 196 -59 59 -12 324
-12 375 0 71 16 149 40 182 55 17 8 34 15 38 15 17 0 124 95 162 143 42 54 58
87 95 192 28 77 30 281 4 330 -9 17 -16 38 -16 47 0 72 -160 258 -243 284 -12
3 -29 12 -37 19 -54 44 -496 62 -661 26z m539 -179 c50 -10 114 -50 162 -102
61 -65 100 -168 100 -264 0 -66 -31 -176 -56 -197 -8 -6 -14 -17 -14 -23 0
-36 -122 -125 -210 -152 -56 -17 -406 -20 -459 -3 -108 33 -217 122 -242 196
-6 19 -17 47 -25 61 -9 18 -14 61 -14 122 0 76 4 103 20 133 11 20 20 41 20
47 0 16 54 86 86 112 50 42 100 68 130 69 16 0 38 4 49 9 26 12 385 5 453 -8z"
        />
        <path
          d="M9269 15445 c-31 -7 -66 -21 -78 -31 -46 -39 -101 -98 -101 -107 0
-6 -8 -19 -17 -30 -15 -16 -18 -38 -18 -127 0 -89 3 -111 18 -127 9 -11 17
-24 17 -30 0 -22 75 -100 105 -109 11 -4 27 -12 35 -20 28 -24 145 -34 430
-35 345 -1 372 -6 414 -68 58 -86 27 -197 -66 -237 -39 -17 -80 -19 -493 -24
l-450 -5 -3 -88 -3 -87 468 3 c483 3 487 3 578 43 133 59 194 224 151 406 -8
31 -23 67 -35 79 -12 13 -21 26 -21 30 0 13 -77 56 -141 77 -62 21 -83 22
-385 22 -292 0 -322 2 -354 19 -78 41 -103 135 -57 215 38 67 53 69 527 75
l415 6 0 80 0 80 -440 1 c-316 1 -456 -2 -496 -11z"
        />
        <path
          d="M10485 15438 c-3 -13 -4 -268 -3 -568 l3 -545 503 -3 502 -2 0 90 0
90 -404 0 c-363 0 -405 2 -417 17 -11 13 -15 86 -17 357 -2 188 0 351 3 363
13 54 4 53 436 53 l399 0 0 85 0 85 -500 0 -500 0 -5 -22z"
        />
        <path
          d="M12046 15444 c-38 -8 -74 -18 -81 -24 -7 -5 -34 -22 -61 -36 -27 -14
-66 -42 -88 -62 -44 -43 -126 -162 -126 -184 0 -9 -7 -33 -16 -54 -13 -29 -17
-71 -17 -169 0 -109 3 -142 23 -204 45 -144 162 -279 285 -329 157 -63 154
-62 516 -60 l334 3 3 65 c2 35 0 75 -3 87 l-5 23 -313 0 c-332 0 -392 7 -477
55 -47 27 -139 124 -147 155 -3 14 -14 41 -25 60 -24 46 -25 195 -2 248 47
104 58 124 92 157 101 98 189 115 588 115 248 0 283 2 288 16 8 20 8 102 0
132 l-6 22 -347 -1 c-248 -1 -365 -5 -415 -15z"
        />
        <path
          d="M12990 15439 c-8 -14 -10 -124 -7 -367 4 -402 11 -453 77 -549 65
-95 118 -132 240 -167 25 -7 56 -18 67 -25 34 -17 426 -15 461 3 15 8 45 18
66 22 22 4 51 13 65 20 14 8 31 14 36 14 23 0 135 113 154 155 67 146 62 93
59 521 l-3 389 -81 3 c-78 3 -82 2 -88 -20 -3 -13 -6 -181 -6 -374 0 -404 -1
-409 -88 -483 -79 -69 -147 -85 -342 -85 -138 1 -174 4 -220 21 -191 68 -209
123 -210 619 0 219 -3 303 -12 312 -7 7 -41 12 -85 12 -63 0 -74 -3 -83 -21z"
        />
        <path
          d="M14415 15438 c-3 -13 -4 -268 -3 -568 l3 -545 88 -3 87 -3 0 460 c0
437 1 460 19 482 l19 24 283 3 c231 2 298 0 368 -14 103 -20 123 -31 161 -92
27 -42 30 -55 30 -130 0 -73 -3 -89 -27 -130 -34 -59 -54 -76 -121 -101 -49
-19 -75 -21 -297 -21 -197 0 -245 -3 -254 -14 -7 -8 -11 -37 -9 -68 l3 -53
210 -5 211 -5 44 -45 c25 -25 88 -92 140 -149 52 -58 103 -113 113 -123 15
-15 34 -18 142 -18 69 0 125 1 125 3 0 2 -72 76 -160 165 -88 90 -160 169
-160 177 0 7 18 26 41 42 67 46 119 107 144 166 40 99 40 260 1 365 -22 57
-59 104 -122 152 -88 67 -119 70 -629 70 l-445 0 -5 -22z"
        />
        <path
          d="M15885 15428 c-3 -18 -4 -274 -3 -568 l3 -535 505 0 505 0 0 85 0 85
-403 5 c-385 5 -404 6 -418 24 -21 29 -21 713 0 742 14 18 32 19 412 22 297 2
400 6 406 15 9 14 10 103 2 135 l-6 22 -499 0 -498 0 -6 -32z"
        />
        <path
          d="M19620 14931 c0 -99 -26 -91 299 -91 226 1 290 4 304 14 15 11 17 25
15 72 l-3 59 -307 3 -308 2 0 -59z"
        />
        <path
          d="M10827 14973 c-12 -11 -8 -118 5 -131 9 -9 89 -12 298 -12 334 0 323
-3 318 91 l-3 54 -306 3 c-168 1 -308 -1 -312 -5z"
        />
        <path
          d="M16230 14915 c0 -54 3 -66 20 -75 12 -7 120 -9 307 -8 l288 3 3 73 3
72 -311 0 -310 0 0 -65z"
        />
        <path
          d="M7982 14466 c-82 -27 -141 -76 -180 -151 -23 -44 -27 -65 -30 -167
l-4 -118 -39 0 c-29 0 -47 -8 -71 -29 l-33 -29 -3 -294 c-2 -271 -1 -296 16
-328 11 -19 30 -41 43 -47 18 -10 115 -12 379 -12 195 1 365 4 377 7 12 4 32
20 45 37 23 29 23 33 26 320 2 276 1 292 -18 323 -21 35 -54 52 -99 52 l-28 0
-5 113 c-5 123 -19 168 -78 239 -63 76 -202 115 -298 84z m161 -100 c39 -17
92 -71 106 -109 6 -16 11 -73 11 -128 l0 -99 -197 2 -198 3 -3 75 c-5 130 28
209 106 250 44 23 128 26 175 6z m-32 -542 c55 -28 71 -111 28 -150 -14 -13
-19 -31 -19 -73 0 -70 -17 -105 -51 -109 -42 -5 -59 21 -59 88 0 47 -5 67 -26
97 -63 92 29 198 127 147z"
        />
        <path
          d="M15935 13613 c-11 -3 -27 -11 -35 -19 -9 -7 -35 -20 -58 -28 -37 -13
-57 -28 -112 -81 -16 -15 -57 -75 -80 -117 -11 -21 -25 -38 -30 -38 -6 0 -21
-24 -35 -52 -14 -29 -37 -74 -53 -100 -15 -25 -38 -66 -51 -90 -13 -23 -30
-47 -37 -53 -7 -5 -33 -49 -58 -96 -45 -86 -79 -142 -114 -189 -10 -14 -40
-63 -66 -110 -69 -123 -90 -157 -113 -182 -11 -13 -25 -37 -30 -53 -6 -17 -21
-46 -34 -66 -27 -41 -56 -89 -79 -129 -9 -14 -26 -39 -38 -55 -12 -15 -22 -33
-22 -39 0 -12 -55 -104 -88 -146 -10 -14 -30 -45 -43 -69 -13 -23 -35 -62 -49
-86 -14 -24 -36 -63 -49 -86 -13 -24 -28 -47 -34 -50 -12 -8 -57 -85 -90 -154
-13 -27 -31 -56 -40 -64 -10 -7 -17 -19 -17 -26 0 -7 -10 -25 -22 -40 -27 -34
-71 -107 -94 -155 -19 -42 -81 -137 -94 -145 -5 -3 -20 -29 -34 -58 -15 -28
-38 -73 -54 -99 -15 -25 -37 -65 -49 -87 -13 -22 -29 -44 -37 -48 -7 -4 -23
-28 -35 -53 -49 -102 -79 -156 -95 -169 -9 -7 -16 -20 -16 -28 0 -8 -10 -24
-22 -37 -13 -12 -34 -44 -48 -71 -14 -26 -33 -64 -44 -84 -10 -20 -29 -49 -42
-64 -13 -16 -24 -34 -24 -41 0 -7 -9 -21 -20 -31 -11 -10 -31 -41 -45 -69 -39
-79 -109 -195 -137 -225 -7 -8 -20 -31 -28 -50 -18 -42 -46 -91 -77 -135 -13
-17 -33 -50 -45 -73 -12 -24 -25 -43 -29 -43 -4 0 -13 -16 -19 -36 -10 -30
-10 -38 1 -45 8 -5 173 -9 367 -9 l353 0 26 28 c14 15 36 51 49 80 12 28 27
52 33 52 5 0 15 16 21 35 6 19 19 41 28 48 9 7 39 55 66 107 52 100 86 155
110 180 8 9 24 36 36 60 41 87 101 187 140 235 9 11 23 36 30 55 7 19 21 44
30 55 9 11 25 39 35 63 10 23 22 42 27 42 5 0 17 20 28 45 11 25 23 45 28 45
5 0 19 21 31 48 39 83 66 130 88 154 11 13 29 39 38 58 9 19 29 58 45 85 16
28 41 71 54 97 14 26 30 49 36 53 6 3 20 24 33 46 12 22 36 64 52 94 17 29 42
76 57 103 15 28 32 53 38 57 6 3 19 23 29 43 68 132 129 238 147 253 8 6 23
30 35 53 52 105 128 234 143 244 6 4 29 43 51 87 22 44 52 98 68 119 15 21 27
44 27 51 0 7 9 20 20 30 12 10 30 37 41 59 54 109 132 226 149 226 14 0 79
-84 96 -125 9 -21 27 -53 40 -70 13 -18 24 -37 24 -43 0 -7 9 -21 20 -32 10
-10 28 -36 40 -57 11 -21 36 -65 55 -98 19 -33 43 -79 54 -101 12 -23 28 -48
37 -55 10 -8 23 -27 31 -44 8 -16 32 -59 53 -95 22 -36 49 -84 60 -107 11 -23
24 -43 29 -45 8 -3 34 -49 89 -155 12 -24 31 -54 42 -66 11 -11 20 -25 20 -31
0 -5 8 -18 18 -28 17 -19 46 -72 96 -175 14 -29 29 -53 34 -53 6 0 17 -17 26
-37 9 -21 22 -46 28 -55 10 -14 9 -21 -5 -35 -16 -17 -61 -18 -611 -23 -501
-4 -596 -7 -611 -20 -17 -14 -40 -55 -89 -155 -13 -28 -31 -57 -40 -64 -9 -7
-16 -19 -16 -26 0 -8 -11 -27 -25 -43 -14 -17 -32 -47 -41 -68 -9 -21 -24 -49
-34 -62 -10 -13 -22 -37 -25 -55 -4 -18 -11 -37 -16 -43 -6 -8 1 -13 22 -18
17 -3 440 -6 939 -6 l908 0 41 -51 c23 -29 41 -58 41 -65 0 -7 13 -28 28 -46
15 -18 33 -44 40 -58 7 -14 28 -50 47 -80 19 -30 44 -73 56 -95 12 -22 32 -53
45 -68 13 -16 24 -34 24 -41 0 -7 11 -26 24 -41 14 -16 28 -40 31 -53 3 -14
15 -37 26 -51 41 -53 69 -97 89 -137 11 -23 27 -47 35 -54 8 -7 20 -30 27 -51
6 -22 15 -39 20 -39 5 0 18 -16 29 -35 l21 -35 391 2 c339 3 392 5 395 18 1 8
-14 40 -33 70 -20 30 -50 83 -67 118 -17 34 -35 62 -39 62 -5 0 -18 19 -30 42
-12 23 -29 54 -39 68 -39 57 -80 133 -86 156 -4 14 -13 28 -21 31 -7 3 -23 22
-34 42 -11 20 -38 65 -59 101 -22 36 -48 84 -59 108 -11 23 -24 42 -29 42 -4
0 -18 19 -30 43 -13 23 -41 71 -63 107 -21 36 -46 79 -54 96 -7 17 -21 37 -30
44 -9 7 -23 27 -31 44 -8 17 -32 60 -54 96 -22 36 -49 84 -60 108 -12 23 -25
42 -31 42 -5 0 -19 19 -30 43 -32 67 -64 123 -86 151 -11 14 -26 40 -34 58 -7
18 -20 38 -28 44 -14 11 -27 32 -73 124 -13 26 -32 58 -43 72 -33 44 -104 162
-136 228 -12 25 -28 50 -35 55 -7 6 -22 29 -34 53 -12 23 -26 45 -32 48 -5 3
-19 25 -30 48 -35 73 -67 129 -87 150 -10 12 -27 36 -37 54 -11 19 -34 59 -52
90 -17 31 -41 76 -52 100 -10 23 -24 42 -29 42 -6 0 -23 23 -38 51 -16 28 -40
72 -55 98 -15 25 -37 66 -49 91 -12 25 -28 49 -35 53 -8 4 -24 26 -37 48 -12
22 -34 62 -49 87 -16 26 -40 71 -54 100 -14 28 -30 52 -35 52 -8 0 -22 24 -84
139 -11 20 -30 51 -42 68 -13 17 -23 36 -23 42 0 6 -9 20 -20 31 -10 10 -29
38 -42 60 -109 197 -172 272 -254 306 -22 9 -46 23 -55 31 -18 15 -110 26
-144 16z"
        />
        <path
          d="M9265 13548 c-3 -7 -4 -911 -3 -2008 l3 -1995 1245 0 1245 0 70 22
c39 12 110 27 160 33 49 6 95 16 101 21 6 5 49 18 95 30 46 11 102 29 125 40
22 10 49 19 61 19 11 0 35 11 54 25 19 13 45 29 59 35 14 5 32 14 40 20 8 5
38 22 65 36 28 15 52 30 55 34 3 4 19 14 36 23 39 20 226 176 279 232 22 24
64 68 92 99 29 31 60 69 68 84 18 31 56 87 80 117 39 49 123 210 151 287 8 23
21 49 29 58 7 8 19 38 25 65 6 27 20 63 30 81 11 17 25 67 31 110 6 43 20 114
31 157 40 157 40 697 -1 855 -10 42 -25 112 -31 155 -6 43 -20 93 -30 110 -10
18 -24 53 -30 79 -7 26 -18 52 -26 58 -7 7 -20 35 -30 63 -9 29 -22 59 -29 67
-8 8 -21 35 -31 59 -10 25 -25 52 -33 61 -9 9 -24 30 -33 46 -10 16 -33 49
-53 74 -19 25 -41 57 -50 72 -15 27 -187 203 -246 251 -62 51 -112 87 -120 87
-5 0 -21 11 -36 25 -43 38 -101 75 -153 95 -26 10 -63 28 -81 39 -19 12 -41
21 -50 21 -8 0 -30 11 -48 24 -18 14 -56 30 -85 36 -28 6 -60 17 -72 25 -11 7
-72 21 -135 30 -63 9 -139 24 -169 33 -50 15 -182 17 -1353 19 -1046 3 -1298
1 -1302 -9z m2524 -668 c52 -6 130 -22 175 -36 95 -31 103 -34 181 -79 33 -18
76 -41 95 -49 19 -9 42 -20 50 -26 8 -6 29 -20 47 -31 18 -11 35 -29 38 -40 4
-10 13 -19 20 -19 18 0 132 -106 150 -139 7 -14 34 -48 59 -76 40 -43 116
-174 116 -201 0 -5 14 -29 30 -53 17 -24 30 -54 30 -65 0 -12 9 -38 19 -57 26
-48 39 -123 51 -299 15 -204 -8 -497 -43 -567 -8 -15 -22 -54 -31 -86 -9 -32
-23 -60 -31 -63 -7 -3 -21 -29 -30 -57 -9 -29 -23 -59 -30 -67 -7 -8 -16 -25
-19 -37 -4 -13 -22 -42 -41 -65 -19 -24 -44 -56 -57 -72 -23 -30 -155 -163
-199 -202 -35 -30 -134 -94 -146 -94 -6 0 -27 -13 -48 -30 -21 -16 -43 -30
-49 -30 -6 0 -35 -11 -65 -25 -29 -14 -85 -30 -125 -36 -39 -6 -97 -19 -129
-30 -55 -18 -93 -19 -949 -19 -815 0 -893 1 -910 17 -17 15 -18 69 -18 1310 0
1280 0 1293 20 1313 20 20 33 20 883 20 497 0 902 -5 956 -10z"
        />
        <path
          d="M20150 13553 c-14 -2 -52 -10 -85 -18 -33 -8 -111 -21 -174 -30 -63
-9 -124 -23 -135 -30 -12 -8 -44 -19 -72 -25 -29 -6 -67 -22 -85 -36 -18 -13
-38 -24 -44 -24 -7 0 -32 -10 -56 -23 -24 -13 -65 -32 -91 -42 -27 -10 -48
-21 -48 -25 0 -4 -18 -15 -40 -25 -23 -10 -44 -24 -48 -30 -4 -7 -25 -24 -47
-39 -22 -14 -56 -37 -75 -50 -39 -27 -211 -195 -250 -245 -14 -17 -34 -42 -45
-54 -42 -46 -109 -151 -154 -243 -12 -23 -28 -47 -36 -54 -8 -7 -15 -18 -15
-25 0 -7 -13 -37 -28 -66 -15 -30 -34 -81 -41 -114 -7 -33 -20 -73 -29 -90 -8
-16 -21 -62 -28 -102 -7 -39 -22 -92 -34 -117 -28 -63 -43 -365 -30 -637 8
-173 12 -204 33 -255 13 -33 28 -83 31 -113 4 -30 16 -74 27 -97 10 -24 24
-67 30 -96 6 -29 19 -71 29 -93 11 -22 29 -60 40 -85 12 -25 34 -67 50 -95 16
-27 40 -73 54 -100 13 -28 31 -57 40 -64 9 -7 16 -18 16 -23 0 -6 12 -25 28
-43 15 -18 43 -53 62 -79 73 -99 364 -370 412 -385 7 -2 20 -10 29 -18 18 -16
81 -51 149 -83 25 -12 52 -28 61 -36 22 -20 131 -60 239 -88 47 -13 95 -28
107 -34 12 -7 68 -18 125 -26 56 -8 123 -23 148 -33 42 -16 95 -18 720 -18
669 0 676 0 740 22 36 12 97 25 135 29 39 3 88 13 110 21 22 8 78 25 125 38
124 34 231 73 252 91 9 9 39 27 65 40 26 13 71 37 98 53 28 16 66 38 85 48 19
10 44 27 55 39 11 11 49 45 85 74 36 29 82 72 103 94 131 140 164 177 185 207
34 49 98 140 120 169 11 14 24 42 31 62 7 20 20 47 30 60 10 13 22 38 26 56 4
18 17 44 30 58 13 13 26 41 30 62 4 20 15 51 25 67 10 17 25 69 34 117 9 47
23 106 31 129 9 23 20 85 25 138 6 53 17 141 26 195 19 123 19 253 0 376 -8
52 -20 141 -26 197 -6 57 -17 118 -24 135 -8 18 -21 73 -31 123 -10 49 -24 99
-31 111 -8 11 -21 43 -29 71 -8 28 -21 56 -29 62 -7 6 -21 33 -31 59 -10 26
-26 58 -37 71 -10 13 -18 29 -18 36 0 6 -16 34 -35 61 -19 27 -35 54 -35 61 0
7 -9 17 -20 23 -11 6 -27 24 -36 41 -23 45 -246 271 -316 321 -33 24 -75 55
-93 71 -18 15 -48 34 -67 41 -19 8 -40 22 -48 30 -7 9 -18 16 -24 16 -6 0 -37
13 -68 29 -32 16 -73 34 -92 41 -18 6 -43 19 -55 29 -12 10 -47 24 -79 30 -32
6 -67 18 -79 26 -11 8 -84 24 -163 35 -78 12 -154 27 -169 33 -19 9 -225 12
-776 13 -412 1 -761 0 -775 -3z m1443 -673 c92 -9 223 -43 292 -76 92 -45 235
-122 261 -142 96 -75 230 -206 250 -244 8 -16 18 -28 23 -28 4 0 20 -22 35
-50 15 -27 31 -52 35 -54 5 -3 14 -26 21 -51 7 -25 21 -50 31 -56 11 -5 19
-15 19 -22 0 -7 13 -40 30 -75 19 -41 34 -97 45 -165 8 -56 20 -120 27 -142
19 -63 16 -344 -4 -435 -9 -41 -22 -109 -29 -150 -6 -41 -22 -98 -35 -126 -13
-28 -24 -56 -24 -61 0 -6 -13 -27 -30 -48 -16 -21 -30 -44 -30 -53 0 -30 -78
-153 -138 -217 -10 -11 -27 -32 -36 -47 -20 -31 -171 -162 -225 -195 -20 -12
-56 -32 -80 -43 -24 -11 -49 -27 -55 -34 -15 -19 -130 -66 -191 -78 -54 -10
-148 -33 -205 -48 -20 -6 -309 -10 -693 -10 -620 0 -661 1 -715 19 -31 11 -88
24 -127 30 -75 11 -203 62 -250 99 -15 12 -31 22 -35 22 -9 0 -102 60 -144 92
-36 29 -173 165 -204 204 -40 50 -71 97 -90 139 -11 22 -27 46 -36 54 -9 7
-16 19 -16 26 0 7 -13 37 -29 67 -16 30 -34 80 -40 111 -6 31 -17 70 -26 87
-18 35 -45 264 -45 385 0 117 28 362 45 395 8 16 20 53 26 82 11 54 74 194 91
204 5 4 19 27 29 52 11 26 28 54 37 63 9 9 37 44 61 78 24 33 68 82 99 108 31
27 65 57 76 68 39 38 101 81 136 95 19 7 42 19 50 25 8 7 35 22 60 34 25 12
56 28 70 35 50 28 193 68 273 75 118 12 1294 12 1410 1z"
        />
        <path
          d="M8224 13003 l-60 -14 4 -267 c3 -157 0 -317 -7 -389 -68 -746 -374
-1428 -891 -1992 -123 -134 -369 -350 -505 -444 -22 -15 -51 -35 -64 -45 l-23
-19 23 -71 c13 -40 28 -72 35 -72 6 0 22 8 35 18 13 11 49 36 79 57 335 232
683 596 912 951 113 175 222 378 282 524 15 36 33 79 41 95 7 17 34 91 59 165
83 248 130 454 166 735 10 78 13 727 4 763 -7 25 -7 25 -90 5z"
        />
        <path
          d="M1490 12194 c-99 -36 -168 -106 -196 -200 -8 -26 -14 -88 -14 -141
l0 -93 -30 0 c-17 0 -44 -7 -60 -15 -57 -30 -60 -46 -60 -358 0 -279 0 -285
23 -318 l23 -34 396 -3 396 -2 21 26 c20 26 21 38 21 333 0 298 -1 308 -21
330 -24 25 -59 41 -93 41 -23 0 -24 3 -28 113 -4 96 -8 119 -31 163 -34 67
-80 112 -144 141 -69 32 -145 38 -203 17z m168 -103 c85 -44 112 -99 112 -231
l0 -100 -200 0 -200 0 0 70 c0 106 16 166 59 213 20 22 50 46 66 53 44 19 120
17 163 -5z m-42 -536 c63 -26 78 -110 30 -164 -8 -9 -16 -46 -18 -85 -4 -69
-20 -96 -55 -96 -32 0 -53 39 -53 100 0 47 -5 67 -25 96 -14 20 -25 45 -25 56
0 34 31 79 63 93 40 18 41 18 83 0z"
        />
        <path
          d="M1898 10787 l-68 -32 50 -75 c288 -437 722 -841 1190 -1107 427 -242
858 -381 1358 -439 111 -12 212 -15 445 -12 166 1 307 6 313 10 9 6 4 29 -15
80 -24 65 -30 73 -52 70 -13 -1 -121 -5 -239 -8 -344 -10 -687 35 -1015 132
-137 40 -211 65 -280 94 -11 5 -54 23 -95 41 -78 32 -257 121 -326 160 -21 12
-48 27 -59 33 -37 21 -109 67 -200 129 -340 231 -670 565 -905 919 -14 21 -27
38 -30 37 -3 0 -35 -15 -72 -32z"
        />
        <path
          d="M5839 10159 c-68 -24 -130 -75 -167 -137 -24 -42 -28 -59 -32 -167
l-5 -120 -35 -6 c-45 -7 -75 -23 -94 -51 -14 -19 -16 -67 -16 -317 0 -277 1
-296 20 -326 11 -18 30 -35 43 -39 29 -8 725 -8 754 0 13 4 32 21 43 39 19 30
20 49 20 318 0 161 -4 297 -10 311 -12 33 -66 66 -107 66 l-33 0 0 103 c0 135
-17 185 -84 253 -39 38 -67 56 -116 72 -77 26 -108 27 -181 1z m205 -116 c65
-46 86 -98 86 -215 l0 -98 -200 0 -200 0 0 97 c0 78 4 105 21 140 22 46 70 89
116 103 50 17 133 4 177 -27z m-41 -541 c10 -11 21 -37 24 -59 4 -32 0 -44
-21 -70 -22 -26 -26 -41 -26 -94 0 -88 -36 -124 -82 -82 -14 13 -18 31 -18 85
0 37 -4 68 -10 68 -14 0 -40 55 -40 87 0 85 111 126 173 65z"
        />
      </g>
    </svg>
  );
};

export default LogoFull;
