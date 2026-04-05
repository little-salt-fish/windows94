(function () {
  var lastActivity = performance.now();
  var active = false;
  var checkInterval = null;
  var spotIntervals = [];
  var upsellShown = false;
  var upsellNeverShow = false;
  var upsellEscalated = false;
  var upsellDelay = 20000;

  function resetActivity() {
    lastActivity = performance.now();
    if (active) {
      hideBurnIn();
    }
  }

  function showBurnIn() {
    console.log('BurnIn showBurnIn triggered');
    if (active) return;
    active = true;

    var wrapper = document.getElementById('crt-wrapper');
    if (!wrapper) return;

    var overlay = document.createElement('div');
    overlay.id = 'burnin-overlay';

    // Full green phosphor tint
    var tint = document.createElement('div');
    tint.style.cssText = 'position:absolute;inset:0;background:rgba(0,255,80,0.025);';
    overlay.appendChild(tint);

    // Ghost taskbar
    var taskbar = document.createElement('div');
    taskbar.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:28px;background:rgba(192,192,192,0.09);filter:blur(0.8px);';
    overlay.appendChild(taskbar);

    // Ghost Start button
    var startBtn = document.createElement('div');
    startBtn.style.cssText = 'position:absolute;bottom:2px;left:2px;width:56px;height:24px;background:rgba(160,160,160,0.08);';
    overlay.appendChild(startBtn);

    // Ghost clock
    var clock = document.createElement('div');
    clock.style.cssText = 'position:absolute;bottom:3px;right:4px;width:64px;height:20px;background:rgba(160,160,160,0.07);';
    overlay.appendChild(clock);

    // 5 icon ghosts
    for (var i = 0; i < 5; i++) {
      var icon = document.createElement('div');
      icon.style.cssText = 'position:absolute;left:20px;top:' + (20 + i * 95) + 'px;width:32px;height:32px;background:rgba(120,180,255,0.06);filter:blur(1.5px);';
      overlay.appendChild(icon);
    }

    // Text ghosts
    var cmd = document.createElement('div');
    cmd.textContent = 'C:\\WINDOWS>';
    cmd.style.cssText = 'position:absolute;left:8%;top:42%;font-family:"Courier New",monospace;font-size:11px;color:rgba(180,255,180,0.06);filter:blur(1.2px);white-space:nowrap;';
    overlay.appendChild(cmd);

    var win94 = document.createElement('div');
    win94.textContent = 'WIN94';
    win94.style.cssText = 'position:absolute;left:52%;top:28%;font-family:"Courier New",monospace;font-size:28px;color:rgba(180,255,180,0.06);filter:blur(1.2px);transform:rotate(-2deg);white-space:nowrap;';
    overlay.appendChild(win94);

    // 4 phosphor spots with pulsing
    for (var j = 0; j < 4; j++) {
      var spot = document.createElement('div');
      var size = 70 + Math.random() * 110;
      var baseOp = 0.05 + Math.random() * 0.03;
      spot.style.cssText = 'position:absolute;left:' + (10 + Math.random() * 75) + '%;top:' + (10 + Math.random() * 75) + '%;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:radial-gradient(circle,rgba(255,200,80,' + baseOp + '),transparent 70%);filter:blur(10px);transform:translate(-50%,-50%);';
      overlay.appendChild(spot);
      (function (s, op) {
        var dir = 1;
        var cur = op;
        var id = setInterval(function () {
          cur += dir * 0.003;
          if (cur > op + 0.03 || cur < op - 0.03) dir *= -1;
          s.style.opacity = cur;
        }, 2500 + Math.random() * 2000);
        spotIntervals.push(id);
      })(spot, baseOp);
    }

    // Fade in
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 3s ease-in';
    wrapper.appendChild(overlay);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.style.opacity = '1';
      });
    });
  }

  function hideBurnIn() {
    var overlay = document.getElementById('burnin-overlay');
    if (!overlay) {
      active = false;
      return;
    }
    overlay.style.transition = 'opacity 1.5s ease-out';
    overlay.style.opacity = '0';
    setTimeout(function () {
      if (overlay.parentNode) overlay.remove();
      active = false;
    }, 1500);
    // Clear spot pulse intervals
    for (var i = 0; i < spotIntervals.length; i++) {
      clearInterval(spotIntervals[i]);
    }
    spotIntervals = [];
  }

  function init() {
    console.log('BurnIn init OK');
    lastActivity = performance.now();
    var events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'click'];
    for (var i = 0; i < events.length; i++) {
      document.addEventListener(events[i], resetActivity, { passive: true });
    }
    checkInterval = setInterval(function () {
      var elapsed = performance.now() - lastActivity;
      if (!active && elapsed >= 10000) {
        showBurnIn();
      }
      if (active && elapsed >= upsellDelay && !upsellShown && !upsellNeverShow) {
        if (window.Apps && window.Apps.showUpsellDialog) {
          window.Apps.showUpsellDialog(upsellEscalated);
        }
        upsellShown = true;
      }
    }, 1000);

    // Ctrl+B test shortcut
    document.addEventListener('keydown', function (e) {
      if (e.key === 'b' && e.ctrlKey) {
        testTrigger();
      }
    });
  }

  function testTrigger() {
    lastActivity -= 11000;
  }

  function onUpsellRemindLater() {
    upsellShown = false;
    upsellEscalated = true;
    upsellDelay = 30000;
    lastActivity = performance.now();
  }

  function onUpsellNeverShow() {
    upsellNeverShow = true;
    var bo = document.getElementById('burnin-overlay');
    if (bo) {
      bo.style.transition = 'opacity 0.5s';
      bo.style.opacity = '0.5';
    }
  }

  window.BurnIn = {
    init: init,
    testTrigger: testTrigger,
    onUpsellRemindLater: onUpsellRemindLater,
    onUpsellNeverShow: onUpsellNeverShow
  };
})();
