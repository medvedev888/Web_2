package me.vladislav.web_2.Servlets;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        final String ctx = this.getServletContext().getContextPath();
        System.out.println("Controller work" + "");

        var r = Double.parseDouble(request.getParameter("r"));

        try {

            var x = Double.parseDouble(request.getParameter("x"));
            var y = Double.parseDouble(request.getParameter("y"));
            if(request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
                response.sendRedirect(ctx + "/areaCheck?" + "x=" + x + "&y=" + y + "&r=" + r + "&getResultWithoutCoordinate=" + "0");
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.sendRedirect(ctx + "/areaCheck?" + "getResultWithoutCoordinate=" + "1" + "&r=" + r);
        }

    }


}