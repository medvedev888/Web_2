<%@ page import="java.util.List" %>
<%@ page import="me.vladislav.web_2.Model.Point" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>web_2</title>
  <link rel="stylesheet" href="styles/styles.css" />
  <%--  подключение скриптов  --%>
  <script src="scripts/validation.js" defer></script>
  <script src="scripts/sendRequest.js" defer></script>
  <script src="scripts/graph.js" defer></script>
  <script>const ctx = "${pageContext.request.contextPath}"</script>
</head>
<body>
  <div class="container" id="header">
    <p class="group">P3218</p>
    <div class="name">
      <p>Medvedev Vladislav</p>
      <p>Aleksandrovich</p>
    </div>
    <div class="info">
      <p>Lab Work 2</p>
      <p>№var 1102</p>
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


      <div class="selection" id="selection_X">
        <label for="enter_X">Enter X:</label>
        <input
                type="text"
                id="enter_X"
                placeholder="should be in range[-3, 3]"
        />
      </div>
      <div class="hidden_notification" id="notificationX">
        <p id="text_notification_x">should be in range[-3, 3]</p>
      </div>

      <div class="selection" id="selection_Y">
        <p>Choose Y:</p>
        <label for="enter_Y">-4</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="-4" />
        <label for="enter_Y">-3</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="-3" />
        <label for="enter_Y">-2</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="-2" />
        <label for="enter_Y">-1</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="-1" />
        <label for="enter_Y">0</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="0" />
        <label for="enter_Y">1</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="1" />
        <label for="enter_Y">2</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="2" />
        <label for="enter_Y">3</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="3" />
        <label for="enter_Y">4</label>
        <input type="radio" class="enter_Y" name="enter_Y" value="4" />
      </div>
      <div class="hidden_notification" id="notificationY">
        <p id="text_notification_y">need to choose 1 number</p>
      </div>

      <div class="selection" id="selection_R">
        <p>Choose R:</p>
          <label for="enter_R">1</label>
          <input type="radio" class="enter_R" name="enter_R" id="enter_1" value="1" />
          <label for="enter_R">1.5</label>
          <input type="radio" class="enter_R" name="enter_R" id="enter_1.5" value="1.5" />
          <label for="enter_R">2</label>
          <input type="radio" class="enter_R" name="enter_R" id="enter_2" value="2" />
          <label for="enter_R">2.5</label>
          <input type="radio" class="enter_R" name="enter_R" id="enter_2.5" value="2.5" />
          <label for="enter_R">3</label>
          <input type="radio" class="enter_R" name="enter_R" id="enter_3" value="3" />
      </div>
      <div class="hidden_notification" id="notificationR">
        <p id="text_notification_r">need to choose 1 number</p>
      </div>
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
      <tbody id="result_table">
        <c:forEach var="point" items="${arrayPoint}">
          <tr>
            <!-- Получите значения X и Y для каждой точки -->
            <td>${point.x}</td>
            <td>${point.y}</td>
            <td>${point.r}</td>
            <td>${point.result}</td>
          </tr>
        </c:forEach>
      </tbody>
    </table>
  </div>
</body>
</html>