/*
 * @Author: hy 
 * @Date: 2018-12-02 19:13:46 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-02 19:37:40
 */


var gulp = require("gulp");
var sass = require("gulp-sass");
var minCss = require("gulp-clean-css");
var server = require("gulp-webserver");

var url = require("url");
var fs = require("fs");
var path = require("path");

//查询压缩
gulp.task("devScss", function() {
        return gulp.src("./src/scss/*.scss")
            .pipe(sass())
            .pipe(minCss())
            .pipe(gulp.dest("./src/css"))
    })
    //监听
gulp.task("watch", function() {
        return gulp.watch("./src/scss/*.scss", gulp.series("devScss"));

    })
    //起服务
gulp.task("server", function() {
    return gulp.src("src/")
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === "/favicon.ico") {
                    rea.end(" ");
                    return

                }
                if (pathname === "api/swiper") { // /api/swiper


                } else { //读文件
                    pathname = pathname === "/" ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));

                }



            }

        }))

})




//开发环境
gulp.task("dev", gulp.series("devScss", "watch"))