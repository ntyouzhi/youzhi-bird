# 鸟类观察

独立入口 `index.html`，包含丹顶鹤、绿头鸭、老鹰。点击鸟名切换；默认连续播放，支持暂停、复位、速度、动作节点和三个观察角度。每次仅加载当前鸟类。

将本目录内的全部文件和子目录上传到一个 GitHub 仓库根目录。在仓库 Settings → Pages 中选择从分支部署、对应分支和根目录。保留 `.nojekyll`；页面和所有资源使用相对路径，支持 GitHub Pages 的项目子路径。无需安装依赖或构建。

动画文件采用无损字节重排、gzip 压缩，并拆分为不超过24 MiB的文件；网页按顺序读取并解压。分块文件必须完整上传，不需要合并。此处理不会降低模型精度或改变动作。仅包含当前演示需要的模型、贴图和运行文件，不包含历史版本、Blender 原文件和临时导出数据。

当前发布目录约984 MB（938 MiB），所有文件不超过24 MiB。已逐帧验证无损还原，并核对网格文件与原演示一致。分块大小适配 [GitHub 文件限制](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)，整个目录小于 [GitHub Pages 的1 GB站点上限](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)。

Three.js 的 MIT 许可保留在 `vendor/LICENSE`。三种鸟的素材由用户提供，授权范围以素材购买时的条款为准。

本地版完整解压后，双击 `启动鸟类观察.cmd` 即可自动打开浏览器。自带 Windows 64 位运行环境，无需安装 Python、无需联网。不要只复制 HTML 或启动文件；保持整个目录完整。关闭页面后，本地服务约三分钟后自动结束。

进入每只鸟时先加载约1秒的轻量循环预览，模型可操作后再在后台下载并接管完整连续动画；状态区会显示完整动画准备进度。大型网格、贴图和动画分块使用 Cache Storage 与 Service Worker 按访问缓存，再次观察同一只鸟时不再重复从网络下载这些大文件，但仍需短暂解压和重建模型。浏览器若因空间不足拒绝持久缓存，页面会自动回退为普通网络加载。

支持具有 WebGL 和 DecompressionStream 的现代浏览器。首次加载大型鸟类动画需要等待资源传输完成。页面署名：vibe coding有志青年。

生成工具位于原项目 `tools/package-bird-observation.py`。原有独立观察网页与模型文件均保留。
