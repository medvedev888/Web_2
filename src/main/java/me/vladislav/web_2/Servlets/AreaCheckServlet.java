package me.vladislav.web_2.Servlets;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import me.vladislav.web_2.Model.Point;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@WebServlet("/areaCheck")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("AreaCheck work");

        System.out.println(request.getParameter("x"));

        var x = Float.parseFloat(request.getParameter("x"));
        var y = Integer.parseInt(request.getParameter("y"));
        var r = Float.parseFloat(request.getParameter("r"));

        ServletContext selvletContext = getServletContext();


        Point point = new Point(x, y, r);
        var arrayPoint = (List<Point>) getServletContext().getAttribute("arrayPoint");

        if(arrayPoint == null){
            arrayPoint = new ArrayList<Point>();
            selvletContext.setAttribute("arrayPoint", arrayPoint);
        }
        arrayPoint.add(point);

    }
}
