<!DOCTYPE html>
<html>
<head>
  <title>GameEdge AI - Sensitivity Recommender</title>
  <style>
    body { font-family: Arial; padding: 20px; max-width: 600px; margin: auto; }
    .form-section { display: none; margin-top: 20px; }
    label { font-weight: bold; }
    textarea { width: 100%; height: 100px; margin-top: 10px; }
  </style>
</head>
<body>

<h1>Welcome to GameEdge AI</h1>
<p>Want the best sensitivity settings for your game? Answer a few quick questions and get your optimized settings within <strong>24 hours!</strong></p>
<button onclick="showForm()">Start Now</button>

<div class="form-section" id="questionForm">
  <h3>Tell us about your setup:</h3>

  <label>Which game do you play?</label><br>
  <select id="game">
    <option value="CODM">Call of Duty Mobile</option>
    <option value="BGMI">BGMI</option>
    <option value="BloodStrike">BloodStrike</option>
    <option value="Free Fire">Free Fire</option>
    <option value="Apex Legends Mobile">Apex Legends Mobile</option>
  </select><br><br>

  <label>Your playstyle:</label><br>
  <select id="style">
    <option value="Aggressive">Aggressive</option>
    <option value="Passive">Passive</option>
    <option value="Balanced">Balanced</option>
  </select><br><br>

  <label>Do you use gyroscope?</label><br>
  <select id="gyro">
    <option value="Full Gyroscope">Full Gyroscope</option>
    <option value="ADS Only">ADS Only</option>
    <option value="No Gyro">No Gyro</option>
  </select><br><br>

  <label>Device Model:</label><br>
  <input type="text" id="device" placeholder="e.g., Redmi Note 7 Pro"><br><br>

  <label>FPS and Refresh Rate:</label><br>
  <input type="text" id="fps" placeholder="e.g., 60 FPS / 60Hz"><br><br>

  <label>Claw Setup:</label><br>
  <select id="claw">
    <option value="2-Finger">2-Finger</option>
    <option value="3-Finger">3-Finger</option>
    <option value="4-Finger">4-Finger</option>
    <option value="5-Finger">5-Finger</option>
  </select><br><br>

  <button onclick="generatePrompt()">Submit</button>
</div>

<div id="output" style="margin-top: 30px;"></div>

<script>
  function showForm() {
    document.getElementById('questionForm').style.display = 'block';
  }

  function generatePrompt() {
    const game = document.getElementById('game').value;
    const style = document.getElementById('style').value;
    const gyro = document.getElementById('gyro').value;
    const device = document.getElementById('device').value;
    const fps = document.getElementById('fps').value;
    const claw = document.getElementById('claw').value;

    const prompt = `Suggest ideal sensitivity settings for ${game}. 
Playstyle: ${style}, 
Gyroscope: ${gyro}, 
Device: ${device}, 
FPS & Refresh Rate: ${fps}, 
Claw Setup: ${claw}.`;

    document.getElementById('output').innerHTML = `
      <h3>Prompt Generated:</h3>
      <p>Our team will process this and send your personalized sensitivity within <strong>24 hours</strong>.</p>
      <textarea readonly>${prompt}</textarea>
      <p><i>Tip: You can copy and use this with ChatGPT for an instant test, or wait for our personalized response.</i></p>
    `;
  }
</script>

</body>
</html>

