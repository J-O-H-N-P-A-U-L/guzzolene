---
title: Atari Lynx development on Mac OSX
layout: post

id: "2"
price: 129.00
path: "/atari-lynx/"
description: "Atari Lynx development on Mac OSX"
---

Back when I was a kid in the early nineties, Dad bought me an Atari Lynx II. He told me at the time that he'd much rather I spent my time building computer games than waste it simply playing them.

Fast forward to 2017 and I just so happen to have an Atari Lynx II, so why not make Dad proud and program my own game onto it?  

On top of all that, the Atari Lynx has an elegant retro look to it. It's still powerful enough to run games quickly. Sprites can be zoomed and rotated line by line allowing to make textured polygons, it has a four channel base of polynomial generators (or whatever the hell that means), and other things too..

After some research into this subject from which, of course, I've uncovered a distinct lack of information on getting an Atari lynx development environment up and running on Mac OSX.

So without further (or more) ado, I give you the method I have put together for setting up your development environment for Atari Lynx development on Mac OSX.

Visual Studio Code with C++ compiler:
I have opted to use Visual Studio Code with C++ complier for my Atari Lynx IDE. You are welcome to use whatever you want, even a text editor will do the trick (personally, I don’t mind a nice IDE) C/C++ support for Visual Studio Code is provided today as a preview of Microsofts ambition to enable cross-platform C and C++ development using VS Code on Windows, Linux, and Mac. 

Should you wish to use the same, this article will be enough too get you going:
https://code.visualstudio.com/docs/languages/cpp 

<h2>CC65</h2>
Cc65 is a compiler for the 6502 which is the processor of the Lynx. It comes with basic libraries to do some tricks. These libraries are portable on several platforms (c64, NES, ...) but with a lot of limitations. They are far from exploiting the capabilities of the entire console. cc65 seems to be quite limited level optimisation of the C, you have to do everything manually to have effective code and I think I might have to learn the 6502 assembler to build more Serious things. 

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
* add in the below lines which declare the new locations

export CC65_HOME="/usr/local/lib/cc65"<br />
export CA65_INC="/usr/local/lib/cc65/assuming"<br />
export CC65_INC="/usr/local/lib/cc65/cfg"<br />
export LD65_CFG="/usr/local/lib/cc65/lib"<br />
export LD65_OBJ="/usr/local/lib/cc65/obj"<br />

Now you will have an Atari Lynx game compiler that works on OSX

<h2>Atari Lynx Boilerplate</h2>
I'm working on converting a couple of open source Atari Lynx projects for use as a boilerplate that I will post up here as soon as I have these available.
The boilerplate will contain a complete project with makefile  to generate a .lnx file.  these will also become the base of my next project .

Also I'm currently using Handy SDL as my emulator for my Atari Lynx ROMS. 
Its still a little problematic  with my experiments and I’m currently working through these 
and plan to have everything running smoothly as my boilerplate comes together.  
For now, You can get yourself a copy of handy SDL here:
https://github.com/mozzwald/handy-sdl

Stay tuned for the forthcoming boilerplate and more info that I’ll post up as soon I put these together.

![Screen Shot 2017-01-02 at 10.25.25 am.](Screen-Shot-2017-01-02-at-10.25.25 am.png)
