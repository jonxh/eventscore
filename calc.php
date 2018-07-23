<html>
  <head>
    <title>Event Score</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>

    <div id="header">
      <h1 style="text-align:center;">Event Score Calculator</h1><hr>
    </div>

    <div style="text-align:center;" id="form">
      <select id="events">
        <option value="333">3x3x3</option>
        <option value="444">4x4x4</option>
        <option value="555">5x5x5</option>
        <option value="666">6x6x6</option>
        <option value="777">7x7x7</option>
        <option value="333oh">3x3x3 OH</option>
      </select>
      <input type="text" id="time">
      <input type="button" onclick="limit()" value="Calculate">
    </div><hr>

    <div id="results">
      Results will show up here.
    </div>

  </body>
</html>
