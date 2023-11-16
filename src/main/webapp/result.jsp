<%@ page import="java.util.List" %>
<%@ page import="me.vladislav.web_2.Model.Point" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Result (web 2)</title>
    <link rel="stylesheet" href="styles/result-style.css" />
    <script src="scripts/result.js" defer></script>
    <script>const ctx = "${pageContext.request.contextPath}"</script>
</head>
<body>
    <div class="container" id="containerTable">
        <table id="table">
            <thead>
                <tr id="mainStringInTable">
                    <td>X</td>
                    <td>Y</td>
                    <td>R</td>
                    <td>Result</td>
                    <td>Executed at</td>
                    <td>Execution time</td>
                </tr>
            </thead>
                <tbody>
                    <c:forEach var="point" items="${arrayPoint}">
                        <tr id="stringOfData">
                            <td>${point.x}</td>
                            <td>${point.y}</td>
                            <td>${point.r}</td>
                            <td>${point.result}</td>
                            <td>${point.executedAt}</td>
                            <td>${point.executionTime}</td>
                        </tr>
                    </c:forEach>
                </tbody>
        </table>
        <div>
            <button class="button" id="goToMainPage" type="submit">Go to Main Page</button>
        </div>
    </div>
</body>
</html>
