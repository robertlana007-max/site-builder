; GetToolNest NSIS installer hooks (bundle.windows.nsis.installerHooks in tauri.conf.json).
;
; Since 1.2 the app installs per user in %LOCALAPPDATA%\GetToolNest, so updates need no admin rights.
; Versions 1.0 and 1.1 installed per machine in Program Files. The first 1.2 install removes that old copy
; (its own uninstaller, silently) so there is only one app and one set of shortcuts. Removing it needs admin
; rights: this is the only time Windows asks (one UAC prompt), and only when the old copy exists.

!macro NSIS_HOOK_PREINSTALL
  Push $R5
  Push $R6
  Push $R7
  Push $R9

  ; where the per-machine copy is: its uninstall key (64-bit registry view, set by the installer), else Program Files
  StrCpy $R9 ""
  ReadRegStr $R9 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${PRODUCTNAME}" "InstallLocation"
  ${If} $R9 != ""
    ; the value is written with quotes: "C:\Program Files\GetToolNest"
    StrCpy $R7 $R9 1
    ${If} $R7 == '"'
      StrCpy $R9 $R9 "" 1
      StrCpy $R9 $R9 -1
    ${EndIf}
  ${EndIf}
  ${If} $R9 == ""
  ${OrIfNot} ${FileExists} "$R9\uninstall.exe"
    StrCpy $R9 ""
    ${If} ${FileExists} "$PROGRAMFILES64\${PRODUCTNAME}\uninstall.exe"
      StrCpy $R9 "$PROGRAMFILES64\${PRODUCTNAME}"
    ${ElseIf} ${FileExists} "$PROGRAMFILES\${PRODUCTNAME}\uninstall.exe"
      StrCpy $R9 "$PROGRAMFILES\${PRODUCTNAME}"
    ${EndIf}
  ${EndIf}

  ; never remove the folder this installer is installing to
  ${If} $R9 != ""
  ${AndIf} $R9 != $INSTDIR
    DetailPrint "Removing the older GetToolNest installed for all users in $R9"
    ; one elevated cmd: run the old uninstaller silently in place (_?= so it does not copy itself and return at
    ; once), then delete what is left of the folder. The old uninstaller removes its all-users shortcuts itself.
    ExecShellWait "runas" "$SYSDIR\cmd.exe" '/c ""$R9\uninstall.exe" /S _?=$R9 & rd /s /q "$R9""' SW_HIDE
  ${EndIf}

  ; shortcuts of this user that still point into Program Files (old copy): remove them, the installer adds new ones
  StrCpy $R6 "$PROGRAMFILES64\${PRODUCTNAME}\${MAINBINARYNAME}.exe"
  StrCpy $R5 "$PROGRAMFILES\${PRODUCTNAME}\${MAINBINARYNAME}.exe"
  !insertmacro GtnDeleteOldShortcut "$DESKTOP\${PRODUCTNAME}.lnk"
  !insertmacro GtnDeleteOldShortcut "$SMPROGRAMS\${PRODUCTNAME}.lnk"
  !insertmacro GtnDeleteOldShortcut "$SMPROGRAMS\${PRODUCTNAME}\${PRODUCTNAME}.lnk"

  Pop $R9
  Pop $R7
  Pop $R6
  Pop $R5
!macroend

; Deletes a shortcut when it points to the old Program Files copy ($R6 or $R5).
!macro GtnDeleteOldShortcut lnk
  ${If} ${FileExists} "${lnk}"
    !insertmacro IsShortcutTarget "${lnk}" "$R6"
    Pop $0
    ${If} $0 <> 1
      !insertmacro IsShortcutTarget "${lnk}" "$R5"
      Pop $0
    ${EndIf}
    ${If} $0 = 1
      Delete "${lnk}"
    ${EndIf}
  ${EndIf}
!macroend
