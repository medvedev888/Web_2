package me.vladislav.web_2;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(urlPatterns = "/controller")
public class ControllerServlet extends HttpServlet {
    private String message;


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        final String ctx = this.getServletContext().getContextPath();
//        response.setContentType("text/html");
//
//        final String redirect = request.getParameter("redirect");
//
//        PrintWriter out = response.getWriter();
//        out.println("<!DOCTYPE html>");
//        out.println("<html><body>");
//        out.println("<h1>" + redirect + "</h1>");
//        out.println("</body></html>");
    }

}