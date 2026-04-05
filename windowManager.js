(function () {
  var windows = {};
  var zCounter = 100;
  var cascadeX = 40;
  var cascadeY = 40;

  function $(sel) { return document.querySelector(sel); }

  function focusWindow(id) {
    var win = windows[id];
    if (!win) return;
    win.el.style.zIndex = zCounter++;
    Object.keys(windows).forEach(function (k) {
      var tb = windows[k].el.querySelector('.title-bar');
      if (k === id) {
        tb.classList.remove('inactive');
        windows[k].taskBtn.classList.add('active');
      } else {
        tb.classList.add('inactive');
        windows[k].taskBtn.classList.remove('active');
      }
    });
  }

  function initDrag(win) {
    var titleBar = win.el.querySelector('.title-bar');
    var ox, oy, sx, sy;

    titleBar.addEventListener('mousedown', function (e) {
      if (e.target.closest('.title-btn')) return;
      focusWindow(win.id);
      ox = e.clientX;
      oy = e.clientY;
      sx = win.el.offsetLeft;
      sy = win.el.offsetTop;

      function onMove(e) {
        var nx = sx + (e.clientX - ox);
        var ny = sy + (e.clientY - oy);
        var maxX = window.innerWidth - 40;
        var maxY = window.innerHeight - 40;
        nx = Math.max(0, Math.min(nx, maxX));
        ny = Math.max(0, Math.min(ny, maxY));
        win.el.style.left = nx + 'px';
        win.el.style.top = ny + 'px';
      }

      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }

  function addTaskbarButton(win) {
    var btn = document.createElement('button');
    btn.className = 'taskbar-btn';
    btn.textContent = win.title;
    btn.addEventListener('click', function () {
      if (win.minimized) {
        restore(win.id);
      } else if (win.el.style.zIndex == zCounter - 1) {
        minimize(win.id);
      } else {
        restore(win.id);
      }
    });
    $('#taskbar-windows').appendChild(btn);
    win.taskBtn = btn;
  }

  function create(id, title, width, height, contentHTML, resizable) {
    if (windows[id]) {
      focusWindow(id);
      if (windows[id].minimized) restore(id);
      return windows[id].el;
    }

    var el = document.createElement('div');
    el.className = 'window';
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    el.style.left = cascadeX + 'px';
    el.style.top = cascadeY + 'px';

    if (resizable) {
      el.style.resize = 'both';
      el.style.overflow = 'auto';
    }

    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';

    var titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = title;

    var titleBtns = document.createElement('div');
    titleBtns.className = 'title-buttons';

    var btnMin = document.createElement('button');
    btnMin.className = 'title-btn';
    btnMin.textContent = '_';
    btnMin.addEventListener('click', function () { minimize(id); });

    var btnClose = document.createElement('button');
    btnClose.className = 'title-btn';
    btnClose.textContent = '\u00D7';
    btnClose.addEventListener('click', function () { close(id); });

    titleBtns.appendChild(btnMin);
    titleBtns.appendChild(btnClose);
    titleBar.appendChild(titleText);
    titleBar.appendChild(titleBtns);
    el.appendChild(titleBar);

    var content = document.createElement('div');
    content.className = 'window-content';
    content.innerHTML = contentHTML || '';
    el.appendChild(content);

    el.addEventListener('mousedown', function () { focusWindow(id); });

    var desktop = $('#desktop');
    desktop.appendChild(el);

    var win = {
      id: id,
      title: title,
      el: el,
      minimized: false,
      taskBtn: null
    };

    windows[id] = win;
    addTaskbarButton(win);
    initDrag(win);
    focusWindow(id);

    cascadeX += 20;
    cascadeY += 20;
    if (cascadeX > 300) cascadeX = 40;
    if (cascadeY > 300) cascadeY = 40;

    return el;
  }

  function close(id) {
    var win = windows[id];
    if (!win) return;
    win.el.remove();
    if (win.taskBtn) win.taskBtn.remove();
    delete windows[id];
  }

  function closeAll() {
    Object.keys(windows).forEach(close);
  }

  function minimize(id) {
    var win = windows[id];
    if (!win) return;
    win.minimized = true;
    win.el.style.display = 'none';
    win.taskBtn.classList.remove('active');
  }

  function restore(id) {
    var win = windows[id];
    if (!win) return;
    win.minimized = false;
    win.el.style.display = 'flex';
    focusWindow(id);
  }

  function focus(id) {
    var win = windows[id];
    if (!win) return;
    if (win.minimized) restore(id);
    else focusWindow(id);
  }

  window.WM = {
    create: create,
    close: close,
    closeAll: closeAll,
    focus: focus,
    minimize: minimize,
    restore: restore
  };
})();
