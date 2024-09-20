/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: 
    {

      keyframes: 
      {
        lineGrow:
        {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },

      animation: 
      {
        lineGrow: 'lineGrow 2s ease-in-out',
      },

      colors: 
      {
        indigo: 
        {
          50: '#eff6ff',
          60: '#e3e8f0',
          70: '#d6dbe1',
          80: '#c9cdd3',
          90: '#bdc0c5',
          100: '#e0e7ff',
          110: '#d5dcf0',
          120: '#cad0e1',
          130: '#bfc4d3',
          140: '#b4b8c5',
          150: '#aaadb6',
          200: '#c8d3fe',
          210: '#c0c9ef',
          220: '#b8c0e1',
          230: '#b0b6d2',
          240: '#a8adc4',
          250: '#a0a4b6',
          300: '#a6b5fc',
          310: '#a2afee',
          320: '#9fa9df',
          330: '#9ba3d1',
          340: '#979dc3',
          350: '#9297b6',
          400: '#828df8',
          410: '#737cd9',
          420: '#656cbb',
          430: '#565c9e',
          440: '#494d82',
          450: '#3b3e67',
          500: '#6366f2',
          510: '#5d5fe0',
          520: '#5758ce',
          530: '#5151bd',
          540: '#4b4bab',
          550: '#45449a',
          600: '#5048e5',
          610: '#4c43d4',
          620: '#473fc3',
          630: '#433ab3',
          640: '#3f36a2',
          650: '#3a3193',
          700: '#4338ca',
          710: '#4035bb',
          720: '#3d31ac',
          730: '#392e9e',
          740: '#362b90',
          750: '#322882',
          800: '#372fa2',
          810: '#352c96',
          820: '#322a8b',
          830: '#2f277f',
          840: '#2d2474',
          850: '#2a2269',
          900: '#312e81',
          910: '#2f2b76',
          920: '#2c296d',
          930: '#2a2665',
          940: '#1a1733',
          950: '#1e1b4b',
          960: '#191638',
          970: '#130e21',
          980: '#0e0a19',
          990: '#0b0715',
          1000: '#07050f',
      },

      purple: 
      {
        50: '#faf5ff',
        60: '#ece7f0',
        70: '#dedae1',
        80: '#d0ccd3',
        90: '#c2bfc5',
        100: '#f3e8ff',
        110: '#e5daf0',
        120: '#d8cee1',
        130: '#cbc3d3',
        140: '#beb7c5',
        150: '#b1acb6',
        200: '#ead6ff',
        210: '#deccf0',
        220: '#d2c2e1',
        230: '#c6b9d3',
        240: '#baafc5',
        250: '#aea5b7',
        300: '#d8b4fe',
        310: '#ceaeef',
        320: '#c4a8e1',
        330: '#baa3d3',
        340: '#b19dc4',
        350: '#a797b6',
        400: '#bf83fc',
        410: '#b983ee',
        420: '#b283e0',
        430: '#ab83d2',
        440: '#a483c4',
        450: '#9e83b6',
        500: '#a855f7',
        510: '#a55cea',
        520: '#a262dc',
        530: '#9e67cf',
        540: '#9a6cc2',
        550: '#9671b4',
        600: '#9333ea',
        610: '#9241de',
        620: '#924bd2',
        630: '#9154c7',
        640: '#905dbb',
        650: '#8e65af',
        700: '#7e22ce',
        710: '#8132c6',
        720: '#833fbd',
        730: '#844ab5',
        740: '#8554ac',
        750: '#855ea3',
        800: '#6a21a6',
        810: '#6e2fa2',
        820: '#723b9e',
        830: '#76469a',
        840: '#785096',
        850: '#7b5a92',
        900: '#591c87',
        910: '#5f2a87',
        920: '#643686',
        930: '#694186',
        940: '#6e4c85',
        950: '#3c0764',
        960: '#360959',
        970: '#310b4e',
        980: '#1b0924',
        990: '#15061b',
        1000: '#0c0311',
      },

      violet: 
      {
        50: '#f7f5ff',
        60: '#e9e7f0',
        70: '#dbdae1',
        80: '#ceccd3',
        90: '#c0bfc5',
        100: '#ede9fe',
        110: '#dedbef',
        120: '#d2cfe1',
        130: '#c5c3d2',
        140: '#bab8c4',
        150: '#aeacb6',
        200: '#ddd6fe',
        210: '#d2ccef',
        220: '#c8c2e1',
        230: '#bdb8d2',
        240: '#b3afc4',
        250: '#a8a5b6',
        300: '#c3b4fd',
        310: '#bcaeee',
        320: '#b4a8e0',
        330: '#ada2d2',
        340: '#a59dc4',
        350: '#9e97b6',
        400: '#a689fa',
        410: '#a388ec',
        420: '#9f87de',
        430: '#9b86d0',
        440: '#9785c3',
        450: '#9384b5',
        500: '#895af6',
        510: '#8a5fe9',
        520: '#8b64db',
        530: '#8b68ce',
        540: '#8a6dc1',
        550: '#8971b4',
        600: '#7c3bed',
        610: '#8045e1',
        620: '#824ed5',
        630: '#8456c9',
        640: '#855ebd',
        650: '#8565b1',
        700: '#6b26d9',
          710: '#7134cf',
          720: '#7640c6',
          730: '#7a4abc',
          740: '#7d54b2',
          750: '#7f5da8',
          800: '#5a21b5',
          810: '#612eaf',
          820: '#683aaa',
          830: '#6d45a4',
          840: '#724f9f',
          850: '#765999',
          900: '#4d1d95',
          910: '#552a93',
          920: '#5c3691',
          930: '#63418f',
          940: '#694b8d',
          950: '#2e1065',
          960: '#26104e',
          970: '#1f0e39',
          980: '#180a25',
          990: '#13071b',
          1000: '#0a0311',
        },

        green: {
          50: '#f2fdf5',
          60: '#d4ddd7',
          70: '#b7bfb9',
          80: '#9aa19c',
          90: '#7f8480',
          100: '#dcfce7',
          110: '#c3ddcc',
          120: '#a8beb0',
          130: '#8ea095',
          140: '#75847a',
          150: '#5d6861',
          200: '#bbf7d0',
          210: '#a4d8b6',
          220: '#8eba9e',
          230: '#799d85',
          240: '#64816e',
          250: '#506657',
          300: '#85efac',
          310: '#76d197',
          320: '#67b583',
          330: '#58986f',
          340: '#4a7d5c',
          350: '#3c634a',
          400: '#4ade80',
          410: '#44c371',
          420: '#3ea863',
          430: '#378e54',
          440: '#307546',
          450: '#295d39',
          500: '#21c45d',
          510: '#24ac53',
          520: '#249549',
          530: '#237e3f',
          540: '#226835',
          550: '#1e532c',
          600: '#16a249',
          610: '#1a8f41',
          620: '#1c7c3a',
          630: '#1d6932',
          640: '#1c572b',
          650: '#1a4624',
          700: '#157f3c',
          710: '#187036',
          720: '#196230',
          730: '#19542a',
          740: '#184624',
          750: '#16391f',
          800: '#166434',
          810: '#17592f',
          820: '#174e2a',
          830: '#164325',
          840: '#153820',
          850: '#142e1b',
          900: '#14522d',
          910: '#144929',
          920: '#144025',
          930: '#143820',
          940: '#132f1c',
          950: '#052e16',
          960: '#072a15',
          970: '#082513',
          980: '#061509',
          990: '#040f06',
          1000: '#020803',
        },

        lime: {
          50: '#f7fee7',
          60: '#d8deca',
          70: '#babfaf',
          80: '#9da293',
          90: '#818579',
          100: '#ecfccb',
          110: '#ceddb1',
          120: '#b1be99',
          130: '#96a082',
          140: '#7b846b',
          150: '#626855',
          200: '#d9f99f',
          210: '#beda8c',
          220: '#a4bc79',
          230: '#8b9e67',
          240: '#738256',
          250: '#5b6745',
          300: '#bef263',
          310: '#a7d458',
          320: '#91b74e',
          330: '#7b9a43',
          340: '#667f39',
          350: '#51642f',
          400: '#a1e633',
          410: '#8eca30',
          420: '#7bae2d',
          430: '#699329',
          440: '#587924',
          450: '#476020',
          500: '#82cb15',
          510: '#73b219',
          520: '#659a1a',
          530: '#56821a',
          540: '#496c1a',
          550: '#3b5618',
          600: '#66a50d',
          610: '#5b9112',
          620: '#507e14',
          630: '#456b15',
          640: '#3b5915',
          650: '#304714',
          700: '#4c7b0f',
          710: '#446d11',
          720: '#3c5f12',
          730: '#355112',
          740: '#2d4412',
          750: '#263711',
          800: '#406312',
          810: '#3a5812',
          820: '#334d12',
          830: '#2d4212',
          840: '#273811',
          850: '#212e10',
          900: '#355214',
          910: '#304913',
          920: '#2b4013',
          930: '#263712',
          940: '#212f11',
          950: '#1a2e05',
          960: '#182a05',
          970: '#141d04',
          980: '#0d1403',
          990: '#090f02',
          1000: '#050801',
        },

        emerald: {
          50: '#edfdf5',
          60: '#d0ddd7',
          70: '#b3bfb9',
          80: '#97a19c',
          90: '#7c8480',
          100: '#d1fae5',
          110: '#b7dbc9',
          120: '#9ebdad',
          130: '#869f92',
          140: '#6e8378',
          150: '#58675f',
          200: '#a5f3cf',
          210: '#91d5b6',
          220: '#7eb79d',
          230: '#6b9b85',
          240: '#597f6d',
          250: '#486557',
          300: '#6ee7b7',
          310: '#62caa1',
          320: '#56af8b',
          330: '#4b9476',
          340: '#407962',
          350: '#34604e',
          400: '#36d399',
          410: '#34b987',
          420: '#31a075',
          430: '#2d8764',
          440: '#297053',
          450: '#245942',
          500: '#10b77f',
          510: '#18a170',
          520: '#1c8b62',
          530: '#1d7653',
          540: '#1d6246',
          550: '#1b4e38',
          600: '#059467',
          610: '#10825b',
          620: '#157150',
          630: '#176145',
          640: '#17503a',
          650: '#16412f',
          700: '#047656',
          710: '#0c684c',
          720: '#115b43',
          730: '#134e3a',
          740: '#144131',
          750: '#133528',
          800: '#066046',
          810: '#0c553e',
          820: '#0f4b37',
          830: '#114030',
          840: '#113629',
          850: '#112d22',
          900: '#064b39',
          910: '#0a4333',
          920: '#0d3b2d',
          930: '#0e3328',
          940: '#0e2c22',
          950: '#022c22',
          960: '#04281f',
          970: '#061813',
          980: '#04140f',
          990: '#030f0b',
          1000: '#010805',
        },

        teal: {
          50: '#f2fdfa',
          60: '#d4dddb',
          70: '#b7bfbd',
          80: '#9aa19f',
          90: '#7f8483',
          100: '#ccfbf1',
          110: '#b2dcd2',
          120: '#9abdb5',
          130: '#82a099',
          140: '#6c837e',
          150: '#566863',
          200: '#98f6e3',
          210: '#86d7c7',
          220: '#75baac',
          230: '#649d91',
          240: '#538177',
          250: '#43665e',
          300: '#5dead5',
          310: '#54cdbb',
          320: '#4bb1a1',
          330: '#429588',
          340: '#397b70',
          350: '#306159',
          400: '#2bd4bd',
          410: '#2cbaa6',
          420: '#2ba18f',
          430: '#29887a',
          440: '#267064',
          450: '#225950',
          500: '#14b8a5',
          510: '#1ba291',
          520: '#1e8c7e',
          530: '#1f776b',
          540: '#1e6259',
          550: '#1c4e47',
          600: '#0d968b',
          610: '#15847b',
          620: '#18736a',
          630: '#1a625b',
          640: '#19514c',
          650: '#18413d',
          700: '#0f756d',
          710: '#136760',
          720: '#165a54',
          730: '#164d48',
          740: '#16413d',
          750: '#153531',
          800: '#115f5a',
          810: '#135450',
          820: '#144a46',
          830: '#14403c',
          840: '#143633',
          850: '#132c2a',
          900: '#134e4a',
          910: '#144642',
          920: '#143d3a',
          930: '#133532',
          940: '#132d2b',
          950: '#042f2e',
          960: '#062a2a',
          970: '#091918',
          980: '#071514',
          990: '#040f0f',
          1000: '#020808',
        },

        cyan: {
          50: '#ebfeff',
          60: '#cededf',
          70: '#b1bfc0',
          80: '#96a2a2',
          90: '#7b8585',
          100: '#cdfafe',
          110: '#b4dbde',
          120: '#9bbdbf',
          130: '#849fa2',
          140: '#6d8385',
          150: '#566769',
          200: '#a6f3fc',
          210: '#92d5dd',
          220: '#7fb7be',
          230: '#6c9ba0',
          240: '#5a7f84',
          250: '#486568',
          300: '#67e8f9',
          310: '#5dcbda',
          320: '#52afbc',
          330: '#48949e',
          340: '#3d7a82',
          350: '#336167',
          400: '#20d3ee',
          410: '#25b9d0',
          420: '#27a0b4',
          430: '#278798',
          440: '#25707d',
          450: '#225963',
          500: '#07b6d5',
          510: '#16a0bb',
          520: '#1c8aa1',
          530: '#1f7588',
          540: '#1f6170',
          550: '#1d4e59',
          600: '#088eaf',
          610: '#137d9a',
          620: '#186d85',
          630: '#1a5d71',
          640: '#1a4d5e',
          650: '#193e4b',
          700: '#0e7490',
          710: '#14677f',
          720: '#17596e',
          730: '#184d5e',
          740: '#17404e',
          750: '#16343f',
          800: '#155f75',
          810: '#175467',
          820: '#174a5a',
          830: '#17404d',
          840: '#163641',
          850: '#152c34',
          900: '#164f64',
          910: '#174659',
          920: '#163e4e',
          930: '#163643',
          940: '#152d38',
          950: '#083344',
          960: '#0b2e3d',
          970: '#0d1a21',
          980: '#0b161b',
          990: '#071014',
          1000: '#04090c',
        },

        sky: {
          50: '#f0f9ff',
          60: '#d2dadf',
          70: '#b5bcc0',
          80: '#999ea2',
          90: '#7e8285',
          100: '#e1f3fe',
          110: '#c5d5de',
          120: '#aab7bf',
          130: '#909ba2',
          140: '#767f85',
          150: '#5e6569',
          200: '#bae5fd',
          210: '#a3c9dd',
          220: '#8dadbf',
          230: '#7892a1',
          240: '#637884',
          250: '#4f5f68',
          300: '#7ed4fc',
          310: '#70badd',
          320: '#62a0be',
          330: '#5488a0',
          340: '#477084',
          350: '#3a5968',
          400: '#3abff8',
          410: '#37a8d9',
          420: '#3491bb',
          430: '#307b9e',
          440: '#2b6682',
          450: '#265167',
          500: '#0da2e7',
          510: '#198fca',
          520: '#1e7caf',
          530: '#206994',
          540: '#1f5779',
          550: '#1e4660',
          600: '#0284c5',
          610: '#1174ad',
          620: '#176595',
          630: '#1a567f',
          640: '#1b4869',
          650: '#193a53',
          700: '#0369a0',
          710: '#0e5d8d',
          720: '#14517a',
          730: '#164668',
          740: '#173b56',
          750: '#163045',
          800: '#075783',
          810: '#0e4d74',
          820: '#124465',
          830: '#143b56',
          840: '#143148',
          850: '#13293a',
          900: '#0c4a6e',
          910: '#104261',
          920: '#123a55',
          930: '#133249',
          940: '#132b3d',
          950: '#082f49',
          960: '#0b2a41',
          970: '#0d1923',
          980: '#0b141c',
          990: '#080f15',
          1000: '#04080d',
        },

        blue: {
          50: '#eff6ff',
          60: '#d2d7df',
          70: '#b5bac0',
          80: '#999da2',
          90: '#7e8185',
          100: '#dcebfe',
          110: '#c1cede',
          120: '#a6b1bf',
          130: '#8d96a2',
          140: '#747b85',
          150: '#5c6269',
          200: '#bedbfe',
          210: '#a7c0de',
          220: '#90a6bf',
          230: '#7a8ca2',
          240: '#657385',
          250: '#515b69',
          300: '#91c3fd',
          310: '#80abdd',
          320: '#7094bf',
          330: '#5f7da1',
          340: '#506784',
          350: '#405268',
          400: '#61a6fa',
          410: '#5792db',
          420: '#4d7ebd',
          430: '#446b9f',
          440: '#3a5983',
          450: '#304767',
          500: '#3c83f6',
          510: '#3974d7',
          520: '#3564ba',
          530: '#30569d',
          540: '#2b4781',
          550: '#263a66',
          600: '#2463eb',
          610: '#2658ce',
          620: '#274db2',
          630: '#264296',
          640: '#24377c',
          650: '#202d62',
          700: '#1d4fd7',
          710: '#2146bd',
          720: '#223ea3',
          730: '#22358a',
          740: '#212d72',
          750: '#1e255a',
          800: '#1e3fae',
          810: '#203899',
          820: '#203285',
          830: '#1f2b71',
          840: '#1d255d',
          850: '#2a2269',
          900: '#1e3b8a',
          910: '#1e357a',
          920: '#1d2f6a',
          930: '#1c295a',
          940: '#1a234b',
          950: '#172554',
          960: '#17224b',
          970: '#121428',
          980: '#101020',
          990: '#0b0c18',
          1000: '#06060e',
        },

        red: {
          50: '#fef1f1',
          60: '#ded3d3',
          70: '#bfb6b6',
          80: '#a29a9a',
          90: '#696464',
          100: '#fee1e1',
          110: '#dec5c5',
          120: '#bfaaaa',
          130: '#a29090',
          140: '#857676',
          150: '#695e5e',
          200: '#fec8c8',
          210: '#deb0af',
          220: '#c09898',
          230: '#a28080',
          240: '#856a6a',
          250: '#695454',
          300: '#fca6a6',
          310: '#dd9292',
          320: '#be7f7e',
          330: '#a16c6b',
          340: '#845959',
          350: '#694847',
          400: '#f87171',
          410: '#d96464',
          420: '#bc5857',
          430: '#9f4c4b',
          440: '#83403f',
          450: '#683433',
          500: '#ef4343',
          510: '#d23d3c',
          520: '#b53835',
          530: '#9a322e',
          540: '#7f2b27',
          550: '#652521',
          600: '#dc2828',
          610: '#c12724',
          620: '#a82621',
          630: '#8e241d',
          640: '#76211a',
          650: '#5e1d16',
          700: '#ba1c1c',
          710: '#a41d1a',
          720: '#8f1d18',
          730: '#7a1c16',
          740: '#651b14',
          750: '#511811',
          800: '#981b1b',
          810: '#861b19',
          820: '#751b17',
          830: '#641a15',
          840: '#541813',
          850: '#441610',
          900: '#811d1d',
          910: '#721c1b',
          920: '#641b18',
          930: '#561916',
          940: '#481714',
          950: '#430a0a',
          960: '#3c0b09',
          970: '#240a04',
          980: '#1e0803',
          990: '#170502',
          1000: '#0e0301',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};