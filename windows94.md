# Windows 94 — Spec

## Colors
--desktop:#008080 --silver:#C0C0C0 --title-start:#000080 
--title-end:#1084d0 --white:#fff --dark:#808080 --black:#000

## Bevel (raised)
box-shadow: inset -1px -1px #000, inset 1px 1px #fff,
            inset -2px -2px #808080, inset 2px 2px #dfdfdf

## Bevel (pressed)  
box-shadow: inset 1px 1px #000, inset -1px -1px #fff,
            inset 2px 2px #808080, inset -2px -2px #dfdfdf

## Files
index.html / styles.css / boot.js / windowManager.js / apps.js / crash.js

## Windows: draggable, z-stack, minimize/maximize/close, cascade offset
## Taskbar: 28px, Start btn left, clock right (real time)
## Icons: 5 fixed (MyComputer/MyDocs/Network/RecycleBin/Internet)

## Crash pool: 14 messages (see crash.js comments)
## 3 crashes → triggerRestart() → full boot replay

## Boot: BIOS lines (400ms each) → splash+progress (87% stall) → desktop
