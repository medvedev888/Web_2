<%@ page import="java.util.List" %>
<%@ page import="me.vladislav.web_2.Model.Point" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Result</title>
    <script src="scripts/result.js" defer></script>
    <script>const ctx = "${pageContext.request.contextPath}"</script>
</head>
<body>
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
            <c:forEach var="point" items="${arrayPoint}">
                <tr>
                    <!-- Получите значения X и Y для каждой точки -->
                    <td>${point.x}</td>
                    <td>${point.y}</td>
                    <td>${point.r}</td>
                    <td>${point.result}</td>
                    <td>${point.executedAt}</td>
                    <td>${point.executionTime}</td>
                </tr>
            </c:forEach>
        </table>
    </div>
    <div>
        <button class="button" id="goToMainPage" type="submit">Go to Main Page</button>

    </div>
</body>
</html>
