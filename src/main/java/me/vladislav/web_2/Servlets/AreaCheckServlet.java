package me.vladislav.web_2.Servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import me.vladislav.web_2.Model.Point;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@WebServlet("/areaCheck")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // System.out.println("AreaCheck work");

        final long startExecute = System.nanoTime();

        String str_x = request.getParameter("x");
        String str_y = request.getParameter("y");
        String str_r = request.getParameter("r");

        final double x;
        final double y;
        final double r;

        try {
            x = Double.parseDouble(str_x);
            y = Double.parseDouble(str_y);
            r = Double.parseDouble(str_r);
        } catch (NumberFormatException | NullPointerException e) {
            response.sendError(400);
            return;
        }

        // formation of an array of points
        ServletContext servletContext = request.getServletContext();

        Point point = new Point(x, y, r);

        // Calculate execution time and time when the job was completed
        final long endExecute = System.nanoTime();
        final long executionTime = endExecute - startExecute;
        final LocalDateTime executedAt = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String dateTimeString = executedAt.format(formatter);

        point.setExecutionTime(executionTime);
        point.setExecutedAt(dateTimeString);

        var arrayPoint = (List<Point>) getServletContext().getAttribute("arrayPoint");

        if(arrayPoint == null){
            arrayPoint = new ArrayList<Point>();
            servletContext.setAttribute("arrayPoint", arrayPoint);
        }

        arrayPoint.add(0, point);

        // Making JSON
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(arrayPoint);

        // Setting ContentType and CharacterEncoding
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // sending reply
        response.getWriter().write(json);

    }
}
