---
layout: post
categories: Mac_OS
title: 用 Dropbox 同步 Mac 软件设置
---
常常在台式机与笔记本电脑之间切换着工作，通过 Dropbox 同步文件很方便，偶尔会想到如果软件设置也可以同步就更美妙了。某个周末花了些时间搜集、整理了一些方法，在此分享出来。不必非用 Dropbox 不可，Google Drive 等类似服务应该也可以，只是一直使用 Dropbox 比较熟悉。如果不想麻烦，可以试试 <a href="http://joeworkman.net/blog/post-9591023714" target="_blank">DropboxAppSync</a> 这款软件，和下面介绍到的原理是一样的，都是通过创建 symlink 将设置文件链接到 Dropbox。

### 同步 Sublime Text 2
Sublime Text 2 所有的设置文件、插件都存放在 Packages 文件夹下，这是一项非常重要的设定，因为 Mac OS, Windows, Linux 三个平台之间因此可以相互同步，并且包括所有的插件！以下仅以 Mac OS 做介绍。

1. 关闭 Sublime Text 2；
2. 在要同步的主机上找到 Sublime Text 2 的 packages 文件夹（路径：`~/Library/Application Support/Sublime Text 2/`），将其移动到 Dropbox 文件夹内，例如 `~/Dropbox/Sync/Packages`；
3. 启动 Terminal，输入 `cd ~/Library/Application\ Support/Sublime\ Text\ 2/` 打开目标文件夹（空格前要加 `\`），然后输入 `ln -s ~/Dropbox/Sync/Packages` 创建一个 symlink 将 Dropbox 下的 Packages 文件夹链接到当前目录，Windows 下创建 symlink 的命令请看<a href="http://technet.microsoft.com/en-us/library/cc753194(v=ws.10).aspx" target="_blank">这里</a>；
4. 在第二台机器上，关闭 Sublime Text 2，找到 packages 文件夹并将其删除，然后重复步骤 3 中的命令。

### 同步其他软件
Mac OS 下软件的设置文件都会以 .plist 的格式保存在 `~/Library/Preferences/` 下，只要给这些文件创建 symlink 就可以完成同步。有些软件除了 .plist 外，还会在 `~/Libray/Application Support/` 下创建文件夹存储额外的设置，比如 Alfred 会创建一个文件夹存储 extensions，TextMate 会创建一个文件夹存储 Bundles 与 Themes，给这些文件夹创建 symlink 可以完成更彻底的同步。*但是，并不是所有的软件都允许同步这些文件夹*，有些软件会删除 symlink 重新写入文件，而不是按照 symlink 找到位于 Dropbox 下的文件。已经同步的软件如果更新，则不会影响到 symlink。

### 同步 Mac OS Keychain
除了软件设置外，Mac OS 还有一样可以同步，就是 Keychain。如果你的两台 Mac 之间经常共用一套密码，同步 Keychain 会是一个很不错的选择，即便不是，把 Keychain 存储到 Dropbox 重装新系统也会保留这些密码。此外，FTP 软件普遍将登陆信息存储进 Keychain，只同步 .plist 文件是没有效果的，一定要同步 Keychain。

同步方法：将 `~/Library/Keychains/` 下的 login.keychain 文件移动到 Dropbox 文件夹下；启动 Keychain Access，选择 File > Add Keychain…，然后添加位于 Dropbox 下的 login.keychain 文件；在第二台电脑上删除本地的 login.keychain 文件，然后重复 File > Add Keychain…。同步 Keychain 后，重启电脑偶尔会被要求输入密码，验证 Keychain 的管理权限。

**最后，不要在两台电脑上同时运行同步的软件，会因为文件冲而突丢失设置。**