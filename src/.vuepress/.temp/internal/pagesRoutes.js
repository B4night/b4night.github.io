export const pagesRoutes = [
  ["v-8daa1a0e","/",{"y":"h","t":"Blog Home","i":"home"},["/README.md"]],
  ["v-184f4da6","/intro.html",{"d":1707046631000,"e":"\n<p>This is B4night and that nick name comes from <code>dead poets society</code>. It means before(b4) night which reminds me to cherish time.</p>\n<h1>Work Experience</h1>\n<p>I am a senior student and I am gonna graduate at June 2024. I have several internships and that covers 3 hardcore fields. I worked as hardware intern, Linux Cpp intern and Linux Kernel Quality Engineer Intern. As a result, I am familiar with Linux and switched my main machine from Win to Fedora38.</p>","r":{"minutes":0.38,"words":115},"y":"a","t":"Bio","i":"circle-info"},[":md"]],
  ["v-99340306","/posts/1.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>We need to download <code>trasmission</code> first to download from a <code>.torrent</code> file.</p>\n<p>We use <code>transmission-gtk</code> to invoke the app and then choose <code>.torrent</code> fine. Then the doanload begins.</p>\n","r":{"minutes":0.17,"words":50},"y":"a","t":"Download `.torrent` file under Fedora"},[":md"]],
  ["v-5eac0c7a","/posts/Fedora_set_display_scale_150_percent(gnome).html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>The default display options are <code>100%, 200%, 300%</code>. It’s awkward because some people might want to customize the display scale.</p>\n<p>There’s an easy way to customize the display scale: with the help of <code>gnome-tweaks</code> .</p>\n<ol>\n<li><code>dnf search gnome-tweaks</code></li>\n<li>find the right version and <code>sudo dnf install</code></li>\n<li>open <code>tweaks</code></li>\n<li>At the <code>font</code> section, there is a <code>Scaling Factor</code> button. Set <code>1.5</code> to set the display scale to <code>150%</code>.</li>\n<li>(Caution), set the display scale <code>100%</code> before changing the <code>Scaling Factor</code> in step 4.</li>\n</ol>","r":{"minutes":0.41,"words":124},"y":"a","t":"Fedora set display scale 150 percent(gnome)"},[":md"]],
  ["v-c4eff4b6","/posts/Git_switch_branches_with_modified_files.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>I have to switch between different branches to develop, so that there is a problem that some times I don’t want to use <code>git add</code> to track modified too early and I have to switch another branch.</p>\n<p>So the error comes out: another branch would have the same modified files.</p>\n<p>E.g.: Currently I am at branch A, with modified files that are not added yet. I have to switch to branch B.</p>","r":{"minutes":0.45,"words":135},"y":"a","t":"Git switch branches with modified files"},[":md"]],
  ["v-329fbe4e","/posts/Joplin_exits_full_screen_in_Linux.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>Today I maximized joplin when I was using it. But when I wanted to change the options, I used <code>f11</code> to exit full screen. However, <code>f11</code> is bonded to another feature, so that I can’t use it to exit.</p>\n<p>Here is the solution.</p>\n<ol>\n<li>Find the file <code>window-state-prod.json </code>Use the command <code>find / -name \"window-state-prod.json</code></li>\n<li>Edit the json file and set <code>isFullScreen</code> to <code>false</code></li>\n</ol>","r":{"minutes":0.31,"words":93},"y":"a","t":"Joplin exits full screen in Linux"},[":md"]],
  ["v-599a940f","/posts/Linux_Trick__Create_desktop_entries_for_apps.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>System: Fedora 39 workstation</p>\n<p>It’s always a problem for me that some apps I downloaded can not be recognized by <code>control</code> and extension <code>search light</code> . So it’s necessary to create separate entries for those unrecognized apps.</p>\n<p>The procedures are as follows:</p>","r":{"minutes":0.37,"words":112},"y":"a","t":"Linux Trick: Create desktop entries for apps"},["/posts/Linux_Trick:_Create_desktop_entries_for_apps.html","/posts/Linux_Trick:_Create_desktop_entries_for_apps.md"]],
  ["v-2e5886cd","/posts/Open_folder_at_terminal._Linux.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>The commend we need to use today is <code>xdg-open</code> .</p>\n<p>Below is a brief description:</p>\n<blockquote>\n<p><strong>DESCRIPTION</strong><br>\nxdg-open opens a file or URL in the user’s preferred application. If a URL is provided the URL will be opened in the user’s preferred web browser. If a file is provided the file will be opened in the preferred<br>\napplication for files of that type. xdg-open supports file, ftp, http and https URLs.\\ <br>xdg-open is for use inside a desktop session only. It is not recommended to use xdg-open as root.</p>\n</blockquote>","r":{"minutes":0.6,"words":179},"y":"a","t":"Open folder at terminal. Linux"},[":md"]],
  ["v-26b2d5d6","/posts/Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal_.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>Today I ran into an awkward situation. I am in China right now and I need proxy to access internet. So I set the global proxy of terminal.</p>\n<p>I executed a program and it needs to upload image to image bed, which is an server in China. The procedure is: the program executes uploading commands via terminal, while the terminal has proxy settings. So it’s really awkward that the uploading failed.</p>","r":{"minutes":0.42,"words":126},"y":"a","t":"Program executed by Linux Terminal has the same proxy with the terminal?"},["/posts/Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal?.html","/posts/Program_executed_by_Linux_Terminal_has_the_same_proxy_with_the_terminal?.md"]],
  ["v-8ef32474","/posts/Redirect_terminal_output_to_clipboard..html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>This post is about using <code>xclip</code> command to redirect the output of a command to clipboard.</p>\n<ol>\n<li>install <code>xclip</code></li>\n<li>use command <code>cat output | xclip -selection clipboard</code> to redirect the flow</li>\n<li>(Optional) Set an alias.<br>\ne.g. <code>alias clip=”xclip -selection clipboard”</code></li>\n<li>Remember that the alias needs to be added to <code>~/.bashrc</code> to take effect permanently.</li>\n</ol>","r":{"minutes":0.26,"words":78},"y":"a","t":"Redirect terminal output to clipboard."},[":md"]],
  ["v-7942285c","/posts/Set_Bluetooth_off_as_default_at_rebooting_in_Fedora.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>We need to edit the file <code>/etc/bluetooth/main.conf</code></p>\n<p>Find the line <code>AutoEnable=true</code> , change it to <code>AutoEnable=false</code> and voila, Bluetooth is off as default when rebooting.</p>\n","r":{"minutes":0.18,"words":55},"y":"a","t":"Set Bluetooth off as default at rebooting in Fedora"},[":md"]],
  ["v-0b391cc6","/posts/Set_default_editor_in_Linux.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>This need to edit the config file of the shell you are using.</p>\n<p>For example, I am using zsh right now so that I have to change <code>~/.zshrc</code> .</p>\n<p>All I have to do is add a command at the end of the config file and then source it.</p>\n<pre><code>export EDITOR=\"/usr/bin/vim\"\nsource ~/.zshrc\n</code></pre>","r":{"minutes":0.25,"words":75},"y":"a","t":"Set default editor in Linux"},[":md"]],
  ["v-ef96b926","/posts/Typora_upgit_tcyun__upload_img_to_imgbed.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p>\n<ol>\n<li>Set typora options</li>\n</ol>\n<figure><img src=\"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png\" alt=\"image-20240205132414965\" tabindex=\"0\" loading=\"lazy\"><figcaption>image-20240205132414965</figcaption></figure>","r":{"minutes":0.43,"words":129},"y":"a","t":"Typora+upgit+tcyun: upload img to imgbed"},["/posts/Typora+upgit+tcyun:_upload_img_to_imgbed.html","/posts/Typora+upgit+tcyun:_upload_img_to_imgbed.md"]],
  ["v-69b7f471","/posts/Useful_script_sharing__easy_git_push.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>When dealing with github repositories, it’s often the case that we should use <code>git add .; git commit -s -m \"\"; git push</code> to push our changes.</p>\n<p>So that I am gonna share a simple shell script that could do some simple git operations.</p>\n<pre><code>acp() {\n    if [ ! $# -eq 1 ]; then\n        echo \"Invalid number of arguments. Usage: acp \\\"commit message\\\"\"\n        return 1\n    fi\n    git add .\n    git commit -s -m \"$1\"\n    git push\n}\n</code></pre>","r":{"minutes":0.34,"words":102},"y":"a","t":"Useful script sharing: easy git push"},["/posts/Useful_script_sharing:_easy_git_push.html","/posts/Useful_script_sharing:_easy_git_push.md"]],
  ["v-45f803a1","/posts/Using_ssh_through_SOCKS5_proxy..html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>Below are operations on Fedora39.</p>\n<ol>\n<li>Download <code>netcat</code> . In Ubuntu-like system, <code>nc</code> is needed.</li>\n<li>Edit <code>~/.ssh/config</code></li>\n<li>Add lines like:</li>\n</ol>\n<!---->\n<pre><code>Host github.com\n   ProxyCommand netcat -X 5 -x 127.0.0.1:7890 %h %p\n</code></pre>","r":{"minutes":0.56,"words":169},"y":"a","t":"Using ssh through SOCKS5 proxy."},[":md"]],
  ["v-3adbcca4","/posts/Vue_Download_failure_about_Ipv4.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>Today I ran into fail when downloading vue using command <code>npm install -g @vue/cli</code> , after changing several mirror registry, the fail was still there.</p>\n<p>So I found out that some mirror websites can only be accessed by ipv4, so that we need to choose ipv4 first when accessing these registries.</p>","r":{"minutes":0.29,"words":86},"y":"a","t":"Vue Download failure about Ipv4"},[":md"]],
  ["v-01b17e9e","/posts/Watch_a_process_with_pid_under_Linux..html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>We need <code>pidstat</code> command to monitor processes.</p>\n<p>e.g.: <code>pidstat -p [pid] 1</code> , this can print the status each second.</p>\n","r":{"minutes":0.15,"words":44},"y":"a","t":"Watch a process with pid under Linux."},[":md"]],
  ["v-7fe25bfc","/posts/git_push_fatal__The_remote_end_hung_up_unexpectedly.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>stackoverflow link: <a href=\"https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly\" target=\"_blank\" rel=\"noopener noreferrer\">https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly</a></p>\n<p>This usually happens when the files we push exceeds buffer size. So we can manually change postBuffer size.</p>","r":{"minutes":0.22,"words":66},"y":"a","t":"git push fatal: The remote end hung up unexpectedly"},["/posts/git_push_fatal:_The_remote_end_hung_up_unexpectedly.html","/posts/git_push_fatal:_The_remote_end_hung_up_unexpectedly.md"]],
  ["v-31f36298","/posts/git_rebase_and_git_amend.html",{"a":"B4night","d":1707091200000,"l":"February 5, 2024","c":["Useful Skills"],"g":[],"e":"\n<p>The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.</p>\n<ol>\n<li>Set typora options</li>\n</ol>\n<img alt=\"\" class=\"bg km ms c\" width=\"700\" height=\"257\" loading=\"lazy\" role=\"presentation\" src=\"https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png\" style=\"box-sizing: inherit; vertical-align: middle; background-color: #ffffff; width: 680px; max-width: 100%; height: auto;\">","r":{"minutes":3.41,"words":1022},"y":"a","t":"git rebase and git amend"},[":md"]],
  ["v-3706649a","/404.html",{"y":"p","t":""},[]],
  ["v-e1e3da16","/posts/",{"y":"p","t":"Posts"},[]],
  ["v-5bc93818","/category/",{"y":"p","t":"Category","I":false},[]],
  ["v-744d024e","/tag/",{"y":"p","t":"Tag","I":false},[]],
  ["v-e52c881c","/article/",{"y":"p","t":"Articles","I":false},[]],
  ["v-154dc4c4","/star/",{"y":"p","t":"Star","I":false},[]],
  ["v-01560935","/timeline/",{"y":"p","t":"Timeline","I":false},[]],
  ["v-b76cabe4","/category/useful-skills/",{"y":"p","t":"Useful Skills Category","I":false},[]],
]
