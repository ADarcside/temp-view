import{D as e,E as t,O as n}from"./preload-helper-D0y89ZOX.js";import{i as r}from"./main-Dyy5X82q.js";import{LAYOUT_LIMITS as i,movedCorners as a}from"./layout-4XPHlM9Z.js";var o=`/* Rearrange (move furniture): panel with an enlarged floor plan, loaded on demand */
.rr-layer {
  position: fixed;
  inset: 0;
  z-index: 450;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: var(--ns-edge);
  pointer-events: none;
  font-family: var(--ns-font);
  color: var(--ns-text);
}
.rr-layer.hidden { display: none; }
.rr-panel {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ns-space-2);
  width: min(560px, 100%);
  max-height: calc(100dvh - var(--ns-hud-top) - var(--ns-target) - 32px);
  padding: var(--ns-space-3);
  border-radius: var(--ns-radius-lg);
  border: 1px solid var(--ns-border-strong);
  /* Nearly opaque: in tag mode the Places panel sits right behind it */
  background: rgba(10, 12, 20, 0.97);
  /* Own backdrop: the buttons' glass blur then shows the panel, not what lies behind it */
  backdrop-filter: blur(8px);
  box-shadow: var(--ns-shadow);
}
.rr-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--ns-space-2);
}
.rr-title { font-size: var(--ns-fs-md); }
.rr-note { font-size: var(--ns-fs-xs); color: var(--ns-text-muted); }
.rr-canvas {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  min-height: 160px;
  border-radius: var(--ns-radius-md);
  background: #0d1220;
  touch-action: none;
  cursor: grab;
}
.rr-canvas.dragging { cursor: grabbing; }
.rr-hint { font-size: var(--ns-fs-sm); color: var(--ns-text-muted); min-height: 1.4em; }
.rr-tools {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ns-space-2);
}
.rr-tools .ns-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 var(--ns-space-3);
  font-size: var(--ns-fs-sm);
}
.rr-tools .ns-btn:disabled { opacity: 0.4; cursor: default; }
.rr-tools .rr-done { margin-left: auto; }
.rr-toasts {
  position: fixed;
  top: calc(var(--ns-hud-top) + var(--ns-target) + 16px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ns-space-2);
  max-width: calc(100% - 2 * var(--ns-edge));
  z-index: 520;
  pointer-events: none;
  font-family: var(--ns-font);
}
.rr-toast {
  background: var(--ns-surface-strong);
  color: var(--ns-text);
  border: 1px solid var(--ns-border-strong);
  padding: var(--ns-space-2) var(--ns-space-4);
  border-radius: var(--ns-radius-pill);
  font-size: var(--ns-fs-md);
  font-weight: 600;
  box-shadow: var(--ns-shadow);
  overflow-wrap: anywhere;
  transition: opacity var(--ns-dur) var(--ns-ease-out);
}
.rr-toast.fade-out { opacity: 0; }
@media (max-width: 640px) {
  .rr-panel { padding: var(--ns-space-2); }
  .rr-tools .ns-btn span { display: none; }
  .rr-tools .ns-btn { padding: 0 var(--ns-space-2); }
}
/* Phones and tablets: finger-sized buttons */
@media (pointer: coarse) {
  .rr-tools .ns-btn { min-height: 44px; min-width: 44px; justify-content: center; }
}
/* Short screens (phone held sideways): plan on the left, buttons in a column on the right */
@media (max-height: 500px) {
  .rr-panel {
    width: min(720px, 100%);
    height: calc(100dvh - var(--ns-hud-top) - var(--ns-target) - 32px);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr auto;
    padding: var(--ns-space-2);
  }
  .rr-head { grid-column: 1 / -1; }
  .rr-canvas { grid-column: 1; grid-row: 2; aspect-ratio: auto; height: 100%; min-height: 0; }
  .rr-hint { grid-column: 1; grid-row: 3; min-height: 0; }
  .rr-tools {
    grid-column: 2;
    grid-row: 2 / 4;
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-auto-rows: 40px;
    gap: 6px;
    align-content: start;
  }
  .rr-tools .ns-btn { padding: 0; justify-content: center; min-height: 40px; min-width: 40px; }
  .rr-tools .ns-btn span { display: none; }
  .rr-tools .rr-done { margin-left: 0; }
}
/* Wide screens: a compact panel docked top-left under the search bar, so the room stays in view
   while you move things (the Places panel, in tag mode, is on the right) */
@media (min-width: 901px) and (min-height: 521px) {
  .rr-layer {
    align-items: flex-start;
    justify-content: flex-start;
    padding: calc(var(--ns-hud-top) + var(--ns-target) + 16px) var(--ns-hud-left) var(--ns-hud-bottom);
  }
  .rr-panel {
    width: 420px;
    max-height: calc(100dvh - var(--ns-hud-top) - var(--ns-target) - 16px - var(--ns-hud-bottom));
    overflow-y: auto;
  }
  .rr-tools .ns-btn { min-height: 34px; padding: 0 var(--ns-space-2); font-size: var(--ns-fs-xs); gap: 4px; }
}
`,s=class{_rr;_opts;_layer;_canvas;_hint;_toasts;_note;_btn;_lockBtn=null;_saveBtn=null;_boxBtns=null;_saving=!1;_boxMode=!1;_boxSel=null;_boxDrag=null;_open=!1;_selected=null;_view={scale:1,ox:0,oz:0,minX:0,minZ:0};_drag=null;_raf=0;_viewRay=null;_drag3d=null;constructor(t,r){if(this._rr=t,this._opts=r,e(),!document.getElementById(`rr-styles`)){let e=document.createElement(`style`);e.id=`rr-styles`,e.textContent=o,document.head.appendChild(e)}this._toasts=document.createElement(`div`),this._toasts.className=`rr-toasts ns-ui`,this._toasts.setAttribute(`role`,`status`),this._toasts.setAttribute(`aria-live`,`polite`),document.body.appendChild(this._toasts),this._layer=document.createElement(`div`),this._layer.className=`rr-layer ns-ui hidden`;let a=document.createElement(`div`);a.className=`rr-panel`,a.setAttribute(`role`,`dialog`);let s=t.mode===`admin`;a.setAttribute(`aria-label`,s?`Room layout for everyone`:`Rearrange furniture`),a.innerHTML=`
      <div class="rr-head"><span class="rr-title ns-label">${s?`Layout for everyone`:`Rearrange`}</span><span class="rr-note"></span></div>
      <canvas class="rr-canvas" aria-label="Floor plan: drag a piece to move it"></canvas>
      <div class="rr-hint"></div>
      <div class="rr-tools"></div>`,this._canvas=a.querySelector(`canvas`),this._hint=a.querySelector(`.rr-hint`),this._note=a.querySelector(`.rr-note`);let c=a.querySelector(`.rr-tools`),l=(e,t,r,i,a)=>{let o=document.createElement(`button`);return o.type=`button`,o.className=`ns-btn ns-press ${e}`,o.title=i,o.setAttribute(`aria-label`,r),o.innerHTML=`${n(t,16)}<span>${r}</span>`,o.addEventListener(`click`,()=>{o.blur(),a()}),c.appendChild(o),o},u=i.turnStepDeg;this._btn={left:l(`rr-left`,`turnLeft`,`Turn left`,`Turn ${u}° left (Q)`,()=>this._turn(u)),right:l(`rr-right`,`turnRight`,`Turn right`,`Turn ${u}° right (E)`,()=>this._turn(-u)),undo:l(`rr-undo`,`undo`,`Undo`,`Undo (Ctrl+Z)`,()=>this._rr.undo()),redo:l(`rr-redo`,`redo`,`Redo`,`Redo (Ctrl+Y)`,()=>this._rr.redo()),reset:s?l(`rr-reset`,`reset`,`Original`,`Put everything back as scanned (then Save for everyone)`,()=>this._rr.reset()):l(`rr-reset`,`reset`,`Reset`,t.baseMoves.length?`Back to the room as the owner set it`:`Put everything back as scanned`,()=>this._rr.reset()),done:l(`rr-done`,`close`,`Done`,`Close Rearrange (Esc)`,()=>this.close())},s&&(this._lockBtn=l(`rr-lock`,`lock`,`Lock`,`Lock or unlock the selected piece for visitors`,()=>{this._selected!==null&&this._rr.toggleLock(this._selected)}),this._saveBtn=l(`rr-save`,`save`,`Save for everyone`,`Save this layout to the live site`,()=>void this._save()),this._boxBtns={mode:l(`rr-boxes`,`edit`,`Fix boxes`,`Fix wrong furniture boxes (resize, add, remove)`,()=>this._toggleBoxMode()),remove:l(`rr-box-remove`,`trash`,`Remove`,`This is not furniture (or delete a box you added)`,()=>this._boxRemove()),auto:l(`rr-box-auto`,`reset`,`Auto size`,`Back to the box found in the scan`,()=>this._boxAuto())},c.insertBefore(this._lockBtn,this._btn.undo),c.insertBefore(this._boxBtns.mode,this._btn.undo),c.insertBefore(this._boxBtns.remove,this._btn.undo),c.insertBefore(this._boxBtns.auto,this._btn.undo),c.insertBefore(this._saveBtn,this._btn.done)),this._layer.appendChild(a),document.body.appendChild(this._layer),this._canvas.addEventListener(`pointerdown`,e=>this._onDown(e)),this._canvas.addEventListener(`pointermove`,e=>this._onMove(e)),this._canvas.addEventListener(`pointerup`,e=>this._onUp(e)),this._canvas.addEventListener(`pointercancel`,()=>{this._boxDrag=null,this._drag&&(this._drag=null,this._rr.cancelDrag())}),window.addEventListener(`keydown`,e=>this._onKey(e),!0),window.addEventListener(`keyup`,e=>{this._open&&e.stopImmediatePropagation()},!0),window.addEventListener(`resize`,()=>this._draw()),t.onChange(()=>this._sync()),this._sync()}get isOpen(){return this._open}toggle(){this._open?this.close():this.open()}open(){if(this._rr.paused){this.toast(`Rearrange is off while you are in a room with friends`);return}this._open=!0,this._layer.classList.remove(`hidden`),document.documentElement.classList.add(`ns-rr-open`),document.pointerLockElement&&document.exitPointerLock(),this._opts.onOpenChange?.(!0),this._sync();let e=()=>{this._open&&(this._draw(),this._raf=requestAnimationFrame(e))};this._raf=requestAnimationFrame(e)}close(){this._open&&(this._drag&&(this._drag=null,this._rr.cancelDrag()),this._open=!1,this._layer.classList.add(`hidden`),document.documentElement.classList.remove(`ns-rr-open`),cancelAnimationFrame(this._raf),this._opts.onOpenChange?.(!1))}toast(e){let t=document.createElement(`div`);for(t.className=`rr-toast`,t.textContent=e,this._toasts.appendChild(t);this._toasts.children.length>3;)this._toasts.firstElementChild?.remove();setTimeout(()=>{t.classList.add(`fade-out`),setTimeout(()=>t.remove(),300)},3200)}_sync(){if(this._boxMode)return this._syncBoxMode();if(this._boxBtns){this._boxBtns.remove.style.display=`none`,this._boxBtns.auto.style.display=`none`,this._boxBtns.mode.querySelector(`span`).textContent=`Fix boxes`;for(let e of[this._btn.left,this._btn.right,this._btn.undo,this._btn.redo,this._btn.reset,this._lockBtn])e.style.display=``}let e=this._selected!==null;this._btn.left.disabled=!e,this._btn.right.disabled=!e,this._btn.undo.disabled=!this._rr.canUndo,this._btn.redo.disabled=!this._rr.canRedo;let t=this._rr.mode===`admin`,n=t?[]:this._rr.baseMoves;if(this._btn.reset.disabled=JSON.stringify(this._rr.moves)===JSON.stringify(n),this._lockBtn){this._lockBtn.disabled=!e;let t=e&&this._rr.isLocked(this._selected);this._lockBtn.querySelector(`span`).textContent=t?`Unlock`:`Lock`}this._saveBtn&&(this._saveBtn.disabled=this._saving||!this._rr.dirty,this._saveBtn.querySelector(`span`).textContent=this._saving?`Saving…`:`Save for everyone`),this._note.textContent=t?this._rr.dirty?`Not saved yet`:`Saved, everyone sees this`:`Only you see these changes`;let r=this._rr.dragging;this._hint.textContent=r?r.ok?`Fits here. Let go to place it.`:`No room here. Let go and it moves back.`:e&&!t&&this._rr.isLocked(this._selected)?`This piece stays where it is.`:e?t&&this._rr.isLocked(this._selected)?`Locked: visitors can't move it. You still can.`:`Drag it to move, or turn it with the buttons.`:`Tap or click a piece of furniture, then drag it.`,this._open&&this._draw()}attach3D(e,t){this._viewRay=t,e.addEventListener(`pointerdown`,t=>{if(!this._open||this._boxMode||t.pointerType===`touch`||t.button!==0||this._rr.paused)return;let n=this._viewRay?.(t.clientX,t.clientY),r=n&&this._pick3D(n.origin,n.dir);if(!r)return;if(this._selected=r.id,!this._rr.beginDrag(r.id))return this._sync();t.preventDefault(),t.stopPropagation(),e.setPointerCapture?.(t.pointerId);let i=this._rr.moves.find(e=>e.id===r.id)??{id:r.id,dx:0,dz:0,turnDeg:0};this._drag3d={id:r.id,pointerId:t.pointerId,y:r.y,grab:{x:r.x,z:r.z},base:i,moved:!1,sx:t.clientX,sy:t.clientY},document.body.style.cursor=`grabbing`}),e.addEventListener(`pointermove`,e=>{let n=this._drag3d;if(!n||e.pointerId!==n.pointerId||!n.moved&&Math.hypot(e.clientX-n.sx,e.clientY-n.sy)<4)return;n.moved=!0;let r=t(e.clientX,e.clientY);if(!r||Math.abs(r.dir.y)<1e-4)return;let i=(n.y-r.origin.y)/r.dir.y;if(i<=0||i>30)return;let a=r.origin.x+r.dir.x*i,o=r.origin.z+r.dir.z*i;this._rr.dragTo({id:n.id,dx:n.base.dx+a-n.grab.x,dz:n.base.dz+o-n.grab.z,turnDeg:n.base.turnDeg})});let n=e=>{let t=this._drag3d;t&&e.pointerId===t.pointerId&&(this._drag3d=null,document.body.style.cursor=``,t.moved&&e.type===`pointerup`?this._rr.endDrag():this._rr.cancelDrag())};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n)}get busy3D(){return this._drag3d!==null}_pick3D(e,t){let n=this._rr.objects.map(e=>({ob:e,poly:a(e,this._moveOf(e.id))})),r=Math.hypot(t.x,t.y,t.z)||1;for(let i=.05;i<10;i+=.02){let a=e.x+t.x/r*i,o=e.y+t.y/r*i,s=e.z+t.z/r*i;if(o<0)break;for(let{ob:e,poly:t}of n)if(o<=e.y1&&c(t,{x:a,z:s}))return{id:e.id,x:a,y:o,z:s}}return null}_toggleBoxMode(){this._drag&&(this._drag=null,this._rr.cancelDrag()),this._boxMode=!this._boxMode,this._boxSel=null,this._boxDrag=null,this._selected=null,this._sync()}_syncBoxMode(){let e=this._boxBtns;for(let e of[this._btn.left,this._btn.right,this._btn.undo,this._btn.redo,this._btn.reset,this._lockBtn])e.style.display=`none`;e.remove.style.display=``,e.auto.style.display=``,e.mode.querySelector(`span`).textContent=`Boxes done`;let t=this._toolBoxes().find(e=>e.id===this._boxSel)??null;e.remove.disabled=!t,e.remove.querySelector(`span`).textContent=t?.removed?`Restore`:`Remove`,e.auto.disabled=!t||!t.edited||t.added,this._saveBtn&&(this._saveBtn.disabled=this._saving||!this._rr.dirty,this._saveBtn.querySelector(`span`).textContent=this._saving?`Saving…`:`Save for everyone`),this._note.textContent=this._rr.dirty?`Not saved yet`:`Saved, everyone sees this`,this._hint.textContent=this._boxDrag?this._boxDrag.kind===`new`?`Let go to add this box.`:`Let go to keep this size.`:t?t.removed?`Not furniture: it stays in the room as scanned.`:`Drag a corner to resize, or drag inside to shift the box.`:`Tap a box to fix it, or drag on empty floor to draw a missing one.`,this._open&&this._draw()}_toolBoxes(){let e=new Map(this._rr.boxEdits.map(e=>[e.id,e])),t=new Set(this._rr.objects.map(e=>e.id)),n=new Map(this._rr.plan.boxes.map(e=>[e.id,e])),r=[];for(let i of this._rr.detected.boxes){let a=e.get(i.id),o=n.get(i.id);r.push({id:i.id,box:o??i,removed:!!a?.removed,edited:!!a,added:!1,movable:t.has(i.id)})}for(let i of e.values()){if(i.removed||r.some(e=>e.id===i.id))continue;let e=n.get(i.id);e&&r.push({id:i.id,box:e,removed:!1,edited:!0,added:!0,movable:t.has(i.id)})}return r}_setEdit(e,t){let n=this._rr.boxEdits.filter(t=>t.id!==e);t&&n.push(t),this._rr.setBoxEdits(n)}_boxRemove(){let e=this._toolBoxes().find(e=>e.id===this._boxSel);e&&(e.added?(this._setEdit(e.id,null),this._boxSel=null):this._setEdit(e.id,e.removed?null:{id:e.id,removed:!0}))}_boxAuto(){let e=this._toolBoxes().find(e=>e.id===this._boxSel);e&&!e.added&&this._setEdit(e.id,null)}_boxDown(e){let t=this._toolBoxes(),n=t.find(e=>e.id===this._boxSel);if(n&&!n.removed)for(let t of[0,1])for(let r of[0,1]){let i=this._toPx({x:t?n.box.maxX:n.box.minX,z:r?n.box.maxZ:n.box.minZ}),a=this._toPx(e);if(Math.hypot(i.px-a.px,i.py-a.py)<=12){this._boxDrag={id:n.id,kind:`corner`,corner:[t,r],start:e,orig:{...n.box},cur:{...n.box}};return}}let r=t.filter(t=>e.x>=t.box.minX&&e.x<=t.box.maxX&&e.z>=t.box.minZ&&e.z<=t.box.maxZ);r.sort((e,t)=>(e.box.maxX-e.box.minX)*(e.box.maxZ-e.box.minZ)-(t.box.maxX-t.box.minX)*(t.box.maxZ-t.box.minZ));let i=r[0];if(i){this._boxSel=i.id,i.removed||(this._boxDrag={id:i.id,kind:`move`,corner:[0,0],start:e,orig:{...i.box},cur:{...i.box}});return}this._boxSel=null;let a={minX:e.x,minZ:e.z,maxX:e.x,maxZ:e.z};this._boxDrag={id:null,kind:`new`,corner:[1,1],start:e,orig:a,cur:{...a}}}_boxMove(e){let t=this._boxDrag;if(!t)return;let n=e.x-t.start.x,r=e.z-t.start.z,i=t.orig;if(t.kind===`move`)t.cur={minX:i.minX+n,maxX:i.maxX+n,minZ:i.minZ+r,maxZ:i.maxZ+r};else{let e=t.corner[0]?i.maxX+n:i.minX+n,a=t.corner[1]?i.maxZ+r:i.minZ+r,o=t.corner[0]?i.minX:i.maxX,s=t.corner[1]?i.minZ:i.maxZ;t.cur={minX:Math.min(e,o),maxX:Math.max(e,o),minZ:Math.min(a,s),maxZ:Math.max(a,s)}}this._sync()}_boxUp(){let e=this._boxDrag;if(this._boxDrag=null,!e)return this._sync();let t=e.cur,n=t.maxX-t.minX>=.15&&t.maxZ-t.minZ>=.15,i=JSON.stringify(t)!==JSON.stringify(e.orig);if(e.kind===`new`){if(!n)return this._sync();let e=this._toolBoxes().map(e=>e.id).concat(this._rr.boxEdits.map(e=>e.id)),i=Math.max(r-1,...e)+1;this._boxSel=i,this._setEdit(i,{id:i,...t})}else if(i&&e.id!==null){if(!n)return this.toast(`That box is too small`),this._sync();this._setEdit(e.id,{id:e.id,...t})}else this._sync()}_drawBoxTool(e,n){let r=e=>[{x:e.minX,z:e.minZ},{x:e.maxX,z:e.minZ},{x:e.maxX,z:e.maxZ},{x:e.minX,z:e.maxZ}],i=this._boxDrag;for(let a of this._toolBoxes()){let o=i&&i.id===a.id?i.cur:a.box;if(n(r(o)),a.removed?(e.setLineDash([4,3]),e.strokeStyle=`rgba(231, 76, 60, 0.8)`,e.lineWidth=1.5,e.stroke(),e.setLineDash([])):(e.fillStyle=a.movable?t.planBox:`#232a3d`,e.fill(),e.strokeStyle=a.edited?t.sky:t.planBoxLine,e.lineWidth=1,e.stroke()),a.id===this._boxSel&&(n(r(o)),e.strokeStyle=t.gold,e.lineWidth=2.5,e.stroke(),!a.removed)){e.fillStyle=t.gold;for(let t of r(o)){let n=this._toPx(t);e.fillRect(n.px-5,n.py-5,10,10)}}}i&&i.kind===`new`&&(n(r(i.cur)),e.fillStyle=`rgba(111, 196, 242, 0.35)`,e.fill(),e.strokeStyle=t.sky,e.lineWidth=1.5,e.stroke())}async _save(){if(this._opts.save&&!this._saving){this._saving=!0,this._sync();try{await this._opts.save()}finally{this._saving=!1,this._sync()}}}_turn(e){this._selected!==null&&this._rr.turn(this._selected,e)}_fit(){let e=this._rr.plan.outline[0]??[],t=1/0,n=-1/0,r=1/0,i=-1/0;for(let a of e)t=Math.min(t,a.x),n=Math.max(n,a.x),r=Math.min(r,a.z),i=Math.max(i,a.z);if(!Number.isFinite(t))return;let a=this._canvas.clientWidth,o=this._canvas.clientHeight,s=Math.min((a-24)/(n-t),(o-24)/(i-r));this._view={scale:s,ox:(a-(n-t)*s)/2,oz:(o-(i-r)*s)/2,minX:t,minZ:r}}_toPx(e){let t=this._view;return{px:t.ox+(e.x-t.minX)*t.scale,py:t.oz+(e.z-t.minZ)*t.scale}}_toWorld(e,t){let n=this._view;return{x:n.minX+(e-n.ox)/n.scale,z:n.minZ+(t-n.oz)/n.scale}}_moveOf(e){let t=this._rr.dragging;return t&&t.id===e?t.move:this._rr.moves.find(t=>t.id===e)}_hit(e){let t=this._rr.objects.filter(t=>c(a(t,this._moveOf(t.id)),e));return t.sort((e,t)=>l(e)-l(t)),t[0]??null}_draw(){let e=this._canvas,n=window.devicePixelRatio||1,r=e.clientWidth,i=e.clientHeight;if(!r||!i)return;(e.width!==Math.round(r*n)||e.height!==Math.round(i*n))&&(e.width=Math.round(r*n),e.height=Math.round(i*n)),this._fit();let o=e.getContext(`2d`);if(!o)return;o.setTransform(n,0,0,n,0,0),o.clearRect(0,0,r,i);let s=e=>{o.beginPath(),e.forEach((e,t)=>{let n=this._toPx(e);t?o.lineTo(n.px,n.py):o.moveTo(n.px,n.py)}),o.closePath()};o.beginPath();for(let e of this._rr.plan.outline)e.forEach((e,t)=>{let n=this._toPx(e);t?o.lineTo(n.px,n.py):o.moveTo(n.px,n.py)}),o.closePath();if(o.fillStyle=t.planFloor,o.fill(`evenodd`),o.strokeStyle=t.gold,o.lineWidth=2,o.stroke(),this._boxMode){this._drawBoxTool(o,s);return}let c=new Set(this._rr.objects.map(e=>e.id));for(let e of this._rr.plan.boxes)c.has(e.id)||(s([{x:e.minX,z:e.minZ},{x:e.maxX,z:e.minZ},{x:e.maxX,z:e.maxZ},{x:e.minX,z:e.maxZ}]),o.fillStyle=`#232a3d`,o.fill());let l=this._rr.dragging;for(let e of this._rr.objects){let n=this._moveOf(e.id);n&&(s(a(e,void 0)),o.setLineDash([3,3]),o.strokeStyle=`rgba(255,255,255,0.25)`,o.lineWidth=1,o.stroke(),o.setLineDash([]));let r=a(e,n);s(r);let i=l?.id===e.id,c=this._rr.isLocked(e.id);if(o.fillStyle=i?l.ok?`rgba(46, 204, 113, 0.55)`:`rgba(231, 76, 60, 0.6)`:c?`#232a3d`:t.planBox,o.fill(),c&&!i){let e=this._toPx({x:r.reduce((e,t)=>e+t.x,0)/r.length,z:r.reduce((e,t)=>e+t.z,0)/r.length});o.strokeStyle=t.planBoxLine,o.lineWidth=1.5,o.strokeRect(e.px-4,e.py-1,8,6),o.beginPath(),o.arc(e.px,e.py-1,3,Math.PI,0),o.stroke(),s(r)}o.lineWidth=this._selected===e.id?2.5:1,o.strokeStyle=this._selected===e.id?t.gold:t.planBoxLine,o.stroke()}let u=this._opts.getPose(),d=this._toPx(u);o.fillStyle=t.sky,o.beginPath(),o.arc(d.px,d.py,5,0,Math.PI*2),o.fill(),o.strokeStyle=t.sky,o.lineWidth=2,o.beginPath(),o.moveTo(d.px,d.py),o.lineTo(d.px-Math.sin(u.yaw)*12,d.py-Math.cos(u.yaw)*12),o.stroke()}_eventWorld(e){let t=this._canvas.getBoundingClientRect();return this._toWorld(e.clientX-t.left,e.clientY-t.top)}_onDown(e){if(e.button!==0&&e.pointerType===`mouse`)return;this._fit();let t=this._eventWorld(e);if(this._boxMode){this._boxDown(t),this._boxDrag&&this._canvas.setPointerCapture(e.pointerId),this._sync();return}let n=this._hit(t);if(this._selected=n?.id??null,n&&this._rr.beginDrag(n.id)){let r=this._rr.moves.find(e=>e.id===n.id)??{id:n.id,dx:0,dz:0,turnDeg:0};this._drag={id:n.id,start:t,base:r,moved:!1},this._canvas.setPointerCapture(e.pointerId),this._canvas.classList.add(`dragging`)}this._sync()}_onMove(e){if(this._boxMode)return this._boxMove(this._eventWorld(e));if(!this._drag)return;let t=this._eventWorld(e),n=t.x-this._drag.start.x,r=t.z-this._drag.start.z;if(!this._drag.moved&&Math.hypot(n,r)<.03)return;this._drag.moved=!0;let i=this._drag.base;this._rr.dragTo({id:i.id,dx:i.dx+n,dz:i.dz+r,turnDeg:i.turnDeg})}_onUp(e){if(this._boxMode)return this._canvas.releasePointerCapture?.(e.pointerId),this._boxUp();if(!this._drag)return;this._canvas.releasePointerCapture?.(e.pointerId),this._canvas.classList.remove(`dragging`);let t=this._drag.moved;this._drag=null,t?this._rr.endDrag():this._rr.cancelDrag()}_onKey(e){if(!this._open)return;let t=e.target;if(t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`))return;let n=e.ctrlKey||e.metaKey,r=e.key.toLowerCase(),a=!0;r===`escape`?this.close():this._boxMode&&(r===`delete`||r===`backspace`)?this._boxRemove():this._boxMode&&n?a=!1:n&&r===`z`&&!e.shiftKey?this._rr.undo():n&&(r===`y`||r===`z`&&e.shiftKey)?this._rr.redo():!n&&r===`q`?this._turn(i.turnStepDeg):!n&&r===`e`?this._turn(-i.turnStepDeg):a=!n,a&&(e.preventDefault(),e.stopImmediatePropagation())}};function c(e,t){let n=!1;for(let r=0,i=e.length-1;r<e.length;i=r++){let a=e[r],o=e[i];a.z>t.z!=o.z>t.z&&t.x<(o.x-a.x)*(t.z-a.z)/(o.z-a.z)+a.x&&(n=!n)}return n}var l=e=>(e.lift.maxX-e.lift.minX)*(e.lift.maxZ-e.lift.minZ);export{s as RearrangeUI};