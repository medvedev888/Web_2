package me.vladislav.web_2.Model;

import java.util.Objects;

public class Point {
    private float x;
    private int y;
    private float r;
    private boolean result;

    public Point(float x, int y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;

        // написать функцию для подсчета результата
        if(x == 0) {
            this.result = true;
        }
        else {
            this.result = false;
        }

    }

    public float getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public boolean isResult() {
        return result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Point point = (Point) o;
        return Float.compare(point.x, x) == 0 && y == point.y && Float.compare(point.r, r) == 0 && result == point.result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, result);
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                '}';
    }
}
