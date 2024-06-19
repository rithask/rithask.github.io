---
layout: post
title: Ubuntu Boot Failure
tags:
  - linux
  - boot
  - ubuntu
  - solutions
  - fstab
reading_time: 3
description: Ubuntu machine failed to boot cause of the wrong fstab entry
image: 
permalink: /ubuntu-boot-failure/
---

I had an external HDD plugged in with my Optiplex machine which runs Ubuntu 22.04.4 LTS where I host several self hosted stuff. The external HDD is used to backup the config files of docker containers, some important files and all the photos I've backed up using Immich using Restic.

Recently my machine started failing to boot. No matter what password I typed in, it failed to go past this stage. All i got was
```
Give root password for maintenance (or type Control-D to continue):
```


After some google-fu, I came to the conclusion that the boot failure was due to the wrong entry in `fstab`. To automatically mount the external HDD, I had an `fstab` entry that mounts the HDD to a mount point. Due to some reason, the device label changed from `sdc` to `sdb` which failed Ubuntu to find the drive and mount it at boot.

This could've been avoided easily by adding `nofail` to the `fstab` entry so that Ubuntu will continue to boot even in the absence of the drive. The steps I followed was:
1. Root access
	1. Press `esc` at the boot to enter `GRUB` menu
	2. Press `e` to change boot parameters
	3. Append `rw init=/bin/bash` at the end of the line starting with `linux...`
	4. Press `ctrl + x` to exit
	5. This will take you to shell with root access
2. Modify `fstab`
	1. Change the wrong device name
	2. Add `nofail` to the entry
	3. Final fstab entry would look like
		`/dev/sdb1 /mnt/external ext4 defaults,nofail 0 2`
3. That's it

Now my machine boots up normally