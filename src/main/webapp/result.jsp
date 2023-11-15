<%@ page import="java.util.List" %>
<%@ page import="me.vladislav.web_2.Model.Point" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Result</title>
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
                </tr>
            </c:forEach>
        </table>
    </div>
</body>
</html>
