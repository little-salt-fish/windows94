(function () {

  var CONTENT = {
    'memo_to_self.txt': 'March 14, 1994\n\n- Buy milk\n- Ask someone what "the internet" is\n- Is my password still 123456?\n- This computer seems a little unstable.\n  (I\'m sure it\'s fine.)\n\nNote: Stop opening My Documents.',
    'IMPORTANT_do_not_open.txt': 'I warned you.',
    'resume_FINAL_v23_actual_final.txt': 'Name:       [left blank]\nSkills:     Can use a computer (most of the time)\n            Typing speed: 40 WPM\n            Special skill: closing error dialogs\nExperience: None listed\nSalary req: Negotiable (I am very agreeable)\n\nCreated using Windows 94.',
    'diary_1994_private.txt': 'November, 1994\n\nWang Daming says one day everyone will put\ntheir diaries on the internet for anyone to read.\nI think he has lost his mind.\nWho would put their diary online?\n\nHe also says phones will connect to the internet.\nPhones are for phone calls. That is enough.\n\nAnyway, this computer is very good.\nExcept for when it crashes. Which is often.\n\n        \u2014 the author',
    'MSFT_EquityNote_1994_CONFIDENTIAL.rtf': 'MSFT_EquityNote_1994_CONFIDENTIAL.RTF\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n  EQUITY RESEARCH NOTE\n  Fiscal Year 1994 \u2014 Internal Distribution Only\n\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n  COMPANY:  Microsoft Corporation (NASDAQ: MSFT)\n  RATING:   BUY\n            (because apparently \'too expensive\'\n             is not a thing anymore)\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  THESIS (SHORT VERSION)\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  \u2022 Windows is eating the PC industry\n  \u2022 Office is eating Windows users\' wallets\n  \u2022 Developers are locked in like it\'s Hotel California\n\n  Conclusion: this is not a software company.\n  It is a tax on computing.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  MANAGEMENT\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  Led by Bill Gates, who appears to be speedrunning\n  capitalism with a compiler.\n\n  Yes, he will retire before the Jeffrey Epstein\n  file release.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  VALUATION\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  At ~$90bn, investors may feel this is\n  \'priced for perfection.\'\n\n  We respectfully disagree \u2014\n  mostly because we\'ve decided to abandon reality.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  PRICE TARGET\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  $3.0 TRILLION by 2025\n\n  Yes. Trillion.\n  NOT thousand. With a \'T.\'\n\n  No, we will not be providing a DCF.\n  Yes, this implies ~30x from here.\n  No, we are not sorry.\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  CATALYSTS\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  \u2022 Every human eventually needs Word to write\n    something they don\'t want to write\n\n  \u2022 Every company eventually standardizes on Excel\n    to argue about numbers\n\n  \u2022 Computing becomes\u2026 everything?\n    (work in progress)\n\n  \u2022 Copyright infringe themselves in China and India!\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  RISKS\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  \u2022 Antitrust\n  \u2022 Competition\n  \u2022 Google, ChatGPT and Claude\n  \u2022 Literally anything that prevents\n    this absurd outcome\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  BOTTOM LINE\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  You think you\'re buying a PC software vendor.\n\n  You\'re actually buying the future operating\n  system of civilization.\n\n  Probably fine.\n\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n  DISCLAIMER\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n\n  This report is based on highly rigorous analytical\n  methods, including but not limited to: vibes,\n  extrapolation, and a faint sense of inevitability.\n\n  Certain forward-looking statements (e.g., \'$3 trillion\')\n  may rely on information not yet available in 1994,\n  including but not limited to the existence of the\n  modern internet, smartphones, or whatever \'cloud\'\n  ends up meaning.\n\n  Any references to future entities such as \'Google,\'\n  \'ChatGPT,\' or \'Claude\' are purely speculative and\n  should be treated as fictional constructs, much like\n  efficient government regulation of monopolies.\n\n  This is not investment advice.\n\n  If it somehow turns out to be correct, that is purely\n  coincidental and should not be used to evaluate the\n  analyst\'s methodology.\n\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n  [END OF DOCUMENT]\n  Printed on: HP LaserJet 4 \u2014 600 DPI\n  Do not distribute. Especially not to compliance.\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550'
  };

  var FILES = [
    { name: 'memo_to_self.txt', size: '312', type: 'text' },
    { name: 'IMPORTANT_do_not_open.txt', size: '14', type: 'text' },
    { name: 'resume_FINAL_v23_actual_final.txt', size: '248', type: 'text' },
    { name: 'diary_1994_private.txt', size: '389', type: 'text' },
    { name: 'cat.bmp', size: '2,048', type: 'image' },
    { name: 'photo001.bmp', size: '2,048', type: 'image' },
    { name: 'MSFT_EquityNote_1994_CONFIDENTIAL.rtf', size: '4,096', type: 'rtf' }
  ];

  var PIXEL_ART = {};

  PIXEL_ART['cat.bmp'] = {
    w: 16, h: 16, cell: 8,
    data: [
      '..BB........BB..',
      '.B..B......B..B.',
      'B..KB......BK..B',
      'BKKkb......bkKKB',
      'BKKKbbbbbbbbKKKB',
      'bKKKKKKKKKKKKKKb',
      '.bKKGKKKKKKGKKb.',
      '.bKKKKKKKKKKKKb.',
      '.bKKKKKbKKKKKKb.',
      '.bKKKbKKKbKKKKb.',
      '..bKKKKKKKKKKb..',
      '..bKKKKKKKKKKb..',
      '...bbKKKKKKbb...',
      '.....bbbbbb.....',
      '................',
      '................'
    ],
    palette: { '.': null, 'B': '#000000', 'K': '#FF8800', 'k': '#CC6600', 'b': '#553300', 'G': '#00CC00' }
  };

  PIXEL_ART['photo001.bmp'] = {
    w: 16, h: 16, cell: 8,
    data: [
      '..ccccccccccc...',
      '.cSSSSSSSSSSSSc.',
      'cSSSSSSSSSSSSSSc',
      'cSSSbbSSSSbbSSSc',
      'cSSSbbSSSSbbSSSc',
      'cSSSSSSSSSSSSSSc',
      'cSSSSSSbbSSSSSsc',
      'cSSSSSSSSSSSSSSc',
      'cSSSbbbbbbbSSSSc',
      'cSSSSbbbbbSSSSSc',
      'cSSSSSSSSSSSSSSc',
      '.cSSSSSSSSSSSSc.',
      '..cccccccccccc..',
      '....GGGGGGGG....',
      '...GGGGGGGGGG...',
      '....GGGGGGGG....'
    ],
    palette: { '.': null, 'c': '#8B4513', 'S': '#FFCC99', 'b': '#000000', 's': '#FF8888', 'G': '#808080' }
  };

  function delay(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  function $(sel) { return document.querySelector(sel); }

  function buildPixelGrid(art) {
    var grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(' + art.w + ', ' + art.cell + 'px)';
    grid.style.gridTemplateRows = 'repeat(' + art.h + ', ' + art.cell + 'px)';
    grid.style.imageRendering = 'pixelated';
    for (var y = 0; y < art.h; y++) {
      var row = art.data[y];
      for (var x = 0; x < art.w; x++) {
        var px = document.createElement('div');
        var color = art.palette[row[x]];
        if (color) {
          px.style.background = color;
        }
        grid.appendChild(px);
      }
    }
    return grid;
  }

  function fileIcon(type) {
    if (type === 'image') return '\uD83C\uDFDE\uFE0F';
    if (type === 'rtf') return '\uD83D\uDCC4';
    return '\uD83D\uDCC4';
  }

  function removeOverlay() {
    var o = $('#modal-overlay');
    if (o) o.remove();
  }

  function openMyComputer() {
    var html = '<div style="padding:8px">';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px">';
    html += '<div style="width:72px;height:80px;display:flex;flex-direction:column;align-items:center;cursor:default" ondblclick="Apps.showFloppyError()">';
    html += '<div style="font-size:28px;width:32px;height:32px;display:flex;align-items:center;justify-content:center">\uD83D\uDCBE</div>';
    html += '<div style="text-align:center;font-size:10px;margin-top:3px">3\u00BD Floppy (A:)</div></div>';
    html += '<div style="width:72px;height:80px;display:flex;flex-direction:column;align-items:center;cursor:default" ondblclick="Apps.openCDrive()">';
    html += '<div style="font-size:28px;width:32px;height:32px;display:flex;align-items:center;justify-content:center">\uD83D\uDDB4</div>';
    html += '<div style="text-align:center;font-size:10px;margin-top:3px">(C:)</div></div>';
    html += '<div style="width:72px;height:80px;display:flex;flex-direction:column;align-items:center;cursor:default" ondblclick="Apps.openCDrive()">';
    html += '<div style="font-size:28px;width:32px;height:32px;display:flex;align-items:center;justify-content:center">\uD83D\uDCBF</div>';
    html += '<div style="text-align:center;font-size:10px;margin-top:3px">(D:) CD-ROM</div></div>';
    html += '</div></div>';

    WM.create('mycomputer', 'My Computer', 380, 260, html);
  }

  function openCDrive() {
    var html = '<ul class="file-list">';
    html += '<li class="file-item" ondblclick="Apps.openMyDocuments()">';
    html += '<span class="file-col-name">\uD83D\uDCC1 My Documents</span>';
    html += '<span class="file-col-size">&lt;DIR&gt;</span></li>';
    html += '<li class="file-item">';
    html += '<span class="file-col-name">\uD83D\uDCC4 AUTOEXEC.BAT</span>';
    html += '<span class="file-col-size">0</span></li>';
    html += '<li class="file-item">';
    html += '<span class="file-col-name">\uD83D\uDCC4 CONFIG.SYS</span>';
    html += '<span class="file-col-size">42</span></li>';
    html += '<li class="file-item">';
    html += '<span class="file-col-name">\uD83D\uDCC1 WINDOWS</span>';
    html += '<span class="file-col-size">&lt;DIR&gt;</span></li>';
    html += '</ul>';

    var el = WM.create('cdrive', '(C:)', 340, 240, html);
    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = '4 object(s)';
    el.appendChild(statusBar);
  }

  function showFloppyError() {
    Crash.trigger();
  }

  function openMyDocuments() {
    var html = '<ul class="file-list">';
    for (var i = 0; i < FILES.length; i++) {
      var f = FILES[i];
      var icon = fileIcon(f.type);
      var action;
      if (f.type === 'rtf') action = 'Apps.openMSFTNote()';
      else if (f.type === 'text') action = 'Apps.openTextViewer(\'' + f.name + '\')';
      else action = 'Apps.openImageViewer(\'' + f.name + '\')';
      html += '<li class="file-item" ondblclick="' + action + '">';
      html += '<span class="file-col-name">' + icon + ' ' + f.name + '</span>';
      html += '<span class="file-col-size">' + f.size + '</span></li>';
    }
    html += '</ul>';

    var el = WM.create('mydocs', 'My Documents', 380, 280, html);
    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = FILES.length + ' object(s)';
    el.appendChild(statusBar);
  }

  function openTextViewer(filename) {
    var text = CONTENT[filename];
    if (!text) {
      Crash.trigger();
      return;
    }

    var el = WM.create('text-' + filename, filename, 420, 320, '');
    var content = el.querySelector('.window-content');
    content.className = 'window-content';
    content.style.padding = '0';

    var menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    var fileMenu = document.createElement('div');
    fileMenu.className = 'menu-item';
    fileMenu.textContent = 'File';
    var editMenu = document.createElement('div');
    editMenu.className = 'menu-item';
    editMenu.textContent = 'Edit';
    menuBar.appendChild(fileMenu);
    menuBar.appendChild(editMenu);
    el.insertBefore(menuBar, content);

    var viewer = document.createElement('div');
    viewer.className = 'text-viewer';
    viewer.textContent = text;
    content.appendChild(viewer);
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.background = '#fff';

    if (filename === 'IMPORTANT_do_not_open.txt') {
      setTimeout(function () { Crash.trigger(); }, 600);
    }
  }

  function openImageViewer(filename) {
    var art = PIXEL_ART[filename];
    if (!art) {
      Crash.trigger();
      return;
    }

    var el = WM.create('img-' + filename, filename, art.w * art.cell + 16, art.h * art.cell + 80, '');
    var content = el.querySelector('.window-content');
    content.style.display = 'flex';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'center';
    content.style.background = '#C0C0C0';
    content.style.padding = '8px';

    var grid = buildPixelGrid(art);
    content.appendChild(grid);

    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = filename + ' \u2014 ' + art.w + 'x' + art.h;
    el.appendChild(statusBar);
  }

  function openMSFTNote() {
    var text = CONTENT['MSFT_EquityNote_1994_CONFIDENTIAL.rtf'];
    var el = WM.create('msft-note', 'MSFT_EquityNote_1994_CONFIDENTIAL.RTF - WordPad', 500, 400, '');
    var content = el.querySelector('.window-content');
    content.style.padding = '0';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.background = '#C0C0C0';

    // WordPad-style menu bar
    var menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    ['File', 'Edit', 'View'].forEach(function (label) {
      var item = document.createElement('div');
      item.className = 'menu-item';
      item.textContent = label;
      item.addEventListener('click', function () { Crash.trigger(); });
      menuBar.appendChild(item);
    });
    el.insertBefore(menuBar, content);

    var viewer = document.createElement('div');
    viewer.style.cssText = 'font-family:"Courier New",monospace;font-size:11px;padding:12px;white-space:pre-wrap;background:#fff;color:#000;flex:1;overflow:auto;line-height:1.7;user-select:text;-webkit-user-select:text;';
    viewer.textContent = text;
    content.appendChild(viewer);
  }

  function openNetworkNeighborhood() {
    var el = WM.create('network', 'Network Neighborhood', 340, 220, '<div style="padding:16px;color:#808080;text-align:center">Searching for computers...</div>');
    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = 'Searching... (56K)';
    el.appendChild(statusBar);
  }

  function openRecycleBin() {
    var html = '<ul class="file-list">';
    html += '<li class="file-item" ondblclick="Apps.openBitcoinFile()">';
    html += '<span class="file-col-name">\uD83D\uDCC4 2012_bitcoin_recovery_phrase.txt</span>';
    html += '<span class="file-col-size" style="font-size:9px;white-space:nowrap">[Deleted: 12/14/2012]</span></li>';
    html += '</ul>';

    var el = WM.create('recycle', 'Recycle Bin', 400, 220, html);
    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = '1 object(s)';
    el.appendChild(statusBar);
  }

  function openBitcoinFile() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'Recycle Bin';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.className = 'dialog-body';
    var icon = document.createElement('div');
    icon.className = 'dialog-icon';
    icon.textContent = '\u26A0\uFE0F';
    var msg = document.createElement('div');
    msg.className = 'dialog-message';
    msg.textContent = 'WARNING: This file was deleted in 2012.\nContents may be sensitive. Open anyway?';
    body.appendChild(icon);
    body.appendChild(msg);
    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    var yesBtn = document.createElement('button');
    yesBtn.className = 'dialog-btn';
    yesBtn.textContent = 'Yes';
    yesBtn.addEventListener('click', function () {
      dialog.remove();
      removeOverlay();
      showBitcoinBSOD();
    });
    var cancelBtn = document.createElement('button');
    cancelBtn.className = 'dialog-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', function () { dialog.remove(); removeOverlay(); });
    btnRow.appendChild(yesBtn);
    btnRow.appendChild(cancelBtn);
    dialog.appendChild(btnRow);

    document.body.appendChild(dialog);
  }

  function showBitcoinBSOD() {
    var bsod = document.createElement('div');
    bsod.id = 'bsod-screen';
    bsod.style.cssText = 'position:fixed;inset:0;background:#0000AA;display:flex;align-items:center;justify-content:center;z-index:99998;cursor:default;';
    var text = document.createElement('div');
    text.style.cssText = 'color:#fff;font-family:"Courier New",monospace;font-size:14px;white-space:pre;line-height:1.8;text-align:center;padding:40px;';
    var bsodText = 'A fatal exception 0E has occurred at 0028:C001E36\n'
      + 'in VXD BITCOIN.VXD(01) + 00012E36.\n'
      + '\n'
      + 'The current application will be terminated.\n'
      + '\n'
      + '* Press any key to terminate the application.\n'
      + '* Press CTRL+ALT+DEL to restart your computer.\n'
      + '  You will lose any unsaved information in all\n'
      + '  applications.\n'
      + '\n'
      + 'Press any key to continue_';
    text.textContent = bsodText;
    bsod.appendChild(text);
    document.body.appendChild(bsod);

    // Blinking cursor
    var cursorVisible = true;
    var blinkId = setInterval(function () {
      cursorVisible = !cursorVisible;
      var t = bsodText;
      text.textContent = cursorVisible ? t : t.replace(/_$/, ' ');
    }, 500);

    function onKey() {
      clearInterval(blinkId);
      document.removeEventListener('keydown', onKey);
      bsod.removeEventListener('click', onKey);
      bsod.remove();
      showSafeToTurnOff();
    }
    document.addEventListener('keydown', onKey);
    bsod.addEventListener('click', onKey);
  }

  async function openInternet() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';
    dialog.style.minWidth = '320px';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'Connecting to Internet...';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.style.padding = '16px';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.gap = '4px';
    dialog.appendChild(body);

    var steps = [
      { text: 'Initializing modem...', delay: 600 },
      { text: 'Dialing 1-800-INTERNET...', delay: 800 },
      { text: 'Verifying username and password...', delay: 800 },
      { text: 'Connected at 28.8kbps!', delay: 600 }
    ];

    var stepEls = [];
    for (var i = 0; i < steps.length; i++) {
      var row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '8px';
      row.style.padding = '3px 0';
      var check = document.createElement('span');
      check.style.width = '14px';
      check.style.color = '#006600';
      check.style.fontWeight = 'bold';
      check.style.fontSize = '12px';
      check.textContent = '';
      var label = document.createElement('span');
      label.style.color = '#808080';
      label.textContent = steps[i].text;
      row.appendChild(check);
      row.appendChild(label);
      body.appendChild(row);
      stepEls.push({ check: check, label: label });
    }

    document.body.appendChild(dialog);

    for (var i = 0; i < steps.length; i++) {
      stepEls[i].label.style.color = '#000';
      await delay(steps[i].delay);
      stepEls[i].check.textContent = '\u2714';
    }

    await delay(400);
    dialog.remove();
    removeOverlay();

    var pageHTML = '<div style="font-family:Courier New,monospace;font-size:12px;padding:12px;white-space:pre-wrap;background:#fff;color:#000;flex:1;overflow:auto;line-height:1.7;user-select:text;-webkit-user-select:text">'
      + '<b>HTTP 404 \u2014 Page Not Found</b>\n\n'
      + 'The page you requested could not be found.\n\n'
      + 'Possible reasons:\n'
      + '  \u2022 The internet hasn\'t been fully built yet\n'
      + '  \u2022 This page exists in the future\n'
      + '  \u2022 You typed the URL wrong (it happens)\n'
      + '  \u2022 The webmaster is on vacation\n\n'
      + '<i>Try again in a few decades.</i>\n\n'
      + '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n'
      + 'Windows 94 Internet Explorer 0.1\n'
      + 'Connected at 28.8kbps | Bytes received: 404'
      + '</div>';

    var el = WM.create('internet', 'Internet Explorer 0.1 - BEFORE MICROSOFT DECIDES TO BUNDLE', 480, 340, '');
    var content = el.querySelector('.window-content');
    content.style.padding = '0';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.background = '#C0C0C0';

    var addressBar = document.createElement('div');
    addressBar.style.cssText = 'display:flex;align-items:center;padding:2px 4px;gap:6px;background:#C0C0C0;border-bottom:1px solid #808080;height:24px;flex-shrink:0';
    var addrLabel = document.createElement('span');
    addrLabel.textContent = 'Address:';
    var addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.value = 'http://www.internet.com';
    addrInput.readOnly = true;
    addrInput.style.cssText = 'flex:1;height:18px;box-shadow:inset 1px 1px #808080,inset -1px -1px #fff,inset 2px 2px #000;border:none;padding:0 4px;font-family:Courier New,monospace;background:#fff;outline:none';
    addressBar.appendChild(addrLabel);
    addressBar.appendChild(addrInput);

    content.insertBefore(addressBar, content.firstChild);

    var pageEl = document.createElement('div');
    pageEl.innerHTML = pageHTML;
    content.appendChild(pageEl.firstChild);

    var statusBar = document.createElement('div');
    statusBar.className = 'status-bar';
    statusBar.textContent = 'Done';
    el.appendChild(statusBar);
  }

  function initStartMenu() {
    var startBtn = $('#start-btn');
    var menuEl = null;
    var menuOpen = false;

    function closeMenu() {
      if (menuEl) {
        menuEl.remove();
        menuEl = null;
      }
      menuOpen = false;
    }

    startBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menuOpen) {
        closeMenu();
        return;
      }

      menuEl = document.createElement('div');
      menuEl.className = 'start-menu';

      var sidebar = document.createElement('div');
      sidebar.className = 'start-menu-sidebar';
      sidebar.textContent = 'Windows94';
      menuEl.appendChild(sidebar);

      var items = document.createElement('div');
      items.className = 'start-menu-items';

      var menuItems = [
        { label: '\uD83D\uDCC2 Programs', action: function () { closeMenu(); Crash.trigger(); } },
        { label: '\uD83D\uDCC4 Documents', action: function () { closeMenu(); Crash.trigger(); } },
        { label: '\u2699\uFE0F Settings', action: function () { closeMenu(); Crash.trigger(); } },
        { label: '\uD83D\uDD0D Find', action: function () { closeMenu(); Crash.trigger(); } },
        { label: '\u2753 Help', action: function () { closeMenu(); Crash.trigger(); } },
        'separator',
        { label: '\u25B6\uFE0F Run...', action: function () { closeMenu(); showRunDialog(); } },
        'separator',
        { label: '\uD83D\uDD0C Shut Down...', action: function () { closeMenu(); shutdownDialog(); } }
      ];

      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i] === 'separator') {
          var sep = document.createElement('div');
          sep.className = 'start-menu-separator';
          items.appendChild(sep);
        } else {
          var item = document.createElement('div');
          item.className = 'start-menu-item';
          item.textContent = menuItems[i].label;
          item.addEventListener('click', menuItems[i].action);
          items.appendChild(item);
        }
      }

      menuEl.appendChild(items);
      $('.taskbar').appendChild(menuEl);
      menuOpen = true;
    });

    document.addEventListener('click', function () {
      if (menuOpen) closeMenu();
    });
  }

  function showRunDialog() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';
    dialog.style.minWidth = '340px';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'Run';
    var titleBtns = document.createElement('div');
    titleBtns.className = 'title-buttons';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'title-btn';
    closeBtn.textContent = '\u00D7';
    closeBtn.addEventListener('click', function () { dialog.remove(); removeOverlay(); });
    titleBtns.appendChild(closeBtn);
    titleBar.appendChild(titleText);
    titleBar.appendChild(titleBtns);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.style.padding = '12px 16px';
    var label = document.createElement('div');
    label.textContent = 'Type the name of a program, and Windows 94 will crash it for you.';
    label.style.marginBottom = '8px';
    label.style.lineHeight = '1.5';
    body.appendChild(label);

    var row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:8px';
    var openLabel = document.createElement('span');
    openLabel.textContent = 'Open:';
    var input = document.createElement('input');
    input.type = 'text';
    input.style.cssText = 'flex:1;height:20px;box-shadow:inset 1px 1px #808080,inset -1px -1px #fff,inset 2px 2px #000;border:none;padding:0 4px;background:#fff;outline:none';
    row.appendChild(openLabel);
    row.appendChild(input);
    body.appendChild(row);
    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    var okBtn = document.createElement('button');
    okBtn.className = 'dialog-btn';
    okBtn.textContent = 'OK';
    okBtn.addEventListener('click', function () {
      dialog.remove();
      removeOverlay();
      Crash.trigger();
    });
    var cancelBtn = document.createElement('button');
    cancelBtn.className = 'dialog-btn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', function () { dialog.remove(); removeOverlay(); });
    btnRow.appendChild(okBtn);
    btnRow.appendChild(cancelBtn);
    dialog.appendChild(btnRow);

    document.body.appendChild(dialog);
    input.focus();
  }

  function shutdownDialog() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'Shut Down Windows';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.style.padding = '12px 16px';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.gap = '6px';

    var q = document.createElement('div');
    q.textContent = 'What do you want the computer to do?';
    q.style.marginBottom = '4px';
    body.appendChild(q);

    var radio1 = document.createElement('label');
    radio1.style.cssText = 'display:flex;align-items:center;gap:6px;padding:3px 0;cursor:pointer';
    var r1 = document.createElement('input');
    r1.type = 'radio';
    r1.name = 'shutdown';
    r1.value = 'shutdown';
    r1.checked = true;
    radio1.appendChild(r1);
    radio1.appendChild(document.createTextNode('Shut down'));
    body.appendChild(radio1);

    var radio2 = document.createElement('label');
    radio2.style.cssText = 'display:flex;align-items:center;gap:6px;padding:3px 0;cursor:pointer';
    var r2 = document.createElement('input');
    r2.type = 'radio';
    r2.name = 'shutdown';
    r2.value = 'restart';
    radio2.appendChild(r2);
    radio2.appendChild(document.createTextNode('Restart'));
    body.appendChild(radio2);

    dialog.appendChild(body);

    var warning = document.createElement('div');
    warning.style.cssText = 'background:#C0C0C0;box-shadow:inset 1px 1px #808080,inset -1px -1px #fff,inset 2px 2px #000,inset -2px -2px #dfdfdf;padding:8px;margin:0 16px 8px;white-space:pre-wrap;line-height:1.6';
    warning.textContent = '\u26A0\uFE0F Warning:\nThere is no cloud. There is no autosave.\nYour files were never safe to begin with.';
    dialog.appendChild(warning);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    var yesBtn = document.createElement('button');
    yesBtn.className = 'dialog-btn';
    yesBtn.textContent = 'Yes';
    yesBtn.addEventListener('click', function () {
      dialog.remove();
      removeOverlay();
      showSafeToTurnOff();
    });
    var noBtn = document.createElement('button');
    noBtn.className = 'dialog-btn';
    noBtn.textContent = 'No';
    noBtn.addEventListener('click', function () {
      dialog.remove();
      removeOverlay();
    });
    btnRow.appendChild(yesBtn);
    btnRow.appendChild(noBtn);
    dialog.appendChild(btnRow);

    document.body.appendChild(dialog);
  }

  function initDesktopRightClick() {
    var desktop = $('#desktop');
    desktop.addEventListener('contextmenu', function (e) {
      if (e.target !== desktop && !e.target.classList.contains('icon-label') && !e.target.classList.contains('icon-img') && !e.target.classList.contains('icon')) {
        return;
      }
      e.preventDefault();
      closeContextMenu();

      var menu = document.createElement('div');
      menu.className = 'context-menu';
      menu.style.left = e.clientX + 'px';
      menu.style.top = e.clientY + 'px';

      var items = [
        { label: 'Arrange Icons', action: function () { closeContextMenu(); Crash.trigger(); } },
        { label: 'Refresh', action: function () { closeContextMenu(); Crash.trigger(); } },
        'separator',
        { label: 'Properties', action: function () { closeContextMenu(); aboutDialog(); } }
      ];

      for (var i = 0; i < items.length; i++) {
        if (items[i] === 'separator') {
          var sep = document.createElement('div');
          sep.className = 'context-sep';
          menu.appendChild(sep);
        } else {
          var item = document.createElement('div');
          item.className = 'context-item';
          item.textContent = items[i].label;
          item.addEventListener('click', items[i].action);
          menu.appendChild(item);
        }
      }

      document.body.appendChild(menu);

      var rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) menu.style.left = (window.innerWidth - rect.width) + 'px';
      if (rect.bottom > window.innerHeight) menu.style.top = (window.innerHeight - rect.height) + 'px';
    });

    document.addEventListener('click', closeContextMenu);
  }

  function closeContextMenu() {
    var old = document.querySelector('.context-menu');
    if (old) old.remove();
  }

  function aboutDialog() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';
    dialog.style.minWidth = '320px';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'About Windows 94';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.style.cssText = 'display:flex;flex-direction:column;align-items:center;padding:16px;gap:12px';

    var flagGrid = document.createElement('div');
    flagGrid.style.cssText = 'display:grid;grid-template-columns:24px 24px;grid-template-rows:24px 24px;gap:3px';
    var flagColors = ['#FF0000', '#00AA00', '#0000FF', '#FFCC00'];
    for (var i = 0; i < 4; i++) {
      var cell = document.createElement('div');
      cell.style.cssText = 'width:24px;height:24px;background:' + flagColors[i];
      flagGrid.appendChild(cell);
    }
    body.appendChild(flagGrid);

    var name = document.createElement('div');
    name.style.cssText = 'font-weight:bold;font-size:14px';
    name.textContent = 'Windows 94';
    body.appendChild(name);

    var info = document.createElement('div');
    info.style.cssText = 'font-family:Courier New,monospace;font-size:11px;white-space:pre-wrap;line-height:1.7;text-align:center';
    info.textContent = 'Version 0.1 (Build 94)\n\nA nostalgic operating system\nfrom the future, pretending\nto be from the past.\n\n\u00A9 1994 Nobody Corp.\nAll rights unreserved.';
    body.appendChild(info);

    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    var okBtn = document.createElement('button');
    okBtn.className = 'dialog-btn';
    okBtn.textContent = 'OK';
    okBtn.addEventListener('click', function () { dialog.remove(); removeOverlay(); });
    btnRow.appendChild(okBtn);
    dialog.appendChild(btnRow);

    document.body.appendChild(dialog);
  }

  function wireDesktopIcons() {
    var iconMap = {
      'icon-mycomputer': openMyComputer,
      'icon-mydocs': openMyDocuments,
      'icon-network': openNetworkNeighborhood,
      'icon-recycle': openRecycleBin,
      'icon-internet': openInternet
    };

    Object.keys(iconMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;

      el.addEventListener('dblclick', iconMap[id]);

      el.addEventListener('click', function () {
        var allIcons = document.querySelectorAll('#desktop .icon');
        allIcons.forEach(function (ic) { ic.classList.remove('selected'); });
        el.classList.add('selected');
      });
    });

    $('#desktop').addEventListener('click', function (e) {
      if (e.target.id === 'desktop' || e.target === $('#desktop')) {
        document.querySelectorAll('#desktop .icon').forEach(function (ic) {
          ic.classList.remove('selected');
        });
      }
    });
  }

  function showUpsellDialog(escalated) {
    var overlay = document.createElement('div');
    overlay.id = 'upsell-overlay';
    overlay.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:9994;';
    document.getElementById('crt-wrapper').appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.id = 'upsell-dialog';
    dialog.className = 'dialog';
    dialog.style.cssText = 'z-index:9995;width:380px;max-height:340px;overflow-y:auto;';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    titleBar.style.background = '#AA8800';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = escalated ? '\u26A0\uFE0F FINAL WARNING \u2014 PHOSPHORS CRITICAL' : '\u26A0\uFE0F MONITOR HEALTH ALERT';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.style.cssText = 'padding:12px;white-space:pre-wrap;line-height:1.5;font-size:9px;';
    body.textContent = 'CRITICAL WARNING\n\n'
      + 'Windows 94 has detected your monitor\n'
      + 'is experiencing PHOSPHOR BURN-IN.\n\n'
      + 'Permanent damage may be occurring\n'
      + 'RIGHT NOW as you read this.\n\n'
      + '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n'
      + '  \uD83D\uDCBE ScreenSaver Pro 94\u2122\n\n'
      + '  Protects your investment!\n'
      + '  500+ screensaver patterns!\n'
      + '  Flying toasters included!\n\n'
      + '  ~~$99.95~~  NOW ONLY $49.95\n'
      + '  \u2713 No subscription\n'
      + '  \u2713 You own it for life\n'
      + '  \u2713 Free updates until 1998\n'
      + '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
      + 'Act now \u2014 your phosphors won\'t wait.';
    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;flex-direction:column;gap:6px;padding:8px 12px 10px;';

    var buyBtn = document.createElement('button');
    buyBtn.className = 'dialog-btn';
    buyBtn.style.cssText = 'width:100%;min-width:auto;font-size:8px;height:auto;padding:4px 8px;';
    buyBtn.textContent = 'YES! Protect my monitor!';
    buyBtn.addEventListener('click', function () {
      closeUpsell();
      Crash.trigger(
        'Payment processing via fax machine.\n'
        + 'Please print this screen and mail a cheque to:\n\n'
        + 'ScreenSaver Pro Inc.\n'
        + 'P.O. Box 4829, Sacramento, CA 94203\n\n'
        + 'Allow 6-8 weeks for delivery.\n'
        + 'Serial number mailed on 3\u00BD inch floppy disk.\n\n'
        + 'Error: FAX.EXE not found.'
      );
    });

    var laterBtn = document.createElement('button');
    laterBtn.className = 'dialog-btn';
    laterBtn.style.cssText = 'width:100%;min-width:auto;font-size:8px;height:auto;padding:4px 8px;';
    laterBtn.textContent = 'Remind me later';
    laterBtn.addEventListener('click', function () {
      closeUpsell();
      if (window.BurnIn) BurnIn.onUpsellRemindLater();
    });

    var noBtn = document.createElement('button');
    noBtn.className = 'dialog-btn';
    noBtn.style.cssText = 'width:100%;min-width:auto;font-size:8px;height:auto;padding:4px 8px;';
    noBtn.textContent = 'No thanks, I enjoy damage';
    noBtn.addEventListener('click', function () {
      closeUpsell();
      if (window.BurnIn) BurnIn.onUpsellNeverShow();
    });

    btnRow.appendChild(buyBtn);
    btnRow.appendChild(laterBtn);
    btnRow.appendChild(noBtn);
    dialog.appendChild(btnRow);

    document.getElementById('crt-wrapper').appendChild(dialog);
  }

  function closeUpsell() {
    var d = document.getElementById('upsell-dialog');
    if (d) d.remove();
    var o = document.getElementById('upsell-overlay');
    if (o) o.remove();
  }

  function init() {
    wireDesktopIcons();
    initStartMenu();
    initDesktopRightClick();
  }

  window.Apps = {
    init: init,
    showUpsellDialog: showUpsellDialog,
    openMyComputer: openMyComputer,
    openCDrive: openCDrive,
    showFloppyError: showFloppyError,
    openMyDocuments: openMyDocuments,
    openTextViewer: openTextViewer,
    openImageViewer: openImageViewer,
    openNetworkNeighborhood: openNetworkNeighborhood,
    openRecycleBin: openRecycleBin,
    openInternet: openInternet,
    openBitcoinFile: openBitcoinFile,
    openMSFTNote: openMSFTNote
  };

})();
