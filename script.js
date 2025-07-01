function estimate() {
  const link = document.getElementById("reelInput").value;
  const randomViews = Math.floor(Math.random() * 1000000); // fake views
  const cpm = 1.5; // ₹ per 1000 views
  const earnings = (randomViews / 1000) * cpm;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>📈 Estimated Views: <strong>${randomViews.toLocaleString()}</strong></p>
    <p>💰 Potential Revenue: <strong>₹${earnings.toFixed(2)}</strong></p>
    <p>🧠 You might be missing out on ₹${earnings.toFixed(2)} by not monetizing this reel.</p>
  `;
}
