---
slug: /blog/23-08-2020-streaming-softwares
layout: blog
published: true
date: 2020-08-23
title: Softwares and online services to stream to Instagram
description: A review of them.
author: Mario Mey
username: mariomey
keywords: 
    - instagram
    - OBS studio
    - Linux
    - PC
    - instagram live
cover_image: ./cover.png
---

I'm Mario Mey, from Argentina. In the attempt of streaming from OBS to Instagram, I tried several softwares, services, codes, etc, until I find my (\*) best solution: Emulator from Android Studio. And I say "my" best solution because my system and my needs. I have Debian 10 (Linux) with a Ryzen 5 CPU and 16GB RAM. And I wanted to use all Instagram Live features.

This is a small review of softwares and services servers I tested. I will only talk about them in relation to using them to stream from OBS in my system (remember: Linux) to Instagram, for free.

IG: Instagram
IGL: Instagram Live

### Web pages / servers
#### InstaTV: 
[https://instatv.io/](https://instatv.io/)

<Image src="./instatv_.png" alt="InstaTV"/>

To stream to IGL, you have to pay.

#### Instafeed
[https://instafeed.me/](https://instafeed.me/)

<Image src="./instafeed_.png" alt="InstaFeed"/>

_First 5 streams are free! No limits!_

But then, to stream to IGL, you have to pay.

#### Loola.tv
[https://loola.tv/](https://loola.tv/)

<Image src="./loola_.png" alt="Loola"/>

You can stream to IGL for free, but you have a watermark. Someone told me that could bypass watermark... but  I don't think this could be possible now.

#### Restream and Castr
[https://restream.io/](https://restream.io/) [https://castr.io/](https://castr.io/)

You can use these servers to multi-stream to several destinations. One of them could be IG, but **you have to have the stream key that you can get using Streamon or YellowDuck.** They don't get the key automatically.

Also, to stream to IGL with these servers, you have to pay. In Castr, you can try it with a **7 days trial**. As I used (and payed) this service to multistream to YouTube and Facebook, I know that it streams to IG, but video is cropped at its sides to make your horizontal video a vertical one. So, 70% of video is lost. I asked them to rotate video befores stream to IG server... but the response was obvious: _no, we can't_.

### Software

Before talking about software, you need to know that the main purpose of them is to get the "stream key" (a "code") and it has no relation to OBS. Someone could use this software, get the key, send it to another person in the other part of the world, and this person use is with OBS. So...

#### YellowDuck
[https://yellowduck.tv/](https://yellowduck.tv/)

<Image src="./yellowduck_.png" alt="Yellow Duck"/>

No matter this page says "With Yellow Duck, you can instantly create a live stream on Instagram from your PC, Mac, Linux and more"... there's no downloadable Linux version of this software. So, I get Windows version and run it in a Win7 VirtualBox. So, I could get key from there. But (\*\*)...

#### instagramlive-php-master
[YouTube video](https://www.youtube.com/watch?v=BD4Kn8r4eQs)

<Image src="./php_.png" alt="PHP"/>

This spanish tutorial teachs you how to install some softwares (XAMPP and Composer) and use them to run some PHP code. In tutorial says that it is only for Windows... but I installed Linux versions of that softwares, installed some more needed packages, and I achieved run it in Linux. But this version has limited features in comparison with Windows version.

You have some commands you have to write in console to use it. First, you have to configure user and pass in a config.php file. Then, you run the code and, if it connects to IG account, it prints the stream key. You copy and paste it in OBS, start streaming in OBS and tell the code to start the real stream. Then, you can comment (using console), enable/disable comments, and some other functions that maybe or maybe not they are available in Linux (like "pin comments")

I used this software in a children broadcast show that I presented, for 16 days. But (\*\*)...

#### Streamon - Instagram Live Streamer
[https://getstreamon.com/](https://getstreamon.com/)

<Image src="./streamon_.png" alt="Streamon"/>

This is a very nice software! ;), but didn't use so much, because (\*\*)...

## (\*\*)
These softwares don't work with every IG accounts. If you are lucky, it works. If you are not... it doesn't. The account I used with the children show worked. Another account that I used... it worked. My account... IT DOESN'T <facepalm>.

## Android Emulators

So, I started trying Android emulators. I they can take a virtual camera and use it as phone camera (and the same with audio), I could use IG app inside it and use it with all its features.

#### Bluestacks
[https://www.bluestacks.com/](https://www.bluestacks.com/)

<Image src="./bluestacks_.png" alt="Bluestacks"/>

Only for Windows and Mac.

#### NoxPlayer
[https://es.bignox.com/](https://es.bignox.com/)

<Image src="./noxplayer_.png" alt="NoxPlayer"/>

Only for Windows

#### Other
I tested other emulators... with no so much luck. Now, I don't remember which they were, but finally I tried...

#### Emulator from Android Studio
[https://developer.android.com/studio](https://developer.android.com/studio)

<Image src="./androidstudio_.png" alt="Android Studio"/>

_"Android Studio is the official integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development."_ And that's it: the official Android emulator.

I have a Ryzen 5 with 16GB RAM and a SSD. It is not a quantum computer... but it is fast. Emulating hardware is CPU expensive, but my computer can handle it. CPU has 8 threads and one of them is for the emulator... and it works really fast.

<Image src="./android.studio.2.png" alt="Emulator"/>

I installed Android Studio, installed a hardware emulator (Pixie 2), installed a software (Android 10), started emulator, did initial configuration, log in with my Google account, go to Google Play, installed IG app and... voilà. Instagram running in my computer.

There is another post about Android Studio emulator, here: _coming soon_.
