
function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', gradientIn);
    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientIn(e) {
        let percent = e.offsetX / (e.target.clientWidth);
        percent = Math.floor(percent * 100);
        document.getElementById('result').textContent = `${percent}%`;
    }

    function gradientOut() {
        document.getElementById('result').textContent = '';
    }
}