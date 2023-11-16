package me.vladislav.web_2.Model;

import java.util.Objects;

public class Point {
    private float x;
    private float y;
    private float r;
    private boolean result;

    public Point(float x, float y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = checkArea(x, y, r);
    }

    //function for getting result
    public boolean checkArea(float x, float y, float r){

        boolean result = false;
//        if($x >= 0 && $y >= 0 && (($x * $x + $y * $y) <= ($r * $r))) {
//            $ans = "true";
//        } else if($x >= 0 && $y <= 0 && $x <= $r && $y >= (-1) * $r) {
//            $ans = "true";
//        } else if($x <= 0 && $x >= -1 * ($r / 2) && $y <= 0 && $y >= -1 * $r && $y >= (-2 * $x) - $r){
//            $ans = "true";
//        }

        if(x >= 0 && y >= 0 && ((x * x + y * y) <= (r * r))) {
            result = true;
        } else if(x >= 0 && y <= 0 && x <= r && y >= (-1) * (r / 2)) {
            result = true;
        } else if(x <= 0 && x >= -1 * r && y <= 0 && y >= -1 * r && y >= (-1 * x) - r){
            result = true;
        }

        return result;
    }

    public float getX() {
        return x;
    }

    public float getY() {
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
        return Float.compare(point.x, x) == 0 && Float.compare(point.y, y) == 0 && Float.compare(point.r, r) == 0 && result == point.result;
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
