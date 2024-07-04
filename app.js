document.addEventListener('DOMContentLoaded', (event) => {
    let clickCount = 0;
    const maxClicks = 1000;
    const resetTime = 1800; // 30 dakika (saniye cinsinden)
    let lastResetTime = Date.now();

    const clickButton = document.getElementById('clickButton');
    const clickCountText = document.getElementById('clickCount');
    const remainingClicksText = document.getElementById('remainingClicks');
    const resetTimerText = document.getElementById('resetTimer');

    clickButton.addEventListener('click', () => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - lastResetTime) / 1000;

        if (elapsedTime > resetTime) {
            clickCount = 0;
            lastResetTime = currentTime;
        }

        clickCount++;
        if (clickCount >= maxClicks) {
            alert("Tebrikler, 1000 tıklamaya ulaştınız!");
            clickCount = 0;
            lastResetTime = currentTime;
        }

        const remainingClicks = maxClicks - clickCount;
        clickCountText.textContent = `Tıklama sayısı: ${clickCount}`;
        remainingClicksText.textContent = `1000 tıklamaya ulaşmak için kalan tıklama: ${remainingClicks}`;
    });

    setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - lastResetTime) / 1000;
        const remainingTime = resetTime - elapsedTime;

        if (remainingTime > 0) {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = Math.floor(remainingTime % 60);
            resetTimerText.textContent = `Kalan süre: ${minutes} dakika ${seconds} saniye.`;
        } else {
            resetTimerText.textContent = "Tıklama süresi sıfırlandı.";
        }
    }, 1000);
});
