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
        System.out.println("Controller work");

        try {

            var x = Float.parseFloat(request.getParameter("x"));
            var y = Integer.parseInt(request.getParameter("y"));
            var r = Float.parseFloat(request.getParameter("r"));

            if(request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
                System.out.println("not null)");
                response.sendRedirect(ctx + "/areaCheck?" + "x=" + x + "&y=" + y + "&r=" + r);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            // возврат error page
        }


    }


}