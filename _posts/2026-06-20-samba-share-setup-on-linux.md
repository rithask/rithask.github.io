---
layout: post
title: samba share setup on Linux
tags:
  - linux
  - homelab
reading_time: 2
description: guide on setting up samba share on linux and accessing them from other machines
permalink: /samba-share-on-linux/
---
1. install samba first
```shell
	sudo apt install samba
```
2. configure samba conf file located at `/etc/samba/smb.conf`
3. add the entry of the directory that you want to share at the end of the file
	1. start with \[\<name of the share\>\]
	2. path - path of the directory you want to share (required)
	3. comment - a little description of what you are sharing (optional)
	4. volume - defines a volume name to the share. otherwise defaults to the name of the share. (optional)
	5. guest ok - default is no - can be accessed by guest or not(optional)

example:
```bash
[myshare]
  path = /mnt/ship/media
  comment = Media files
  guest ok = no
```

note: samba users are different from linux users. to create a samba user, run `smbpasswd -a <username>` as root and input a password. use this username and password to login when asked.

that's it. now you can access your shared folder from other machines.

on macOS,
1. open finder
2. click on 'Go' > 'Connect to Server' from menubar. or you can press Cmd + K.
3. type in your machine's IP address (smb://<ip_address>) and click on 'Connect'
4. type in the samba username and password when asked if you are a registered user. or click on 'Guest' if you have enable guest share in the `smb.conf`
5. select the shares that you want to mount
6. you can see the mounted directories in the finder

on iOS,
1. open Files
2. click on the three dots seen on the top right of the screen
3. click on 'Connect to Server'
4. type in your machine's IP address (smb://<ip_address>) and proceed
5. type in the samba username and password when asked if you are a registered user. or click on 'Guest' if you have enable guest share in the `smb.conf`
6. you can see the mounted shares under 'Shared' in the 'Browse' tab

on Windows,
1. open Explorer
2. type in your machine's IP address (\\\\<ip_address>) and press Enter
3. type in the samba username and password when asked
4. you can see the shares now