---
author: B4night
title: Set default editor in Linux
tags: []
categories:
  - Useful Skills
  - Set default editor in Linux.md
date: 2024-02-05
---

# Set default editor in Linux

This need to edit the config file of the shell you are using.

For example, I am using zsh right now so that I have to change `~/.zshrc` .

All I have to do is add a command at the end of the config file and then source it.

    export EDITOR="/usr/bin/vim"
    source ~/.zshrc
