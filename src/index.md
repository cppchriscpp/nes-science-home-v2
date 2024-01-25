---
title: nes.science 
---

# nes.science

This domain is a home to a bunch of random NES stuff I've done over time. My main website is [cpprograms.net](https://cpprograms.net), but this tries to 
isolate all of the retro gaming stuff into one spot.

## Games, Projects and More

### [Puzzle Game Maker](https://puzzle.nes.science)

This is a puzzle game maker I wrote, which will let you make your own game with up to 64 levels, playable on 
a real nes! (Or an emulator). 

It aims to be simple enough for anyone to figure out! It includes default art and music, with the option
to substitute your own.


### [NES Starter Kit](https://cppchriscpp.github.io/nes-starter-kit)

NES Starter Kit is s a fully-fledged starter kit for NES games. It is the source to a top-down adventure game, alongside all of the tools needed to change it. 
It also comes with a guide to changing everything about it, which could also be titled "The dummy's guide to creating an NES game".

The idea is, download this (either via git or a zip file), set up the tools, run the game, then tweak it and make your own! With the right hardware, you can even play your game on your own NES.


## Tutorials

### [Nerdy Nights Mirror](https://nerdy-nights.nes.science)

This is a fully-featured backup of the nerdy nights tutorials to get started with NES development. 

I rehosted this off the nintendoage forums, in case anything bad ever happens to it. There is also a downloadable version, as well as a PDF created by 
[Fuzzy](https://fuzzytek.ml/).

[Download static copy](https://nerdy-nights.nes.science/full_site.zip)

[Download PDF Version.](https://nerdy-nights.nes.science/downloads/Nerdy-Nights-NES-Tutorials-v1.pdf)


## Retro Dev Tools

### [create-nes-game](https://cppchriscpp.github.io/create-nes-game)

create-nes-game is a command line tool that creates a simple hello world game for the NES, alongside all build tools you need, and a ready-to-go emulator.

All you have to do is answer a series of multiple-choice questions about what language you want, a mapper, and optional features like libraries.

The tool will give you a git-ready folder full of code, which it can be used to compile and run. (and even unit test, if you want!)


### [nes-test](https://cppchriscpp.github.io/nes-test)

A simple jasmine + mesen-based test runner for the NES. Validate that your generated roms have the proper size/signature, and do the right things when you run them.

Has integration with cc65 output and create-nes-game, so you can inspect C/asm variables, as well as compare screenshots. 


### [2Bit Tile Generator](https://2bit-tile-generator.nes.science)

This is a quick-and-dirty react app put together to generate some simple tiles for retro-styled games. 

It directly targets the Nintendo gameboy and NES, but may be able to be used with other consoles as well.

It outputs png files, as well as NES-compatible chr and pal files.


### [NES Mapper Picker](https://mapper.nes.science)

This is a pretty simple vue app meant to allow you to pick what mapper best works for you based on a varied set of parameters.

There are a few tools out there that already do this, but I've found that they generally have one of two pitalls - either they do not let you change 
your mind without going through the whole selection process again, or they just don't consider the features I want.


### [NEZ Fork](https://gh.nes.science/nez)

This is a fork of the web-based Nez emulator to make it more friendly to embedding games. 
I use this on my own website to show off the various games and demos I've made.
