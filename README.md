# fd-grunt-stylus
Compile stylus to css

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

## 编译规则

* 默认每个stylus文件都会编译成css文件，除非在头部注释中出现"!!cmd:stylusbuild=false"字样
* 编译出来的css文件头中会加入“compile by stylus”
* 名为"merge.styl"的styl文件会直接复制里面的内容，生成为merge.css


## The "fd_grunt_stylus" task

### Overview
In your project's Gruntfile, add a section named `fd_grunt_stylus` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fd_grunt_stylus: {
  }
})
```

### Options

#### options.compress
Type: `Boolean`
Default value: `false`

编译出来的css是否压缩

#### options.charset
type: `Object`
structure: 

```
{
    form:"gbk",//源文件编码
    to:"gbk"//目标文件编码
}
```
文件编码,默认均为'gbk'

### options.files
type: `Array`
structure:

```
[{
    src:"styl/**/*.styl",//源文件目录与后缀
    dest:"css/**/*.css"//目标文件目录与后缀
}]
```

### Usage Examples

#### Default Options
```js
fd_grunt_stylus: {
    compile: {
        options: {
            compress: false,
            charset:{
                from:"utf-8",
                to:"utf-8"
            }
        },
        files: [{
            src:"styl/**/*.styl",
            dest:"css/**/*.css"
        }]
    }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
