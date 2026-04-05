(function () {
  var crashCount = 0;
  var pageLoadTime = Date.now();
  var stormMode = false;
  var stormCount = 0;
  var stormMax = 0;
  var stormInterval = null;
  var stormDialogs = [];
  var randomDialogs = [];

  var MESSAGES = [
    'An error has occurred. But honestly, what did you expect?',
    'Windows 94 has performed an illegal operation.\nIt has been reported to no one.',
    'FATAL ERROR: The system tried to divide by zero.\nMathematicians are furious.',
    'Your computer has run out of memory.\nIt also ran out of patience.',
    'A critical process died.\nIt lived a good life.',
    'Error 0x0000OOPS: Something went wrong.\nThat\'s all we know. That\'s all we\'ll ever know.',
    'The system has encountered a problem it cannot solve.\nJoin the club, system.',
    'Stack overflow in module FEELINGS.DLL',
    'Exception at 0x00FACADE:\nReality not found.',
    'Windows 94 Protection Error.\nYour files are probably fine. Probably.',
    'Keyboard not found.\nPress F1 to continue.',
    'ERROR: This program has performed an illegal operation\nand will be prosecuted to the fullest extent of the law.',
    'An unexpected error occurred.\nTo be fair, no one expects errors.',
    'General Protection Fault in module EXISTENTIAL.VXD.\nPlease question everything.'
  ];

  var RANDOM_ERRORS = [
    'NAVAGTR.EXE has performed an illegal operation\nand will be shut down.\nIf the problem persists, contact your\ncomputer\'s manufacturer.\nThey will not help you.',
    'Stack overflow in module BRAIN.DLL\nUser cognitive load exceeded.\nPlease restart your train of thought.',
    'Printer not found.\nHave you tried turning it off\nand leaving it off forever.',
    'Fatal error: reality.exe has stopped responding.\nWindows 94 will now ignore this.',
    'Your computer is running low on excuses.\nPlease free up some responsibility.',
    'CLOCK.EXE: Time is moving too fast.\nThis is not a software problem.\nThis is an existential problem.'
  ];

  var RANDOM_WARNINGS = [
    'Windows 94 has detected you have not\nsaved your work in 0 minutes.\nWe will remind you every 30 seconds\nuntil the heat death of the universe.',
    'Low disk space on drive C:\\\nYou have used 47MB of your 210MB.\nThis trajectory is unsustainable.\nPlease delete something you love.',
    'Your wallpaper has not been changed\nin 3 days. Studies show this causes\nreduced productivity and mild existential dread.\nSource: Windows 94 Research Division',
    'MOUSE.DRV: Cursor moved 2,847 pixels today.\nRecommended daily limit: 2,400 pixels.\nPlease rest your wrist and reconsider\nyour life choices.',
    'Caps Lock is off.\nJust checking.\nWe thought you should know.'
  ];

  var RANDOM_INFO = [
    'Fun Fact: Your computer has been on\nfor [uptime] minutes.\nIt is more tired than you are.',
    'Windows 94 Update Available:\nWindows 94 Service Pack 0.1\nFixes: 3 bugs\nIntroduces: 17 new bugs\nDownload size: 1 floppy disk\nEst. install time: Thursday',
    'Good [greeting].\nThis message contains no useful information.\nHave a productive day.',
    'REMINDER: The internet is a fad.\nPlease do not become dependent on it.\n\u2014 Windows 94 Advisory Board, 1994',
    'Your computer appreciates you.\nThis message was generated automatically.\nThe computer does not actually have feelings.\nProbably.'
  ];

  var RANDOM_QUESTIONS = [
    { msg: 'A program is not responding.\nWhich program? We\'d rather not say.', btns: ['Wait', 'Wait Longer', 'Give Up'] },
    { msg: 'Windows 94 has found new hardware:\nUnknown Device (Unknown)\nWould you like to install a driver?', btns: ['Yes', 'No', 'What is a driver'] },
    { msg: 'It looks like you\'re trying to use\na computer. Would you like help?', btns: ['Yes', 'No', 'I\'ve made a mistake'] },
    { msg: 'Are you still there?', btns: ['Yes', 'No', 'Existentially Uncertain'] }
  ];

  function delay(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  function $(sel) { return document.querySelector(sel); }

  function removeDialog() {
    var d = $('#crash-dialog');
    if (d) d.remove();
    var o = $('#modal-overlay');
    if (o) o.remove();
  }

  function showDialog(message, buttons) {
    removeDialog();

    var overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.createElement('div');
    dialog.id = 'crash-dialog';
    dialog.className = 'dialog';
    dialog.style.zIndex = '10001';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = 'Windows 94';
    titleBar.appendChild(titleText);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.className = 'dialog-body';
    var icon = document.createElement('div');
    icon.className = 'dialog-icon';
    icon.textContent = '\u274C';
    var msg = document.createElement('div');
    msg.className = 'dialog-message';
    msg.textContent = message;
    body.appendChild(icon);
    body.appendChild(msg);
    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    buttons.forEach(function (b) {
      var btn = document.createElement('button');
      btn.className = 'dialog-btn';
      btn.textContent = b.label;
      btn.addEventListener('click', b.action);
      btnRow.appendChild(btn);
    });
    dialog.appendChild(btnRow);

    document.body.appendChild(dialog);
  }

  function swapMessage(newMsg) {
    showDialog(newMsg, [
      { label: 'OK', action: function () {
        removeDialog();
        if (crashCount >= 3) {
          setTimeout(function () { triggerRestart(); }, 800);
        }
      }}
    ]);
  }

  function trigger(customMsg) {
    crashCount++;

    // 30% chance of error storm
    if (!stormMode && !customMsg && Math.random() < 0.3) {
      triggerStorm();
      return;
    }

    var msg = customMsg || MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    showDialog(msg, [
      { label: 'OK', action: function () {
        removeDialog();
        if (crashCount >= 3) {
          setTimeout(function () { triggerRestart(); }, 800);
        }
      }},
      { label: 'Cancel', action: function () {
        swapMessage('Cancel was not a valid option.\nError: 0x000CANC');
      }},
      { label: 'Ignore', action: function () {
        swapMessage('We said Ignore. You tried to ignore the Ignore.\nThis is now a philosophy problem.\nError: 0x00HEGEL');
      }}
    ]);
  }

  function makeDraggable(dialog) {
    var tb = dialog.querySelector('.title-bar') || dialog.firstChild;
    var isDragging = false;
    var dragOffsetX = 0;
    var dragOffsetY = 0;
    tb.style.cursor = 'move';
    tb.addEventListener('mousedown', function (e) {
      if (e.target.closest('.title-btn')) return;
      isDragging = true;
      var rect = dialog.getBoundingClientRect();
      dragOffsetX = e.clientX - rect.left;
      dragOffsetY = e.clientY - rect.top;
      dialog.style.zIndex = 8500 + Math.floor(Math.random() * 500);
      e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      var wrapRect = document.getElementById('crt-wrapper').getBoundingClientRect();
      var scale = wrapRect.width / 640;
      var x = (e.clientX - wrapRect.left) / scale - dragOffsetX;
      var y = (e.clientY - wrapRect.top) / scale - dragOffsetY;
      x = Math.max(0, Math.min(x, 640 - dialog.offsetWidth));
      y = Math.max(0, Math.min(y, 480 - dialog.offsetHeight - 28));
      dialog.style.left = x + 'px';
      dialog.style.top = y + 'px';
    });
    document.addEventListener('mouseup', function () {
      isDragging = false;
    });
  }

  // --- Error Storm ---
  function triggerStorm() {
    stormMode = true;
    stormCount = 0;
    stormMax = 5 + Math.floor(Math.random() * 3);
    stormDialogs = [];
    var stormX = 80;
    var stormY = 60;

    function spawnStormDialog() {
      if (stormCount >= stormMax) {
        clearInterval(stormInterval);
        stormInterval = null;
        setTimeout(function () {
          clearAllStormDialogs();
          stormMode = false;
          triggerRestart();
        }, 1000);
        return;
      }
      stormCount++;
      var wrapper = document.getElementById('crt-wrapper');
      if (!wrapper) return;

      var msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

      var dialog = document.createElement('div');
      dialog.className = 'dialog storm-dialog';
      dialog.style.cssText = 'position:absolute;z-index:' + (10010 + stormCount) + ';left:' + stormX + 'px;top:' + stormY + 'px;min-width:280px;transform:none;';

      var titleBar = document.createElement('div');
      titleBar.className = 'title-bar';
      var tt = document.createElement('span');
      tt.className = 'title-text';
      tt.textContent = 'Windows 94';
      titleBar.appendChild(tt);
      dialog.appendChild(titleBar);

      var body = document.createElement('div');
      body.className = 'dialog-body';
      var icon = document.createElement('div');
      icon.className = 'dialog-icon';
      icon.textContent = '\u274C';
      var msgEl = document.createElement('div');
      msgEl.className = 'dialog-message';
      msgEl.textContent = msg;
      body.appendChild(icon);
      body.appendChild(msgEl);
      dialog.appendChild(body);

      var btnRow = document.createElement('div');
      btnRow.className = 'dialog-buttons';
      ['OK', 'Cancel', 'Ignore'].forEach(function (label) {
        var btn = document.createElement('button');
        btn.className = 'dialog-btn';
        btn.textContent = label;
        btn.addEventListener('click', function () {
          // Clicking spawns 2 more
          spawnStormDialog();
          spawnStormDialog();
        });
        btnRow.appendChild(btn);
      });
      dialog.appendChild(btnRow);

      wrapper.appendChild(dialog);
      makeDraggable(dialog);
      if (window.Win94Audio && window.Win94Audio.playDialogChord) {
        window.Win94Audio.playDialogChord(1.5);
      }
      stormDialogs.push(dialog);

      stormX += 15;
      stormY += 15;
      if (stormX > 350) stormX = 60;
      if (stormY > 300) stormY = 40;
    }

    // Spawn first immediately
    spawnStormDialog();
    stormInterval = setInterval(spawnStormDialog, 800);
  }

  function clearAllStormDialogs() {
    for (var i = 0; i < stormDialogs.length; i++) {
      if (stormDialogs[i].parentNode) stormDialogs[i].remove();
    }
    stormDialogs = [];
  }

  // --- Random Background Dialogs ---
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getUptime() {
    return Math.floor((Date.now() - pageLoadTime) / 60000);
  }

  function getGreeting() {
    var h = new Date().getHours();
    if (h < 12) return 'morning';
    if (h < 18) return 'afternoon';
    return 'evening';
  }

  function processTemplate(text) {
    return text.replace('[uptime]', getUptime()).replace('[greeting]', getGreeting());
  }

  function makeRandomDialog() {
    var type = Math.floor(Math.random() * 4);
    var iconChar, iconColor, title, message, buttons;

    if (type === 0) {
      iconChar = '\u274C';
      title = 'Error';
      message = pickRandom(RANDOM_ERRORS);
      buttons = ['OK'];
    } else if (type === 1) {
      iconChar = '\u26A0\uFE0F';
      title = 'Warning';
      message = pickRandom(RANDOM_WARNINGS);
      buttons = ['OK'];
    } else if (type === 2) {
      iconChar = '\u2139\uFE0F';
      title = 'Information';
      message = processTemplate(pickRandom(RANDOM_INFO));
      buttons = ['OK'];
    } else {
      var q = pickRandom(RANDOM_QUESTIONS);
      iconChar = '\u2753';
      title = 'Windows 94';
      message = q.msg;
      buttons = q.btns;
    }

    return { icon: iconChar, title: title, message: message, buttons: buttons };
  }

  function spawnRandomDialog() {
    // Max 3 on screen
    if (randomDialogs.length >= 3) {
      scheduleNext();
      return;
    }

    var wrapper = document.getElementById('crt-wrapper');
    if (!wrapper) return;

    var data = makeRandomDialog();
    var maxX = 640 - 260;
    var maxY = 480 - 28 - 160;
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    var z = 8000 + Math.floor(Math.random() * 500);

    var dialog = document.createElement('div');
    dialog.className = 'dialog random-dialog';
    dialog.style.cssText = 'position:absolute;z-index:' + z + ';left:' + x + 'px;top:' + y + 'px;min-width:240px;max-width:300px;transform:none;';

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    var tt = document.createElement('span');
    tt.className = 'title-text';
    tt.textContent = data.title;
    var titleBtns = document.createElement('div');
    titleBtns.className = 'title-buttons';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'title-btn';
    closeBtn.textContent = '\u00D7';
    closeBtn.addEventListener('click', function () {
      removeRandomDialog(dialog);
    });
    titleBtns.appendChild(closeBtn);
    titleBar.appendChild(tt);
    titleBar.appendChild(titleBtns);
    dialog.appendChild(titleBar);

    var body = document.createElement('div');
    body.className = 'dialog-body';
    var iconEl = document.createElement('div');
    iconEl.className = 'dialog-icon';
    iconEl.textContent = data.icon;
    var msgEl = document.createElement('div');
    msgEl.className = 'dialog-message';
    msgEl.textContent = data.message;
    body.appendChild(iconEl);
    body.appendChild(msgEl);
    dialog.appendChild(body);

    var btnRow = document.createElement('div');
    btnRow.className = 'dialog-buttons';
    for (var i = 0; i < data.buttons.length; i++) {
      (function (label) {
        var btn = document.createElement('button');
        btn.className = 'dialog-btn';
        btn.textContent = label;
        btn.addEventListener('click', function () {
          removeRandomDialog(dialog);
        });
        btnRow.appendChild(btn);
      })(data.buttons[i]);
    }
    dialog.appendChild(btnRow);

    wrapper.appendChild(dialog);
    makeDraggable(dialog);
    if (window.Win94Audio && window.Win94Audio.playDialogChord) {
      window.Win94Audio.playDialogChord();
    }
    randomDialogs.push(dialog);

    scheduleNext();
  }

  function removeRandomDialog(dialog) {
    if (dialog.parentNode) dialog.remove();
    var idx = randomDialogs.indexOf(dialog);
    if (idx !== -1) randomDialogs.splice(idx, 1);
  }

  function scheduleNext() {
    setTimeout(spawnRandomDialog, 5000 + Math.random() * 25000);
  }

  function startRandomDialogs() {
    scheduleNext();
  }

  async function triggerRestart() {
    removeDialog();
    clearAllStormDialogs();
    // Remove any random dialogs too
    for (var i = randomDialogs.length - 1; i >= 0; i--) {
      if (randomDialogs[i].parentNode) randomDialogs[i].remove();
    }
    randomDialogs = [];

    WM.closeAll();

    var desktop = $('#desktop');
    var taskbar = $('.taskbar');

    var fade = document.createElement('div');
    fade.style.cssText = 'position:fixed;inset:0;background:#000;opacity:0;z-index:99999;transition:opacity 0.5s;';
    document.body.appendChild(fade);

    void fade.offsetWidth;
    fade.style.opacity = '1';
    await delay(500);

    if (taskbar) taskbar.style.display = 'none';
    if (desktop) desktop.style.display = 'none';

    var restartEl = document.createElement('div');
    restartEl.style.cssText = 'position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:100000;';
    var restartText = document.createElement('div');
    restartText.style.cssText = 'color:#fff;font-family:"Courier New",monospace;font-size:20px;text-align:center;';
    restartText.textContent = 'System is restarting...';
    restartEl.appendChild(restartText);
    document.body.appendChild(restartEl);

    for (var i = 3; i >= 1; i--) {
      await delay(800);
      restartText.textContent = 'System is restarting... ' + i;
    }

    await delay(800);
    fade.remove();
    restartEl.remove();

    crashCount = 0;
    stormMode = false;
    showSafeToTurnOff();
  }

  window.Crash = { trigger: trigger, startRandomDialogs: startRandomDialogs };
  window.triggerRestart = triggerRestart;
})();
