/**
 * 名前の音声読み上げ機能
 * @param {string} elementId - 読み上げるテキストが入った要素のID
 * @param {string} lang - 言語コード (default: 'de-DE')
 */
function speakName(elementId, lang = 'de-DE') {
    const element = document.getElementById(elementId);
    if (!element) return;

    const text = element.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = lang;
    utterance.rate = 0.85; 
    utterance.pitch = 1.0;

    // 重複再生を防止して再生
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// 将来的にここにSNSアイコンの動的生成ロジックなどを追加可能
console.log("Digital Meishi System Initialized.");