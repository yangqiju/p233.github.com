---
layout: post
categories: Uncategorised
title: 开始在 Github 上写博客
---
纪念刚刚过去的 2012 年，展望 2013，开始用时下流行的 Jekyll 在 Github 上写博客，积累经验，深度思考，期望在新的一年取得更好的成绩。

网络上关于 Jekyll 的文章已经非常详细了，在这里附上一点使用 Jekyll 的经验心得，也许能方便刚刚开始接触 Jekyll 的同学。

1. 门槛：需要理解 Github 的工作方式，熟悉 Github 客户端，熟悉 Html 与 Css；
2. 不妨一边写静态模板，一边了解 Jekyll 布局所用到的 <a href="https://github.com/mojombo/jekyll/wiki/Liquid-Extensions" target="_blank">Liquid Tag</a>，磨刀不误砍柴工；
3. Jekyll 博客，其实是一套文件结构，然后通过 Jekyll 程序（无图形操作界面）生成静态网站。如果不熟悉命令，完全可以不安装 Jekyll，只需按照<a href="https://github.com/mojombo/jekyll/wiki/usage" target="_blank">要求的格式</a>创建文件后再上传到 Github，访问主页就可以了，因为 Github Pages 已经包含了 Jekyll，或者直接使用 <a href="http://jekyllbootstrap.com" target="_blank">Jekyll-Bootstrap</a> 的结构；
4. Jekyll 的文件结构大概可以这样分：配置文件（\_config.yml），布局文件（\_layouts/），模块文件（\_includes/），插件（\_plugin/），文章（\_posts/），其他文件（不以*下划线*开头的文件及文件夹都会完整的拷贝到生成的静态网站中，比如 css 文件、图片等），以及生成的网站（\_site/，本地调试用，不必上传到 Github）；
5. 本地安装 Jekyll 后，先用 `cd` 命令打开目标文件夹，然后输入 `jekyll --server`，即可生成静态网站，上传通过 Github 客户端即可，不熟悉命令就尽量少用命令吧。

### New Jekyll Post -- an Alfred Extension (Mac OS)
一个简单的 Alfred Extension 帮助快速创建一篇 Jekyll 文章。下载后双击安装，在 Alfred 管理面板中右键选择 “Show in Finder”，打开 new_post.rb 文件，然后添加你自己的 \_posts 文件夹路径，格式必须以 `/Users/user_name/` 开头。创建新文章时，在 Alfred 中输入 `post` 与文件名，文件名中的空格请用 `-` 代替。

[点击下载](/download/New_Jekyll_Post.alfredextension)