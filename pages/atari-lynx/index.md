---
title: Atari Lynx development OSX
layout: post

id: "2"
price: 129.00
path: "/atari-lynx/"
description: "Atari Lynx development OSX"
---
#Atari Lynx development OSX

I just so happen to have an Atari Lynx II, so why not  program my own game onto it?  The device has an elegant retro look to it and is still powerful enough to allow to develop stuff quickly. Sprites can be zoomed and rotated line by line allowing to make textured polygons, its 4 channel base of polynomial generators, and some other nice gadgets. So here is a category of my site dedicated to my adventures with this console.

Visual Studio Code with C++ complier:
I have opted to use Visual Studio Code with C++ complier for my Atari Lynx IDE. You are welcome to use whatever you want, even a text editor will do the trick (personally, I don’t mind a nice IDE) C/C++ support for Visual Studio Code is provided today as a preview of Microsofts ambition to enable cross-platform C and C++ development using VS Code on Windows, Linux, and Mac. 

Should you wish to use the same, this article will be enough too get you going:
https://code.visualstudio.com/docs/languages/cpp

##CC65
Cc65 is a compiler for the 6502 which is the processor of the Lynx. It comes with basic libraries to do some tricks. These libraries are portable on several platforms (c64, NES, ...) but with a lot of limits. They are far from exploiting the capabilities of the bottom console. So I'll probably write my own toolkit to handle everything. On the other hand cc65 seems to be quite limited level optimisation of the C, you have to do everything manually to have effective code AND i think I  will have to learn the 6502 assembler to build more Serious things. 

I've uploaded the sources, tools and documentation for the CC65 2.13.9 SVN 5944 which is a known stable build up to my github account.

Follow these steps to get rolling (just as closely as you can)

* download the latest version of cc65 git clone https://github.com/JPHUNTER/CC65-2.13.9-SVN-5944/blob/master/cc65-snapshot-sources-2.13.9.20121203.tar.bz2 
* decompress the archive cc65-snapshot-sources-2.13.9.20121203.tar.bz2 
* cd into cc65-snapshot-sources-2.13.9.20121203 so we can see what’s in the folder
* Make -f make/gcc.mak # start compilation
* Sudo make -f make/gcc.mak install # on installs!
* Manually copy the built file “sp65” from /cc65-snapshot-2.13.9.20121203/src/sp65/ to /usr/local/bin/
* next you will need to modify the shell path in OSX using terminal as per the following instructions:
* cd  (Move into home directory)
* nano .bash_profile (Create the .bash_profile file with a command line editor called nano)
*	Add in the below lines which declare the new locations

export CC65_HOME="/usr/local/lib/cc65"<br />
export CA65_INC="/usr/local/lib/cc65/assuming"<br />
export CC65_INC="/usr/local/lib/cc65/cfg"<br />
export LD65_CFG="/usr/local/lib/cc65/lib"<br />
export LD65_OBJ="/usr/local/lib/cc65/obj"<br />

Now you will have an Atari Lynx game compiler that works on OSX

##Atari Lynx Boilerplates
I'm working on converting a couple of open source Atari Lynx projects for use as boilerplates that I will post up here as soon as I have these available.
The boilerplates will contain a complete project with makefile  to generate a .lnx file.  these will also become the base of my next project .

Also I'm currently using Handy SDL as my emulator for my Atari Lynx ROMS. 
Its still a little problematic  with my experiments and I’m currently working through these 
and plan to have everything running smoothly as my boilerplate comes together.  
For now, You can get yourself a copy of handy SDL here:
https://github.com/mozzwald/handy-sdl

Stay tuned for the forthcoming boilerplate and more info that I’ll post up as soon I put these together.
