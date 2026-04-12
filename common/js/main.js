/**
 * 名前の音声読み上げ機能
 * @param {string} elementId - 読み上げるテキストが入った要素のID
 * @param {string} lang - 言語コード (default: 'de-DE')
 */
/**
 * 日本語の名前に最適化した音声読み上げ
 */
function speakName(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const text = element.innerText;
    const utterance = new SpeechSynthesisUtterance(text);

    // 言語を日本語に設定
    utterance.lang = 'ja-JP';

    // 日本語の発話として自然な速度とピッチ
    // 1.0だと少し速く（機械的に）聞こえるため、0.9程度が聞き取りやすいです
    utterance.rate = 0.9;
    utterance.pitch = 1.1; // わずかに高くすると明るい印象になります

    // ブラウザが持っている日本語音声の中で、より高品質なものを探す
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(voice =>
        voice.lang === 'ja-JP' && (voice.name.includes('Google') || voice.name.includes('O-ren'))
    ) || voices.find(voice => voice.lang === 'ja-JP');

    if (jaVoice) {
        utterance.voice = jaVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// 音声リストのロードを待つための処理（ブラウザ対策）
window.speechSynthesis.onvoiceschanged = () => {
    console.log("Voices loaded and ready.");
};

// 将来的にここにSNSアイコンの動的生成ロジックなどを追加可能
console.log("Digital Meishi System Initialized.");