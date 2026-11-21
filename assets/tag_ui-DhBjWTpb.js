import{D as e,O as t,d as n,f as r,h as i,k as a,m as o,p as s,u as c,v as l,y as u}from"./preload-helper-D0y89ZOX.js";import{n as d,p as f,r as p,t as m}from"./main-Dyy5X82q.js";var h=`.namma-tag-ui-layer {
  font-family: var(--ns-font);
  color: var(--ns-text);
  pointer-events: none;
}

/* ---------- Toasts ---------- */
.tag-toast-container {
  position: fixed;
  top: calc(var(--ns-hud-top) + var(--ns-target) + 16px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ns-space-2);
  width: max-content;
  max-width: calc(100% - 2 * var(--ns-edge));
  z-index: 500;
  pointer-events: none;
}
.tag-toast {
  background: var(--ns-surface-strong);
  color: var(--ns-text);
  border: 1px solid var(--ns-border-strong);
  padding: var(--ns-space-2) var(--ns-space-4);
  border-radius: var(--ns-radius-pill);
  font-size: var(--ns-fs-md);
  font-weight: 600;
  box-shadow: var(--ns-shadow);
  overflow-wrap: anywhere;
  transition: opacity var(--ns-dur) var(--ns-ease-out), translate var(--ns-dur) var(--ns-ease-out);
  @starting-style { opacity: 0; translate: 0 -6px; }
}
.tag-toast.fade-out {
  opacity: 0;
  translate: 0 -6px;
  transition-duration: var(--ns-dur-fast);
}

/* ---------- Places panel (same card as the POI card) ---------- */
.tag-panel {
  position: fixed;
  top: calc(var(--ns-hud-top) + var(--ns-target) + 16px);
  right: var(--ns-hud-right);
  width: 300px;
  /* Stops above the 360 px tag-mode minimap (plus its padding) in the bottom-right corner;
     with the map closed it may use the whole height (rule below) */
  max-height: max(180px, calc(100vh - var(--ns-hud-top) - var(--ns-target) - 16px - var(--ns-hud-bottom) - 382px));
  background: var(--ns-surface-strong);
  border: 1px solid var(--ns-border);
  border-radius: var(--ns-radius-lg);
  box-shadow: var(--ns-shadow);
  display: flex;
  flex-direction: column;
  z-index: 90;
  pointer-events: auto;
  overflow: hidden;
}
.tag-panel.collapsed .tag-panel-body {
  display: none;
}
/* Wide screens with the minimap closed: nothing to stop above */
@media (min-width: 901px) {
  html:has(.namma-minimap-container.hidden) .tag-panel {
    max-height: calc(100vh - var(--ns-hud-top) - var(--ns-target) - 16px - var(--ns-hud-bottom));
  }
  /* Room for about three places between Adjust mode and the save buttons */
  html:has(.namma-minimap-container.hidden) .tag-poi-list { min-height: min(170px, 30vh); }
}
.tag-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ns-space-2);
  padding: var(--ns-space-1) var(--ns-space-1) var(--ns-space-1) var(--ns-space-4);
  border-bottom: 1px solid var(--ns-border);
}
.tag-panel.body-hidden .tag-panel-header { border-bottom: 0; }
.tag-panel-title-wrap {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}
.tag-panel-title {
  margin: 0;
  font-weight: 700;
  font-size: var(--ns-fs-lg);
  letter-spacing: var(--ns-heading-ls);
  color: var(--ns-accent);
}
.tag-count-badge {
  font-size: var(--ns-fs-md);
  color: var(--ns-text-muted);
  font-variant-numeric: tabular-nums;
}
.tag-mode-chip {
  display: none;
  align-self: center;
  margin-left: var(--ns-space-1);
  padding: 1px 8px;
  border: 1px solid var(--ns-badge-border);
  border-radius: 4px;
  background: transparent;
  color: var(--ns-badge);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
}
.tag-icon-btn {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ns-target);
  height: var(--ns-target);
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--ns-radius-sm);
  background: transparent;
  color: var(--ns-text-muted);
  cursor: pointer;
}
.tag-chevron { transition: rotate var(--ns-dur) var(--ns-ease-out); }
.tag-panel.body-hidden .tag-chevron { rotate: -90deg; }
.tag-panel-body {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.tag-poi-list {
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: var(--ns-space-2);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tag-empty-notice {
  padding: 18px 10px;
  text-align: center;
  font-size: var(--ns-fs-sm);
  color: var(--ns-text-muted);
}
.tag-poi-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--ns-row);
  border: 1px solid var(--ns-row-border);
  border-radius: var(--ns-radius-md);
  padding: var(--ns-space-1) var(--ns-space-1) var(--ns-space-1) var(--ns-space-3);
  gap: var(--ns-space-2);
}
.tag-poi-row { cursor: pointer; }
.tag-poi-row.selected {
  border-color: var(--ns-accent);
  box-shadow: inset 0 0 0 1px var(--ns-accent), inset 3px 0 0 var(--ns-accent);
  background: var(--ns-accent-soft);
}
.tag-poi-row.selected .tag-poi-name { color: var(--ns-accent); }
.tag-adjust-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ns-space-2);
  padding: var(--ns-space-2) var(--ns-space-2) var(--ns-space-2) var(--ns-space-4);
  border-bottom: 1px solid var(--ns-border);
}
.tag-adjust-label {
  display: inline-flex;
  align-items: center;
  gap: var(--ns-space-2);
  font-size: var(--ns-fs-sm);
  font-weight: 700;
  letter-spacing: var(--ns-label-ls);
  text-transform: uppercase;
  color: var(--ns-text-strong);
}
.tag-adjust-kbd {
  font: inherit;
  font-size: var(--ns-fs-xs);
  color: var(--ns-text-muted);
  border: 1px solid var(--ns-border-strong);
  border-bottom-width: 2px;
  border-radius: 4px;
  background: var(--ns-kbd-bg);
  padding: 0 6px;
}
.tag-switch {
  position: relative;
  flex: none;
  width: 48px;
  height: 28px;
  padding: 0;
  border-radius: var(--ns-radius-pill);
  border: 1px solid var(--ns-border-strong);
  background: var(--ns-row);
  cursor: pointer;
  transition: background var(--ns-dur) var(--ns-ease-out);
}
.tag-switch-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--ns-text-muted);
  transition: translate var(--ns-dur) var(--ns-ease-out), background var(--ns-dur) var(--ns-ease-out);
}
.tag-switch[aria-checked="true"] { background: var(--ns-primary); border-color: var(--ns-accent); box-shadow: var(--ns-glow); }
.tag-switch[aria-checked="true"] .tag-switch-knob { translate: 20px 0; background: var(--ns-on-accent); }
.tag-adjust-hint {
  padding: var(--ns-space-2) var(--ns-space-4);
  font-size: var(--ns-fs-sm);
  line-height: 1.45;
  color: var(--ns-warn-text);
  background: var(--ns-warn-soft);
  border-bottom: 1px solid var(--ns-warn-border);
}
.tag-adjust-hint.hidden { display: none; }
.tag-panel.adjusting { border-color: var(--ns-accent); }
.tag-poi-info {
  flex: 1;
  min-width: 0;
}
.tag-poi-name {
  font-size: var(--ns-fs-md);
  font-weight: 600;
  color: var(--ns-text-strong);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tag-poi-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
}
.tag-poi-category {
  flex: none;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: var(--ns-label-ls);
  text-transform: uppercase;
  background: transparent;
  color: var(--ns-copper);
  padding: 0 6px;
  border: 1px solid currentColor;
  border-radius: 4px;
}
.tag-poi-pos {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--ns-fs-xs);
  color: var(--ns-text-subtle);
}
.tag-poi-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 2px;
}
.tag-panel-footer {
  padding: var(--ns-space-2);
  border-top: 1px solid var(--ns-border);
  display: flex;
  gap: var(--ns-space-2);
}
.tag-save-row {
  padding: var(--ns-space-2) var(--ns-space-2) 0;
  border-top: 1px solid var(--ns-border);
  display: flex;
  align-items: center;
  gap: var(--ns-space-2);
}
.tag-save-row + .tag-panel-footer { border-top: 0; }
.tag-save-row .ns-btn { flex: 1; font-size: var(--ns-fs-xs); letter-spacing: 0.06em; }
.tag-save-row .ns-btn:disabled { opacity: 0.6; cursor: progress; }
.tag-forget-key {
  background: none; border: 0; padding: 0 var(--ns-space-1);
  color: var(--ns-text-muted); font: inherit; font-size: var(--ns-fs-xs);
  text-decoration: underline; cursor: pointer; white-space: nowrap;
}
.tag-forget-key.hidden { display: none; }
.tag-key-note { margin: 0 0 var(--ns-space-2); color: var(--ns-text-muted); font-size: var(--ns-fs-sm); }
.tag-key-card .ns-input { width: 100%; box-sizing: border-box; }
.tag-panel-footer .ns-btn { flex: 1; padding: 0 var(--ns-space-2); font-size: var(--ns-fs-xs); letter-spacing: 0.06em; white-space: nowrap; }
@media (hover: hover) and (pointer: fine) {
  .tag-poi-row:hover { background: var(--ns-row-hover); }
  .tag-icon-btn:hover { background: var(--ns-surface-hover); color: var(--ns-text-strong); }
  .tag-action-btn.delete:hover {
    background: var(--ns-danger-soft);
    border-color: var(--ns-danger-border);
    color: var(--ns-danger-text);
  }
}

/* ---------- Add / edit form and confirm (shared dialog) ---------- */
.tag-form-overlay, .tag-confirm-overlay { z-index: 300; }
.tag-form {
  display: flex;
  flex-direction: column;
  gap: var(--ns-space-3);
}
.tag-field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tag-field-group label {
  font-size: var(--ns-fs-sm);
  font-weight: 600;
  color: var(--ns-text-muted);
}
.tag-select { cursor: pointer; }
.tag-warning-box {
  background: var(--ns-warn-soft);
  border: 1px solid var(--ns-warn-border);
  color: var(--ns-warn-text);
  padding: var(--ns-space-2) 10px;
  border-radius: var(--ns-radius-sm);
  font-size: var(--ns-fs-sm);
  line-height: 1.45;
}
.tag-confirm-card { max-width: 360px; }

/* Narrow screens: the panel becomes a bottom-right sheet; the minimap is top-right */
@media (max-width: 900px) {
  .tag-panel {
    top: auto;
    bottom: var(--ns-hud-bottom);
    width: min(300px, calc(100% - 2 * var(--ns-edge)));
    max-height: 42vh;
  }
}

/* Phone: full-width bottom sheet. While a POI or route card is open it drops to its header
   (unless opened with the chevron), and nav_ui lifts those cards by --ns-sheet-h. */
@media (max-width: 760px) {
  .tag-panel {
    left: var(--ns-hud-left);
    right: var(--ns-hud-right);
    width: auto;
    max-height: 40vh;
    border-radius: var(--ns-radius-lg);
  }
  .tag-mode-chip { display: inline-block; }
  html:has(.nav-poi-card:not(.hidden)) .tag-panel:not(.peek-open) .tag-panel-body,
  html:has(.nav-route-card:not(.hidden)) .tag-panel:not(.peek-open) .tag-panel-body {
    display: none;
  }
  .tag-poi-name { font-size: var(--ns-fs-lg); }
  .tag-panel-footer .ns-btn { font-size: var(--ns-fs-md); }
  .tag-toast-container {
    top: auto;
    bottom: calc(var(--ns-hud-bottom) + var(--ns-sheet-h, 0px));
  }
}

/* Landscape phones (a short strip, especially in Safari): the Places panel is a column on the
   right. Folded it is one line at the bottom; open it runs up to just under the top row, and the
   cards, the minimap and the Up / Down pads keep to its left (see nav_ui.css, minimap.css). */
@media (pointer: coarse) and (max-height: 520px) {
  :root { --ns-tag-w: min(260px, 32vw); }
  .tag-panel {
    top: auto;
    left: auto;
    right: var(--ns-hud-right);
    bottom: var(--ns-hud-bottom);
    width: var(--ns-tag-w);
    max-height: calc(100dvh - var(--ns-hud-top) - var(--ns-target) - 16px - var(--ns-hud-bottom));
  }
  .tag-panel-footer .ns-btn { min-height: 36px; }
}
`,g=`.nav-poi-card:not(.hidden), .nav-route-card:not(.hidden)`,_=class{_sceneId;_root;_getPose;_isWalkable;_isInsideRoom;_onPoisChange;_draftStore;_pois=[];_manifestPois=[];_liveBase=void 0;_lastCategory=`furniture`;_editingPoi=null;_isPanelCollapsed=!1;_formReturnFocus=null;_adjust=!1;_selectedId=null;_onAdjustChange;_adjustSwitch;_adjustHint;_toastContainer;_panel;_panelBody;_countBadge;_poiListContainer;_collapseBtn;_formOverlay;_formTitle;_nameInput;_categorySelect;_aliasesInput;_warningBox;_saveBtn;_cancelBtn;_confirmOverlay;_confirmTitle;_confirmOkBtn;_confirmCancelBtn;_confirmResolve=null;_confirmReturnFocus=null;_phoneQuery;_saveConfig;_saveLiveBtn=null;_forgetKeyBtn=null;_saving=!1;_keyOverlay;_keyInput;_keyResolve=null;_keyReturnFocus=null;constructor(t){this._sceneId=t.sceneId,this._getPose=t.getPose,this._isWalkable=t.isWalkable,this._isInsideRoom=t.isInsideRoom,this._onPoisChange=t.onPoisChange,this._onAdjustChange=t.onAdjustChange,this._draftStore=new n(this._sceneId),this._manifestPois=t.manifestPois?t.manifestPois.map(s):[],this._phoneQuery=window.matchMedia?window.matchMedia(f):null,this._saveConfig=t.saveConfig??null;let r=t.container??document.body;this._root=document.createElement(`div`),this._root.id=`namma-tag-ui-root`,this._root.className=`namma-tag-ui-layer ns-ui`,e(),this._injectStyles(),this._toastContainer=document.createElement(`div`),this._toastContainer.id=`tag-toast-container`,this._toastContainer.className=`tag-toast-container`,this._toastContainer.setAttribute(`role`,`status`),this._toastContainer.setAttribute(`aria-live`,`polite`),this._root.appendChild(this._toastContainer),this._panel=document.createElement(`section`),this._panel.id=`tag-panel`,this._panel.className=`tag-panel`,this._panel.setAttribute(`aria-label`,`Tagged places`);let i=document.createElement(`div`);i.className=`tag-panel-header`;let l=document.createElement(`div`);l.className=`tag-panel-title-wrap`;let u=document.createElement(`h2`);u.className=`tag-panel-title`,u.textContent=`Places`,this._countBadge=document.createElement(`span`),this._countBadge.className=`tag-count-badge`,this._countBadge.textContent=`(0)`;let d=document.createElement(`span`);d.className=`tag-mode-chip`,d.textContent=`Tag mode`,l.append(u,this._countBadge,d),this._collapseBtn=document.createElement(`button`),this._collapseBtn.className=`tag-icon-btn tag-collapse-btn ns-press`,this._collapseBtn.setAttribute(`aria-label`,`Toggle tag panel`),this._collapseBtn.setAttribute(`aria-controls`,`tag-panel-body`),this._collapseBtn.setAttribute(`aria-expanded`,`true`),this._collapseBtn.title=`Collapse/Expand panel`,this._collapseBtn.innerHTML=`<svg class="ns-icon tag-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,this._collapseBtn.addEventListener(`click`,()=>this._onCollapseClick()),i.append(l,this._collapseBtn),this._panel.appendChild(i),this._panelBody=document.createElement(`div`),this._panelBody.id=`tag-panel-body`,this._panelBody.className=`tag-panel-body`;let m=document.createElement(`div`);m.className=`tag-adjust-row`;let h=document.createElement(`span`);h.className=`tag-adjust-label`,h.id=`tag-adjust-label`,h.textContent=`Adjust mode`;let g=document.createElement(`kbd`);g.className=`tag-adjust-kbd`,g.textContent=`T`,h.appendChild(g),this._adjustSwitch=document.createElement(`button`),this._adjustSwitch.type=`button`,this._adjustSwitch.className=`tag-switch ns-press`,this._adjustSwitch.setAttribute(`role`,`switch`),this._adjustSwitch.setAttribute(`aria-checked`,`false`),this._adjustSwitch.setAttribute(`aria-labelledby`,`tag-adjust-label`),this._adjustSwitch.innerHTML=`<span class="tag-switch-knob" aria-hidden="true"></span>`,this._adjustSwitch.addEventListener(`click`,()=>this.toggleAdjust()),m.append(h,this._adjustSwitch),this._adjustHint=document.createElement(`div`),this._adjustHint.className=`tag-adjust-hint hidden`,this._panelBody.append(m,this._adjustHint),this._poiListContainer=document.createElement(`div`),this._poiListContainer.className=`tag-poi-list`,this._panelBody.appendChild(this._poiListContainer);let _=document.createElement(`div`);_.className=`tag-panel-footer`;let v=document.createElement(`button`);v.className=`ns-btn ns-btn-primary ns-slant-r ns-press`,v.textContent=`Export pois.json`,v.title=`Download pois.json file`,v.addEventListener(`click`,()=>{o(this._sceneId,this._pois),this.showToast(`Exported pois.json`)});let y=document.createElement(`button`);if(y.className=`ns-btn ns-btn-danger-soft ns-slant-l ns-press`,y.textContent=`Clear draft`,y.title=`Clear browser draft and revert to original places`,y.addEventListener(`click`,()=>{this._confirm({title:`Clear local draft and revert to original places?`,confirmLabel:`Clear draft`}).then(e=>{e&&(this._draftStore.clear(),this._pois=this._manifestPois.map(s),this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),this.showToast(`Draft cleared`))})}),_.append(v,y),this._saveConfig){let e=document.createElement(`div`);e.className=`tag-save-row`,this._saveLiveBtn=document.createElement(`button`),this._saveLiveBtn.type=`button`,this._saveLiveBtn.id=`tag-save-live`,this._saveLiveBtn.className=`ns-btn ns-btn-primary ns-press`,this._saveLiveBtn.textContent=`Save to live`,this._saveLiveBtn.title=`Publish these places to the live site (owner only)`,this._saveLiveBtn.addEventListener(`click`,()=>void this.saveLive()),this._forgetKeyBtn=document.createElement(`button`),this._forgetKeyBtn.type=`button`,this._forgetKeyBtn.className=`tag-forget-key`,this._forgetKeyBtn.textContent=`Forget key`,this._forgetKeyBtn.title=`Remove the saved GitHub key from this browser`,this._forgetKeyBtn.addEventListener(`click`,()=>{p.clear(),this._syncKeyUi(),this.showToast(`Key removed from this browser`)}),e.append(this._saveLiveBtn,this._forgetKeyBtn),this._panelBody.appendChild(e)}this._panelBody.appendChild(_),this._panel.appendChild(this._panelBody),this._root.appendChild(this._panel),this._formOverlay=document.createElement(`div`),this._formOverlay.id=`tag-form-modal`,this._formOverlay.className=`ns-scrim tag-form-overlay hidden`;let b=document.createElement(`div`);b.className=`ns-dialog tag-form-card`,b.setAttribute(`role`,`dialog`),b.setAttribute(`aria-modal`,`true`),b.setAttribute(`aria-labelledby`,`tag-form-title`),this._formTitle=document.createElement(`h2`),this._formTitle.className=`ns-dialog-title`,this._formTitle.id=`tag-form-title`,this._formTitle.textContent=`Add Place`,b.appendChild(this._formTitle);let x=document.createElement(`form`);x.className=`tag-form`,x.addEventListener(`submit`,e=>{e.preventDefault(),this._submitForm()});let S=document.createElement(`div`);S.className=`tag-field-group`;let C=document.createElement(`label`);C.textContent=`Name *`,C.htmlFor=`tag-name-input`,this._nameInput=document.createElement(`input`),this._nameInput.type=`text`,this._nameInput.id=`tag-name-input`,this._nameInput.className=`ns-input`,this._nameInput.placeholder=`e.g. Desk…`,this._nameInput.name=`poi-name`,this._nameInput.required=!0,this._nameInput.autocomplete=`off`,this._nameInput.enterKeyHint=`done`,S.append(C,this._nameInput),x.appendChild(S);let w=document.createElement(`div`);w.className=`tag-field-group`;let T=document.createElement(`label`);T.textContent=`Category`,T.htmlFor=`tag-cat-select`,this._categorySelect=document.createElement(`select`),this._categorySelect.id=`tag-cat-select`,this._categorySelect.className=`ns-input tag-select`;for(let e of c){let t=document.createElement(`option`);t.value=e,t.textContent=e,this._categorySelect.appendChild(t)}w.append(T,this._categorySelect),x.appendChild(w);let E=document.createElement(`div`);E.className=`tag-field-group`;let D=document.createElement(`label`);D.textContent=`Aliases (comma-separated)`,D.htmlFor=`tag-aliases-input`,this._aliasesInput=document.createElement(`input`),this._aliasesInput.type=`text`,this._aliasesInput.id=`tag-aliases-input`,this._aliasesInput.className=`ns-input`,this._aliasesInput.placeholder=`e.g. table, study…`,this._aliasesInput.name=`poi-aliases`,this._aliasesInput.autocomplete=`off`,this._aliasesInput.enterKeyHint=`done`,E.append(D,this._aliasesInput),x.appendChild(E),this._warningBox=document.createElement(`div`),this._warningBox.id=`tag-walk-warning`,this._warningBox.className=`tag-warning-box hidden`,this._warningBox.setAttribute(`role`,`status`),this._warningBox.textContent=`Not on the floor map, a route will end at the nearest floor spot.`,x.appendChild(this._warningBox);let O=document.createElement(`div`);O.className=`ns-dialog-actions`,this._cancelBtn=document.createElement(`button`),this._cancelBtn.type=`button`,this._cancelBtn.className=`ns-btn ns-press`,this._cancelBtn.textContent=`Cancel`,this._cancelBtn.addEventListener(`click`,()=>this.closeForm()),this._saveBtn=document.createElement(`button`),this._saveBtn.type=`submit`,this._saveBtn.className=`ns-btn ns-btn-primary ns-press`,this._saveBtn.textContent=`Save`,O.append(this._cancelBtn,this._saveBtn),x.appendChild(O),b.appendChild(x),this._formOverlay.appendChild(b),this._root.appendChild(this._formOverlay),this._confirmOverlay=document.createElement(`div`),this._confirmOverlay.id=`tag-confirm-modal`,this._confirmOverlay.className=`ns-scrim tag-confirm-overlay hidden`;let k=document.createElement(`div`);k.className=`ns-dialog tag-confirm-card`,k.setAttribute(`role`,`alertdialog`),k.setAttribute(`aria-modal`,`true`),k.setAttribute(`aria-labelledby`,`tag-confirm-title`),this._confirmTitle=document.createElement(`h2`),this._confirmTitle.id=`tag-confirm-title`,this._confirmTitle.className=`ns-dialog-title`;let A=document.createElement(`div`);A.className=`ns-dialog-actions`,this._confirmCancelBtn=document.createElement(`button`),this._confirmCancelBtn.type=`button`,this._confirmCancelBtn.className=`ns-btn ns-press`,this._confirmCancelBtn.textContent=`Cancel`,this._confirmCancelBtn.addEventListener(`click`,()=>this._closeConfirm(!1)),this._confirmOkBtn=document.createElement(`button`),this._confirmOkBtn.type=`button`,this._confirmOkBtn.className=`ns-btn ns-btn-danger ns-press`,this._confirmOkBtn.addEventListener(`click`,()=>this._closeConfirm(!0)),A.append(this._confirmCancelBtn,this._confirmOkBtn),k.append(this._confirmTitle,A),this._confirmOverlay.appendChild(k),this._root.appendChild(this._confirmOverlay),this._keyOverlay=document.createElement(`div`),this._keyOverlay.id=`tag-key-modal`,this._keyOverlay.className=`ns-scrim tag-confirm-overlay hidden`;let j=document.createElement(`form`);j.className=`ns-dialog tag-confirm-card tag-key-card`,j.setAttribute(`role`,`dialog`),j.setAttribute(`aria-modal`,`true`),j.setAttribute(`aria-labelledby`,`tag-key-title`);let M=document.createElement(`h2`);M.id=`tag-key-title`,M.className=`ns-dialog-title`,M.textContent=`Owner key`;let N=document.createElement(`p`);N.className=`tag-key-note`,N.textContent=`Paste your GitHub key to save places to the live site. It stays in this browser only.`,this._keyInput=document.createElement(`input`),this._keyInput.type=`password`,this._keyInput.id=`tag-key-input`,this._keyInput.className=`ns-input`,this._keyInput.placeholder=`github_pat_…`,this._keyInput.autocomplete=`off`,this._keyInput.setAttribute(`aria-label`,`GitHub key`);let P=document.createElement(`div`);P.className=`ns-dialog-actions`;let F=document.createElement(`button`);F.type=`button`,F.className=`ns-btn ns-press`,F.textContent=`Cancel`,F.addEventListener(`click`,()=>this._closeKey(null));let I=document.createElement(`button`);I.type=`submit`,I.className=`ns-btn ns-btn-primary ns-press`,I.textContent=`Use key`,P.append(F,I),j.append(M,N,this._keyInput,P),j.addEventListener(`submit`,e=>{e.preventDefault();let t=this._keyInput.value.trim();t?this._closeKey(t):this._keyInput.focus()}),this._keyOverlay.appendChild(j),this._keyOverlay.addEventListener(`keydown`,e=>{a(j,e),e.key===`Escape`&&(e.preventDefault(),this._closeKey(null)),e.stopPropagation()}),this._keyOverlay.addEventListener(`click`,e=>{e.target===this._keyOverlay&&this._closeKey(null)}),this._root.appendChild(this._keyOverlay),this._syncKeyUi(),r.appendChild(this._root),window.addEventListener(`keydown`,e=>{this._formOverlay.classList.contains(`hidden`)||e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.closeForm())}),this._formOverlay.addEventListener(`keydown`,e=>{a(b,e),e.key===`Escape`&&(e.preventDefault(),this.closeForm()),e.stopPropagation()}),this._confirmOverlay.addEventListener(`keydown`,e=>{a(k,e),e.key===`Escape`&&(e.preventDefault(),this._closeConfirm(!1)),e.stopPropagation()}),this._formOverlay.addEventListener(`click`,e=>{e.target===this._formOverlay&&this.closeForm()}),this._confirmOverlay.addEventListener(`click`,e=>{e.target===this._confirmOverlay&&this._closeConfirm(!1)}),typeof ResizeObserver<`u`&&new ResizeObserver(()=>this._syncSheet()).observe(this._panel),this._phoneQuery?.addEventListener?.(`change`,()=>this._syncSheet()),this._syncSheet()}get isFormOpen(){return!this._formOverlay.classList.contains(`hidden`)||!this._confirmOverlay.classList.contains(`hidden`)}get adjustMode(){return this._adjust}get selectedPoi(){return this._pois.find(e=>e.poi_id===this._selectedId)??null}setAdjust(e){this._adjust!==e&&(this._adjust=e,e&&(document.exitPointerLock?.(),this._isPanelCollapsed&&this.toggleCollapse(),!this.selectedPoi&&this._pois.length>0&&(this._selectedId=this._pois[0].poi_id)),this._adjustSwitch.setAttribute(`aria-checked`,String(e)),this._panel.classList.toggle(`adjusting`,e),this._renderList(),this._onAdjustChange?.(e),this.showToast(e?`Adjust mode on: drag any tag to move it`:`Adjust mode off`))}toggleAdjust(){this.setAdjust(!this._adjust)}selectPoi(e){this._selectedId=e,this._renderList()}moveSelected(e,t){let n=this.selectedPoi;return n?this.movePoi(n,e,t):(this.showToast(`Pick a place in the list first`),null)}movePoi(e,t,n){this._selectedId=e.poi_id,e.position.x=Math.round(t*1e3)/1e3,e.position.z=Math.round(n*1e3)/1e3;let r=!this._isWalkable||this._isWalkable(t,n),i=this._setApproach(e);this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList();let a=r?``:i?` (routes end where you are standing)`:` (off the floor map, routes end at the nearest floor spot)`;return this.showToast(`Placed ${e.name}${a}`),e}_setApproach(e){let t=this._isWalkable??(()=>!0),n=r(e.position,this._getPose(),t);return n?e.approach=n:delete e.approach,n}async saveLive(){if(!this._saveConfig||this._saving)return;let e=p.get();if(!e){if(e=await this._askKey(),!e)return;p.set(e),this._syncKeyUi()}let t=this._pois.length;if(await this._confirm({title:`Save ${t} place${t===1?``:`s`} to the live site?`,confirmLabel:`Save to live`})){this._setSaving(!0);try{let n;try{n=await this._saveOnce(e,!1)}catch(r){if(!(r instanceof m&&r.conflict))throw r;if(this._setSaving(!1),!await this._confirm({title:`${r.message} Replace them with your ${t} place${t===1?``:`s`}?`,confirmLabel:`Replace live tags`,cancelLabel:`Keep live tags`})){this.showToast(`Not saved. Reload the page to see the live tags, then redo your change.`,6e3);return}this._setSaving(!0),n=await this._saveOnce(e,!0)}this.setManifestPois(this._pois,n.updatedAt),this._draftStore.save(this._pois),this.showToast(`Saved. The live site updates in about a minute.`,5e3)}catch(e){e instanceof m&&e.badToken?(p.clear(),this._syncKeyUi(),this.showToast(`${e.message} Press Save to enter the key again.`,6e3)):this.showToast(`Not saved: ${e instanceof Error?e.message:String(e)}`,6e3)}finally{this._setSaving(!1)}}}async getKey(){let e=p.get();if(!e){if(e=await this._askKey(),!e)return null;p.set(e),this._syncKeyUi()}return e}forgetKey(){p.clear(),this._syncKeyUi()}ask(e){return this._confirm(e)}_saveOnce(e,t){let n=this._liveBase===void 0?{}:{expectedBase:this._liveBase,force:t};return d(this._saveConfig,e,this._sceneId,this._pois,void 0,n)}async reconcileDraft(e,t,n){if(this.setManifestPois(e,t),this._rescueStranded(),n!==void 0&&n===t||e.length===0||u(this._pois,e)){this._draftStore.save(this._pois);return}let r=this._pois.length,i=e.length;await this._confirm({title:`The live site has tags saved after your browser draft (live: ${i} place${i===1?``:`s`}, draft: ${r}). Use the live tags?`,confirmLabel:`Use live tags`,cancelLabel:`Keep my draft`})?(this._pois=e.map(s),this._onPoisChange(this._pois),this._renderList(),this.showToast(`Loaded the live tags (${i} places)`)):this.showToast(`Kept your draft. Save to live will replace the live tags.`,5e3),this._draftStore.save(this._pois)}_rescueStranded(){if(!this._isInsideRoom)return;let e=l(this._pois,this._manifestPois,this._isInsideRoom);e.length!==0&&(this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),this.showToast(`Back inside the room: ${e.map(e=>e.name).join(`, `)}`,5e3))}_setSaving(e){this._saving=e,this._saveLiveBtn&&(this._saveLiveBtn.disabled=e,this._saveLiveBtn.textContent=e?`Saving…`:`Save to live`)}_syncKeyUi(){this._forgetKeyBtn?.classList.toggle(`hidden`,!p.get())}_askKey(){return this._keyResolve&&this._closeKey(null),document.exitPointerLock?.(),this._keyReturnFocus=document.activeElement,this._keyInput.value=``,this._keyOverlay.classList.remove(`hidden`),this._keyInput.focus(),new Promise(e=>{this._keyResolve=e})}_closeKey(e){if(this._keyOverlay.classList.contains(`hidden`))return;this._keyOverlay.classList.add(`hidden`),this._keyInput.value=``;let t=this._keyResolve;this._keyResolve=null,this._restoreFocus(this._keyReturnFocus),this._keyReturnFocus=null,t?.(e)}setManifestPois(e,t){this._manifestPois=e.map(s),t!==void 0&&(this._liveBase=t,this._draftStore.base=t)}setPois(e){this._pois=e,this._selectedId&&!e.some(e=>e.poi_id===this._selectedId)&&(this._selectedId=null),this._renderList()}toggleCollapse(){this._isPanelCollapsed=!this._isPanelCollapsed,this._panel.classList.toggle(`collapsed`,this._isPanelCollapsed),this._syncSheet()}showToast(e,t=3e3){let n=document.createElement(`div`);n.className=`tag-toast`,n.textContent=e,this._toastContainer.appendChild(n),setTimeout(()=>{n.classList.add(`fade-out`),setTimeout(()=>n.remove(),300)},t)}openAdd(){if(!this._confirmOverlay.classList.contains(`hidden`))return;document.exitPointerLock?.(),this._editingPoi=null,this._formTitle.textContent=`Add Place`,this._nameInput.value=``,this._categorySelect.value=this._lastCategory,this._aliasesInput.value=``;let e=this._getPose(),t=!this._isWalkable||this._isWalkable(e.x,e.z);this._warningBox.classList.toggle(`hidden`,t),this._showForm(),this._formReturnFocus=null,setTimeout(()=>this._nameInput.focus(),60)}openEdit(e){document.exitPointerLock?.(),this._editingPoi=e,this._formTitle.textContent=`Edit Place`,this._nameInput.value=e.name,this._categorySelect.value=e.category||`other`,this._aliasesInput.value=e.aliases?e.aliases.join(`, `):``;let t=!this._isWalkable||this._isWalkable(e.position.x,e.position.z);this._warningBox.classList.toggle(`hidden`,t),this._showForm(),setTimeout(()=>{this._nameInput.focus(),this._nameInput.select()},60)}closeForm(){this._formOverlay.classList.add(`hidden`),this._editingPoi=null,this._nameInput.blur(),this._aliasesInput.blur(),this._categorySelect.blur(),this._restoreFocus(this._formReturnFocus),this._formReturnFocus=null}_showForm(){this._formOverlay.classList.contains(`hidden`)&&(this._formReturnFocus=document.activeElement),this._formOverlay.classList.remove(`hidden`)}_confirm(e){return this._confirmResolve&&this._closeConfirm(!1),document.exitPointerLock?.(),this._confirmTitle.textContent=e.title,this._confirmOkBtn.textContent=e.confirmLabel,this._confirmCancelBtn.textContent=e.cancelLabel??`Cancel`,this._confirmReturnFocus=document.activeElement,this._confirmOverlay.classList.remove(`hidden`),this._confirmCancelBtn.focus(),new Promise(e=>{this._confirmResolve=e})}_closeConfirm(e){if(this._confirmOverlay.classList.contains(`hidden`))return;this._confirmOverlay.classList.add(`hidden`);let t=this._confirmResolve;this._confirmResolve=null,this._restoreFocus(this._confirmReturnFocus),this._confirmReturnFocus=null,t?.(e)}_restoreFocus(e){e&&e.isConnected&&e!==document.body&&e.tagName!==`CANVAS`&&e.focus()}_isPhone(){return!!this._phoneQuery?.matches}_onCollapseClick(){let e=this._isPhone()&&!!document.querySelector(g);e&&!this._panel.classList.contains(`peek-open`)?(this._panel.classList.add(`peek-open`),this._isPanelCollapsed&&this.toggleCollapse()):e?this._panel.classList.remove(`peek-open`):(this._panel.classList.remove(`peek-open`),this.toggleCollapse()),this._syncSheet()}_syncSheet(){document.querySelector(g)||this._panel.classList.remove(`peek-open`);let e=getComputedStyle(this._panelBody).display!==`none`;this._collapseBtn.setAttribute(`aria-expanded`,String(e)),this._panel.classList.toggle(`body-hidden`,!e);let t=this._isPhone()?`${Math.ceil(this._panel.getBoundingClientRect().height)+8}px`:`0px`;document.documentElement.style.setProperty(`--ns-sheet-h`,t)}_submitForm(){let e=this._nameInput.value.trim();if(!e){this._nameInput.focus();return}let t=this._categorySelect.value||`other`;this._lastCategory=t;let n=this._aliasesInput.value.split(`,`).map(e=>e.trim()).filter(Boolean);if(this._editingPoi){let r=this._editingPoi;r.name=e,r.category=t,r.aliases=n.length?n:void 0,this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),this.closeForm(),this.showToast(`Updated ${e}`)}else{let r=this._getPose(),a=Math.round(r.yaw*180/Math.PI),o=i(this._sceneId,e,r.x,r.z,{category:t,aliases:n.length?n:void 0,yaw_deg:a});this._pois.push(o),this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),this.closeForm(),this.showToast(`Added ${e}`)}}_renderList(){if(this._countBadge.textContent=`(${this._pois.length})`,this._adjustHint.classList.toggle(`hidden`,!this._adjust),this._adjustHint.textContent=`Drag a tag label in the view, or its dot on the map, to move it. Shift-click the floor to stand the picked tag on that exact spot (the ring shows where).`,this._poiListContainer.innerHTML=``,this._pois.length===0){let e=document.createElement(`div`);e.className=`tag-empty-notice`,e.textContent=`No places tagged yet. Press P to add one.`,this._poiListContainer.appendChild(e)}else this._pois.forEach(e=>{let n=document.createElement(`div`);n.className=`tag-poi-row`,this._adjust&&e.poi_id===this._selectedId&&(n.classList.add(`selected`),n.setAttribute(`aria-current`,`true`)),n.addEventListener(`click`,t=>{t.target.closest(`button`)||this.selectPoi(e.poi_id)});let r=document.createElement(`div`);r.className=`tag-poi-info`;let i=document.createElement(`div`);i.className=`tag-poi-name`,i.textContent=e.name;let a=document.createElement(`div`);a.className=`tag-poi-meta`;let o=document.createElement(`span`);o.className=`tag-poi-category`,o.textContent=e.category||`other`;let s=document.createElement(`span`);s.className=`tag-poi-pos ns-num`,s.textContent=`${e.position.x.toFixed(2)}, ${e.position.z.toFixed(2)}`,a.append(o,s),r.append(i,a);let c=document.createElement(`div`);c.className=`tag-poi-actions`;let l=document.createElement(`button`);l.className=`tag-icon-btn tag-action-btn ns-press`,l.title=`Edit place`,l.setAttribute(`aria-label`,`Edit ${e.name}`),l.innerHTML=t(`edit`,16),l.addEventListener(`click`,()=>{this.openEdit(e)});let u=document.createElement(`button`);u.className=`tag-icon-btn tag-action-btn ns-press`,u.title=`Move here (current position)`,u.setAttribute(`aria-label`,`Move ${e.name} here`),u.innerHTML=t(`target`,16),u.addEventListener(`click`,()=>{let t=this._getPose();e.position.x=Math.round(t.x*1e3)/1e3,e.position.z=Math.round(t.z*1e3)/1e3,e.yaw_deg=Math.round(t.yaw*180/Math.PI),this._setApproach(e);let n=!this._isWalkable||this._isWalkable(t.x,t.z);this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),n?this.showToast(`Moved ${e.name}`):this.showToast(`Moved ${e.name} (not on floor map)`)});let d=document.createElement(`button`);d.className=`tag-icon-btn tag-action-btn delete ns-press`,d.title=`Delete place`,d.setAttribute(`aria-label`,`Delete ${e.name}`),d.innerHTML=t(`trash`,16),d.addEventListener(`click`,()=>{this._confirm({title:`Delete "${e.name}"?`,confirmLabel:`Delete`}).then(t=>{t&&(this._pois=this._pois.filter(t=>t.poi_id!==e.poi_id),this._draftStore.save(this._pois),this._onPoisChange(this._pois),this._renderList(),this.showToast(`Deleted ${e.name}`))})}),c.append(l,u,d),n.append(r,c),this._poiListContainer.appendChild(n)})}_injectStyles(){if(document.getElementById(`namma-tag-ui-style`))return;let e=document.createElement(`style`);e.id=`namma-tag-ui-style`,e.textContent=h,document.head.appendChild(e)}};export{_ as TagUI};