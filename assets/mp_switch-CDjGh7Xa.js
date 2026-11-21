import{A as e}from"./index-B3AhowWq.js";var t=`namma-mp-switch`,n=`
  .mps-scrim { position: fixed; inset: 0; z-index: 200; display: grid; place-items: center; padding: 16px;
    background: var(--ns-scrim); font-family: var(--ns-font); color: var(--ns-text); }
  .mps-card { width: min(460px, 100%); max-height: calc(100dvh - 32px); overflow: auto; overscroll-behavior: contain; background: var(--ns-surface-strong); border: 1px solid var(--ns-border-strong);
    border-radius: var(--ns-radius-lg); box-shadow: var(--ns-shadow); padding: var(--ns-space-5); display: grid; gap: var(--ns-space-3); }
  .mps-card h2 { font-size: var(--ns-fs-xl); color: var(--ns-accent); letter-spacing: var(--ns-heading-ls); text-transform: uppercase; }
  .mps-card p { font-size: var(--ns-fs-md); color: var(--ns-text-muted); line-height: 1.5; }
  .mps-card ul { display: grid; gap: 8px; padding-left: 18px; font-size: var(--ns-fs-md); line-height: 1.45; }
  .mps-card li::marker { color: var(--ns-accent); }
  .mps-actions { display: flex; gap: var(--ns-space-2); justify-content: flex-end; margin-top: var(--ns-space-2); }
  .mps-btn { font: inherit; font-size: var(--ns-fs-md); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; cursor: pointer;
    border-radius: var(--ns-radius-sm); padding: 10px 16px; border: 1px solid var(--ns-border-strong); background: var(--ns-row); color: var(--ns-text); }
  .mps-btn:hover { background: var(--ns-row-hover); }
  .mps-btn.primary { background: var(--ns-primary); color: var(--ns-on-accent); border: none; box-shadow: var(--ns-glow); }
  .mps-btn.primary:hover { background: var(--ns-primary-hover); }
  .mps-btn:focus-visible { outline: 2px solid var(--ns-focus); outline-offset: 2px; }
`;function r(r){if(e(),!document.getElementById(t)){let e=document.createElement(`style`);e.id=t,e.textContent=n,document.head.appendChild(e)}return document.pointerLockElement&&document.exitPointerLock(),new Promise(e=>{let t=document.createElement(`div`);t.className=`mps-scrim`,t.id=`mp-switch-warning`;let n=r.joinCode!==null;t.innerHTML=`
      <div class="mps-card" role="alertdialog" aria-modal="true" aria-labelledby="mps-title" aria-describedby="mps-body">
        <h2 id="mps-title">${n?`Join a friend’s room?`:`Switch to multiplayer?`}</h2>
        <div id="mps-body">
          <p>${n?`A friend invited you to walk this space together.`:`You will pick a character, create a room and get an invite link for your friends.`}</p>
          <ul>
            <li><b>Your microphone turns on</b> when you enter the room, and everyone in it hears you. Press V to mute.</li>
            <li>Anyone with the invite link can join while the room is open (2 to 6 people, depending on the room size).</li>
            <li>Search, places and paths keep working. Leave the room any time to go back to exploring alone.</li>
          </ul>
        </div>
        <div class="mps-actions">
          <button type="button" class="mps-btn" data-act="cancel">Cancel</button>
          <button type="button" class="mps-btn primary" data-act="ok">Continue</button>
        </div>
      </div>`;let i=n=>{window.removeEventListener(`keydown`,a,!0),t.remove(),e(n)},a=e=>{e.key===`Escape`&&(e.stopPropagation(),i(!1))};t.addEventListener(`click`,e=>{let n=e.target instanceof Element?e.target.closest(`[data-act]`)?.dataset.act:void 0;n?i(n===`ok`):e.target===t&&i(!1)}),t.addEventListener(`keydown`,e=>e.stopPropagation()),window.addEventListener(`keydown`,a,!0),document.body.appendChild(t),t.querySelector(`[data-act="ok"]`)?.focus()})}export{r as confirmMultiplayerSwitch};