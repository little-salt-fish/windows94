(function () {
  var BIOS_LINES = [
    'Award Software BIOS v1.0 Copyright 1994',
    'CPU: Intel 486DX 33MHz',
    'MEMORY_TEST',
    'Detecting IDE Primary Master ... ST3210A',
    'Detecting IDE Primary Slave  ... None',
    'Detecting Floppy Drives ........ A: 1.44MB',
    'Detecting COM ports........... COM1, COM2',
    'Detecting LPT ports........... LPT1',
    'Initializing HIMEM.SYS........ OK',
    'Loading EMM386.EXE............ OK',
    'MSCDEX Version 2.23........... OK',
    'Mouse driver installed......... OK',
    '',
    'Loading Windows 94...',
    'C:\\> _'
  ];

  function delay(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  // --- Web Audio ---
  function initAudio() {
    if (window.Win94Audio) return;
    try {
      window.Win94Audio = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { /* no audio support */ }
    // Resume on first interaction
    function resumeCtx() {
      if (window.Win94Audio && window.Win94Audio.state === 'suspended') {
        window.Win94Audio.resume();
      }
      document.removeEventListener('click', resumeCtx);
      document.removeEventListener('keydown', resumeCtx);
    }
    document.addEventListener('click', resumeCtx);
    document.addEventListener('keydown', resumeCtx);
    if (window.Win94Audio) {
      window.Win94Audio.playDialogChord = playDialogChord;
    }
  }

  function playPowerHum() {
    var ctx = window.Win94Audio; if (!ctx) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.value = 60;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.0);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.0);
  }

  function playPostBeep() {
    var ctx = window.Win94Audio; if (!ctx) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 800;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  function playHddClick() {
    var ctx = window.Win94Audio; if (!ctx) return;
    for (var i = 0; i < 3; i++) {
      (function (offset) {
        var buf = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
        var data = buf.getChannelData(0);
        for (var s = 0; s < data.length; s++) data[s] = (Math.random() * 2 - 1) * 0.1;
        var src = ctx.createBufferSource();
        src.buffer = buf;
        var hp = ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = 800;
        src.connect(hp).connect(ctx.destination);
        src.start(ctx.currentTime + offset);
      })(i * 0.15);
    }
  }

  function playFloppySeek() {
    var ctx = window.Win94Audio; if (!ctx) return;
    for (var i = 0; i < 3; i++) {
      (function (offset) {
        var buf = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
        var data = buf.getChannelData(0);
        for (var s = 0; s < data.length; s++) data[s] = (Math.random() * 2 - 1) * 0.06;
        var src = ctx.createBufferSource();
        src.buffer = buf;
        var bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.value = 800;
        bp.Q.value = 1.2;
        src.connect(bp).connect(ctx.destination);
        src.start(ctx.currentTime + offset);
      })(i * 0.08);
    }
  }

  function playStartupChord() {
    var ctx = window.Win94Audio; if (!ctx) return;
    var freqs = [261.63, 329.63, 392.00, 493.88]; // C E G B
    for (var i = 0; i < freqs.length; i++) {
      (function (freq, offset) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq + (Math.random() * 6 - 3) * 0.01 * freq / 100; // ±3 cents
        gain.gain.setValueAtTime(0.06, ctx.currentTime + offset);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + offset + 2.5);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + 2.5);
      })(freqs[i], i * 0.06);
    }
  }

  function playDialogChord(pitchMult) {
    var ctx = window.Win94Audio; if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    var mult = pitchMult || 1;
    var notes = [
      { freq: 523.25, delay: 0, dur: 0.15 },
      { freq: 659.25, delay: 0.08, dur: 0.25 }
    ];
    for (var i = 0; i < notes.length; i++) {
      (function (n) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.value = n.freq * mult;
        var t = ctx.currentTime + n.delay;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.12, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.dur);
        osc.start(t);
        osc.stop(t + n.dur + 0.05);
      })(notes[i]);
    }
  }

  function animateMemoryTest(screen) {
    return new Promise(function (resolve) {
      var line = document.createElement('div');
      line.textContent = 'Memory Test: 0K';
      screen.appendChild(line);
      var target = 4096;
      var current = 0;
      var steps = 60;
      var stepSize = target / steps;
      var interval = 3000 / steps;
      var clickCounter = 0;
      var id = setInterval(function () {
        current += stepSize;
        clickCounter++;
        if (clickCounter % 16 === 0) playHddClick();
        if (current >= target) {
          current = target;
          clearInterval(id);
          line.textContent = 'Memory Test: ' + target + 'K OK .........';
          playPostBeep();
          resolve();
          return;
        }
        var display = Math.round(current / 1024) * 1024;
        if (display > target) display = target;
        line.textContent = 'Memory Test: ' + display + 'K';
      }, interval);
    });
  }

  async function phaseBIOS() {
    var screen = $('#boot-screen');
    screen.style.display = 'block';
    screen.innerHTML = '';

    for (var i = 0; i < BIOS_LINES.length; i++) {
      if (BIOS_LINES[i] === 'MEMORY_TEST') {
        await animateMemoryTest(screen);
        await delay(600);
        continue;
      }
      var line = document.createElement('div');
      line.textContent = BIOS_LINES[i];
      screen.appendChild(line);
      if (BIOS_LINES[i].indexOf('Floppy') !== -1) playFloppySeek();
      await delay(600 + Math.random() * 300);
    }

    var cursor = screen.lastElementChild;
    var visible = true;
    var blinkId = setInterval(function () {
      visible = !visible;
      cursor.style.opacity = visible ? '1' : '0';
    }, 500);

    await delay(1500);
    clearInterval(blinkId);

    screen.style.transition = 'opacity 0.4s';
    screen.style.opacity = '0';
    await delay(400);
    screen.style.display = 'none';
    screen.style.opacity = '1';
  }

  async function phaseSplash() {
    var screen = $('#splash-screen');
    screen.style.display = 'flex';
    screen.style.opacity = '1';

    // Add clouds
    var cloudData = [
      { w: 120, h: 50, top: '18%', left: '10%' },
      { w: 160, h: 60, top: '30%', left: '55%' },
      { w: 100, h: 40, top: '12%', left: '75%' }
    ];
    for (var c = 0; c < cloudData.length; c++) {
      var cloud = document.createElement('div');
      cloud.className = 'splash-cloud';
      cloud.style.width = cloudData[c].w + 'px';
      cloud.style.height = cloudData[c].h + 'px';
      cloud.style.top = cloudData[c].top;
      cloud.style.left = cloudData[c].left;
      screen.appendChild(cloud);
    }

    var flag = $('#splash-flag');
    flag.innerHTML = '';
    var colors = ['#FF0000', '#00AA00', '#0000FF', '#FFCC00'];
    for (var i = 0; i < 4; i++) {
      var cell = document.createElement('div');
      cell.style.width = '28px';
      cell.style.height = '28px';
      cell.style.background = colors[i];
      flag.appendChild(cell);
    }

    var title = $('#splash-title');
    var subtitle = $('#splash-subtitle');
    var wrapper = $('#splash-progress-wrapper');

    title.style.opacity = '0';
    subtitle.style.opacity = '0';

    await delay(600);
    title.style.opacity = '1';

    await delay(600);
    subtitle.style.opacity = '1';

    await delay(600);

    wrapper.innerHTML = '';
    var track = document.createElement('div');
    track.className = 'progress-bar-track';
    var fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    track.appendChild(fill);
    wrapper.appendChild(track);

    // Stage 1: 0→30% over 3s
    var pct = 0;
    var steps1 = 30;
    for (var s = 0; s < steps1; s++) {
      pct = (s + 1);
      fill.style.width = pct + '%';
      await delay(100);
    }

    // Stall 1s
    await delay(1000);

    // Stage 2: 30→75% over 4s
    var steps2 = 45;
    for (var s = 0; s < steps2; s++) {
      pct = 30 + (s + 1);
      fill.style.width = pct + '%';
      await delay(89);
    }

    // Stall 2s
    await delay(2000);

    // Stage 3: 75→100% over 2s
    var steps3 = 25;
    for (var s = 0; s < steps3; s++) {
      pct = 75 + (s + 1);
      fill.style.width = pct + '%';
      await delay(80);
    }

    await delay(400);

    screen.style.transition = 'opacity 0.3s';
    screen.style.opacity = '0';
    await delay(300);
    screen.style.display = 'none';

    // Clean up clouds
    var clouds = screen.querySelectorAll('.splash-cloud');
    for (var i = 0; i < clouds.length; i++) clouds[i].remove();
  }

  function updateClock() {
    var el = $('.taskbar-clock');
    if (!el) return;
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    el.textContent = h + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
  }

  async function phaseDesktop() {
    var desktop = $('#desktop');
    var taskbar = $('.taskbar');
    var icons = $$('#desktop .icon');

    desktop.style.display = 'block';
    playStartupChord();

    for (var i = 0; i < icons.length; i++) {
      icons[i].style.opacity = '0';
    }

    taskbar.style.transform = 'translateY(100%)';
    taskbar.style.display = 'flex';

    for (var i = 0; i < icons.length; i++) {
      icons[i].style.transition = 'opacity 0.2s';
      icons[i].style.opacity = '1';
      await delay(600);
    }

    taskbar.style.transition = 'transform 0.2s';
    taskbar.style.transform = 'translateY(0)';

    updateClock();
    setInterval(updateClock, 10000);

    if (window.BurnIn) {
      BurnIn.init();
    }
    if (window.Crash && Crash.startRandomDialogs) {
      Crash.startRandomDialogs();
    }
  }

  function showSafeToTurnOff() {
    var el = document.createElement('div');
    el.id = 'safe-to-turn-off';
    el.style.cssText = 'position:fixed;inset:0;background:#000080;display:flex;align-items:center;justify-content:center;z-index:99998;';
    var text = document.createElement('div');
    text.style.cssText = 'color:#fff;font-family:"Courier New",monospace;font-size:16px;text-align:center;white-space:pre;line-height:2;';
    text.textContent = 'Windows 94\n\nIt is now safe to let go of your computer.';
    el.appendChild(text);
    document.body.appendChild(el);

    setTimeout(function () {
      el.remove();
      Boot.start();
    }, 4000);
  }

  async function start() {
    initAudio();
    var desktop = $('#desktop');
    if (desktop) desktop.style.display = 'none';
    var taskbar = $('.taskbar');
    if (taskbar) taskbar.style.display = 'none';

    playPowerHum();
    await phaseBIOS();
    await phaseSplash();
    await phaseDesktop();
  }

  window.Boot = { start: start };
  window.showSafeToTurnOff = showSafeToTurnOff;
})();
