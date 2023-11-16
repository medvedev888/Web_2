package me.vladislav.web_2.Servlets;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    //for getting results
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String arrayPoint = request.getParameter("arrayPoint");
        response.getWriter().write(arrayPoint);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        final String ctx = this.getServletContext().getContextPath();
        //  System.out.println("Controller work");

        try {

            var x = Double.parseDouble(request.getParameter("x"));
            var y = Double.parseDouble(request.getParameter("y"));
            var r = Double.parseDouble(request.getParameter("r"));

            if(request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
                response.sendRedirect(ctx + "/areaCheck?" + "x=" + x + "&y=" + y + "&r=" + r);
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
            // return error page
        }

    }


}