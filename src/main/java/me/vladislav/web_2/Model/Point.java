package me.vladislav.web_2.Model;

import java.time.LocalDateTime;
import java.util.Objects;

public class Point {
    private final double x;
    private final double y;
    private final double r;
    private final boolean result;
    private String executionTime;
    private String executedAt;

    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = checkArea(x, y, r);
    }

    //function for getting result
    public boolean checkArea(double x, double y, double r){

        boolean result = false;

        if(x >= 0 && y >= 0 && ((x * x + y * y) <= (r * r))) {
            result = true;
        } else if(x >= 0 && y <= 0 && x <= r && y >= (-1) * (r / 2)) {
            result = true;
        } else if(x <= 0 && x >= -1 * r && y <= 0 && y >= -1 * r && y >= (-1 * x) - r){
            result = true;
        }

        return result;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isResult() {
        return result;
    }

    public String getExecutionTime() {
        return executionTime;
    }

    public String getExecutedAt() {
        return executedAt;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = Long.toString(executionTime) + "mc";
    }

    public void setExecutedAt(String executedAt) {
        this.executedAt = executedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Point point = (Point) o;
        return Double.compare(point.x, x) == 0 && Double.compare(point.y, y) == 0 && Double.compare(point.r, r) == 0 && result == point.result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, result, executionTime, executedAt);
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                ", executionTime=" + executionTime +
                ", executedAt=" + executedAt +
                '}';
    }

}
