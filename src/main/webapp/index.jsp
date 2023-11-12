<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>web_1</title>
  <link rel="stylesheet" href="styles/styles.css" />
  <script src="index.js" defer></script>
</head>
<body>
<div class="container" id="header">
  <p class="group">P3218</p>
  <div class="name">
    <p>Medvedev Vladislav</p>
    <p>Aleksandrovich</p>
  </div>
  <div class="info">
    <p>Lab Work 1</p>
    <p>№var 2808</p>
  </div>
</div>
<div class="container" id="graph">
  <p>Graph</p>
  <canvas id="canvas_graph_grid" width="450" height="450"></canvas>
  <canvas id="canvas_graph_figures" width="450" height="450"></canvas>
</div>
<div class="container" id="parameters">
  <p>Enter parameters</p>
  <p>(Every parameter should be filled!):</p>

  <form>
    <div class="selection" id="selection_X">
      <label for="enter_X">-5</label>
      <input type="radio" class="enter_X" name="enter_X" value="-5" />
      <label for="enter_X">-4</label>
      <input type="radio" class="enter_X" name="enter_X" value="-4" />
      <label for="enter_X">-3</label>
      <input type="radio" class="enter_X" name="enter_X" value="-3" />
      <label for="enter_X">-2</label>
      <input type="radio" class="enter_X" name="enter_X" value="-2" />
      <label for="enter_X">-1</label>
      <input type="radio" class="enter_X" name="enter_X" value="-1" />
      <label for="enter_X">0</label>
      <input type="radio" class="enter_X" name="enter_X" value="0" />
      <label for="enter_X">1</label>
      <input type="radio" class="enter_X" name="enter_X" value="1" />
      <label for="enter_X">2</label>
      <input type="radio" class="enter_X" name="enter_X" value="2" />
      <label for="enter_X">3</label>
      <input type="radio" class="enter_X" name="enter_X" value="3" />
    </div>
    <div class="hidden_notification" id="notificationX">
      <p id="text_notification_x">need to choose 1 number</p>
    </div>

    <div class="selection" id="selection_Y">
      <label for="enter_Y">Enter Y:</label>
      <input
              type="text"
              id="enter_Y"
              placeholder="should be in range[-3, 3]"
      />
    </div>
    <div class="hidden_notification" id="notificationY">
      <p id="text_notification_y">should be in range[-3, 3]</p>
    </div>
    <div class="selection" id="selection_R">
      <p>Choose R:</p>
      <label for="enter_R">1</label>
      <input type="checkbox" class="enter_R" id="enter_1" value="1" />
      <label for="enter_R">1.5</label>
      <input type="checkbox" class="enter_R" id="enter_1.5" value="1.5" />
      <label for="enter_R">2</label>
      <input type="checkbox" class="enter_R" id="enter_2" value="2" />
      <label for="enter_R">2.5</label>
      <input type="checkbox" class="enter_R" id="enter_2.5" value="2.5" />
      <label for="enter_R">3</label>
      <input type="checkbox" class="enter_R" id="enter_3" value="3" />
    </div>
    <div class="hidden_notification" id="notificationR">
      <p id="text_notification_r">need to choose 1 number</p>
    </div>
  </form>
  <div>
    <button class="button" id="submit_button" type="submit">Submit</button>
  </div>
</div>
<div class="container" id="table">
  <table>
    <thead>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>R</td>
      <td>Result</td>
      <td>Executed at</td>
      <td>Execution time</td>
    </tr>
    </thead>
    <tbody id="result_table"></tbody>
  </table>
</div>
</body>
</html>